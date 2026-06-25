"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { collections } from "./guides-data"

export function FeaturedCollections() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="inline-block px-4 py-2 mb-5 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            Featured Collections
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            Find your way in by theme
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              id={`collection-${collection.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="scroll-mt-28 group flex flex-col rounded-3xl border border-border/60 bg-card p-7 transition-all hover:border-foreground/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="text-3xl mb-4" aria-hidden="true">
                {collection.emoji}
              </span>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-2">{collection.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{collection.description}</p>
              <ul className="mt-auto space-y-1">
                {collection.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between gap-2 py-2 text-sm text-foreground/90 border-b border-border/40 last:border-0 hover:text-primary transition-colors"
                    >
                      <span>{link.title}</span>
                      <ArrowUpRight
                        className="w-4 h-4 shrink-0 text-muted-foreground/50 group-hover:text-primary/60 transition-colors"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
