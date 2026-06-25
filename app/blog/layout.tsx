import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Ayurvedic Guides & Articles | DoshaFlow",
  description: "Ayurvedic guides on digestion, sleep, anxiety, energy, hormonal health, and daily wellness, with practical routines tailored to your dosha type.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Ayurvedic Guides & Articles | DoshaFlow",
    description: "Ayurvedic guides on digestion, sleep, anxiety, hormonal health, and daily wellness by dosha type.",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
