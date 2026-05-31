"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const goalCards = [
  { goal: "I can't sleep", href: "/blog/best-ayurvedic-tea-sleep" },
  { goal: "I'm always anxious", href: "/blog/best-herbs-for-anxiety" },
  { goal: "I'm always bloated", href: "/blog/why-am-i-always-bloated" },
  { goal: "I can't lose weight", href: "/blog/ayurvedic-weight-loss" },
  { goal: "I'm burned out", href: "/blog/nervous-system-burnout" },
  { goal: "I have no energy", href: "/blog/why-am-i-always-tired" },
  { goal: "Digestion problems", href: "/blog/best-ayurvedic-tea-digestion" },
]

export function ExploreByGoal() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            <span className="text-balance">Start with your symptom.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Most people don't know their dosha yet. They know how they feel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {goalCards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={card.href}
                className="block h-full p-8 md:p-10 bg-card rounded-2xl border border-border/60 hover:border-primary/40 hover:shadow-md hover:shadow-primary/8 transition-all duration-300 ease-out group flex flex-col justify-center items-center text-center"
              >
                <span className="text-xl md:text-2xl font-semibold font-serif text-foreground group-hover:text-primary transition-colors duration-300 leading-snug tracking-tight">
                  {card.goal}
                </span>
                <div className="mt-6 inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-muted-foreground tracking-wide">Explore</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
