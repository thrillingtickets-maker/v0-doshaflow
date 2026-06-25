import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Story — Finding Ayurveda After Burnout | DoshaFlow",
  description:
    "Alex's story — from alcohol abuse, poor sleep, and burnout to discovering Ayurveda, and the real reason DoshaFlow exists to help you feel better.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "My Story — Finding Ayurveda After Burnout | DoshaFlow",
    description: "Alex's story: from alcohol abuse, poor sleep, and burnout to discovering Ayurveda.",
    type: "website",
    url: "https://www.doshaflow.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
