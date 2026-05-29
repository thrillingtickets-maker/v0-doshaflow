import { NextResponse } from "next/server"
import { getAllPosts } from "@/lib/posts"

export async function GET() {
  const baseUrl = "https://www.doshaflow.com"
  const lastmod = new Date().toISOString().split("T")[0]

  const staticPaths = ["", "/quiz", "/blog"]

  const blogPaths = getAllPosts().map((post) => `/blog/${post.slug}`)

  const allPaths = [...staticPaths, ...blogPaths]

  const urls = allPaths
    .map((path) => {
      return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  })
}
