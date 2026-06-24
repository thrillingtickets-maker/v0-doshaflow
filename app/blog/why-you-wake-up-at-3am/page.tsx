import { Navigation } from "@/components/navigation"
import { ArticleHero } from "@/components/article-hero"
import { ArticleEmailCapture } from "@/components/article-email-capture"
import { ArticleQuizCta } from "@/components/article-quiz-cta"
import { processArticleContent, splitArticleIntro } from "@/lib/process-article-content"
import { calculateReadingTime, formatReadingTime } from "@/lib/reading-time"
import { RelatedReading } from "@/components/related-reading"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

const TITLE = "Why You Wake Up at 3am: The Ayurvedic Explanation"
const CATEGORY = "Sleep"
const DATE = "June 24, 2026"
const AUTHOR = "Alex"
const DESCRIPTION =
  "If you wake between 2 and 4am and can't get back to sleep, Ayurveda has a specific explanation — and it's not insomnia. It's Vata. Here's the mechanism and the protocol that actually works."

export const metadata = {
  title: `${TITLE} | DoshaFlow`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.doshaflow.com/blog/why-you-wake-up-at-3am",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://www.doshaflow.com/blog/why-you-wake-up-at-3am",
  },
}

const dek =
  "If you wake between 2 and 4am and can't get back to sleep, Ayurveda has a specific explanation — and it's not insomnia. It's Vata. Here's the mechanism and the protocol that actually works."

