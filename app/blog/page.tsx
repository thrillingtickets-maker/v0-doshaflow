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
      <section>
        <div>
          <div>
            {FILTER_CATEGORIES.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-[#C97F3D] text-white shadow-md shadow-[#C97F3D]/20"
                    : "bg-[#f5f1e8] text-[#5c4a3a] hover:bg-[#e8dcc8] border border-[#d9cbbe]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-[#d9cbbe] rounded-lg p-6 mb-4 hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <time className="text-sm text-[#999999] font-normal">
                    {post.date}
                  </time>
                  <h2 className="text-xl font-bold text-[#2c1a0e] mt-2 mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#C97F3D] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-[#5c4a3a] font-normal mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#C97F3D] font-medium hover:text-[#a86a2f] transition-colors"
                  >
                    Read more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#5c4a3a] text-lg">
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
