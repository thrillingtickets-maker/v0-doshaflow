import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vata Dosha Guide: Anxiety, Sleep & Nervous System | DoshaFlow",
  description: "Understanding Vata dosha — what it is, how it manifests, and the practical protocols for Vata balance. Anxiety, poor sleep, digestive issues, and nervous system recovery.",
  alternates: { canonical: "https://www.doshaflow.com/vata" },
  openGraph: {
    title: "Vata Dosha Guide: Anxiety, Sleep & Nervous System | DoshaFlow",
    description: "Understand Vata dosha — the causes of anxiety, poor sleep, and nervous system depletion. Daily routines, foods, herbs, and the Ayurvedic path to balance.",
    type: "article",
    url: "https://www.doshaflow.com/vata",
  },
}

export const dynamic = 'force-dynamic'

export default function VataPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#C97F3D]/10 text-[#C97F3D] text-xs font-medium tracking-widest uppercase rounded-full mb-6">
            Vata Dosha
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            You probably don't describe yourself as Vata. You describe yourself as anxious.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Overstimulated. Exhausted. Unable to sleep. Somehow both wired and depleted at the same time. Welcome to Vata imbalance in the modern world.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-24">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* What Vata Actually Feels Like */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              What Vata Actually Feels Like
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Vata is the dosha of movement and air. It governs the nervous system, circulation, and the quality of motion in the body and mind. When Vata is balanced, you feel creative, energetic, responsive, and adaptable. When Vata becomes aggravated, everything becomes chaotic.
              </p>
              <p>
                If you're Vata, you know this pattern: your mind is constantly moving. You have multiple thoughts happening simultaneously. You're interested in lots of things but finish few of them. You get excited quickly and lose interest quickly. Your sleep is often interrupted — you wake at 3am with racing thoughts or dreams. Your digestion is irregular; sometimes you're hungry, sometimes you forget to eat entirely.
              </p>
              <p>
                Your hands and feet are often cold. You're sensitive to loud noises and bright lights. You hate being still for long periods. You're drawn to stimulation — more music, more information, more experiences — yet this is exactly what makes your nervous system worse over time.
              </p>
            </div>
          </section>

          {/* The Physical Signs */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Physical Signs of Vata Imbalance
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <ul className="list-disc pl-6 space-y-2">
                <li>Insomnia or broken sleep, especially waking between 2–4am</li>
                <li>Chronic anxiety that isn't always tied to external circumstances</li>
                <li>Irregular digestion (alternating constipation and loose stools)</li>
                <li>Bloating and gas, especially after meals</li>
                <li>Dry skin, dry hair, brittle nails</li>
                <li>Cold extremities and difficulty maintaining body temperature</li>
                <li>Racing thoughts and difficulty concentrating</li>
                <li>A restless energy that leaves you exhausted</li>
                <li>Weight loss or difficulty gaining weight despite eating</li>
              </ul>
            </div>
          </section>

          {/* Why Vata Goes Out of Balance */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Why Vata Goes Out of Balance in the Modern World
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Vata in excess is almost universal in modern life. The conditions that aggravate Vata are now the default: irregular schedules, constant stimulation, poor sleep, skipped meals, information overload, excessive travel, and the neurological stress of being perpetually reachable.
              </p>
              <p>
                For most people, Vata starts to go out of balance in their late twenties or thirties. For some, earlier. The pattern is predictable: you maintain it through willpower and stimulation (coffee, alcohol, screens) until one day the system just stops cooperating. You can't sleep no matter how tired you are. Your anxiety spikes without reason. Your digestion becomes unpredictable. You feel like you're running on fumes.
              </p>
              <p>
                This is Vata imbalance. And conventional medicine has no framework for it because blood work comes back normal. The system isn't technically broken — it's just running in the wrong mode.
              </p>
            </div>
          </section>

          {/* The Vata Protocol */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Vata Protocol: What Actually Works
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Sleep First</h3>
                <p>
                  Sleep is the foundation. For Vata, poor sleep creates a feedback loop: inadequate sleep aggravates Vata further, which makes sleep worse. Breaking this loop requires consistent early bedtime (10pm or earlier), warm oil on the feet before bed, and the removal of screens 1-2 hours before sleep. This is not optional if you're Vata.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Routine and Stability</h3>
                <p>
                  Vata needs rhythm. Wake at the same time every day. Eat at the same times. Do your movement practice at the same time. Go to bed at the same time. This consistency sends a signal to your nervous system that it is safe. After 3-4 weeks of consistency, you'll notice your anxiety beginning to quiet.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Food That Grounds</h3>
                <p>
                  Eat warm, cooked, grounding foods. Avoid raw, cold, and dry foods that increase Vata. Favor warm soups, stews, cooked grains, root vegetables, and warming spices (ginger, cinnamon, cumin). Eat at consistent times and don't skip meals — Vata needs consistent fuel to settle.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Oil and Touch</h3>
                <p>
                  Self-massage with warm oil (abhyanga) is one of the most powerful Vata-balancing practices. Even five minutes in the morning grounds the nervous system. Massage the feet, hands, and head with sesame or brahmi oil. This practice touches something deeper than the physical.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Reduce Stimulation</h3>
                <p>
                  This is the hardest part for most Vata people because stimulation is addictive. But reducing input — fewer news cycles, fewer podcasts, less scrolling, fewer meetings — is essential. The goal is not boredom; it's creating space for your nervous system to settle.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Herbs That Calm</h3>
                <p>
                  Ashwagandha for nervous system support and sleep. Brahmi for calming the mind. Triphala for gentle digestion. Sesame oil for grounding. These work best when used consistently over weeks, not as emergency measures.
                </p>
              </div>
            </div>
          </section>

          {/* The Timeline */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              What to Expect
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-foreground">Week 1-2:</strong> You'll probably feel worse before better. The routine and early bedtime might feel restrictive. Stick with it.
              </p>
              <p>
                <strong className="text-foreground">Week 3-4:</strong> Sleep will start to improve. You'll notice a slight reduction in daytime anxiety. Your digestion might shift — this is normal.
              </p>
              <p>
                <strong className="text-foreground">Month 2:</strong> The changes become more obvious. You're thinking more clearly. The anxiety has quieted noticeably. Your sleep is more reliable.
              </p>
              <p>
                <strong className="text-foreground">Month 3+:</strong> This is your new normal. The system has relearned how to rest. You understand your body in a different way. And you understand what happens when you stop — which gives you the choice to decide if it's worth it.
              </p>
            </div>
          </section>

          {/* What to Read Next */}
          <section className="border-t border-border pt-12">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Explore Related Topics
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <Link href="/blog/best-ayurvedic-tea-sleep" className="text-[#C97F3D] hover:underline font-medium">
                  Best Ayurvedic Tea for Sleep
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/best-herbs-for-anxiety" className="text-[#C97F3D] hover:underline font-medium">
                  Best Herbs for Anxiety
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/vata-anxiety-guide" className="text-[#C97F3D] hover:underline font-medium">
                  The Complete Guide to Vata Anxiety
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/ayurvedic-morning-routine" className="text-[#C97F3D] hover:underline font-medium">
                  Ayurvedic Morning Routine for Vata
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/pitta" className="text-[#C97F3D] hover:underline font-medium">
                  Pitta Dosha Guide
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/kapha" className="text-[#C97F3D] hover:underline font-medium">
                  Kapha Dosha Guide
                </Link>
              </p>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