const content = `<p>Waking at 3am is not insomnia. Insomnia is difficulty falling asleep. What happens at 3am is different — you fall asleep fine, you may sleep deeply for the first few hours, and then, reliably, something brings you back. You are awake. Your mind is running. The room is dark and quiet and there is no good reason for this to be happening.</p>

<p>Ayurveda has a specific explanation for it. Not a vague one.</p>

<p>In Ayurvedic time theory, the 24-hour cycle is divided into six four-hour windows, each governed by a dosha. The period between 2am and 6am is Vata time — the hours when the dosha of air and movement naturally rises. Vata governs the nervous system, the mind, and all movement in the body. When Vata is in balance, you sleep through its window without noticing it. When Vata is elevated — which, for most people living modern lives, it is — the 2–6am peak wakes you.</p>

<p>This is not random. It is the most predictable pattern in the Ayurvedic sleep framework.</p>

<div style="background:#f0ebe2;border-radius:12px;padding:48px;text-align:center;margin:48px 0;">
  <div style="font-size:64px;font-weight:700;color:#8c7055;font-family:Georgia,serif;">2–4am</div>
  <div style="color:#b5763a;font-size:14px;letter-spacing:0.1em;text-transform:uppercase;margin:8px 0;">The Vata window — when Vata dosha naturally peaks in the 24-hour cycle</div>
  <div style="color:#8a7a6a;font-size:15px;margin-top:16px;max-width:500px;margin-left:auto;margin-right:auto;">This is why 3am waking is so consistent. It is not random poor sleep. It is the intersection of elevated Vata with the time of day when Vata naturally rises in everyone. When Vata is balanced, you sleep through it. When it is not, it wakes you.</div>
</div>

<h2>What's Actually Happening at 2am</h2>
<p>The 3am awakening has a physiological correlate that modern science has independently confirmed. Between roughly 2 and 4am, several things happen in the body simultaneously.</p>

<p>Cortisol begins its pre-dawn rise. The HPA axis starts increasing cortisol output hours before you wake, priming the body for the demands of the day. In a healthy system, this rise is gradual and doesn't disturb sleep. In a system with elevated baseline cortisol — from chronic stress, sleep deprivation, or alcohol — the rise is steeper and earlier, and it becomes the alarm clock.</p>

<p>The liver is at peak processing activity. Traditional Chinese medicine, which shares conceptual roots with Ayurveda, identifies 1–3am as liver time. The liver does its most active metabolic processing during this window — clearing hormones, processing toxins, managing blood sugar. If the liver is overburdened by alcohol, rich food, or accumulated stress, its processing creates systemic disturbance that surfaces as waking.</p>

<p>Blood sugar drops. The body has been fasting since dinner. If your last meal was heavy or late, blood sugar is now declining, and the body triggers a cortisol response to raise it. This cortisol surge is enough to wake you.</p>

<p>In Ayurvedic terms: elevated Vata makes the system hypersensitive to all of this. A body with balanced Vata sleeps through the normal fluctuations. A body with excess Vata — characterised by irregularity, overstimulation, and a light nervous system — interprets these normal nocturnal processes as threats and activates.</p>

<h2>The 3am Pattern by Dosha</h2>
<p>The specific character of 3am waking varies by dosha, which is useful diagnostically.</p>

<div style="border:1px solid #e0d5c5;border-radius:8px;overflow:hidden;margin:40px 0;">
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;background:#2a1f14;padding:12px 20px;">
    <div style="font-size:11px;letter-spacing:0.1em;color:#b5763a;text-transform:uppercase;">Vata 3am (2–4am)</div>
    <div style="font-size:11px;letter-spacing:0.1em;color:#b5763a;text-transform:uppercase;">Pitta 3am (3–5am)</div>
    <div style="font-size:11px;letter-spacing:0.1em;color:#b5763a;text-transform:uppercase;">Kapha 3am (4–6am)</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:14px 20px;background:#faf7f2;border-bottom:1px solid #e0d5c5;">
    <div style="font-size:13px;color:#4a3728;">Mind immediately activates — racing thoughts, nothing specific</div>
    <div style="font-size:13px;color:#4a3728;">Wakes with a problem to solve, urgent mental quality</div>
    <div style="font-size:13px;color:#4a3728;">Groggy, heavy, can't return to sleep despite exhaustion</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:14px 20px;background:#f5f0e8;border-bottom:1px solid #e0d5c5;">
    <div style="font-size:13px;color:#4a3728;">Low-level anxiety, nothing corresponds to a real threat</div>
    <div style="font-size:13px;color:#4a3728;">Feels warm, sometimes irritable or restless</div>
    <div style="font-size:13px;color:#4a3728;">Emotionally heavy, sometimes tearful or depressed</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:14px 20px;background:#faf7f2;border-bottom:1px solid #e0d5c5;">
    <div style="font-size:13px;color:#4a3728;">Feels cold, may need another blanket</div>
    <div style="font-size:13px;color:#4a3728;">Mind working at full intensity on plans or problems</div>
    <div style="font-size:13px;color:#4a3728;">Wants to sleep more but cannot get back down</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:14px 20px;background:#f5f0e8;">
    <div style="font-size:13px;font-weight:600;color:#2a1f14;">Root: nervous system + cortisol elevation</div>
    <div style="font-size:13px;font-weight:600;color:#2a1f14;">Root: liver processing + early cortisol peak</div>
    <div style="font-size:13px;font-weight:600;color:#2a1f14;">Root: emotional heaviness + stagnation</div>
  </div>
</div>

<p><strong>Vata waking</strong> is the most common. You wake suddenly, often between 2 and 4am, and your mind immediately activates. Not anxious necessarily — just running. You might think about a conversation you had, replay an email you need to write, or find that your thoughts simply won't stop. You are tired but you cannot return to sleep. You may feel cold. There is a low-level anxiety that doesn't correspond to any specific threat.</p>

<p><strong>Pitta waking</strong> looks different. You wake closer to 3–5am, often with your mind already working at full intensity on a problem. You might feel too warm. The waking has an urgent quality — something to solve, something to plan. Pitta types wake with purpose, even unwanted purpose. There may be irritability or a kind of heat or restlessness in the torso.</p>

<p><strong>Kapha waking</strong> is less common but distinct. You wake very early and feel groggy rather than mentally activated. No racing thoughts — just heaviness and an inability to return to sleep despite feeling exhausted. This pattern is often associated with emotional heaviness or depression rather than nervous system hyperactivation.</p>

<h2>Why It Gets Worse</h2>

<div style="background:#f5f0e8;border-radius:12px;padding:36px;margin:40px 0;">
  <div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;margin-bottom:24px;">What amplifies 3am waking</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:grid;grid-template-columns:160px 1fr;gap:16px;padding:14px;background:white;border-radius:8px;">
      <div style="font-size:13px;font-weight:700;color:#2a1f14;">Alcohol</div>
      <div style="font-size:13px;color:#4a3728;">Suppresses REM in the first half of the night then rebounds in the 2–4am window. The liver also processes alcohol most actively during Vata time — creating systemic disturbance that surfaces as waking. Most people who drink regularly and wake at 3am do not connect these two things. The connection is direct and dose-dependent.</div>
    </div>
    <div style="display:grid;grid-template-columns:160px 1fr;gap:16px;padding:14px;background:white;border-radius:8px;">
      <div style="font-size:13px;font-weight:700;color:#2a1f14;">Late eating</div>
      <div style="font-size:13px;color:#4a3728;">Raises blood sugar close to sleep, then triggers a reactive drop 4–6 hours later — precisely in the 3am window. The body responds with a cortisol spike to raise blood sugar. Enough to wake you.</div>
    </div>
    <div style="display:grid;grid-template-columns:160px 1fr;gap:16px;padding:14px;background:white;border-radius:8px;">
      <div style="font-size:13px;font-weight:700;color:#2a1f14;">Stimulating content before bed</div>
      <div style="font-size:13px;color:#4a3728;">News, social media, anything emotionally activating — keeps Vata elevated into the sleep period. The blue light is part of it; the content is the bigger factor. A nervous system processing threat signals at 11pm is not equipped to stabilise by midnight.</div>
    </div>
    <div style="display:grid;grid-template-columns:160px 1fr;gap:16px;padding:14px;background:white;border-radius:8px;">
      <div style="font-size:13px;font-weight:700;color:#2a1f14;">Irregular bedtimes</div>
      <div style="font-size:13px;color:#4a3728;">Vata is the dosha of irregularity — it is aggravated by its own qualities. Variable sleep timing destabilises the internal cortisol clock, making the pre-dawn rise steeper and more disruptive than it would otherwise be.</div>
    </div>
    <div style="display:grid;grid-template-columns:160px 1fr;gap:16px;padding:14px;background:white;border-radius:8px;">
      <div style="font-size:13px;font-weight:700;color:#2a1f14;">Afternoon caffeine</div>
      <div style="font-size:13px;color:#4a3728;">Coffee at 3pm means half the caffeine is still active at 9pm for most adults (5–6 hour half-life). This maintains Vata elevation through the early sleep hours — reducing deep sleep precisely in the window the body needs it most.</div>
    </div>
  </div>
</div>

<h2>The Fix</h2>
<p>There is no single intervention that resolves 3am waking across the board, because the contributing factors vary. What Ayurveda offers is a layered protocol addressing each root cause.</p>

<p>The evening preparation matters more than most sleep hygiene advice acknowledges. Dinner should be the lightest meal of the day, eaten before 7pm where possible. Avoid alcohol and heavy foods. After dinner, the priority is Vata reduction: warmth, stillness, low stimulation. A consistent bedtime — the same time every night — begins to regulate the cortisol pattern within weeks.</p>

<p><strong>Jatamansi</strong> is the most specific Ayurvedic herb for this pattern. It is a root from the Himalayan region, used specifically for the type of awakening that comes from nervous system instability rather than inability to fall asleep. It calms without morning grogginess. 300–500mg taken one hour before bed, consistently for 4–6 weeks, addresses Vata-driven 3am waking at the root. It is not widely known in the West and not widely stocked, but it is worth finding.</p>

<p><strong>Ashwagandha</strong> addresses the underlying cortisol pattern. If your 3am awakening is driven by the early cortisol rise — likely if you also experience daytime anxiety, fatigue, or chronic stress — ashwagandha taken nightly for 8+ weeks reduces the cortisol response itself. This is the slower intervention but the more fundamental one.</p>

<div style="background:#2a1f14;border-radius:12px;padding:40px;margin:40px 0;">
  <div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;margin-bottom:8px;">The 3am protocol</div>
  <div style="font-size:20px;font-weight:700;color:#f5f0e8;font-family:Georgia,serif;margin-bottom:8px;">Prevent it before bed. Navigate it when it happens.</div>
  <div style="color:#c4a882;font-size:13px;margin-bottom:24px;">Both matter. Neither alone is enough.</div>
  <div style="font-size:12px;letter-spacing:0.1em;color:#b5763a;text-transform:uppercase;margin-bottom:12px;margin-top:8px;">Before bed</div>
  <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;">
    <div style="display:flex;gap:14px;padding:12px 14px;background:rgba(255,255,255,0.05);border-radius:8px;">
      <div style="background:#b5763a;color:white;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;min-width:24px;text-align:center;height:fit-content;">1</div>
      <div><strong style="color:#f5f0e8;font-size:14px;">Warm oil on the soles of the feet</strong><span style="font-size:13px;color:#c4a882;"> — sesame or brahmi oil, 5 minutes before bed. Signals safety to the nervous system in a way that is difficult to explain but consistently effective. This is the most underrated intervention for Vata sleep disruption.</span></div>
    </div>
    <div style="display:flex;gap:14px;padding:12px 14px;background:rgba(255,255,255,0.05);border-radius:8px;">
      <div style="background:#b5763a;color:white;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;min-width:24px;text-align:center;height:fit-content;">2</div>
      <div><strong style="color:#f5f0e8;font-size:14px;">Jatamansi 300–500mg, one hour before bed</strong><span style="font-size:13px;color:#c4a882;"> — the most specific Ayurvedic herb for 3am Vata waking. Calms mental agitation without morning grogginess or dependency. Not widely stocked but worth seeking out. Consistent use over 4–6 weeks shifts the pattern.</span></div>
    </div>
    <div style="display:flex;gap:14px;padding:12px 14px;background:rgba(255,255,255,0.05);border-radius:8px;">
      <div style="background:#b5763a;color:white;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;min-width:24px;text-align:center;height:fit-content;">3</div>
      <div><strong style="color:#f5f0e8;font-size:14px;">Dinner before 7pm, nothing after</strong><span style="font-size:13px;color:#c4a882;"> — eliminates the blood sugar drop at 3am. No alcohol. Nothing heavy or sweet in the final 3 hours before sleep.</span></div>
    </div>
    <div style="display:flex;gap:14px;padding:12px 14px;background:rgba(255,255,255,0.05);border-radius:8px;">
      <div style="background:#b5763a;color:white;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;min-width:24px;text-align:center;height:fit-content;">4</div>
      <div><strong style="color:#f5f0e8;font-size:14px;">Same bedtime every night</strong><span style="font-size:13px;color:#c4a882;"> — the most powerful intervention for the cortisol pattern. Within 2–3 weeks of consistent timing, the pre-dawn cortisol rise becomes more gradual. Irregular timing undoes this every time.</span></div>
    </div>
  </div>
  <div style="font-size:12px;letter-spacing:0.1em;color:#b5763a;text-transform:uppercase;margin-bottom:12px;">When you wake at 3am</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;gap:14px;padding:12px 14px;background:rgba(255,255,255,0.07);border-radius:8px;border-left:3px solid #6b5240;">
      <div style="font-size:13px;color:#c4a882;"><strong style="color:#f5f0e8;">Do not look at your phone.</strong> Even briefly. The light and the information will fully activate Vata and make return to sleep nearly impossible. This is the single most important rule.</div>
    </div>
    <div style="display:flex;gap:14px;padding:12px 14px;background:rgba(255,255,255,0.07);border-radius:8px;border-left:3px solid #b5763a;">
      <div style="font-size:13px;color:#c4a882;"><strong style="color:#f5f0e8;">Breathe:</strong> 4 counts in through the nose, 6–8 counts out. Repeat 10 times. This directly activates the parasympathetic nervous system. If cold, add a blanket. If your mind is running, don't try to stop it — give it something slow and non-urgent to think about. Direct it rather than suppress it.</div>
    </div>
  </div>
</div>

<p>The pattern usually takes 3–6 weeks of consistent intervention to shift. But it does shift. The mechanism is real, the interventions are specific, and 3am does not have to be your regular companion.</p>

<div style="background:#f0ebe2;border-radius:12px;padding:36px;margin:48px 0;text-align:center;">
  <div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;margin-bottom:12px;">Understand your pattern</div>
  <div style="font-size:18px;font-weight:700;color:#2a1f14;font-family:Georgia,serif;margin-bottom:16px;">Your dosha determines why you wake at 3am — and which interventions will actually work for your constitution.</div>
  <a href="/quiz" style="display:inline-block;background:#2a1f14;color:#f5f0e8;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;">Take the Free Dosha Quiz →</a>
</div>`

