"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllPosts } from "@/lib/posts"

export function StartHereEditorials() {
  const allPosts = getAllPosts()
  const editorialEssays = allPosts
    .filter((post) => post.category === "editorial")
    .slice(0, 2) // Show top 2 essays

  return (
    <section className="px-6 py-24 md:py-40 bg-background/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            <span className="text-balance">Why DoshaFlow Exists</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Read the essays that shaped how we think about Ayurveda, safety, and building for overwhelmed people.
          </p>
        </motion.div>

        {/* Essays */}
        <div className="grid grid-cols-1 gap-16">
          {editorialEssays.map((essay, index) => (
            <motion.div
              key={essay.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${essay.slug}`}
                className="group block hover:opacity-75 transition-opacity duration-400"
              >
                {/* Date - Minimal */}
                <div className="mb-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">{essay.date}</span>
                </div>

                {/* Title - Cinematic */}
                <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight max-w-4xl">
                  {essay.title}
                </h3>

                {/* Excerpt */}
                <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl font-light">
                  {essay.excerpt}
                </p>

                {/* Read More - Subtle */}
                <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 uppercase tracking-widest">
                  Read essay
                  <ArrowRight className="w-3 h-3" />
                </div>

                {/* Divider */}
                <div className="mt-8 h-px bg-border/30 group-hover:bg-border/50 transition-colors duration-400" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Link to all editorial essays */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-border/30"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            <span>View all essays and guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
