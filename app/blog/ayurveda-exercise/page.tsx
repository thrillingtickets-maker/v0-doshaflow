"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function AyurvediaExercisePage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Why Working Out the Same Way Every Day Is Making You Worse (According to Ayurveda)"
        category="article"
        date="May 29, 2026"
        highlightWord="Workout"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Most fitness advice treats exercise as a universal input. Move more. Get your heart rate up. Lift heavier. Be consistent. The assumption underneath all of it is that the same program, applied consistently, will produce the same results in every body. Ayurveda thinks this is one of the more significant mistakes in modern health culture. And once you understand the reasoning, the idea of a one-size-fits-all workout starts to look genuinely strange.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The Ayurvedic view of exercise.</h2>
            <p>
              The classical term is Vyayama — physical exertion undertaken for health. Ayurveda does not oppose exercise. What it opposes is unconscious exercise — the same intensity, same type, same timing, applied without regard to constitution, season, or current state. The core principle: exercise should enhance your agni (digestive fire), strengthen your body, and balance your dosha. Exercise that depletes your nervous system, dries out your tissues, overheats you, or exhausts you to a point that takes days to recover from is not considered health-promoting regardless of the caloric output. The Charaka Samhita recommends exercising to half your capacity — what it calls Ardhashakti — as a general principle. Not to your maximum. To the point where you are warm, slightly breathless, and energised, not flattened.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What each dosha actually needs.</h2>
            <p>
              Vata (air and ether — light, cold, dry, irregular) is the dosha most damaged by high-intensity exercise. Vata types often love intense movement because it gives them a temporary feeling of groundedness. But the very qualities that make intense exercise feel good for Vata are the qualities that destabilise them afterwards. What Vata actually needs: slow, grounding, rhythmic movement. Walking in nature is the single best exercise for Vata. Gentle yoga, swimming, tai chi. Consistency of timing matters more than intensity. Pitta (fire and water — hot, sharp, competitive) is the dosha most likely to over-exercise. Pitta types are driven and prone to turning workouts into competitions. They push through pain, ignore recovery, and can end up injured and burned out while still hitting their numbers. What Pitta actually needs: moderate intensity with a cooling component. Swimming is ideal. Cycling, hiking in cool weather, moderate weight training. Pitta should avoid exercising in midday heat and avoid hot yoga. Kapha (earth and water — heavy, slow, steady) is the dosha that most needs to be pushed. Kapha genuinely benefits from intensity. Vigorous movement in the morning before breakfast is one of the most effective things a Kapha type can do. What Kapha actually needs: vigorous, varied, and ideally social exercise. Running, HIIT, aerobics, dance, team sports. The key is doing it before 10am and making it consistent.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The timing question.</h2>
            <p>
              The optimal window for most people is 6am to 10am — Kapha time. The body is naturally inclined toward movement, digestion is not yet fully engaged with a heavy meal, and the energy of the morning supports effort. Pitta time (10am to 2pm) is not ideal for intense exercise — the body is already hot. Evening exercise after 6pm, particularly intense exercise, is generally cautioned against for all doshas. It elevates cortisol at a time when the body is preparing to wind down, and is one of the more consistent contributors to poor sleep.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The recovery piece.</h2>
            <p>
              Ayurveda is as interested in recovery as it is in exertion. Abhyanga — the daily self-oil-massage — is partly a recovery tool: warm oil applied to the muscles after exercise reduces Vata aggravation, supports the nervous system, and maintains the moisture in tissues that intense movement depletes. Rest is not optional in this system. Particularly for Vata, the period after exercise is as important as the exercise itself.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What to actually do with this.</h2>
            <p>
              If you are Vata and you have been pushing through intense workouts while exhausted, sleeping badly, and feeling wired but tired: stop. Swap two of your weekly sessions for walks or gentle yoga. See what happens to your sleep and anxiety within a week. If you are Pitta and you have not taken a rest day without guilt in the last month: take one. Your performance will not decrease. Your inflammation probably will. If you are Kapha and you have been telling yourself you will start tomorrow: the morning is already here. Fifteen minutes of vigorous movement before breakfast. That is the entry point.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12 mb-12">
            <Link
              href="/quiz"
              className="inline-block px-6 py-3 bg-[#C97F3D] text-white font-semibold rounded hover:bg-[#B86F2D] transition-colors"
            >
              Take the Free Dosha Quiz
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
