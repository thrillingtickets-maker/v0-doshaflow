import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ayurveda for Women: Hormones, Cycles, Burnout & the Dosha System Explained",
  description: "A practical guide to Ayurveda for women — how the dosha system explains hormonal imbalance, menstrual patterns, perimenopause, burnout, and skin, and what to actually do about it.",
  openGraph: {
    title: "Ayurveda for Women: Hormones, Cycles, Burnout & the Dosha System Explained",
    description: "A practical guide to Ayurveda for women — how the dosha system explains hormonal imbalance, menstrual patterns, perimenopause, burnout, and skin, and what to actually do about it.",
    url: "https://www.doshaflow.com/ayurveda-for-women",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/ayurveda-for-women",
  },
}

export default function AyurvedaForWomenPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-[680px] mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
              Ayurveda for Women: The System That Finally Explains Your Body's Rhythms
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          {/* Article Content */}
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I want to be upfront about something: I'm a man writing a guide about Ayurveda for women. So let me tell you why I think that's okay, and why this page exists.
            </p>

            <p>
              DoshaFlow started from my own experience — burnout, addiction, years of feeling disconnected from my body. Ayurveda gave me a framework that finally made sense of patterns I'd never been able to explain. I built this site because I wanted to share that.
            </p>

            <p>
              But almost every person who has taught me something meaningful about Ayurveda has been a woman. My practitioner in Kerala. The women at the retreat who were further along in their healing than I was. The researchers and writers who have done the deepest work integrating Ayurvedic principles with modern physiology. And the simple demographic reality: most of the people dealing with the specific things Ayurveda is best at — hormonal imbalance, chronic stress, sleep disruption, digestive issues, anxiety — are women.
            </p>

            <p>
              This page is my attempt to share what I've learned about how Ayurveda specifically addresses women's bodies, women's health patterns, and the particular ways each dosha manifests in women's lives. I've tried to be accurate and practical. Where something goes beyond my direct experience, I've said so.
            </p>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              Why Ayurveda Is Particularly Powerful for Women's Health
            </h2>

            <p>
              Ayurveda has a 5,000-year track record of treating the aspects of women's health that modern medicine still struggles with: hormonal fluctuation, cycle irregularity, perimenopause, mood patterns tied to physiology, skin conditions that track with stress and diet, and the particular exhaustion that comes from running a body, a mind, and often a household or career simultaneously.
            </p>

            <p>
              This isn't because Ayurveda is a &quot;women's system.&quot; It's because Ayurveda is fundamentally a system about cycles — the daily cycle, the seasonal cycle, the life-stage cycle. And women's bodies are inherently cyclical in ways that men's aren't. The menstrual cycle, the hormonal rhythms across a lifetime, the shifts of perimenopause — Ayurveda has specific frameworks for all of it that feel remarkably relevant even now.
            </p>

            <blockquote className="border-l-4 border-[#C97F3D] pl-6 py-2 my-8 text-foreground italic text-lg">
              The other reason Ayurveda resonates for women: it doesn't treat symptoms in isolation. The conventional approach to a woman's mood swings, skin breakouts, digestive problems, and fatigue is to treat each one separately. Ayurveda asks: what's the underlying imbalance connecting all of these? That question — and the personalized answer it leads to — is often exactly what women have been looking for.
            </blockquote>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              The Three Doshas in Women's Bodies
            </h2>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Vata Women: Creative, Anxious, Running on Empty
            </h3>

            <p>
              <strong className="text-foreground font-medium">The physical picture:</strong> Naturally lean, often with fine features. Variable appetite — sometimes hungry, sometimes forgetting to eat entirely. Prone to dryness: dry skin, dry hair, irregular digestion. Light sleeper. Cold hands and feet. Energy that moves in intense bursts followed by depletion.
            </p>

            <p>
              <strong className="text-foreground font-medium">The mental picture:</strong> Highly creative, quick-thinking, imaginative. The person who has ten projects started and struggles to finish any of them. Deeply empathetic, sometimes to the point of absorbing other people's stress as her own. Prone to anxiety, overthinking, and a nervous system that never quite switches off.
            </p>

            <p>
              <strong className="text-foreground font-medium">Women's health patterns:</strong> Vata governs movement in the body, which includes the movement of the menstrual cycle. Vata imbalance in women often shows up as irregular periods, scanty flow, or cycles that shift length month to month. PMS for Vata types tends to manifest as anxiety, insomnia, and overwhelm in the days before menstruation — not cramps or anger, but a pervasive sense of dread or unease.
            </p>

            <p>
              In perimenopause, Vata tends to amplify: the dryness increases, sleep becomes more disrupted, anxiety escalates. The Vata approach to perimenopause centers on deep nourishment, warmth, oil, and radical reduction of stimulation.
            </p>

            <p>
              <strong className="text-foreground font-medium">The fix:</strong> Grounding. Warm, oily, nourishing food. Consistent sleep schedule. Abhyanga (self-massage with warm oil) as a daily practice. Less rushing, more stillness. These things sound simple and they are — but they're also the exact opposite of how most high-achieving women live.
            </p>

            <hr className="border-border my-12" />

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Pitta Women: Driven, Brilliant, Burning Out
            </h3>

            <p>
              <strong className="text-foreground font-medium">The physical picture:</strong> Medium, athletic build. Strong digestion — or a digestive system that's strong until it's not, swinging into acid reflux, loose stools, or gut inflammation under stress. Skin that flushes easily, prone to rashes or breakouts when heated. Warm body temperature. Often has striking, intense eyes.
            </p>

            <p>
              <strong className="text-foreground font-medium">The mental picture:</strong> Focused, ambitious, organized, high-standards. The person who runs the meeting, finishes what she starts, and holds others to the same bar she holds herself. Also: prone to perfectionism, sharp irritability when overwhelmed, difficulty delegating, and a relationship with rest that involves guilt.
            </p>

            <p>
              <strong className="text-foreground font-medium">Women's health patterns:</strong> Pitta imbalance in the menstrual cycle shows up as heavy flow, intense cramping, and PMS that looks like anger, impatience, and a short fuse. The heat of Pitta concentrates in the reproductive system. Skin breakouts around the chin and jaw are a classic Pitta hormonal signal.
            </p>

            <blockquote className="border-l-4 border-[#C97F3D] pl-6 py-2 my-8 text-foreground italic text-lg">
              Pitta women often thrive in their 20s and 30s, running hot and productive — until they don't. Pitta burnout is a specific phenomenon: the high-achiever who crashes after years of intensity, often accompanied by hormonal disruption, adrenal exhaustion, and a body that has quietly been running on stress hormones.
            </blockquote>

            <p>
              In perimenopause, Pitta can produce intense hot flashes, night sweats, skin flushing, and mood swings that read as anger or frustration. Cooling becomes the central strategy.
            </p>

            <p>
              <strong className="text-foreground font-medium">The fix:</strong> Release without suppression. Cooling foods, cooling practices, mandatory downtime that isn't negotiable. Moon salutations over sun salutations. Sitali breath. The hardest thing for a Pitta woman to accept is that slowing down isn't failure — it's the medicine.
            </p>

            <hr className="border-border my-12" />

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Kapha Women: Nurturing, Steady, Carrying Too Much
            </h3>

            <p>
              <strong className="text-foreground font-medium">The physical picture:</strong> Heavier, curvy build with natural strength. Slow metabolism, gains weight easily and loses it slowly. Deep, long sleep — but wakes groggy and needs time to get moving. Strong immunity, but prone to congestion, water retention, and a kind of constitutional heaviness.
            </p>

            <p>
              <strong className="text-foreground font-medium">The mental picture:</strong> Warm, loyal, deeply caring, steady under pressure. The person everyone leans on. Patient, devoted, slow to anger. Also prone to emotional eating, difficulty letting go, a tendency to carry others' burdens, and depression that sits like a fog rather than a sharp pain.
            </p>

            <p>
              <strong className="text-foreground font-medium">Women's health patterns:</strong> Kapha imbalance in the cycle shows up as heavy, prolonged flow with mucus, fluid retention, breast tenderness, and emotional heaviness before menstruation — the wanting to stay in bed, the tearfulness, the food cravings. Kapha women often struggle with weight that fluctuates with the cycle.
            </p>

            <p>
              In perimenopause, Kapha can produce weight gain, sluggishness, low libido, and a deepening of the depressive tendencies. The approach centers on stimulation — more movement, more heat, more spice, less heaviness.
            </p>

            <p>
              <strong className="text-foreground font-medium">The fix:</strong> Stimulation and lightness. Kapha women often need permission to put themselves first — to move their body for their own energy, not for others. Vigorous morning movement before eating. Spiced teas. Dry brushing. The light, stimulating foods that counter Kapha's natural pull toward comfort and heaviness.
            </p>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              The Ayurvedic Approach to Women's Specific Health Concerns
            </h2>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              The Menstrual Cycle
            </h3>

            <p>
              Ayurveda treats the menstrual cycle as a monthly cleansing and renewal process — a view that's gaining traction in modern functional medicine. Each phase of the cycle corresponds to a different dosha:
            </p>

            <p>
              The follicular phase (after menstruation, before ovulation) is Kapha time — building, nourishing, accumulating energy. The ovulatory phase is Pitta — peak performance, heat, intensity. The luteal phase (after ovulation, before menstruation) is Vata — increasing air, lightness, potential for anxiety. Menstruation itself is Vata's release.
            </p>

            <p>
              Understanding your dominant dosha helps you understand which phase you'll struggle with most — and how to support your body through it rather than just pushing through.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Hormonal Health
            </h3>

            <p>
              The Ayurvedic framework for hormonal health centers on <em>ojas</em> — the essential vitality that governs immunity, reproductive health, and resilience. Modern women's lives are particularly depleting of ojas: chronic stress, poor sleep, processed food, overstimulation. Ashwagandha, shatavari (an herb specifically for women's reproductive health), and ghee are the classic ojas-building tools.
            </p>

            <blockquote className="border-l-4 border-[#C97F3D] pl-6 py-2 my-8 text-foreground italic text-lg">
              Shatavari deserves its own mention. It's one of the most researched Ayurvedic herbs for women and has been used for thousands of years to support hormonal balance, reproductive health, milk production, and the transition through perimenopause. It's in DoshaFlow's women's herbal kit for good reason.
            </blockquote>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Perimenopause and Menopause
            </h3>

            <p>
              This is where Ayurveda offers something genuinely distinctive that conventional medicine largely doesn't: a life-stage framework that treats perimenopause not as a malfunction but as a transition with its own intelligence.
            </p>

            <p>
              In Ayurveda, menopause is the transition from Pitta life-stage to Vata life-stage. The symptoms of perimenopause — hot flashes (Pitta), anxiety and insomnia (Vata), weight gain and sluggishness (Kapha) — map directly onto the doshas and point toward specific interventions. The approach is not to suppress symptoms but to understand what they're signaling and support the body through the transition.
            </p>

            <p>
              Women who come to Ayurveda in their 40s often describe the same experience: finally, a system that explains what's happening in terms that make sense.
            </p>

            <h3 className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
              Skin
            </h3>

            <p>
              The skin is Ayurveda's most legible diagnostic surface. Vata skin is dry, thin, and lines early — it needs oil, warmth, and hydration. Pitta skin is sensitive, reactive, and prone to breakouts and redness — it needs cooling, less heat, and anti-inflammatory foods. Kapha skin is oily, smooth, prone to cysts and congestion — it needs stimulation, less heaviness, and dry brushing.
            </p>

            <p>
              The connection between gut and skin is fundamental in Ayurveda — and increasingly confirmed by modern research. Most persistent skin conditions are treated from the inside first, through diet and gut health, before topical treatments.
            </p>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              A Practical Starting Point for Women
            </h2>

            <p>
              <strong className="text-foreground font-medium">Know your type first.</strong> The five-minute dosha quiz tells you your constitution and gives you a concrete starting point — what to eat, how to move, what daily practices will make the most difference for your specific body.
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
              <strong className="text-foreground font-medium">Add one Vata-pacifying practice even if you're not Vata.</strong> Modern life is inherently Vata-aggravating — the speed, the stimulation, the irregular schedules. Almost every woman I've spoken to at the retreat has some degree of Vata imbalance regardless of constitution. Warm oil on the feet before bed. Warm food before cold. Ten minutes of stillness before the day starts. These are small and they compound.
            </p>

            <p>
              <strong className="text-foreground font-medium">Take your cycle seriously as data.</strong> If your PMS symptoms are intense, if your cycle is irregular, if you feel like a different person in the two weeks before your period — these aren't just inconveniences. Ayurveda treats them as signals. Learn which phase you struggle in, and you've learned something important about your dosha.
            </p>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              This Site Is for Everyone
            </h2>

            <p>
              I started DoshaFlow from my own experience as a man. But the practice of Ayurveda doesn't belong to any gender — and honestly, the women I've met at this retreat are further along in their healing than most of the men. They came with less resistance, more openness, and more willingness to actually listen to their bodies.
            </p>

            <p>
              The dosha quiz, the personalized kits, the meal plans, the herbal recommendations — all of it is built for your constitution, whatever that is. Your type is yours. The tools work for the body you have.
            </p>

            <div className="my-8 flex flex-wrap gap-4">
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 text-[#C97F3D] font-medium hover:underline"
              >
                Find your dosha →
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link
                href="/samples"
                className="inline-flex items-center gap-2 text-[#C97F3D] font-medium hover:underline"
              >
                See sample plans →
              </Link>
            </div>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              Go Deeper
            </h2>

            <div className="space-y-3">
              <p className="text-muted-foreground">
                <Link href="/blog/shatavari-benefits" className="text-[#C97F3D] hover:underline">
                  Shatavari: The Ayurvedic Herb Every Woman Should Know About
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/female-cycle-support" className="text-[#C97F3D] hover:underline">
                  Supporting Your Female Cycle: Period Health and Cycle Awareness
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/birth-recovery-postpartum" className="text-[#C97F3D] hover:underline">
                  Birth Recovery and Postpartum: The Fourth Trimester in Ayurveda
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/menopause-transition" className="text-[#C97F3D] hover:underline">
                  Menopause Transition: Managing the Shift From Reproductive to Postmenopausal Years
                </Link>
              </p>
            </div>

            <hr className="border-border my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-6">
              Related Guides
            </h2>

            <div className="space-y-3">
              <p className="text-muted-foreground">
                <Link href="/blog/ayurveda-hormonal-balance" className="text-[#C97F3D] hover:underline">
                  Ayurveda for Hormonal Balance
                </Link>
                {" "}→ Dosha-specific approaches to hormonal health across the lifespan.
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/ayurveda-pms" className="text-[#C97F3D] hover:underline">
                  The Ayurvedic Approach to PMS
                </Link>
                {" "}→ How the dosha system explains menstrual patterns and what to do about them.
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/perimenopause-ayurveda" className="text-[#C97F3D] hover:underline">
                  Perimenopause and Ayurveda
                </Link>
                {" "}→ Understanding the transition into menopause as a dosha shift.
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/ayurvedic-skin-guide" className="text-[#C97F3D] hover:underline">
                  The Ayurvedic Skin Guide
                </Link>
                {" "}→ Why your skin reflects what's happening inside, and how to address it by dosha.
              </p>
              <p className="text-muted-foreground">
                <Link href="/quiz" className="text-[#C97F3D] hover:underline">
                  Find your dosha
                </Link>
                {" "}→ Start with the free quiz to understand your constitutional type.
              </p>
            </div>

            <hr className="border-border my-12" />

            <p className="text-sm text-muted-foreground italic">
              Alex is the founder of DoshaFlow, currently documenting a two-week Ayurvedic retreat in India. Read the daily journal on the{" "}
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
