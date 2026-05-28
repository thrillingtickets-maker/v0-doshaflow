import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "DoshaFlow — Personalized Ayurvedic Wellness for Your Body Type",
  description: "Discover your dosha and get a personalized Ayurvedic Dosha Report with meal guides, movement routines, and herbal recommendations built for how your body actually feels. Based in Los Angeles.",
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
      <section id="testimonials">
        <Testimonials />
      </section>
      <Waitlist />
      <Footer />
    </main>
  )
}
