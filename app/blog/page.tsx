"use client"
import { useState, useMemo } from "react"
import { getAllPosts } from "@/lib/posts"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Category accent color system - subtle and elegant
const CATEGORY_COLORS: Record<string, { accent: string; border: string; pill: string }> = {
  "Stress & Anxiety": { accent: "#8fa88e", border: "#a8b8a7", pill: "#f0f4f0" },
  "Digestion": { accent: "#b5963a", border: "#c4a655", pill: "#faf8f2" },
  "Sleep": { accent: "#7a8fa8", border: "#8fa3b8", pill: "#f0f4fa" },
  "Women's Health": { accent: "#a87a8a", border: "#b89199", pill: "#faf0f5" },
  "Men's Health": { accent: "#7a9a5a", border: "#8faf6f", pill: "#f0f9f0" },
  "Retreat Journal": { accent: "#b5763a", border: "#d4a574", pill: "#fdf6ee" },
  "Tea": { accent: "#9a8a5a", border: "#b0a070", pill: "#faf8f2" },
  "Doshas": { accent: "#8a7a6e", border: "#a09a8e", pill: "#f5f0e8" },
  "Weight Loss": { accent: "#8a8a5a", border: "#a0a070", pill: "#faf9f2" },
}

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
function getPrimaryCategory(slug: string, category: string): string {
  if (category === "journal") return "Retreat Journal"
  if (slug.includes("tea")) return "Tea"
  if (slug.includes("dosha") || slug.includes("vata-") || slug.includes("pitta-") || slug.includes("kapha-")) return "Doshas"
  if (slug.includes("bloat") || slug.includes("digest") || slug.includes("ice-water")) return "Digestion"
  if (slug.includes("anxiety") || slug.includes("stress") || slug.includes("cortisol") || slug.includes("burnout") || slug.includes("anger")) return "Stress & Anxiety"
  if (slug.includes("sleep") || slug.includes("tired")) return "Sleep"
  if (slug.includes("pms") || slug.includes("hormonal") || slug.includes("perimenopause") || slug.includes("skin-guide")) return "Women's Health"
  if (slug.includes("men")) return "Men's Health"
  if (slug.includes("weight") || slug.includes("diet-plan") || slug.includes("foods-to-avoid")) return "Weight Loss"
  return "Doshas"
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
    let posts = selectedFilter === "All" 
      ? allPosts 
      : allPosts.filter((post) => {
        const filters = getArticleFilters(post.slug, post.category)
        return filters.includes(selectedFilter)
      })
    
    // When showing All articles and featured retreat section exists, exclude retreat-day from grid
    if (selectedFilter === "All") {
      const hasRetreatFeatured = posts.some(p => p.slug.includes("retreat-day"))
      if (hasRetreatFeatured) {
        posts = posts.filter(p => !p.slug.includes("retreat-day"))
      }
    }
    return posts
  }, [selectedFilter, allPosts])
  return (
    <main>
      {/* Hero Section */}
      <section style={{ paddingTop: "80px", paddingBottom: "40px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "12px", color: "#1a1a1a" }}>
            Ayurvedic Guides & Articles
          </h1>
          <p style={{ fontSize: "16px", color: "#8a7a6e", marginBottom: "0" }}>
            Ayurvedic guides, research, and practical advice on digestion, sleep, stress, hormonal health, and daily wellness by dosha type.
          </p>
        </div>
      </section>
      {/* Filter Pills */}
      <section style={{ paddingTop: "40px", paddingBottom: "40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", WebkitOverflowScrolling: "touch", paddingBottom: "4px", scrollBehavior: "smooth", justifyContent: "flex-start" }}>
            {FILTER_CATEGORIES.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                style={{
                  padding: "8px 22px",
                  fontSize: "13px",
                  fontWeight: 400,
                  border: selectedFilter === filter ? "none" : `1px solid ${CATEGORY_COLORS[filter]?.border || "rgba(0, 0, 0, 0.08)"}`,
                  backgroundColor: selectedFilter === filter ? (CATEGORY_COLORS[filter]?.pill || "#f5f0e8") : "transparent",
                  color: selectedFilter === filter ? (CATEGORY_COLORS[filter]?.accent || "#1a1a1a") : "#8a7a6e",
                  borderRadius: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (selectedFilter !== filter) {
                    (e.target as HTMLButtonElement).style.backgroundColor = "#f5f0e8";
                    (e.target as HTMLButtonElement).style.borderColor = CATEGORY_COLORS[filter]?.accent || "#8a7a6e";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedFilter !== filter) {
                    (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
                    (e.target as HTMLButtonElement).style.borderColor = CATEGORY_COLORS[filter]?.border || "rgba(0, 0, 0, 0.08)";
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
            .excerpt-clamped {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }
            @media (max-width: 768px) {
              .excerpt-clamped {
                -webkit-line-clamp: 2;
              }
              div:has(button) {
                gap: 8px;
              }
            }
          `}</style>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section style={{ backgroundColor: "#ffffff", paddingBottom: "64px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          {/* Featured Article */}
          {filteredPosts.length > 0 && selectedFilter === "All" && (
            <div style={{ marginBottom: "56px" }}>
              {filteredPosts.filter(p => p.slug.includes("retreat-day")).length > 0 && (
                (() => {
                  const featured = filteredPosts.find(p => p.slug.includes("retreat-day"))
                  if (!featured) return null
                  return (
                    <article
                      style={{
                        backgroundColor: "#fdf6ee",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        borderLeft: "2px solid #d4a574",
                        borderRadius: "8px",
                        padding: "48px",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "48px",
                        alignItems: "center",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "10px", fontStyle: "italic", color: "#b5763a", marginBottom: "12px" }}>
                          📍 Kerala · Featured
                        </div>
                        <h2 style={{ fontSize: "28px", fontWeight: 700, lineHeight: 1.3, marginBottom: "16px", color: "#1a1a1a", fontStyle: "italic" }}>
                          <Link href={`/blog/${featured.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                            {featured.title}
                          </Link>
                        </h2>
                        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#5a5048", marginBottom: "20px" }}>
                          {featured.excerpt}
                        </p>
                        <Link
                          href={`/blog/${featured.slug}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            color: "#b5763a",
                            fontWeight: 500,
                            fontSize: "14px",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#8d5428")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#b5763a")}
                        >
                          Read the journal entry <ArrowRight size={16} />
                        </Link>
                      </div>
                      <div style={{
                        height: "320px",
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                        borderRadius: "6px",
                        border: "1px dashed rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#9a7a5a",
                        fontSize: "14px",
                        textAlign: "center",
                        padding: "24px",
                      }}>
                        [Featured image: Kerala retreat scene]
                      </div>
                    </article>
                  )
                })()
              )}
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "48px" }}>
            {filteredPosts.map((post) => {
              const isRetreatJournal = post.slug.includes("retreat-day")
              const primaryCategory = getPrimaryCategory(post.slug, post.category)
              const categoryColor = CATEGORY_COLORS[primaryCategory]
              return (
                <article
                  key={post.slug}
                  style={{
                    backgroundColor: isRetreatJournal ? "#fdf6ee" : "#ffffff",
                    border: isRetreatJournal ? "1px solid rgba(0, 0, 0, 0.08)" : "1px solid rgba(0, 0, 0, 0.06)",
                    borderLeft: isRetreatJournal ? "2px solid #d4a574" : undefined,
                    borderRadius: "8px",
                    padding: "36px",
                    marginBottom: "32px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                  }}
                  onMouseEnter={(e) => {
                    const element = e.currentTarget as HTMLElement;
                    element.style.borderColor = "rgba(0, 0, 0, 0.12)";
                    element.style.transform = "translateY(-4px)";
                    element.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const element = e.currentTarget as HTMLElement;
                    element.style.borderColor = isRetreatJournal ? "rgba(0, 0, 0, 0.08)" : "rgba(0, 0, 0, 0.06)";
                    element.style.transform = "translateY(0)";
                    element.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    {isRetreatJournal && (
                      <div style={{
                        fontSize: "10px",
                        fontStyle: "italic",
                        color: "#b5763a",
                        marginBottom: "8px",
                      }}>
                        📍 Kerala
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
                    }} className="excerpt-clamped">
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
        <style>{`
          @media (max-width: 768px) {
            .excerpt-clamped {
              -webkit-line-clamp: 2 !important;
            }
          }
        `}</style>
      </section>
    </main>
  )
}
