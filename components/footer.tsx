"use client"

import { motion } from "framer-motion"
import { Linkedin, Instagram, Mail } from "lucide-react"

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
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              Ayurvedic wisdom for modern overstimulated people. Sleep, digestion, stress, and nervous system recovery. Educational wellness content — not medical advice.
            </p>
            <a
              href="mailto:hello@doshaflow.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              hello@doshaflow.com
            </a>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Get Started</h4>
            <ul className="space-y-3">
              <li><a href="/start-here" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Start Here</a></li>
              <li><a href="/guides" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Guides Library</a></li>
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
              <li><a href="/blog/ayurveda-beginners-guide" className="text-muted-foreground hover:text-foreground transition-colors text-sm">The Honest Beginner's Guide</a></li>
              <li><a href="/transparency" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Is Ayurveda Safe?</a></li>
              <li><a href="/blog/ayurveda-vs-western-medicine" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Western Wellness Critique</a></li>
              <li><a href="/blog/why-im-building-doshaflow" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Building DoshaFlow</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="/transparency" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Transparency</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors text-sm">FAQ</a></li>
              <li><a href="/founder" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Meet the Founder</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 DoshaFlow. All rights reserved.{" "}
            <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors underline">Privacy Policy</a> ·{" "}
            <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors underline">Terms</a> ·{" "}
            <a href="/transparency" className="text-muted-foreground hover:text-foreground transition-colors underline">Transparency</a> ·{" "}
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors underline">Contact</a>
          </p>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/doshaflow_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
