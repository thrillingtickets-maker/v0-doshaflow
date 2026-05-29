import { NextResponse } from "next/server"

export async function GET() {
  const lastmod = "2026-05-29"

  const urls = [
    "https://www.doshaflow.com",
    "https://www.doshaflow.com/quiz",
    "https://www.doshaflow.com/blog/vata-dosha-guide",
    "https://www.doshaflow.com/blog/pitta-dosha-guide",
    "https://www.doshaflow.com/blog/kapha-dosha-guide",
    "https://www.doshaflow.com/blog/ayurveda-cold-smoothies",
    "https://www.doshaflow.com/blog/eating-for-your-dosha",
    "https://www.doshaflow.com/blog/ayurveda-coffee",
    "https://www.doshaflow.com/blog/ayurveda-hormonal-balance",
    "https://www.doshaflow.com/blog/ayurveda-pms",
    "https://www.doshaflow.com/blog/ayurveda-no-time",
    "https://www.doshaflow.com/blog/ayurveda-30-days",
    "https://www.doshaflow.com/blog/ayurveda-burnout",
    "https://www.doshaflow.com/blog/retreat-day-4",
  ]

  const urlEntries = urls
    .map(
      (loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
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
