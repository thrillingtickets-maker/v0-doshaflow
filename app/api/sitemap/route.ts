import { NextResponse } from "next/server"

// The canonical sitemap lives at /sitemap.xml. This legacy /api/sitemap route
// permanently redirects there so search engines only index a single sitemap.
export function GET() {
  return NextResponse.redirect("https://www.doshaflow.com/sitemap.xml", 308)
}
