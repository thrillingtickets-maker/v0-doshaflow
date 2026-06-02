import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Ayurvedic Guides & Articles | DoshaFlow",
  description: "Ayurvedic guides, research, and practical advice on digestion, sleep, stress, hormonal health, and daily wellness by dosha type.",
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
