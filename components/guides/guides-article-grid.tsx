"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export interface GuideArticleCard {
  href: string
  title: string
  excerpt: string
  date: string
  categoryLabel: string
}

interface GuidesArticleGridProps {
  eyebrow: string
  heading: string
  articles: GuideArticleCard[]
  tinted?: boolean
}

export function GuidesArticleGrid({ eyebrow, heading, articles, tinted = false }: GuidesArticleGridProps) {
  return (
    <section className={`px-6 py-20 md:py-28 ${tinted ? "bg-secondary/30" : ""}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="inline-block px-4 py-2 mb-5 text-sm font-medium tracking-wide uppercase bg-card text-secondary-foreground rounded-full border border-border/60">
            {eyebrow}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">{heading}</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            >
              <Link
                href={article.href}
                className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-7 transition-all hover:border-foreground/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium uppercase tracking-wide">
                    {article.categoryLabel}
                  </span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3 leading-snug group-hover:text-primary transition-colors text-balance">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">{article.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
