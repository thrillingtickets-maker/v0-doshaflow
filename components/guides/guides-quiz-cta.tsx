"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function GuidesQuizCta() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 60% at 80% 10%, oklch(1 0 0 / 0.12) 0%, transparent 70%), radial-gradient(45% 55% at 15% 90%, oklch(0 0 0 / 0.12) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-primary-foreground/15 text-primary-foreground rounded-full">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Free 5-minute quiz
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-primary-foreground mb-5 text-balance">
              Start with your constitution
            </h2>
            <p className="text-lg text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto mb-9 text-pretty">
              Every guide on this page works better when you know your dosha. Take the free quiz to discover whether
              you're Vata, Pitta, or Kapha — and get a personalized path through the library.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-full hover:shadow-xl transition-all"
            >
              Take the Dosha Quiz
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
