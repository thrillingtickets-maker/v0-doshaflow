"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { parsePostDate, formatPostDate } from "@/lib/dates"
import { isCategory, categoryToSlug } from "@/lib/categories"
import { getCategoryColor } from "@/lib/article-colors"

// The 6 most recent posts, newest first. Computed from lib/posts.ts at render
// so the section updates automatically whenever a post is added — never a
// hardcoded list. Sorting uses parsePostDate to handle the two stored date
// formats correctly.
const latest = getAllPosts()
  .slice()
  .sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date))
  .slice(0, 6)

export function LatestArticles() {
  return (
    <section className="px-6 py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            <span className="text-balance">Latest Articles</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Fresh from the journal — our most recent guides on doshas, digestion, sleep, and everything in between.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post, index) => {
            const accent = getCategoryColor(post.category)
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex h-full flex-col p-6 md:p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-xs text-muted-foreground uppercase tracking-widest">
                    {formatPostDate(post.date)}
                  </time>
                  {isCategory(post.category) && (
                    <Link
                      href={`/blog/category/${categoryToSlug(post.category)}`}
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium capitalize transition-opacity hover:opacity-80"
                      style={{ backgroundColor: `${accent}15`, color: accent }}
                    >
                      {post.category}
                    </Link>
                  )}
                </div>

                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-muted-foreground group-hover:text-primary transition-colors"
                >
                  Read more →
                </Link>
              </motion.article>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
