import Link from "next/link"

export function ContinueJourney() {
  const links = [
    { label: "Take the Dosha Quiz", href: "/quiz" },
    { label: "View Sample Plans", href: "/samples" },
    { label: "Ayurvedic Tea Guide", href: "/blog/ayurvedic-tea-guide" },
    { label: "Morning Routine Guide", href: "/blog/ayurvedic-morning-routine" },
  ]

  return (
    <section style={{ marginTop: "60px", marginBottom: "40px" }}>
      <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px", color: "#1a1a1a" }}>
        Continue Your Ayurveda Journey
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              padding: "16px",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "6px",
              textDecoration: "none",
              color: "#5a5048",
              fontSize: "14px",
              fontWeight: 500,
              textAlign: "center",
              transition: "all 0.2s ease",
              backgroundColor: "#ffffff",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement
              el.style.borderColor = "rgba(0, 0, 0, 0.16)"
              el.style.backgroundColor = "#fdf8f3"
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement
              el.style.borderColor = "rgba(0, 0, 0, 0.08)"
              el.style.backgroundColor = "#ffffff"
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
