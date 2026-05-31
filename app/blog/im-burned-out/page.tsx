import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { posts } from "@/lib/posts";
import { ArticleHero } from "@/components/article-hero";
import { highlightMap } from "@/lib/article-colors";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ slug: "im-burned-out" }];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  const highlightWord = highlightMap[params.slug];

  if (!post) {
    notFound();
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
      <main className="min-h-screen bg-background">
        <article className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Article Header removed - now using ArticleHero */}

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
  );
}
