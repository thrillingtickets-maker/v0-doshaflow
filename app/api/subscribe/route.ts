import { NextResponse } from "next/server"
import {
  DOSHA_LETTER_NAMES,
  DOSHA_RESULT_LABELS,
  DOSHA_RESULT_TYPES,
  classifyDoshaResult,
  isDoshaResultType,
  rankDoshas,
  type DoshaResultType,
} from "@/lib/dosha-result"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const SLUG_PATTERN = /^[a-z0-9-]{1,120}$/
const UTM_PATTERN = /^[A-Za-z0-9._\-+ ]{1,100}$/
const KIT_FORM_ID = "9491836"
const KIT_API_BASE = "https://api.convertkit.com/v3"
const KIT_SUBSCRIBE_URL = `${KIT_API_BASE}/forms/${KIT_FORM_ID}/subscribe`
const KIT_TIMEOUT_MS = 10_000
const KIT_LOOKUP_TIMEOUT_MS = 5_000
const KIT_METADATA_TTL_MS = 10 * 60 * 1000

const RESULT_TAG_NAMES: Record<DoshaResultType, string> = {
  V: "Dosha: Vata",
  P: "Dosha: Pitta",
  K: "Dosha: Kapha",
  VP: "Dosha: Vata-Pitta",
  VK: "Dosha: Vata-Kapha",
  PK: "Dosha: Pitta-Kapha",
  T: "Dosha: Tridoshic",
}

const CORE_FIELD_KEYS = [
  "dosha_result",
  "primary_dosha",
  "secondary_dosha",
  "vata_percentage",
  "pitta_percentage",
  "kapha_percentage",
  "quiz_source",
] as const

type KitSubscribeResponse = {
  subscription?: {
    id?: number
    state?: string
    subscriber?: { id?: number; state?: string }
  }
  error?: string
  message?: string
}

type QuizResult = {
  resultType: DoshaResultType
  fields: Record<string, string>
}

type ParsedQuiz = { ok: true; quiz: QuizResult | null } | { ok: false; reason: string }

type KitMetadata = { tagIdsByName: Map<string, number>; fieldKeys: Set<string>; fetchedAt: number }

let metadataCache: KitMetadata | null = null

function maskEmail(email: string) {
  const [local, domain] = email.split("@")
  return `${local.slice(0, 1)}***@${domain}`
}

function logKit(event: string, details: Record<string, unknown>) {
  console.log(JSON.stringify({ scope: "subscribe", provider: "kit", formId: KIT_FORM_ID, event, ...details }))
}

function isPercentage(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 0 && value <= 100
}

function optionalString(value: unknown, pattern: RegExp, normalize?: (value: string) => string) {
  if (typeof value !== "string") return undefined
  const trimmed = normalize ? normalize(value.trim()) : value.trim()
  return pattern.test(trimmed) ? trimmed : undefined
}

/**
 * Quiz data is optional so the site's other signup forms keep working with
 * just an email. When present, the result is recomputed from the submitted
 * percentages using the quiz's own rule and must match exactly.
 */
function parseQuiz(body: Record<string, unknown>): ParsedQuiz {
  if (body.result_type === undefined) return { ok: true, quiz: null }

  const { result_type, primary_dosha, secondary_dosha, vata_percentage, pitta_percentage, kapha_percentage } = body
  if (!isDoshaResultType(result_type)) return { ok: false, reason: "invalid_result_type" }
  if (!isPercentage(vata_percentage) || !isPercentage(pitta_percentage) || !isPercentage(kapha_percentage)) {
    return { ok: false, reason: "invalid_percentage" }
  }
  const total = vata_percentage + pitta_percentage + kapha_percentage
  if (total < 98 || total > 102) return { ok: false, reason: "percentage_total" }
  if (classifyDoshaResult(vata_percentage, pitta_percentage, kapha_percentage) !== result_type) {
    return { ok: false, reason: "result_mismatch" }
  }

  const [first, second] = rankDoshas(vata_percentage, pitta_percentage, kapha_percentage)
  const primary = DOSHA_LETTER_NAMES[first.key]
  const secondary = DOSHA_LETTER_NAMES[second.key]
  if (primary_dosha !== primary || secondary_dosha !== secondary) {
    return { ok: false, reason: "dosha_rank_mismatch" }
  }

  const fields: Record<string, string> = {
    dosha_result: DOSHA_RESULT_LABELS[result_type],
    primary_dosha: primary,
    secondary_dosha: secondary,
    vata_percentage: String(vata_percentage),
    pitta_percentage: String(pitta_percentage),
    kapha_percentage: String(kapha_percentage),
    quiz_source: optionalString(body.source_article, SLUG_PATTERN, (v) => v.toLowerCase()) ?? "direct",
  }
  // Missing UTMs are omitted, not blanked, so a retake without campaign
  // parameters keeps the subscriber's earlier attribution.
  for (const key of ["utm_source", "utm_medium", "utm_campaign"] as const) {
    const value = optionalString(body[key], UTM_PATTERN)
    if (value) fields[key] = value
  }

  return { ok: true, quiz: { resultType: result_type, fields } }
}

