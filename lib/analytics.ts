import { track } from "@vercel/analytics"

export type AnalyticsEvent =
  | "quiz_page_view"
  | "quiz_start"
  | "quiz_question_progress"
  | "quiz_complete"
  | "quiz_result_view"
  | "email_capture_view"
  | "email_capture_submit"

type PropertyValue = string | number | boolean | null | undefined
export type EventProperties = Record<string, PropertyValue>

const SLUG_PATTERN = /^[a-z0-9-]{1,120}$/
const LANDING_KEY = "df_landing_page"

/**
 * Single entry point for product analytics. Events go to Vercel Web Analytics
 * (already mounted in app/layout.tsx). To add or swap a provider, change only
 * this function. Never pass personal data (email addresses, free text) here.
 */
export function trackEvent(name: AnalyticsEvent, properties: EventProperties = {}) {
  const clean: Record<string, string | number | boolean | null> = {}
  for (const [key, value] of Object.entries(properties)) {
    if (value !== undefined && value !== "") clean[key] = value
  }
  try {
    track(name, clean)
  } catch {
    // Analytics must never break the page.
  }
}

export function sanitizeSourceSlug(value: string | null | undefined): string | undefined {
  if (!value) return undefined
  const slug = value.trim().toLowerCase()
  return SLUG_PATTERN.test(slug) ? slug : undefined
}

export function quizHrefForArticle(slug: string) {
  const safe = sanitizeSourceSlug(slug)
  return safe ? `/quiz?source=${safe}` : "/quiz"
}

function trimParam(value: string | null) {
  return value ? value.slice(0, 100) : undefined
}

/**
 * Attribution context for the current visit. Referrer is reduced to origin +
 * path (no query string) and landing page is kept only for this browser tab
 * session, so no persistent identifier is created.
 */
export function getAttribution(): EventProperties {
  if (typeof window === "undefined") return {}
  const params = new URLSearchParams(window.location.search)

  let referrer: string | undefined
  try {
    if (document.referrer) {
      const ref = new URL(document.referrer)
      referrer = `${ref.origin}${ref.pathname}`
    }
  } catch {
    referrer = undefined
  }

  let landingPage: string | undefined
  try {
    landingPage = sessionStorage.getItem(LANDING_KEY) ?? undefined
    if (!landingPage) {
      landingPage = window.location.pathname
      sessionStorage.setItem(LANDING_KEY, landingPage)
    }
  } catch {
    landingPage = window.location.pathname
  }

  return {
    referrer,
    landing_page: landingPage,
    source_article: sanitizeSourceSlug(params.get("source")),
    utm_source: trimParam(params.get("utm_source")),
    utm_medium: trimParam(params.get("utm_medium")),
    utm_campaign: trimParam(params.get("utm_campaign")),
  }
}
