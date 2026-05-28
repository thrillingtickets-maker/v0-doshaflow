"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Subscription failed")
      }

      setSubmitted(true)
    } catch {
      setError("Something went wrong — try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="waitlist" className="px-6 py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-primary-foreground/10 text-primary-foreground rounded-full">
            Join the waitlist
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            Be the first to experience personalized wellness
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 leading-relaxed mb-12">
            Join our waitlist for early access. We&apos;ll notify you when DoshaFlow is ready — plus early members get 3 months free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <p className="text-xl font-medium text-primary-foreground">
              You&apos;re on the list. We&apos;ll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30 focus:border-primary-foreground/40"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-medium rounded-full transition-all hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                  {!isSubmitting && (
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  )}
                </button>
              </div>
              {error && (
                <p className="text-red-300 text-sm">{error}</p>
              )}
            </form>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-sm text-primary-foreground/60"
        >
          No spam, ever. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  )
}
