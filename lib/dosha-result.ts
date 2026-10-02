export type DoshaLetter = "V" | "P" | "K"

export const DOSHA_RESULT_TYPES = ["V", "P", "K", "VP", "VK", "PK", "T"] as const
export type DoshaResultType = (typeof DOSHA_RESULT_TYPES)[number]

export const DOSHA_LETTER_NAMES: Record<DoshaLetter, string> = { V: "Vata", P: "Pitta", K: "Kapha" }

export const DOSHA_RESULT_LABELS: Record<DoshaResultType, string> = {
  V: "Vata",
  P: "Pitta",
  K: "Kapha",
  VP: "Vata-Pitta",
  VK: "Vata-Kapha",
  PK: "Pitta-Kapha",
  T: "Tridoshic",
}

export function isDoshaResultType(value: unknown): value is DoshaResultType {
  return typeof value === "string" && (DOSHA_RESULT_TYPES as readonly string[]).includes(value)
}

/** Doshas ordered by percentage, highest first; ties keep V, P, K order. */
export function rankDoshas(vPct: number, pPct: number, kPct: number) {
  return (
    [
      { key: "V" as DoshaLetter, pct: vPct },
      { key: "P" as DoshaLetter, pct: pPct },
      { key: "K" as DoshaLetter, pct: kPct },
    ]
  ).sort((a, b) => b.pct - a.pct)
}

/**
 * The quiz's result rule, applied to the rounded percentages. Shared by the
 * quiz page and /api/subscribe so the server can verify a submitted result.
 */
export function classifyDoshaResult(vPct: number, pPct: number, kPct: number): DoshaResultType {
  const sorted = rankDoshas(vPct, pPct, kPct)
  const [first, second] = sorted
  const gap = first.pct - second.pct
  const allClose = sorted[0].pct - sorted[2].pct <= 15

  if (allClose) return "T"
  if (gap >= 15) return first.key
  const combo = [first.key, second.key].sort().join("")
  return combo === "PV" ? "VP" : combo === "KV" ? "VK" : combo === "KP" ? "PK" : first.key
}
