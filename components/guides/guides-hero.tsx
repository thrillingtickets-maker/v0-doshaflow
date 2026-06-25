"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen } from "lucide-react"

export function GuidesHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Soft gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 15%, oklch(0.92 0.04 130 / 0.6) 0%, transparent 70%), radial-gradient(55% 45% at 10% 85%, oklch(0.9 0.03 70 / 0.55) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-card text-secondary-foreground rounded-full border border-border/60">
            The Guides Library
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 text-balance leading-[1.05]">
            Ayurveda Guides
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl mb-8">
            Explore evidence-informed Ayurvedic guides for anxiety, sleep, digestion, stress, hormones, energy, weight
            loss, herbs, and daily routines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Start the Dosha Quiz
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/start-here"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-card text-foreground font-medium rounded-full border border-border hover:border-foreground/30 transition-all"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Read the Beginner's Guide
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/60 shadow-xl shadow-primary/5">
            <Image
              src="/guides/guides-hero.png"
              alt="Hand-drawn illustration of Ayurvedic herbs, turmeric root, and a steaming tea bowl in warm earth tones"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
