"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function PittaAngerSleep() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Pitta and Anger: Why You Are Irritable, Inflamed, and Not Sleeping"
        category="article"
        date="May 12, 2026"
        highlightWord="Anger"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              If you find yourself getting disproportionately angry, if you lie awake mentally replaying arguments that have not happened yet, if your skin flares when you are stressed and your sleep is light and hot — this is Pitta talking. Pitta is the dosha of fire and water. It governs metabolism, transformation, digestion, ambition, and the capacity for intensity that makes Pitta types effective, driven, and often difficult to live with when they are out of balance.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Why Pitta produces anger.</h2>
            <p>
              The Ayurvedic understanding of anger is not moral — it is physiological. Anger is the emotional expression of excess Pitta heat. When the fire that normally produces clarity, focus, and decisive action accumulates beyond the system&apos;s capacity to use it productively, it expresses as irritability, impatience, and the short fuse that Pitta types recognise in themselves. The triggers are predictable: heat (environmental or emotional), hunger (Pitta&apos;s blood sugar sensitivity is acute — a skipped meal produces irritability with clockwork reliability), alcohol, spicy food, overwork, and the specific frustration of high standards not being met. The pattern is usually described by Pitta types as: I know I am overreacting but I cannot stop. That is elevated Pitta — the fire is there, the awareness is there, the regulation is temporarily unavailable.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Why Pitta disrupts sleep.</h2>
            <p>
              Pitta time is 10pm to 2am — the period of the night when Pitta&apos;s transformative processing quality is active in the body. The liver is doing its primary detoxification work. The mind, if still active, tends to be productively sharp in a way that is not helpful at midnight. The Pitta sleep problem is not difficulty falling asleep — it is waking between 10pm and 2am with a mind that is suddenly, annoyingly clear. Planning for tomorrow. Solving a problem that was not pressing three hours ago. Replaying a conversation. This is Pitta engaging with its processing work and bringing the mind along. The second Pitta sleep pattern: light, easily disturbed sleep. Heat — physical heat in the body or in the room — fragments Pitta sleep directly. Pitta types often need a cooler room than their partner and feel worse after sleeping in warm conditions.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The physical signs that Pitta is elevated.</h2>
            <p>
              Skin inflammation — acne, rosacea, eczema, psoriasis — that correlates with stress, alcohol consumption, or dietary changes. The liver&apos;s inflammation-regulation capacity is directly linked to Pitta, and skin is the overflow valve. Acid reflux, gastritis, loose stool, or burning sensations in the digestive tract. Pitta&apos;s fire, when excessive, literally inflames the digestive lining. Excessive sweating, particularly with a strong odour. Heavy menstrual flow and heightened PMS in women.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What elevates Pitta.</h2>
            <p>
              Alcohol — the most consistent Pitta aggravator in modern life. Processed by the liver, which is the Pitta organ, alcohol directly increases inflammation and disrupts the liver&apos;s regulatory functions. Spicy, sour, and salty food — all three of these tastes increase Pitta. Hot weather and midday sun — Pitta is most elevated in summer and in the middle of the day. Overwork and competitive pressure — Pitta&apos;s drive is self-fuelling, and the high-intensity mode that feels productive eventually accumulates into excess that comes out as irritability and sleep disruption. Criticism and injustice — Pitta&apos;s emotional sensitivity is triggered most sharply by things that seem unfair, incorrect, or below standard.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What to do about it.</h2>
            <p>
              Cool the system — reduce alcohol, reduce spicy food, reduce sour and fermented foods. Add cooling foods: cucumber, coconut, leafy greens, sweet fruit, fennel, coriander. Ghee directly cools the Pitta digestive tract. Sleep earlier — getting into bed before 10pm means the body is transitioning into rest before Pitta time activates. This single change produces measurable improvements in Pitta sleep quality within a week. Brahmi for the mind — the most cooling Ayurvedic herb for Pitta mental excess. It does not sedate, it reduces the sharp reactive quality of elevated Pitta thinking. Brahmi tea in the afternoon is a consistent recommendation. Shatavari for women with hormonally-driven Pitta. Reduce competition with yourself — restorative yoga, walking, swimming counteract the Pitta tendency to turn everything into a performance metric.
            </p>
          </div>

          {/* Related Articles */}
          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Related Articles
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/blog/pitta-diet-plan" className="text-[#C97F3D] hover:underline">
                Pitta Diet Plan
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/best-herbs-for-anxiety" className="text-[#C97F3D] hover:underline">
                Best Herbs for Anxiety
              </Link>
            </p>
          </div>

          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Continue the Journey
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/quiz" className="text-[#C97F3D] hover:underline">
                Take the Free Dosha Quiz
              </Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
