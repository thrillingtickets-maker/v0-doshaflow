// Single source of truth for the blog's real, browsable topic categories.
// Used by the /blog listing, the /blog/category/[category] landing pages,
// article cross-links, and the sitemap.

export type Category =
  | "Doshas"
  | "Digestion"
  | "Sleep"
  | "Stress & Anxiety"
  | "Weight Loss"
  | "Skin & Hair"
  | "Body & Systems"
  | "Herbs"
  | "Tea"
  | "Daily Practices"
  | "Editorial"
  | "Retreat Journal"

// Ordered as they should appear in the filter row and category listings.
// Topic categories first, meta categories (Editorial, Retreat Journal) last.
export const CATEGORIES: Category[] = [
  "Doshas",
  "Digestion",
  "Sleep",
  "Stress & Anxiety",
  "Weight Loss",
  "Skin & Hair",
  "Body & Systems",
  "Herbs",
  "Tea",
  "Daily Practices",
  "Editorial",
  "Retreat Journal",
]

// Category <-> URL slug. This is the one place slug resolution lives; the
// route and every link generator must go through these helpers.
const CATEGORY_TO_SLUG: Record<Category, string> = {
  Doshas: "doshas",
  Digestion: "digestion",
  Sleep: "sleep",
  "Stress & Anxiety": "stress-anxiety",
  "Weight Loss": "weight-loss",
  "Skin & Hair": "skin-hair",
  "Body & Systems": "body-systems",
  Herbs: "herbs",
  Tea: "tea",
  "Daily Practices": "daily-practices",
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
  Digestion:
    "Ayurveda treats digestion as the root of most complaints. Straight guidance on bloating, gut health, elimination, and the foods and herbs that steady it.",
  Sleep:
    "Why you wake at 3am, why mornings are hard, and what to actually do about it. Practical routines and remedies for deeper, more consistent rest.",
  "Stress & Anxiety":
    "Cortisol, burnout, and a nervous system stuck in overdrive. Evidence-informed ways to down-regulate — without pretending a single cup of tea fixes everything.",
  "Weight Loss":
    "Weight in Ayurveda isn't a calorie problem — it's a slow metabolism, heavy tissue, and a kapha system that holds on. Guides that work with your constitution instead of against it, so the changes actually stick.",
  "Skin & Hair":
    "Your skin and hair report on what's happening underneath — digestion, hormones, heat, and stress. Guides that treat the cause instead of chasing symptoms with one more topical.",
  "Body & Systems":
    "Every organ has a job, and Ayurveda maps each one to dosha, agni, and the tissues it feeds. Practical guides to the heart, liver, joints, thyroid, immunity, and the systems that keep you running.",
  Herbs:
    "One herb, used properly, does more than a shelf of supplements. Straight monographs on the classic Ayurvedic herbs — what each one does, who it suits, and how to actually take it.",
  Tea: "The right cup at the right time does real work. Practical guides to Ayurvedic teas for sleep, digestion, stress, and each dosha — what to brew, when, and why.",
  "Daily Practices":
    "This is where Ayurveda actually lives — the small, repeatable habits that regulate your system over time. Tongue scraping, self-massage, breathwork, seasonal resets, and the routines worth keeping.",
  Editorial:
    "Opinion and commentary on modern wellness — what Ayurveda gets right, what the industry oversells, and where the honest line sits.",
  "Retreat Journal":
    "First-person notes from Kerala — daily entries on the treatments, the food, and what a traditional Ayurvedic retreat is actually like.",
}

// Meta descriptions for category landing pages.
export const CATEGORY_META_DESCRIPTIONS: Record<Category, string> = {
  Doshas:
    "Ayurvedic dosha guides for vata, pitta, and kapha: how to identify your constitution, spot imbalances, and adjust diet and routine accordingly.",
  Digestion:
    "Ayurvedic digestion guides on bloating, gut health, and elimination, plus the foods, spices, and herbs that keep agni steady.",
  Sleep:
    "Ayurvedic sleep guides for insomnia, 3am waking, and hard mornings — routines and remedies for deeper, more consistent rest.",
  "Stress & Anxiety":
    "Ayurvedic and evidence-informed guides to cortisol, burnout, and anxiety — practical ways to regulate an overstimulated nervous system.",
  "Weight Loss":
    "Ayurvedic weight loss guides that work with your dosha — why generic diets fail, how to reset a sluggish metabolism, and what actually shifts stubborn kapha weight.",
  "Skin & Hair":
    "Ayurvedic guides to skin and hair — acne, eczema, psoriasis, and hair loss — why the root cause is usually internal, and how to treat it that way.",
  "Body & Systems":
    "Ayurvedic guides to the body's organs and systems — heart, liver, kidneys, joints, thyroid, immunity, and hormonal health — rooted in dosha and agni.",
  Herbs:
    "Ayurvedic herb guides for shatavari, turmeric, neem, tulsi, amla, and more — what each herb does, the evidence behind it, and how to use it safely.",
  Tea: "Ayurvedic tea guides for sleep, digestion, stress, and every dosha — which blends to brew, when to drink them, and what each one does.",
  "Daily Practices":
    "Ayurvedic daily practice guides — abhyanga self-massage, tongue scraping, oil pulling, pranayama, seasonal cleanses, and simple routines that compound over time.",
  Editorial:
    "Essays and commentary on Ayurveda and modern wellness — what holds up, what gets oversold, and the honest middle ground.",
  "Retreat Journal":
    "A first-person journal from a traditional Ayurvedic retreat in Kerala — daily entries on treatments, food, and what it's really like.",
}
