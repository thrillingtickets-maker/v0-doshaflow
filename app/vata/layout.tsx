import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vata Dosha: Signs of Imbalance, Diet, and How to Find Balance",
  description: "Complete guide to Vata dosha — signs of imbalance, the best foods for Vata, morning routine, herbs, and how to calm an overactive nervous system.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
