import { NextResponse } from 'next/server'
import { posts } from '@/lib/posts'

export async function GET() {
  // Static pages
  const staticPages = [
    { loc: 'https://www.doshaflow.com', lastmod: '2026-06-04', priority: '1.0' },
    { loc: 'https://www.doshaflow.com/quiz', lastmod: '2026-06-04', priority: '0.9' },
    { loc: 'https://www.doshaflow.com/about', lastmod: '2026-06-04', priority: '0.8' },
    { loc: 'https://www.doshaflow.com/blog', lastmod: '2026-06-04', priority: '0.9' },
    { loc: 'https://www.doshaflow.com/samples', lastmod: '2026-06-04', priority: '0.8' },
    { loc: 'https://www.doshaflow.com/ayurveda-for-men', lastmod: '2026-06-04', priority: '0.9' },
    { loc: 'https://www.doshaflow.com/ayurveda-for-women', lastmod: '2026-06-04', priority: '0.9' },
    { loc: 'https://www.doshaflow.com/vata', lastmod: '2026-06-04', priority: '0.8' },
    { loc: 'https://www.doshaflow.com/pitta', lastmod: '2026-06-04', priority: '0.8' },
    { loc: 'https://www.doshaflow.com/kapha', lastmod: '2026-06-04', priority: '0.8' },
    { loc: 'https://www.doshaflow.com/dosha-diets', lastmod: '2026-06-04', priority: '0.8' },
    { loc: 'https://www.doshaflow.com/start-here', lastmod: '2026-06-04', priority: '0.9' },
  ]

  // Dynamic blog articles from posts.ts
  const blogArticles = posts.map(post => ({
    loc: `https://www.doshaflow.com/blog/${post.slug}`,
    lastmod: '2026-06-04',
    priority: '0.7'
  }))

  // Combine all URLs
  const allUrls = [...staticPages, ...blogArticles]

  // Generate XML
  const urlElements = allUrls
    .map(url => 
      `  <url><loc>${url.loc}</loc><lastmod>${url.lastmod}</lastmod><priority>${url.priority}</priority></url>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
