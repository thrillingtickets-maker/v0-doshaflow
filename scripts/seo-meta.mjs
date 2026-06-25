import { readFileSync, writeFileSync } from 'fs'

const titleMap = {
  "shatavari-benefits": "Shatavari Benefits: Ayurveda's Cooling Adaptogen",
  "stress-hair-loss-ayurveda": "Can Stress Cause Hair Loss? The Ayurvedic View",
  "why-am-i-always-exhausted": "Why Am I Always Exhausted? The Ayurvedic View",
  "why-am-i-always-tired": "Why Am I Always Tired? The Ayurvedic View",
  "pitta-anger-sleep": "Pitta and Anger: Irritable, Inflamed, Not Sleeping",
  "kapha-diet-plan": "Kapha Diet Plan: How to Eat for Real Energy",
  "pitta-diet-plan": "Pitta Diet Plan: Cool the Fire, Keep the Edge",
  "vata-diet-plan": "Vata Diet Plan: What to Eat and What to Avoid",
  "retreat-day-6": "Day 6: The Enema, the Standoff, and the Temple",
  "retreat-day-11": "Day 11: Blood Tests, a $6 Doctor, and a Tired Heart",
  "retreat-day-5": "Day 5: NBA Finals at 6am and a Restless Brain",
  "why-am-i-always-bloated": "Why Am I Always Bloated? The Ayurvedic Fix",
  "ayurveda-meat-fish": "Can You Eat Meat and Fish on an Ayurvedic Diet?",
  "ayurveda-ice-water": "Why Ayurveda Says Never to Drink Ice Water",
  "ayurveda-exercise": "Why the Same Daily Workout Is Making You Worse",
  "ayurveda-cold-smoothies": "Why Ayurveda Doesn't Recommend Cold Smoothies",
  "ayurvedic-herbs-guide": "Ayurvedic Herbs: A Practical Beginner's Guide",
  "kapha-weight-loss-guide": "Kapha Weight Loss: Why Nothing Has Worked Yet",
  "ghee-benefits-ayurveda": "Ghee Benefits: Ayurveda's Most Sacred Food",
  "turmeric-benefits": "Turmeric Benefits: Curcumin, Best Forms, and Uses",
  "ayurveda-for-men": "Ayurveda for Men: Vata, Pitta, and Kapha Patterns",
  "abhyanga-benefits": "Abhyanga Benefits: Ayurvedic Oil Massage Guide",
  "panchakarma-guide": "Panchakarma Guide: Ayurvedic Detox Explained",
  "sattvic-diet": "The Sattvic Diet: Eating for Mental Clarity",
  "tulsi-benefits": "Tulsi Benefits: A Complete Guide to Holy Basil",
  "amla-benefits": "Amla Benefits: Vitamin C and Rasayana Guide",
  "fennel-benefits": "Fennel Benefits: Digestion and Hormonal Support",
}

