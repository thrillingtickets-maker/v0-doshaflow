// Single source of truth for post-date handling.
//
// post.date is stored in two formats across the dataset: ISO strings like
// "2026-09-21" and display strings like "September 21, 2026". Parse with
// parsePostDate for sorting, and render with formatPostDate so every surface
// shows the same "Month D, YYYY" format regardless of how the value is stored.

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const MONTH_INDEX: Record<string, number> = MONTH_NAMES.reduce(
  (acc, name, i) => {
    acc[name.toLowerCase()] = i
    acc[name.slice(0, 3).toLowerCase()] = i
    return acc
  },
  {} as Record<string, number>,
)

interface DateParts {
  year: number
  month: number // 0-based
  day: number
}

// Parse both "Month D, YYYY" / "Mon D, YYYY" and ISO "YYYY-MM-DD" into
// calendar parts. Returns null when the string matches neither shape.
function parseParts(date: string): DateParts | null {
  const s = date.trim()

  const named = s.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/)
  if (named) {
    const month = MONTH_INDEX[named[1].toLowerCase()]
    if (month === undefined) return null
    return { year: Number(named[3]), month, day: Number(named[2]) }
  }

  const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})/)
  if (iso) {
    return { year: Number(iso[1]), month: Number(iso[2]) - 1, day: Number(iso[3]) }
  }

  return null
}

// Sort key. Higher = more recent. Unparseable dates fall back to Date parsing,
// then to 0 so they sort last rather than throwing off the order.
export function parsePostDate(date: string): number {
  const parts = parseParts(date)
  if (!parts) {
    const fallback = new Date(date).getTime()
    return Number.isNaN(fallback) ? 0 : fallback
  }
  return new Date(parts.year, parts.month, parts.day).getTime()
}

// Canonical display format: "September 21, 2026". Built from calendar parts
// (not toLocaleDateString) so server and client render identically with no
// timezone drift. Falls back to the raw string if it can't be parsed.
export function formatPostDate(date: string): string {
  const parts = parseParts(date)
  if (!parts) return date
  return `${MONTH_NAMES[parts.month]} ${parts.day}, ${parts.year}`
}
