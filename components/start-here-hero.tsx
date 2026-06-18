"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function StartHereHero() {
  return (
    <section className="px-6 py-32 md:py-48 pt-24 md:pt-32 bg-gradient-to-b from-background via-background to-background/80">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif text-foreground mb-8 leading-tight"
        >
          <span className="text-balance">
            You're probably not broken.
          </span>
          <br />
          <span className="text-muted-foreground">You're probably overwhelmed.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6"
        >
          Modern life has broken your nervous system. Ayurveda doesn't try to fix you—it teaches you how to recover.
        </motion.p>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12 font-light"
        >
          If you're exhausted, anxious, bloated, burned out, or just unsure where to begin—this page is for you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/quiz"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors duration-200"
          >
            Take the Dosha Quiz
          </Link>
          <Link
            href="/blog/ayurveda-beginners-guide"
            className="px-8 py-3 border border-border text-foreground rounded-lg font-medium text-sm hover:bg-background/50 transition-colors duration-200"
          >
            Read the Beginner's Guide
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border/30"
        />
      </div>
    </section>
  )
}
