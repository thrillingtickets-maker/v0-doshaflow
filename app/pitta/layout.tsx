import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitta Dosha: Complete Guide to the Fire Constitution | DoshaFlow",
  description: "Everything you need to know about Pitta dosha — characteristics, imbalance signs, diet, daily routine, and herbs. Personalised guidance for Pitta types.",
  openGraph: {
    title: "Pitta Dosha: Complete Guide to the Fire Constitution | DoshaFlow",
    description: "Everything you need to know about Pitta dosha — characteristics, imbalance signs, diet, daily routine, and herbs.",
    url: "https://www.doshaflow.com/pitta",
    type: "website",
    siteName: "DoshaFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitta Dosha: Complete Guide to the Fire Constitution | DoshaFlow",
    description: "Everything you need to know about Pitta dosha — characteristics, imbalance signs, diet, daily routine, and herbs.",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
