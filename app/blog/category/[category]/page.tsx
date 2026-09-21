import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { getAllPosts } from "@/lib/posts"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  CATEGORIES,
  categoryToSlug,
  slugToCategory,
  CATEGORY_INTROS,
  CATEGORY_META_DESCRIPTIONS,
} from "@/lib/categories"
import { CATEGORY_COLORS } from "@/lib/article-colors"

const SITE = "https://www.doshaflow.com"

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category: categoryToSlug(category) }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params
  const category = slugToCategory(slug)
  if (!category) {
    return { title: "Category Not Found | DoshaFlow" }
  }
  const title = `${category} — DoshaFlow`
  const description = CATEGORY_META_DESCRIPTIONS[category]
  const url = `${SITE}/blog/category/${slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: "DoshaFlow" },
    twitter: { card: "summary_large_image", title, description },
  }
}

const MONTHS: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
}
function parsePostDate(date: string): number {
  const match = date.trim().match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/)
  if (!match) {
    const fallback = new Date(date).getTime()
    return Number.isNaN(fallback) ? 0 : fallback
  }
  const [, monthName, day, year] = match
  const month = MONTHS[monthName.toLowerCase()]
  if (month === undefined) return 0
  return new Date(Number(year), month, Number(day)).getTime()
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params
  const category = slugToCategory(slug)
  if (!category) {
    notFound()
  }

  const posts = Array.from(
    new Map(
      getAllPosts()
        .filter((post) => post.category === category)
        .map((post) => [post.slug, post]),
    ).values(),
  ).sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date))

  const accent = CATEGORY_COLORS[category]?.accent ?? "#b5763a"

  const otherCategories = CATEGORIES.filter((c) => c !== category)

  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
        {/* Header */}
        <section style={{ paddingTop: "120px", paddingBottom: "32px" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
            <Link
              href="/blog"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a6e", fontSize: "14px", marginBottom: "24px", textDecoration: "none" }}
            >
              <ArrowLeft size={16} />
              All articles
            </Link>
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "20px",
                backgroundColor: `${accent}15`,
                color: accent,
              }}
            >
              Category
            </div>
            <h1 style={{ fontSize: "40px", fontWeight: 700, lineHeight: 1.2, marginBottom: "16px", color: "#1a1a1a" }} className="text-balance">
              {category}
            </h1>
            <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#5a5048", marginBottom: "0" }} className="text-pretty">
              {CATEGORY_INTROS[category]}
            </p>
          </div>
        </section>

        {/* Posts */}
        <section style={{ paddingTop: "24px", paddingBottom: "64px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
            {posts.length === 0 ? (
              <p style={{ color: "#5a5048", fontSize: "16px" }}>No articles in this category yet.</p>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "40px" }}>
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0, 0, 0, 0.06)",
                      borderRadius: "8px",
                      padding: "32px",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <time style={{ fontSize: "12px", color: "#9a8878", letterSpacing: "0.05em", marginBottom: "10px" }}>
                      {post.date}
                    </time>
                    <h2 style={{ fontSize: "19px", fontWeight: 600, lineHeight: 1.35, marginBottom: "12px", color: "#1a1a1a" }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {post.title}
                      </Link>
                    </h2>
                    <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#5a5048", marginBottom: "20px", flex: 1 }}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: accent, fontWeight: 500, fontSize: "13px", textDecoration: "none" }}
                    >
                      Read more
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            )}

            {/* Explore other categories */}
            <div style={{ marginTop: "72px", paddingTop: "40px", borderTop: "1px solid rgba(0, 0, 0, 0.06)" }}>
              <h2 style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8a7a6e", marginBottom: "20px" }}>
                Explore other topics
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {otherCategories.map((c) => (
                  <Link
                    key={c}
                    href={`/blog/category/${categoryToSlug(c)}`}
                    style={{
                      padding: "8px 18px",
                      borderRadius: "20px",
                      fontSize: "13px",
                      textDecoration: "none",
                      border: `1px solid ${CATEGORY_COLORS[c]?.border || "rgba(0, 0, 0, 0.08)"}`,
                      color: CATEGORY_COLORS[c]?.accent || "#5a5048",
                    }}
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
