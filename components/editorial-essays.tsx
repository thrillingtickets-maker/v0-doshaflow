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
    <section className="px-6 py-24 md:py-40">
      <div className="max-w-5xl mx-auto">
        {/* Section Title - Restrained */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
            Editorial Essays
          </h2>
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            Founder reflections
          </p>
        </div>

        {/* Essays Grid - Slower, More Cinematic */}
        <div className="grid grid-cols-1 gap-16 md:gap-20">
          {editorialEssays.map((essay) => (
            <Link
              key={essay.slug}
              href={`/blog/${essay.slug}`}
              className="group block hover:opacity-75 transition-opacity duration-400"
            >
              {/* Metadata - Minimal */}
              <div className="mb-6 flex items-center gap-4">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{essay.date}</span>
              </div>

              {/* Title - Larger, More Cinematic */}
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6 leading-tight max-w-4xl">
                {essay.title}
              </h3>

              {/* Excerpt - Generous Space */}
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-3xl font-light">
                {essay.excerpt}
              </p>

              {/* Read More - Subtle */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 uppercase tracking-widest">
                Read essay
                <ArrowRight className="w-3 h-3" />
              </div>

              {/* Subtle Divider */}
              <div className="mt-8 h-px bg-border/30 group-hover:bg-border/50 transition-colors duration-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
