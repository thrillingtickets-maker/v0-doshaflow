"use client"

import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function Footer() {
  const pathname = usePathname()
  const howItWorksHref = pathname === "/" ? "#how-it-works" : "/#how-it-works"

  return (
    <footer className="px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-sm">D</span>
              </span>
              <span className="font-serif text-xl font-medium text-foreground">DoshaFlow</span>
            </a>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Personalized wellness combining Ayurvedic wisdom with modern health tracking. Meal plans, movement, and digestion — all adapted to you.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href={howItWorksHref} className="text-muted-foreground hover:text-foreground transition-colors text-sm">How it works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Meal Plans</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Workouts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Tracking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2026 DoshaFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/doshaflow_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
