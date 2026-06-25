import { NextResponse } from "next/server"
import { getAllPosts } from "@/lib/posts"

export async function GET() {
  const today = new Date().toISOString().split("T")[0]

  // Static pages with priorities for SEO
  const staticPages = [
    { loc: "https://www.doshaflow.com", lastmod: today, priority: "1.0" },
    { loc: "https://www.doshaflow.com/quiz", lastmod: today, priority: "0.9" },
    { loc: "https://www.doshaflow.com/about", lastmod: today, priority: "0.8" },
    { loc: "https://www.doshaflow.com/blog", lastmod: today, priority: "0.8" },
    { loc: "https://www.doshaflow.com/journal", lastmod: today, priority: "0.9" },
    { loc: "https://www.doshaflow.com/samples", lastmod: today, priority: "0.7" },
    { loc: "https://www.doshaflow.com/vata", lastmod: today, priority: "0.8" },
    { loc: "https://www.doshaflow.com/pitta", lastmod: today, priority: "0.8" },
    { loc: "https://www.doshaflow.com/kapha", lastmod: today, priority: "0.8" },
    { loc: "https://www.doshaflow.com/start-here", lastmod: today, priority: "0.8" },
    { loc: "https://www.doshaflow.com/faq", lastmod: today, priority: "0.6" },
    { loc: "https://www.doshaflow.com/founder", lastmod: today, priority: "0.6" },
    { loc: "https://www.doshaflow.com/contact", lastmod: today, priority: "0.5" },
    { loc: "https://www.doshaflow.com/privacy", lastmod: today, priority: "0.3" },
    { loc: "https://www.doshaflow.com/terms", lastmod: today, priority: "0.3" },
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

  const blogArticles = uniquePosts.map(post => ({
    loc: `https://www.doshaflow.com/blog/${post.slug}`,
    lastmod: post.date ? new Date(post.date).toISOString().split("T")[0] : today,
    priority: post.category === "journal" ? "0.7" : "0.8",
  }))

  // Combine all URLs
  const allUrls = [...staticPages, ...blogArticles]

  const urlEntries = allUrls
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
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
