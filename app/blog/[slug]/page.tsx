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
    <main>
      <Navigation />
      <article>
        <div>
          {/* Back Link */}
          <Link
            href="/blog"
          >
            <ArrowLeft />
            Back to Blog
          </Link>
          {/* Post Header */}
          <header>
            <time>
              {post.date}
            </time>
            <h1>
              {post.title}
            </h1>
            <p>
              By <span>Alex</span>
            </p>
          </header>
          {/* Post Content */}
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* Post Footer */}
          <footer>
            <Link
              href="/blog"
            >
              <ArrowLeft />
              Back to all posts
            </Link>
          </footer>
        </div>
      </article>
      <Footer />
    </main>
  )
}