import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StartHereHero } from "@/components/start-here-hero"
import { SymptomPathways } from "@/components/symptom-pathways"
import { StartHereEditorials } from "@/components/start-here-editorials"
import { WhyAyurvedaHelped } from "@/components/why-ayurveda-helped"
import { EmailCapture } from "@/components/email-capture"

export const metadata: Metadata = {
  title: "Start Here — DoshaFlow",
  description:
    "Begin your Ayurvedic wellness journey. If you're exhausted, anxious, bloated, or burned out, this page is designed to guide you toward calm.",
  openGraph: {
    title: "Start Here — DoshaFlow",
    description:
      "Begin your Ayurvedic wellness journey. If you're exhausted, anxious, bloated, or burned out, this page is designed to guide you toward calm.",
    type: "website",
    url: "https://www.doshaflow.com/start-here",
  },
}

export default function StartHerePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Large Editorial Headline */}
      <StartHereHero />
      
      {/* Symptom Pathways - Emotional Entrypoints */}
      <SymptomPathways />
      
      {/* Editorial Essays - Authority & Trust */}
      <StartHereEditorials />
      
      {/* Why Ayurveda Helped - Founder Reflection */}
      <WhyAyurvedaHelped />
      
      {/* Email Capture - Gentle & Restrained */}
      <EmailCapture />
      
      <Footer />
    </main>
  )
}
