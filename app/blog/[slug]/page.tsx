import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { Navigation } from "@/components/navigation"
import { ArticleHero } from "@/components/article-hero"
import { ArticleEmailCapture } from "@/components/article-email-capture"
import { ArticleQuizCta } from "@/components/article-quiz-cta"
import { highlightMap } from "@/lib/article-colors"
import { processArticleContent, splitArticleIntro } from "@/lib/process-article-content"
import { calculateReadingTime, formatReadingTime } from "@/lib/reading-time"
import { RelatedReading } from "@/components/related-reading"
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
  const readingTime = calculateReadingTime(post.content)
  const { intro, body } = splitArticleIntro(processArticleContent(post.content))

  return (
    <>
      <Navigation />
      <main style={{ minHeight: "100vh", backgroundColor: "#fdf8f3" }}>
      <ArticleHero
        title={post.title}
        category={post.category}
        date={post.date}
        highlightWord={highlightWord}
      />
      <article style={{ paddingBottom: "96px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          {/* Hero to Body Transition */}
          <div style={{ paddingTop: "56px", paddingBottom: "40px", borderBottom: "1px solid #e8d9c5", marginBottom: "48px" }}>
            {/* Metadata with Reading Time */}
            <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "14px", color: "#8a7a5a", marginBottom: "28px" }}>
              <span>{post.date}</span>
              <span>{formatReadingTime(readingTime)}</span>
            </div>
            
            {/* Optional Dek / Subheadline */}
            {post.dek && (
              <div style={{
                fontSize: "18px",
                lineHeight: 1.75,
                color: "#5a5a5a",
                fontWeight: 500,
                marginTop: "20px",
                maxWidth: "720px"
              }}>
                {post.dek}
              </div>
            )}
          </div>

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
              font-size: 19px;
              line-height: 1.95;
              color: #2c1a0e;
              font-weight: 500;
              margin-top: 0;
              margin-bottom: 28px;
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

            /* Founder article styled components */
            article div [style*="background"] {
              box-sizing: border-box;
            }

            article div [style*="display: grid"] {
              box-sizing: border-box;
            }

            article div [style*="display: grid"] > div {
              box-sizing: border-box;
            }

            article div [style*="padding: 32px"] {
              box-sizing: border-box;
            }

            article div [style*="padding: 24px"] {
              box-sizing: border-box;
            }

            article div [style*="border-left"] {
              box-sizing: border-box;
            }

            article div [style*="border-radius"] ul {
              margin: 0;
              padding-left: 20px;
            }

            article div [style*="border-radius"] li {
              margin: 8px 0;
            }

            article div [style*="font-size: 32px"] {
              display: block;
            }

            article div [style*="font-size: 48px"] {
              display: block;
            }

            /* Enhanced visual styling for all article elements */
            article div h2 {
              position: relative;
              padding-bottom: 16px;
              margin-bottom: 32px;
            }

            article div h2::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 40px;
              height: 3px;
              background: linear-gradient(90deg, #c49a6c 0%, #d4a876 100%);
              border-radius: 2px;
            }

            /* Add subtle background to blockquotes with left border */
            article div blockquote {
              position: relative;
              overflow: hidden;
            }

            article div blockquote::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              width: 4px;
              background: linear-gradient(180deg, #c49a6c 0%, #a67c52 100%);
            }

            /* Subtle accent for intro paragraphs */
            article div p:first-of-type::first-letter {
              font-size: 1.2em;
              font-weight: 700;
              color: #c49a6c;
            }

            /* Enhanced list styling */
            article div ul li::before {
              content: '◆';
              margin-right: 12px;
              color: #c49a6c;
              font-size: 0.6em;
              position: relative;
              top: 2px;
            }

            article div ul {
              list-style: none;
              padding-left: 0;
            }

            /* Subtle background for strong emphasis within paragraphs */
            article div p strong {
              background: rgba(196, 154, 108, 0.08);
              padding: 2px 6px;
              border-radius: 3px;
              font-weight: 600;
            }

            /* Section dividers */
            article div > p:nth-of-type(3n) {
              margin-bottom: 40px;
              padding-bottom: 24px;
              border-bottom: 1px solid rgba(196, 154, 108, 0.15);
            }

            /* Enhanced code/technical elements if present */
            article div code {
              background: rgba(196, 154, 108, 0.08);
              padding: 2px 6px;
              border-radius: 3px;
              font-family: 'Monaco', 'Courier New', monospace;
              font-size: 0.95em;
              color: #8A7660;
            }

            /* Table styling if present */
            article div table {
              width: 100%;
              border-collapse: collapse;
              margin: 32px 0;
              border: 1px solid #e8d9c5;
              border-radius: 4px;
              overflow: hidden;
            }

            article div table th {
              background: rgba(196, 154, 108, 0.08);
              padding: 16px;
              text-align: left;
              font-weight: 600;
              color: #8A7660;
              border-bottom: 2px solid #e8d9c5;
            }

            article div table td {
              padding: 12px 16px;
              border-bottom: 1px solid #e8d9c5;
            }

            article div table tr:hover {
              background: rgba(196, 154, 108, 0.04);
            }

            /* Definition list styling */
            article div dt {
              font-weight: 600;
              color: #8A7660;
              margin-top: 16px;
              margin-bottom: 8px;
            }

            article div dd {
              margin-left: 16px;
              margin-bottom: 16px;
              color: #3a3a3a;
              line-height: 1.85;
            }

            /* Add visual separation between major sections */
            article div h2 + p {
              font-size: 16px;
              color: #666;
              font-style: italic;
              margin-bottom: 24px;
            }

            /* Body continues after the inline CTA: don't re-apply lead/drop-cap styling */
            article div.article-body-continued p:first-of-type {
              font-size: 17px;
              line-height: 1.85;
              color: #3a3a3a;
              font-weight: 400;
              margin-top: 20px;
              margin-bottom: 20px;
            }

            article div.article-body-continued p:first-of-type::first-letter {
              font-size: inherit;
              font-weight: inherit;
              color: inherit;
            }
          `}</style>
          <div
            style={{ color: "#2c1a0e", lineHeight: 1.85 }}
            dangerouslySetInnerHTML={{ __html: intro }}
          />

          {/* Inline Conversion CTA - after intro */}
          <ArticleQuizCta />

          {body && (
            <div
              className="article-body-continued"
              style={{ color: "#2c1a0e", lineHeight: 1.85 }}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          )}

          {/* Email Capture Section - near end, before related reading */}
          <ArticleEmailCapture articleTitle={post.title} />

          {/* Related Reading Section */}
          <RelatedReading currentSlug={slug} />

          {/* Post Footer - Back Link */}
          <footer style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #e8d9c5" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Link
                href="/blog"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", fontSize: "14px", textDecoration: "none", cursor: "pointer" }}
              >
                <ArrowLeft size={16} />
                Back to all posts
              </Link>
              <Link
                href="/start-here"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", fontSize: "14px", textDecoration: "none", cursor: "pointer", marginTop: "8px" }}
              >
                Explore more guides →
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </main>
    </>
  )
}
