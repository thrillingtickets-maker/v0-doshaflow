// Single source of truth for the blog's real, browsable topic categories.
// Used by the /blog listing, the /blog/category/[category] landing pages,
// article cross-links, and the sitemap.

export type Category =
  | "Doshas"
  | "Tea"
  | "Digestion"
  | "Stress & Anxiety"
  | "Sleep"
  | "Editorial"
  | "Retreat Journal"

// Ordered as they should appear in the filter row and category listings.
export const CATEGORIES: Category[] = [
  "Doshas",
  "Tea",
  "Digestion",
  "Stress & Anxiety",
  "Sleep",
  "Editorial",
  "Retreat Journal",
]

// Category <-> URL slug. This is the one place slug resolution lives; the
// route and every link generator must go through these helpers.
const CATEGORY_TO_SLUG: Record<Category, string> = {
  Doshas: "doshas",
  Tea: "tea",
  Digestion: "digestion",
  "Stress & Anxiety": "stress-anxiety",
  Sleep: "sleep",
  Editorial: "editorial",
  "Retreat Journal": "retreat-journal",
}

const SLUG_TO_CATEGORY: Record<string, Category> = Object.fromEntries(
  (Object.entries(CATEGORY_TO_SLUG) as [Category, string][]).map(([category, slug]) => [slug, category]),
) as Record<string, Category>

export function categoryToSlug(category: Category): string {
  return CATEGORY_TO_SLUG[category]
}

export function slugToCategory(slug: string): Category | null {
  return SLUG_TO_CATEGORY[slug] ?? null
}

export function isCategory(value: string): value is Category {
  return (CATEGORIES as string[]).includes(value)
}

// One- to two-sentence intro shown on each category landing page.
export const CATEGORY_INTROS: Record<Category, string> = {
  Doshas:
    "Your constitution decides what actually works for you. These guides break down vata, pitta, and kapha — how to tell which one you are, and what to change when one runs high.",
  Tea: "The right cup at the right time does real work. Practical guides to Ayurvedic teas for sleep, digestion, stress, and each dosha — what to brew, when, and why.",
  Digestion:
    "Ayurveda treats digestion as the root of most complaints. Straight guidance on bloating, gut health, elimination, and the foods and herbs that steady it.",
  "Stress & Anxiety":
    "Cortisol, burnout, and a nervous system stuck in overdrive. Evidence-informed ways to down-regulate — without pretending a single cup of tea fixes everything.",
  Sleep:
    "Why you wake at 3am, why mornings are hard, and what to actually do about it. Practical routines and remedies for deeper, more consistent rest.",
  Editorial:
    "Opinion and commentary on modern wellness — what Ayurveda gets right, what the industry oversells, and where the honest line sits.",
  "Retreat Journal":
    "First-person notes from Kerala — daily entries on the treatments, the food, and what a traditional Ayurvedic retreat is actually like.",
}

// Meta descriptions for category landing pages.
export const CATEGORY_META_DESCRIPTIONS: Record<Category, string> = {
  Doshas:
    "Ayurvedic dosha guides for vata, pitta, and kapha: how to identify your constitution, spot imbalances, and adjust diet and routine accordingly.",
  Tea: "Ayurvedic tea guides for sleep, digestion, stress, and every dosha — which blends to brew, when to drink them, and what each one does.",
  Digestion:
    "Ayurvedic digestion guides on bloating, gut health, and elimination, plus the foods, spices, and herbs that keep agni steady.",
  "Stress & Anxiety":
    "Ayurvedic and evidence-informed guides to cortisol, burnout, and anxiety — practical ways to regulate an overstimulated nervous system.",
  Sleep:
    "Ayurvedic sleep guides for insomnia, 3am waking, and hard mornings — routines and remedies for deeper, more consistent rest.",
  Editorial:
    "Essays and commentary on Ayurveda and modern wellness — what holds up, what gets oversold, and the honest middle ground.",
  "Retreat Journal":
    "A first-person journal from a traditional Ayurvedic retreat in Kerala — daily entries on treatments, food, and what it's really like.",
}
