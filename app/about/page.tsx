import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Story - DoshaFlow",
  description: "On the other side of addiction, burnout, and years of feeling like life was passing me by — I found a system that actually made sense for my body.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-saffron mb-4">
              My Story
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-bark leading-tight text-balance">
              I didn&apos;t find Ayurveda.{" "}
              <span className="italic text-saffron">It found me.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed">
              On the other side of addiction, burnout, and years of feeling like life was passing me by — I found a system that actually made sense for my body.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="pb-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Opening */}
              <p className="text-bark-light leading-relaxed text-lg">
                My name is Alex. I&apos;m 36, I live in Los Angeles, and for a long time I was the last person you&apos;d expect to be talking about wellness.
              </p>

              {/* The Struggle */}
              <p className="text-bark-light leading-relaxed text-lg mt-6">
                For most of my twenties and into my thirties, I was what you might call &quot;functionally struggling.&quot; On the surface, things looked fine — I had a career, friends, a social life. But underneath, I was drowning. Alcohol had become a crutch. My sleep was terrible — either I couldn&apos;t fall asleep or I&apos;d wake up at 3am with a racing mind. My diet was whatever was fast and convenient. Anxiety hummed in the background of everything I did, and depression would roll in like fog, sometimes for days at a time.
              </p>
              <p className="text-bark-light leading-relaxed text-lg mt-6">
                I was burning out at work, burning out at home, burning out on myself. Functional on the surface, but feeling like a passenger in my own life.
              </p>

              {/* Pull Quote */}
              <blockquote className="my-10 border-l-4 border-saffron pl-6 py-2">
                <p className="text-xl sm:text-2xl font-serif text-bark italic leading-relaxed">
                  I had this feeling that life was passing me by. Not because nothing was happening — but because I wasn&apos;t really there for any of it.
                </p>
              </blockquote>

              {/* Trying Solutions */}
              <p className="text-bark-light leading-relaxed text-lg">
                I tried a lot of things. Therapy helped me understand my patterns, but didn&apos;t change my body. Exercise made me feel better temporarily, but I couldn&apos;t stick with it. Diets came and went — keto, paleo, intermittent fasting — each one promising transformation, each one leaving me feeling like I&apos;d failed when it didn&apos;t stick.
              </p>
              <p className="text-bark-light leading-relaxed text-lg mt-6">
                Nothing felt like a system built for me. Everything felt like I was forcing myself into someone else&apos;s mold.
              </p>

              {/* Discovering Ayurveda */}
              <h2 className="font-serif text-2xl sm:text-3xl text-bark mt-12 mb-6">
                A Different Kind of Recognition
              </h2>
              <p className="text-bark-light leading-relaxed text-lg">
                I discovered Ayurveda sideways — not through a guru or a retreat, but through a friend who mentioned something about &quot;doshas&quot; over dinner. I went home and started reading, skeptically at first. Another wellness trend? Another promise?
              </p>
              <p className="text-bark-light leading-relaxed text-lg mt-6">
                But something was different. For the first time, I felt recognized. Here was a 5,000-year-old system that didn&apos;t try to fit me into a universal plan. It started with a simple question: what&apos;s your individual nature? Not &quot;what works for everyone&quot; — but &quot;what works for you, specifically, based on who you are.&quot;
              </p>

              {/* Identifying as Vata */}
              <h2 className="font-serif text-2xl sm:text-3xl text-bark mt-12 mb-6">
                Understanding My Vata Nature
              </h2>
              <p className="text-bark-light leading-relaxed text-lg">
                When I took my first dosha assessment and came up as primarily Vata, everything clicked. Vata is the air and ether dosha — creative, quick-thinking, prone to movement and change. When balanced, Vata types are visionary and adaptable. When out of balance, we&apos;re anxious, scattered, and depleted.
              </p>
              <p className="text-bark-light leading-relaxed text-lg mt-6">
                Suddenly, my whole life made sense. The restless sleep? Classic Vata imbalance. The cold hands and feet? Vata. The anxiety that felt like wind rattling through an empty house? Vata. The way I&apos;d bounce from idea to idea, project to project, never quite landing? Vata.
              </p>
              <p className="text-bark-light leading-relaxed text-lg mt-6">
                And then I learned what balances Vata: warmth, grounding, routine, nourishing foods. The opposite of my chaotic, cold, irregular lifestyle.
              </p>

              {/* The Changes */}
              <h2 className="font-serif text-2xl sm:text-3xl text-bark mt-12 mb-6">
                Small Shifts, Deep Changes
              </h2>
              <p className="text-bark-light leading-relaxed text-lg">
                The changes I made were gradual. Warm oil self-massage in the morning — it sounds strange until you try it and feel your nervous system exhale. Consistent mealtimes instead of eating whenever I remembered. Warm, grounding foods instead of cold salads and raw juices that were aggravating my already-airy system.
              </p>
              <p className="text-bark-light leading-relaxed text-lg mt-6">
                I reduced alcohol not through willpower or white-knuckling it, but by understanding what it was doing to my nervous system — how it was destabilizing an already-unstable Vata constitution. Once I understood the mechanism, the choice became easier.
              </p>
              <p className="text-bark-light leading-relaxed text-lg mt-6">
                The results came slowly, then all at once. Steadier sleep. Calmer mornings. A quieter mind. I started actually being present for my own life.
              </p>

              {/* Current Update - Green Callout */}
              <div className="my-10 bg-sage-light border border-sage/30 rounded-2xl p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-sage mb-3">
                  Right now — May 2026
                </p>
                <p className="text-bark-light leading-relaxed">
                  I&apos;m in the middle of a two-week Ayurvedic retreat — deepening my practice, studying with teachers, and documenting everything. This blog is my attempt to share that journey in real time.
                </p>
              </div>

              {/* What DoshaFlow Is */}
              <h2 className="font-serif text-2xl sm:text-3xl text-bark mt-12 mb-6">
                Why I Built DoshaFlow
              </h2>
              <p className="text-bark-light leading-relaxed text-lg">
                DoshaFlow is what I wished had existed when I started this journey. It&apos;s dosha-based nutrition that actually makes sense. Grounding movement practices tailored to your constitution. Herbal blends, oils, and rituals that restore rather than distract.
              </p>
              <p className="text-bark-light leading-relaxed text-lg mt-6">
                I&apos;m not a guru. I&apos;m not a doctor. I&apos;m someone who was struggling and found something that worked — and now I want to make it accessible to others who might be in that same place.
              </p>

              {/* Closing */}
              <p className="text-bark leading-relaxed text-xl font-medium mt-12 border-t border-sand pt-10">
                If any part of what I&apos;ve described sounds familiar — the fog, the feeling that you&apos;re not quite showing up for your own life — I built this for you.
              </p>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-sand-light py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-bark">
              Find your dosha. Find your flow.
            </h2>
            <p className="mt-4 text-muted text-lg">
              Start your journey to understanding your unique constitution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-full bg-saffron px-8 py-3 text-base font-medium text-white hover:bg-saffron-dark transition-colors"
              >
                Take the Dosha Quiz
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full border-2 border-bark px-8 py-3 text-base font-medium text-bark hover:bg-bark hover:text-cream transition-colors"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
