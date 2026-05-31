"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function RetreatDay4Page() {
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
              <span className="text-sm text-muted-foreground">Ayurvedic Retreat, Day 4</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-4">
              The Doctor Told Me to Stop Moving
            </h1>
            <time className="text-muted-foreground">May 28, 2026</time>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Day four. The doctor sat across from me this morning, took my pulse for about two minutes — which is longer than you think when someone is doing it in total silence — and then said: you need to stop moving. Not exercise. Not your schedule. Everything. You are Vata through and through and you have been running at a pace that has depleted your nervous system reserves to a point where adding more activity is making things worse, not better.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The diagnosis.</h2>
            <p>
              My pulse, apparently, tells a story. Ayurvedic pulse diagnosis — nadi pariksha — is one of the more remarkable things I have encountered here. The practitioner reads three positions on the wrist, each corresponding to a different dosha, and describes back to you things about your health that they could not have known from observation. She described my digestion, my sleep patterns, my anxiety pattern, and my tendency to override tiredness with stimulation — all from pulse. I sat there feeling slightly exposed. She was not wrong about any of it. The prescription: rest. Genuine rest. Not productive rest. Not optimised rest. The kind of rest where you are not mentally running a to-do list.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What rest actually means here.</h2>
            <p>
              What rest actually means here is different from what I thought. It is not lying in bed scrolling. It is not watching something. It is sitting somewhere quietly, ideally outside, without a device, and letting the nervous system do what it apparently desperately needs to do: nothing. I tried this for about forty minutes this afternoon. It was uncomfortable for the first twenty. Then something shifted. I am not sure what to call it. Quiet, maybe. Not the absence of noise — there is plenty of that here, birds and the constant hum of Kerala — but the absence of the internal noise I have been carrying around so long I had stopped noticing it.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The treatments.</h2>
            <p>
              Two treatments today. The morning treatment was Abhyanga — the full-body warm oil massage I described earlier in the week, but today with a different quality to it. The practitioners work in silence and in synchrony, and there is a point about forty minutes in where the body simply surrenders the tension it has been holding. I have never experienced anything quite like it. The afternoon treatment was a herbal steam — Swedana — where I sat in a wooden cabinet with my head sticking out the top while steam infused with medicinal herbs filled the space around my body. I sweated more than I thought was possible. Walked out feeling simultaneously exhausted and clean in a way that is hard to describe.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What I am learning.</h2>
            <p>
              What I am learning, slowly: the pace I have been living at is not sustainable. This is not a revelation — I have suspected it for years. What is different here is that the evidence is physiological. My pulse says it. My sleep says it. The fact that a week of reduced activity and increased rest has produced more recovery than months of my normal routine says it. I came here to fix specific things. Sleep, anxiety, the relationship with alcohol. What I am finding is that these things are not separate problems with separate solutions. They are the same problem — a nervous system that has been running beyond its capacity for a long time — with one solution: slow down, consistently, for long enough that the reserves actually rebuild. That is not a two-week fix. But two weeks is apparently enough to understand what the fix looks like.
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
