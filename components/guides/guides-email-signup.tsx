"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function GuidesEmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "guides-7-day-reset" }),
      })
      if (response.ok) {
        setStatus("success")
        setEmail("")
        setTimeout(() => setStatus("idle"), 4000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 4000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const perks = ["One small, doable shift each day", "Rooted in Ayurveda, written for modern life", "No spam — unsubscribe anytime"]

  return (
    <section className="px-6 py-20 md:py-28 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-border/60 bg-card p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <span className="inline-block px-4 py-2 mb-5 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
              Free Email Course
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4 text-balance">
              The Free 7-Day Ayurvedic Reset
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A gentle, practical week of daily emails to calm your nervous system, steady digestion, and rebuild a
              rhythm your body can keep. Start whenever you're ready.
            </p>
            <ul className="space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label htmlFor="guides-reset-email" className="sr-only">
              Email address
            </label>
            <input
              id="guides-reset-email"
              type="email"
              placeholder="your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "You're in — check your inbox"
                  : "Send me Day 1"}
            </button>
            {status === "success" && (
              <p className="text-sm text-primary text-center">Thank you. Day 1 is on its way.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive text-center">Something went wrong. Please try again.</p>
            )}
            <p className="text-xs text-muted-foreground/70 text-center mt-1">
              Educational wellness content, not medical advice.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
