import Link from "next/link"

export const metadata = {
  title: "Why Your 40s Are Supposed to Feel Different: The Ayurvedic Map of Life",
  description:
    "Ayurveda divides life into three dosha-governed stages. Understanding the Pitta-to-Vata transition explains why your 40s feel different — and how to work with it.",
  openGraph: {
    title: "Why Your 40s Are Supposed to Feel Different: The Ayurvedic Map of Life",
    description:
      "Ayurveda divides life into three dosha-governed stages. Understanding the Pitta-to-Vata transition explains why your 40s feel different — and how to work with it.",
    url: "https://www.doshaflow.com/blog/ayurveda-aging",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/ayurveda-aging",
  },
}

export default function AyurvedaAgingPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f3]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold text-[#2c1a0e]">
          Dosha<span className="text-[#c49a6c]">Flow</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/blog" className="text-sm text-[#5c4a3a] hover:text-[#2c1a0e]">
            Blog
          </Link>
          <Link href="/quiz" className="text-sm bg-[#2c1a0e] text-white px-4 py-2 rounded-full hover:bg-[#3d2b1f]">
            Take the Quiz
          </Link>
        </div>
      </nav>

      {/* Article */}
      <main className="max-w-[680px] mx-auto px-6 py-12">
        <article>
          {/* Post Header */}
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">May 28, 2026</time>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
          Why Your 40s Feel Different: The Ayurvedic Stages of Life Explained
        </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none text-[#2c2218]" style={{ lineHeight: 1.75 }}>
            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              At some point in your late 30s or 40s, something shifts. The recovery that used to take a night now takes a
              week. The diet that worked for a decade stops working. The sleep that used to come automatically becomes
              something you have to manage. Western medicine mostly says: yes, this is aging, here are some supplements.
              Ayurveda says something more specific: what you are experiencing is a transition between life stages, each
              governed by a different dosha, and if you understand which stage you are in, you can work with it rather
              than against it.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "48px",
                marginBottom: "16px",
                color: "#2c1a0e",
              }}
            >
              The three stages of life.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              The first phase &mdash; from birth through adolescence, roughly the first thirty years &mdash; is Kapha
              time. Kapha governs growth, building, and structure. Children have the soft tissues, the heavy sleep, the
              easy weight gain, and the physical resilience that are characteristic of Kapha energy. The body is building
              itself. The second phase &mdash; from roughly the late 20s through the mid-50s &mdash; is Pitta time. Pitta
              governs ambition, transformation, metabolism, and achievement. This is why the 30s and 40s are typically
              the period of peak career drive, peak metabolic function, and peak intensity. The third phase &mdash; from
              the mid-50s onward &mdash; is Vata time. Vata governs movement, dryness, lightness, and deterioration. The
              natural drying and lightening of the body that happens with aging are Vata qualities expressing themselves
              at a life stage level.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?life,stages,aging,woman,graceful" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Ayurvedic life stages" />

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "48px",
                marginBottom: "16px",
                color: "#2c1a0e",
              }}
            >
              What the Pitta-to-Vata transition actually feels like.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              The shift most people notice and struggle with is the transition out of Pitta time. In the early 40s, the
              Pitta fire that has been running your metabolism, your drive, your recovery, and your hormones begins to
              modulate. For women, this is often experienced as perimenopause. For men, the equivalent shift is less
              dramatic but real: slower recovery, changing body composition, a shift in what the body needs. The changes
              feel like something is wrong because they are departures from a baseline that was itself a particular phase
              &mdash; not a permanent state. This is not decline in the Ayurvedic understanding. It is transition.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "48px",
                marginBottom: "16px",
                color: "#2c1a0e",
              }}
            >
              What changes, practically.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Sleep becomes lighter and more fragile &mdash; Vata governs the nervous system, and an increasingly Vata
              system means more easily disturbed sleep. The 3am wake-up, the difficulty returning to sleep &mdash; these
              are Vata signatures. Digestion becomes more irregular. The strong digestive fire of Pitta time gives way to
              more variable agni. Joints and skin become drier. Anxiety increases &mdash; elevated Vata means elevated
              mental activity, more worry, more difficulty being present. Recovery slows.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?middle,age,wellness,yoga,woman" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Midlife wellness and yoga" />

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "48px",
                marginBottom: "16px",
                color: "#2c1a0e",
              }}
            >
              How to work with it.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Routine becomes more important, not less. Consistent meal times, consistent sleep times, consistent
              morning practices. Oil becomes more important &mdash; Abhyanga directly addresses the dryness that Vata
              brings and maintains the moisture in tissues that Vata depletes. Food becomes more important &mdash;
              warming, nourishing, easy-to-digest food becomes the priority: cooked vegetables, warm soups, ghee, root
              vegetables, warm spiced milk at night. Herbs shift &mdash; Ashwagandha becomes even more central in Vata
              time, nourishing the nervous system and adrenal function. Triphala for digestion. Shatavari for women
              navigating the hormonal transition.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?ayurvedic,oil,massage,abhyanga,routine" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Ayurvedic self care for aging" />
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginTop: "48px",
                marginBottom: "16px",
                color: "#2c1a0e",
              }}
            >
              The opportunity in the transition.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              There is something Ayurveda says about Vata time that the Western conversation about aging almost never
              says: it can be the most spiritually clear and mentally rich phase of life, if the body is maintained well
              enough to support it. Vata qualities &mdash; lightness, movement, subtlety, creativity &mdash; are the
              qualities of the meditating mind, the creative mind, no longer primarily oriented toward achievement. The
              problem most people have with aging is that they experience Vata&apos;s challenges without the practices
              that would let them access Vata&apos;s gifts. This is what Ayurveda offers in mid-life: not a way to stay
              in Pitta time, but a way to navigate Vata time with enough stability to actually enjoy it.
            </p>

            <div
              style={{
                marginTop: "48px",
                padding: "32px",
                backgroundColor: "#f5ece0",
                border: "1px solid #e8d9c5",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "18px", fontWeight: 600, color: "#2c1a0e", marginBottom: "20px" }}>
                Your current dosha balance changes across life stages.
              </p>
              <Link
                href="/quiz"
                style={{
                  display: "inline-block",
                  backgroundColor: "#9a7a5a",
                  color: "#fdf8f3",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                }}
              >
                Take the Free Dosha Quiz
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
