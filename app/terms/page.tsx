import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Use — DoshaFlow",
  description: "Terms of use for DoshaFlow. Learn about our educational disclaimers and user terms.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <article className="px-6 py-12 md:py-20 bg-background">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: June 2026
          </p>

          <div className="prose prose-sm max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Educational content, not medical advice
              </h2>
              <p className="text-foreground leading-relaxed">
                DoshaFlow provides wellness information and educational content about Ayurveda. We are not doctors. Nothing on this site is medical advice, and we do not diagnose, treat, cure, or prevent any medical condition. Our content is for educational and informational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Not a substitute for professional medical care
              </h2>
              <p className="text-foreground leading-relaxed">
                The information on DoshaFlow is not a substitute for professional medical diagnosis or treatment. If you have a health condition, are taking medications, or are considering changes to your health routine — especially regarding supplements or herbs — consult a qualified healthcare provider, preferably one familiar with both Ayurveda and Western medicine.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Quiz results and dosha recommendations
              </h2>
              <p className="text-foreground leading-relaxed">
                Your dosha quiz results and our recommendations based on those results are for educational and informational purposes only. They are not a medical diagnosis. Dosha is a framework for understanding your constitution and tendencies according to Ayurveda — it is not a replacement for medical assessment by a licensed healthcare provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Intellectual property
              </h2>
              <p className="text-foreground leading-relaxed">
                All content on DoshaFlow — including text, images, guides, protocols, and recommendations — is the intellectual property of DoshaFlow. You may read and use this content for your personal, non-commercial use only. You may not reproduce, republish, or distribute any content without written permission from DoshaFlow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Limitation of liability
              </h2>
              <p className="text-foreground leading-relaxed">
                DoshaFlow is not liable for any decisions you make, health outcomes you experience, or consequences that result from using the information on this site. You are responsible for your own health decisions. If you experience a medical emergency, stop using DoshaFlow immediately and consult a healthcare provider or emergency services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Applicability
              </h2>
              <p className="text-foreground leading-relaxed">
                These terms apply to all users of doshaflow.com, including visitors, subscribers, and customers. By accessing and using DoshaFlow, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Questions?
              </h2>
              <p className="text-foreground leading-relaxed">
                If you have questions about these terms, email <a href="mailto:alex@doshaflow.com" className="text-primary hover:text-primary/80 underline">alex@doshaflow.com</a>.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
