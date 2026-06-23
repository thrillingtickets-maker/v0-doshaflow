"use client"

import { motion } from "framer-motion"

export function Founder() {
  return (
    <section id="founder" className="px-6 py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            Meet the Founder
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
            Built by someone who needed it first
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-1 text-center">
            Founder of DoshaFlow
          </h3>

          <div className="mt-8 space-y-4 text-foreground/90 leading-relaxed">
            <p>
              I&apos;m not a doctor, an Ayurvedic physician, or a credentialed
              practitioner — and DoshaFlow doesn&apos;t pretend otherwise. I&apos;m
              someone who spent years overstimulated, under-rested, and frustrated by
              wellness advice that was either vague mysticism or aggressive
              optimization, and who went looking for something more practical.
            </p>
            <p>
              I built DoshaFlow after going to an Ayurvedic retreat in Bengaluru,
              India, expecting very little. What I found was a practical framework for
              recovery — and a gap between that tradition and how it&apos;s sold in the
              West. I started writing things down, testing routines, and reading
              widely to separate what holds up from what doesn&apos;t.
            </p>
            <p>
              DoshaFlow exists to translate Ayurvedic principles into clear,
              evidence-aware guidance — without the guru act, the fear-mongering, or
              the promises no one can keep. It is educational, not medical, and it
              points you toward qualified professionals for anything that needs one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
