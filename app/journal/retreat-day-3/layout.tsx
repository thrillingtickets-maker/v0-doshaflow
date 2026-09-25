import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Day 3: Detox, Mood Swings, and 15,000 Steps | Retreat Journal | DoshaFlow",
  description:
    "Day three at an Ayurvedic retreat in Kerala: the first full night of sleep in years, a digestive revolt the doctor calls ama clearing, a medicinal plant tour, and emotions surfacing as the nervous system settles.",
  alternates: { canonical: "https://www.doshaflow.com/journal/retreat-day-3" },
}

export default function RetreatDay3Layout({ children }: { children: React.ReactNode }) {
  return children
}
