"use client"
import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/posts"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
const FILTER_CATEGORIES = [
  "All",
  "Doshas",
  "Tea",
  "Digestion",
  "Stress & Anxiety",
  "Sleep",
  "Women's Health",
  "Men's Health",
  "Weight Loss",
  "Retreat Journal",
]
function getArticleFilters(slug: string, category: string): string[] {
  const filters = ["All"]
  if (category === "journal") {
    filters.push("Retreat Journal")
    return filters
  }
  // Tea articles
  if (slug.includes("tea")) {
    filters.push("Tea")
  }
  // Dosha guide articles
  if (
    slug.includes("dosha") ||
    slug.includes("vata-") ||
    slug.includes("pitta-") ||
    slug.includes("kapha-")
  ) {
    filters.push("Doshas")
  }
  // Digestion and bloating
  if (
    slug.includes("bloat") ||
    slug.includes("digest") ||
    slug.includes("ice-water")
  ) {
    filters.push("Digestion")
  }
  // Stress and anxiety
  if (
    slug.includes("anxiety") ||
    slug.includes("stress") ||
    slug.includes("cortisol") ||
    slug.includes("burnout") ||
    slug.includes("anger")
  ) {
    filters.push("Stress & Anxiety")
  }
  // Sleep
  if (slug.includes("sleep") || slug.includes("tired")) {
    filters.push("Sleep")
  }
  // Women's health
  if (
    slug.includes("pms") ||
    slug.includes("hormonal") ||
    slug.includes("perimenopause") ||
    slug.includes("skin-guide")
  ) {
    filters.push("Women's Health")
  }
  // Men's health
  if (slug.includes("men")) {
    filters.push("Men's Health")
  }
  // Weight loss
  if (
    slug.includes("weight") ||
    slug.includes("diet-plan") ||
    slug.includes("foods-to-avoid")
  ) {
    filters.push("Weight Loss")
  }
  return filters
}
const MONTHS: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
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
export default function BlogPage() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const allPosts = getAllPosts()
    .filter((post) => post.category === "article" || post.category === "journal")
    .sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date))
  const filteredPosts = useMemo(() => {
    if (selectedFilter === "All") {
      return allPosts
    }
    return allPosts.filter((post) => {
      const filters = getArticleFilters(post.slug, post.category)
      return filters.includes(selectedFilter)
    })
  }, [selectedFilter, allPosts])
  return (
    <main>
      <Navigation />
      {/* Hero Section */}
      <section>
        <div>
          <h1>
            Articles
          </h1>
          <p>
            Ayurvedic guides, research, and practical advice.
          </p>
        </div>
      </section>
      {/* Filter Pills */}
      <section style={{ paddingTop: "60px", paddingBottom: "48px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <div style={{ display: "flex", flexWrap: "nowrap", gap: "8px", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: "4px", scrollBehavior: "smooth" }}>
            {FILTER_CATEGORIES.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                style={{
                  padding: "6px 20px",
                  fontSize: "12px",
                  fontWeight: 400,
                  border: selectedFilter === filter ? "none" : "1px solid rgba(0, 0, 0, 0.08)",
                  backgroundColor: selectedFilter === filter ? "#f5f0e8" : "transparent",
                  color: selectedFilter === filter ? "#1a1a1a" : "#8a7a6e",
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (selectedFilter !== filter) {
                    (e.target as HTMLButtonElement).style.backgroundColor = "#f5f0e8";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFilter !== filter) {
                    (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          <style>{`
            div:has(button) {
              scrollbar-width: none;
            }
            div:has(button)::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section style={{ backgroundColor: "#ffffff", paddingBottom: "64px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "48px" }}>
            {filteredPosts.map((post) => {
              const isRetreatJournal = post.slug.includes("retreat-day")
              return (
                <article
                  key={post.slug}
                  style={{
                    backgroundColor: isRetreatJournal ? "#fdf6ee" : "#ffffff",
                    border: isRetreatJournal ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(0, 0, 0, 0.08)",
                    borderLeft: isRetreatJournal ? "3px solid #d4a574" : undefined,
                    borderRadius: "8px",
                    padding: "32px",
                    marginBottom: "32px",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const element = e.currentTarget as HTMLElement;
                    element.style.borderColor = "rgba(0, 0, 0, 0.15)";
                    element.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const element = e.currentTarget as HTMLElement;
                    element.style.borderColor = "rgba(0, 0, 0, 0.08)";
                    element.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    {isRetreatJournal && (
                      <div style={{
                        fontSize: "11px",
                        fontStyle: "italic",
                        color: "#b5763a",
                        marginBottom: "8px",
                      }}>
                        📍 Kerala · Retreat Journal
                      </div>
                    )}
                    <time style={{
                      fontSize: "12px",
                      color: "#9a8878",
                      fontWeight: 400,
                      letterSpacing: "0.05em",
                      marginBottom: "10px",
                    }}>
                      {post.date}
                    </time>
                    <h2 style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: 1.35,
                      marginBottom: "12px",
                      color: "#1a1a1a",
                      fontStyle: isRetreatJournal ? "italic" : "normal",
                    }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                        <span style={{ cursor: "pointer", transition: "color 0.2s ease" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#b5763a")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                        >
                          {post.title}
                        </span>
                      </Link>
                    </h2>
                    <p style={{
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: "#5a5048",
                      marginBottom: "20px",
                      flex: 1,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#b5763a",
                        fontWeight: 500,
                        fontSize: "13px",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#8d5428")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#b5763a")}
                    >
                      Read more
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
          {filteredPosts.length === 0 && (
            <div style={{ textAlign: "center", paddingTop: "48px", paddingBottom: "48px" }}>
              <p style={{ color: "#5a5048", fontSize: "18px" }}>
                No posts found in this category. Try another filter.
              </p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
