import { NextResponse } from "next/server"

export async function GET() {
  const lastmod = "2026-05-29"
  const newPostsLastmod = "2026-06-06"
  const dietPostsLastmod = "2026-06-13"

  const urls = [
    { loc: "https://www.doshaflow.com", lastmod },
    { loc: "https://www.doshaflow.com/quiz", lastmod },
    { loc: "https://www.doshaflow.com/blog/vata-dosha-guide", lastmod },
    { loc: "https://www.doshaflow.com/blog/pitta-dosha-guide", lastmod },
    { loc: "https://www.doshaflow.com/blog/kapha-dosha-guide", lastmod },
    { loc: "https://www.doshaflow.com/blog/ayurveda-cold-smoothies", lastmod },
    { loc: "https://www.doshaflow.com/blog/eating-for-your-dosha", lastmod },
    { loc: "https://www.doshaflow.com/blog/ayurveda-coffee", lastmod },
    { loc: "https://www.doshaflow.com/blog/ayurveda-hormonal-balance", lastmod },
    { loc: "https://www.doshaflow.com/blog/ayurveda-pms", lastmod },
    { loc: "https://www.doshaflow.com/blog/ayurveda-no-time", lastmod },
    { loc: "https://www.doshaflow.com/blog/ayurveda-30-days", lastmod },
    { loc: "https://www.doshaflow.com/blog/ayurveda-burnout", lastmod },
    { loc: "https://www.doshaflow.com/blog/retreat-day-4", lastmod },
    { loc: "https://www.doshaflow.com/blog/ayurvedic-tea-guide", lastmod: newPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/why-am-i-always-bloated", lastmod: newPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/ashwagandha-benefits", lastmod: newPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/ayurvedic-morning-routine", lastmod: newPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/best-herbs-for-anxiety", lastmod: newPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/signs-of-high-cortisol", lastmod: newPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/vata-diet-plan", lastmod: dietPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/pitta-diet-plan", lastmod: dietPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/kapha-diet-plan", lastmod: dietPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/best-ayurvedic-tea-anxiety", lastmod: dietPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/best-ayurvedic-tea-sleep", lastmod: dietPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/best-ayurvedic-tea-digestion", lastmod: dietPostsLastmod },
    { loc: "https://www.doshaflow.com/blog/ayurvedic-weight-loss", lastmod: dietPostsLastmod },
  ]

  const urlEntries = urls
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
