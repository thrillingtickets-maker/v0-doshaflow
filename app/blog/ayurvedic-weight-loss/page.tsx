import Link from "next/link"

export const metadata = {
  title: "Ayurvedic Weight Loss Guide: Why Diets Do Not Work for Your Dosha (And What Does)",
  description:
    "Ayurveda explains weight gain by dosha — Vata, Pitta, and Kapha each gain weight for different reasons and need different approaches. The complete Ayurvedic weight loss guide.",
  openGraph: {
    title: "Ayurvedic Weight Loss Guide: Why Diets Do Not Work for Your Dosha (And What Does)",
    description:
      "Ayurveda explains weight gain by dosha — Vata, Pitta, and Kapha each gain weight for different reasons and need different approaches. The complete Ayurvedic weight loss guide.",
    url: "https://www.doshaflow.com/blog/ayurvedic-weight-loss",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/ayurvedic-weight-loss",
  },
}

export default function AyurvedicWeightLossPage() {
  return (
    <main className="max-w-[680px] mx-auto px-6 py-12">
        <article>
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">June 13, 2026</time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              Ayurvedic Weight Loss Guide: Why Diets Do Not Work for Your Dosha (And What Does)
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-[#2c2218]" style={{ lineHeight: 1.75 }}>
            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Ayurveda does not have a weight loss diet. It has something more useful: a framework for understanding why your metabolism works the way it does, and what specific changes — based on your constitution, not a generic plan — will actually produce results. The reason most diets fail is not lack of willpower. It is that they are designed for a hypothetical average person and you are not that person.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Weight Gain by Dosha.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Vata weight patterns: Vata types are naturally lean but can gain weight from stress, irregular eating, and using food to fill voids. Vata weight tends to be fluid — it comes on in response to specific patterns and leaves relatively quickly when those patterns change. The bigger Vata issue is often not weight but body composition — low muscle mass from under-eating and irregular protein intake. Pitta weight patterns: Pitta types have strong metabolism but gain weight from inflammation, alcohol, and eating to manage stress. Pitta weight tends to accumulate around the midsection and correlates strongly with cortisol and inflammatory inputs. Reducing these inputs often produces more weight change than any caloric restriction. Kapha weight patterns: Kapha has the most significant tendency toward weight gain — the metabolism naturally runs slow, fat storage is efficient, and the appetite-satiety signalling is delayed. Kapha weight is the most stable and requires the most consistent intervention to shift.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?ayurvedic,herbs,spices,india,wellness" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Ayurvedic herbs and spices" />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              What Ayurveda Says About Metabolism.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Ayurveda identifies three types of metabolic fire. Sama agni — balanced, regular, efficient. Vishama agni — irregular, the Vata pattern: bloating, gas, constipation, and irregular appetite. Tikshna agni — sharp or excessive, the Pitta pattern: strong appetite and fast digestion but prone to hyperacidity and inflammation. Manda agni — slow, the Kapha pattern: everything processed slowly, ama accumulates more easily, weight comes on more readily. The Ayurvedic weight loss approach is not to reduce calories across all three patterns — it is to treat the specific digestive pattern producing the weight.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Weight Loss for Vata.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              For Vata, the goal is regulation not restriction. Eat at consistent times — three meals a day, same time every day. This alone regulates the Vata hunger signal and reduces the overeating that follows periods of under-eating. Eat warm, cooked food — cold, raw food weakens Vata digestion and produces more ama, which the body stores rather than eliminating. Increase protein — Vata types are often chronically under-eating protein, producing low muscle mass and slow metabolism. Reduce stress — Vata cortisol-driven eating has a measurable effect on body composition; addressing the nervous system through ashwagandha, regular routine, and adequate sleep helps.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Weight Loss for Pitta.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              For Pitta, reduce the inflammatory inputs that drive the specific Pitta fat storage pattern. Reduce alcohol — the single most impactful dietary change for most Pitta types carrying excess weight. Two weeks of significantly reduced alcohol will produce visible results for most Pitta types. Reduce spicy and fried food. Eat the largest meal at lunch — Pitta digestion peaks between noon and 2pm. Cool the system with bitter greens, cucumber, coconut, and fennel.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?healthy,food,fresh,vegetables,cooking" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Anti-inflammatory foods for Pitta weight loss" />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Weight Loss for Kapha.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Kapha is where the most direct dietary intervention is needed and where results — when the approach is correct — are also the most dramatic. Eat the lightest diet: light grains, abundant vegetables particularly bitter and leafy, minimal fat, minimal dairy, no cold food, very limited sweets. Use spice aggressively: trikatu before meals, ginger and black pepper in cooking. Skip or minimise breakfast — Kapha digestion is at its slowest in the morning. Exercise before breakfast — the most important non-dietary Kapha intervention. Eat early — Kapha should ideally finish eating by 7pm.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              What All Three Doshas Share.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Warm water first thing in the morning — kindles agni and initiates elimination. Consistent meal times — all three doshas benefit from the metabolic rhythm this produces. No eating after 8pm — late eating produces ama in all constitutions. Triphala at night — the most universally applicable Ayurvedic digestive herb.
            </p>

            <img src="https://source.unsplash.com/featured/800x450/?morning,water,lemon,wellness,routine" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Morning warm lemon water ritual" />

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <div style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f5ece0", border: "1px solid #e8d9c5", borderRadius: "16px", textAlign: "center" }}>
              <p style={{ fontSize: "18px", fontWeight: 600, color: "#2c1a0e", marginBottom: "16px" }}>Discover your dosha and personalise your approach</p>
              <Link href="/quiz" style={{ display: "inline-block", backgroundColor: "#9a7a5a", color: "#fdf8f3", padding: "14px 28px", borderRadius: "9999px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
                Take the Free Dosha Quiz →
              </Link>
            </div>
          </div>
        </article>
      </main>

      <footer className="border-t border-[#e8d9c5] mt-24 py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-[#5c4a3a]">
          <p>© 2026 DoshaFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}