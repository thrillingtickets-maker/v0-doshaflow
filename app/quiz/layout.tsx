import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Dosha Quiz — Find Your Ayurvedic Body Type | DoshaFlow",
  description: "Take the 5-minute dosha quiz to discover whether you're Vata, Pitta, or Kapha — and get a personalized wellness kit recommendation.",
  openGraph: {
    title: "Free Dosha Quiz — Find Your Ayurvedic Body Type | DoshaFlow",
    description: "Take the 5-minute dosha quiz to discover whether you're Vata, Pitta, or Kapha — and get a personalized wellness kit recommendation.",
    type: "website",
    url: "https://doshaflow.com/quiz",
  },
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
