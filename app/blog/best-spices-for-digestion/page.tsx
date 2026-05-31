import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArticleHero } from "@/components/article-hero"
import { highlightMap } from "@/lib/article-colors"
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
  const highlightWord = highlightMap[slug]
  
  if (!post) {
    notFound()
  }
  
  return (
    <>
      <Navigation />
      <ArticleHero
        title={post.title}
        category={post.category}
        date={post.date}
        highlightWord={highlightWord}
      />
      <main>
        <article className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Article Content */}
          <div
            className="prose prose-invert max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
