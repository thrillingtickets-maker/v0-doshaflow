export interface GuideLink {
  title: string
  href: string
}

export interface GuideCollection {
  id: string
  emoji: string
  title: string
  description: string
  links: GuideLink[]
}

// Every href below is verified against lib/posts.ts slugs or existing app routes.
export const collections: GuideCollection[] = [
  {
    id: "beginner",
    emoji: "🌿",
    title: "Beginner's Guides",
    description: "New to Ayurveda? Start with the foundations — what the doshas are and how to eat for your type.",
    links: [
      { title: "Start Here", href: "/start-here" },
      { title: "Vata, Pitta & Kapha Explained", href: "/blog/vata-pitta-kapha-explained" },
      { title: "Eating for Your Dosha", href: "/blog/eating-for-your-dosha" },
      { title: "The Dosha Diet Guide", href: "/dosha-diets" },
    ],
  },
  {
    id: "sleep",
    emoji: "😴",
    title: "Sleep",
    description: "Fall asleep faster, stay asleep, and rebuild a rhythm your body can actually keep.",
    links: [
      { title: "Best Ayurvedic Tea for Sleep", href: "/blog/best-ayurvedic-tea-sleep" },
      { title: "Fix Your Sleep Schedule", href: "/blog/how-to-fix-sleep-schedule" },
      { title: "Your Circadian Night Routine", href: "/blog/ayurveda-circadian-rhythm" },
      { title: "Why You Wake Up at 3 AM", href: "/blog/why-you-wake-up-at-3am" },
      { title: "Ayurveda for Insomnia", href: "/blog/ayurveda-for-insomnia" },
    ],
  },
  {
    id: "anxiety",
    emoji: "😌",
    title: "Anxiety & Burnout",
    description: "Calm an overstimulated nervous system and recover from chronic stress and burnout.",
    links: [
      { title: "How to Calm Your Nervous System", href: "/blog/how-to-calm-your-nervous-system" },
      { title: "High Cortisol Symptoms", href: "/blog/high-cortisol-symptoms" },
      { title: "Nervous System Regulation", href: "/blog/nervous-system-regulation-ayurveda" },
      { title: "Healing After Chronic Stress", href: "/blog/healing-after-chronic-stress" },
      { title: "Best Herbs for Anxiety", href: "/blog/best-herbs-for-anxiety" },
      { title: "The Burnout Guide", href: "/blog/ayurveda-burnout" },
      { title: "How to Take Ashwagandha", href: "/blog/how-to-take-ashwagandha" },
    ],
  },
  {
    id: "digestion",
    emoji: "🥗",
    title: "Digestion",
    description: "Heal bloating, strengthen your digestive fire, and build a gut that works with you.",
    links: [
      { title: "Why Am I Always Bloated?", href: "/blog/why-am-i-always-bloated" },
      { title: "Leaky Gut & Ayurveda", href: "/blog/leaky-gut-ayurveda" },
      { title: "Improve Digestion Naturally", href: "/blog/how-to-improve-digestion-naturally" },
      { title: "Ayurveda for Gut Health", href: "/blog/ayurveda-for-gut-health" },
      { title: "Best Spices for Digestion", href: "/blog/best-spices-for-digestion" },
    ],
  },
  {
    id: "weight",
    emoji: "⚖️",
    title: "Weight & Metabolism",
    description: "Sustainable, dosha-aware approaches to weight, metabolism, and morning routines.",
    links: [
      { title: "Ayurvedic Weight Loss", href: "/blog/ayurvedic-weight-loss" },
      { title: "Kapha Weight Loss Guide", href: "/blog/kapha-weight-loss-guide" },
      { title: "The Best Morning Routine for Energy", href: "/blog/best-morning-routine-for-energy" },
      { title: "The Ayurvedic Morning Routine", href: "/blog/ayurvedic-morning-routine" },
      { title: "Intermittent Fasting & Metabolism", href: "/blog/ayurveda-intermittent-fasting" },
    ],
  },
  {
    id: "herbs",
    emoji: "🌱",
    title: "Herbs",
    description: "Evidence-informed guides to the most useful Ayurvedic herbs and how to use them well.",
    links: [
      { title: "Turmeric", href: "/blog/turmeric-benefits" },
      { title: "Tulsi", href: "/blog/tulsi-benefits" },
      { title: "Moringa", href: "/blog/moringa-benefits" },
      { title: "Amla", href: "/blog/amla-benefits" },
      { title: "Fennel", href: "/blog/fennel-benefits" },
      { title: "Ginger", href: "/blog/ginger-benefits" },
      { title: "Shatavari", href: "/blog/shatavari-benefits" },
      { title: "Ashwagandha", href: "/blog/ashwagandha-benefits" },
    ],
  },
  {
    id: "diets",
    emoji: "🥣",
    title: "Dosha Diets",
    description: "What to eat — and what to favor or reduce — for each constitution.",
    links: [
      { title: "Vata Diet Plan", href: "/blog/vata-diet-plan" },
      { title: "Pitta Diet Plan", href: "/blog/pitta-diet-plan" },
      { title: "Kapha Diet Plan", href: "/blog/kapha-diet-plan" },
      { title: "The Dosha Diet Guide", href: "/dosha-diets" },
    ],
  },
  {
    id: "founder",
    emoji: "👨",
    title: "Founder Essays",
    description: "Personal essays on why DoshaFlow exists and what modern wellness keeps getting wrong.",
    links: [
      { title: "Why I'm Building DoshaFlow", href: "/blog/why-im-building-doshaflow" },
      { title: "India Retreat Journal", href: "/journal" },
      { title: "Quiet Health Habits", href: "/blog/quiet-health-habits" },
      { title: "What Modern Wellness Gets Wrong About Rest", href: "/blog/modern-wellness-rest" },
    ],
  },
]

