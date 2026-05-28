import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ayurveda for Men: A Practical Guide to Doshas, Burnout, Sleep & Recovery",
  description: "A no-nonsense guide to Ayurveda for men — how the dosha system explains burnout, poor sleep, gut problems, anxiety, and alcohol use, and what to actually do about it.",
  openGraph: {
    title: "Ayurveda for Men: A Practical Guide to Doshas, Burnout, Sleep & Recovery",
    description: "How the dosha system explains burnout, poor sleep, anxiety, and alcohol use in men.",
    type: "website",
    url: "https://www.doshaflow.com/ayurveda-for-men",
  },
}

export default function AyurvedaForMenPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-[680px] mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Ayurveda for Men: A Practical Guide to the System That Actually Explains Your Body
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          {/* Article Content */}
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Most of what gets written about Ayurveda is not written for men.
            </p>

            <p>
              The imagery is women in linen. The language is gentle and soft-edged. The product photography is pastel. If you&apos;re a man who stumbled into Ayurveda looking for something that would actually help with your sleep, your gut, your weight, your anxiety, your energy levels, or your relationship with alcohol — you probably bounced off most of it immediately.
            </p>

            <p>
              I did. For years.
            </p>

            <p>
              Then I actually read it — the real thing, not the lifestyle brand version — and realized that Ayurveda is one of the most practical systems of health I&apos;d ever encountered. It&apos;s specific. It&apos;s individualized. It doesn&apos;t ask you to believe anything. It asks you to observe yourself and apply what you find.
            </p>

            <p>
              This guide is what I wish had existed when I started. No softening, no incense required.
            </p>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              Why Ayurveda Is Especially Relevant for Men Right Now
            </h2>

            <p>
              Men are in the middle of a slow health crisis that nobody talks about plainly.
            </p>

            <p>
              Burnout rates among men are at all-time highs. Sleep disorders are up. Gut problems are increasingly common. Anxiety is widespread but dramatically underreported. And a huge percentage of men are managing all of this with alcohol — a depressant that temporarily masks the symptoms while making the underlying issues significantly worse over time.
            </p>

            <p>
              Conventional medicine is good at treating acute conditions. It is not great at helping you understand <em>why</em> your energy is wrecked, why you can&apos;t sleep, why you feel chronically off even when nothing is technically wrong. Most men in this situation are told to exercise more, sleep more, stress less — advice so general it&apos;s nearly useless.
            </p>

            <p>
              Ayurveda takes a different approach. It starts by asking: what is your nature? What is your specific constitution? And then it gives you a framework that explains your patterns — not as problems to fix, but as a type to understand.
            </p>

            <blockquote className="border-l-4 border-[#C97F3D] pl-6 py-2 my-8 text-foreground italic text-lg">
              That reframe is the thing that changed things for me.
            </blockquote>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              The Basics: What Ayurveda Actually Is
            </h2>

            <p>
              Ayurveda is a 5,000-year-old system of medicine from India. It&apos;s not alternative medicine in the sense of being unproven — it&apos;s pre-modern medicine, developed before the laboratory era, based on thousands of years of clinical observation. Much of it holds up under scrutiny. Some of it doesn&apos;t. Like any system, it&apos;s best used intelligently.
            </p>

            <p>
              The central concept is the <strong className="text-foreground font-medium">dosha</strong> — your constitutional type. According to Ayurveda, everything in nature (including human beings) is made up of five elements: earth, water, fire, air, and space. In the body, these elements combine into three functional energies:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-6">
              <li><strong className="text-foreground font-medium">Vata</strong> — air and space. Governs movement, the nervous system, breathing, circulation, and communication.</li>
              <li><strong className="text-foreground font-medium">Pitta</strong> — fire and water. Governs metabolism, digestion, body temperature, and transformation.</li>
              <li><strong className="text-foreground font-medium">Kapha</strong> — earth and water. Governs structure, lubrication, immunity, and stability.</li>
            </ul>

            <p>
              Everyone has all three doshas. What varies is the proportion. Your dominant dosha — or combination of doshas — is your <em>prakriti</em>, your constitution. It&apos;s essentially how your body and mind are wired by default.
            </p>

            <p>
              When your doshas are in balance, you feel good. When they&apos;re out of balance — from stress, poor diet, disrupted sleep, overwork, alcohol, or seasonal change — you get symptoms. The Ayurvedic approach is to identify the imbalance and address the root cause rather than suppressing the symptom.
            </p>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              The Three Male Patterns: Recognizing Yourself
            </h2>

            <p>
              Most men I know fall pretty clearly into one of these profiles. See which one sounds familiar.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              The Vata Man: Creative, Anxious, Scattered
            </h3>

            <p>
              <strong className="text-foreground font-medium">Physically:</strong> Lean build, tends toward cold hands and feet, variable appetite, light sleeper. Energy comes in bursts — highly productive one day, depleted the next.
            </p>

            <p>
              <strong className="text-foreground font-medium">Mentally:</strong> Creative, fast-thinking, good at generating ideas. Also prone to anxiety, overwhelm, and an inability to switch off. The kind of person who lies awake at 2am running through tomorrow&apos;s problems.
            </p>

            <p>
              <strong className="text-foreground font-medium">When out of balance:</strong> Insomnia, digestive irregularity, joint discomfort, chronic anxiety, racing thoughts, exhaustion that doesn&apos;t respond to rest. Often uses alcohol, stimulants, or screens to regulate the nervous system — because Vata energy responds to anything that provides temporary grounding.
            </p>

            <p>
              <strong className="text-foreground font-medium">The fix:</strong> Warmth, routine, nourishment, and stillness. These sound simple. They are also almost perfectly opposed to how most high-achieving men live.
            </p>

            <blockquote className="border-l-4 border-[#C97F3D] pl-6 py-2 my-8 text-foreground italic text-lg">
              This is my type. I am a Vata, significantly out of balance for most of my thirties. The anxiety, the poor sleep, the alcohol, the restlessness — once I understood the pattern, the path forward became much clearer.
            </blockquote>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              The Pitta Man: Driven, Hot, Burning Out
            </h3>

            <p>
              <strong className="text-foreground font-medium">Physically:</strong> Medium build, strong digestion (or strong digestive problems — acid reflux, inflammation, loose stools). Warm body temperature, often runs hot. Hair thins early. Skin reacts easily.
            </p>

            <p>
              <strong className="text-foreground font-medium">Mentally:</strong> Ambitious, focused, goal-oriented. Natural leader. Also prone to irritability, competitiveness, perfectionism, and an inability to rest because rest feels like failure.
            </p>

            <p>
              <strong className="text-foreground font-medium">When out of balance:</strong> Burnout, inflammation (skin, gut, joints), anger that seems disproportionate to its triggers, high cortisol, sleep that&apos;s disrupted by racing mind rather than anxiety. Often uses alcohol to decompress after intense work — Pitta builds up heat all day and alcohol provides a valve.
            </p>

            <p>
              <strong className="text-foreground font-medium">The fix:</strong> Cooling down — physically and mentally. Less intensity, more release. The hardest prescription for a Pitta man to accept, which is part of the diagnosis.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              The Kapha Man: Steady, Strong, Stuck
            </h3>

            <p>
              <strong className="text-foreground font-medium">Physically:</strong> Heavier build, strong endurance but slow metabolism. Gains weight easily, loses it slowly. Sleeps deeply — often too deeply, hard to wake, groggy in the morning. Strong immunity but prone to congestion.
            </p>

            <p>
              <strong className="text-foreground font-medium">Mentally:</strong> Calm, loyal, patient, methodical. Also prone to inertia, resistance to change, depression, and a kind of comfortable stuckness. Motivation has to be externally supplied.
            </p>

            <p>
              <strong className="text-foreground font-medium">When out of balance:</strong> Weight gain, lethargy, low mood, congestion, water retention, low libido. Uses alcohol or food as comfort — Kapha seeks sweetness and warmth when depleted, and both alcohol and heavy food provide this temporarily.
            </p>

            <p>
              <strong className="text-foreground font-medium">The fix:</strong> Stimulation, movement, and light. Kapha needs more heat and activity, less comfort and heaviness. Cold exposure, vigorous exercise, and fasting protocols all work especially well for this type.
            </p>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              The Men&apos;s Health Issues Ayurveda Actually Addresses
            </h2>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Sleep
            </h3>

            <p>
              Vata sleep problems look different from Pitta sleep problems, which look different from Kapha sleep problems. Vata wakes between 2–4am and can&apos;t get back to sleep. Pitta falls asleep fine but wakes early, mind already running. Kapha sleeps 9 hours and still feels tired.
            </p>

            <p>
              Western sleep advice is generic: sleep hygiene, no screens, consistent schedule. Ayurveda is specific: Vata needs oil, warmth, and a 10pm bedtime. Pitta needs cooling, less alcohol (alcohol is warming and breaks sleep), and releasing the day before bed. Kapha needs earlier wake times and more vigorous daytime activity to build sleep pressure.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Digestion and Gut Health
            </h3>

            <p>
              Ayurveda treats the gut as the foundation of all health — a claim that&apos;s increasingly validated by modern gastroenterology. The concept of <em>agni</em> (digestive fire) maps remarkably well to our modern understanding of gut microbiome health.
            </p>

            <p>
              For men with gut issues: Vata gut is irregular, gassy, constipated. Pitta gut is inflamed, reactive, acidic. Kapha gut is slow, heavy, prone to mucus and stagnation. Each needs a fundamentally different approach to food.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Weight and Body Composition
            </h3>

            <p>
              The Ayurvedic approach to weight is constitutional rather than universal. Kapha men struggle to lose weight because their metabolism runs slow by nature — the answer isn&apos;t less food, it&apos;s different food (lighter, more stimulating) and consistent vigorous movement. Vata men often can&apos;t gain weight because their digestive fire is irregular and their nervous system burns through everything. Pitta men manage weight easily when in balance but accumulate inflammation rapidly when not.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Stress, Anxiety, and Cortisol
            </h3>

            <p>
              This is where Ayurveda is most useful for modern men, and most under-discussed. Chronic stress is a Vata and Pitta imbalance in Ayurvedic terms — Vata because the nervous system is overwhelmed, Pitta because the drive and heat are unchecked. The herbal and lifestyle interventions that address these imbalances (ashwagandha, brahmi, regular oil massage, breath work) are also the most well-researched Ayurvedic tools in Western literature.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Alcohol and Recovery
            </h3>

            <p>
              This is the piece almost no Ayurveda resource touches, which is strange because the relationship between dosha and alcohol use is remarkably direct.
            </p>

            <p>
              Vata men drink to ground themselves — alcohol temporarily stills the anxious, scattered nervous system. Pitta men drink to release pressure — it&apos;s the valve for a day of intensity. Kapha men drink for comfort and warmth — it fills the emotional heaviness.
            </p>

            <blockquote className="border-l-4 border-[#C97F3D] pl-6 py-2 my-8 text-foreground italic text-lg">
              In each case, alcohol mimics something the dosha needs but provides it in a form that makes the underlying imbalance worse. Understanding your dosha is understanding what you&apos;re actually looking for when you reach for a drink — and that knowledge is the beginning of finding it somewhere else.
            </blockquote>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              A Practical Starting Point: The Ayurvedic Daily Routine for Men
            </h2>

            <p>
              You don&apos;t need to overhaul your life. Start with three things:
            </p>

            <p>
              <strong className="text-foreground font-medium">1. Wake at the same time every day, ideally before 6am.</strong><br />
              This is Vata hour — the energy is light and mobile, which makes it the best time to move, breathe, and think before the weight of the day accumulates. This one change, held consistently, reorganizes the nervous system over weeks.
            </p>

            <p>
              <strong className="text-foreground font-medium">2. Eat your biggest meal at lunch.</strong><br />
              Digestive fire is strongest between 10am and 2pm. Eating your largest meal in this window and a lighter dinner in the evening is one of the most consistently supported Ayurvedic dietary principles — and one of the most consistently violated by modern Western schedules.
            </p>

            <p>
              <strong className="text-foreground font-medium">3. Add one grounding practice in the evening.</strong><br />
              For Vata: warm oil on the feet before bed. For Pitta: 10 minutes of cooling breath (breathe in through the nose, out through rounded lips). For Kapha: an evening walk after dinner. These are small. They compound.
            </p>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              How to Find Your Dosha
            </h2>

            <p>
              The starting point is knowing your type. The quiz at DoshaFlow takes about five minutes — it asks about your physical build, your digestion, your sleep patterns, your mental tendencies, and your stress responses. It&apos;s designed to identify your primary dosha and give you a practical starting point: what to eat, how to move, and what imbalances to watch for.
            </p>

            <p>
              If you read the profiles above and recognized yourself clearly, you probably already know your type. The quiz will confirm it and give you specifics.
            </p>

            <div className="my-8">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 text-[#C97F3D] font-medium hover:underline"
              >
                Take the free dosha quiz →
              </Link>
            </div>

            <p>
              Once you know your type, the{" "}
              <Link href="/samples" className="text-[#C97F3D] hover:underline">
                sample plans page
              </Link>{" "}
              shows you what a Vata, Pitta, or Kapha meal plan and movement routine actually look like.
            </p>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              The Honest Version
            </h2>

            <p>
              I&apos;m not going to tell you Ayurveda will fix everything. I&apos;m 14 days into my second week at an Ayurvedic retreat in Kerala, and it is hard work — physically, emotionally, and mentally. The treatments are intense. The diet is restrictive. The early mornings are brutal.
            </p>

            <p>
              But I&apos;m sleeping better than I have in years. My resting heart rate is dropping. The anxiety that has been my constant companion for most of my thirties has quieted noticeably. And I understand my body — its patterns, its tendencies, its signals — in a way I simply didn&apos;t before.
            </p>

            <p>
              For men who are high-functioning but quietly exhausted, for men who are managing their nervous system with alcohol or stimulants, for men who have tried all the generic wellness advice and found it doesn&apos;t hold — Ayurveda offers something different. A framework built around your specific nature. Tools calibrated to your type.
            </p>

            <blockquote className="border-l-4 border-[#C97F3D] pl-6 py-2 my-8 text-foreground italic text-lg">
              That&apos;s what DoshaFlow is here to make accessible. Start with the quiz. See what your body has been trying to tell you.
            </blockquote>

            <hr className="border-border my-12" />

            <p className="text-sm text-muted-foreground italic">
              Alex is the founder of DoshaFlow and is currently documenting a two-week Ayurvedic retreat in India. Follow along on the{" "}
              <Link href="/blog" className="text-[#C97F3D] hover:underline">
                blog
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
