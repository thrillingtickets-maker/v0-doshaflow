import Link from "next/link"

export const metadata = {
  title: "Ayurvedic Tea Guide: Best Teas for Vata, Pitta, and Kapha Dosha",
  description:
    "The complete guide to Ayurvedic tea by dosha — which herbs Vata, Pitta, and Kapha types actually need, and how to use herbal tea as a daily health practice.",
  openGraph: {
    title: "Ayurvedic Tea Guide: Best Teas for Vata, Pitta, and Kapha Dosha",
    description:
      "The complete guide to Ayurvedic tea by dosha — which herbs Vata, Pitta, and Kapha types actually need, and how to use herbal tea as a daily health practice.",
    url: "https://www.doshaflow.com/blog/ayurvedic-tea-guide",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/ayurvedic-tea-guide",
  },
}

export default function AyurvedicTeaGuidePage() {
  return (
    <div className="min-h-screen bg-[#fdf8f3]">
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

      <main className="max-w-[680px] mx-auto px-6 py-12">
        <article>
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">June 1, 2026</time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              Ayurvedic Tea Guide: Best Teas for Vata, Pitta, and Kapha Dosha
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-[#2c2218]" style={{ lineHeight: 1.75 }}>
            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Most herbal teas are generic. A blend marketed as "calming" or "digestive" without regard for who is drinking it is, in Ayurvedic terms, missing the entire point. The system is built on the premise that what works for one person actively works against another — and this is nowhere more true than in what you drink every day.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              What Ayurveda Actually Says About Tea.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              The Ayurvedic tradition has an extensive pharmacopoeia of herbal preparations. Many of the herbs in these preparations translate directly into modern herbal teas, and the reasoning behind their use is specific: which dosha is being addressed, in which season, at what time of day, and for what condition. The concept of anupana — the vehicle through which a herb is delivered — matters enormously. Warm water is considered the ideal delivery medium for most Ayurvedic herbs because it enhances bioavailability and is itself considered beneficial. Herbal teas, in this sense, are a practical expression of classical Ayurvedic medicine.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              <Link href="/blog/vata-dosha-guide" className="text-[#c49a6c] hover:underline">Vata</Link> Tea: Warming, Grounding, Calming.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Vata is the dosha of air and ether — cold, dry, light, and mobile. When Vata is elevated: anxiety, irregular digestion, constipation, scattered thinking, insomnia, restlessness. The tea for Vata needs to be warming, heavy, moist, and grounding. <strong>Key herbs:</strong> Ashwagandha is the cornerstone Vata herb — deeply nourishing to the nervous system, clinically shown to reduce cortisol. Takes 4-8 weeks to fully act. Ginger root kindles agni, which Vata types tend to have in an irregular state. Cardamom is warming, digestive, and mildly nervine. Cinnamon and licorice root add warmth and adrenal support. <strong>Best time:</strong> morning and evening 30 minutes before bed. Always warm — never cold. See our guide on <Link href="/blog/best-ayurvedic-tea-anxiety" className="text-[#c49a6c] hover:underline">teas for anxiety</Link> for more detail.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              <Link href="/blog/pitta-dosha-guide" className="text-[#c49a6c] hover:underline">Pitta</Link> Tea: Cooling, Calming, Anti-inflammatory.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Pitta is the dosha of fire and water — hot, sharp, and intense. When Pitta is elevated: inflammation, skin flares, acid reflux, irritability, heavy periods, headaches. The tea for Pitta needs to cool, not stimulate. <strong>Key herbs:</strong> Shatavari is the primary Pitta-cooling herb, particularly for women — deeply nourishing, hormonally supportive, and cooling. Brahmi cools the mind and supports cognitive function. Rose petal is cooling and anti-inflammatory. Fennel and coriander are cooling digestive herbs that counter the acid reflux Pitta types commonly experience. <strong>Best time:</strong> midday and after meals. Drink warm or slightly cooled — not very hot. Learn more in our guide on <Link href="/blog/best-ayurvedic-tea-anxiety" className="text-[#c49a6c] hover:underline">teas for anxiety</Link>.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              <Link href="/blog/kapha-dosha-guide" className="text-[#c49a6c] hover:underline">Kapha</Link> Tea: Warming, Stimulating, Moving.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Kapha is the dosha of earth and water — heavy, slow, dense, and stable. When Kapha is elevated: weight gain, sluggish digestion, water retention, fatigue that sleep does not fix, emotional flatness. The tea for Kapha needs to be stimulating, light, and heating. <strong>Key herbs:</strong> Trikatu — the three spices of ginger, black pepper, and long pepper — directly stimulates agni and fires up a metabolism that naturally runs slow. Turmeric is anti-inflammatory and metabolically supportive, especially when combined with black pepper. <strong>Best time:</strong> first thing in the morning, before breakfast, before coffee. See our guides on <Link href="/blog/best-ayurvedic-tea-sleep" className="text-[#c49a6c] hover:underline">sleep teas</Link> and <Link href="/blog/best-ayurvedic-tea-digestion" className="text-[#c49a6c] hover:underline">digestion teas</Link> for more options.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              The Herbs That Appear Across All Three Doshas.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Triphala is the most important tridoshic formula in the classical pharmacopoeia. Taken at night, it gently supports elimination, feeds beneficial gut bacteria, and detoxifies without depleting. Holy Basil (Tulsi) is adaptogenic and moderately balancing for all three doshas — as a daily tea it supports the stress response and immune function. Small quantities of fresh ginger work across all doshas.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              A Note on Quality.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              The difference between a functional Ayurvedic tea and an expensive flavoured water is the quality of the herbs. Organic, third-party tested herbs from suppliers with transparent sourcing from India will produce meaningfully different effects than commodity blends. Loose leaf or pyramid bags with whole or roughly cut herbs are preferable to finely ground powder in standard tea bags.
            </p>

            <hr style={{ margin: "40px 0", borderColor: "#e8d9c5" }} />

            <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", color: "#2c1a0e" }}>
              How to Use Tea as a Daily Ayurvedic Practice.
            </h2>

            <p style={{ marginBottom: "20px", lineHeight: 1.75 }}>
              Consistency matters more than any other variable. A moderate herb taken daily for six weeks produces more significant results than a high-dose intervention taken sporadically. Drink warm, not cold. Sit down. Time your teas by dosha period: morning (6-10am) is Kapha time and ideal for stimulating teas. Midday (10am-2pm) is Pitta time and ideal for cooling teas. Evening (6-10pm) — heavy, grounding, sleep-supporting teas belong here.
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
                Not sure which tea is right for you?
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
