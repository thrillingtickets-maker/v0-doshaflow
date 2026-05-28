"use client"

import { useState } from "react"

const questions = [
  // PHYSICAL CONSTITUTION
  {
    category: "Body & Build",
    question: "How would you describe your natural body frame?",
    answers: [
      { text: "Thin and light — I struggle to gain weight no matter what I eat", dosha: "V" },
      { text: "Medium and athletic — fairly well-proportioned, gain and lose weight moderately", dosha: "P" },
      { text: "Larger and solid — I gain weight easily and lose it slowly", dosha: "K" },
    ],
  },
  {
    category: "Body & Build",
    question: "What best describes your skin?",
    answers: [
      { text: "Dry, thin, or rough — tends toward flakiness, feels cool to touch", dosha: "V" },
      { text: "Warm, soft, sensitive — prone to redness, breakouts, or flushing", dosha: "P" },
      { text: "Oily, smooth, and thick — moist and cool, rarely reacts", dosha: "K" },
    ],
  },
  {
    category: "Body & Build",
    question: "What is your hair like naturally (before any treatments)?",
    answers: [
      { text: "Dry, frizzy, brittle, or thin — hard to manage in dry weather", dosha: "V" },
      { text: "Fine, straight, tends to thin or gray earlier than expected", dosha: "P" },
      { text: "Thick, lustrous, wavy or curly — gets oily quickly", dosha: "K" },
    ],
  },
  {
    category: "Body & Build",
    question: "How would you describe your eyes?",
    answers: [
      { text: "Small or narrow, dark, quick and restless — tend to be dry", dosha: "V" },
      { text: "Medium, sharp or intense, often light-colored or piercing", dosha: "P" },
      { text: "Large, calm, and soft — naturally moist and beautiful", dosha: "K" },
    ],
  },
  // DIGESTION & APPETITE
  {
    category: "Digestion & Appetite",
    question: "How would you describe your appetite?",
    answers: [
      { text: "Unpredictable — sometimes ravenous, sometimes I forget to eat entirely", dosha: "V" },
      { text: "Strong and regular — I get irritable or headachy if meals are delayed", dosha: "P" },
      { text: "Low but steady — I can easily skip meals without much discomfort", dosha: "K" },
    ],
  },
  {
    category: "Digestion & Appetite",
    question: "How quickly do you digest food?",
    answers: [
      { text: "Unpredictably — sometimes fast, sometimes I feel bloated and gassy", dosha: "V" },
      { text: "Quickly — I process food fast and can handle most things", dosha: "P" },
      { text: "Slowly — I often feel heavy after eating and stay full for a long time", dosha: "K" },
    ],
  },
  {
    category: "Digestion & Appetite",
    question: "What foods do you naturally gravitate toward?",
    answers: [
      { text: "Warm, oily, salty, or sweet foods — I dislike cold and raw food", dosha: "V" },
      { text: "Cooling, fresh, bitter, or sweet foods — I dislike very spicy or sour food", dosha: "P" },
      { text: "Spicy, pungent food — though I'm often drawn to heavy sweets and dairy despite knowing better", dosha: "K" },
    ],
  },
  {
    category: "Digestion & Appetite",
    question: "How are your bowel movements typically?",
    answers: [
      { text: "Irregular — I tend toward constipation, dryness, or inconsistency", dosha: "V" },
      { text: "Regular and loose — under stress I tend toward diarrhea or loose stools", dosha: "P" },
      { text: "Regular but slow and heavy — occasional mucus", dosha: "K" },
    ],
  },
  // SLEEP
  {
    category: "Sleep",
    question: "How do you sleep?",
    answers: [
      { text: "Light and interrupted — hard to fall asleep, wake easily, vivid or anxious dreams", dosha: "V" },
      { text: "Moderate — fall asleep okay but wake up early, intense dreams", dosha: "P" },
      { text: "Deep and long — hard to wake up, sleep 8-9+ hours, feel groggy in the morning", dosha: "K" },
    ],
  },
  {
    category: "Sleep",
    question: "How do you feel when you wake up?",
    answers: [
      { text: "Already anxious or planning — or foggy and slow despite sleeping", dosha: "V" },
      { text: "Alert and ready to go — slight irritability until I've had coffee or food", dosha: "P" },
      { text: "Slow and groggy — I need significant time before I feel functional", dosha: "K" },
    ],
  },
  // ENERGY
  {
    category: "Energy Patterns",
    question: "How would you describe your energy throughout the day?",
    answers: [
      { text: "Bursts of high energy followed by exhaustion — very inconsistent", dosha: "V" },
      { text: "Steady and purposeful until late afternoon, then fades", dosha: "P" },
      { text: "Slow to start, builds gradually through the day, most alive in the evening", dosha: "K" },
    ],
  },
  {
    category: "Energy Patterns",
    question: "How do you relate to physical exercise?",
    answers: [
      { text: "I love moving but exhaust quickly — I do best with gentle, consistent activity", dosha: "V" },
      { text: "I love intensity and competition — I push hard and sometimes too hard", dosha: "P" },
      { text: "I prefer slow, steady activities — I need external motivation to exercise consistently", dosha: "K" },
    ],
  },
  {
    category: "Energy Patterns",
    question: "What is your natural pace of life?",
    answers: [
      { text: "Fast and busy — always moving, hard to slow down or sit still", dosha: "V" },
      { text: "Purposeful and efficient — not necessarily rushing but always productive", dosha: "P" },
      { text: "Slow and steady — I enjoy pausing and am rarely in a hurry", dosha: "K" },
    ],
  },
  // MIND & MENTAL
  {
    category: "Mind & Thinking",
    question: "How is your memory?",
    answers: [
      { text: "I learn quickly but forget quickly — short-term sharp, long-term unreliable", dosha: "V" },
      { text: "Good and selective — I remember what matters and what I've decided to track", dosha: "P" },
      { text: "I learn slowly but remember deeply — once something is in, it stays forever", dosha: "K" },
    ],
  },
  {
    category: "Mind & Thinking",
    question: "How would you describe your thinking style?",
    answers: [
      { text: "Creative and rapid — I jump between ideas easily, struggle to focus for long", dosha: "V" },
      { text: "Analytical and precise — I think in goals, problems, and solutions", dosha: "P" },
      { text: "Methodical and thorough — I'm slow to decide but rarely second-guess myself", dosha: "K" },
    ],
  },
  {
    category: "Mind & Thinking",
    question: "How do you make decisions?",
    answers: [
      { text: "Quickly but often second-guess myself afterward — my mind changes", dosha: "V" },
      { text: "Confidently and decisively after analysis — I commit to my logic", dosha: "P" },
      { text: "Slowly and carefully — I take time, but once I decide I rarely change", dosha: "K" },
    ],
  },
  {
    category: "Mind & Thinking",
    question: "How do you speak?",
    answers: [
      { text: "Fast and enthusiastic — I talk a lot, jump topics, trail off mid-sentence", dosha: "V" },
      { text: "Direct and sharp — I get to the point, can be blunt", dosha: "P" },
      { text: "Slow and deliberate — I think before speaking, calm and measured", dosha: "K" },
    ],
  },
  // STRESS & EMOTIONS
  {
    category: "Stress & Emotions",
    question: "When you're under significant stress, you tend to:",
    answers: [
      { text: "Become anxious, scattered, overwhelmed — your mind races and you can't focus", dosha: "V" },
      { text: "Become irritable, controlling, or critical — you need to fix the problem immediately", dosha: "P" },
      { text: "Withdraw, go quiet, overeat, or shut down — you wait for it to pass", dosha: "K" },
    ],
  },
  {
    category: "Stress & Emotions",
    question: "Your deepest emotional challenge is:",
    answers: [
      { text: "Anxiety and fear — the 'what ifs' and worst-case scenarios", dosha: "V" },
      { text: "Anger and frustration — injustice, incompetence, or losing control of outcomes", dosha: "P" },
      { text: "Attachment and low mood — difficulty letting go, comfort-seeking, sadness", dosha: "K" },
    ],
  },
  {
    category: "Stress & Emotions",
    question: "How do you handle conflict?",
    answers: [
      { text: "I avoid it — I feel anxious and may say what others want to hear to keep the peace", dosha: "V" },
      { text: "I confront it directly — sometimes more aggressively than needed", dosha: "P" },
      { text: "I withdraw and go silent — I wait it out rather than engage", dosha: "K" },
    ],
  },
  // LIFESTYLE
  {
    category: "Lifestyle & Tendencies",
    question: "Your relationship with daily routine:",
    answers: [
      { text: "I resist it — schedules feel constraining, I prefer to follow my energy", dosha: "V" },
      { text: "I like structure but on my own terms — I set the schedule, I follow the schedule", dosha: "P" },
      { text: "I love routine — I feel unsettled and off without it", dosha: "K" },
    ],
  },
  {
    category: "Lifestyle & Tendencies",
    question: "What temperature do you prefer?",
    answers: [
      { text: "Always cold — I love warm weather and hate cold, wind, and drafts", dosha: "V" },
      { text: "I run warm — I love cool weather and hate heat, sun, and humidity", dosha: "P" },
      { text: "I'm comfortable in most temperatures but dislike cold and damp", dosha: "K" },
    ],
  },
  {
    category: "Lifestyle & Tendencies",
    question: "What drains your energy most?",
    answers: [
      { text: "Overstimulation, too many decisions, irregular schedules, and not enough alone time", dosha: "V" },
      { text: "Injustice, incompetence, waiting, and situations outside my control", dosha: "P" },
      { text: "Forced activity when I want to rest, conflict, and sudden unexpected change", dosha: "K" },
    ],
  },
  {
    category: "Lifestyle & Tendencies",
    question: "How do you typically spend money?",
    answers: [
      { text: "Impulsively — I buy things on a whim and sometimes regret it", dosha: "V" },
      { text: "Intentionally — I research, decide, and commit to quality purchases", dosha: "P" },
      { text: "Carefully — I save, think long, and rarely spend on impulse", dosha: "K" },
    ],
  },
  {
    category: "Lifestyle & Tendencies",
    question: "Which statement feels most true about you right now?",
    answers: [
      { text: "I feel scattered, restless, or anxious — like I can't quite land anywhere", dosha: "V" },
      { text: "I feel driven but burned out — I've been pushing hard and the fire is running low", dosha: "P" },
      { text: "I feel heavy, stuck, or unmotivated — I know what I should do but can't seem to move", dosha: "K" },
    ],
  },
]

