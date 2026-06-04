"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#C97F3D]/10 text-[#C97F3D] text-xs font-medium tracking-widest uppercase rounded-full mb-6">
            My Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Back in Los Angeles — June 2026, retreat is done
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I didn&apos;t find Ayurveda. It found me. On the other side of addiction, burnout, and years of feeling like life was passing me by — I found a system that actually made sense for my body.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* Opening */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-foreground">
              My name is Alex. I&apos;m 36, I live in Los Angeles, and for a long time I was the last person you&apos;d expect to be talking about wellness.
            </p>
          </div>

          {/* The Struggle */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              For years, I struggled with alcohol abuse. Poor sleep was my constant companion. My diet was terrible — convenient, processed, whatever required the least effort. Anxiety and depression weren&apos;t occasional visitors; they had moved in permanently.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              On the surface, I was functional. I showed up to work. I maintained friendships. I did what was expected. But underneath all of that, I felt like a passenger in my own life — like life was passing me by and I was just watching it happen through a fog.
            </p>
          </div>

          {/* Pull Quote */}
          <blockquote className="border-l-4 border-[#C97F3D] pl-6 py-4 my-16">
            <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed">
              "I had this feeling that life was passing me by. Not because nothing was happening — but because I wasn't really there for any of it."
            </p>
          </blockquote>

          {/* Trying Things */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I tried a lot of things over the years. Therapy helped me understand my patterns, but didn&apos;t always give me the tools to change them. Exercise came in bursts — intense motivation followed by weeks of nothing. I cycled through diets: keto, intermittent fasting, whole30. Each one promised a reset, and each one eventually faded.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nothing felt like it was built for me specifically. Everything felt like a universal plan I was supposed to force myself into.
            </p>
          </div>

          {/* Discovering Ayurveda */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I discovered Ayurveda sideways — through a friend who mentioned it casually, a podcast episode I half-listened to, a book I picked up on a whim. At first, it seemed too ancient, too esoteric. A 5,000-year-old system from India? How could that possibly be relevant to my life in LA in 2024?
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              But the more I learned, the more I felt something I hadn&apos;t felt before: recognized. Ayurveda wasn&apos;t asking me to follow a universal plan. It was asking me to understand my individual nature — and then work with it, not against it.
            </p>
          </div>

          {/* Identifying as Vata */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              When I learned about the doshas, everything clicked. I&apos;m Vata — creative, energetic, prone to anxiety when out of balance. The description read like a biography: the restless sleep, the racing thoughts, the cold hands and feet, the tendency to skip meals and then wonder why I felt scattered.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              For the first time, I understood why certain things worked for other people but never worked for me. And I understood what might actually help: warm, grounding foods. Consistent routines. Calming practices. Everything I&apos;d been doing was exactly wrong for my constitution.
            </p>
          </div>

          {/* The Changes */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              The changes were gradual. I started with warm oil massage in the mornings — just five minutes, but it grounded me in a way coffee never had. I began eating at consistent times, favoring warm, cooked foods over raw salads and cold smoothies. I reduced alcohol not through willpower or white-knuckling, but by understanding what it was doing to my nervous system. It wasn&apos;t helping me relax; it was shattering my already fragile equilibrium.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sleep came easier. Mornings got calmer. The fog started to lift. I wasn&apos;t just surviving my days — I was actually present for them.
            </p>
          </div>

          {/* Green Callout Card */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 my-16">
            <p className="text-sm font-medium uppercase tracking-wide text-primary mb-3">
              What I&apos;m Documenting Right Now
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-4">
              I spent the last 11 days at an Ayurvedic retreat in India exploring nervous system recovery, burnout, sleep, digestion, and modern overstimulation through an Ayurvedic lens. The daily journal documents everything — the treatments, the insights, the sadness, the cravings, the moments of real clarity.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              DoshaFlow is what I wished had existed when I started this journey. It is dosha-based nutrition that actually tastes good. Grounding movement that does not require a gym membership. Herbal recommendations, daily rituals, and practical protocols that fit into a real life.
            </p>
          </div>

          {/* What DoshaFlow Is */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I&apos;m not a guru. I&apos;m not a doctor. I&apos;m someone who was struggling and found something that worked — and I want to make it accessible to others who might be where I was.
            </p>
          </div>

          {/* Closing */}
          <div className="mb-16">
            <p className="text-xl leading-relaxed text-foreground font-medium">
              If any part of what I&apos;ve described sounds familiar — the fog, the feeling that you&apos;re not quite showing up for your own life — I built this for you.
            </p>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-8">
            Find your dosha. Find your flow.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quiz"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#C97F3D] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C97F3D]/20"
            >
              Take the Dosha Quiz
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-medium rounded-full transition-all duration-300 hover:border-foreground/40"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
