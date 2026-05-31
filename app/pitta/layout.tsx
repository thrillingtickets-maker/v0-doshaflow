import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitta Dosha: Signs of Imbalance, Diet, and How to Cool the Fire",
  description: "Complete guide to Pitta dosha — signs of imbalance, the best foods for Pitta, how to reduce inflammation and irritability, and the herbs that work best.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
