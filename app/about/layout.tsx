import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Story — How I Found Ayurveda After Burnout and Addiction | DoshaFlow",
  description: "Alex's story: from alcohol abuse, poor sleep, and burnout to discovering Ayurveda. The real reason DoshaFlow exists.",
  openGraph: {
    title: "My Story — How I Found Ayurveda After Burnout and Addiction | DoshaFlow",
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
