import { NextResponse } from "next/server"
import { posts } from "@/lib/posts"

export async function GET() {
  // Static pages
  const staticPages = [
    { loc: "https://www.doshaflow.com", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/quiz", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/about", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/blog", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/samples", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/ayurveda-for-men", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/ayurveda-for-women", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/vata", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/pitta", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/kapha", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/dosha-diets", lastmod: "2026-06-04" },
    { loc: "https://www.doshaflow.com/start-here", lastmod: "2026-06-04" },
  ]

  // Dynamic blog articles from posts.ts - filter duplicates by slug
  const seenSlugs = new Set<string>()
  const uniquePosts = posts.filter(post => {
    if (seenSlugs.has(post.slug)) {
      return false // Skip duplicate
    }
    seenSlugs.add(post.slug)
    return true
  })

  const blogArticles = uniquePosts.map(post => ({
    loc: `https://www.doshaflow.com/blog/${post.slug}`,
    lastmod: "2026-06-04",
  }))

  // Combine all URLs
  const allUrls = [...staticPages, ...blogArticles]

  const urlEntries = allUrls
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`,
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  })
}
