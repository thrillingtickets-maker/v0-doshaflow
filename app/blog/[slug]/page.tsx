import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
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
    <main className="min-h-screen bg-background">
      <Navigation />
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-[680px] mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          {/* Post Header */}
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">
              {post.date}
            </time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span>
            </p>
          </header>
          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#C97F3D] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-medium
              prose-blockquote:border-l-4 prose-blockquote:border-[#C97F3D] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/80
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* Post Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C97F3D] hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </footer>
        </div>
      </article>
      <Footer />
    </main>
  )
}