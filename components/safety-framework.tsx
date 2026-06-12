"use client"

import { motion } from "framer-motion"
import { ClipboardList, CalendarClock, BookOpen, Sparkles, Stethoscope, AlertTriangle } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Dosha assessment",
    description: "We start with your constitution using a structured questionnaire.",
  },
  {
    icon: CalendarClock,
    title: "Lifestyle patterns",
    description: "We look at your sleep, digestion, stress, and daily routine.",
  },
  {
    icon: BookOpen,
    title: "Evidence review",
    description: "We weigh traditional guidance against current wellness research.",
  },
  {
    icon: Sparkles,
    title: "Personalized suggestions",
    description: "We translate all of it into clear, educational recommendations.",
  },
  {
    icon: Stethoscope,
    title: "Professional consultation",
    description: "We point you to a qualified professional when it matters.",
  },
]

export function SafetyFramework() {
  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            Our Method
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            How We Make Recommendations
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            A transparent, repeatable process — so you always know where guidance
            comes from and where its limits are.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative p-6 bg-card rounded-2xl border border-border/50 h-full"
              >
                <span className="absolute top-5 right-5 text-xs font-medium text-muted-foreground">
                  Step {index + 1}
                </span>
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-medium text-foreground mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 items-start p-6 rounded-2xl border border-accent/40 bg-accent/10 max-w-3xl mx-auto"
        >
          <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            <strong className="font-medium">Always consult a qualified healthcare
            professional</strong> before making significant changes involving
            supplements, medications, or health conditions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
