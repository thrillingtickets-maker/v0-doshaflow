import Link from "next/link"

export const metadata = {
  title: "Best Ayurvedic Tea for Anxiety: What to Drink, When, and Why",
  description:
    "The best Ayurvedic teas for anxiety by dosha type — ashwagandha, brahmi, jatamansi, and tulsi with practical blends and timing for Vata, Pitta, and Kapha anxiety.",
  openGraph: {
    title: "Best Ayurvedic Tea for Anxiety: What to Drink, When, and Why",
    description:
      "The best Ayurvedic teas for anxiety by dosha type — ashwagandha, brahmi, jatamansi, and tulsi with practical blends and timing for Vata, Pitta, and Kapha anxiety.",
    url: "https://www.doshaflow.com/blog/best-ayurvedic-tea-anxiety",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/best-ayurvedic-tea-anxiety",
  },
}

export default function BestAyurvedicTeaAnxietyPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f3]">
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

      <main className="max-w-[680px] mx-auto px-6 py-12">
        <article>
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">June 10, 2026</time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              Best Ayurvedic Tea for Anxiety: What to Drink, When, and Why
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-[#2c2218]" style={{ lineHeight: 1.75 }}>
            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              If you are anxious, you have probably been told to try chamomile tea. Chamomile is fine. But it is not what Ayurveda would prescribe for anxiety, and if you have been drinking chamomile every night and are still wired at 2am, you may be ready for a more specific approach. Ayurveda treats anxiety as a Vata disorder — a nervous system that is depleted, dysregulated, and in need of grounding and nourishment. The teas it recommends are not just calming. They are adaptogenic and they are chosen based on which type of anxiety you have and which dosha is involved.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              The Three Types of Anxiety in Ayurveda.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Vata anxiety is the most common: racing thoughts, physical restlessness, insomnia, and free-floating worry without a clear object. The 3am spiral. The nervous system that will not stop. Pitta anxiety is more focused: intense worry about specific outcomes, perfectionism, the tension of someone who cannot stop planning for problems that may not happen. Often accompanied by inflammation, skin flares, and a short fuse. Kapha anxiety is the least common: a heavy, stuck quality. Not racing thoughts but flatness, difficulty starting, emotional inertia, low motivation that reads as depression as much as anxiety.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?ashwagandha,adaptogen,herbs,roots" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Adaptogenic herbs for anxiety" />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Best Tea for Vata Anxiety.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Ashwagandha is the primary Vata anxiety herb — the most studied adaptogen in Ayurvedic medicine with multiple trials showing meaningful reductions in cortisol and anxiety scores. Takes 6-8 weeks to fully act. Take it at night in warm milk or warm water. Brahmi works directly on the mind — cooling and calming the mental activity that Vata anxiety produces. Brahmi tea in the afternoon is useful for anyone whose anxiety peaks in the 2-6pm window. Jatamansi is the Himalayan root used specifically for insomnia and mental unrest — particularly the 3am wake-up pattern. Steep as a tea and drink 30 minutes before bed. A practical Vata anxiety blend: ashwagandha root, brahmi leaf, jatamansi root, cardamom, licorice root. Steep 10 minutes. Drink warm in the evening.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Best Tea for Pitta Anxiety.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Brahmi is the best Pitta anxiety herb — cooling the overheated mind directly. Brahmi tea steeped for 10 minutes in the afternoon is the specific recommendation for the Pitta type. Shatavari addresses the hormonal component of Pitta anxiety, particularly relevant for women whose anxiety intensifies in the luteal phase. Rose petal tea is simple, accessible, and genuinely effective for Pitta — cooling and anti-inflammatory. A practical Pitta anxiety blend: brahmi, rose petal, shatavari, fennel, cardamom. Steep 8 minutes. Drink warm or slightly cooled in the afternoon.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?rose,petal,herbal,tea,calm" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Calming herbal tea with rose" />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Best Tea for Kapha Anxiety.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Kapha anxiety needs stimulation and movement rather than calming. Tulsi (Holy Basil) is the ideal Kapha anxiety herb — adaptogenic, mildly stimulating, appropriate for all doshas. Tulsi tea in the morning is a consistent Kapha recommendation. Ginger helps move the stagnant quality of Kapha anxiety and stimulates the digestive fire Kapha needs to function well emotionally.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              When to Drink.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              The timing of herbal teas matters. Vata anxiety herbs are best taken in the evening — the nervous system settles through the evening hours and wakes less activated in the morning. Pitta anxiety is most useful in the afternoon, when Pitta energy peaks. Kapha anxiety requires morning administration, when Kapha is most sluggish and needs the most support. The ritual of a warm cup held in both hands, sipped slowly, is itself calming — this is not incidental to the herbal action. Tea is not a supplement to be rushed; it is a practice.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?woman,tea,evening,calm,wellness" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Evening herbal tea ritual" />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              What to Look for in an Ayurvedic Anxiety Tea.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Organic, whole or roughly cut herbs — not finely ground powder in standard tea bags. Clear sourcing from India. No artificial flavours or sweeteners. Full-spectrum herbs rather than isolated extracts. And be honest about timelines — adaptogens work slowly. Ashwagandha produces meaningful cortisol reduction after 6-8 weeks of consistent daily use. The effects are not the same scale as chamomile and require a different commitment.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <div style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f5ece0", border: "1px solid #e8d9c5", borderRadius: "16px", textAlign: "center" }}>
              <p style={{ fontSize: "18px", fontWeight: 600, color: "#2c1a0e", marginBottom: "16px" }}>Not sure which type of anxiety applies to you?</p>
              <Link href="/quiz" style={{ display: "inline-block", backgroundColor: "#9a7a5a", color: "#fdf8f3", padding: "14px 28px", borderRadius: "9999px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
                Take the Free Dosha Quiz →
              </Link>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-[#e8d9c5] mt-24 py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-[#5c4a3a]">
          <p>© 2026 DoshaFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
