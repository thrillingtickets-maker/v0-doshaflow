"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function KaphaDietPlan() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Kapha Diet Plan: How to Eat for Energy When Your Body Wants to Do Nothing"
        category="article"
        date="May 24, 2026"
        highlightWord="Kapha"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              The Kapha diet is the one where Ayurveda and most of your cravings are in direct conflict. Kapha types want heavy, sweet, creamy, and comforting. The Kapha diet says: light, spiced, warm, and stimulating. This creates a particular challenge because the foods Kapha craves are precisely the ones that make the problem worse. Understanding why helps.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What Kapha actually needs.</h2>
            <p>
              Kapha is heavy, slow, cold, oily, and stable. The diet for Kapha needs to counterbalance those qualities: light, warm, dry, and stimulating. Kapha already has plenty of the heavy, dense, cohesive qualities — adding more through food produces weight gain, sluggish digestion, low energy, and water retention. Three most important principles: eat light — Kapha&apos;s digestion runs slow; heavy foods tax a system that is already working slowly. Eat stimulating — spice is medicine for Kapha. Where Pitta should reduce spice and Vata should use warming but moderate spice, Kapha should eat the most strongly spiced food of all three doshas. Eat early — breakfast can be the smallest or even skipped meal for Kapha; the largest meal should be at lunch.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Best foods for Kapha.</h2>
            <p>
              Grains: light grains — barley, millet, buckwheat, corn, rye, quinoa. Small amounts of basmati rice are acceptable. Avoid wheat, oats, and heavy grains. Vegetables: almost all vegetables are good for Kapha, particularly bitter, pungent, and astringent ones. Leafy greens, cabbage, broccoli, cauliflower, Brussels sprouts, asparagus, artichoke, onion, garlic, leeks, radish. Proteins: light proteins — chicken white meat, turkey, freshwater fish, eggs occasionally, legumes. Tofu is excellent for Kapha. Avoid red meat, pork, duck, shellfish, and heavy animal proteins. Fats: Kapha needs the least fat. Small amounts of ghee, sunflower oil, or flaxseed oil. Avoid large quantities of oil in cooking. Sweeteners: raw honey in small quantities is the one sweetener that is actually beneficial for Kapha — it is warming and drying. All other sweeteners increase Kapha. Spices: all warming and pungent spices. Ginger, black pepper, trikatu (ginger, black pepper, long pepper), mustard seeds, cinnamon, cardamom, turmeric, cumin, coriander, fenugreek, garlic.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Foods Kapha should avoid or reduce.</h2>
            <p>
              Cold food and drinks: cold suppresses the already-slow Kapha digestion. Everything should be warm or room temperature. Wheat and heavy grains: bread, pasta, crackers, heavy grains in large quantities increase the heavy, dense quality of Kapha. Sweets and sugar: the taste that Kapha craves most and needs least. Sweet food directly increases Kapha — weight, sluggishness, water retention, and the low mood that often accompanies Kapha imbalance. Heavy, oily, fried food: increases Kapha&apos;s heaviness and slows the digestion further. Dairy: cold milk, ice cream, cream, soft cheeses, yogurt — dairy is one of the most Kapha-increasing food categories. Its heaviness and moisture directly amplify Kapha&apos;s natural heaviness. Large portions: Kapha&apos;s appetite-satiety signalling is delayed — the fullness signal arrives 15-20 minutes after the physiological satiety point. The practice of eating to 75% full and waiting before deciding whether to eat more is a practical correction for this real physiological delay.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The Kapha daily food plan.</h2>
            <p>
              Morning: ginger tea or hot water with lemon and honey. If breakfast, keep it very light — fruit, a small amount of light grain, nothing heavy. Many Kapha types do well with just a warm drink and waiting until lunch. Lunch (the most important meal): a proper, well-spiced lunch between noon and 1pm. Stir-fried vegetables over barley or quinoa with bold spices. Lentil dal with ginger, garlic, and trikatu. Kapha needs the most strongly flavoured, most stimulating meal. Dinner: the lightest meal of the day for Kapha. Vegetable soup, a small amount of light grain, steamed bitter greens. Avoid eating after 7pm. Between meals: ginger tea throughout the day. Avoid snacking.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Movement is as important as diet for Kapha.</h2>
            <p>
              The Kapha diet works best alongside vigorous morning exercise. Movement before breakfast directly stimulates the metabolism in a way that diet alone cannot fully compensate for. If there is one non-dietary intervention that is closest to essential for Kapha, it is vigorous movement before the first meal of the day. Not a walk. Not gentle yoga. Vigorous movement that produces a genuine sweat. 20-30 minutes. Before breakfast. Daily. This is the entry point for Kapha metabolic activation, and everything else in the diet works better when this foundation is in place.
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
              <Link href="/blog/ayurveda-exercise" className="text-[#C97F3D] hover:underline">
                Why Working Out Every Day the Same Way Is Making You Worse
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
