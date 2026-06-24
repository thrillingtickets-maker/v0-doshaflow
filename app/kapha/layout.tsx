import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kapha Dosha: Complete Guide to the Earth & Water Constitution | DoshaFlow",
  description: "Everything you need to know about Kapha dosha — characteristics, imbalance signs, diet, daily routine, and herbs. Personalised guidance for Kapha types.",
  openGraph: {
    title: "Kapha Dosha: Complete Guide to the Earth & Water Constitution | DoshaFlow",
    description: "Everything you need to know about Kapha dosha — characteristics, imbalance signs, diet, daily routine, and herbs.",
    url: "https://www.doshaflow.com/kapha",
    type: "website",
    siteName: "DoshaFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapha Dosha: Complete Guide to the Earth & Water Constitution | DoshaFlow",
    description: "Everything you need to know about Kapha dosha — characteristics, imbalance signs, diet, daily routine, and herbs.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
