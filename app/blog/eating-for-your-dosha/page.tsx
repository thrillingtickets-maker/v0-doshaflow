"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function EatingForYourDoshaPage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Eating for Your Dosha: The Ayurvedic Diet Guide for Vata, Pitta, and Kapha"
        category="article"
        date="May 19, 2026"
        highlightWord="Dosha"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              The first thing I want to say about Ayurvedic eating is what it is not. It is not a diet. It does not have a list of forbidden foods. It does not require you to count anything, eliminate entire food groups, or replace meals with supplements. What it has is a framework — one of the oldest and most sophisticated nutritional frameworks in existence — for understanding how different foods affect different bodies differently. After a week at an Ayurvedic retreat in Kerala, eating meals designed specifically for my dosha three times a day, I have started to understand what that framework actually means in practice.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Why one-size-fits-all nutrition does not work.</h2>
            <p>
              You have probably noticed that nutritional advice contradicts itself constantly. Eat more fat. No, eat less fat. Go vegan. Go carnivore. Fast every morning. Eat breakfast within 30 minutes of waking. Drink cold water. Drink warm water. Ayurveda&apos;s answer to this is not a correction — it is a reframe. The reason nutrition advice conflicts is because it is making generalisations across different constitutional types. What is good for one body is not good for all bodies. The doshas are the map. Once you know your constitution, the dietary recommendations stop conflicting and start making intuitive sense.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The basic framework.</h2>
            <p>
              Every food has qualities — the same qualities used to describe the doshas. Warm or cool. Heavy or light. Dry or oily. These qualities either aggravate or pacify each dosha based on the principle of opposites: like increases like, and opposites balance. A cold smoothie increases the cold, light, mobile quality of Vata. Hot sauce increases the hot, sharp quality of Pitta. Heavy dairy and sweet foods increase the heavy, slow quality of Kapha. The dietary goal is to eat predominantly in ways that balance your dominant dosha — and to adjust for seasonal shifts.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Eating for Vata.</h2>
            <p>
              What Vata needs: warm, cooked, oily, grounding, and regular. Vata&apos;s qualities are cold, dry, light, and mobile. Everything in the Vata diet aims at the opposite: warmth, moisture, weight, and consistency. Eat more: cooked grains (oatmeal, basmati rice, quinoa), root vegetables (sweet potato, beets, carrots, squash), warming soups and stews, healthy fats (ghee, sesame oil, avocado, coconut), warming spices (ginger, cinnamon, cumin, cardamom, fennel), cooked fruit. Eat less: raw salads and vegetables, cold food and drinks, crackers and dry foods, carbonated drinks. Most important habits for Vata: eat at the same times every day — this is more important for Vata than any specific food choice. Add ghee or oil to most meals. Warm water or herbal tea throughout the day. Do not skip meals — irregular eating destabilises Vata faster than almost anything.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Eating for Pitta.</h2>
            <p>
              What Pitta needs: cooling, moderately heavy, and calming. Pitta&apos;s qualities are hot, sharp, and penetrating. The diet aims at cooling and softening. Eat more: sweet juicy fruits (mangoes, pears, melon, grapes), cooling vegetables (cucumber, zucchini, leafy greens, cilantro, mint), cooked grains (basmati rice, barley, oats), legumes, coconut and coconut oil, mild spices (coriander, fennel, cardamom, turmeric, mint). Eat less: spicy food, hot sauce, vinegar, fermented foods, fried food, alcohol, excessive salt, red meat. Most important habits for Pitta: do not skip meals — Pitta hunger becomes irritability fast. Eat the largest meal at lunch when agni is strongest. Eat in a calm environment — stress during eating directly increases Pitta in the gut. Reduce or eliminate alcohol especially in summer and stressful periods.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Eating for Kapha.</h2>
            <p>
              What Kapha needs: light, warming, and stimulating. Kapha&apos;s qualities are heavy, slow, cool, and dense. The diet aims to lighten and stimulate. Eat more: light grains (millet, barley, buckwheat, corn), legumes and beans, most vegetables, spicy and pungent foods, bitter greens, ginger, black pepper, mustard seeds, light fruits (apples, pears, berries), honey (uniquely beneficial for Kapha). Eat less: heavy dairy (cheese, full-fat milk, ice cream, yogurt), wheat and heavy grains, fried food, sweet and salty foods, red meat, excessive oil, cold drinks. Most important habits for Kapha: eat the smallest dinner, prioritise spice — ginger tea in the morning, pepper on everything, mustard seeds in cooking. Consider two meals a day if digestion feels sluggish.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Seasonal adjustments.</h2>
            <p>
              Beyond your constitution, the season matters. Vata season (fall and early winter) — everyone should eat more like a Vata-balancing diet: warmer, more cooked, more grounding. Kapha season (late winter and spring) — everyone benefits from lighter, more stimulating foods. Reduce heavy dairy and wheat, eat more greens, add more spice. Pitta season (summer) — everyone should cool down. Less spicy food, more cooling fruits and vegetables, reducing alcohol and fried food. Your dosha creates your baseline. The season modulates it.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What eating for my dosha actually felt like.</h2>
            <p>
              I want to be honest: the first two days at the retreat, I missed my usual food. The kitchari felt monotonous. I wanted coffee. By day four, something had shifted. My digestion was smoother than it had been in years. I was not bloating after meals. My energy was even — not the spikes and crashes I had normalised. I was sleeping deeply and waking actually rested. The food here is not fancy. It is not Instagram food. But it works in a way that my nutrient-optimised, macro-tracked previous approach just did not. That is what eating for your dosha actually is: food as medicine, personalised to the body you actually have.
            </p>
          </div>

          {/* Related Articles */}
          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Related Articles
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/blog/vata-dosha-guide" className="text-[#C97F3D] hover:underline">
                Vata Dosha: Signs You&apos;re Out of Balance
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/pitta-diet-plan" className="text-[#C97F3D] hover:underline">
                Pitta Diet Plan: How to Cool the Fire
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/kapha-diet-plan" className="text-[#C97F3D] hover:underline">
                Kapha Diet Plan: Eat for Energy
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
