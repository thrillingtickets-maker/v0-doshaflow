"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PittaDietPlanPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <time className="text-muted-foreground text-sm">April 20, 2026</time>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4 mt-4">
              Pitta Diet Plan: How to Cool the Fire Without Losing the Edge
            </h1>
          </header>

          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>Pitta types are often high achievers. Ambitious. Driven. They also tend to run hot — prone to inflammation, skin issues, irritability, and burnout. They drink too much coffee to sustain the intensity. They skip meals because there is no time. They eat spicy food because it feels stimulating. All of this feeds the Pitta fire higher.</p>
            <p>The Pitta diet is counterintuitive for most Pitta types because it involves slowing down and cooling down. This feels wrong — until you realize that slowing down is precisely what allows you to sustain intensity without burning out.</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Why Pitta Burns Out</h2>
            <p>Pitta is the dosha of fire, metabolism, and intensity. In balance, Pitta produces drive, clarity, and the capacity to transform. In excess, it creates inflammation, irritability, perfectionism, and eventual burnout. The high-achiever Pitta person often sustains Pitta excess for years through sheer willpower and caffeine — until the system crashes. The body develops chronic inflammation. Sleep becomes fragmented. Skin eruptions appear. Digestion becomes erratic (either too fast or completely shut down during stress).</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The Pitta Diet Principles</h2>
            <p>The goal is cooling and grounding without losing the edge. Reduce heat-producing foods: red meat, alcohol, spicy food, fried foods, excess oil, caffeine. Increase cooling foods: coconut, ghee, olive oil, leafy greens, sweet fruits, cooling herbs. Eat at consistent times — regularity settles Pitta's chaotic intensity. Never skip meals. Eat cooling breakfast: coconut milk porridge, cool smoothie with coconut and dates. Avoid coffee on an empty stomach (this agitates Pitta intensely). Cool the evening: no spicy foods, alcohol, or heavy foods after 7pm. The meal timing shift alone often produces dramatic changes in Pitta inflammation and sleep.</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The Best Pitta Foods</h2>
            <p>Proteins: chicken (white meat, not dark), turkey, fish (cooling varieties like cod or halibut), legumes, tofu. Grains: basmati rice, oats, barley (cooling grains, not heating grains like wheat). Vegetables: leafy greens, cucumber, zucchini, asparagus, broccoli, cauliflower, sweet potatoes (avoid: tomatoes, peppers, onions, garlic when in excess). Fruits: coconut, dates, berries, mangoes, melons (sweet and cooling, not heating citrus). Healthy fats: ghee, coconut oil (used thoughtfully — cooling but still oil). Cooling spices: cilantro, cumin, fennel, fresh ginger (not dried/heating spices).</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What to Avoid for Pitta</h2>
            <p>Red meat and excess meat — heat-producing. Alcohol — intensely heat-producing. Coffee — aggravates Pitta intensity (switch to herbal tea). Fried foods and excess oil — inflammatory. Spicy food — even though it feels stimulating, it aggravates Pitta inflammation. Tomatoes, peppers, onions, garlic in excess. Caffeine and stimulants. Eating while stressed or rushed. Large meals — eat smaller, more frequent meals.</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The Pitta Daily Food Plan</h2>
            <p>Breakfast: coconut milk oatmeal with dates and coconut. Lunch: cooling kitchari with ghee and cilantro (2-3pm when digestion is strongest). Afternoon: herbal tea (brahmi or fennel). Dinner: fish or tofu with basmati rice and steamed vegetables. The key: emphasis on cooling, regularity, and rest. This is the anti-intensity diet — which is exactly what allows intensity to be sustained long-term without destruction.</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The Most Important Pitta Supplement</h2>
            <p>If you take nothing else: brahmi (Bacopa monnieri). This herb specifically cools the mind — for the racing thoughts, the mental intensity, the perfectionist loop. Brahmi has a bitter, slightly cooling taste. Take 500-1000mg of dried herb daily or 1-2 teaspoons of the powder in warm water. The cooling effect on mental intensity is noticeable within 2-3 weeks of daily use. Brahmi works better than anything else for the specific Pitta problem of a mind that will not turn off.</p>
          </div>

          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">Related Articles</h2>
          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/quiz" className="text-[#C97F3D] hover:underline">
                Take the dosha quiz
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/pitta" className="text-[#C97F3D] hover:underline">
                Full Pitta dosha guide
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/best-herbs-for-anxiety" className="text-[#C97F3D] hover:underline">
                Best herbs for Pitta anxiety
              </Link>
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
