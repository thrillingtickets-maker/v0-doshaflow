"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function VataFoodsToAvoid() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Vata Foods to Avoid: What Is Making Your Anxiety and Digestion Worse"
        category="article"
        date="May 17, 2026"
        highlightWord="Avoid"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              The Vata food list that most people get told to follow focuses on what to eat. This one focuses on what to stop eating — because for most Vata types, removing the most aggravating foods produces faster results than adding the beneficial ones.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The principle: like increases like.</h2>
            <p>
              Ayurveda&apos;s most fundamental dietary principle: a food with similar qualities to a dosha will increase that dosha. Vata is cold, dry, light, rough, and irregular. Any food with those qualities will make Vata worse. This is why the following foods are problematic — not because they are inherently unhealthy, but because they share qualities that Vata already has in excess.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Cold and raw food.</h2>
            <p>
              Cold smoothies, cold water, cold food from the refrigerator, raw salads, cold cereal, ice cream — all of these are cold, and cold directly suppresses the digestive fire (agni) that Vata types need most. This is the most impactful category to change. The shift from a cold breakfast to a warm one — from a cold smoothie to warm oatmeal with ghee — produces noticeable digestive improvement within a week for most Vata types. Cold water specifically: switching to warm or room-temperature water throughout the day is one of the simplest and most consistently effective Vata interventions.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Dry, light, and crunchy foods.</h2>
            <p>
              Rice cakes, crackers, dry cereal, popcorn, dried fruit in large quantities, raw carrot sticks — these increase Vata&apos;s dryness and lightness directly. They also tend to be eaten as snacks between meals, which contributes to the irregular eating pattern that Vata already creates.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Carbonated drinks.</h2>
            <p>
              Sparkling water, sodas, fizzy drinks. The gas in carbonated drinks directly aggravates Apana Vata — the downward-moving energy governing the lower digestive tract. For Vata types who experience bloating and gas, carbonated drinks are often a significant contributor.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Most beans and legumes.</h2>
            <p>
              Beans are one of the most problematic food categories for Vata because they are simultaneously dry and gas-producing. Chickpeas, kidney beans, black beans, lentils in large quantities all fall into this category. The exception: red lentils and mung dal, which are the most Vata-friendly legumes. They become more digestible when soaked overnight, cooked thoroughly until very soft, and prepared with generous digestive spices — cumin, coriander, fennel, ginger, and ghee.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Caffeine on an empty stomach.</h2>
            <p>
              Coffee before food is one of the most common and most significant Vata aggravators in modern life. Caffeine on an empty stomach stimulates the nervous system (already overactive in Vata), spikes cortisol, and creates a state of alert activation without the grounding that food provides. The result: the anxiety, the shakiness, the inability to settle that many coffee drinkers normalise as just how I am before coffee — this is elevated Vata. The adjustment: eat before coffee. One cup, after breakfast, with cardamom is very different from three cups on an empty stomach.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Alcohol.</h2>
            <p>
              Alcohol is drying, depleting, and nervous-system-disrupting — all of which directly aggravate Vata. The short-term grounding effect of alcohol is followed by Vata rebound: disrupted sleep, increased anxiety, digestive irregularity, and the depleted nervous system tone that follows. For Vata types who are struggling with anxiety, poor sleep, or digestive issues, alcohol is usually one of the top contributors.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Eating at irregular times.</h2>
            <p>
              Not a food, but the most Vata-aggravating dietary behaviour. Skipping breakfast, eating a huge lunch at 3pm, grazing throughout the day, eating dinner at 10pm — these patterns prevent agni from stabilising and maintain the digestive irregularity that is Vata&apos;s most common complaint.
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
              <Link href="/blog/signs-of-vata-imbalance" className="text-[#C97F3D] hover:underline">
                Signs of Vata Imbalance
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
