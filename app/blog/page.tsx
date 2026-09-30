import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getAllPosts } from "@/lib/posts"
import { isCategory } from "@/lib/categories"
import { BlogIndex } from "@/components/blog-index"
import { ARTICLES_PER_PAGE } from "@/lib/blog-pagination"

const BLOG_TITLE = "Ayurvedic Guides & Articles | DoshaFlow"
const BLOG_DESCRIPTION =
  "Ayurvedic guides on digestion, sleep, anxiety, energy, hormonal health, and daily wellness, with practical routines tailored to your dosha type."
const BLOG_OG_DESCRIPTION =
  "Ayurvedic guides on digestion, sleep, anxiety, hormonal health, and daily wellness by dosha type."

type SearchParams = Promise<Record<string, string | string[] | undefined>>

const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value)

// Mirrors the listing logic in BlogIndex: the retreat-day feature is pulled out
// of the "All" grid, and a category filter narrows the list.
function countListedPosts(category: string | undefined) {
  const posts = getAllPosts()
  if (category && isCategory(category)) {
    return posts.filter((post) => post.category === category).length
  }
  const hasRetreatFeatured = posts.some((post) => post.slug.includes("retreat-day"))
  return hasRetreatFeatured ? posts.filter((post) => !post.slug.includes("retreat-day")).length : posts.length
}

function resolvePage(searchParams: Record<string, string | string[] | undefined>) {
  const rawPage = first(searchParams.page)
  const category = first(searchParams.category)
  const totalPages = Math.max(1, Math.ceil(countListedPosts(category) / ARTICLES_PER_PAGE))
  if (rawPage === undefined) return { page: 1, totalPages }
  if (!/^\d+$/.test(rawPage)) return null
  const page = Number(rawPage)
  if (page < 1 || page > totalPages) return null
  return { page, totalPages }
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const resolved = resolvePage(await searchParams)
  const page = resolved?.page ?? 1
  const suffix = page > 1 ? ` (Page ${page})` : ""
  const title = `${BLOG_TITLE}${suffix}`
  const url = page > 1 ? `https://www.doshaflow.com/blog?page=${page}` : "https://www.doshaflow.com/blog"

  return {
    title,
    description: BLOG_DESCRIPTION,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: BLOG_OG_DESCRIPTION,
      url,
      type: "website",
      siteName: "DoshaFlow",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: BLOG_OG_DESCRIPTION,
      images: ["/opengraph-image"],
    },
  }
}

export default async function BlogPage({ searchParams }: { searchParams: SearchParams }) {
  const resolved = resolvePage(await searchParams)
  if (!resolved) notFound()
  return <BlogIndex page={resolved.page} />
}
