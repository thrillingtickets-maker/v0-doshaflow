"use client"
import { useState, useMemo, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { getAllPosts } from "@/lib/posts"
import { Navigation } from "@/components/navigation"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { CATEGORIES, isCategory } from "@/lib/categories"
import { CATEGORY_COLORS } from "@/lib/article-colors"

// Category colors (CATEGORY_COLORS) and the ordered category list (CATEGORIES)
// now come from lib/article-colors.ts and lib/categories.ts.

const ARTICLES_PER_PAGE = 20
// Category is now a real field on each post (post.category); the previous
// slug-based label heuristics have been removed.
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
  // "article" = unassigned / needs manual review. These stay visible under
  // "All" but never match a category pill (pills only list real CATEGORIES).
  const allPosts = getAllPosts()
    .sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date))
  
  return (
    <>
      <Navigation />
      <Suspense fallback={<BlogPageStatic posts={allPosts} />}>
        <BlogContent />
      </Suspense>
    </>
  )
}



function BlogPageStatic({ posts }: { posts: any[] }) {
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
      
      {/* Search Section */}
      <section style={{ paddingTop: "0", paddingBottom: "48px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "320px",
              padding: "8px 12px",
              fontSize: "14px",
              fontFamily: "inherit",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              borderRadius: "3px",
              backgroundColor: "transparent",
              color: "#9a8878",
            }}
          >
            Search...
          </div>
        </div>
      </section>
      
      {/* Filter Pills */}
      <section style={{ paddingTop: "40px", paddingBottom: "40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["All", ...CATEGORIES].map((filter) => (
              <div
                key={filter}
                style={{
                  padding: "8px 22px",
                  fontSize: "13px",
                  fontWeight: 400,
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  backgroundColor: "transparent",
                  color: "#8a7a6e",
                  borderRadius: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                {filter}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section style={{ backgroundColor: "#ffffff", paddingBottom: "64px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "48px" }}>
            {posts.slice(0, 20).map((post) => (
              <article
                key={post.slug}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                  borderRadius: "8px",
                  padding: "36px",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
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
                }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {post.title}
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
                  }}
                >
                  Read more
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function BlogContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  // Selected category is driven by the URL (?category=) so a filtered view is
  // linkable, shareable, and survives a page reload.
  const categoryParam = searchParams.get("category")
  const selectedFilter = categoryParam && isCategory(categoryParam) ? categoryParam : "All"

  // Get current page from URL, default to 1
  const currentPage = parseInt(searchParams.get("page") || "1", 10)
  
  // "article" = unassigned / needs manual review. These stay visible under
  // "All" but never match a category pill (pills only list real CATEGORIES).
  const allPosts = getAllPosts()
    .sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date))

  // Only show pills for categories that actually have posts.
  const pillCategories = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const p of allPosts) counts[p.category] = (counts[p.category] || 0) + 1
    return ["All", ...CATEGORIES.filter((c) => (counts[c] || 0) > 0)]
  }, [allPosts])

  const filteredPosts = useMemo(() => {
    let posts = allPosts
    
    // Apply category filter based on selection
    if (selectedFilter !== "All") {
      posts = posts.filter((post) => post.category === selectedFilter)
    }
    
    // Search filter - includes editorial essays if searched
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      posts = posts.filter((post) => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.slug.toLowerCase().includes(query)
      )
    }
    
    // When showing All articles and featured retreat section exists, exclude retreat-day from grid
    if (selectedFilter === "All" && !searchQuery.trim()) {
      const hasRetreatFeatured = posts.some(p => p.slug.includes("retreat-day"))
      if (hasRetreatFeatured) {
        posts = posts.filter(p => !p.slug.includes("retreat-day"))
      }
    }
    
    // Deduplicate by slug to ensure each post appears only once
    const uniquePosts = Array.from(
      new Map(posts.map((post) => [post.slug, post])).values()
    )
    
    return uniquePosts
  }, [selectedFilter, allPosts, searchQuery])
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / ARTICLES_PER_PAGE)
  const validPage = Math.min(Math.max(currentPage, 1), Math.max(totalPages, 1))
  const startIndex = (validPage - 1) * ARTICLES_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + ARTICLES_PER_PAGE)
  
  // Handle filter change - write category to the URL and reset to page 1
  const handleFilterChange = (filter: string) => {
    const params = new URLSearchParams()
    if (filter !== "All") params.set("category", filter)
    router.push(params.toString() ? `/blog?${params.toString()}` : "/blog")
  }

  // Handle page change - preserve the active category filter
  const handlePageChange = (page: number) => {
    const validPageNum = Math.max(1, Math.min(page, totalPages))
    const params = new URLSearchParams()
    if (selectedFilter !== "All") params.set("category", selectedFilter)
    params.set("page", String(validPageNum))
    router.push(`/blog?${params.toString()}`)
  }
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
      {/* Search Section - Subtle and Integrated */}
      <section style={{ paddingTop: "0", paddingBottom: "48px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "320px",
              padding: "8px 12px",
              fontSize: "14px",
              fontFamily: "inherit",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              borderRadius: "3px",
              backgroundColor: "transparent",
              transition: "all 0.3s ease",
              outline: "none",
              color: "#1a1a1a",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.12)"
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.5)"
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.06)"
              e.currentTarget.style.backgroundColor = "transparent"
            }}
          />
        </div>
      </section>
      {/* Filter Pills */}
      <section style={{ paddingTop: "40px", paddingBottom: "40px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
          <div
            role="group"
            aria-label="Filter articles by category"
            style={{ display: "flex", flexWrap: "nowrap", gap: "10px", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: "20px", scrollBehavior: "smooth", justifyContent: "flex-start" }}
          >
            {pillCategories.map((filter) => {
              const active = selectedFilter === filter
              return (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  aria-pressed={active}
                  style={{
                    padding: "8px 22px",
                    fontSize: "13px",
                    fontWeight: active ? 600 : 400,
                    border: active ? "none" : `1px solid ${CATEGORY_COLORS[filter]?.border || "rgba(0, 0, 0, 0.08)"}`,
                    backgroundColor: active ? (CATEGORY_COLORS[filter]?.pill || "#f5f0e8") : "transparent",
                    color: active ? (CATEGORY_COLORS[filter]?.accent || "#1a1a1a") : "#8a7a6e",
                    borderRadius: "20px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                    boxShadow: active ? `inset 0 0 0 1px ${CATEGORY_COLORS[filter]?.accent || "#1a1a1a"}` : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.target as HTMLButtonElement).style.backgroundColor = "#f5f0e8";
                      (e.target as HTMLButtonElement).style.borderColor = CATEGORY_COLORS[filter]?.accent || "#8a7a6e";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
                      (e.target as HTMLButtonElement).style.borderColor = CATEGORY_COLORS[filter]?.border || "rgba(0, 0, 0, 0.08)";
                    }
                  }}
                >
                  {filter}
                </button>
              )
            })}
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

          {/* Editorial Essays Featured Section */}
          {selectedFilter === "All" && !searchQuery.trim() && (
            <div style={{ marginBottom: "72px" }}>
              <div style={{ marginBottom: "40px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a", marginBottom: "12px" }}>
                  Editorial Essays
                </h2>
                <p style={{ fontSize: "14px", color: "#8a7a6e" }}>
                  Founder essays exploring lived experience with Ayurveda, burnout, healing, and modern wellness.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
                {paginatedPosts
                  .filter(p => p.category === "Editorial")
                  .slice(0, 3)
                  .map((post) => (
                    <article
                      key={post.slug}
                      style={{
                        backgroundColor: "#faf7f0",
                        border: "1px solid #e8d9c5",
                        borderLeft: "3px solid #a89a7a",
                        borderRadius: "8px",
                        padding: "32px",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.08)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.04)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a89a7a", marginBottom: "12px" }}>
                        Essay
                      </div>
                      <h3 style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.4, marginBottom: "12px", color: "#1a1a1a", flex: 1 }}>
                        <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                          {post.title}
                        </Link>
                      </h3>
                      <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#5a5048", marginBottom: "20px", flex: 1 }}>
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          color: "#b5763a",
                          fontWeight: 600,
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        Read essay
                        <ArrowRight size={14} />
                      </Link>
                    </article>
                  ))}
              </div>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "48px" }}>
            {paginatedPosts.map((post) => {
              const isRetreatJournal = post.slug.includes("retreat-day")
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
          
          {/* Pagination Controls */}
          {filteredPosts.length > ARTICLES_PER_PAGE && (
            <div style={{ marginTop: "64px", paddingTop: "40px", borderTop: "1px solid rgba(0, 0, 0, 0.06)" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(validPage - 1)}
                  disabled={validPage === 1}
                  style={{
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: 500,
                    border: "1px solid #c9a876",
                    backgroundColor: validPage === 1 ? "#f5f0e8" : "#ffffff",
                    color: validPage === 1 ? "#b5a894" : "#8d6f4c",
                    borderRadius: "6px",
                    cursor: validPage === 1 ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "inherit",
                    opacity: validPage === 1 ? 0.5 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (validPage !== 1) {
                      (e.target as HTMLButtonElement).style.backgroundColor = "#faf8f2";
                      (e.target as HTMLButtonElement).style.borderColor = "#b5963a";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (validPage !== 1) {
                      (e.target as HTMLButtonElement).style.backgroundColor = "#ffffff";
                      (e.target as HTMLButtonElement).style.borderColor = "#c9a876";
                    }
                  }}
                >
                  ← Previous
                </button>

                {/* Page Numbers */}
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      style={{
                        width: "36px",
                        height: "36px",
                        padding: "0",
                        fontSize: "14px",
                        fontWeight: page === validPage ? 600 : 400,
                        border: page === validPage ? "none" : "1px solid #e0d7ce",
                        backgroundColor: page === validPage ? "#b5963a" : "#ffffff",
                        color: page === validPage ? "#ffffff" : "#8d6f4c",
                        borderRadius: "6px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontFamily: "inherit",
                      }}
                      onMouseEnter={(e) => {
                        if (page !== validPage) {
                          (e.target as HTMLButtonElement).style.backgroundColor = "#faf8f2";
                          (e.target as HTMLButtonElement).style.borderColor = "#b5963a";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (page !== validPage) {
                          (e.target as HTMLButtonElement).style.backgroundColor = "#ffffff";
                          (e.target as HTMLButtonElement).style.borderColor = "#e0d7ce";
                        }
                      }}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(validPage + 1)}
                  disabled={validPage === totalPages}
                  style={{
                    padding: "10px 20px",
                    fontSize: "14px",
                    fontWeight: 500,
                    border: "1px solid #c9a876",
                    backgroundColor: validPage === totalPages ? "#f5f0e8" : "#ffffff",
                    color: validPage === totalPages ? "#b5a894" : "#8d6f4c",
                    borderRadius: "6px",
                    cursor: validPage === totalPages ? "not-allowed" : "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "inherit",
                    opacity: validPage === totalPages ? 0.5 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (validPage !== totalPages) {
                      (e.target as HTMLButtonElement).style.backgroundColor = "#faf8f2";
                      (e.target as HTMLButtonElement).style.borderColor = "#b5963a";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (validPage !== totalPages) {
                      (e.target as HTMLButtonElement).style.backgroundColor = "#ffffff";
                      (e.target as HTMLButtonElement).style.borderColor = "#c9a876";
                    }
                  }}
                >
                  Next →
                </button>
              </div>
              
              {/* Page Info */}
              <div style={{ textAlign: "center", marginTop: "16px", fontSize: "13px", color: "#9a7a6e" }}>
                Page {validPage} of {totalPages}
              </div>
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
