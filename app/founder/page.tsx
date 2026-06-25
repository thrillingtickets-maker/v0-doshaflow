import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Founder } from "@/components/founder"

export const metadata: Metadata = {
  title: "Meet the Founder — Alex Osborne | DoshaFlow",
  description:
    "Alex Osborne founded DoshaFlow after personal burnout, overstimulation, and time at an Ayurvedic retreat in Bengaluru, India. Not a doctor — educational wellness, not medical advice.",
  alternates: { canonical: "https://www.doshaflow.com/founder" },
  openGraph: {
    title: "Meet the Founder — Alex Osborne | DoshaFlow",
    description:
      "Why Alex Osborne built DoshaFlow: a practical, evidence-aware translation of Ayurveda for modern, overstimulated people. Educational wellness, not medical advice.",
    type: "profile",
    url: "https://www.doshaflow.com/founder",
    siteName: "DoshaFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the Founder — Alex Osborne | DoshaFlow",
    description:
      "Why Alex Osborne built DoshaFlow: a practical, evidence-aware translation of Ayurveda. Educational wellness, not medical advice.",
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Osborne",
  jobTitle: "Founder",
  description:
    "Alex Osborne founded DoshaFlow after personal burnout, overstimulation, and time at an Ayurvedic retreat in Bengaluru, India. Alex is not a doctor or a credentialed Ayurvedic practitioner; DoshaFlow is educational wellness content, not medical advice.",
  url: "https://www.doshaflow.com/founder",
  worksFor: {
    "@type": "Organization",
    name: "DoshaFlow",
    url: "https://www.doshaflow.com",
  },
}

export default function FounderPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navigation />

      <Founder />

      <section className="px-6 pb-24 -mt-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-secondary/40 p-6 md:p-8">
            <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
              An honest disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Alex Osborne is not a doctor and not a credentialed Ayurvedic
              practitioner. DoshaFlow is educational wellness content only — it is not
              medical advice and is not intended to diagnose, treat, cure, or prevent
              any condition. Always consult a qualified healthcare professional before
              making changes to your diet, supplements, or routine.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
