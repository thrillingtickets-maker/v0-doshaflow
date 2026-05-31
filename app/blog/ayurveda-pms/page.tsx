"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function AyurvdaPMSPage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Natural PMS Relief: The Ayurvedic Approach by Dosha Type"
        category="article"
        date="May 22, 2026"
        highlightWord="PMS"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Let me start with a confession: I used to think PMS was just part of being a woman. Not pathological, not worth treating, just the week you warn people about. The week you crave everything and feel none of the things and are convinced your life needs a complete restructuring. What nobody told me — what I learned in Kerala — is that PMS, in Ayurvedic terms, is not a fixed feature of the female experience. It is a sign of imbalance. It has a cause. And causes have remedies.
            </p>

            <h2>What Ayurveda actually says about PMS.</h2>
            <p>
              In Ayurvedic theory, the menstrual cycle is viewed as one of the body&apos;s most sophisticated self-cleansing processes. Menstruation is apana vata at work — the downward-moving energy that governs elimination and release. When this process flows smoothly, the body clears not just physical tissue but emotional accumulation. PMS — the symptoms that build in the days before the period arrives — is a sign that the cleansing process is being obstructed. The energies that should be preparing to release are stuck. And the specific way they are stuck tells you which dosha is involved. This is where Ayurveda gets precise in a way that Western medicine usually does not. PMS is not one thing. It has different presentations for different constitutions — and those presentations respond to different interventions.
            </p>

            <h2>The three PMS patterns.</h2>
            <p>
              Vata PMS tends to show up as anxiety that spikes in the days before the period, insomnia or disrupted sleep, lower back pain, bloating and gas, constipation, irregular spotting or cramping, feeling ungrounded or tearful without a clear reason, craving warmth and comfort. The underlying dynamic: Vata&apos;s mobile, cold, dry energy is obstructing the downward flow of apana. The remedy is warming, grounding, and lubricating. Pitta PMS tends to show up as intense irritability that tips into anger, inflammation (breast tenderness, swollen glands, skin flares around the jaw), heavy flow when the period arrives, headaches, intense food cravings particularly for sour salty or spicy food, heat and discomfort. The underlying dynamic: Pitta&apos;s heat is accumulating and looking for an outlet. The remedy is cooling, releasing, and reducing inflammatory inputs — particularly alcohol, spicy food, and overwork. Kapha PMS tends to show up as water retention and bloating (not gas, but swelling and puffiness), breast heaviness, emotional flatness or depression rather than agitation, carbohydrate and sweet cravings, low energy, fatigue that sleep does not fix. The underlying dynamic: Kapha&apos;s heavy dense quality is contributing to stagnation and fluid accumulation. The remedy is stimulating circulation and reducing heavy sweet food.
            </p>

            <h2>The herbs.</h2>
            <p>
              Shatavari is the foundation for all PMS types — a cooling, nourishing, deeply reproductive-system-specific herb that supports the luteal phase by maintaining hormonal stability and nourishing the reproductive tissues. Give it two to three cycles before evaluating. Triphala is used nightly for general elimination and gut health — since constipation and incomplete elimination directly aggravate PMS symptoms across all dosha types, regular gentle elimination is foundational. For Vata PMS specifically: Ashwagandha for the nervous system and adrenal support (the anxiety, insomnia, and pain of Vata PMS are rooted in a depleted nervous system). For Pitta PMS: Brahmi and Shatavari together — cooling the mind and cooling the reproductive system. Neem for skin inflammation that tracks with the cycle. For Kapha PMS: Trikatu (ginger, black pepper, long pepper) to stimulate metabolism and circulation.
            </p>

            <h2>Diet in the two weeks before your period.</h2>
            <p>
              Reduce alcohol — the most consistently impactful dietary change for PMS across all types. Alcohol is processed by the liver, which also metabolises estrogen. Alcohol in the luteal phase directly impairs estrogen clearance and worsens most PMS symptoms. Eat more warming fat — ghee, avocado, coconut, nuts. The building blocks of progesterone. Women who eat very low-fat diets often have the most significant PMS. Reduce cold raw and light food as the luteal phase progresses. Increase sweet cooked root vegetables — sweet potato, beets, squash. Reduce caffeine, which increases breast tenderness and anxiety particularly for Vata and Pitta types.
            </p>

            <h2>The lifestyle piece.</h2>
            <p>
              The body as the cycle approaches its end naturally moves toward introspection, slower energy, and a need for rest. This is not dysfunction — it is biology. The misery of PMS is often amplified by fighting this pull: maintaining the same social commitments, work pace, and exercise intensity in the week before the period as in the two weeks after it. Ayurveda recommends reducing the pace in the luteal phase deliberately. Earlier sleep. Less vigorous exercise (walking, restorative yoga, swimming rather than HIIT). More quiet time. Less social obligation. Even modest adjustments — going to bed thirty minutes earlier, skipping one obligation, choosing the walk over the spin class — have a real and measurable effect on PMS symptoms when done consistently.
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
              <Link href="/blog/womens-health-ayurveda" className="text-[#C97F3D] hover:underline">
                Women&apos;s Health and Ayurveda
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/best-herbs-for-anxiety" className="text-[#C97F3D] hover:underline">
                Best Herbs for Anxiety
              </Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
