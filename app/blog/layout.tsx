import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Ayurvedic Guides & Articles | DoshaFlow",
  description: "Ayurvedic guides on digestion, sleep, anxiety, hormonal health, and daily wellness by dosha type.",
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
