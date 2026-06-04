import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dosha Diet Plans: Vata, Pitta & Kapha Nutrition Guide",
  description: "Complete diet guides for each dosha. Learn what to eat based on your constitution for optimal digestion, energy, and health.",
  openGraph: {
    title: "Dosha Diet Plans: Vata, Pitta & Kapha Nutrition Guide",
    description: "Complete diet guides for each dosha. Learn what to eat based on your constitution for optimal digestion, energy, and health.",
    type: "website",
    url: "https://www.doshaflow.com/dosha-diets",
  },
}

export const dynamic = 'force-dynamic'

export default function DoshaDietsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#C97F3D]/10 text-[#C97F3D] text-xs font-medium tracking-widest uppercase rounded-full mb-6">
            Dosha Diet Guides
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Eat for Your Constitution, Not Your Calories
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your dosha determines what foods heal you and what foods create imbalance. Here are the complete diet guides for optimal digestion, energy, and health.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="px-6 pb-24">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Why Diet Matters by Dosha
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                In Ayurveda, food is medicine. But what is medicine for one person may be poison for another. The difference is constitutional type — your dosha.
              </p>
              <p>
                Vata types need warming, grounding foods to balance their naturally mobile and light nature. Pitta types need cooling, calming foods to balance their inherent heat and intensity. Kapha types need stimulating, lightening foods to counter their naturally heavy and slow nature.
              </p>
              <p>
                Eating according to your dosha is not about following a diet trend. It is about creating internal balance through food choices that match your individual biology. The result is better digestion, more stable energy, clearer skin, sounder sleep, and a body that naturally maintains its optimal weight.
              </p>
            </div>
          </section>

          {/* Diet Plans */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
              Complete Diet Plans by Dosha
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Vata Diet */}
              <div className="border border-[#E0D5C5] rounded-lg p-8 hover:border-[#C97F3D] transition-colors">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#C97F3D]/10 text-[#C97F3D] text-xs font-medium tracking-widest uppercase rounded mb-4">
                    Vata Diet
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">
                    Warming & Grounding
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Vata types thrive on warm, cooked, nourishing foods. Learn which foods calm your nervous system, stabilize your energy, and support deep digestion.
                </p>
                <Link 
                  href="/blog/vata-diet-plan" 
                  className="inline-flex items-center text-[#C97F3D] hover:text-[#A0662E] font-medium transition-colors"
                >
                  View Vata Diet Plan →
                </Link>
              </div>

              {/* Pitta Diet */}
              <div className="border border-[#E0D5C5] rounded-lg p-8 hover:border-[#C97F3D] transition-colors">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#C97F3D]/10 text-[#C97F3D] text-xs font-medium tracking-widest uppercase rounded mb-4">
                    Pitta Diet
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">
                    Cooling & Soothing
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Pitta types need cooling, gentle foods to balance your natural intensity. Learn which foods reduce inflammation, cool your system, and support steady energy without burnout.
                </p>
                <Link 
                  href="/blog/pitta-diet-plan" 
                  className="inline-flex items-center text-[#C97F3D] hover:text-[#A0662E] font-medium transition-colors"
                >
                  View Pitta Diet Plan →
                </Link>
              </div>

              {/* Kapha Diet */}
              <div className="border border-[#E0D5C5] rounded-lg p-8 hover:border-[#C97F3D] transition-colors">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#C97F3D]/10 text-[#C97F3D] text-xs font-medium tracking-widest uppercase rounded mb-4">
                    Kapha Diet
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">
                    Stimulating & Light
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Kapha types need warming, stimulating foods to build metabolic fire. Learn which foods increase energy, support weight management, and keep you feeling light and motivated.
                </p>
                <Link 
                  href="/blog/kapha-diet-plan" 
                  className="inline-flex items-center text-[#C97F3D] hover:text-[#A0662E] font-medium transition-colors"
                >
                  View Kapha Diet Plan →
                </Link>
              </div>
            </div>
          </section>

          {/* Supporting Articles */}
          <section className="border-t border-[#E0D5C5] pt-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
              Related Nutrition Guides
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-[#E0D5C5]">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2">
                    <Link href="/blog/ayurvedic-seasonal-eating" className="text-[#C97F3D] hover:underline">
                      Ayurvedic Seasonal Eating
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to align your diet with each season for optimal digestion and health.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-[#E0D5C5]">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2">
                    <Link href="/blog/digestive-agni-fire" className="text-[#C97F3D] hover:underline">
                      Digestive Agni: The Core Principle of Ayurvedic Nutrition
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Understand how to assess and strengthen your digestive fire for better nutrient absorption.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-[#E0D5C5]">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-2">
                    <Link href="/blog/food-combining-principles" className="text-[#C97F3D] hover:underline">
                      Food Combining: The Ayurvedic Principles of Compatible Foods
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn which food combinations support clean digestion and which create stress.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-[#F0EBE2] rounded-lg p-8 md:p-12 text-center mt-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Not Sure What Your Dosha Is?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take our free dosha quiz to discover your constitutional type and get personalized recommendations for diet, lifestyle, and wellness practices.
            </p>
            <Link 
              href="/quiz" 
              className="inline-block bg-[#2A1F14] text-[#F5F0E8] px-8 py-3 rounded-lg font-medium hover:bg-[#1F1710] transition-colors"
            >
              Take the Free Dosha Quiz
            </Link>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
