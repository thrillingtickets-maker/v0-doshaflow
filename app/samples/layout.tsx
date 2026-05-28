import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sample Reports — Vata, Pitta & Kapha Dosha Reports | DoshaFlow",
  description: "Preview the DoshaFlow personalized Dosha Report: a 7-day Ayurvedic meal guide and movement program built for your dosha type.",
  openGraph: {
    title: "Sample Reports — Vata, Pitta & Kapha Dosha Reports | DoshaFlow",
    description: "Preview the DoshaFlow personalized Dosha Report: a 7-day Ayurvedic meal guide and movement program.",
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
