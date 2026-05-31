"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function RetreatDay5Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <ArticleHero
        title="Day 5: I Watched the NBA Finals at 6am, Got Poured Buttermilk on My Head, and Still Can't Turn My Brain Off"
        category="journal"
        date="May 29, 2026"
        highlightWord="Day"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header removed - now using ArticleHero */}

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Day five: 3.5 hours of sleep. I woke at 6am despite the painkillers and the melatonin and everything else I am throwing at the problem. The first thing I saw was the NBA Finals. I am not sure why. Maybe there is a TV in the common area and I wandered down there half-conscious. Anyway, I watched Golden State lose while sitting in a Kerala resort at 6am unable to stop my mind from running full-speed.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The yoga miracle.</h2>
            <p>
              Yoga at 7am. I have been to yoga, probably fifty times in my life. I have never experienced anything close to what happened this morning. My back, which has been seized since I was about nineteen, unlocked. Just completely released. Forty minutes of stretching and it was like my entire back had been waiting for permission to let go. The yoga teacher noticed. She called me over after class and gave me some adjustments — basically pressing hard into my lower back while I laid on the ground — and something shifted permanently. I have not had pain there in a decade. I have had numbness, weakness, the constant low-level awareness that my back is not okay. This morning: nothing. I am not sure if it is the yoga or the treatment or the lack of stress or the buttermilk I got poured on my head. Probably all of it.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Portion control revelation.</h2>
            <p>
              Lunch was smaller today. The doctor apparently wants me eating less — not restrictively, but just actually less than I normally eat. I grew up eating as much as I wanted as quickly as I wanted. Slowing down and eating smaller portions feels like deprivation. Except I tried it today and then did not feel the post-lunch crash. I felt clear. I could actually focus. I spent two hours working after lunch instead of lying down trying to digest. This is probably obvious to normal people. It is not obvious to me. The idea that eating less could result in more energy instead of less feels revolutionary.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The Takradhara treatment.</h2>
            <p>
              Takradhara is the treatment where the Ayurvedic practitioners pour buttermilk infused with herbs directly onto your forehead for about thirty minutes. It is one of the most intense treatments I have done here. Your system calms down completely during it. The buttermilk is cool, the motion is hypnotic, and something about the specific location on the forehead — apparently where the third eye is — creates an effect that is hard to describe. I came out of it feeling more coherent than I have in days. The practitioner said it is specifically for the kind of mind that will not turn off. The kind that stays awake at 3am. The kind that watched the NBA Finals at 6am. She was not wrong.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The sound bath paradox.</h2>
            <p>
              There was a sound bath this afternoon. I laid down on the floor with everyone else while a woman played crystal bowls and singing bowls. For the first twenty minutes nothing happened. My mind was still running. Then something shifted around minute twenty and I felt my body get heavier and heavier. It was like gravity increased. My head felt like it weighed three hundred pounds. My chest, my arms, my legs — all heavy. But from the shoulders up, my mind was still absolutely awake and thinking. So I experienced this strange dissociation: a body that was completely asleep and a mind that was completely awake. It was peaceful and deeply unsettling at the same time.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The 3am laptop incident.</h2>
            <p>
              At 3am I was awake again (despite everything) and I opened my laptop. This is apparently the exact moment I was supposed to avoid. The doctor had specifically said: do not stimulate your mind at night. The light, the work, the engagement — all of it tells the nervous system that waking at 3am is the correct choice. I worked for about an hour. Then I closed the laptop and felt the weight of the mistake. It is not judgment. It is just clarity: I am choosing the thing that makes sleep impossible and then wondering why I cannot sleep.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Chest anxiety without the pills.</h2>
            <p>
              I noticed something today: I have been off Klonopin (the anxiety medication I took for years) for a week. And I have not had the usual chest anxiety. There have been moments of mental intensity, yes. The racing thoughts, the inability to turn it off. But the physical chest tightness that usually accompanies anxiety has not shown up. I am not sure what to attribute this to. The treatments, the rest, the smaller meals, the lack of alcohol, the yoga, the being away from my normal life. Probably all of it. But it is notable enough that it has me wondering if the physical anxiety was actually just a response to the constant running-at-capacity thing that was happening.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Instagram FOMO and the retreat paradox.</h2>
            <p>
              I saw someone&apos;s Instagram story of them at a dinner in New York. Outdoor seating, wine, the whole thing. Part of me wanted to be there. I am here in Kerala at an Ayurvedic retreat being cured of the nervous system dysregulation that was making me unable to enjoy anything, and I am experiencing FOMO about being at a dinner in New York. The absurdity of that is not lost on me. I am here specifically because I could not turn my mind off. Seeing that someone is having an experience I am not having triggers exactly that: mind on, ruminating, comparing, the whole cycle.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The ask for four hours.</h2>
            <p>
              I asked the doctor this evening for one thing: four hours of sleep. Not eight. Not perfect. Just four continuous hours where my mind turned off and my body slept. She smiled and said: that is a reasonable ask. We will get you there. I believe her, which is its own kind of shift from where I was a week ago.
            </p>
          </div>

          {/* Related Articles */}
          <hr className="border-border my-12" />

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
            Related Articles
          </h2>

          <div className="space-y-3">
            <p className="text-muted-foreground">
              <Link href="/blog/best-ayurvedic-tea-sleep" className="text-[#C97F3D] hover:underline">
                Best Ayurvedic Tea for Sleep
              </Link>
            </p>
            <p className="text-muted-foreground">
              <Link href="/blog/vata-anxiety-guide" className="text-[#C97F3D] hover:underline">
                The Complete Guide to Vata Anxiety
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
