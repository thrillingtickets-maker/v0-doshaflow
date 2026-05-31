"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function AyurvedicSkinGuide() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="The Ayurvedic Skin Guide: Why Your Skin Reflects What Is Happening Inside"
        category="article"
        date="May 27, 2026"
        highlightWord="Inside"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Ayurveda has a saying that the skin is the mirror of the gut. Before dermatology named the gut-skin axis and started publishing research on it, Ayurvedic practitioners had been treating skin conditions by treating the digestive system for thousands of years. The logic is direct: the skin is the body&apos;s largest elimination organ, and what cannot be processed internally expresses externally. Instead of asking what to put on your skin, the Ayurvedic question is: what is the skin trying to eliminate that the body cannot process through its normal channels?
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Skin by dosha: what your skin type tells you.</h2>
            <p>
              Vata skin is naturally dry, thin, fine-pored, and prone to dryness, flakiness, and premature ageing. When Vata is balanced, this skin has a delicate, luminous quality. When Vata is elevated, it becomes rough, cracked, and excessively dry — particularly in cold dry seasons and in response to dehydration, irregular eating, and chronic stress. The most consistent Vata skin complaint is dryness that no amount of external moisturiser fully resolves — because the issue is internal. Pitta skin is naturally warm, slightly oily in the T-zone, medium-pored, and sensitive. When Pitta is elevated, it produces acne (particularly inflammatory cystic acne), rosacea, eczema, psoriasis, rashes, and the skin flares that track with the menstrual cycle, alcohol consumption, and stress. The most consistent Pitta skin complaint is inflammation — skin that reacts to stress, diet, and environmental triggers. Kapha skin is naturally thick, oily, large-pored, and prone to congestion and sluggishness. When Kapha is elevated, it produces congestion, enlarged pores, blackheads and whiteheads, dullness, and skin that looks tired regardless of how much sleep you have had.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The internal causes of skin problems.</h2>
            <p>
              Ama — undigested residue from incomplete digestion. When the digestive system is not processing food completely, the residue that should be eliminated instead circulates and deposits in the tissues. The skin eliminates what the gut cannot, which produces the congestion, breakouts, and dullness that are the visible expression of ama accumulation. Impaired liver function — the liver filters the blood and processes hormones, toxins, and metabolic waste. When the liver is overburdened by alcohol, processed food, or chronic inflammation, the skin takes up the slack. This is the mechanism behind hormonally-driven acne and the skin flares that follow periods of heavy drinking. Disrupted gut microbiome — the gut and skin communicate directly through inflammatory pathways. Dysbiosis produces systemic inflammation that manifests visibly on the skin.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Herbs for skin.</h2>
            <p>
              Manjistha is the primary blood and lymph purifying herb in Ayurveda — the most specific herb for skin conditions. It clears ama from the blood and lymph, reduces inflammation, and is used for acne, hyperpigmentation, eczema, and skin dullness. Most appropriate for Vata and Kapha skin. Neem is bitter, cooling, and deeply antimicrobial — used internally for Pitta-driven inflammatory skin conditions (acne, rosacea, eczema) and externally as an oil or paste. Turmeric is anti-inflammatory, antioxidant, and liver-supportive — used internally with black pepper to increase absorption, and externally as a mask. Shatavari is the primary herb for hormonally-driven skin conditions in women — the jawline acne of the luteal phase, the flushing of PMS. Triphala works on skin through the gut — by improving elimination, reducing ama, and supporting liver function, it addresses the upstream causes of most skin conditions. The skin improvement people notice after 4-6 weeks of consistent Triphala is the gut-skin axis working in the direction it is supposed to.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Diet for skin.</h2>
            <p>
              Reduce alcohol — the most impactful single dietary change for people with inflammatory skin conditions. Regular alcohol consumption impairs the liver&apos;s ability to clear hormones and toxins, and the overflow expresses on the skin. Reduce sugar and refined carbohydrates — these drive blood sugar spikes that trigger insulin and IGF-1, hormones that directly stimulate sebum production and the inflammatory cascade that produces acne. Increase bitter greens — kale, arugula, dandelion greens are directly liver-supportive. Increase warm fat — ghee, avocado, sesame oil, coconut oil provide the building blocks for skin cell membranes and the hormones that regulate skin health. Avoid incompatible combinations — the most skin-relevant: fish with dairy, fruit with dairy, and eating fruit immediately after a heavy meal.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">External care: Ayurvedic skin practices.</h2>
            <p>
              Abhyanga — the daily warm oil massage — is the cornerstone of Ayurvedic skincare. It forms a protective barrier, nourishes skin tissues directly, supports lymphatic circulation, and activates the parasympathetic nervous system which reduces cortisol-driven skin inflammation. Vata skin: warm sesame oil — the heaviest and most nourishing, directly addressing dryness. Pitta skin: coconut oil or sunflower oil — cooling and anti-inflammatory. Kapha skin: lighter oils or dry brushing followed by a lighter oil application. Turmeric face mask — a paste of turmeric, raw honey, and either yogurt (for Pitta) or warm milk (for Vata), applied for 10-15 minutes, 1-2 times weekly. Rosewater for Pitta skin as a toner after cleansing — cooling, anti-inflammatory, and mildly astringent.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The timeline.</h2>
            <p>
              Two weeks: digestion begins to improve, which is the foundation. Four weeks: a reduction in the frequency or severity of breakouts or flares for most people. Eight weeks: the quality of the skin — texture, tone, luminosity — begins to visibly change. Twelve weeks: the most significant visible changes. At this point the gut microbiome has had time to rebalance, the liver is working more efficiently, and the skin is receiving better inputs than it was three months ago. This timeline is why Ayurvedic skin protocols feel slow at first. The results are not cosmetic — they are structural. They last.
            </p>
          </div>

          {/* Related Articles */}
          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Related Articles
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/blog/ayurveda-30-days" className="text-[#C97F3D] hover:underline">
                I Followed an Ayurvedic Routine for 30 Days: Here&apos;s What Actually Changed
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/eating-for-your-dosha" className="text-[#C97F3D] hover:underline">
                Eating for Your Dosha
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