const descMap = {
  "best-spices-for-digestion": "Ginger, cumin, coriander, fennel, turmeric, and ajwain — the best Ayurvedic spices for digestion, how to use each one, and who benefits most.",
  "alcohol-ayurveda": "Understanding alcohol through Ayurveda — not as a moral failure, but as honest information about what your nervous system and body actually need.",
  "ayurveda-alcohol": "Understanding alcohol through Ayurveda — not as a moral failure, but as honest information about what your nervous system and body actually need.",
  "ayurvedic-herbs-guide": "A practical guide to the most important Ayurvedic herbs — what each one does, the evidence behind them, and how to match them to your dosha.",
  "ashwagandha-vs-brahmi": "Ashwagandha and Brahmi are both adaptogens, but they work in completely different ways. Here is the clear distinction and when to use each one.",
  "signs-of-kapha-imbalance": "A complete guide to Kapha imbalance symptoms: the physical, mental, and emotional signs, the lifestyle triggers, and how to restore your balance.",
  "ayurvedic-herbs-for-sleep": "A guide to Ayurvedic sleep herbs for each dosha — when to use Ashwagandha, Brahmi, Jatamansi, Shankhpushpi, and Triphala for deeper, calmer sleep.",
  "ayurveda-for-stress": "Understand your stress response by dosha. Ayurvedic approaches to Vata anxiety, Pitta burnout, and Kapha withdrawal — and how to find calm again.",
  "neem-benefits": "A complete guide to neem benefits and uses, with evidence-based applications for skin, dental health, blood sugar, immunity, and parasites.",
  "ayurveda-intermittent-fasting": "An Ayurvedic guide to intermittent fasting: when fasting works, when it backfires, and why your dosha type determines the right approach for you.",
  "how-to-take-ashwagandha": "How to take ashwagandha properly — the optimal dosage, the best timing, and what to expect week by week, based on clinical research and tradition.",
  "ayurveda-for-headaches": "Understanding headaches through Ayurveda. Identify your headache type — Vata, Pitta, or Kapha — and learn the specific treatments that relieve each.",
  "vata-pacifying-foods": "A complete guide to vata-pacifying foods: exactly what to eat and what to avoid when you are a Vata type, with simple grounding meals and daily tips.",
  "what-are-adaptogens": "A complete guide to adaptogens — what they are, how they actually work in the body, and which adaptogenic herbs have real scientific evidence.",
  "ayurveda-for-women": "A comprehensive guide to women's health through Ayurveda. Understand the three life phases and how to support your body and hormones through each.",
  "pitta-pacifying-foods": "A complete guide to pitta-pacifying foods: exactly what to eat and what to avoid when you are a Pitta type, with cooling meals and simple daily tips.",
  "ayurveda-for-depression": "A complete guide to depression through Ayurveda. Identify your type — Vata, Pitta, or Kapha — and the Ayurvedic approach to gently lifting each one.",
  "ayurveda-circadian-rhythm": "How Ayurvedic doshas align with modern circadian rhythm science — the parallel frameworks that describe the same 24-hour biological body clock.",
  "ayurveda-for-hair-loss": "A complete guide to hair loss through Ayurveda. Identify your dosha type and the Ayurvedic approach to hair thinning, greying, and shedding.",
  "ayurveda-for-energy": "Understand the root causes of fatigue through Ayurveda. Learn the five energy drains and the evidence-based protocol that restores lasting vitality.",
  "sattvic-diet": "A complete guide to sattvic eating in Ayurveda. Learn the three gunas and how the quality of your food shapes both your body and your mind.",
  "kapha-pacifying-foods": "Learn which foods pacify Kapha — a complete guide to the Kapha-balancing diet, the foods to favour and avoid, and the surprising Kapha food paradox.",
  "ayurvedic-gut-healing": "A complete protocol for gut healing through Ayurveda. Learn how to restore agni, clear ama, and repair intestinal permeability step by step.",
  "ayurveda-for-immunity": "A complete guide to immunity through Ayurveda. Learn how to build Ojas, the refined essence that creates both lasting immunity and true vitality.",
  "ayurveda-blood-sugar": "A complete guide to blood sugar management through Ayurveda. Learn how to restore your metabolic fire and rebuild true insulin sensitivity.",
  "ayurvedic-spring-cleanse": "A complete 7-day Ayurvedic spring cleanse protocol. Learn how to work with seasonal Kapha to gently detoxify, reset, and re-energise your system.",
  "ayurveda-for-menopause": "A complete guide to menopause through Ayurveda. Learn how to nourish yourself through the Vata phase and ease the most common menopause symptoms.",
  "kitchari-benefits": "A complete guide to kitchari — how to prepare this tridoshic healing meal, modify it for your dosha, and use it for cleansing and recovery.",
  "ayurveda-for-longevity": "A complete guide to Ayurvedic longevity. Learn the Rasayana practices that extend healthspan and build lasting vitality through lifelong Ojas.",
  "ayurveda-liver-health": "A complete guide to liver health through Ayurveda. Learn how to support Pitta, reduce the liver's burden, and restore healthy hepatic function.",
  "moringa-benefits": "A complete guide to moringa — its nutritional profile, its Ayurvedic properties, and exactly how to use it based on your own dosha type.",
  "ayurveda-for-jet-lag": "An Ayurvedic approach to jet lag and travel. Learn how to prepare before you fly, manage the flight itself, and recover quickly once you arrive.",
  "fennel-benefits": "A complete guide to fennel benefits. Learn how to use fennel seeds and tea for digestion, gas, bloating, menstrual health, and fresher breath.",
  "cardamom-benefits": "A complete guide to cardamom — its Ayurvedic properties, its digestive benefits, and how to use it every day for better health and fresh breath.",
  "ayurvedic-anti-ageing": "A complete guide to anti-ageing through Ayurveda. Learn how to manage Vata, build Ojas, and maintain vitality and a healthy glow as you age.",
  "ayurveda-for-eczema": "A complete guide to treating eczema through Ayurveda. Learn how to address the gut-immune root cause and prevent painful, itchy flare-ups.",
  "cumin-benefits": "A complete guide to cumin benefits. Learn its Ayurvedic uses and exactly how to use cumin every day for stronger, smoother, more comfortable digestion.",
  "ayurveda-for-focus": "A complete guide to improving focus through Ayurveda. Learn the real root causes of brain fog and the daily practices that restore mental clarity.",
  "doshas-and-relationships": "Understanding the doshas in relationships. Learn how each dosha responds to stress and conflict, and what partners most need from each other.",
  "ayurveda-for-athletes": "A complete guide to athletic performance through Ayurveda. Learn the training protocols and recovery strategies that best suit each dosha type.",
}

