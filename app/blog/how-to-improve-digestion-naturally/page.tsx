import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: "Post Not Found | DoshaFlow",
    }
  }
  return {
    title: post.seoTitle || `${post.title} | DoshaFlow Blog`,
    description: post.seoDescription || post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }
  return (
    <main>
      <article style={{ maxWidth: "680px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "120px", paddingBottom: "80px" }}>
        {/* Back Link */}
        <a
          href="/blog"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", textDecoration: "none", fontSize: "14px", marginBottom: "40px", cursor: "pointer" }}
        >
          <ArrowLeft size={16} />
          Back to Blog
        </a>
        {/* Post Header */}
        <header style={{ marginBottom: "40px" }}>
          <time style={{ fontSize: "13px", color: "#9a8878", fontWeight: 400, letterSpacing: "0.05em" }}>
            {post.date}
          </time>
          <h1 style={{ fontSize: "32px", fontWeight: 700, marginTop: "16px", marginBottom: "12px", color: "#1a1a1a", lineHeight: 1.2 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: "13px", color: "#9a7a5a", fontStyle: "italic", marginBottom: "24px" }}>
            By <span style={{ color: "#1a1a1a", fontWeight: 500 }}>Alex</span> · Written during study and treatment in Kerala, India.
          </p>
        </header>
        {/* Post Content */}
        <div
          style={{ color: "#3d2e1e", fontSize: "17px", lineHeight: 1.75 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {/* Post Footer - Back Link */}
        <footer style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #e8d9c5" }}>
          <a
            href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", textDecoration: "none", fontSize: "14px", cursor: "pointer" }}
          >
            <ArrowLeft size={16} />
            Back to all posts
          </a>
        </footer>
      </article>
    </main>
  )
}
