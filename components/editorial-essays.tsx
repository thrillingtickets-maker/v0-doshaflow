import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { ArrowRight } from "lucide-react"

export function EditorialEssays() {
  const allPosts = getAllPosts()
  const editorialEssays = allPosts
    .filter(post => post.category === "editorial")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  if (editorialEssays.length === 0) {
    return null
  }

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
            Editorial Essays
          </h2>
          <p className="text-base text-muted-foreground font-light">
            Founder-led reflections on Ayurveda, wellness, and building with integrity.
          </p>
        </div>

        {/* Essays Grid */}
        <div className="grid grid-cols-1 gap-12">
          {editorialEssays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/blog/${essay.slug}`}
              className="group block border-b border-border/50 pb-8 hover:border-primary/30 transition-colors duration-300"
            >
              {/* Date and Category */}
              <div className="mb-3 flex items-center gap-3">
                <span className="text-sm text-muted-foreground">{essay.date}</span>
                <span className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-sm">
                  Editorial
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {essay.title}
              </h3>

              {/* Excerpt */}
              <p className="text-base text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                {essay.excerpt}
              </p>

              {/* Read More Link */}
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                Read essay
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
