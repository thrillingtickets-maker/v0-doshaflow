"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function AyurvdaCoffeePage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Is Coffee Bad for You? The Ayurvedic Answer by Dosha"
        category="article"
        date="May 20, 2026"
        highlightWord="Coffee"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              The question I get asked most often when I tell people I have been at an Ayurvedic retreat is: can you still have coffee? It is almost always the first question. Before the herbs, before the diet, before anything else about this 5,000-year-old system — people want to know about the coffee. The answer is nuanced, which is very Ayurvedic of it.
            </p>

            <h2>What Ayurveda says about coffee.</h2>
            <p>
              Coffee does not appear in the classical Ayurvedic texts — it was not part of the original pharmacopeia. But Ayurveda has a framework for analysing any substance: what are its qualities, what dosha does it affect, what is its effect on agni? By those measures, coffee is heating and stimulating (increases Pitta), drying and light (aggravates Vata), and initially stimulating to agni but then depleting it. This last point is key: coffee does appear to stoke digestive fire in the short term — which is why it gets things moving in the morning — but it does this by borrowing from the body&apos;s reserves rather than genuinely building agni. Over time, reliance on coffee to kick-start digestion actually weakens the natural digestive function.
            </p>

            <h2>Who coffee is most problematic for.</h2>
            <p>
              Vata types are most affected — coffee&apos;s drying, stimulating, light qualities directly aggravate Vata. If you are already anxious, scattered, or have irregular digestion, coffee is very likely making all three worse. The classic Vata-coffee pattern: strong anxiety or jitteriness from even moderate amounts, followed by a crash, followed by craving more. Pitta types face different problems — coffee is heating and acidic, which adds heat to an already-hot Pitta system. The most common result is digestive inflammation: acid reflux, heartburn, loose stools. Skin inflammation can also worsen. Kapha types are actually the most tolerant of coffee, because its stimulating, drying, heating qualities counteract Kapha&apos;s sluggishness. The morning Kapha who is genuinely slow to start may find coffee helpful. Moderately. Without sugar. Not six cups.
            </p>

            <h2>The case for keeping it.</h2>
            <p>
              This is not an article arguing that you should quit coffee. For most people in most contexts, that is not realistic or even necessary. The Ayurvedic case for moderate coffee consumption: it kindles agni when used strategically (one cup, after food, not as a substitute for breakfast), it increases alertness and focus (documented benefits that are not without value), and it is genuinely pleasurable (Ayurveda takes pleasure seriously — forcing yourself to avoid something you genuinely enjoy creates its own suffering). The question is whether the pleasure is sustainable or whether it is masking a problem.
            </p>

            <h2>How to make coffee work better in Ayurvedic terms.</h2>
            <p>
              Always eat before coffee — never on an empty stomach. This is the single most important change. Coffee on an empty stomach spikes cortisol, aggravates the gut, and is the primary mechanism by which coffee worsens anxiety in Vata types and acid issues in Pitta types. Add cardamom — a pinch of cardamom in coffee moderates its heating and drying effects. It is the classical Ayurvedic coffee modification and it genuinely works. Keep it to one cup — the benefits appear in the first cup and diminish with subsequent cups while the costs accumulate. Avoid coffee after 2pm — the Vata window of 2-6pm is when coffee and anxiety are most mutually amplifying. Time it with the natural Pitta digestive peak (10am-2pm) instead. Switch to CCF tea (cumin, coriander, fennel) or ginger tea as the afternoon hot drink.
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
              <Link href="/blog/best-tea-for-stress" className="text-[#C97F3D] hover:underline">
                Best Ayurvedic Tea for Stress Relief
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/ayurveda-cold-smoothies" className="text-[#C97F3D] hover:underline">
                Are Cold Smoothies Bad for Digestion?
              </Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
