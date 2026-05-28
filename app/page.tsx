import { Navigation } from "@/components/navigation"
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
