import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GuidesHero } from "@/components/guides/guides-hero"
import { FeaturedCollections } from "@/components/guides/featured-collections"
import { GoalFinder } from "@/components/guides/goal-finder"
import { GuidesArticleGrid, type GuideArticleCard } from "@/components/guides/guides-article-grid"
import { GuidesQuizCta } from "@/components/guides/guides-quiz-cta"
import { GuidesEmailSignup } from "@/components/guides/guides-email-signup"
import { GuidesFaq } from "@/components/guides/guides-faq"
import { guidesFaqs, popularSlugs } from "@/components/guides/guides-data"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { parsePostDate, formatPostDate } from "@/lib/dates"

const SITE = "https://www.doshaflow.com"
const PAGE_URL = `${SITE}/guides`

export const metadata: Metadata = {
  title: "Ayurveda Guides — Sleep, Stress & Digestion | DoshaFlow",
  description:
    "The DoshaFlow guides library: evidence-informed Ayurvedic guides for anxiety, sleep, digestion, stress, hormones, energy, weight loss, herbs, and routines.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Ayurveda Guides — Sleep, Stress, Digestion & Herbs | DoshaFlow",
    description:
      "Evidence-informed Ayurvedic guides for anxiety, sleep, digestion, stress, hormones, energy, weight loss, herbs, and daily routines.",
    url: PAGE_URL,
    siteName: "DoshaFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayurveda Guides — Sleep, Stress, Digestion & Herbs | DoshaFlow",
    description:
      "Evidence-informed Ayurvedic guides for anxiety, sleep, digestion, stress, hormones, energy, weight loss, herbs, and daily routines.",
  },
}

// post.category is now a human-readable label; the deprecated "article"
// placeholder still renders as "Guide".
function categoryLabel(category: string): string {
  return category === "article" ? "Guide" : category
}

function toCard(slug: string): GuideArticleCard | null {
  const post = getPostBySlug(slug)
  if (!post) return null
  return {
    href: `/blog/${post.slug}`,
    title: post.title,
    excerpt: post.excerpt,
    date: formatPostDate(post.date),
    categoryLabel: categoryLabel(post.category),
  }
}

export default function GuidesPage() {
  const popularArticles = popularSlugs
    .map(toCard)
    .filter((card): card is GuideArticleCard => card !== null)

  const newArticles = getAllPosts()
    .filter((post) => post.category !== "article")
    .sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date))
    .slice(0, 6)
    .map((post) => ({
      href: `/blog/${post.slug}`,
      title: post.title,
      excerpt: post.excerpt,
      date: formatPostDate(post.date),
      categoryLabel: categoryLabel(post.category),
    }))

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: "Ayurveda Guides",
        description:
          "The DoshaFlow guides library: evidence-informed Ayurvedic guides for anxiety, sleep, digestion, stress, hormones, energy, weight loss, herbs, and daily routines.",
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#organization` },
        primaryImageOfPage: `${SITE}/guides/guides-hero.png`,
        breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Guides", item: PAGE_URL },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "DoshaFlow",
        publisher: { "@id": `${SITE}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE}/blog?search={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}/#faq`,
        mainEntity: guidesFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main>
        <GuidesHero />
        <FeaturedCollections />
        <GoalFinder />
        <GuidesArticleGrid eyebrow="Popular Guides" heading="Most-read right now" articles={popularArticles} />
        <GuidesArticleGrid eyebrow="New Articles" heading="Fresh from the library" articles={newArticles} tinted />
        <GuidesQuizCta />
        <GuidesEmailSignup />
        <GuidesFaq />
      </main>
      <Footer />
    </>
  )
}
