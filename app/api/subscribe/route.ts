import { NextResponse } from "next/server"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const KIT_FORM_ID = "9491836"
const KIT_SUBSCRIBE_URL = `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`
const KIT_TIMEOUT_MS = 10_000

type KitSubscribeResponse = {
  subscription?: {
    id?: number
    state?: string
    subscriber?: { id?: number; state?: string }
  }
  error?: string
  message?: string
}

function maskEmail(email: string) {
  const [local, domain] = email.split("@")
  return `${local.slice(0, 1)}***@${domain}`
}

function logKit(event: string, details: Record<string, unknown>) {
  console.log(JSON.stringify({ scope: "subscribe", provider: "kit", formId: KIT_FORM_ID, event, ...details }))
}

export async function POST(request: Request) {
  let email: unknown
  try {
    ;({ email } = await request.json())
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  if (typeof email !== "string" || email.length > 254 || !EMAIL_PATTERN.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  const apiKey = process.env.KIT_API_KEY
  if (!apiKey) {
    logKit("missing_api_key", {})
    return NextResponse.json({ error: "Signup is temporarily unavailable." }, { status: 503 })
  }

  const normalizedEmail = email.trim().toLowerCase()
  const maskedEmail = maskEmail(normalizedEmail)
  const startedAt = Date.now()

  try {
    const response = await fetch(KIT_SUBSCRIBE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ api_key: apiKey, email: normalizedEmail }),
      signal: AbortSignal.timeout(KIT_TIMEOUT_MS),
      cache: "no-store",
    })
    const durationMs = Date.now() - startedAt
    const body = (await response.json().catch(() => null)) as KitSubscribeResponse | null
    const subscription = body?.subscription

    if (!response.ok || !subscription?.id) {
      logKit("subscribe_failed", {
        status: response.status,
        durationMs,
        email: maskedEmail,
        kitError: body?.error ?? null,
        kitMessage: typeof body?.message === "string" ? body.message.slice(0, 200) : null,
        hasSubscription: Boolean(subscription?.id),
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
    })

    return NextResponse.json({ success: true })
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
