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

const TITLE = "Dopamine Detox vs. Ayurveda: Why Rest Isn't the Same as Restriction"
const CATEGORY = "Stress & Anxiety"
const DATE = "June 3, 2026"
const DESCRIPTION =
  "Dopamine detox and Ayurveda both address overstimulation, but their frameworks are completely different. Ayurveda targets the dosha root cause. Here's how to use both intelligently."

export const metadata = {
  title: `${TITLE} | DoshaFlow`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.doshaflow.com/blog/dopamine-detox-vs-ayurveda",
  },
  openGraph: {
    title: `${TITLE} | DoshaFlow`,
    description: DESCRIPTION,
    type: "article",
    url: "https://www.doshaflow.com/blog/dopamine-detox-vs-ayurveda",
  },
}

const dek =
  "Both promise relief from a wired, overstimulated mind — but one removes inputs while the other rebuilds the system underneath. Here is how they actually differ, and how to use both without fooling yourself."

const content = `<p>If you have ever ended a long scroll feeling more depleted than when you started, you already understand the impulse behind a dopamine detox. The phones, the feeds, the constant small hits of novelty — they leave a particular kind of fatigue, a restlessness that more stimulation only deepens. Dopamine detox is the modern answer: strip away the inputs and let the brain reset. Ayurveda offers a different answer to the same problem, and the two are often confused. They are not the same thing, and understanding why makes both more useful.</p>

<p>This is educational information, not medical advice. If overstimulation has tipped into something heavier — persistent anxiety, compulsive use you cannot interrupt, or low mood that will not lift — please treat that as a reason to talk to a qualified professional, not to white-knuckle a stricter detox.</p>

<div style="background:#f0ebe2;border-radius:12px;padding:48px;text-align:center;margin:48px 0;">
  <div style="font-size:18px;font-style:italic;color:#4a3728;font-family:Georgia,serif;max-width:560px;margin:0 auto;line-height:1.7;">"Restriction removes the input. Rest rebuilds the system that the input was exhausting. They feel similar in the moment, but they leave you in very different places."</div>
  <div style="color:#b5763a;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;margin-top:20px;">A detox is an event. Regulation is a way of living.</div>
</div>

<h2>What a Dopamine Detox Actually Is</h2>
<p>The popular version — deleting apps for a weekend, sitting in deliberate boredom, cutting out novelty — is built on a simple, useful intuition: constant stimulation desensitises you, so a period of less can restore your sensitivity to ordinary pleasures. The neuroscience is messier than the name suggests. You are not literally draining and refilling dopamine. What you are doing is interrupting compulsive loops and giving an overstimulated attention system a chance to settle.</p>

<p>Used this way, a detox is a genuinely good <em>reset</em>. Its limitation is that it is an event with an end date. It removes the input, but it does not change the underlying state that made you reach for the input in the first place. That is precisely the gap Ayurveda is built to address.</p>

<h2>What Ayurveda Does Differently</h2>
<p>Ayurveda does not frame overstimulation as a dopamine problem. It frames it as an aggravation of <strong>vata</strong> — the mobile, fast, airy principle that governs the nervous system. A wired, scattered, restless, can't-sit-still mind is classic excess vata, and the modern diet of screens, speed, irregular hours, and constant novelty is almost perfectly designed to inflame it.</p>

<p>From that view, the goal is not to <em>subtract</em> stimulation for a weekend but to <em>add</em> the qualities that are missing the rest of the time — warmth, weight, rhythm, and routine. Where a detox removes, Ayurveda regulates. A detox asks "what can I cut?" Ayurveda asks "what is my system short on, and how do I supply it consistently?"</p>

<h2>Two Frameworks, Side by Side</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:40px 0;">
  <div style="border-radius:8px;overflow:hidden;">
    <div style="background:#2a1f14;padding:16px 20px;"><div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;">Dopamine detox</div><div style="font-size:15px;font-weight:700;color:#f5f0e8;margin-top:4px;">Remove the input</div></div>
    <div style="background:#f5f0e8;padding:20px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:13px;color:#4a3728;">Time-bound event with an end date</div>
      <div style="font-size:13px;color:#4a3728;">Works by subtraction and abstinence</div>
      <div style="font-size:13px;color:#4a3728;">Great for interrupting a compulsive loop</div>
      <div style="font-size:13px;font-weight:600;color:#b5763a;margin-top:8px;">Risk: relief fades when the inputs return</div>
    </div>
  </div>
  <div style="border-radius:8px;overflow:hidden;">
    <div style="background:#2a1f14;padding:16px 20px;"><div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;">Ayurveda</div><div style="font-size:15px;font-weight:700;color:#f5f0e8;margin-top:4px;">Rebuild the system</div></div>
    <div style="background:#f5f0e8;padding:20px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:13px;color:#4a3728;">Ongoing rhythm, not a one-off</div>
      <div style="font-size:13px;color:#4a3728;">Works by adding what's missing</div>
      <div style="font-size:13px;color:#4a3728;">Targets the vata root, not just the screen</div>
      <div style="font-size:13px;font-weight:600;color:#b5763a;margin-top:8px;">Risk: slower, requires consistency</div>
    </div>
  </div>
</div>

<h2>Why Rest Isn't the Same as Restriction</h2>
<p>This is the heart of it. A weekend with no phone can still leave your nervous system jittery — you have removed the stimulus, but you have not given the system anything calming to land on. That is restriction. <strong>Rest</strong>, in the Ayurvedic sense, is active: warm food, a regular sleep window, slow mornings, oil massage, time in nature, single-tasking. These supply the grounding qualities a fast, depleted nervous system is actually craving.</p>

<p>It is the difference between an empty room and a quiet one. Restriction empties the room. Rest makes it somewhere you can settle. Many people detox, feel briefly better, then crash straight back into the old pattern — because they removed the noise without ever building the calm.</p>

<h2>How to Use Both Intelligently</h2>
<p>These approaches are complementary, not competing. The following is a general wellness framework, not a prescription.</p>

<p><strong>Use a detox as the on-ramp.</strong> A short, deliberate break from compulsive inputs is a fine way to interrupt a loop and notice how wired you actually are. Treat it as a beginning, not the whole solution.</p>

<p><strong>Use routine to make it stick.</strong> The lasting change is rhythm: consistent sleep and wake times, regular warm meals, and a wind-down that does not involve a screen. Vata calms in response to predictability more than to willpower.</p>

<p><strong>Replace, don't just remove.</strong> When you cut an input, put something grounding in its place — a walk, a warm drink, a few minutes of slow breathing. An empty slot tends to get refilled by the old habit.</p>

<p><strong>Lower the heat inputs too.</strong> Excess caffeine, late-night intensity, and back-to-back stimulation keep the nervous system revved. Reducing them does quiet, unglamorous work that no single detox weekend can replicate.</p>

<div style="background:#f5f0e8;border-radius:12px;padding:36px;margin:40px 0;border-left:4px solid #c49a6c;">
  <div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;margin-bottom:12px;">When it's more than overstimulation</div>
  <p style="margin:0;font-size:15px;color:#4a3728;line-height:1.75;">If you cannot interrupt the behaviour despite wanting to, if anxiety persists once the screens are gone, or if low mood lingers, that is worth a conversation with a qualified professional. Compulsive use and anxiety are treatable, and they respond better to support than to a stricter detox. Ayurveda complements that care — it does not replace it.</p>
</div>

<h2>The Takeaway</h2>
<p>A dopamine detox is a useful interruption. Ayurveda is a way of keeping the system regulated so you need the interruption less often. One is an event; the other is a practice. If the detox shows you how overstimulated you have become, let the Ayurvedic part — rhythm, warmth, rest that actually restores — be what you build afterward. Rest isn't restriction. It is what you give a tired nervous system so it can finally stop bracing.</p>`

export default function DopamineDetoxPage() {
  const readingTime = calculateReadingTime(content)
  const { intro, body } = splitArticleIntro(processArticleContent(content))

  return (
    <>
      <Navigation />
      <main style={{ minHeight: "100vh", backgroundColor: "#fdf8f3" }}>
        <ArticleHero title={TITLE} category={CATEGORY} date={DATE} highlightWord="Ayurveda" />
        <article style={{ paddingBottom: "96px" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
            {/* Hero to Body Transition */}
            <div style={{ paddingTop: "56px", paddingBottom: "40px", borderBottom: "1px solid #e8d9c5", marginBottom: "48px" }}>
              {/* Metadata with Reading Time */}
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", fontSize: "14px", color: "#8a7a5a", marginBottom: "28px" }}>
                <span>{DATE}</span>
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
            <RelatedReading currentSlug="dopamine-detox-vs-ayurveda" />

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
