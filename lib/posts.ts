export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    slug: "day-3-my-body-is-detoxing",
    title: "Day 3: My Body Is Detoxing, My Mood Is a Ping Pong Ball, and I Hit 15,000 Steps",
    date: "May 27, 2026",
    excerpt: "First good night of sleep. Eight hours. My resting heart rate was 74. And then my digestive system staged a full revolt.",
    content: `
      <p>First good night of sleep. Eight hours. My resting heart rate was 74. And then my digestive system staged a full revolt.</p>
      
      <p>I woke up feeling like I'd been hit by a truck made entirely of turmeric and ghee. The Ayurvedic doctor here says this is normal — "your body is releasing years of accumulated ama," she explained, which is the Sanskrit term for toxins. I nodded like I understood, but mostly I was thinking about whether I could make it to the bathroom in time.</p>
      
      <p>By mid-morning, things had settled. I walked the grounds — lush, green, impossibly quiet except for the birds. My phone told me I'd hit 15,000 steps by lunch. That's more than I usually do in three days back home.</p>
      
      <p>The food here is simple but intentional. Every meal is designed for my specific dosha. As a Pitta-dominant type, I'm eating cooling foods: cucumber, coconut, bitter greens. No coffee. No alcohol. No spice. It's like my tongue has entered witness protection.</p>
      
      <p>My mood has been... unpredictable. One moment I'm at peace, watching the sunset over the rice paddies. The next I'm inexplicably angry at a mosquito. The practitioners say this is also normal. Emotional detox, they call it. I call it "wondering why I paid money for this."</p>
      
      <p>But then evening comes. The oil massage. The meditation. The sound of temple bells in the distance. And I remember why I'm here. To reset. To remember what my body feels like when it's not running on cortisol and cold brew.</p>
      
      <p>Three days down. Eleven to go. My body is confused, but something deeper feels like it's waking up.</p>
    `,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllPosts(): Post[] {
  return posts
}
