"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-8 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
              Ayurveda meets modern science
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-foreground mb-8"
          >
            <span className="text-balance">Personalized wellness for how your body actually feels.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
          >
            Meal plans, movement, digestion, and recovery — all adapted to your body and routine.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
          >
            DoshaFlow offers personalized Ayurvedic wellness — dosha quizzes, meal guides, herbal tea
            recommendations, digestion support, sleep protocols, and stress relief plans based on your unique Vata,
            Pitta, or Kapha body type.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quiz"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full transition-all duration-250 hover:shadow-md hover:shadow-primary/20"
              >
                Take the Free Dosha Quiz
                <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="/start-here"
                className="inline-flex items-center gap-2 px-8 py-4 text-foreground font-medium transition-colors hover:text-primary"
              >
                Or start here
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground mt-2 max-w-sm">
              Discover your body type in 2 minutes. Personalized Ayurvedic guidance based on your symptoms.
            </p>

            <p className="text-xs text-muted-foreground/80 mt-3 max-w-md text-balance">
              DoshaFlow is educational wellness guidance, not medical advice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 flex items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Personalized Dosha Report
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Movement routines
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Digestion tracking
            </span>
          </motion.div>
        </div>
      </section>
    )
}
