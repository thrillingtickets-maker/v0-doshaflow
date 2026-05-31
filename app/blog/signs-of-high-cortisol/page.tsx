import Link from "next/link"

export const metadata = {
  title: "Signs of High Cortisol — And What Ayurveda Does About It",
  description:
    "Belly fat, waking at 3am, afternoon crashes — these are signs of elevated cortisol. Here is what Ayurveda identifies as the cause and the fix.",
  openGraph: {
    title: "Signs of High Cortisol — And What Ayurveda Does About It",
    description:
      "Belly fat, waking at 3am, afternoon crashes — these are signs of elevated cortisol. Here is what Ayurveda identifies as the cause and the fix.",
    url: "https://www.doshaflow.com/blog/signs-of-high-cortisol",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/signs-of-high-cortisol",
  },
}

export default function SignsOfHighCortissolPage() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-12">
        <article>
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">June 6, 2026</time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              Signs of High Cortisol — And What Ayurveda Does About It
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-[#2c2218]" style={{ lineHeight: 1.75 }}>
            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Cortisol is your primary stress hormone — released by the adrenal glands in response to perceived threat, regulating blood sugar, immune function, metabolism, and the sleep-wake cycle. In the right amounts, at the right times, it is essential. In the wrong amounts, chronically elevated, it is one of the most damaging conditions you can sustain. And chronic elevation is increasingly common. Not from acute stress — from the low-grade, never-fully-stopping background stress of modern life.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Signs Your Cortisol Is Elevated.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              <strong>Weight gain concentrated around the abdomen</strong> while arms and legs remain relatively thin — cortisol directs fat storage to visceral tissue. <strong>Sleep disruption, particularly waking between 2-4am</strong> with a racing mind — this is the cortisol peak occurring at the wrong time. <strong>Afternoon energy crash followed by a second wind in the late evening</strong> — this inverted rhythm is characteristic of HPA axis dysregulation. <strong>Cravings for salty and sweet foods, particularly in the afternoon</strong> — the adrenal glands require both, and chronic depletion creates strong cravings. <strong>Frequent illness or slow recovery</strong> — cortisol suppresses immune function when chronically elevated. <strong>Feeling constantly wired but tired.</strong> <strong>Reduced libido and menstrual irregularities</strong> — the body deprioritises reproduction under chronic stress. <strong>Brain fog, poor memory, difficulty concentrating.</strong>
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?stressed,person,tired,burnout,exhausted" style={{width: "100%", borderRadius: "8px", margin: "32px 0"}} alt="Signs of high cortisol and burnout" />
              Ayurveda does not use the word cortisol. But the condition maps clearly onto Vata-Pitta imbalance: the depletion and dysregulation of Vata combined with the heat and intensity of excessive Pitta. The Ayurvedic term for adrenal-adjacent depletion is Ojas depletion — the erosion of the vital essence that governs immunity, resilience, and the body's deepest reserves. The causes of Ojas depletion in the classical texts read like a description of modern overachievement culture: excessive work, insufficient sleep, irregular eating, constant stimulation, chronic anxiety, and overuse of stimulants.
            <img src="https://source.unsplash.com/featured/800x450/?adrenal,stress,herbs,adaptogen,natural" style={{width: "100%", borderRadius: "8px", margin: "32px 0"}} alt="Ayurvedic approach to stress" />
            <img src="https://source.unsplash.com/featured/800x450/?sesame,oil,massage,warm,ayurvedic" style={{width: "100%", borderRadius: "8px", margin: "32px 0"}} alt="Ayurvedic oil massage for cortisol" />

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              The Timeline.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Cortisol dysregulation that has developed over years does not resolve in days. The realistic timeline for meaningful improvement with a consistent Ayurvedic intervention is 8-12 weeks. The herbs work slowly. The lifestyle changes compound. Be patient with the system.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <div style={{ 
              backgroundColor: "#f5ede1", 
              padding: "24px", 
              borderRadius: "8px", 
              marginTop: "40px",
              marginBottom: "40px",
              borderLeft: "4px solid #c49a6c"
            }}>
              <p style={{ marginBottom: "16px", lineHeight: 1.75, fontWeight: 500 }}>
                Cortisol dysregulation patterns differ by constitution.
              </p>
              <Link href="/quiz" className="inline-block bg-[#2c1a0e] text-white px-6 py-2 rounded-full hover:bg-[#3d2b1f] text-sm font-medium">
                Take the Free Dosha Quiz
              </Link>
            </div>

            <p style={{ marginBottom: "20px", lineHeight: 1.75, fontStyle: "italic" }}>
              Alex is the founder of DoshaFlow. <Link href="/quiz" className="text-[#c49a6c] hover:underline">Take the dosha quiz</Link> · <Link href="/blog" className="text-[#c49a6c] hover:underline">Read more articles</Link>
            </p>
          </div>
        </article>
      </main>
    )
  )
}
