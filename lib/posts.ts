export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  seoTitle?: string
  seoDescription?: string
}

export const posts: Post[] = [
  {
    slug: "ayurveda-coffee",
    title: "The Ayurvedic Take on Coffee",
    date: "May 28, 2026",
    excerpt: "The question I get asked most often when I tell people I've been at an Ayurvedic retreat is: 'Can you still have coffee?' The answer is nuanced, which is very Ayurvedic of it.",
    seoTitle: "The Ayurvedic Take on Coffee: Should You Drink It or Give It Up?",
    seoDescription: "Ayurveda has a nuanced take on coffee — it depends on your dosha. Here's how coffee affects Vata, Pitta, and Kapha types, and how to make it work better for your constitution.",
    content: ``,
  },
  {
    slug: "ayurveda-cold-smoothies",
    title: "Why Ayurveda Doesn't Believe in Cold Smoothies (And What to Eat Instead)",
    date: "May 28, 2026",
    excerpt: "I drank a green smoothie every morning for three years. Then I sat with an Ayurvedic practitioner in Kerala and she said: 'That explains the bloating.'",
    seoTitle: "Why Ayurveda Doesn't Recommend Cold Smoothies (And What to Eat Instead)",
    seoDescription: "Ayurveda says cold smoothies suppress digestive fire — and the science of agni explains why. Here's what to eat for breakfast instead, according to your dosha.",
    content: ``,
  },
  {
    slug: "kapha-dosha-guide",
    title: "Kapha Dosha: Why You Feel Stuck, Sluggish, and What Actually Helps",
    date: "May 28, 2026",
    excerpt: "Kapha is the dosha nobody talks about. Here's what I've learned: Kapha imbalance isn't a character flaw. It's an energetic pattern with specific causes and solutions.",
    seoTitle: "Kapha Dosha: Why You Feel Sluggish and What Actually Helps",
    seoDescription: "Kapha dosha governs stability, structure, and endurance. Learn the signs of Kapha imbalance — sluggishness, weight gain, low motivation — and how to get your energy moving again.",
    content: ``,
  },
  {
    slug: "pitta-dosha-guide",
    title: "Pitta Dosha: The High-Achiever's Guide to Cooling Down",
    date: "May 28, 2026",
    excerpt: "The first time someone described Pitta to me, I laughed. Not because it was wrong. Because it was so accurate it was slightly embarrassing.",
    seoTitle: "Pitta Dosha: Signs of Imbalance and How to Cool Down",
    seoDescription: "Pitta dosha governs fire, digestion, and ambition. Learn the signs of Pitta imbalance — inflammation, irritability, burnout — and exactly how to bring it back into balance.",
    content: ``,
  },
  {
    slug: "vata-dosha-guide",
    title: "Vata Dosha: Signs You're Out of Balance and What To Do About It",
    date: "May 28, 2026",
    excerpt: "I used to think anxiety was just my personality. Then I got my dosha assessment and the practitioner said: 'Classic Vata imbalance.' Everything had a name — and a remedy.",
    seoTitle: "Vata Dosha: Signs You're Out of Balance and How to Fix It",
    seoDescription: "Vata dosha governs movement, creativity, and the nervous system. Learn the signs of Vata imbalance — anxiety, dry skin, insomnia — and exactly how to bring it back into balance.",
    content: ``,
  },
  {
    slug: "ayurvedic-herbs-guide",
    title: "The Ayurvedic Herb Guide: What's Actually in These Formulas and Why",
    date: "May 28, 2026",
    excerpt: "I'm sitting in a pharmacy that's been operating for over 200 years. Here's what I learned about the herbs that show up in every Ayurvedic formula — and why they work.",
    seoTitle: "Ayurvedic Herbs: A Practical Guide to Ashwagandha, Triphala, Brahmi & More",
    seoDescription: "A practical guide to the most important Ayurvedic herbs — what they do, the evidence behind them, and how to match them to your dosha type.",
    content: ``,
  },
  {
    slug: "what-happens-ayurvedic-retreat-day-3",
    title: "Day 3: My Body Is Detoxing, My Mood Is a Ping Pong Ball, and I Hit 15,000 Steps",
    date: "May 27, 2026",
    excerpt: "First good night of sleep. Eight hours. My resting heart rate was 74. And then my digestive system staged a full revolt.",
    seoTitle: "What Really Happens at an Ayurvedic Retreat: Day 3 — Shirodhara, Detox & Mood Swings",
    seoDescription: "An honest first-person account of day 3 at an Ayurvedic retreat in India — Shirodhara treatment, detox side effects, mood swings, and what nobody warns you about before you go.",
    content: `
      <p><strong>May 27, 2026 · Ayurvedic Retreat, Day 3</strong></p>
      <p>I arrived here Monday. It's now Wednesday night, and I'm recording this voice note from my room with a headache from staring at my laptop for four hours straight. So — full transparency — this is what a real retreat looks like, at least for me.</p>
      <h2>Last night I slept eight hours.</h2>
      <p>That might not sound revolutionary, but for me it is. My sleep has been wrecked for years — shallow, restless, never enough. The first two nights here I was brain foggy and exhausted in that particular way that's different from being tired. Like your nervous system is buffering. But last night something shifted. Eight hours. Deep. My resting heart rate this morning was 74, which is genuinely low for me. My body is starting to do the thing.</p>
      <h2>The less glamorous news: my digestive system staged a full revolt today.</h2>
      <p>I've been eating a lot since I arrived. Big breakfasts, full plates, seconds. But if I'm being honest with myself — which is kind of the whole point of being here — I've been overeating to fill a void. When you take away alcohol, you find other things to reach for. For me, apparently, it's been food. Today my body sent a very clear message about that. I spent most of the day dealing with severe diarrhea. Not fun. Tonight was the first time they gave me a portioned meal. I left the dining room not stuffed for the first time since I arrived, and honestly? I felt better. Lighter. Something to pay attention to.</p>
      <h2>On mood: it has been a ping pong ball.</h2>
      <p>This morning I woke up and texted my friends feeling genuinely great. Then I went for a short walk in the heat — it's the hottest season here right now, genuinely brutal — and something shifted and I just felt: what am I doing here? That lasted a few hours. Then it passed. I've been told this is normal — the mood swings are part of the detox process, part of what happens when you take away the things you've been using to regulate yourself. No cravings for alcohol, which surprises me a little. Or maybe it doesn't. I think the cravings were always about something else.</p>
      <h2>Today's highlight: Shirodhara.</h2>
      <p>Shirodhara is one of the most distinctive treatments in Ayurvedic medicine. Warm oil — in my case, a blend of sesame and herbal oils chosen for my Vata constitution — is poured in a continuous, uninterrupted stream across the center of your forehead from a brass vessel that swings gently above you. This continues for 45 minutes.</p>
      <p>When I read about it before coming, I assumed I would hate it. I'm not someone who sits still. The idea of lying motionless with oil pouring on my forehead for 45 minutes sounded like a form of mild torture.</p>
      <p>It is the opposite. The specific effect it has on the nervous system is difficult to explain in a way that doesn't sound mystical, so I'll just say: my mind went quiet in a way it hasn't in years. Not sleepy. Quiet. The practitioners here tell me it works on the "third eye" — the Ajna point — which governs the nervous system and mental clarity in Ayurvedic anatomy. I don't know how to evaluate that claim. I know how I felt walking out of the room.</p>
      <p>If you're considering an Ayurvedic retreat and wondering whether Shirodhara is worth doing: yes. Without reservation.</p>
      <p>We also took a tour of the medicinal plants on the property today — walking through and learning what each plant treats, which dosha it balances. There's so much knowledge here that barely exists in any accessible form in a place like Los Angeles.</p>
      <h2>Speaking of Los Angeles.</h2>
      <p>I spent four hours tonight working on something I've been building — a website called DoshaFlow, which is officially live as of today. There is almost no real Ayurvedic presence in LA. Not the real thing. Not in any accessible, modern, well-designed form. The opportunity is enormous. This retreat is making me more convinced of that every day.</p>
      <h2>The numbers.</h2>
      <p>Sleep: 8 hours. Resting heart rate: 74. Steps: 15,000 (this took genuinely all day). Yoga and meditation completed: 0 (tomorrow, I mean it this time — my back hurts and I need to move properly).</p>
      <p>It's not a perfect day. My body hurts, my mood was all over the place, and I have a headache. But I'm here. I slept eight hours. I hit 15,000 steps. I built something I'm proud of. And I went to bed not overfull for the first time all week. Progress looks different than I thought it would. But I think that's the point.</p>
      <p><em>Curious what an Ayurvedic plan actually looks like? See <a href="/samples">sample Vata meal and yoga plans</a> — or <a href="/quiz">take the quiz</a> to find your own type.</em></p>
    `,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllPosts(): Post[] {
  return posts
}