const results: Record<string, {
  title: string
  subtitle: string
  description: string
  strengths: string[]
  watchFor: string[]
  diet: string[]
  movement: string[]
  herbs: string[]
  kitColor: string
  kitLabel: string
}> = {
  V: {
    title: "Vata",
    subtitle: "Air & Space — The Creative",
    description: "You are primarily Vata — the constitution of movement, creativity, and change. Your mind is quick and your energy electric. You think fast, feel deeply, and generate ideas that others can't keep up with. The challenge is landing. Vata out of balance becomes scattered, anxious, and depleted — your nervous system needs grounding the way a kite needs a string.",
    strengths: ["Creative and visionary", "Quick to learn and adapt", "Enthusiastic and expressive", "Sensitive and intuitive"],
    watchFor: ["Anxiety and racing thoughts", "Irregular sleep and digestion", "Exhaustion from overextension", "Tendency to start but not finish"],
    diet: ["Warm, oily, nourishing foods", "Regular mealtimes (especially important for Vata)", "Ghee, sesame oil, root vegetables, soups", "Avoid cold, raw, and dry foods"],
    movement: ["Slow, grounding yoga (yin, restorative)", "Walking in nature", "Swimming", "Avoid intense or erratic exercise"],
    herbs: ["Ashwagandha (nervous system)", "Brahmi (mental clarity)", "Triphala (digestion)", "Shatavari (nourishment)"],
    kitColor: "#5a8fa3",
    kitLabel: "Vata Grounding Kit",
  },
  P: {
    title: "Pitta",
    subtitle: "Fire & Water — The Achiever",
    description: "You are primarily Pitta — the constitution of transformation, ambition, and fire. You are focused, driven, and capable of extraordinary output. Your digestion is strong, your mind is sharp, and your standards are high. The challenge is heat. Pitta out of balance burns through everything — relationships, body, and patience. The medicine is release, not more intensity.",
    strengths: ["Sharp intellect and focus", "Natural leadership", "Strong digestion and metabolism", "Committed and decisive"],
    watchFor: ["Irritability and anger under pressure", "Perfectionism and burnout", "Inflammation (skin, gut, joints)", "Difficulty switching off"],
    diet: ["Cooling, fresh, and sweet foods", "Coconut, cucumber, fennel, coriander", "Basmati rice, leafy greens, sweet fruits", "Avoid spicy, sour, and fermented foods"],
    movement: ["Moderate-intensity yoga", "Swimming and cycling", "Nature walks (not competitive)", "Avoid hot yoga or intense midday exercise"],
    herbs: ["Shatavari (cooling)", "Amalaki (anti-inflammatory)", "Brahmi (calm focus)", "Rose (heart cooling)"],
    kitColor: "#b85c3a",
    kitLabel: "Pitta Cooling Kit",
  },
  K: {
    title: "Kapha",
    subtitle: "Earth & Water — The Nurturer",
    description: "You are primarily Kapha — the constitution of strength, loyalty, and endurance. You are the person others rely on, the steady presence in a storm, the one who remembers and holds. Your capacity for love is enormous. The challenge is inertia. Kapha out of balance settles into heaviness — physical, emotional, and motivational. The medicine is stimulation, movement, and heat.",
    strengths: ["Deeply loyal and caring", "Calm under pressure", "Strong endurance and stamina", "Excellent long-term memory"],
    watchFor: ["Sluggishness and low motivation", "Weight gain and water retention", "Attachment and difficulty with change", "Low mood or depression"],
    diet: ["Light, dry, spiced foods", "Millet, buckwheat, lentils, bitter greens", "Strong spices: ginger, black pepper, mustard seed", "Avoid dairy, heavy sweets, and cold food"],
    movement: ["Vigorous daily exercise (non-negotiable for Kapha)", "Brisk morning walks before eating", "Dynamic vinyasa yoga", "Strength training"],
    herbs: ["Trikatu (digestive fire)", "Guggul (metabolism)", "Ginger (stimulating)", "Honey (only Kapha-friendly sweetener)"],
    kitColor: "#4a6741",
    kitLabel: "Kapha Energizing Kit",
  },
  VP: {
    title: "Vata-Pitta",
    subtitle: "Air, Space & Fire — The Driven Creative",
    description: "You are Vata-Pitta — one of the most intellectually gifted and creatively ambitious constitutions. You have Vata's imagination and Pitta's drive, which means your ideas are both visionary and executable. The challenge: both doshas run hot and fast. You're prone to burning out from opposite directions — Vata exhausts from overstimulation, Pitta from overachievement. Grounding and cooling are your two most important practices.",
    strengths: ["Creative vision combined with focused execution", "Highly intelligent and quick", "Passionate and persuasive", "Adaptable under pressure"],
    watchFor: ["Anxiety combined with irritability — a volatile mix", "Burnout from creative overwork", "Digestive irregularity that swings between Vata and Pitta patterns", "Sleep disrupted by both racing thoughts and early waking"],
    diet: ["Warm but not spicy — avoid extremes in either direction", "Ghee and cooling oils", "Sweet, bitter, and astringent tastes", "Regular mealtimes (Vata) with cooling foods (Pitta)"],
    movement: ["Moderate yoga — not too slow (Vata) or too intense (Pitta)", "Swimming is ideal for both", "Evening walks to cool Pitta and ground Vata"],
    herbs: ["Ashwagandha + Shatavari combination", "Brahmi (calms both doshas)", "Amalaki (cooling + nourishing)"],
    kitColor: "#7a6a3e",
    kitLabel: "Vata-Pitta Balance Kit",
  },
  VK: {
    title: "Vata-Kapha",
    subtitle: "Air, Space & Earth — The Sensitive Nurturer",
    description: "You are Vata-Kapha — a rare and interesting combination of the lightest and heaviest energies. You may feel like two different people: one anxious and scattered, the other slow and heavy. Your challenge is that Vata and Kapha seem contradictory, which can make you feel inconsistent or hard to understand. The key is warmth — warming, stimulating practices balance both doshas simultaneously.",
    strengths: ["Deep creativity with steady follow-through", "Intuitive and empathetic", "Strong memory combined with quick learning", "Grounded imagination"],
    watchFor: ["Alternating anxiety and low mood", "Digestive problems that don't fit one pattern", "Pulling in two directions — wanting change (Vata) while resisting it (Kapha)", "Energy that's either too much or too little"],
    diet: ["Warm, lightly spiced food is your sweet spot", "Avoid cold/raw (Vata) AND heavy/sweet (Kapha)", "Soups and stews with ginger and cumin", "Regular mealtimes are essential"],
    movement: ["Warm, moderate yoga — neither too gentle nor too intense", "Morning movement to activate Kapha", "Walking in warm weather"],
    herbs: ["Trikatu (warming both doshas)", "Ashwagandha (steadying)", "Ginger tea daily"],
    kitColor: "#6a7a3e",
    kitLabel: "Vata-Kapha Warming Kit",
  },
  PK: {
    title: "Pitta-Kapha",
    subtitle: "Fire, Earth & Water — The Powerhouse",
    description: "You are Pitta-Kapha — one of the most physically powerful constitutions. You have Pitta's intensity and Kapha's endurance, which means you can go hard and sustain it. You're often the most capable person in the room and the one others rely on. The challenge is that both doshas resist release — Pitta through control, Kapha through attachment. Learning to let go is your central practice.",
    strengths: ["Exceptional physical and mental stamina", "Strong leadership and reliability", "Methodical and strategic", "Deep loyalty and commitment"],
    watchFor: ["Stubbornness — both Pitta and Kapha resist change", "Weight gain combined with inflammation", "Slow metabolic accumulation over time", "Tendency to take on too much and carry it alone"],
    diet: ["Light and cooling — avoid heavy, oily AND spicy foods", "Bitter greens, legumes, light grains", "Cooling spices: fennel, coriander, cumin", "Avoid dairy (Kapha) and spicy food (Pitta)"],
    movement: ["Regular vigorous exercise is essential", "Swimming and cycling ideal", "Avoid overheating (Pitta) but keep intensity high (Kapha)"],
    herbs: ["Amalaki (cooling + light)", "Guggul (metabolism)", "Turmeric (anti-inflammatory)"],
    kitColor: "#7a4a3e",
    kitLabel: "Pitta-Kapha Balance Kit",
  },
  T: {
    title: "Tridoshic",
    subtitle: "All Three Doshas — The Rare Balance",
    description: "You are Tridoshic — all three doshas are roughly in balance, which is considered rare and fortunate in Ayurveda. Your constitution is adaptable and resilient. The challenge is that you don't have a clear single direction for imbalance — you need to pay attention to season, stress, and lifestyle to understand which dosha is currently dominant and needs the most attention.",
    strengths: ["Highly adaptable to different environments and situations", "Balanced energy, digestion, and mood", "Natural resilience", "Can handle what others cannot"],
    watchFor: ["Current season and stress patterns — whichever dosha is currently dominant", "Tridoshic types can shift between all three imbalance patterns", "Pay close attention to what symptoms appear under stress"],
    diet: ["Follow seasonal eating — warming in winter (Vata/Kapha season), cooling in summer (Pitta season)", "Avoid extremes in any direction", "Fresh, whole, seasonal food is your best guide"],
    movement: ["Moderate, varied exercise that matches your energy on any given day", "Yoga, walking, swimming all work well"],
    herbs: ["Triphala (balances all three doshas)", "Ashwagandha (adaptogenic)", "Turmeric (maintains balance)"],
    kitColor: "#6a5a8a",
    kitLabel: "Tridoshic Balance Kit",
  },
}

