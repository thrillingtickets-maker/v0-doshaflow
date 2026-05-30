import Link from "next/link"
import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "The Ayurvedic Skin Guide: Why Your Skin Reflects What Is Happening Inside",
  description:
    "Ayurveda treats skin conditions from the inside — through the gut, liver, and doshas. The complete guide to Ayurvedic skincare by skin type, herbs, diet, and external practices.",
  openGraph: {
    title: "The Ayurvedic Skin Guide: Why Your Skin Reflects What Is Happening Inside",
    description:
      "Ayurveda treats skin conditions from the inside — through the gut, liver, and doshas. The complete guide to Ayurvedic skincare by skin type, herbs, diet, and external practices.",
    url: "https://www.doshaflow.com/blog/ayurvedic-skin-guide",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/ayurvedic-skin-guide",
  },
}

export default function AyurvedicSkinGuidePage() {
  return (
    

      <ArticleLayout>
      <main className="max-w-[680px] mx-auto px-6 py-12">
        <article>
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">June 15, 2026</time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              The Ayurvedic Skin Guide: Why Your Skin Reflects What Is Happening Inside
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-[#2c2218]" style={{ lineHeight: 1.75 }}>
            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Ayurveda has a saying that the skin is the mirror of the gut. Before dermatology named the gut-skin axis and started publishing research on it, Ayurvedic practitioners had been treating skin conditions by treating the digestive system for thousands of years. The logic is direct: the skin is the body's largest elimination organ, and what cannot be processed internally expresses externally. Instead of asking what to put on the skin, the Ayurvedic question is: what is the skin trying to eliminate that the body cannot process through its normal channels?
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Skin by Dosha: What Your Skin Type Tells You.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Vata skin is naturally dry, thin, fine-pored, and prone to dryness, flakiness, and premature ageing. When Vata is balanced it has a delicate, luminous quality. When elevated it becomes rough, cracked, and excessively dry — particularly in cold, dry seasons and in response to chronic stress. The most consistent Vata skin complaint is dryness that no amount of external moisturiser fully resolves — because the issue is internal. Pitta skin is naturally warm, slightly oily in the T-zone, medium-pored, and sensitive. When Pitta is balanced it has a natural glow. When elevated it produces acne (particularly inflammatory and cystic), rosacea, eczema, psoriasis, and skin flares that track with the menstrual cycle, alcohol consumption, and stress. The most consistent Pitta skin complaint is inflammation — skin that reacts to stress, diet, and environmental triggers with redness and breakouts. Kapha skin is naturally thick, oily, large-pored, and prone to congestion and sluggishness. When Kapha is balanced it is supple and resilient. When elevated it produces congestion, enlarged pores, blackheads, dullness, and the kind of skin that looks tired regardless of how much sleep you have had.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?skin,face,glow,natural,beauty" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Natural skin glow" />

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              The Internal Causes of Skin Problems.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Ama — undigested residue from incomplete digestion. When the digestive system is not processing food completely, the residue that should be eliminated instead circulates and deposits in the tissues. The skin eliminates what the gut cannot — which produces the congestion, breakouts, and dullness that are the visible expression of ama accumulation. Impaired liver function — the liver filters the blood and processes hormones, toxins, and metabolic waste. When the liver is overburdened by alcohol, processed food, or chronic inflammation, it cannot process everything and the skin takes up the slack. This is the mechanism behind hormonally-driven acne and the dullness that accompanies liver congestion. Disrupted gut microbiome — the gut and skin communicate directly through inflammatory pathways. Dysbiosis produces systemic inflammation that manifests visibly on the skin.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Herbs for Skin.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Manjistha is the primary blood and lymph purifying herb in Ayurveda and the most specific herb for skin conditions. It clears ama from the blood and lymph, reduces inflammation, and is used for acne, hyperpigmentation, eczema, and skin dullness. Neem is bitter, cooling, and deeply antimicrobial. Used internally for Pitta-driven inflammatory skin conditions — acne, rosacea, eczema — and externally as an oil or paste. It is the primary Pitta skin herb. Turmeric is anti-inflammatory, antioxidant, and liver-supportive — it works by reducing systemic inflammation and supporting the liver's ability to process hormones and toxins. Used internally with black pepper to increase absorption. Shatavari is the primary herb for hormonally-driven skin conditions in women — the jawline acne of the luteal phase, the flushing of PMS. It addresses these by supporting estrogen metabolism and cooling the Pitta excess that drives them. Triphala works on skin through the gut — by improving elimination, reducing ama, and supporting liver function it addresses the upstream causes of most skin conditions. The skin improvement after 4-6 weeks of consistent Triphala is the gut-skin axis working in the direction it is supposed to.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?turmeric,neem,herbs,ayurvedic,powder" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Ayurvedic herbs for skin" />

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Diet for Skin.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Reduce alcohol — alcohol is processed by the liver which also processes estrogen. Regular alcohol consumption impairs the liver's ability to clear these compounds and the overflow expresses on the skin. For people with inflammatory skin conditions, reducing alcohol is consistently the most impactful single dietary change. Reduce sugar and refined carbohydrates — these drive blood sugar spikes that trigger insulin and IGF-1, hormones that directly stimulate sebum production and the inflammatory cascade that produces acne. Increase bitter greens — kale, arugula, dandelion greens are directly liver-supportive. Increase warm fat — ghee, avocado, sesame oil, coconut oil provide the building blocks for skin cell membranes and the hormones that regulate skin health. Avoid incompatible combinations — the most skin-relevant: fish with dairy, fruit with dairy, and eating fruit immediately after a heavy meal.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              External Care: Ayurvedic Skin Practices.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Abhyanga — the daily warm oil massage — is the cornerstone of Ayurvedic skincare. The oil forms a protective barrier, nourishes skin tissues directly, supports lymphatic circulation, and activates the parasympathetic nervous system which reduces cortisol-driven skin inflammation. Vata skin: warm sesame oil — the heaviest and most nourishing, directly addressing dryness. Pitta skin: coconut oil or sunflower oil — cooling and anti-inflammatory. Kapha skin: lighter oils — sunflower or safflower — or dry brushing followed by a lighter oil. Turmeric face mask — a paste of turmeric, raw honey, and either yogurt for Pitta or warm milk for Vata, applied for 10-15 minutes, addresses surface inflammation and gives the skin brightness. Used 1-2 times weekly. Rosewater particularly for Pitta skin as a toner after cleansing — cooling, anti-inflammatory, and mildly astringent. Neem oil diluted in a carrier oil as a spot treatment for Pitta-driven inflammatory acne.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?oil,massage,face,ayurvedic,skincare" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Ayurvedic oil skincare" />

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              The Timeline.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Two weeks: digestion begins to improve, which is the foundation. Four weeks: a reduction in the frequency or severity of breakouts or flares for most people. Eight weeks: the quality of skin — texture, tone, luminosity — begins to visibly change. Twelve weeks: the most significant visible changes. At this point the gut microbiome has had time to rebalance, the liver is working more efficiently, and the skin is receiving better inputs than it was three months ago. This is why Ayurvedic skin protocols feel slow at first. The results are not cosmetic — they are structural. They last.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <div style={{ 
              backgroundColor: "#f5ede1", 
              padding: "24px", 
              borderRadius: "8px", 
              marginTop: "40px",
              marginBottom: "40px",
              borderLeft: "4px solid #c49a6c"
            }}>
              <p style={{ marginBottom: "16px", lineHeight: 1.75, fontWeight: 500 }}>
                Your skin type is determined by your dosha. Understanding this changes everything about what works and what doesn't.
              </p>
              <Link href="/quiz" className="inline-block bg-[#2c1a0e] text-white px-6 py-2 rounded-full hover:bg-[#3d2b1f] text-sm font-medium">
                Take the Free Dosha Quiz
              </Link>
            </div>

            <p style={{ marginBottom: "20px", lineHeight: 1.75, fontStyle: "italic" }}>
              Alex is the founder of DoshaFlow. <Link href="/quiz" className="text-[#c49a6c] hover:underline">Take the dosha quiz</Link> · <Link href="/blog" className="text-[#c49a6c] hover:underline">Read more articles</Link>
            </p>
          </div>
        </article>
      </main>
    </div>
  )
}
