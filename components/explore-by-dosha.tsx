"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const doshaCards = [
  {
    title: "Vata",
    subtitle: "Air & Ether",
    description: "Anxiety, sleep, digestion, dry skin",
    href: "/vata",
  },
  {
    title: "Pitta",
    subtitle: "Fire & Water",
    description: "Inflammation, anger, overwork, skin flares",
    href: "/pitta",
  },
  {
    title: "Kapha",
    subtitle: "Earth & Water",
    description: "Low energy, weight, sluggishness, low mood",
    href: "/kapha",
  },
]

export function ExploreByDosha() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            <span className="text-balance">Explore By Dosha</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Understand your body type and get personalized guidance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {doshaCards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={card.href}
                className="block h-full p-8 bg-card rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-md hover:shadow-primary/8 transition-all duration-250 ease-out group"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 font-light tracking-wide">{card.subtitle}</p>
                </div>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-4 tracking-tight">
                  {card.description}
                </p>
                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
