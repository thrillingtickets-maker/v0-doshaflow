import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kapha Dosha Guide: Weight, Fatigue & Motivation | DoshaFlow",
  description: "Understanding Kapha dosha — what it is, how it manifests, and the practical protocols for Kapha balance. Weight, lethargy, stagnation, and nervous system recovery.",
  alternates: { canonical: "https://www.doshaflow.com/kapha" },
  openGraph: {
    title: "Kapha Dosha Guide: Weight, Fatigue & Motivation | DoshaFlow",
    description: "Understand Kapha dosha — the causes of weight gain, fatigue, and stagnation. Stimulating foods, movement protocols, and herbs to restore energy and clarity.",
    type: "article",
    url: "https://www.doshaflow.com/kapha",
  },
}

export const dynamic = 'force-dynamic'

export default function KaphaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#C97F3D]/10 text-[#C97F3D] text-xs font-medium tracking-widest uppercase rounded-full mb-6">
            Kapha Dosha
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            You keep telling yourself you need more discipline. But the issue isn't laziness.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            It's stagnation. It's heaviness. It's your system asking for movement, not motivation.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-24">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* What Kapha Actually Feels Like */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              What Kapha Actually Feels Like
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Kapha is the dosha of earth and water. It governs structure, stability, and nourishment. When Kapha is balanced, you are grounded, patient, compassionate, and reliable. When Kapha becomes aggravated, you become stuck.
              </p>
              <p>
                If you're Kapha, you have a naturally calm demeanor. You're reliable. People trust you. You're a good listener and a loyal friend. You don't get reactive easily. You can handle slow, steady progress without needing constant external validation.
              </p>
              <p>
                The problem is that this same steadiness can become inertia. Moving becomes harder than staying still. You sleep longer than you need to. You eat beyond fullness because food feels comforting. Your body becomes heavy. Your mind becomes foggy. Tasks feel overwhelming even when they're small. Everything requires more effort than it should. You tell yourself you're lazy, but you're actually stuck in stagnation.
              </p>
            </div>
          </section>

          {/* The Physical Signs */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Physical Signs of Kapha Imbalance
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <ul className="list-disc pl-6 space-y-2">
                <li>Weight gain or difficulty losing weight</li>
                <li>Water retention and puffiness</li>
                <li>Lethargy and low energy despite adequate sleep</li>
                <li>Excessive sleep (oversleeping and still feeling tired)</li>
                <li>Brain fog and difficulty thinking clearly</li>
                <li>Depression, low mood, or lack of motivation</li>
                <li>Slow digestion and weight gain after meals</li>
                <li>Congestion, sinus problems, or mucus</li>
                <li>Oily skin or acne</li>
                <li>Attachment to comfort and resistance to change</li>
              </ul>
            </div>
          </section>

          {/* Why Kapha Goes Out of Balance */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Why Kapha Goes Out of Balance in the Modern World
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Kapha imbalance is becoming epidemic, and not for the reasons we think. It's not about willpower or discipline. It's about the modern environment: sedentary work, comfort-driven culture, easy access to heavy and sweet foods, climate-controlled spaces without stimulation, and a general reduction in the natural movement and seasonal variation that historically kept Kapha regulated.
              </p>
              <p>
                For Kapha, stagnation feeds on itself. A little less movement leads to a little more weight, which leads to a little less motivation to move, which leads to more stagnation. The feedback loop is relentless. And because Kapha is naturally patient and accepting, you adjust to the heaviness instead of addressing it.
              </p>
              <p>
                The result is a quiet suffering: you're functional but not thriving, moving but not energized, eating but not nourished. And no amount of willpower or diet changes will resolve this if the underlying Kapha stagnation isn't addressed.
              </p>
            </div>
          </section>

          {/* The Kapha Protocol */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Kapha Protocol: What Actually Works
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Movement First</h3>
                <p>
                  The primary intervention for Kapha is movement. Not gentle, not slow — vigorous, consistent movement. This doesn't mean intense exercise necessarily, but it means regularly raising your heart rate, breaking a sweat, and stimulating your metabolism. Walking, running, dancing, weight training, swimming — anything that gets the stagnant energy moving. This is non-negotiable for Kapha balance.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Stimulation and Heat</h3>
                <p>
                  Kapha needs warming and stimulation. Warm water, hot showers, saunas. Spices in food (ginger, black pepper, cayenne, chili). Stimulating activities. Exposure to sun and warmth. The goal is to activate what has become sluggish. This is the opposite of what Vata and Pitta need.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Food That Activates</h3>
                <p>
                  Eat light, warming foods: mung beans, lentils, vegetables (especially cooked), whole grains, warming spices. Reduce heavy, sweet, oily foods. Don't eat when you're not hungry. Eat smaller portions at more regular intervals. Avoid dairy and cold foods. Focus on foods that activate digestion, not comfort foods that pile on weight.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Wake Early and Stay Stimulated</h3>
                <p>
                  Kapha wakes groggy and wants to sleep longer. Wake early (before 6am) and do something stimulating immediately. Don't give yourself the option to go back to bed. Cold shower. Vigorous exercise. Stimulating activities. This one shift — consistent early waking — is transformative for Kapha.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Break the Comfort Cycle</h3>
                <p>
                  Kapha becomes trapped in comfort: comfort food, comfortable clothes, comfortable routines, comfortable social circles. Breaking this requires intentional exposure to new and slightly challenging experiences. Travel, new hobbies, new people, new movement patterns. Not in a way that creates anxiety, but in a way that prevents calcification.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Stimulating Herbs</h3>
                <p>
                  Guggul for metabolism and weight management. Garcinia for appetite regulation. Triphala for gentle digestive activation. Ginger and black pepper for warming. These herbs work best when combined with movement and lifestyle changes — they support, but don't replace, the need for physical activation.
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
                <strong className="text-foreground">Week 1-2:</strong> Movement will be hard. Your body will resist. Push through this. Early waking will feel unnatural. Stick with it anyway.
              </p>
              <p>
                <strong className="text-foreground">Week 3-4:</strong> You'll notice a slight increase in morning energy. Digestion will improve. You won't feel quite so heavy after meals.
              </p>
              <p>
                <strong className="text-foreground">Month 2:</strong> The fog will begin to lift. You'll have more clarity and mental energy. Movement will feel easier, less forced.
              </p>
              <p>
                <strong className="text-foreground">Month 3+:</strong> Weight will begin to shift. More importantly, you'll feel lighter internally — more energetic, more motivated, more present. And you'll understand that maintaining this requires ongoing commitment to movement and stimulation.
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
                <Link href="/blog/kapha-weight-loss-guide" className="text-[#C97F3D] hover:underline font-medium">
                  Why Weight Loss Isn't Working: The Kapha Factor
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/why-am-i-always-tired" className="text-[#C97F3D] hover:underline font-medium">
                  Why You Sleep Too Much and Still Feel Tired
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/ayurveda-depression-anxiety" className="text-[#C97F3D] hover:underline font-medium">
                  Kapha, Depression, and Low Motivation
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/best-ayurvedic-tea-digestion" className="text-[#C97F3D] hover:underline font-medium">
                  Best Ayurvedic Tea for Digestion
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/vata" className="text-[#C97F3D] hover:underline font-medium">
                  Vata Dosha Guide
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/pitta" className="text-[#C97F3D] hover:underline font-medium">
                  Pitta Dosha Guide
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
