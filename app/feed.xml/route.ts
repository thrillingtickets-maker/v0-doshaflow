import { NextResponse } from "next/server"
import { getAllPosts } from "@/lib/posts"

const SITE = "https://www.doshaflow.com"
const TITLE = "DoshaFlow — Ayurvedic Guides & Journal"
const DESCRIPTION =
  "Evidence-informed Ayurvedic guides on sleep, stress, digestion, energy, hormones, and herbs — plus essays from the DoshaFlow journal."

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

// Strip HTML tags and decode a few common entities for the plain-text description.
function toPlainText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export async function GET() {
  const seen = new Set<string>()
  const posts = getAllPosts()
    .filter((p) => {
      if (seen.has(p.slug)) return false
      seen.add(p.slug)
      return true
    })
    .map((p) => ({ ...p, ts: p.date ? new Date(p.date).getTime() : 0 }))
    .sort((a, b) => b.ts - a.ts)
    .slice(0, 50)

  const lastBuildDate = new Date(posts[0]?.ts || Date.now()).toUTCString()

  const items = posts
    .map((post) => {
      const url = `${SITE}/blog/${post.slug}`
      const summary = post.seoDescription || post.excerpt || toPlainText(post.content).slice(0, 280)
      const pubDate = new Date(post.ts || Date.now()).toUTCString()
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(summary)}</description>
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(TITLE)}</title>
    <link>${SITE}</link>
    <description>${escapeXml(DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
