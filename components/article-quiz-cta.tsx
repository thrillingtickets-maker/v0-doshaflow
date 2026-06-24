import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Inline, editorial conversion CTA promoting the Dosha Quiz. Designed to sit
 * within long-form article copy (after the intro). Calm, premium tone and warm
 * DoshaFlow styling; responsive (button drops below the copy on narrow screens).
 */
export function ArticleQuizCta() {
  return (
    <aside
      aria-label="Take the Dosha Quiz"
      style={{
        margin: "44px 0",
        padding: "28px 32px",
        borderRadius: "14px",
        background: "linear-gradient(135deg, #faf6f0 0%, #f3ece1 100%)",
        border: "1px solid #e6dac8",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1 1 300px", minWidth: 0 }}>
        <div
          style={{
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#b5763a",
            marginBottom: "10px",
            fontWeight: 600,
          }}
        >
          Start with your constitution
        </div>
        <p
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "19px",
            lineHeight: 1.5,
            color: "#2c1a0e",
            margin: 0,
            fontWeight: 500,
          }}
        >
          Not sure which dosha is shaping how you feel? A two-minute quiz points you toward the guidance that fits you.
        </p>
      </div>
      <Link
        href="/quiz"
        style={{
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "13px 24px",
          background: "#b5763a",
          color: "#ffffff",
          borderRadius: "8px",
          fontSize: "15px",
          fontWeight: 600,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        Take the Dosha Quiz
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </aside>
  )
}
