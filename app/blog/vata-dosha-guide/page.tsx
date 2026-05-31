"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function VataGuide() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Vata Dosha: Signs You&apos;re Out of Balance and What To Do About It"
        category="article"
        date="May 15, 2026"
        highlightWord="Vata"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              I used to think anxiety was just my personality. Then I got my dosha assessment and the practitioner said: classic Vata imbalance. Everything had a name — and a remedy. Vata is the dosha of air and ether, governing movement, the nervous system, creativity, and the mind&apos;s tendency to move quickly between thoughts. When it is in balance, these are genuine gifts. When it is out of balance, they become the symptoms that most people in modern life recognise immediately.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What Vata actually is.</h2>
            <p>
              Vata is composed of air and ether — the two lightest, most mobile elements. Its qualities are cold, dry, light, mobile, rough, and irregular. In the body, Vata governs all movement: the movement of blood through vessels, the movement of nerve impulses through the nervous system, the movement of thought through the mind, and the movement of food through the digestive tract. In balance, Vata produces creativity, enthusiasm, quick thinking, adaptability, and the capacity for joy. Out of balance, those same qualities produce anxiety, irregular digestion, insomnia, scattered thinking, and the nervous system that will not stop.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Physical characteristics of Vata types.</h2>
            <p>
              People with a predominantly Vata constitution tend to have: a naturally thin or light frame that is difficult to maintain weight on, variable digestion (sometimes strong, sometimes fragile), dry skin and hair that needs more moisture than other types, cold hands and feet even in warm weather, light and easily disrupted sleep, variable energy (high and creative at times, depleted at others), and quick reflexes and movement. These are not problems to fix — they are the expression of a Vata constitution in its natural state. The challenge is maintaining balance when the environment continuously aggravates these natural tendencies.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Signs of Vata imbalance.</h2>
            <p>
              Physical signs: dry skin, hair, and nails that worsen regardless of external moisturising; constipation or irregular bowels; gas and bloating; cold extremities; joint cracking or stiffness; unintended weight loss; fatigue that is not relieved by sleep. Mental and emotional signs: free-floating anxiety without a clear cause; racing thoughts particularly at night; difficulty making decisions; poor short-term memory; fear and worry that cycles without resolution; feeling overwhelmed by sensory input (noise, crowds, bright lights). The most reliable indicator of Vata imbalance in the modern context: the 3am wake-up with a running mind that will not stop. This is almost always Vata.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What causes Vata to go out of balance.</h2>
            <p>
              Travel, especially flying — the combination of altitude, dehydration, disrupted routine, and sensory overwhelm is one of the most reliably Vata-aggravating experiences available. Irregular routine — Vata&apos;s natural irregularity is contained by routine; when schedule becomes unpredictable, the nervous system never stabilises. Cold, dry, and windy weather — autumn and early winter naturally elevate Vata. Excessive stimulation — screens, noise, constant information, social media. Overwork and chronic stress — the adrenal depletion that follows sustained stress is a Vata depletion pattern. Cold food and drink, raw food, light and dry food — all increase Vata&apos;s own qualities. Alcohol — depleting and drying to the nervous system. Grief, fear, and anxiety themselves are Vata-aggravating.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">How to bring Vata back into balance.</h2>
            <p>
              Establish a routine — the same wake time, the same meal times, the same sleep time. Vata&apos;s nervous system craves predictability. Eat warm, cooked, oily food — switch cold smoothies for warm oatmeal, add ghee liberally, avoid cold water. Abhyanga daily — warm sesame oil applied to the body before showering directly addresses Vata&apos;s dryness and calms the nervous system. Even five minutes makes a difference. Sleep before 10pm — the Kapha window of 6-10pm is the body&apos;s strongest natural support for rest. Ashwagandha nightly — the most directly applicable herb for Vata depletion and nervous system dysregulation. Triphala at night for the digestion. Reduce stimulation in the evening — screens off an hour before bed, warm milk with cardamom and nutmeg, actual quiet.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Vata in the seasons.</h2>
            <p>
              Vata is most elevated in autumn and early winter — the cold, dry, windy season that mirrors Vata&apos;s own qualities. During this period, the Vata-balancing practices become most important. Increase warming, oily, heavy foods and reduce all raw and cold food. Add warming spices generously. Prioritise consistent sleep and meal timing. The spring and summer, when Kapha and Pitta are naturally elevated, give Vata types some relief — the warmth and moisture of those seasons counterbalance Vata&apos;s natural tendencies.
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
              <Link href="/blog/best-ayurvedic-tea-sleep" className="text-[#C97F3D] hover:underline">
                Best Ayurvedic Tea for Sleep
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
                Take the dosha quiz
              </Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
