"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const cards = [
  { label: "Vata Guide", href: "/vata" },
  { label: "Pitta Guide", href: "/pitta" },
  { label: "Kapha Guide", href: "/kapha" },
  { label: "Ayurvedic Tea Guide", href: "/blog/ayurvedic-tea-guide" },
  { label: "Morning Routine", href: "/blog/ayurvedic-morning-routine" },
  { label: "Digestion Guide", href: "/blog/why-am-i-always-bloated" },
  { label: "Sleep Guide", href: "/blog/best-ayurvedic-tea-sleep" },
  { label: "Anxiety & Stress", href: "/blog/best-herbs-for-anxiety" },
]

export function ExploreAyurveda() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            <span className="text-balance">Explore Ayurveda</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Everything you need to understand your body type and make it work for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={card.href}
                className="block h-full p-6 md:p-8 bg-card rounded-2xl border border-border/60 hover:border-primary/40 hover:shadow-md hover:shadow-primary/8 transition-all duration-300 ease-out group"
              >
                <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {card.label}
                </span>
                <div className="mt-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-muted-foreground tracking-wide">Read more</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
