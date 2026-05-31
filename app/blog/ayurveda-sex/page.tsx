"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function AyurvediaSexPage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Ayurvedic Guide to Vitality and Sexual Health: Vajikarana Explained"
        category="article"
        date="May 30, 2026"
        highlightWord="Vitality"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Ayurveda has eight classical branches of medicine. Seven of them get talked about in Western wellness circles. The eighth — Vajikarana, the branch dedicated to sexual health and vitality — tends to get quietly omitted. This is partly cultural squeamishness and partly the sanitised version of Ayurveda that arrived in the West in the 1970s. The original texts have no such squeamishness. Charaka dedicates an entire section to Vajikarana, treating sexual vitality as a fundamental dimension of health — not separate from it, not morally charged, just part of the system.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What Vajikarana actually is.</h2>
            <p>
              The word comes from Vaji — horse — and the root idea is vigour, potency, and reproductive vitality. But Vajikarana is not simply about sex drive or performance. In the classical understanding, sexual vitality is an expression of Ojas — the refined essence of all seven bodily tissues, produced at the end of a healthy digestive and metabolic process. Ojas governs immunity, mental clarity, emotional stability, and physical resilience. The connection to sexual vitality is not incidental: when the body is well-nourished, well-rested, and well-managed, it produces Ojas, and Ojas is expressed partly through vitality and reproductive health. The flip side: chronic depletion of sexual energy — through exhaustion, poor diet, excessive activity, or stress — is considered a direct drain on Ojas, with consequences that extend well beyond the bedroom. The texts describe chronic Ojas depletion as a precursor to serious illness.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The dosha dimension of sexual health.</h2>
            <p>
              Each dosha has a characteristic sexual nature in Ayurvedic terms. Vata types have variable desire — intense at times, completely absent at others, with no predictable pattern. Anxiety, exhaustion, and dryness affect sexual experience directly. Vata sexual depletion shows up as nervous exhaustion, insomnia, and emotional volatility. The recommendations for Vata are grounding and nourishing: warm foods, adequate sleep, regular routine, oil massage, and specific herbs like Ashwagandha. Pitta types have strong directed desire, but can tip into intensity, urgency, or frustration. Pitta depletion often shows up as inflammation, irritability, and the particular exhaustion of someone who has been operating at full intensity for too long. Cooling moderating practices — less heat, less alcohol, less competition — are the Pitta direction. Kapha types have the most sustained and stable desire of the three doshas, but can move toward passivity or low initiative. Kapha depletion is characterised by heaviness, emotional flatness, and low motivation. Stimulating practices — vigorous exercise, warming herbs, breaking routine — are what Kapha needs.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The herbs of Vajikarana.</h2>
            <p>
              The classical texts describe a specific category of Vajikarana herbs — substances that support reproductive tissue, build Ojas, and enhance vitality. Ashwagandha is the most studied and most broadly applicable. Clinical research has shown it to support testosterone levels, reduce cortisol, improve sperm quality, and reduce the stress response that is one of the most consistent suppressors of sexual vitality in modern life. Shatavari is the primary female Vajikarana herb. The name means she who has a hundred husbands. Clinically, it is used to support hormonal balance, reproductive tissue health, and the nervous system in women across all life stages. It is deeply nourishing and cooling, making it particularly suited to Pitta and Vata. Safed Musli, Kapikacchu (Mucuna pruriens), and Shilajit are among the other classical Vajikarana substances.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The lifestyle framework.</h2>
            <p>
              Beyond herbs, Vajikarana is a lifestyle system. Sleep is the primary builder of Ojas. Chronic sleep deprivation is one of the fastest routes to Ojas depletion. Diet matters — Ojas is built from the finest products of digestion. A diet that produces ama cannot produce good Ojas. The foods traditionally considered Ojas-building are warm, nourishing, and easy to digest: ghee, warm milk, dates, almonds, saffron. Stress is the most consistent Ojas depleter in modern life. The cortisol response that chronic stress maintains is a continuous drain on the most refined resources of the body. This is why Ashwagandha is central to Vajikarana.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Why this matters beyond the obvious.</h2>
            <p>
              The reason Vajikarana is worth understanding is not only sexual. Ojas — the underlying resource this branch of medicine is managing — is the same resource that determines energy, immunity, mental clarity, and emotional resilience. When practitioners say someone has good Ojas, they mean someone who is fundamentally vital — someone whose body is running efficiently, whose mind is clear, who recovers quickly and handles stress without collapse. Sexual vitality is one expression of that. It is not the only one. The practices of Vajikarana — quality sleep, nourishing food, stress reduction, specific herbs — are the same practices that build health across every other dimension.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12 mb-12">
            <Link
              href="/quiz"
              className="inline-block px-6 py-3 bg-[#C97F3D] text-white font-semibold rounded hover:bg-[#B86F2D] transition-colors"
            >
              Take the Free Dosha Quiz
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
