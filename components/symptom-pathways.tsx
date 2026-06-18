"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const pathways = [
  {
    symptom: "I'm exhausted all the time",
    description: "Your nervous system needs restoration, not optimization.",
    links: [
      { label: "Sleep guide", href: "/blog/best-ayurvedic-tea-sleep" },
      { label: "Energy through Ayurveda", href: "/blog/why-am-i-always-tired" },
      { label: "Take the quiz", href: "/quiz" },
    ],
  },
  {
    symptom: "I'm anxious and overstimulated",
    description: "Your body is stuck in defense mode. It needs permission to relax.",
    links: [
      { label: "Anxiety & stress guide", href: "/blog/best-herbs-for-anxiety" },
      { label: "Understanding burnout", href: "/blog/nervous-system-burnout" },
      { label: "Vata guide", href: "/vata" },
    ],
  },
  {
    symptom: "My digestion feels off",
    description: "Poor digestion often signals nervous system dysregulation.",
    links: [
      { label: "Digestion guide", href: "/blog/best-ayurvedic-tea-digestion" },
      { label: "Why bloating happens", href: "/blog/why-am-i-always-bloated" },
      { label: "Pitta guide", href: "/pitta" },
    ],
  },
  {
    symptom: "I can't sleep deeply",
    description: "Sleep is where your body heals. Without it, everything else fails.",
    links: [
      { label: "Sleep & rest guide", href: "/blog/best-ayurvedic-tea-sleep" },
      { label: "Nervous system reset", href: "/blog/nervous-system-burnout" },
      { label: "Morning & evening routine", href: "/blog/ayurvedic-morning-routine" },
    ],
  },
  {
    symptom: "I feel burned out",
    description: "Burnout is your body's signal that something fundamental needs to change.",
    links: [
      { label: "Burnout essay", href: "/blog/nervous-system-burnout" },
      { label: "The beginner's guide", href: "/blog/ayurveda-beginners-guide" },
      { label: "Take the quiz", href: "/quiz" },
    ],
  },
  {
    symptom: "I don't know where to begin",
    description: "Start with the fundamentals: sleep, routine, and understanding your dosha.",
    links: [
      { label: "The honest guide", href: "/blog/ayurveda-beginners-guide" },
      { label: "Free dosha quiz", href: "/quiz" },
      { label: "All guides", href: "/blog" },
    ],
  },
]

export function SymptomPathways() {
  return (
    <section className="px-6 py-24 md:py-40 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            <span className="text-balance">Find your entry point</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            What brought you here? Your path through DoshaFlow starts with how you feel right now.
          </p>
        </motion.div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {pathways.map((pathway, index) => (
            <motion.div
              key={pathway.symptom}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex flex-col"
            >
              {/* Card */}
              <div className="flex-1 p-8 rounded-xl border border-border/40 hover:border-border/80 transition-colors duration-300 bg-card/30 hover:bg-card/50 group">
                {/* Symptom Title */}
                <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {pathway.symptom}
                </h3>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed mb-6 font-light">
                  {pathway.description}
                </p>

                {/* Links */}
                <div className="flex flex-col gap-3">
                  {pathway.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group/link"
                    >
                      <span className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-200">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
