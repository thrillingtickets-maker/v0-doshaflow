import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Dosha Quiz: Discover Your Ayurvedic Body Type | DoshaFlow",
  description:
    "Take our free dosha quiz — a quick ayurvedic body type quiz to discover whether you're Vata, Pitta, or Kapha. 25 questions, personalized results, about 3 minutes. No email required to start.",
  keywords: [
    "dosha quiz",
    "free dosha quiz",
    "ayurvedic body type quiz",
    "ayurvedic body type",
    "vata pitta kapha quiz",
    "dosha test",
  ],
  alternates: { canonical: "/quiz" },
  openGraph: {
    title: "Free Dosha Quiz: Discover Your Ayurvedic Body Type",
    description:
      "A free ayurvedic body type quiz to discover whether you're Vata, Pitta, or Kapha. 25 questions, personalized results, about 3 minutes.",
    type: "website",
    url: "https://www.doshaflow.com/quiz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Dosha Quiz: Discover Your Ayurvedic Body Type",
    description:
      "A free ayurvedic body type quiz to discover whether you're Vata, Pitta, or Kapha. 25 questions, personalized results, about 3 minutes.",
  },
}

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
