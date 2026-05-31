"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function RetreatDay1Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <ArticleHero
        title="Day 1: I Arrived Smelling Like Alcohol. The Doctor Noticed."
        category="journal"
        date="May 25, 2026"
        highlightWord="Day"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header removed - now using ArticleHero */}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Arriving at an Ayurvedic retreat in Kerala after years of anxiety, poor sleep, and unresolved addiction issues felt like stepping into a different world. The smell of incense and ghee replaced the smell of alcohol I&apos;d been carrying. Within hours of arrival, I was in a consultation with Dr. Anjali, who asked simple questions and listened without judgment.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The intake process.</h2>
            <p>
              The intake process included Abhyanga — a full-body oil massage that lasted 90 minutes. My nervous system, which had been in fight-or-flight for years, finally began to settle. The oil was warm, the hands were skilled, and something in me softened. I lay on the table while two practitioners worked in synchrony, pouring warm oil and using specific massage techniques that seemed designed to coax the tension out of muscles I didn&apos;t know were holding stress.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The doctor&apos;s observations.</h2>
            <p>
              Dr. Anjali took my pulse for what felt like a very long time. She asked about my sleep. I told her I wake at 3am most nights. She asked about my digestion. I told her it&apos;s unpredictable at best. She asked about my anxiety. I didn&apos;t have to answer — apparently it&apos;s written all over my nervous system. She asked about alcohol. I hesitated. She waited. I told her the truth: too much, too often, and in ways that have become concerning. She nodded. No judgment. Just information gathering.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What she said.</h2>
            <p>
              Her diagnosis was simple: I am deeply Vata imbalanced. Vata is the dosha of air and space — responsible for movement, nervous system function, and creative thought. Mine is off. Very off. Years of constant stimulation, poor sleep, anxiety, alcohol use, and irregular eating have depleted my Vata to a point where my whole system is dysregulated. The solution, she said, is not complicated. It is boring. Rest. Proper food. Regular rhythm. Specific treatments designed to rebuild the nervous system. Time.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Why I&apos;m here.</h2>
            <p>
              I came to this retreat because I couldn&apos;t fix this on my own. I&apos;ve tried every approach: supplements, meditation apps, therapy, cutting back on alcohol, going to the gym, implementing sleep routines. Nothing stuck. Or rather, something would work for a few weeks and then I&apos;d slip back into the same patterns. I would swear I was going to change, make it three days, and revert. The pattern was so established that breaking it seemed impossible without external intervention. So I got on a plane and flew to Kerala.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The first night.</h2>
            <p>
              I slept through the night. Not great sleep — I woke twice and noticed I woke — but I didn&apos;t stay awake ruminating for hours. This is notable. At home, a night where I fall back asleep is considered a victory. The room is quiet except for the sound of birds and the distant ocean. There is no WiFi in the rooms. There is very limited phone service. The world I left behind is not accessible. This feels both like relief and like drowning.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The reality check.</h2>
            <p>
              I am paying a lot of money to sit in a room in Kerala and do nothing. This feels absurd and obvious and necessary all at the same time. I should be working. I should be checking emails. I should be maintaining the relationships that are slipping because I am too anxious and overwhelmed to maintain them. Instead I am here. The logical part of my brain says this is indulgent. The part of me that hasn&apos;t slept through the night in years says: shut up, we&apos;re resting.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">This is where the real work begins.</h2>
            <p>
              Dr. Anjali said this at the end of our consultation. Not the massage. Not the breathing exercises. This — the two weeks of showing up, of submitting to a rhythm that is not mine, of letting go of the constant striving to optimize every moment, of not checking my phone compulsively, of eating when food is served instead of when I remember I haven&apos;t eaten in six hours. This is the work. My nervous system has been in overdrive for so long that rest itself is the medicine. So that&apos;s what I&apos;m here to learn: how to rest without guilt, and whether that rest can actually rebuild something that feels fundamentally broken.
            </p>
          </div>

          {/* Related Articles */}
          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Related Articles
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/blog/vata-dosha-guide" className="text-[#C97F3D] hover:underline">
                Understanding Vata Dosha
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/ayurvedic-sleep-hygiene" className="text-[#C97F3D] hover:underline">
                Ayurvedic Sleep Hygiene
              </Link>
            </p>
          </div>

          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Continue the Journey
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/quiz" className="text-[#C97F3D] hover:underline">
                Take the dosha quiz
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/journal" className="text-[#C97F3D] hover:underline">
                Read more from the retreat
              </Link>
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
