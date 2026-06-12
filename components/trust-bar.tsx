"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, Server, BookOpen, UserCheck } from "lucide-react"

const signals = [
  { icon: ShieldCheck, label: "Privacy-first" },
  { icon: Lock, label: "No sale of personal data" },
  { icon: Server, label: "Secure infrastructure" },
  { icon: BookOpen, label: "Research-backed content" },
  { icon: UserCheck, label: "Human-reviewed recommendations" },
]

export function TrustBar() {
  return (
    <section className="px-6 py-10 md:py-12 bg-secondary/40 border-y border-border/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4"
        >
          {signals.map((signal) => {
            const Icon = signal.icon
            return (
              <div
                key={signal.label}
                className="flex flex-col items-center text-center gap-3"
              >
                <span className="w-11 h-11 rounded-full bg-card flex items-center justify-center border border-border/60">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </span>
                <span className="text-xs md:text-sm font-medium text-foreground leading-snug text-balance">
                  {signal.label}
                </span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
