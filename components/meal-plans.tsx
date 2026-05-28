"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const mealPlanFeatures = [
  "Personalized to your dosha type",
  "Weekly meal guides with recipes",
  "Seasonal ingredient recommendations",
  "Shopping lists generated automatically",
  "Adjust for dietary restrictions",
  "Track how meals affect your energy"
]

export function MealPlans() {
  return (
    <section className="px-6 py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-primary/10 text-primary rounded-full">
              Personalized nutrition
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Meal guides built around your body
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Discover your dosha type — Vata, Pitta, or Kapha — and receive meal guides designed to balance your unique constitution. No more generic diets that don&apos;t account for how your body actually processes food.
            </p>

            <ul className="space-y-4">
              {mealPlanFeatures.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-primary/10 rounded-full">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl border border-border/50 p-8 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Your dosha type</p>
                  <h3 className="font-serif text-2xl font-medium text-foreground">Vata-Pitta</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif text-lg font-medium">VP</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Balance Score</span>
                  <span className="text-foreground font-medium">78%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-primary rounded-full" />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Today&apos;s Focus</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground">Grounding foods</span>
                  <span className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground">Warm spices</span>
                  <span className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground">Cooked vegetables</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Recommended meal</p>
                    <p className="font-medium text-foreground">Warming Kitchari Bowl</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">View recipe</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
