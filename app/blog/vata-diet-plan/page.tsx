import Link from "next/link"

export const metadata = {
  title: "Vata Diet Plan: What to Eat, What to Avoid, and How to Fix Your Digestion",
  description:
    "The complete Vata diet plan — best foods for Vata dosha, what to avoid, and a practical daily template including the most common Vata dietary mistakes.",
  openGraph: {
    title: "Vata Diet Plan: What to Eat, What to Avoid, and How to Fix Your Digestion",
    description:
      "The complete Vata diet plan — best foods for Vata dosha, what to avoid, and a practical daily template including the most common Vata dietary mistakes.",
    url: "https://www.doshaflow.com/blog/vata-diet-plan",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/vata-diet-plan",
  },
}

export default function VataDietPlanPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f3]">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <Link href="/" className="text-xl font-bold text-[#2c1a0e]">
          Dosha<span className="text-[#c49a6c]">Flow</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/blog" className="text-sm text-[#5c4a3a] hover:text-[#2c1a0e]">
            Blog
          </Link>
          <Link href="/quiz" className="text-sm bg-[#2c1a0e] text-white px-4 py-2 rounded-full hover:bg-[#3d2b1f]">
            Take the Quiz
          </Link>
        </div>
      </nav>

      {/* Article */}
      <main className="max-w-[680px] mx-auto px-6 py-12">
        <article>
          {/* Post Header */}
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">June 7, 2026</time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              Vata Diet Plan: What to Eat, What to Avoid, and How to Fix Your Digestion
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none text-[#2c2218]" style={{ lineHeight: 1.75 }}>
            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              If you are Vata, you have probably been given dietary advice that made your digestion worse. More raw food. More salads. Cold smoothies. Intermittent fasting. All of these are extremely popular, all of them are aggressively Vata-aggravating, and all of them explain why you might have spent years eating healthily while still bloated, irregular, anxious, and exhausted. The Vata diet is not complicated. It is almost entirely the opposite of what modern wellness culture recommends.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              What Vata Actually Needs.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Vata is cold, dry, light, and irregular. The diet for Vata needs to counterbalance every one of those qualities: warm, moist, heavy, and consistent. The three most important Vata dietary principles: Eat warm food — cooked, ideally. The digestive fire of a Vata type is already irregular and easily disturbed; cold food suppresses it further. Eat at consistent times — Vata's irregularity means agni is strongest when meals are predictable. Skipping breakfast, eating dinner at 10pm, grazing throughout the day prevent agni from stabilising. Eat enough — Vata types often under-eat, driven by irregular hunger signals, then overeat, then feel terrible. Three proper meals, warm, at consistent times, is the foundation.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Best Foods for Vata.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Grains: Oatmeal, rice, wheat, quinoa. Cook them well. Add ghee. Never dry or crunchy. Vegetables: Cooked, not raw. Sweet potato, beets, carrots, zucchini, asparagus, winter squash. Raw salads, particularly at dinner, are one of the most common Vata mistakes. Fruits: Sweet, ripe, room temperature or cooked. Bananas, mangoes, peaches, avocado. Cold fruit straight from the fridge is Vata-aggravating. Proteins: Small amounts of well-cooked meat are excellent for Vata — chicken, turkey, fish, eggs. Well-soaked, well-cooked lentils with digestive spices are manageable. Fats: Ghee is the king of Vata foods. Liberal use of ghee in cooking directly counters Vata's dryness, lubricates the digestive tract, and builds tissues. Sesame oil, olive oil, avocado, nuts — Vata genuinely needs fat in a way other doshas do not. Dairy: Warm milk with cardamom, cinnamon, nutmeg at night is one of the most classically recommended Vata tonics. Spices: Ginger, cardamom, cinnamon, cumin, coriander, fennel, turmeric. Cook with them liberally.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              Foods Vata Should Avoid or Reduce.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Raw and cold food: Raw salads, cold smoothies, cold water, food from the refrigerator. They directly suppress Vata's already-fragile digestive fire. Dry, light, crunchy foods: Rice cakes, crackers, dry cereal, popcorn. These increase Vata's dryness. Caffeine in excess: Coffee on an empty stomach is particularly Vata-aggravating — it stimulates the already-overactive nervous system. Carbonated drinks: The gas directly aggravates Apana Vata in the lower digestive tract. Alcohol: Depleting and drying. Vata types are among the most sensitive to alcohol's effect on sleep quality. Irregular eating: The most Vata-aggravating dietary habit of all.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              The Vata Daily Food Plan.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Morning: Warm water with lemon. Oatmeal with ghee, cardamom, cinnamon. One cup of spiced chai or ginger tea after food. Lunch (main meal): Kitchari — rice and mung dal with ghee and spices — is the ideal Vata meal. Or well-cooked rice with warming soup, roasted root vegetables, and generous ghee. Lunch should be the largest meal. Dinner: Lighter than lunch. Warm vegetable soup with well-cooked grains. Not raw, not heavy, not late. Evening: Warm milk with cardamom, cinnamon, and a small amount of ashwagandha powder before bed — the classical Vata nighttime tonic.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              The Most Important Vata Supplement.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Triphala taken with warm water before bed. It gently regulates elimination, feeds beneficial gut bacteria, and addresses the constipation and irregularity that most Vata types experience. Give it two weeks of consistent use.
            </p>

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              A Note on Seasonal Adjustments.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Vata is most elevated in autumn and early winter — the cold, dry, windy season that mirrors Vata's own qualities. During this period, increase warming, oily, heavy foods and reduce all raw and cold food.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <div style={{ marginTop: "48px", padding: "32px", backgroundColor: "#f5ece0", border: "1px solid #e8d9c5", borderRadius: "16px", textAlign: "center" }}>
              <p style={{ fontSize: "18px", fontWeight: 600, color: "#2c1a0e", marginBottom: "16px" }}>Not sure if you are Vata?</p>
              <Link href="/quiz" style={{ display: "inline-block", backgroundColor: "#9a7a5a", color: "#fdf8f3", padding: "14px 28px", borderRadius: "9999px", textDecoration: "none", fontWeight: 600, fontSize: "15px" }}>
                Take the Free Dosha Quiz →
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e8d9c5] mt-24 py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-[#5c4a3a]">
          <p>© 2026 DoshaFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
