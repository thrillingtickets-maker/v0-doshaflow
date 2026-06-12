import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"
import { faqItems } from "@/lib/faq-data"

export const metadata: Metadata = {
  title: "FAQ — DoshaFlow",
  description:
    "Frequently asked questions about DoshaFlow: is it medical advice, who created it, how your data is used, working with your doctor, supplement personalization, and supporting evidence.",
  openGraph: {
    title: "FAQ — DoshaFlow",
    description:
      "Answers to common questions about DoshaFlow's wellness guidance, data, safety, and evidence.",
    type: "website",
    url: "https://www.doshaflow.com/faq",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />

      <header className="px-6 pt-32 pb-12 md:pt-40 md:pb-16 bg-background border-b border-border/60">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            FAQ
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-5 text-balance">
            Questions, answered honestly
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Everything you might want to know about how DoshaFlow works, what it is,
            and what it isn&apos;t.
          </p>
        </div>
      </header>

      <FAQ withHeader={false} />

      <Footer />
    </main>
  )
}