function getResult(v: number, p: number, k: number) {
  const total = v + p + k
  const vPct = Math.round((v / total) * 100)
  const pPct = Math.round((p / total) * 100)
  const kPct = Math.round((k / total) * 100)

  const sorted = [
    { key: "V", pct: vPct },
    { key: "P", pct: pPct },
    { key: "K", pct: kPct },
  ].sort((a, b) => b.pct - a.pct)

  const [first, second] = sorted
  const gap = first.pct - second.pct
  const allClose = sorted[0].pct - sorted[2].pct <= 15

  let type: string
  if (allClose) {
    type = "T"
  } else if (gap >= 15) {
    type = first.key
  } else {
    const combo = [first.key, second.key].sort().join("")
    type = combo === "PV" ? "VP" : combo === "KV" ? "VK" : combo === "KP" ? "PK" : first.key
  }

  return { type, vPct, pPct, kPct, result: results[type] }
}

export default function QuizPage() {
  const [showIntro, setShowIntro] = useState(true)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<{ dosha: string }[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const progress = Math.round((current / questions.length) * 100)
  const q = questions[current]

  function handleSelect(idx: number) {
    if (selected !== null) return // Prevent double-click during delay
    setSelected(idx)
    
    setTimeout(() => {
      const newAnswers = [...answers, { dosha: q.answers[idx].dosha }]
      setAnswers(newAnswers)
      setSelected(null)
      if (current + 1 >= questions.length) {
        setShowResult(true)
      } else {
        setCurrent(current + 1)
      }
    }, 600)
  }

  const counts = answers.reduce(
    (acc, a) => { acc[a.dosha] = (acc[a.dosha] || 0) + 1; return acc },
    {} as Record<string, number>
  )
  const { type, vPct, pPct, kPct, result } = showResult
    ? getResult(counts.V || 0, counts.P || 0, counts.K || 0)
    : { type: "", vPct: 0, pPct: 0, kPct: 0, result: results.V }

  async function handleSubmit() {
    if (!email || !email.includes("@")) return
    setLoading(true)
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      setSubmitted(true)
    } catch {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        .quiz-page { min-height: 100vh; background: #faf8f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Georgia, serif; color: #2c2218; }
        .quiz-container { max-width: 680px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
        .quiz-header { text-align: center; padding: 2.5rem 0 2rem; }
        .quiz-tag { display: inline-block; background: #f5f0e8; color: #7a5c3e; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.3rem 0.9rem; border-radius: 2rem; margin-bottom: 1rem; }
        .quiz-header h1 { font-size: clamp(1.6rem, 4vw, 2.2rem); font-weight: 800; color: #3d2e1e; letter-spacing: -0.5px; margin-bottom: 0.5rem; }
        .quiz-header p { color: #7a6a58; font-size: 0.95rem; }
        .progress-bar-wrap { background: #e0d8cc; border-radius: 2rem; height: 6px; margin-bottom: 0.5rem; overflow: hidden; }
        .progress-bar-fill { height: 100%; background: #c8843a; border-radius: 2rem; transition: width 0.3s ease; }
        .progress-label { font-size: 0.75rem; color: #7a6a58; margin-bottom: 2rem; display: flex; justify-content: space-between; }
        .category-tag { display: inline-block; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #7a5c3e; background: #f5f0e8; padding: 0.2rem 0.7rem; border-radius: 2rem; margin-bottom: 1rem; }
        .question-text { font-size: 1.2rem; font-weight: 700; color: #3d2e1e; line-height: 1.4; margin-bottom: 1.5rem; }
        .answer-option { display: block; width: 100%; text-align: left; padding: 1rem 1.25rem; border-radius: 0.875rem; border: 1.5px solid #e0d8cc; background: white; margin-bottom: 0.75rem; cursor: pointer; font-size: 0.95rem; color: #2c2218; line-height: 1.5; transition: all 0.15s ease; font-family: inherit; }
        .answer-option:hover { border-color: #c8843a; background: #fdf8f2; }
        .answer-option.selected { border-color: #c8843a; background: #fdf3e8; color: #3d2e1e; font-weight: 500; }
        .next-btn { width: 100%; padding: 0.9rem; border-radius: 2rem; border: none; font-size: 0.95rem; font-weight: 700; cursor: pointer; margin-top: 0.5rem; transition: all 0.2s; font-family: inherit; }
        .next-btn:enabled { background: #c8843a; color: white; }
        .next-btn:enabled:hover { background: #b5732a; transform: translateY(-1px); }
        .next-btn:disabled { background: #e0d8cc; color: #a89880; cursor: not-allowed; }

        /* RESULTS */
        .result-header { text-align: center; padding: 2rem 0 1.5rem; }
        .result-tag { display: inline-block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: white; padding: 0.35rem 1rem; border-radius: 2rem; margin-bottom: 1rem; }
        .result-title { font-size: clamp(2rem, 6vw, 3rem); font-weight: 900; color: #3d2e1e; letter-spacing: -1px; margin-bottom: 0.25rem; }
        .result-subtitle { font-size: 1rem; color: #7a6a58; margin-bottom: 1.5rem; }
        .dosha-bars { background: white; border: 1px solid #e0d8cc; border-radius: 1.25rem; padding: 1.5rem; margin-bottom: 1.5rem; }
        .dosha-bars h3 { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #7a6a58; margin-bottom: 1.25rem; }
        .dosha-bar-row { margin-bottom: 0.875rem; }
        .dosha-bar-row:last-child { margin-bottom: 0; }
        .dosha-bar-label { display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 600; color: #3d2e1e; margin-bottom: 0.3rem; }
        .dosha-bar-pct { color: #7a6a58; font-weight: 400; }
        .dosha-bar-track { background: #f5f0e8; border-radius: 2rem; height: 10px; overflow: hidden; }
        .dosha-bar-fill { height: 100%; border-radius: 2rem; transition: width 0.8s ease; }
        .result-description { font-size: 1rem; line-height: 1.8; color: #2c2218; margin-bottom: 1.5rem; }
        .result-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
        .result-card { background: white; border: 1px solid #e0d8cc; border-radius: 1rem; padding: 1.25rem; }
        .result-card h4 { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #7a5c3e; margin-bottom: 0.75rem; }
        .result-card ul { list-style: none; padding: 0; margin: 0; }
        .result-card ul li { font-size: 0.83rem; color: #2c2218; padding: 0.2rem 0; border-bottom: 1px solid #f5f0e8; line-height: 1.4; }
        .result-card ul li:last-child { border-bottom: none; }
        .result-card ul li::before { content: "· "; color: #c8843a; font-weight: 700; }
        .kit-cta { border-radius: 1.25rem; padding: 2rem; text-align: center; color: white; margin-bottom: 1rem; }
        .kit-cta h3 { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.5rem; }
        .kit-cta p { opacity: 0.88; font-size: 0.9rem; margin-bottom: 1.25rem; }
        .email-row { display: flex; gap: 0.5rem; max-width: 400px; margin: 0 auto; flex-wrap: wrap; justify-content: center; }
        .email-input { flex: 1; min-width: 200px; padding: 0.7rem 1rem; border-radius: 2rem; border: none; font-size: 0.9rem; outline: none; background: white; color: #2c2218; font-family: inherit; }
        .kit-btn { background: white; font-weight: 700; font-size: 0.88rem; padding: 0.7rem 1.25rem; border-radius: 2rem; border: none; cursor: pointer; white-space: nowrap; font-family: inherit; }
        .privacy-note { font-size: 0.72rem; opacity: 0.6; margin-top: 0.75rem; }
        .success-note { font-size: 1rem; font-weight: 600; padding: 0.5rem; }
        .retake-btn { display: block; text-align: center; color: #7a5c3e; font-size: 0.85rem; font-weight: 600; background: none; border: none; cursor: pointer; text-decoration: underline; margin: 1rem auto 0; font-family: inherit; }
        .share-btn { display: flex; align-items: center; justify-content: center; width: 100%; padding: 0.875rem 1.5rem; border-radius: 2rem; border: 2px solid #c8843a; background: transparent; color: #c8843a; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: inherit; margin-top: 1.5rem; }
        .share-btn:hover { background: #fdf3e8; }
        .share-row { display: flex; gap: 0.75rem; margin-top: 1.5rem; justify-content: center; flex-wrap: wrap; }
        .share-row button { display: flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1rem; border-radius: 2rem; border: 2px solid #c8843a; background: transparent; color: #c8843a; font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .share-row button:hover { background: #fdf3e8; }
        .share-row button svg { width: 16px; height: 16px; }
        .intro-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 70vh; text-align: center; padding: 2rem 0; }
        .intro-logo { font-size: 1.8rem; font-weight: 900; color: #3d2e1e; margin-bottom: 2rem; letter-spacing: -1px; }
        .intro-logo span { color: #c8843a; }
        .intro-title { font-size: clamp(1.8rem, 5vw, 2.5rem); font-weight: 800; color: #3d2e1e; margin-bottom: 1rem; letter-spacing: -0.5px; }
        .intro-desc { font-size: 1rem; color: #7a6a58; line-height: 1.7; max-width: 480px; margin: 0 auto 2rem; }
        .start-btn { background: #c8843a; color: white; font-size: 1rem; font-weight: 700; padding: 1rem 2rem; border-radius: 2rem; border: none; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .start-btn:hover { background: #b5732a; transform: translateY(-1px); }
        @media (max-width: 600px) {
          .result-grid { grid-template-columns: 1fr; }
          .quiz-container { padding: 1.5rem 1.25rem 3rem; }
        }
      `}</style>

      <div className="quiz-page">
        <div className="quiz-container">
          {showIntro ? (
            <div className="intro-wrap">
              <div className="intro-logo">Dosha<span>Flow</span></div>
              <h1 className="intro-title">Find your Ayurvedic constitution</h1>
              <p className="intro-desc">
                25 questions across body, mind, digestion, sleep, and stress. Discover whether you&apos;re Vata, Pitta, Kapha — or a combination — with a full percentage breakdown and personalized kit.
              </p>
              <button className="start-btn" onClick={() => setShowIntro(false)}>
                Start the Quiz →
              </button>
            </div>
          ) : !showResult ? (
            <>
              <div className="quiz-header">
                <div className="quiz-tag">Dosha Quiz</div>
                <h1>Find your Ayurvedic constitution</h1>
                <p>25 questions · 5 minutes · Your personalized breakdown</p>
              </div>

              <div className="progress-bar-wrap">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="progress-label">
                <span>Question {current + 1} of {questions.length}</span>
                <span>{progress}% complete</span>
              </div>

              <div className="category-tag">{q.category}</div>
              <div className="question-text">{q.question}</div>

              {q.answers.map((a, i) => (
                <button
                  key={i}
                  className={`answer-option${selected === i ? " selected" : ""}`}
                  onClick={() => handleSelect(i)}
                >
                  {a.text}
                </button>
              ))}
            </>
          ) : (
            <>
              <div className="result-header">
                <div className="result-tag" style={{ background: result.kitColor }}>Your Constitution</div>
                <div className="result-title">{result.title}</div>
                <div className="result-subtitle">{result.subtitle}</div>
              </div>

              <div className="dosha-bars">
                <h3>Your Dosha Breakdown</h3>
                <div className="dosha-bar-row">
                  <div className="dosha-bar-label"><span>Vata (Air & Space)</span><span className="dosha-bar-pct">{vPct}%</span></div>
                  <div className="dosha-bar-track"><div className="dosha-bar-fill" style={{ width: `${vPct}%`, background: "#5a8fa3" }} /></div>
                </div>
                <div className="dosha-bar-row">
                  <div className="dosha-bar-label"><span>Pitta (Fire & Water)</span><span className="dosha-bar-pct">{pPct}%</span></div>
                  <div className="dosha-bar-track"><div className="dosha-bar-fill" style={{ width: `${pPct}%`, background: "#b85c3a" }} /></div>
                </div>
                <div className="dosha-bar-row">
                  <div className="dosha-bar-label"><span>Kapha (Earth & Water)</span><span className="dosha-bar-pct">{kPct}%</span></div>
                  <div className="dosha-bar-track"><div className="dosha-bar-fill" style={{ width: `${kPct}%`, background: "#4a6741" }} /></div>
                </div>
              </div>

              <p className="result-description">{result.description}</p>

              <div className="result-grid">
                <div className="result-card">
                  <h4>Your Strengths</h4>
                  <ul>{result.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </div>
                <div className="result-card">
                  <h4>Watch For</h4>
                  <ul>{result.watchFor.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </div>
                <div className="result-card">
                  <h4>Diet Principles</h4>
                  <ul>{result.diet.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </div>
                <div className="result-card">
                  <h4>Movement</h4>
                  <ul>{result.movement.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </div>
              </div>

              <div className="result-card" style={{ marginBottom: "1.5rem" }}>
                <h4>Key Herbs for Your Type</h4>
                <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", listStyle: "none", padding: 0, margin: 0 }}>
                  {result.herbs.map((h, i) => (
                    <li key={i} style={{ background: "#f5f0e8", border: "1px solid #e0d8cc", borderRadius: "2rem", padding: "0.2rem 0.7rem", fontSize: "0.8rem", color: "#7a5c3e", fontWeight: 600 }}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="kit-cta" style={{ background: `linear-gradient(135deg, ${result.kitColor} 0%, ${result.kitColor}cc 100%)` }}>
                <h3>Get your {result.kitLabel}</h3>
                <p>A personalized 7-day meal guide, movement program, daily rituals, and herbal recommendations — built for your {result.title} constitution.</p>
                {!submitted ? (
                  <div className="email-row">
                    <input
                      type="email"
                      className="email-input"
                      placeholder="Your email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                    <button className="kit-btn" style={{ color: result.kitColor }} onClick={handleSubmit} disabled={loading}>
                      {loading ? "..." : "Send my kit →"}
                    </button>
                  </div>
                ) : (
                  <div className="success-note">You&apos;re on the list — your kit is coming.</div>
                )}
                <p className="privacy-note">No spam. Just your personalized report.</p>
              </div>

              <div className="share-row">
                <button
                  onClick={() => {
                    const text = `I just took the DoshaFlow dosha quiz — I'm ${result.title} 🌿\nVata ${vPct}% · Pitta ${pPct}% · Kapha ${kPct}%\n\nFind your type → https://www.doshaflow.com/quiz`
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank')
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  X
                </button>
                <button
                  onClick={() => {
                    window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.doshaflow.com%2Fquiz', '_blank')
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </button>
                <button
                  onClick={() => {
                    const text = `I'm ${result.title} 🌿 Vata ${vPct}% · Pitta ${pPct}% · Kapha ${kPct}% — find your dosha at doshaflow.com/quiz`
                    navigator.clipboard.writeText(text)
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                  {copied ? "Copied!" : "Copy link"}
                </button>
              </div>

              <button className="retake-btn" onClick={() => { setShowIntro(true); setCurrent(0); setAnswers([]); setSelected(null); setShowResult(false); setEmail(""); setSubmitted(false); }}>
                Retake the quiz
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}
