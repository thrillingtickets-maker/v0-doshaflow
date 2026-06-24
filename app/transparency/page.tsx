import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Transparency — DoshaFlow",
  description:
    "How DoshaFlow works: our mission, founder, methodology, evidence sources, content review process, AI usage, affiliate disclosure, and product recommendation standards.",
  openGraph: {
    title: "Transparency — DoshaFlow",
    description:
      "Our mission, methodology, evidence sources, content review process, AI usage policy, and disclosures.",
    type: "website",
    url: "https://www.doshaflow.com/transparency",
  },
}

const sections = [
  {
    id: "mission",
    title: "Mission",
    body: [
      "DoshaFlow exists to make Ayurvedic principles useful for modern, overstimulated people — without the mysticism, the fear-mongering, or the promises no one can keep.",
      "We translate a centuries-old tradition into clear, educational guidance for sleep, digestion, stress, and nervous system recovery. We are a wellness education platform, not a medical provider.",
    ],
  },
  {
    id: "founder",
    title: "Founder Information",
    body: [
      "DoshaFlow was founded by Alex, Founder — someone who needed it first, not a doctor or a credentialed Ayurvedic practitioner, and we don't claim otherwise. The founder's background is in lived experience: years of being overstimulated and under-rested, and the work of researching, testing, and writing down what actually helped.",
      "The platform was built after a personal experience at an Ayurvedic retreat in Kerala, India, and a frustration with how Ayurveda is often marketed in the West.",
    ],
  },
  {
    id: "methodology",
    title: "Methodology",
    body: [
      "Our recommendations follow a consistent, transparent process: (1) a structured dosha assessment, (2) a review of your lifestyle patterns, (3) an evidence review weighing tradition against current research, (4) personalized educational suggestions, and (5) a clear pointer to professional consultation when appropriate.",
      "Guidance is educational and general. It is not a diagnosis, prescription, or treatment plan.",
    ],
  },
  {
    id: "evidence",
    title: "Sources of Evidence",
    body: [
      "Where peer-reviewed research exists — for example on consistent sleep timing, regular meal patterns, breathwork, and studied botanicals such as ashwagandha — we rely on it and aim to represent it accurately.",
      "Where claims rest primarily on traditional Ayurvedic practice rather than modern clinical trials, we say so plainly. We do not overstate the strength of the evidence.",
    ],
  },
  {
    id: "review",
    title: "Content Review Process",
    body: [
      "Content is drafted and edited in-house, checked against the evidence sources described above, and framed conservatively for safety. We are actively building relationships with qualified professionals across Ayurveda, nutrition, and integrative medicine to formalize independent review, and we'll name them here once that's in place rather than imply it before it's true.",
      "We update content as understanding evolves and welcome corrections at hello@doshaflow.com.",
    ],
  },
  {
    id: "ai",
    title: "AI Usage Policy",
    body: [
      "We use AI tools to assist with drafting, editing, and research synthesis. AI-assisted content is reviewed by a human before publication.",
      "AI is never the sole source of health guidance, and we do not present AI output as professional medical advice.",
    ],
  },
  {
    id: "affiliate",
    title: "Affiliate Disclosure",
    body: [
      "Some links may be affiliate links, meaning we could earn a small commission if you purchase through them at no extra cost to you.",
      "Affiliate relationships never determine whether we recommend a product. We disclose affiliate links where they appear.",
    ],
  },
  {
    id: "sponsorship",
    title: "Sponsorship Policy",
    body: [
      "If content is sponsored, we label it clearly as sponsored. Sponsors do not get to alter our recommendations, our safety framing, or our editorial conclusions.",
    ],
  },
  {
    id: "standards",
    title: "Product Recommendation Standards",
    body: [
      "We recommend products based on quality, third-party testing where available, ingredient transparency, and fit with the educational guidance we provide.",
      "For supplements and botanicals, we encourage you to consult a qualified healthcare professional before use, especially if you take medication or have a health condition.",
    ],
  },
]

export default function TransparencyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <header className="px-6 pt-32 pb-12 md:pt-40 md:pb-16 bg-secondary/30 border-b border-border/60">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-card text-secondary-foreground rounded-full border border-border/60">
            Transparency
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-5 text-balance">
            How DoshaFlow works
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            We&apos;d rather earn your trust than ask for it. Here&apos;s who we are,
            how we make recommendations, and how we make money.
          </p>
        </div>
      </header>

      <article className="px-6 py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto">
          {/* Table of contents */}
          <nav aria-label="On this page" className="mb-14 p-6 bg-card rounded-2xl border border-border/50">
            <p className="text-sm font-medium text-foreground mb-3">On this page</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-foreground/90 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-16 p-6 bg-secondary/40 rounded-2xl border border-border/60">
            <p className="text-sm text-muted-foreground leading-relaxed">
              DoshaFlow combines traditional Ayurvedic principles with modern wellness
              research. Recommendations are educational and not intended to diagnose,
              treat, cure, or prevent disease. Always consult a qualified healthcare
              professional before making significant changes involving supplements,
              medications, or health conditions.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
