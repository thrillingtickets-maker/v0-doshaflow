import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vata Dosha: Complete Guide to the Air & Space Constitution | DoshaFlow",
  description: "Everything you need to know about Vata dosha — characteristics, imbalance signs, diet, daily routine, and herbs. Personalised guidance for Vata types.",
  openGraph: {
    title: "Vata Dosha: Complete Guide to the Air & Space Constitution | DoshaFlow",
    description: "Everything you need to know about Vata dosha — characteristics, imbalance signs, diet, daily routine, and herbs.",
    url: "https://www.doshaflow.com/vata",
    type: "website",
    siteName: "DoshaFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vata Dosha: Complete Guide to the Air & Space Constitution | DoshaFlow",
    description: "Everything you need to know about Vata dosha — characteristics, imbalance signs, diet, daily routine, and herbs.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
