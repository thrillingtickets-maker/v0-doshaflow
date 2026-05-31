"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function KaphaDietPlanPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ArticleHero
        title="Kapha Diet Plan: The Foods That Activate"
        category="wellness"
        date="May 30, 2026"
        highlightWord="Diet"
      />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>Kapha types often describe the same pattern: I can gain weight just by looking at food. I have a slow metabolism. Everything feels heavy. My energy dies in the afternoon. What works for my Pitta friend makes me more sluggish.</p>
            <p>The Kapha metabolism is genuinely different. It is not laziness or lack of willpower. It is a constitutional pattern that requires a different nutritional approach entirely.</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What Kapha Actually Needs</h2>
            <p>Kapha is the dosha of structure, heaviness, and preservation. In balance, these qualities create stability and grounding. In excess, they create sluggish metabolism and weight gain. The Kapha digestive system is slow and steady rather than fast and intense. This means Kapha can digest richer, heavier foods — but it also means those foods take longer to move through the system. Eat heavy, slow-moving food regularly and it accumulates. The metabolism does not speed up on its own.</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Best Foods for Kapha</h2>
            <p>Legumes: mung beans, lentils, chickpeas — high protein, light, warming. Grains: barley, millet, corn (cooked warm, not cold cereal). Vegetables: leafy greens, asparagus, broccoli, cauliflower, onions, garlic, peppers (all cooked, never raw). Proteins: chicken, turkey, fish (lean, not fatty cuts). Fruits: berries, apples, pears (warm or stewed, not raw/cold). Healthy fats: very limited — use sesame oil or ghee sparingly (1-2 tsp per meal).</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Foods Kapha Should Avoid</h2>
            <p>Dairy is the silent Kapha-aggravating culprit. Milk, cheese, yogurt, ice cream — all create heaviness and sluggishness. Oils and fats in excess. Sugar and sweets. Heavy grains: wheat, rice. Cold foods and drinks. Large portions. Eating before digestion is complete (at least 3-4 hours between meals). Dessert — for Kapha, this is often the difference between stable weight and steady gain.</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The Kapha Daily Food Plan</h2>
            <p>Breakfast: warm kitchari (mung beans and barley with warming spices) with ginger tea. Lunch: lentil soup with steamed vegetables and warming spices. Dinner: dal with quinoa or barley and cooked vegetables. Snacks: none (or dry ginger cookie if necessary). This is not food restriction. This is constitutional alignment — eating the foods that activate rather than suppress your metabolism.</p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Movement Is as Important as Diet</h2>
            <p>For Kapha, the diet approach alone is incomplete without movement. Kapha types need daily activity — not intense once a week, but consistent daily movement. Yoga, walking, swimming — the type matters less than the consistency and warmth (never cold swimming). The best Kapha approach: eat light and dry in the morning, then move. This activates the entire system. Combined with the light diet and warming spices, consistent movement transforms Kapha weight and energy baseline within 4-6 weeks.</p>
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
              <Link href="/kapha" className="text-[#C97F3D] hover:underline">
                Full Kapha dosha guide
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/kapha-dosha-guide" className="text-[#C97F3D] hover:underline">
                Kapha dosha deep dive
              </Link>
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
