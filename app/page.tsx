import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "DoshaFlow — Ayurvedic Dosha Quiz, Personalized Wellness Plans & Herbal Guides",
  description:
    "Take the free Ayurvedic dosha quiz to discover your Vata, Pitta, or Kapha body type. Get personalized meal guides, herbal recommendations, digestion protocols, sleep plans, and stress relief based on your Ayurvedic constitution.",
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
import { Testimonials } from "@/components/testimonials"
import { Waitlist } from "@/components/waitlist"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <MealPlans />
      <Workouts />
      <DigestiveTracking />
      <ExploreAyurveda />
      <section id="testimonials">
        <Testimonials />
      </section>
      <Waitlist />
      <Footer />
    </main>
  )
}
