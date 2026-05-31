"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function RetreatDay3Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Article Content */}
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-medium text-[#C97F3D]">Alex</span>
              <span className="text-sm text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">Ayurvedic Retreat, Day 3</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
              Day 3: My Body Is Detoxing, My Mood Is a Ping Pong Ball, and I Hit 15,000 Steps
            </h1>
            <time className="text-muted-foreground">May 27, 2026</time>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Day three. I woke up this morning having slept eight hours straight. This doesn&apos;t sound unusual unless you are me and the last time you slept eight hours straight without waking at 3am in a panic was probably 2018. My resting heart rate was 74. This is not normal for me either. Most mornings it is somewhere between 82 and 95. The nervous system is already responding.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The sleep finally came.</h2>
            <p>
              Eight hours of actual sleep creates a clarity that had been missing for so long I had stopped remembering what it felt like. This morning the anxiety that usually greets me with my coffee didn&apos;t show up. I woke up and I felt... okay. Not excited, not energized, but okay. Neutral. The baseline of okayness that most people probably take for granted and that I had functionally not experienced in years. I laid in bed for maybe twenty minutes just noticing the absence of the thing that usually wakes me up: the mind already running, the sense of urgency about nothing in particular, the pre-dawn anxiety spiral.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The less glamorous news.</h2>
            <p>
              And then my digestive system staged a full revolt. I had probably eaten too much at dinner — partly because the food here is genuinely good and partly because for ten years I have been using eating as something to do when I am bored or avoiding feelings. The alcohol is gone so the void where the drinking used to be has to be filled with something. Yesterday I filled it with food. My system did not appreciate this.
            </p>

            <p>
              The doctor explained that this is part of the detox process. The body is settling enough to start clearing out accumulated... something. The Ayurvedic term is ama — the buildup of undigested material and toxins that accumulates when digestion is compromised, which mine has been for basically my entire adult life. The gut is waking up and trying to move things through. This is apparently a good sign. It doesn&apos;t feel like a good sign at the moment.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">On mood.</h2>
            <p>
              My mood today has been a ping pong ball. This morning: okay, grounded, almost content. By midday: questioning every major life decision I&apos;ve made. This afternoon: euphoric, convinced that I have figured out everything, that the problem with my life was just that I needed to rest. Now at evening: back to the questioning everything.
            </p>

            <p>
              The woman who runs the retreat explained that this is also normal. The nervous system is detoxifying. As the acute stress chemicals clear and the mind quiets down, suppressed emotions start moving through. I spent ten years running from myself at high speed. As that slows down, I am starting to catch up to myself. The mood swings will settle. This is the system processing.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Today&apos;s highlight: Shirodhara.</h2>
            <p>
              Shirodhara is the treatment where warm oil is poured slowly onto your forehead in a continuous stream for about 45 minutes. It sounds strange. It sounds like the kind of thing that would be unpleasant. It is the opposite of unpleasant.
            </p>

            <p>
              The oil temperature is exactly skin temperature. The rhythm is hypnotic. About five minutes in the nervous system stops trying to figure out what is happening and just surrenders to it. Somewhere in the middle I experienced what I can only describe as a complete absence of thought. Not meditation — I was not meditating. Just a blank. A moment where the constant internal monologue that has been running for 40 years simply... stopped. I have never experienced anything like it. When it finished I couldn&apos;t remember if 45 minutes had passed or two hours.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The medicinal plant tour.</h2>
            <p>
              This afternoon I walked through the gardens with one of the practitioners and she identified the plants they use in the treatments. Brahmi, ashwagandha, tulsi, brahmi, gotu kola, bhringraj. Most of these I have heard about or read about in the context of building DoshaFlow. Seeing the actual plants, knowing what they are being used for, understanding that DoshaFlow is going to recommend these same herbs to people — it was grounding. Like the abstract idea of what I was trying to build suddenly became concrete and present.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The numbers.</h2>
            <p>
              Resting heart rate: 74 (down from baseline average of 88). Sleep hours: 8 (perfect). Steps: 15,462 (they gave me a fitness tracker). Mood swings: too many to count. Existential crises: 2. Moments of genuine peace: maybe 5. Treatments today: 2 (abhyanga and shirodhara). Glasses of water: too many. Days left at the retreat: 8. Days until I have to figure out if any of this actually sticks when I go back to my life: 8. Fear level: moderate.
            </p>
          </div>

          {/* Related Articles */}
          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Related Articles
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/blog/signs-of-high-cortisol" className="text-[#C97F3D] hover:underline">
                Signs of High Cortisol
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/best-herbs-for-anxiety" className="text-[#C97F3D] hover:underline">
                Best Herbs for Anxiety
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
