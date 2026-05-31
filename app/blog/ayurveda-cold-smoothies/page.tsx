"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function AyurvdaColdSmoothiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Are Cold Smoothies Bad for Digestion? What Ayurveda Says"
        category="article"
        date="May 18, 2026"
        highlightWord="Smoothies"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              I drank a green smoothie every morning for three years. Spinach, frozen berries, almond milk, protein powder, ice. I thought I was doing something excellent for my body. Then I sat with an Ayurvedic practitioner in Kerala and described my morning routine. She listened, nodded, and said: that explains the bloating. I was skeptical. But she walked me through the logic — and the logic, once I understood it, was hard to argue with.
            </p>

            <h2>The concept of agni.</h2>
            <p>
              To understand why Ayurveda objects to cold smoothies, you need one concept: agni. Agni is digestive fire — the metabolic intelligence that transforms everything you eat into nourishment your body can use. When agni is strong, digestion is smooth, energy is steady, and the body is clear. When agni is weak or disturbed, food does not get properly processed. The result, in Ayurvedic terms, is ama — undigested residue that accumulates in the body and becomes the foundation of most disease. Cold smoothies do two things that directly suppress agni. They are cold — agni is fire, and you do not pour ice water on a fire you are trying to keep burning. Cold food first thing in the morning temporarily extinguishes that metabolic heat. And they are raw — raw vegetables and fruit are harder to break down than cooked ones. Put these together and you have a perfectly engineered agni-suppressor arriving at the most vulnerable digestive moment of the day.
            </p>

            <h2>But the nutrients though.</h2>
            <p>
              This is the first objection, and it is fair. Green smoothies do contain a lot of nutrients. Is that not worth something? Ayurveda&apos;s response: nutrients you cannot absorb do not help you. The value of food is not just in its nutritional content — it is in what your body can actually do with it. A difficult-to-digest meal full of nutrients is less useful than an easy-to-digest meal with moderate nutrients. There is also emerging research that cooking actually increases the bioavailability of many nutrients — including the antioxidants in vegetables like spinach, tomatoes, and carrots.
            </p>

            <h2>Who this matters most for.</h2>
            <p>
              Not everyone responds the same way to cold, raw food. Vata types are most affected — already cold, light, and dry, the last thing they need is more cold and light at breakfast. Vata digestion is inherently irregular and tends toward the delicate. Cold smoothies reliably destabilize it. Kapha types are similarly affected — Kapha digestion runs slow and heavy, adding raw cold food makes it worse. Pitta types — with their naturally strong, hot digestive fire — handle cold and raw better than the other doshas. A Pitta type in summer, with strong agni, can probably manage a smoothie without issue. In winter, or when stressed or depleted, less so.
            </p>

            <h2>What to eat instead.</h2>
            <p>
              For Vata: warm oatmeal with ghee and cinnamon, or warm rice congee with spices. For Pitta: cooked oats with coconut milk and cardamom, or cooked quinoa with sweet fruit. For Kapha: light warm breakfast or even skipping breakfast entirely and having ginger tea instead — Kapha does not need a morning meal. If you genuinely cannot give up your smoothie: use room temperature or lightly warm liquid instead of cold, skip the ice entirely, add warming spices (ginger, cinnamon, cardamom), use cooked or steamed fruit where possible, and eat something warm alongside it.
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
              <Link href="/blog/ayurveda-ice-water" className="text-[#C97F3D] hover:underline">
                Why Cold Water Causes Bloating
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/ayurveda-coffee" className="text-[#C97F3D] hover:underline">
                Is Coffee Bad for You?
              </Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
