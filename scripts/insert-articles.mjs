import { readFileSync, writeFileSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const postsPath = join(__dirname, "..", "lib", "posts.ts")
const bodiesDir = join(__dirname, "article-bodies")

// New articles, newest first. They will be inserted at the top of the posts array.
const articles = [
  {
    slug: "best-morning-routine-for-energy",
    category: "article",
    title: "The Best Morning Routine for More Energy (Backed by Ayurveda)",
    date: "June 26, 2026",
    excerpt:
      "Your first hour decides your whole day. A practical, Ayurveda-backed morning routine for steady energy — light, hydration, movement, breath, and breakfast, built to actually stick.",
    dek: "How the first hour of your day quietly sets your energy, hormones, and focus — and the dinacharya-inspired routine that works with your biology instead of against it.",
    seoTitle: "The Best Morning Routine for More Energy (Backed by Ayurveda) | DoshaFlow",
    seoDescription:
      "A practical Ayurvedic morning routine for more energy: morning light, warm water, movement, breath, and the right breakfast — with the dinacharya logic behind each step.",
    heroImage: "/images/blog/best-morning-routine-for-energy-hero.png",
    heroImageAlt:
      "Warm editorial illustration of a morning ritual with tea, a journal, sunlight, a walking path, and botanical leaves.",
  },
  {
    slug: "why-you-feel-tired-all-the-time",
    category: "article",
    title: "Why You Feel Tired All the Time (And What to Do About It)",
    date: "June 26, 2026",
    excerpt:
      "If sleep never seems to fix your exhaustion, the problem is usually rhythm — not hours. An Ayurvedic look at the real drivers of constant tiredness and the two very different kinds of fatigue.",
    dek: "Persistent fatigue is rarely one thing. Here's how sleep quality, digestion, stress, and daily rhythm combine — and why 'rest more' is the wrong advice for half of all tiredness.",
    seoTitle: "Why You Feel Tired All the Time (And What to Do About It) | DoshaFlow",
    seoDescription:
      "Always tired despite enough sleep? An Ayurvedic guide to the real causes of constant fatigue — sleep quality, digestion, stress, and rhythm — and the two types of tiredness.",
    heroImage: "/images/blog/why-you-feel-tired-all-the-time-hero.png",
    heroImageAlt:
      "Warm editorial illustration of a person regaining energy at sunrise through simple daily rituals.",
  },
  {
    slug: "high-cortisol-symptoms",
    category: "article",
    title: "High Cortisol Symptoms: What Your Body May Be Trying to Tell You",
    date: "June 25, 2026",
    excerpt:
      "Wired but tired, waking at 3 a.m., stubborn midsection weight, constant cravings. The common signs of dysregulated cortisol — and a gentle, Ayurvedic path back to a normal stress curve.",
    dek: "Cortisol is meant to spike and fall in a clean daily curve. Modern life flattens it. Here are the signals of chronically high cortisol and how to help the curve recover.",
    seoTitle: "High Cortisol Symptoms: What Your Body Is Telling You | DoshaFlow",
    seoDescription:
      "Recognize the symptoms of high cortisol — wired-but-tired, poor sleep, belly weight, cravings, irritability — and learn a gentle Ayurvedic approach to recovery and burnout.",
    heroImage: "/images/blog/high-cortisol-symptoms-hero.png",
    heroImageAlt:
      "Split editorial illustration contrasting a frantic workday with a calm evening ritual.",
  },
  {
    slug: "brain-fog-causes",
    category: "article",
    title: "Brain Fog: Common Causes and an Ayurvedic Perspective",
    date: "June 25, 2026",
    excerpt:
      "Brain fog is a symptom, not a cause. The five upstream drivers — sleep, digestion, stress, circadian rhythm, and dehydration — and how Ayurveda's view of agni and ama explains the cloudiness.",
    dek: "Words out of reach, decisions too heavy, a mind like wet sand. Brain fog is almost always downstream of sleep, digestion, stress, and rhythm — here's how to find your driver.",
    seoTitle: "Brain Fog: Common Causes and an Ayurvedic Perspective | DoshaFlow",
    seoDescription:
      "What causes brain fog? The five most common drivers — sleep, digestion, stress, circadian rhythm, and dehydration — explained through Ayurveda's concepts of agni, ama, and Vata.",
    heroImage: "/images/blog/brain-fog-causes-hero.png",
    heroImageAlt:
      "Soft editorial illustration of clouds lifting away from the mind to reveal a clear sunrise.",
  },
  {
    slug: "how-to-calm-your-nervous-system",
    category: "article",
    title: "How to Calm Your Nervous System Naturally: An Ayurvedic Guide",
    date: "June 24, 2026",
    excerpt:
      "Technically safe, chronically activated, quietly exhausted — the modern nervous system in three words. A practical Ayurvedic guide to grounding prana vata and returning to calm.",
    dek: "Fight-or-flight was built to be rare and brief. Modern life keeps it gently switched on all day. Here's how to regulate your nervous system using rhythm, warmth, and breath.",
    seoTitle: "How to Calm Your Nervous System Naturally: An Ayurvedic Guide | DoshaFlow",
    seoDescription:
      "A practical Ayurvedic guide to calming an overstimulated nervous system: understand fight-or-flight and prana vata, then use a daily grounding protocol to return to calm.",
    heroImage: "/images/blog/how-to-calm-your-nervous-system-hero.png",
    heroImageAlt:
      "Editorial illustration transitioning from a person overwhelmed by phones and notifications into a peaceful sunrise with tea and nature.",
  },
]

function escapeForTemplate(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${")
}

let source = readFileSync(postsPath, "utf8")

const anchor = "export const posts: Post[] = [\n"
const anchorIndex = source.indexOf(anchor)
if (anchorIndex === -1) {
  console.error("Could not find posts array anchor")
  process.exit(1)
}

const existingSlugs = new Set([...source.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]))

let entriesBlock = ""
for (const a of articles) {
  if (existingSlugs.has(a.slug)) {
    console.log(`SKIP (already exists): ${a.slug}`)
    continue
  }
  const body = readFileSync(join(bodiesDir, `${a.slug}.html`), "utf8").trim()
  const content = escapeForTemplate(body)
  entriesBlock +=
    `  {\n` +
    `    slug: ${JSON.stringify(a.slug)},\n` +
    `    category: ${JSON.stringify(a.category)},\n` +
    `    title: ${JSON.stringify(a.title)},\n` +
    `    date: ${JSON.stringify(a.date)},\n` +
    `    excerpt: ${JSON.stringify(a.excerpt)},\n` +
    `    dek: ${JSON.stringify(a.dek)},\n` +
    `    seoTitle: ${JSON.stringify(a.seoTitle)},\n` +
    `    seoDescription: ${JSON.stringify(a.seoDescription)},\n` +
    `    heroImage: ${JSON.stringify(a.heroImage)},\n` +
    `    heroImageAlt: ${JSON.stringify(a.heroImageAlt)},\n` +
    `    content: \`${content}\`,\n` +
    `  },\n`
}

if (!entriesBlock) {
  console.log("Nothing to insert.")
  process.exit(0)
}

const insertAt = anchorIndex + anchor.length
source = source.slice(0, insertAt) + entriesBlock + source.slice(insertAt)
writeFileSync(postsPath, source, "utf8")
console.log("Inserted articles. New posts.ts length:", source.length)
