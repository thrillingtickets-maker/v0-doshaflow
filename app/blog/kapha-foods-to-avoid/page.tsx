"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function KaphaFoodsToAvoid() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Kapha Foods to Avoid: Why You Feel Heavy, Tired, and Stuck"
        category="article"
        date="May 18, 2026"
        highlightWord="Stuck"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Kapha types have a particular dietary challenge: the foods that make them feel best in the short term are precisely the ones that make the long-term symptoms worse. The heavy, sweet, creamy foods that Kapha craves are the foods that increase Kapha — producing more weight, more fatigue, more of the heaviness and inertia that Kapha is already dealing with. Understanding why helps make different choices.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The principle: like increases like.</h2>
            <p>
              Kapha is heavy, slow, cold, oily, and dense. Foods with those same qualities increase Kapha directly. The Kapha food avoidance list is essentially a list of the most popular comfort foods in Western culture — which is why Kapha types often feel worse on what they think of as a normal, pleasurable diet.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Dairy.</h2>
            <p>
              Cold milk, ice cream, cream, soft cheeses, yogurt — dairy is one of the most Kapha-increasing food categories. Its heaviness and moisture directly amplify Kapha&apos;s natural heaviness and the mucus-producing tendency that Kapha types experience. Regular dairy consumption in a Kapha type often correlates with congestion, post-nasal drip, weight retention, and digestive sluggishness. The reduction is usually noticeable within two weeks. The exception: small amounts of warm, spiced, low-fat milk are acceptable for Kapha. The cold and the fat are the issues, not milk in all forms.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Wheat and heavy grains.</h2>
            <p>
              Bread, pasta, pastries, crackers, oats in large quantities — these are heavy and dense, which directly increases Kapha. Wheat in particular is one of the most consistently Kapha-aggravating grains. Alternatives: barley (actually Kapha-reducing), millet, buckwheat, quinoa, corn. These are lighter and drier and produce a noticeably different effect on Kapha energy and weight.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Sweets and sugar.</h2>
            <p>
              The sweet taste is the taste that increases Kapha most directly. White sugar, sweetened drinks, desserts, sweet breakfast foods, fruit juice — all of these compound Kapha&apos;s tendency toward weight gain, sluggishness, and low energy. The particular irony for Kapha types: low energy and low mood drive sweet cravings, and sweet foods produce a brief energy lift followed by a deeper slump that drives more cravings. This cycle is very common in Kapha types. Raw honey in small quantities is the one exception — it is warming and drying and is actually Kapha-reducing when used sparingly and not cooked.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Cold food and drinks.</h2>
            <p>
              Cold water, cold smoothies, iced drinks, food straight from the refrigerator — all of these suppress the already-slow Kapha digestive fire. Kapha agni is the weakest of the three doshas and requires warming and stimulating inputs to function adequately. Everything Kapha eats and drinks should be warm or room temperature.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Heavy, oily, fried food.</h2>
            <p>
              Fried food, fatty meats, heavy oils in large quantities — these increase Kapha&apos;s own heaviness and oiliness directly. The digestion slows further, ama accumulates, and the fatigue and weight retention that Kapha types are already managing intensify. Small amounts of ghee in cooking are appropriate. Large quantities of any oil or fat are not.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Excess salt.</h2>
            <p>
              Salt promotes water retention, which is already a significant Kapha tendency. The puffiness, the swelling in the extremities, the weight that fluctuates with fluid — excess salt drives all of these. Kapha types are the most salt-sensitive of the three doshas.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Large portions and eating past fullness.</h2>
            <p>
              The Kapha appetite-satiety signalling is genuinely delayed. The fullness signal arrives 15-20 minutes after the physiological satiety point — which means Kapha types can eat significantly more than their body needs before the signal registers. The practice of eating to 75% full and waiting 15 minutes before deciding whether to eat more is not a diet trick for Kapha — it is a practical correction for a real physiological delay.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Eating after 7pm.</h2>
            <p>
              Kapha metabolism is at its slowest in the evening. Late eating produces the most ama in Kapha of any dosha — the undigested residue that contributes to morning heaviness, weight retention, and the fog that many Kapha types experience on waking. 6pm is ideal for dinner, 7pm is acceptable, later than that compounds the problem.
            </p>
          </div>

          {/* Related Articles */}
          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Related Articles
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/blog/eating-for-your-dosha" className="text-[#C97F3D] hover:underline">
                Eating for Your Dosha
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/kapha-morning-routine" className="text-[#C97F3D] hover:underline">
                Kapha Morning Routine
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
