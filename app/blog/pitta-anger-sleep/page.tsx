import Link from "next/link"

export const metadata = {
  title: "Pitta and Anger: Why You Are Irritable, Inflamed, and Not Sleeping",
  description: "Pitta imbalance causes anger, skin inflammation, acid reflux, and the 10pm-2am sleep disruption pattern. Here is what is happening and what actually helps.",
  openGraph: {
    title: "Pitta and Anger: Why You Are Irritable, Inflamed, and Not Sleeping",
    description: "Pitta imbalance causes anger, skin inflammation, acid reflux, and the 10pm-2am sleep disruption pattern. Here is what is happening and what actually helps.",
    url: "https://www.doshaflow.com/blog/pitta-anger-sleep",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/pitta-anger-sleep",
  }
}

export default function PittaAngerSleepPage() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-12">
        <article>
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">June 2, 2026</time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              Pitta and Anger: Why You Are Irritable, Inflamed, and Not Sleeping
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            If you find yourself getting disproportionately angry, if you lie awake mentally replaying arguments that have not happened yet, if your skin flares when you are stressed and your sleep is light and hot — this is Pitta talking. Pitta is the dosha of fire and water. It governs metabolism, transformation, digestion, ambition, and the capacity for intensity that makes Pitta types effective, driven, and often difficult to live with when they are out of balance.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            Why Pitta Produces Anger.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            The Ayurvedic understanding of anger is not moral — it is physiological. Anger is the emotional expression of excess Pitta heat. When the fire that normally produces clarity and decisive action accumulates beyond the system&apos;s capacity to use it productively, it expresses as irritability, impatience, and the short fuse Pitta types recognise. Triggers are predictable: heat, hunger (Pitta&apos;s blood sugar sensitivity is acute — a skipped meal produces irritability with clockwork reliability), alcohol, spicy food, overwork, and the frustration of high standards not being met.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            Why Pitta Disrupts Sleep.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            Pitta time is 10pm to 2am — the period when Pitta&apos;s transformative, processing quality is active. The liver is doing its primary detoxification work. The mind, if still active, tends to be productively sharp in a way that is not helpful at midnight. The Pitta sleep problem is not difficulty falling asleep — it is waking between 10pm and 2am with a mind that is suddenly, annoyingly clear. The second Pitta sleep pattern: light, easily disturbed sleep. Heat — physical or in the room — fragments Pitta sleep directly.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            The Physical Signs That Pitta Is Elevated.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            Skin inflammation — acne, rosacea, eczema — that correlates with stress, alcohol, or dietary changes. Acid reflux, gastritis, loose stool, burning sensations. Excessive sweating with a strong odour. Heavy menstrual flow and heightened PMS.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            What Elevates Pitta.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            Alcohol — the most consistent Pitta aggravator. Spicy, sour, and salty food. Hot weather and midday sun. Overwork and competitive pressure. Criticism and injustice.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            What to Do About It.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            Cool the system — reduce alcohol, spicy food, sour and fermented foods. Add cooling foods: cucumber, coconut, leafy greens, fennel, coriander. See our <Link href="/blog/pitta-diet-plan" style={{color: "#c49a6c", textDecoration: "underline"}}>Pitta diet plan</Link> for complete guidance. Sleep earlier — getting into bed before 10pm means the body transitions into rest before Pitta time activates. Brahmi for the mind — the most cooling Ayurvedic herb for Pitta mental excess. Shatavari for women with hormonally-driven Pitta. Reduce competition with yourself — restorative yoga, walking, swimming counteract the Pitta tendency to turn everything into a performance metric. See our guide on <Link href="/blog/best-ayurvedic-tea-sleep" style={{color: "#c49a6c", textDecoration: "underline"}}>tea for sleep</Link> for herbal support.
          </p>

          <div style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f5ece0", border: "1px solid #e8d9c5", borderRadius: "16px", textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "16px", color: "#2c1a0e" }}>
              Ready to understand your dosha?
            </h3>
            <p style={{ marginBottom: "20px", color: "#5c4a3a" }}>
              The free dosha quiz takes 2 minutes and gives you a complete picture of your constitutional type and imbalances.
            </p>
            <Link
              href="/quiz"
              className="inline-block bg-[#2c1a0e] text-white px-8 py-3 rounded-full hover:bg-[#3d2b1f] font-medium transition-colors"
            >
              Take the Free Dosha Quiz
            </Link>
          </div>
        </article>
      </main>
    )
}