function deriveTitle(t) {
  if (t.length <= 60) return t
  const m = t.match(/^(.{18,60}?)(?::| — | - | \| )/)
  if (m && m[1].length <= 60) return m[1].trim()
  let cut = t.slice(0, 60).replace(/\s+\S*$/, '')
  return cut.trim()
}

function trimDesc(d) {
  if (d.length <= 160) return d
  const window = d.slice(0, 161)
  const sent = window.match(/^(.{140,158}?[.!?])\s/)
  if (sent) return sent[1].trim()
  let cut = d.slice(0, 158).replace(/\s+\S*$/, '').trim()
  cut = cut.replace(/[\s,—-]+$/, '')
  return cut
}

let src = readFileSync('lib/posts.ts', 'utf8')
const marker = '\n  {\n    slug:'
const parts = src.split(marker)
const head = parts[0]
const segs = parts.slice(1)

const report = { titleChanged: 0, descChanged: 0, outOfRange: [] }

const newSegs = segs.map(seg => {
  const slug = (seg.match(/^\s*"([^"]+)"/) || [])[1]
  if (!slug) return seg
  let out = seg

  const stM = out.match(/(seoTitle:\s*)"((?:[^"\\]|\\.)*)"/)
  if (stM) {
    const current = stM[2].replace(/\\"/g, '"')
    let next = titleMap[slug] || (current.length > 60 ? deriveTitle(current) : current)
    if (next !== current) {
      out = out.replace(stM[0], `${stM[1]}${JSON.stringify(next)}`)
      report.titleChanged++
    }
    if (next.length > 60) report.outOfRange.push(`TITLE ${slug} = ${next.length}: ${next}`)
  }

  const sdM = out.match(/(seoDescription:\s*\n?\s*)"((?:[^"\\]|\\.)*)"/)
  if (sdM) {
    const current = sdM[2].replace(/\\"/g, '"')
    let next = descMap[slug] || (current.length > 160 ? trimDesc(current) : current)
    if (next !== current) {
      out = out.replace(sdM[0], `${sdM[1]}${JSON.stringify(next)}`)
      report.descChanged++
    }
    if (next.length < 140 || next.length > 160) report.outOfRange.push(`DESC ${slug} = ${next.length}: ${next}`)
  }

  return out
})

writeFileSync('lib/posts.ts', head + newSegs.map(s => marker + s).join(''))
console.log('titles changed:', report.titleChanged, '| descriptions changed:', report.descChanged)
console.log('STILL OUT OF RANGE (' + report.outOfRange.length + '):')
report.outOfRange.forEach(r => console.log('  ' + r))
