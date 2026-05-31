"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function AyurvdaBurnoutPage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Burnout Symptoms and Recovery: The Ayurvedic Explanation"
        category="article"
        date="May 28, 2026"
        highlightWord="Burnout"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              The word burnout has become so overused that it has almost lost meaning. We say we are burned out from a bad week. We say we are burned out after a hard month. And then there is the real thing — the thing that takes six months to build and six more to recover from, where your capacity for enthusiasm, creativity, and motivation quietly drains until you are going through the motions of a life that used to feel like yours.
            </p>

            <h2>The Ayurvedic mechanism of burnout.</h2>
            <p>
              In Ayurvedic terms, burnout is a depletion of ojas — the refined vital essence produced at the end of healthy digestion and metabolism, and that governs immunity, resilience, vitality, and the capacity for sustained engagement with life. Ojas takes time to build and depletes faster than it replenishes. It is built through adequate sleep, nourishing food, healthy digestion, meaningful rest, loving connection, and an alignment between your inner state and your outward activity. It is depleted by chronic stress, overwork, poor sleep, undereating, excessive stimulation, grief, disconnection, and what Ayurveda calls atiyoga — excessive use of the sense organs (too much screen time, too much noise, too much input). The modern knowledge worker&apos;s life is engineered to deplete ojas. Long hours, disrupted sleep, constant digital stimulation, meals eaten at desks, no real rest that is not scheduled productivity in disguise. The depletion is gradual and cumulative until the system hits a threshold — and then everything becomes difficult at once. This is burnout. Not a character flaw, not a failure of willpower, but a physiological depletion of the body&apos;s most refined vital substance.
            </p>

            <h2>Burnout and the doshas.</h2>
            <p>
              Burnout looks different depending on your constitution, and the differences matter for how you recover. Vata burnout tends to come on fast and presents as scattered, anxious depletion. The classic high-Vata burnout: you are doing too much, moving too fast, sleeping too little, eating irregularly. The mind races but produces less. The body feels wired and exhausted simultaneously — that particular insomnia where you are desperately tired but cannot turn off. Vata burnout often involves a sudden crash: one day you were managing everything, and then you were not. Pitta burnout is the archetypal high-achiever&apos;s burnout. It builds slowly, over months and years, in people who are extremely competent at overriding their body&apos;s signals. The symptoms start as irritability, cynicism, and perfectionism — the fire that used to fuel becomes sharp and self-directed. Then comes the inflammatory physical expression: skin issues, gut issues, headaches. Pitta burnout often does not look like burnout from the outside — the person is still producing, still technically functional, but the quality of engagement has hollowed out. The enthusiasm is gone, replaced by grim determination. Kapha burnout is the least recognised kind: not anxious exhaustion, not bitter exhaustion, but a deep, flat, motivational emptiness. The Kapha type who has been going through the motions for so long that they genuinely cannot connect to why anything matters. Depression is a close neighbour. The body feels heavy, the mind slow, the world slightly gray.
            </p>

            <h2>What is required to recover.</h2>
            <p>
              The Ayurvedic prescription for burnout is not take a vacation. Vacations help. But ojas takes months to rebuild after significant depletion, and a two-week vacation is not sufficient. What is required is a sustained change in the conditions that depleted it. Sleep, specifically early sleep — ojas rebuilds during sleep, particularly in the early hours when you sleep before 10pm. Nourishing food — burnout is not the time for intermittent fasting or caloric restriction. The depleted body needs to be fed with warm, cooked, easily digestible, nourishing food: ghee, whole grains, cooked vegetables, soups, lentils. Reduce sensory input — less screen time, quieter evenings, more time in nature. Meaningful rest — not scheduled productivity in disguise. Yoga nidra (guided deep relaxation) is one of the most ojas-building practices in the Ayurvedic tradition specifically for burnout recovery.
            </p>

            <h2>The herbs for burnout.</h2>
            <p>
              The Ayurvedic herbs for burnout are categorised as rasayanas — rejuvenating tonics specifically targeted at rebuilding ojas and vitality. Ashwagandha is the primary rasayana for the nervous system — it reduces cortisol, supports adrenal function, improves sleep quality, and gradually restores nervous system resilience. Several well-designed clinical trials confirm its effects on perceived stress, cortisol levels, and self-reported wellbeing. Take it consistently for at least eight weeks. Shatavari for women in burnout specifically — it is cooling, nourishing, and specifically rebuilds the reproductive and hormonal resilience that chronic stress disrupts. Brahmi for the cognitive dimension — the brain fog, poor memory, and difficulty concentrating that characterises depleted cognitive function. Brahmi restores calm, clear mental function without stimulation. Triphala nightly for the gut and ama clearing. Chyawanprash — a traditional Ayurvedic jam made of Amla and dozens of herbs — is one of the most comprehensively ojas-supporting things you can take.
            </p>

            <h2>The part nobody wants to hear.</h2>
            <p>
              Burnout recovery takes longer than you think it should. Most people underestimate this significantly. You take a few weeks off, sleep more, eat better, feel 60% better, go back to your previous pace, and wonder why you are depleted again six months later. This is the burnout recovery trap. The Ayurvedic timeline for genuine ojas recovery after significant burnout is three to six months of consistent, sustained practice. Not three months of perfect practice — three months of directional change, maintained even when it feels boring, even when the improvement is slow. The practitioners here are consistent on this point: you cannot speed up ojas recovery by adding more interventions. You can only provide the conditions and wait. What you can do in the meantime is reduce the rate of depletion. Every earlier bedtime, every nourishing meal, every quiet evening, every skipped alcohol, every moment of actual rest is either building ojas or at least not spending it.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-12 border-t border-border">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#C97F3D] text-white rounded-md hover:bg-[#b8703d] transition-colors"
            >
              Take the Free Dosha Quiz
            </Link>
          </div>

          {/* Related Articles */}
          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Related Articles
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/blog/signs-of-high-cortisol" className="text-[#C97F3D] hover:underline">
                Signs of High Cortisol
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/best-herbs-for-anxiety" className="text-[#C97F3D] hover:underline">
                Best Herbs for Anxiety
              </Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
