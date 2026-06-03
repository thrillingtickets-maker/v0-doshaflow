"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-sm">D</span>
              </span>
              <span className="font-serif text-xl font-medium text-foreground">DoshaFlow</span>
            </a>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Ayurvedic wisdom for modern overstimulated people. Sleep, digestion, stress, and nervous system recovery.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li><a href="/start-here" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Start Here</a></li>
              <li><a href="/quiz" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Free Dosha Quiz</a></li>
              <li><a href="/samples" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Sample Reports</a></li>
              <li><a href="/journal" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Retreat Journal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Doshas</h4>
            <ul className="space-y-3">
              <li><a href="/vata" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Vata Guide</a></li>
              <li><a href="/pitta" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Pitta Guide</a></li>
              <li><a href="/kapha" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Kapha Guide</a></li>
              <li><a href="/blog?page=1" className="text-muted-foreground hover:text-foreground transition-colors text-sm">All Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Editorial</h4>
            <ul className="space-y-3">
              <li><a href="/blog/honest-beginners-guide-ayurveda-2026" className="text-muted-foreground hover:text-foreground transition-colors text-sm">The Honest Beginner's Guide</a></li>
              <li><a href="/blog/is-ayurveda-safe-heavy-metals" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Is Ayurveda Safe?</a></li>
              <li><a href="/blog/what-western-wellness-gets-wrong-about-ayurveda" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Western Wellness Critique</a></li>
              <li><a href="/blog/building-doshaflow-safety-sourcing-personalization" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Building DoshaFlow</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Topics</h4>
            <ul className="space-y-3">
              <li><a href="/blog/best-ayurvedic-tea-sleep" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Sleep & Energy</a></li>
              <li><a href="/blog/best-herbs-for-anxiety" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Anxiety & Stress</a></li>
              <li><a href="/blog/why-am-i-always-bloated" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Digestion</a></li>
              <li><a href="/blog/best-ayurvedic-tea-digestion" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Tea & Herbs</a></li>
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
            © 2026 DoshaFlow. All rights reserved. <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors underline">Privacy</a> · <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors underline">Terms</a>
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
