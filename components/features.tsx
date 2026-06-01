"use client"

import { motion } from "framer-motion"
import { Utensils, Footprints, Activity, Moon } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Dosha-Based Meal Guides",
    description: "Discover your unique constitution and receive personalized meal guides that balance your body's natural tendencies. From warming foods for Vata to cooling recipes for Pitta.",
    tag: "NUTRITION"
  },
  {
    icon: Footprints,
    title: "Movement & Walking",
    description: "Workouts and walking routines designed around your energy levels and body type. Whether you need grounding exercises or energizing flows, we adapt to you.",
    tag: "MOVEMENT"
  },
  {
    icon: Activity,
    title: "Digestion Tracking",
    description: "Log and understand your digestive patterns. Track bloating, energy, and gut health to identify what works for your unique system.",
    tag: "TRACKING"
  },
  {
    icon: Moon,
    title: "Sleep & Recovery",
    description: "Optimize your rest with routines aligned to your dosha. Better sleep means better digestion, clearer thinking, and sustained energy.",
    tag: "RECOVERY"
  }
]

export function Features() {
  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            How it works
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            <span className="text-balance">Wellness that adapts to you</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Your body is unique. Your wellness routine should be too. DoshaFlow combines ancient Ayurvedic wisdom with modern tracking to create a personalized health experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 md:p-10 bg-card rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 ease-out"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-secondary rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="inline-block text-xs font-semibold tracking-wider text-muted-foreground mb-3">
                    {feature.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
