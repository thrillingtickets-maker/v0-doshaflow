import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "DoshaFlow — Ayurvedic Dosha Quiz & Wellness Plans",
  description:
    "Take the free Ayurvedic dosha quiz to find your Vata, Pitta, or Kapha type, then get personalized meal guides, herbal picks, and sleep and stress plans.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DoshaFlow — Personalized Ayurvedic Wellness for Your Body Type",
    description: "Discover your dosha and get a personalized Ayurvedic Dosha Report with meal guides, movement routines, and herbal recommendations.",
    type: "website",
    url: "https://www.doshaflow.com",
  },
}
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { MealPlans } from "@/components/meal-plans"
import { Workouts } from "@/components/workouts"
import { DigestiveTracking } from "@/components/digestive-tracking"
import { ExploreAyurveda } from "@/components/explore-ayurveda"
import { ExploreByGoal } from "@/components/explore-by-goal"
import { ExploreByDosha } from "@/components/explore-by-dosha"
import { StartHere } from "@/components/start-here"
import { PopularArticles } from "@/components/popular-articles"
import { EditorialEssays } from "@/components/editorial-essays"
import { Testimonials } from "@/components/testimonials"
import { TrustBar } from "@/components/trust-bar"
import { ScientificIntegrity } from "@/components/scientific-integrity"
import { SafetyFramework } from "@/components/safety-framework"
import { Founder } from "@/components/founder"
import { FAQ } from "@/components/faq"
import { Waitlist } from "@/components/waitlist"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      {/* (1) Hero with headline and quiz CTA button */}
      <Hero />

      {/* (1b) Trust signal bar */}
      <TrustBar />
      
      {/* (2) Emotional positioning — Ayurveda for modern overstimulated people */}
      <section className="px-6 py-10 md:py-14 text-center bg-background">
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            You're probably exhausted. Not lazy. Not weak. Exhausted.
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
            Your nervous system is overloaded. Your digestion is struggling. Your sleep isn't restorative. Your stress never fully releases.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-6">
            Ayurveda doesn't ask you to optimize harder. It teaches you to recover better.
          </p>
        </div>
      </section>
      
      {/* (3) Explore By Goal section with symptom cards */}
      <ExploreByGoal />
      
      {/* (4) Explore By Dosha section with Vata/Pitta/Kapha cards */}
      <ExploreByDosha />
      
      {/* (5) General Explore Ayurveda section */}
      <ExploreAyurveda />
      
      {/* (6) Featured Guides section (Start Here) */}
      <StartHere />
      
      {/* (7) Sample Reports preview section */}
      <PopularArticles />
      
      {/* (7b) Editorial Essays section */}
      <EditorialEssays />
      
      {/* (8) Retreat Journal preview */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* (9) Scientific integrity — Ancient Wisdom, Modern Evidence */}
      <ScientificIntegrity />

      {/* (10) Safety framework — How We Make Recommendations */}
      <SafetyFramework />

      {/* (11) Meet the Founder */}
      <Founder />

      {/* (12) FAQ */}
      <FAQ />
      
      <Waitlist />
      
      {/* Get in touch link */}
      <section className="px-6 py-12 md:py-16 text-center bg-background">
        <p className="text-sm md:text-base text-muted-foreground">
          Questions? <a 
            href="mailto:alex@doshaflow.com?subject=DoshaFlow%20Enquiry"
            className="text-primary hover:text-primary/80 transition-colors duration-200 underline"
          >
            Get in touch
          </a>
        </p>
      </section>
      
      <Footer />
    </main>
  )
}
