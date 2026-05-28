import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sample Plans — Vata, Pitta & Kapha Meal and Yoga Kits | DoshaFlow",
  description: "Preview the DoshaFlow personalized kit: a 7-day Ayurvedic meal plan and movement program built for your dosha type.",
  openGraph: {
    title: "Sample Plans — Vata, Pitta & Kapha Meal and Yoga Kits | DoshaFlow",
    description: "Preview the DoshaFlow personalized kit: a 7-day Ayurvedic meal plan and movement program.",
    type: "website",
    url: "https://www.doshaflow.com/samples",
  },
}

export default function SamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
