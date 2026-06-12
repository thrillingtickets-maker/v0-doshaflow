"use client"

import { motion } from "framer-motion"
import { Leaf, FlaskConical, Info } from "lucide-react"

const ayurvedaContributes = [
  "A framework for understanding individual constitution (dosha) and tendencies",
  "Daily and seasonal routines that prioritize consistency and rest",
  "Time-tested practices for digestion, sleep, and stress regulation",
  "A whole-person view that connects mind, body, and lifestyle",
]

const researchSupports = [
  "Consistent sleep and wake times improve sleep quality and daytime energy",
  "Regular meal timing supports digestion and metabolic stability",
  "Mind-body practices like breathwork are associated with lower perceived stress",
  "Certain herbs (e.g., ashwagandha) are studied for stress and sleep support",
]

export function ScientificIntegrity() {
  return (
    <section id="evidence" className="px-6 py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-card text-secondary-foreground rounded-full border border-border/60">
            Our Approach
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Ancient Wisdom, Modern Evidence
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            We hold two things at once: respect for a tradition that has guided
            people for centuries, and honesty about what current research can and
            cannot confirm.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-card rounded-2xl border border-border/50"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <Leaf className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-foreground mb-5">
              What Ayurveda contributes
            </h3>
            <ul className="space-y-4">
              {ayurvedaContributes.map((item) => (
                <li key={item} className="flex gap-3 text-foreground/90 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-card rounded-2xl border border-border/50"
          >
            <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-5">
              <FlaskConical className="w-5 h-5 text-accent" aria-hidden="true" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-foreground mb-5">
              What modern research supports
            </h3>
            <ul className="space-y-4">
              {researchSupports.map((item) => (
                <li key={item} className="flex gap-3 text-foreground/90 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex gap-3 items-start p-5 bg-card rounded-xl border border-border/50 max-w-3xl mx-auto"
        >
          <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            DoshaFlow combines traditional Ayurvedic principles with modern wellness
            research. Recommendations are educational and not intended to diagnose,
            treat, cure, or prevent disease.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
