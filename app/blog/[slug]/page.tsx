import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { ArticleHero } from "@/components/article-hero"
import { highlightMap } from "@/lib/article-colors"
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
  
  const highlightWord = highlightMap[slug]

  return (
    <main>
      <ArticleHero
        title={post.title}
        category={post.category}
        date={post.date}
        highlightWord={highlightWord}
      />
      <article style={{ maxWidth: "680px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px", paddingTop: "40px", paddingBottom: "80px" }}>
        {/* Back Link */}
        <a
          href="/blog"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", textDecoration: "none", fontSize: "14px", marginBottom: "40px", cursor: "pointer" }}
        >
          <ArrowLeft size={16} />
          Back to Blog
        </a>
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
