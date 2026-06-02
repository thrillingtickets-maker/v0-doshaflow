"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function EmailCapture() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Replace with your actual email service endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus("success")
        setEmail("")
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <section className="px-6 py-24 md:py-32 bg-background/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto text-center"
      >
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Stay Connected
        </h2>

        {/* Description - Restrained Tone */}
        <p className="text-base text-muted-foreground leading-relaxed mb-8 font-light">
          Get occasional essays and practical guides for nervous system recovery, without the noise.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {status === "loading" ? "Sending..." : status === "success" ? "Subscribed!" : "Subscribe"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-green-600"
          >
            Thank you. You'll hear from us soon.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-sm text-red-600"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-muted-foreground/60 mt-6 font-light">
          We respect your inbox. No spam, no aggressive marketing.
        </p>
      </motion.div>
    </section>
  )
}
