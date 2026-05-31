"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function AyurvedicHerbsGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="The Ayurvedic Herb Guide: What&apos;s Actually in These Formulas and Why"
        category="article"
        date="May 28, 2026"
        highlightWord="Herb"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              I am sitting in a pharmacy that has been operating for over 200 years. It is on the grounds of the retreat centre in Kerala where I have spent the last week, and it looks nothing like a pharmacy. There are wooden shelves floor to ceiling, hundreds of glass jars, bundles of dried roots hanging from beams, and a smell that I can only describe as the earth concentrating itself into a room. The practitioner here makes formulas by hand. He knows which plant grows in which part of the property, which combinations do what, which herbs are heating and which are cooling and why that matters for your particular constitution. I have spent a lot of time in this room this week, asking questions. This is what I have learned.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">How to think about Ayurvedic herbs.</h2>
            <p>
              In Western medicine, a supplement does one thing. Vitamin C supports immunity. Magnesium helps sleep. The logic is direct and mechanistic. In Ayurveda, herbs are understood in terms of their qualities — their heating or cooling nature, their taste, their effect on each of the three doshas. Ashwagandha is not just good for stress. It is a warming, heavy, grounding herb that specifically pacifies Vata — the dosha of movement, anxiety, and depletion. That distinction matters, because the same herb that calms a Vata type might not be right for a Pitta type running hot. Ayurvedic herbs are also rarely used alone. The formulas I have been watching the practitioner here make are combinations — herbs that enhance each other&apos;s absorption, balance each other&apos;s properties, address multiple aspects of an imbalance at once. There is a sophistication here that took centuries to develop.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Ashwagandha — the foundation.</h2>
            <p>
              If you have heard of one Ayurvedic herb, it is this one. Ashwagandha (Withania somnifera) is the most well-researched Ayurvedic herb in Western clinical literature, with strong evidence for stress reduction, sleep quality, testosterone support, and nervous system recovery. In Ayurvedic terms, it is a rasayana — a rejuvenating tonic — with a specific affinity for the nervous system and reproductive system. It is warming and grounding, which makes it particularly suited to Vata types dealing with anxiety, depletion, and poor sleep. My practitioner calls it the herb that gives strength to the weak. The root form is more potent than most capsule products you will find in the West. And it works slowly — this is not a one-dose herb. Three months is a meaningful trial period.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Turmeric — the anti-inflammatory workhorse.</h2>
            <p>
              Turmeric (Curcuma longa) has the strongest evidence base of any Ayurvedic herb for anti-inflammatory effects, joint health, gut health, and metabolic support. The Ayurvedic tradition uses the whole root — not an extract — and almost always combines it with black pepper, which dramatically increases absorption. In Ayurvedic terms, turmeric is tridoshic — generally balancing for all three doshas. It clears heat, supports digestion, and has been used here for thousands of years as a fundamental detox herb. The kitchen at this retreat uses turmeric in almost every meal. Not supplements — food. That is the original delivery system.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Ginger — agni&apos;s best friend.</h2>
            <p>
              Agni is the Ayurvedic concept of digestive fire — the capacity of the body to transform food, process experience, and eliminate waste. Ginger (Zingiber officinale) is the primary herb for stoking it. Fresh ginger, dry ginger, ginger in tea, ginger in food — the uses here are constant. It improves circulation, reduces nausea, stimulates digestion, and clears sluggishness from the gut. In terms of dosha: ginger is warming and stimulating, making it especially good for Vata and Kapha types. Pitta types should use it more moderately.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Triphala — the gut reset.</h2>
            <p>
              Triphala (three fruits) is the combination of Amla, Haritaki, and Bibhitaki — and it is the most commonly prescribed Ayurvedic formula for gut health, elimination, and gentle detoxification. It is also one of the most studied Ayurvedic formulas in Western research. What it does: supports regular elimination without being a harsh laxative, gently cleanses the digestive tract, supports the gut microbiome, and acts as a mild antioxidant. It is tridoshic — appropriate for all constitutions — and used long-term rather than as a quick fix. This is the formula I have been taking every morning here. The results on my digestion have been noticeable within days.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Brahmi — the brain herb.</h2>
            <p>
              Brahmi (Bacopa monnieri) is Ayurveda&apos;s primary herb for the mind: focus, memory, learning, and anxiety. It is cooling and calming, which makes it particularly good for Pitta types dealing with mental overload and burnout — and for anyone whose mind is running too hot and fast. Moderate evidence in Western research for cognitive function and anxiety reduction. It works slowly — meaningful effects at 8-12 weeks. The practitioners here describe it as making the mind still enough to actually think.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Shatavari — for women&apos;s health.</h2>
            <p>
              Shatavari (Asparagus racemosus) is Ayurveda&apos;s primary herb for women&apos;s reproductive health. It supports hormonal balance, helps with the transition through perimenopause, supports milk production in nursing mothers, and has a cooling, nourishing quality that counters the heat and depletion that often accompany hormonal fluctuation. The name translates roughly as she who has a hundred husbands — a reference to the vitality it is associated with. Moderate evidence. Worth the attention it is getting in women&apos;s wellness circles.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Tulsi — the adaptogen you haven&apos;t heard of.</h2>
            <p>
              Tulsi (Ocimum sanctum) is revered in India the way few plants are. It grows in almost every household. It is one of the most effective adaptogens I have encountered — herbs that help the body adapt to stress without either stimulating or sedating. Tulsi calms the nervous system, supports the immune system, clears respiratory congestion, and has a quality that is hard to describe: it makes you feel more present, more settled. Moderate-to-strong evidence for its adaptogenic, immunomodulating, and anti-inflammatory properties. Available as a tea, which is the preferred form.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">A starting point.</h2>
            <p>
              If you are new to Ayurvedic herbs, start simple. Triphala — one of the most universally appropriate formulas, good for almost everyone, best taken at night before bed. Start here for gut health and elimination. Ashwagandha — if you are dealing with chronic stress, poor sleep, or anxiety. Take it consistently for at least 8 weeks before evaluating. Tulsi tea — replace one cup of coffee with tulsi tea in the afternoon. Notice the difference in how your nervous system feels by evening. Then take the dosha quiz. Know your constitution. Let the recommendations get specific. The herbs are not magic. They are 5,000 years of paying attention to what works.
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
              <Link href="/blog/vata-dosha-guide" className="text-[#C97F3D] hover:underline">
                Vata Dosha Guide
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
