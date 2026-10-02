# DoshaFlow SEO state (as of October 2, 2026)

Read this before changing robots.txt, the sitemap, redirects, post slugs, or noindex rules.

## Do not change without a specific, measured reason
- public/robots.txt must stay exactly:
  User-agent: *
  Allow: /
  Disallow: /*?dpl=
  Sitemap: https://www.doshaflow.com/sitemap.xml
  Never add "Disallow: /_next/". It blocks Google from CSS, JS and images and breaks rendering. This file flipped four times in late September; every change forces Google to re-evaluate the site.
- Non-production hosts (e.g. *.vercel.app previews) get an X-Robots-Tag: noindex header from next.config.js. Keep it.
- lib/seo.ts NOINDEX_SLUGS lists 18 medical-condition posts that are deliberately noindexed and excluded from the sitemap. Don't remove entries without a decision from the owner.

## Redirect rules (next.config.js)
- About 84 permanent redirects exist. Never create a chain (A -> B -> C) or a loop. When adding a redirect, check whether the destination is itself a redirect source.
- Never leave a live post whose slug is also a redirect source; the redirect wins and the post becomes unreachable.
- When removing or merging a post, delete it from lib/posts.ts, add a permanent redirect to the best surviving page, and update every internal link to point straight at the final URL.
- The alcohol article lives at /blog/ayurveda-alcohol; /blog/alcohol-ayurveda redirects to it. Leave this as is.

## Content rules
- Prefer expanding weak articles in place (same slug) over creating new posts or new URLs.
- Four articles render from hardcoded routes and ignore lib/posts.ts content: why-you-wake-up-at-3am, dopamine-detox-vs-ayurveda, shatavari-benefits, stress-hair-loss-ayurveda. Edit their page.tsx files instead.
- Sources live in lib/article-sources.ts. Only add sources verified against PubMed/DOI. Never fabricate a citation.

## History
- Late Sept 2026: Google Search Console showed about 152 "Crawled - currently not indexed" pages and indexed pages falling from about 225 (July) to about 100. Response: removed 42 one-sentence stub posts, merged duplicate hub posts and topic clusters, removed duplicate journal pages, fixed sitemap lastmod dates, expanded thin posts in place.

## Pending (owner decides timing)
- Merge remaining overlaps in one batch: why-am-i-always-tired / why-am-i-always-exhausted / why-you-feel-tired-all-the-time, and ayurvedic-gut-healing into ayurvedic-gut-health.
- About 30 meta descriptions are over 160 characters; fix them in the same batch.
- Keep expanding indexable posts under 700 words, thinnest first.
- Check Search Console around October 14-21, 2026: "Crawled - currently not indexed" should fall and indexed pages should rise. No structural changes before then.
