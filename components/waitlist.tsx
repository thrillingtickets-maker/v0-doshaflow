"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus("success")
    setEmail("")
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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 p-4 bg-primary-foreground/10 rounded-full"
            >
              <span className="w-8 h-8 flex items-center justify-center bg-primary-foreground rounded-full">
                <Check className="w-4 h-4 text-primary" />
              </span>
              <span className="font-medium">You&apos;re on the list! Check your inbox.</span>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-medium rounded-full transition-all hover:shadow-lg disabled:opacity-70"
              >
                {status === "loading" ? (
                  "Joining..."
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          )}
        </motion.form>

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
