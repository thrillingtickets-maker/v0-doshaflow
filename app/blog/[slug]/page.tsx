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
            @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');
            
            article div h2 {
              font-family: 'Lora', serif;
              font-size: 28px;
              font-weight: 600;
              margin: 56px 0 28px 0;
              color: #2c1a0e;
              line-height: 1.3;
              letter-spacing: -0.5px;
            }
            
            article div h3 {
              font-family: 'Lora', serif;
              font-size: 22px;
              font-weight: 600;
              margin: 48px 0 24px 0;
              color: #2c1a0e;
              line-height: 1.3;
              letter-spacing: -0.3px;
            }
            
            article div h4 {
              font-family: 'Lora', serif;
              font-size: 18px;
              font-weight: 600;
              margin: 32px 0 16px 0;
              color: #2c1a0e;
              line-height: 1.3;
            }
            
            article div p {
              margin: 20px 0;
              font-size: 17px;
              line-height: 1.85;
              color: #3a3a3a;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
            }
            
            article div p:first-of-type {
              font-size: 18px;
              line-height: 1.9;
              color: #2c1a0e;
              font-weight: 500;
            }
            
            article div ul, article div ol {
              margin: 28px 0;
              padding-left: 32px;
            }
            
            article div li {
              margin: 12px 0;
              font-size: 17px;
              line-height: 1.85;
              color: #3a3a3a;
            }
            
            article div strong {
              font-weight: 600;
              color: #2c1a0e;
            }
            
            article div em {
              font-style: italic;
              color: #2c1a0e;
            }
            
            article div a {
              color: #c49a6c;
              text-decoration: underline;
              font-weight: 500;
              transition: color 0.2s;
            }
            
            article div a:hover {
              color: #b5893f;
            }
            
            article div blockquote {
              border-left: 3px solid #c49a6c;
              margin: 32px 0;
              padding: 24px 28px;
              background-color: rgba(242, 237, 226, 0.5);
              font-style: italic;
              color: #2c1a0e;
              font-size: 17px;
              line-height: 1.85;
              font-family: 'Lora', serif;
              font-weight: 500;
            }
            
            article div blockquote p {
              margin: 0;
            }
            
            article div hr {
              border: none;
              height: 1px;
              background-color: #e8d9c5;
              margin: 48px 0;
            }
          `}</style>
          <div
            style={{ color: "#2c1a0e", lineHeight: 1.85 }}
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
