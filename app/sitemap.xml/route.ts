import { NextResponse } from "next/server"
import { getAllPosts } from "@/lib/posts"
import { postLastModified } from "@/lib/post-lastmod"
import { isNoindexSlug } from "@/lib/seo"
import { CATEGORIES, categoryToSlug } from "@/lib/categories"

export async function GET() {
  const toIsoDate = (date: string) => {
    const parsed = new Date(date)
    return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().split("T")[0]
  }

  // Static pages with priorities for SEO. No lastmod: these have no reliable
  // modification date, and a fake "today" value teaches crawlers to ignore it.
  const staticPages: { loc: string; lastmod?: string; priority: string }[] = [
    { loc: "https://www.doshaflow.com", priority: "1.0" },
    { loc: "https://www.doshaflow.com/quiz", priority: "0.9" },
    { loc: "https://www.doshaflow.com/about", priority: "0.8" },
    { loc: "https://www.doshaflow.com/blog", priority: "0.8" },
    { loc: "https://www.doshaflow.com/guides", priority: "0.9" },
    { loc: "https://www.doshaflow.com/journal", priority: "0.9" },
    { loc: "https://www.doshaflow.com/samples", priority: "0.7" },
    { loc: "https://www.doshaflow.com/vata", priority: "0.8" },
    { loc: "https://www.doshaflow.com/pitta", priority: "0.8" },
    { loc: "https://www.doshaflow.com/kapha", priority: "0.8" },
    { loc: "https://www.doshaflow.com/dosha-diets", priority: "0.8" },
    { loc: "https://www.doshaflow.com/ayurveda-for-men", priority: "0.9" },
    { loc: "https://www.doshaflow.com/ayurveda-for-women", priority: "0.9" },
    { loc: "https://www.doshaflow.com/start-here", priority: "0.8" },
    { loc: "https://www.doshaflow.com/faq", priority: "0.6" },
    { loc: "https://www.doshaflow.com/founder", priority: "0.6" },
    { loc: "https://www.doshaflow.com/transparency", priority: "0.6" },
    { loc: "https://www.doshaflow.com/contact", priority: "0.5" },
    { loc: "https://www.doshaflow.com/privacy", priority: "0.3" },
    { loc: "https://www.doshaflow.com/terms", priority: "0.3" },
  ]

  // Dynamic blog articles from posts.ts - filter duplicates by slug
  const allPosts = getAllPosts()
  const seenSlugs = new Set<string>()
  const uniquePosts = allPosts.filter(post => {
    if (seenSlugs.has(post.slug)) {
      return false // Skip duplicate
    }
    seenSlugs.add(post.slug)
    return true
  })

  const blogArticles = uniquePosts.filter(post => !isNoindexSlug(post.slug)).map(post => ({
    loc: `https://www.doshaflow.com/blog/${post.slug}`,
    lastmod: postLastModified[post.slug] ?? (post.date ? toIsoDate(post.date) : undefined),
    priority: post.category === "Retreat Journal" ? "0.7" : "0.8",
  }))

  // Blog category landing pages: lastmod is the newest post in the category.
  const categoryPages = CATEGORIES.map((category) => {
    const newest = uniquePosts
      .filter((post) => post.category === category)
      .map((post) => toIsoDate(post.date))
      .filter((date): date is string => Boolean(date))
      .sort()
      .at(-1)
    return {
      loc: `https://www.doshaflow.com/blog/category/${categoryToSlug(category)}`,
      lastmod: newest,
      priority: "0.7",
    }
  })

  // Combine all URLs
  const allUrls = [...staticPages, ...categoryPages, ...blogArticles]

  const urlEntries = allUrls
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""}
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}
