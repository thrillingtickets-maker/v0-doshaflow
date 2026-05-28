import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/posts"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Notes from the Ground — An Ayurvedic Retreat Journal | DoshaFlow",
  description: "Daily posts from a two-week Ayurvedic retreat in India. Real experiences, treatments, food, and what actually happens when a modern Westerner commits to the practice.",
  openGraph: {
    title: "Notes from the Ground — An Ayurvedic Retreat Journal | DoshaFlow",
    description: "Daily posts from a two-week Ayurvedic retreat in India. Real experiences, treatments, food, and what actually happens when a modern Westerner commits to the practice.",
    type: "website",
    url: "https://doshaflow.com/blog",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#C97F3D]/10 text-[#C97F3D] text-xs font-medium tracking-widest uppercase rounded-full mb-6">
            From the Retreat
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Notes from the{" "}
            <span className="italic text-[#C97F3D]">ground.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real-time dispatches from a two-week Ayurvedic retreat in India — and everything that comes after.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="p-6">
                  <time className="text-sm text-muted-foreground">
                    {post.date}
                  </time>
                  <h2 className="font-serif text-xl text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#C97F3D] hover:gap-3 transition-all"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No posts yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