export default function WhyYouWakeUpAt3amPage() {
  const readingTime = calculateReadingTime(content)
  const { intro, body } = splitArticleIntro(processArticleContent(content))

  return (
    <>
      <Navigation />
      <main style={{ minHeight: "100vh", backgroundColor: "#fdf8f3" }}>
        <ArticleHero title={TITLE} category={CATEGORY} date={DATE} highlightWord="3am" />
        <article style={{ paddingBottom: "96px" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
            {/* Hero to Body Transition */}
            <div style={{ paddingTop: "56px", paddingBottom: "40px", borderBottom: "1px solid #e8d9c5", marginBottom: "48px" }}>
              {/* Metadata with Author Byline + Reading Time */}
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "14px", color: "#8a7a5a", marginBottom: "28px" }}>
                <span>{`${AUTHOR} · ${DATE}`}</span>
                <span>{formatReadingTime(readingTime)}</span>
              </div>

              {/* Dek / Subheadline */}
              <div
                style={{
                  fontSize: "18px",
                  lineHeight: 1.75,
                  color: "#5a5a5a",
                  fontWeight: 500,
                  marginTop: "20px",
                  maxWidth: "720px",
                }}
              >
                {dek}
              </div>
            </div>

            {/* Back Link */}
            <Link
              href="/blog"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", fontSize: "14px", marginBottom: "40px", textDecoration: "none", cursor: "pointer" }}
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            {/* Post Content */}
            <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');
            
            article div h2 {
              font-family: 'Lora', serif;
              font-size: 28px;
              font-weight: 600;
              margin: 56px 0 28px 0;
              color: #2c1a0e;
              line-height: 1.3;
              letter-spacing: -0.5px;
            }
            
            article div h3 {
              font-family: 'Lora', serif;
              font-size: 22px;
              font-weight: 600;
              margin: 48px 0 24px 0;
              color: #2c1a0e;
              line-height: 1.3;
              letter-spacing: -0.3px;
            }
            
            article div h4 {
              font-family: 'Lora', serif;
              font-size: 18px;
              font-weight: 600;
              margin: 32px 0 16px 0;
              color: #2c1a0e;
              line-height: 1.3;
            }
            
            article div p {
              margin: 20px 0;
              font-size: 17px;
              line-height: 1.85;
              color: #3a3a3a;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
            }
            
            article div p:first-of-type {
              font-size: 19px;
              line-height: 1.95;
              color: #2c1a0e;
              font-weight: 500;
              margin-top: 0;
              margin-bottom: 28px;
            }
            
            article div ul, article div ol {
              margin: 28px 0;
              padding-left: 32px;
            }
            
            article div li {
              margin: 12px 0;
              font-size: 17px;
              line-height: 1.85;
              color: #3a3a3a;
            }
            
            article div strong {
              font-weight: 600;
              color: #2c1a0e;
            }
            
            article div em {
              font-style: italic;
              color: #2c1a0e;
            }
            
            article div a {
              color: #c49a6c;
              text-decoration: underline;
              font-weight: 500;
              transition: color 0.2s;
            }
            
            article div a:hover {
              color: #b5893f;
            }
            
            article div blockquote {
              border-left: 3px solid #c49a6c;
              margin: 32px 0;
              padding: 24px 28px;
              background-color: rgba(242, 237, 226, 0.5);
              font-style: italic;
              color: #2c1a0e;
              font-size: 17px;
              line-height: 1.85;
              font-family: 'Lora', serif;
              font-weight: 500;
            }
            
            article div blockquote p {
              margin: 0;
            }
            
            article div hr {
              border: none;
              height: 1px;
              background-color: #e8d9c5;
              margin: 48px 0;
            }

            article div [style*="background"] {
              box-sizing: border-box;
            }

            article div [style*="display: grid"] {
              box-sizing: border-box;
            }

            article div [style*="display: grid"] > div {
              box-sizing: border-box;
            }

            article div [style*="padding: 32px"] {
              box-sizing: border-box;
            }

            article div [style*="padding: 24px"] {
              box-sizing: border-box;
            }

            article div [style*="border-left"] {
              box-sizing: border-box;
            }

            article div [style*="border-radius"] ul {
              margin: 0;
              padding-left: 20px;
            }

            article div [style*="border-radius"] li {
              margin: 8px 0;
            }

            article div [style*="font-size: 32px"] {
              display: block;
            }

            article div [style*="font-size: 48px"] {
              display: block;
            }

            article div h2 {
              position: relative;
              padding-bottom: 16px;
              margin-bottom: 32px;
            }

            article div h2::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 40px;
              height: 3px;
              background: linear-gradient(90deg, #c49a6c 0%, #d4a876 100%);
              border-radius: 2px;
            }

            article div blockquote {
              position: relative;
              overflow: hidden;
            }

            article div blockquote::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              width: 4px;
              background: linear-gradient(180deg, #c49a6c 0%, #a67c52 100%);
            }

            article div p:first-of-type::first-letter {
              font-size: 1.2em;
              font-weight: 700;
              color: #c49a6c;
            }

            article div ul li::before {
              content: '◆';
              margin-right: 12px;
              color: #c49a6c;
              font-size: 0.6em;
              position: relative;
              top: 2px;
            }

            article div ul {
              list-style: none;
              padding-left: 0;
            }

            article div p strong {
              background: rgba(196, 154, 108, 0.08);
              padding: 2px 6px;
              border-radius: 3px;
              font-weight: 600;
            }

            article div code {
              background: rgba(196, 154, 108, 0.08);
              padding: 2px 6px;
              border-radius: 3px;
              font-family: 'Monaco', 'Courier New', monospace;
              font-size: 0.95em;
              color: #8A7660;
            }

            article div table {
              width: 100%;
              border-collapse: collapse;
              margin: 32px 0;
              border: 1px solid #e8d9c5;
              border-radius: 4px;
              overflow: hidden;
            }

            article div table th {
              background: rgba(196, 154, 108, 0.08);
              padding: 16px;
              text-align: left;
              font-weight: 600;
              color: #8A7660;
              border-bottom: 2px solid #e8d9c5;
            }

            article div table td {
              padding: 12px 16px;
              border-bottom: 1px solid #e8d9c5;
            }

            article div table tr:hover {
              background: rgba(196, 154, 108, 0.04);
            }

            article div dt {
              font-weight: 600;
              color: #8A7660;
              margin-top: 16px;
              margin-bottom: 8px;
            }

            article div dd {
              margin-left: 16px;
              margin-bottom: 16px;
              color: #3a3a3a;
              line-height: 1.85;
            }

            article div h2 + p {
              font-size: 16px;
              color: #666;
              font-style: italic;
              margin-bottom: 24px;
            }

            /* Body continues after the inline CTA: don't re-apply lead/drop-cap styling */
            article div.article-body-continued p:first-of-type {
              font-size: 17px;
              line-height: 1.85;
              color: #3a3a3a;
              font-weight: 400;
              margin-top: 20px;
              margin-bottom: 20px;
            }

            article div.article-body-continued p:first-of-type::first-letter {
              font-size: inherit;
              font-weight: inherit;
              color: inherit;
            }
          `}</style>
            <div
              style={{ color: "#2c1a0e", lineHeight: 1.85 }}
              dangerouslySetInnerHTML={{ __html: intro }}
            />

            {/* Inline Conversion CTA - after intro */}
            <ArticleQuizCta />

            {body && (
              <div
                className="article-body-continued"
                style={{ color: "#2c1a0e", lineHeight: 1.85 }}
                dangerouslySetInnerHTML={{ __html: body }}
              />
            )}

            {/* Email Capture Section - near end, before related reading */}
            <ArticleEmailCapture articleTitle={TITLE} />

            {/* Related Reading Section */}
            <RelatedReading currentSlug="why-you-wake-up-at-3am" />

            {/* Post Footer - Back Link */}
            <footer style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid #e8d9c5" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <Link
                  href="/blog"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", fontSize: "14px", textDecoration: "none", cursor: "pointer" }}
                >
                  <ArrowLeft size={16} />
                  Back to all posts
                </Link>
                <Link
                  href="/start-here"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#8a7a5a", fontSize: "14px", textDecoration: "none", cursor: "pointer", marginTop: "8px" }}
                >
                  Explore more guides →
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </>
  )
}
