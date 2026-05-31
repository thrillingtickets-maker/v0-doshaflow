import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { ArticleHero } from "@/components/article-hero"
import { highlightMap } from "@/lib/article-colors"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

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
    <main style={{ minHeight: "100vh", backgroundColor: "#fdf8f3" }}>
      <ArticleHero
        title={post.title}
        category={post.category}
        date={post.date}
        highlightWord={highlightWord}
      />
      <article style={{ padding: "48px 24px", paddingBottom: "96px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {/* Back Link */}
          <Link
            href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", fontSize: "14px", marginBottom: "40px", textDecoration: "none", cursor: "pointer" }}
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          {/* Post Content */}
          <style>{`
            article div h2 {
              font-size: 24px;
              font-weight: 700;
              margin: 40px 0 20px 0;
              color: #2c1a0e;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            }
            article div h3 {
              font-size: 18px;
              font-weight: 600;
              margin: 32px 0 16px 0;
              color: #2c1a0e;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            }
            article div p {
              margin: 16px 0;
              font-size: 16px;
              line-height: 1.75;
              color: #2c1a0e;
            }
            article div ul, article div ol {
              margin: 20px 0;
              padding-left: 24px;
            }
            article div li {
              margin: 8px 0;
              font-size: 16px;
              line-height: 1.75;
              color: #2c1a0e;
            }
            article div a {
              color: #c49a6c;
              text-decoration: underline;
              font-weight: 500;
            }
            article div a:hover {
              color: #b5893f;
            }
            article div blockquote {
              border-left: 4px solid #e8d9c5;
              margin: 24px 0;
              padding: 16px 20px;
              background-color: #faf8f2;
              font-style: italic;
              color: #5a5a5a;
            }
          `}</style>
          <div
            style={{ color: "#2c1a0e", lineHeight: 1.75 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* Post Footer - Back Link */}
          <footer style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #e8d9c5" }}>
            <Link
              href="/blog"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", fontSize: "14px", textDecoration: "none", cursor: "pointer" }}
            >
              <ArrowLeft size={16} />
              Back to all posts
            </Link>
          </footer>
        </div>
      </article>
    </main>
  )
}
