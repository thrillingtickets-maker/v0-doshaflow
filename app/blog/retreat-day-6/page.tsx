"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function RetreatDay6Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <ArticleHero
        title="Day 6: The Enema, the Standoff, and the Temple Behind the Bodega"
        category="journal"
        date="May 30, 2026"
        highlightWord="Day"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header removed - now using ArticleHero */}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Day six: 1.5 hours of sleep. This is not progress. This is regression. I woke at 2am, stayed awake until roughly 4am, then managed to fall back asleep for about ninety minutes before the day started. The treatments are working on everything except the one thing: sleep. The back is better. The mind is quieter. The digestion is clearer. The anxiety is manageable without pills. But the sleep remains elusive.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The treatment refusal.</h2>
            <p>
              The 11am slot was going to be a colon-cleansing treatment. An enema, basically. I had done other intense treatments but something in me said no this morning. I told the doctor I was not doing it. She was supportive, which I appreciated, but it highlighted something: I am still, even here, pushing through discomfort instead of listening to what my body is actually telling me. So I skipped the treatment. I walked away from the treatment center. I sat by the water. I did nothing for a few hours.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The standoff.</h2>
            <p>
              The doctor was off duty this afternoon. She is one person managing the retreat and she apparently needed a day off. I understand. But I felt abandoned in the worst way. I had become dependent on her guidance and her presence, and suddenly she was gone. The treatments continued. The meals happened. But without her there to tell me what to do, I felt lost. I realized how much of this retreat for me has been about an authority figure saying: do this, do that, your body is responding this way because of these patterns. Without that voice, I defaulted to my normal patterns. I tried to optimize. I tried to do things that would help me sleep. All the stuff that makes sleep impossible.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The temple behind the bodega.</h2>
            <p>
              After skipping the treatment, I walked into the town near the resort. I met a man from Saudi Arabia who was working here as an engineer. He asked if I wanted to get dinner. We walked around for a while, and then he said: I want to show you something. He took me to this tiny street behind what looked like a convenience store — a bodega, really — and there was a temple. A real temple, tucked back there, maybe ten feet by ten feet, with an altar and flowers and incense. We went inside. We sat. We did not talk. After maybe ten minutes, we left and went to get dinner with his mother.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Dinner and connection.</h2>
            <p>
              His mother was warm and immediately parental in the way Indian mothers seem to be. She asked me about my life, my family, where I was from. We talked about work and stress and the pace of modern life. She had had a stroke a few years ago. She was now in Kerala doing Ayurvedic recovery. She said the first three weeks were the hardest because everything was unfamiliar and the body was resistant. But after that, something shifts. Your body begins to trust that you are taking care of it. The mind quiets down. The healing starts.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The weight loss I cannot explain.</h2>
            <p>
              I weighed myself this morning. I have lost a kilo in five days. Not from restriction or exercise. From smaller portions, from rest, from the absence of alcohol and constant stimulation and the eating-because-I-am-anxious pattern. One kilo is not that much. But it is concrete evidence that something about how I have been living is being recalibrated at the most basic level.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Anxiety about leaving.</h2>
            <p>
              I leave in eight days. Part of me wants to already be gone. Part of me is terrified of leaving. The system here works. The pace works. The combination of treatments and rest and proper food and reduced stimulation works. I will leave and go back to my life. I know what happens when I go back to my life. I know how quickly I revert. The question is whether eight more days of this can create enough of a shift in my nervous system that the patterns are actually different when I leave. Or whether I am just going to be the same person in a different place, and all of this will have been a temporary respite from the usual.
            </p>
          </div>

          {/* Related Articles */}
          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Related Articles
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/blog/digestive-agni-fire" className="text-[#C97F3D] hover:underline">
                Digestive Agni: The Core Principle of Ayurvedic Nutrition
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/stress-response-system" className="text-[#C97F3D] hover:underline">
                Your Stress Response System
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
