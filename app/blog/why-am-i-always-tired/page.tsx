import Link from "next/link"
import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "Why Am I Always Tired? The Ayurvedic Explanation by Dosha Type",
  description: "Persistent fatigue has three different causes in Ayurveda — Vata depletion, Pitta inflammation, and Kapha sluggishness. Identifying yours changes everything about what to do.",
  openGraph: {
    title: "Why Am I Always Tired? The Ayurvedic Explanation by Dosha Type",
    description: "Persistent fatigue has three different causes in Ayurveda — Vata depletion, Pitta inflammation, and Kapha sluggishness. Identifying yours changes everything about what to do.",
    url: "https://www.doshaflow.com/blog/why-am-i-always-tired",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/why-am-i-always-tired",
  },
}

export default function WhyAmIAlwaysTiredPage() {
  return (
    <ArticleLayout>
      <main className="max-w-[680px] mx-auto px-6 py-12">
        <article>
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">June 5, 2026</time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              Why Am I Always Tired? The Ayurvedic Explanation by Dosha Type
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            There are two kinds of always tired. There is the kind that a good week of sleep would fix — the accumulated debt of a few late nights and a stressful period. And there is the other kind: the chronic, structural fatigue that persists regardless of how much sleep you get, that has been present for long enough that you have started to think of it as just how you are. Ayurveda distinguishes between these two clearly, and the interventions are completely different.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            The Ayurvedic Framework for Fatigue.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            Vata fatigue is depletion — the nervous system and adrenals have been running beyond reserves for a sustained period. Characteristic quality: wired but tired. Alert but not rested. Cannot wind down but cannot function at full capacity. Insomnia, anxiety, and scattered thinking accompany this pattern. Pitta fatigue is inflammation — the body is directing energy toward managing an inflammatory burden. Characteristic quality: functional during the day, crashing in the evening. The 3pm slump. Skin issues, digestive inflammation, and irritability alongside fatigue. Kapha fatigue is heaviness — the metabolism is running slow and producing insufficient energy. Characteristic quality: sleeps eight or nine hours and wakes still tired. Difficulty starting, difficulty maintaining momentum, weight gain alongside fatigue.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            Vata Fatigue: What to Do.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            The intervention is nourishment and regulation, not stimulation — more stimulation deepens the depletion. Ashwagandha nightly — the most directly restorative herb for Vata depletion. Eat three warm, consistent meals — the adrenal system responds poorly to erratic blood sugar. Sleep before 10pm. Reduce stimulants — coffee is borrowing from tomorrow&apos;s energy; alcohol disrupts the REM sleep that does the actual nervous system repair.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            Pitta Fatigue: What to Do.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            The intervention is cooling and reducing inflammatory inputs. Reduce alcohol — almost always the single most impactful change for Pitta fatigue. Eat a cooling, anti-inflammatory diet. Brahmi and shatavari. Take genuine rest days — a day with no output, no performance, no goal is therapeutic in a specific way for Pitta.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            Kapha Fatigue: What to Do.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            The intervention is stimulation and movement — the opposite of what most people try when tired. Vigorous exercise before breakfast — the most directly effective intervention for Kapha fatigue. Reduce heavy food and dairy. Trikatu in the morning. Wake before 6am. See our <Link href="/blog/kapha-morning-routine" style={{color: "#c49a6c", textDecoration: "underline"}}>Kapha morning routine guide</Link> for complete instructions.
          </p>

          <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
            What All Three Patterns Share.
          </h2>

          <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
            Warm water first thing in the morning. Consistent meal times. No eating after 8pm. Triphala at night. Regular sleep schedule. Check our guides on <Link href="/blog/nervous-system-burnout" style={{color: "#c49a6c", textDecoration: "underline"}}>nervous system burnout</Link> and <Link href="/blog/signs-of-high-cortisol" style={{color: "#c49a6c", textDecoration: "underline"}}>signs of high cortisol</Link> for deeper understanding.
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
    </div>
  )
}