export interface GoalLink {
  label: string
  href: string
}

// Goals point to an on-page collection anchor when one exists, otherwise to the
// most relevant single guide.
export const goals: GoalLink[] = [
  { label: "Better Sleep", href: "#collection-sleep" },
  { label: "Less Anxiety", href: "#collection-anxiety" },
  { label: "Better Digestion", href: "#collection-digestion" },
  { label: "More Energy", href: "/blog/why-you-feel-tired-all-the-time" },
  { label: "Lose Weight", href: "#collection-weight" },
  { label: "Reduce Stress", href: "/blog/ayurveda-for-stress" },
  { label: "Hormonal Balance", href: "/blog/ayurveda-hormones-symptoms" },
  { label: "Learn Ayurveda", href: "#collection-beginner" },
]

// Curated "most-read" guides (no view tracking in the dataset).
export const popularSlugs: string[] = [
  "how-to-take-ashwagandha",
  "turmeric-benefits",
  "why-am-i-always-bloated",
  "best-ayurvedic-tea-sleep",
  "ayurveda-for-anxiety",
  "vata-pitta-kapha-explained",
]

export interface GuidesFaq {
  question: string
  answer: string
}

export const guidesFaqs: GuidesFaq[] = [
  {
    question: "What is Ayurveda, in simple terms?",
    answer:
      "Ayurveda is a traditional system of medicine from India that looks at health through the balance of three functional energies — Vata, Pitta, and Kapha. In practice, it offers food, routine, and herbal guidance tailored to your individual constitution rather than a one-size-fits-all plan.",
  },
  {
    question: "What are the three doshas?",
    answer:
      "Vata governs movement (breath, circulation, nervous system), Pitta governs transformation (digestion, metabolism, body temperature), and Kapha governs structure and lubrication (tissue, immunity, stability). Most people have one or two dominant doshas that shape how they feel and what keeps them balanced.",
  },
  {
    question: "I'm a complete beginner. Where should I start?",
    answer:
      "Start with our Beginner's Guides collection and take the free Dosha Quiz. Knowing whether you lean Vata, Pitta, or Kapha makes every other guide on the site far more useful, because the recommendations change based on your constitution.",
  },
  {
    question: "How do I find my dosha?",
    answer:
      "The fastest way is the free 5-minute Dosha Quiz, which asks about your body, digestion, sleep, and stress patterns. You can also read the Vata, Pitta, and Kapha guides and notice which descriptions feel most like you.",
  },
  {
    question: "Do I need to change my whole diet at once?",
    answer:
      "No. Ayurveda works best as gradual, sustainable change. Most people start with one or two adjustments — like warm, cooked breakfasts or reducing cold drinks — before layering in more. Our Dosha Diet guides show where to begin for your type.",
  },
  {
    question: "Are Ayurvedic herbs safe?",
    answer:
      "Many common herbs like turmeric, tulsi, and ashwagandha are well tolerated for most people, but quality, dosage, and interactions matter. Our herb guides cover evidence and sensible use, and we always recommend checking with your doctor before starting anything new — especially if you are pregnant, nursing, or on medication.",
  },
  {
    question: "Can Ayurveda help with sleep and anxiety?",
    answer:
      "Ayurveda offers practical tools for both — consistent daily rhythms, calming evening routines, breathwork, and specific herbs and teas. Our Sleep and Anxiety & Burnout collections walk through what actually helps and why, with realistic expectations.",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. DoshaFlow publishes educational wellness content, not medical advice. It is not a substitute for diagnosis or treatment from a qualified healthcare professional. Always consult your doctor about your specific situation.",
  },
  {
    question: "How is DoshaFlow different from other wellness sites?",
    answer:
      "We pair traditional Ayurvedic principles with modern evidence and an honest tone — including where the science is thin. The goal is calm, practical guidance for overstimulated modern lives, not hype or miracle claims.",
  },
  {
    question: "Is the Dosha Quiz really free?",
    answer:
      "Yes. The quiz is completely free and takes about five minutes. You'll get a read on your dominant dosha and personalized pointers to the guides most relevant to how you actually feel.",
  },
]
