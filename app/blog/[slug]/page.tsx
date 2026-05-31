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
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#8a7a5a] text-sm mb-10 hover:underline cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </a>
          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none text-foreground mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          {/* Post Footer - Back Link */}
          <footer className="mt-16 pt-8 border-t border-[#e8d9c5]">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[#8a7a5a] text-sm hover:underline cursor-pointer"
            >
              <ArrowLeft size={16} />
              Back to all posts
            </a>
          </footer>
        </div>
      </article>
    </main>
  )
}