async function kitGet<T>(path: string, apiKey: string): Promise<T> {
  const url = `${KIT_API_BASE}${path}${path.includes("?") ? "&" : "?"}api_key=${encodeURIComponent(apiKey)}`
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(KIT_LOOKUP_TIMEOUT_MS),
    cache: "no-store",
  })
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return (await response.json()) as T
}

/** Tag IDs and custom field keys, cached per server instance. */
async function getKitMetadata(apiKey: string): Promise<KitMetadata> {
  if (metadataCache && Date.now() - metadataCache.fetchedAt < KIT_METADATA_TTL_MS) return metadataCache

  const [tagsBody, fieldsBody] = await Promise.all([
    kitGet<{ tags?: { id: number; name: string }[] }>("/tags", apiKey),
    kitGet<{ custom_fields?: { key: string }[] }>("/custom_fields", apiKey),
  ])
  metadataCache = {
    tagIdsByName: new Map((tagsBody.tags ?? []).map((tag) => [tag.name.trim(), tag.id])),
    fieldKeys: new Set((fieldsBody.custom_fields ?? []).map((field) => field.key)),
    fetchedAt: Date.now(),
  }
  return metadataCache
}

/**
 * Removes any other result tag from a returning subscriber. Kit's v3 API
 * requires the secret key for tag removal, so this only runs when
 * KIT_API_SECRET is configured.
 */
