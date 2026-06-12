"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const goalCards = [
  { goal: "Sleep support", href: "/blog/best-ayurvedic-tea-sleep" },
  { goal: "Stress support", href: "/blog/best-herbs-for-anxiety" },
  { goal: "Digestion support", href: "/blog/best-ayurvedic-tea-digestion" },
  { goal: "Weight & metabolism support", href: "/blog/ayurvedic-weight-loss" },
  { goal: "Burnout recovery support", href: "/blog/nervous-system-burnout" },
  { goal: "Daily routine support", href: "/blog/ayurvedic-morning-routine" },
]

export function ExploreByGoal() {
  return (
    <section className="px-6 py-14 md:py-18">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            <span className="text-balance">Start with what you want to support.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Most people don't know their dosha yet. They know how they want to feel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center lg:justify-items-start">
          {goalCards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={index >= 4 ? "xl:col-span-1" : ""}
            >
              <Link
                href={card.href}
                className="block h-full p-8 md:p-10 bg-card rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-250 ease-out group flex flex-col justify-center items-center text-center hover:translate-y-[-2px]"
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
