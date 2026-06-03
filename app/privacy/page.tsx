import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy — DoshaFlow",
  description: "Privacy policy for DoshaFlow. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <article className="px-6 py-12 md:py-20 bg-background">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated: June 2026
          </p>

          <div className="prose prose-sm max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                What we collect
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                We collect three types of information:
              </p>
              <ul className="space-y-3 text-foreground leading-relaxed ml-4">
                <li><strong>Email addresses</strong> — from our waitlist and newsletter signup forms. We use these to send you occasional wellness guides and product updates.</li>
                <li><strong>Quiz responses</strong> — when you take the Ayurvedic dosha quiz, we collect your answers. This data is stored anonymously and is never linked to your identity or email address.</li>
                <li><strong>Basic analytics</strong> — we track which pages you visit to understand which content is most useful. This is aggregated data only — we cannot see your individual browsing history.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                How we use it
              </h2>
              <ul className="space-y-3 text-foreground leading-relaxed ml-4">
                <li><strong>Email list:</strong> We send occasional wellness guides, herbal recommendations, and updates about DoshaFlow. This is never more than once a week.</li>
                <li><strong>Quiz personalization:</strong> Your quiz responses determine your dosha and are used to personalize your quiz results and recommendations.</li>
                <li><strong>Content improvement:</strong> Analytics help us understand which guides, articles, and dosha information is most helpful so we can create more of it.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Data sharing
              </h2>
              <p className="text-foreground leading-relaxed">
                We do not sell your data to third parties. We do not share your information with advertising networks. Your email address is processed by Resend, our email service provider, which is required to send you emails. Resend does not use your email for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Cookies
              </h2>
              <p className="text-foreground leading-relaxed">
                We use basic session cookies to keep you logged into your account and analytics cookies to track page visits. We do not use advertising cookies or tracking cookies that follow you across the web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Your rights
              </h2>
              <ul className="space-y-3 text-foreground leading-relaxed ml-4">
                <li><strong>Unsubscribe:</strong> Every email we send includes an unsubscribe link. Click it and you're removed from our list immediately.</li>
                <li><strong>Data deletion:</strong> Email <a href="mailto:alex@doshaflow.com" className="text-primary hover:text-primary/80 underline">alex@doshaflow.com</a> to request deletion of your personal data. We will delete it within 30 days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Questions?
              </h2>
              <p className="text-foreground leading-relaxed">
                If you have any questions about this privacy policy or how we use your data, email <a href="mailto:alex@doshaflow.com" className="text-primary hover:text-primary/80 underline">alex@doshaflow.com</a>.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
