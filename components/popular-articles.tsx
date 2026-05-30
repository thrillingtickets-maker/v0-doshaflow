"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const articles = [
  {
    title: "Why Am I Always Bloated?",
    description: "Understand Ayurvedic causes of chronic bloating and proven remedies.",
    href: "/blog/why-am-i-always-bloated",
  },
  {
    title: "Best Ayurvedic Tea for Anxiety",
    description: "Herbs and teas that calm the nervous system without sedation.",
    href: "/blog/best-ayurvedic-tea-anxiety",
  },
  {
    title: "Ashwagandha Benefits",
    description: "The research behind this adaptogenic herb and how to use it properly.",
    href: "/blog/ashwagandha-benefits",
  },
  {
    title: "Ayurvedic Morning Routine",
    description: "The daily ritual that transforms digestion, energy, and mental clarity.",
    href: "/blog/ayurvedic-morning-routine",
  },
]

export function PopularArticles() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            <span className="text-balance">Popular Articles</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            The most-read guides on digestion, sleep, stress, and recovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={article.href}
                className="block h-full p-6 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-muted-foreground">Read more →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
