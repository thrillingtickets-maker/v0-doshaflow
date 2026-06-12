"use client"

import { motion } from "framer-motion"
import { Linkedin, User } from "lucide-react"

const advisors = [
  {
    name: "[Advisor Name]",
    role: "Ayurvedic Practitioner (BAMS)",
    note: "Reviews traditional Ayurvedic guidance for accuracy.",
  },
  {
    name: "[Advisor Name]",
    role: "Registered Dietitian (RD)",
    note: "Reviews nutrition and dietary recommendations.",
  },
  {
    name: "[Advisor Name]",
    role: "Integrative Medicine MD",
    note: "Reviews safety framing and evidence claims.",
  },
]

export function Founder() {
  return (
    <section id="founder" className="px-6 py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            Meet the Founder
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Built by someone who needed it first
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
          {/* Photo column — replace placeholder with real photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="aspect-[4/5] rounded-2xl bg-secondary border border-border/60 flex items-center justify-center overflow-hidden">
              {/* TODO: Replace with real founder photo, e.g. <img src="/founder.jpg" alt="[Founder Name]" /> */}
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <User className="w-16 h-16" aria-hidden="true" />
                <span className="text-sm">Founder photo</span>
              </div>
            </div>
          </motion.div>

          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-1">
              [Founder Full Name]
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Founder of DoshaFlow · [Professional Title]
            </p>

            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                [Professional background — a few sentences on relevant experience,
                training, and the work that led here. Keep it honest and specific:
                what you actually did, not credentials you don&apos;t hold.]
              </p>
              <p>
                I built DoshaFlow after spending years overstimulated, under-rested,
                and frustrated by wellness advice that was either vague mysticism or
                aggressive optimization. I went to an Ayurvedic retreat in Bengaluru,
                India, expecting very little. What I found was a practical framework
                for recovery — and a gap between that tradition and how it&apos;s sold
                in the West.
              </p>
              <p>
                DoshaFlow exists to translate Ayurvedic principles into clear,
                evidence-aware guidance — without the guru act, the fear-mongering,
                or the promises no one can keep. It is educational, not medical.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Advisory board */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-20"
        >
          <h3 className="font-serif text-2xl font-medium text-foreground mb-2 text-center">
            Advisory &amp; Review Board
          </h3>
          <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Our content is reviewed by qualified professionals across Ayurveda,
            nutrition, and integrative medicine. Advisor details are placeholders
            pending confirmation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <div
                key={advisor.role}
                className="p-6 bg-card rounded-2xl border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <p className="font-medium text-foreground">{advisor.name}</p>
                <p className="text-sm text-primary mb-3">{advisor.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advisor.note}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