async function removeStaleResultTags(params: {
  apiKey: string
  apiSecret: string
  email: string
  subscriberId: number
  currentTagId: number
  resultTagIds: Set<number>
}) {
  const { tags = [] } = await kitGet<{ tags?: { id: number }[] }>(`/subscribers/${params.subscriberId}/tags`, params.apiKey)
  const stale = tags.map((tag) => tag.id).filter((id) => id !== params.currentTagId && params.resultTagIds.has(id))

  const outcomes = await Promise.allSettled(
    stale.map(async (tagId) => {
      const response = await fetch(`${KIT_API_BASE}/tags/${tagId}/unsubscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ api_secret: params.apiSecret, email: params.email }),
        signal: AbortSignal.timeout(KIT_LOOKUP_TIMEOUT_MS),
        cache: "no-store",
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
    }),
  )
  return { staleCount: stale.length, failedCount: outcomes.filter((o) => o.status === "rejected").length }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    const parsed: unknown = await request.json()
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object")
    body = parsed as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const { email } = body
  if (typeof email !== "string" || email.length > 254 || !EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  const quizResult = parseQuiz(body)
  if (!quizResult.ok) {
    logKit("quiz_payload_rejected", { reason: quizResult.reason })
    return NextResponse.json(
      { error: "We couldn't save your quiz result. Please retake the quiz and try again." },
      { status: 400 },
    )
  }
  const quiz = quizResult.quiz

  const apiKey = process.env.KIT_API_KEY
  if (!apiKey) {
    logKit("missing_api_key", {})
    return NextResponse.json({ error: "Signup is temporarily unavailable." }, { status: 503 })
  }

  const normalizedEmail = email.trim().toLowerCase()
  const maskedEmail = maskEmail(normalizedEmail)
  const startedAt = Date.now()

  let kitFields: Record<string, string> | undefined
  let resultTagId: number | undefined
  let resultTagIds = new Set<number>()
  let personalizationIssues: string[] = []

  if (quiz) {
    try {
      const metadata = await getKitMetadata(apiKey)
      kitFields = Object.fromEntries(Object.entries(quiz.fields).filter(([key]) => metadata.fieldKeys.has(key)))
      const missingFields = Object.keys(quiz.fields).filter((key) => !metadata.fieldKeys.has(key))
      const missingCore = CORE_FIELD_KEYS.filter((key) => !metadata.fieldKeys.has(key))
      resultTagId = metadata.tagIdsByName.get(RESULT_TAG_NAMES[quiz.resultType])
      resultTagIds = new Set(
        DOSHA_RESULT_TYPES.map((type) => metadata.tagIdsByName.get(RESULT_TAG_NAMES[type])).filter(
          (id): id is number => typeof id === "number",
        ),
      )
      if (missingFields.length) logKit("custom_fields_missing", { email: maskedEmail, missingFields })
      if (missingCore.length) personalizationIssues.push("missing_core_fields")
      if (!resultTagId) {
        logKit("result_tag_missing", { email: maskedEmail, tagName: RESULT_TAG_NAMES[quiz.resultType] })
        personalizationIssues.push("missing_result_tag")
      }
    } catch (error) {
      logKit("metadata_lookup_failed", {
        email: maskedEmail,
        errorName: error instanceof Error ? error.name : "unknown",
        errorMessage: error instanceof Error ? error.message.slice(0, 200) : null,
      })
      personalizationIssues = ["metadata_lookup_failed"]
    }
  }

  try {
    const response = await fetch(KIT_SUBSCRIBE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email: normalizedEmail,
        ...(kitFields && Object.keys(kitFields).length ? { fields: kitFields } : {}),
        ...(resultTagId ? { tags: [resultTagId] } : {}),
      }),
      signal: AbortSignal.timeout(KIT_TIMEOUT_MS),
      cache: "no-store",
    })
    const durationMs = Date.now() - startedAt
    const kitBody = (await response.json().catch(() => null)) as KitSubscribeResponse | null
    const subscription = kitBody?.subscription

    if (!response.ok || !subscription?.id) {
      logKit("subscribe_failed", {
        status: response.status,
        durationMs,
        email: maskedEmail,
        kitError: kitBody?.error ?? null,
        kitMessage: typeof kitBody?.message === "string" ? kitBody.message.slice(0, 200) : null,
        hasSubscription: Boolean(subscription?.id),
        withQuizData: Boolean(quiz),
      })
      return NextResponse.json(
        { error: "We couldn't complete your signup. Please try again." },
        { status: 502 },
      )
    }

    // A form with double opt-in returns state "inactive" until the subscriber
    // clicks the confirmation email; Kit only counts them once confirmed.
    logKit("subscribe_ok", {
      status: response.status,
      durationMs,
      email: maskedEmail,
      subscriptionId: subscription.id,
      subscriptionState: subscription.state ?? null,
      subscriberId: subscription.subscriber?.id ?? null,
      subscriberState: subscription.subscriber?.state ?? null,
      resultType: quiz?.resultType ?? null,
      fieldsSent: kitFields ? Object.keys(kitFields) : [],
      tagSent: Boolean(resultTagId),
    })

    const subscriberId = subscription.subscriber?.id
    const apiSecret = process.env.KIT_API_SECRET
    if (quiz && resultTagId && resultTagIds.size > 1) {
      if (!apiSecret) {
        logKit("stale_tag_cleanup_skipped", { email: maskedEmail, reason: "missing_api_secret" })
      } else if (!subscriberId) {
        logKit("stale_tag_cleanup_skipped", { email: maskedEmail, reason: "missing_subscriber_id" })
      } else {
        try {
          const cleanup = await removeStaleResultTags({
            apiKey,
            apiSecret,
            email: normalizedEmail,
            subscriberId,
            currentTagId: resultTagId,
            resultTagIds,
          })
          logKit(cleanup.failedCount ? "stale_tag_cleanup_partial" : "stale_tag_cleanup_ok", {
            email: maskedEmail,
            ...cleanup,
          })
          if (cleanup.failedCount) personalizationIssues.push("stale_tag_cleanup_failed")
        } catch (error) {
          logKit("stale_tag_cleanup_failed", {
            email: maskedEmail,
            errorName: error instanceof Error ? error.name : "unknown",
            errorMessage: error instanceof Error ? error.message.slice(0, 200) : null,
          })
          personalizationIssues.push("stale_tag_cleanup_failed")
        }
      }
    }

    const personalized = Boolean(quiz) && personalizationIssues.length === 0
    if (quiz && !personalized) {
      logKit("personalization_partial", { email: maskedEmail, resultType: quiz.resultType, issues: personalizationIssues })
    }

    return NextResponse.json({ success: true, personalized })
  } catch (error) {
    logKit("subscribe_error", {
      durationMs: Date.now() - startedAt,
      email: maskedEmail,
      errorName: error instanceof Error ? error.name : "unknown",
      errorMessage: error instanceof Error ? error.message.slice(0, 200) : null,
    })
    return NextResponse.json(
      { error: "We couldn't complete your signup. Please try again." },
      { status: 500 },
    )
  }
}
