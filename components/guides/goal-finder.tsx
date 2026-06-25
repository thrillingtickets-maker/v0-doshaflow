"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { goals } from "./guides-data"

export function GoalFinder() {
  return (
    <section className="px-6 py-20 md:py-28 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4 text-balance"
        >
          What brings you here today?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Pick what you're working on and we'll point you to the right collection.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <Link
                href={goal.href}
                className="inline-flex items-center px-6 py-3.5 rounded-full bg-card border border-border text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                {goal.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
