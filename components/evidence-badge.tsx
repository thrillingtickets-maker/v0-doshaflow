export type EvidenceLevel = "stronger" | "emerging" | "traditional" | "founder"

export const EVIDENCE_LABELS: Record<EvidenceLevel, string> = {
  stronger: "Modern Evidence \u2014 Stronger",
  emerging: "Modern Evidence \u2014 Emerging",
  traditional: "Traditional Ayurvedic Use",
  founder: "Founder Experience",
}

export const EVIDENCE_TOOLTIP =
  "Evidence labels describe the basis for a claim, not a guarantee of effectiveness."

/**
 * Small label describing the basis for a claim. Shares the `.evidence-badge`
 * styles in app/globals.css with the static HTML badges used inside article
 * content in lib/posts.ts, so both render identically.
 */
export function EvidenceBadge({ level }: { level: EvidenceLevel }) {
  return (
    <span className={`evidence-badge evidence-badge--${level}`} title={EVIDENCE_TOOLTIP}>
      {EVIDENCE_LABELS[level]}
    </span>
  )
}

export function EvidenceNote() {
  return <p className="evidence-note">{EVIDENCE_TOOLTIP}</p>
}
