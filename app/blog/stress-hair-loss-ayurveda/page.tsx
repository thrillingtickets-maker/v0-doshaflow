import { Navigation } from "@/components/navigation"
import { ArticleHero } from "@/components/article-hero"
import { ArticleEmailCapture } from "@/components/article-email-capture"
import { processArticleContent } from "@/lib/process-article-content"
import { calculateReadingTime, formatReadingTime } from "@/lib/reading-time"
import { getRelatedArticles } from "@/lib/related-articles"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

const TITLE = "Stress and Hair Loss: The Ayurvedic Explanation (And What to Do About It)"
const CATEGORY = "Stress & Anxiety"
const DATE = "June 3, 2026"
const DESCRIPTION =
  "Chronic stress causes hair loss through cortisol, DHT, and poor circulation. Ayurveda identifies the dosha-specific root cause and offers a protocol that goes deeper than scalp treatments."

export const metadata = {
  title: `${TITLE} | DoshaFlow`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.doshaflow.com/blog/stress-hair-loss-ayurveda",
  },
  openGraph: {
    title: `${TITLE} | DoshaFlow`,
    description: DESCRIPTION,
    type: "article",
    url: "https://www.doshaflow.com/blog/stress-hair-loss-ayurveda",
  },
}

const dek =
  "If your hair started thinning after a stressful year, that timing is not a coincidence. Here is how stress reaches the follicle — and what Ayurveda does about the root cause rather than the scalp."

const content = `<p>Most people notice it in the shower, or in the extra strands left on the pillow, or in a part line that has quietly widened. And almost always, when they trace it back, the thinning began a few months after a hard stretch — a loss, a deadline season, an illness, a period of poor sleep and too much coffee. That timing is not a coincidence. Stress and hair loss are connected through real, measurable biology. Ayurveda described the pattern long before the mechanisms had names, and its approach is useful precisely because it looks past the scalp to the system underneath.</p>

<p>This is educational information, not medical advice. Sudden or patchy hair loss can have medical causes that deserve a proper diagnosis, so please read this as a framework for understanding — and see a qualified clinician if your hair loss is rapid, patchy, or accompanied by other symptoms.</p>

<div style="background:#f0ebe2;border-radius:12px;padding:48px;text-align:center;margin:48px 0;">
  <div style="font-size:18px;font-style:italic;color:#4a3728;font-family:Georgia,serif;max-width:560px;margin:0 auto;line-height:1.7;">"Hair is often called the last priority of the body. When resources are scarce, the body protects the organs it needs to survive — and the follicle is one of the first places it economises."</div>
  <div style="color:#b5763a;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;margin-top:20px;">Stress-related shedding usually shows up two to three months after the stressful period — not during it.</div>
</div>

<h2>How Stress Actually Reaches the Follicle</h2>
<p>There is no single pathway. Chronic stress affects hair through several overlapping mechanisms, which is part of why it can be stubborn to reverse with topical products alone.</p>

<p><strong>Cortisol and the resting phase.</strong> Each follicle cycles through growth, transition, and rest. Sustained stress raises cortisol, which can push a larger-than-normal share of follicles into the resting phase at once. Those hairs then shed together a couple of months later — a pattern dermatology calls telogen effluvium. It is one of the most common and most reversible forms of stress-related shedding.</p>

<p><strong>Androgens and DHT sensitivity.</strong> Stress influences the hormonal environment, and in people who are genetically sensitive to dihydrotestosterone (DHT), that environment can accelerate the gradual miniaturisation of follicles along the hairline and crown. Stress does not create this sensitivity, but it can hurry along a process that was already latent.</p>

<p><strong>Circulation and nutrient delivery.</strong> The follicle is metabolically demanding and depends on a steady supply of blood, oxygen, and micronutrients. Chronic stress narrows peripheral circulation and disrupts digestion, so even a reasonable diet can deliver less to the scalp than it should.</p>

<p><strong>Digestion and absorption.</strong> Stress degrades the gut's ability to extract iron, protein, zinc, and B vitamins — the raw materials hair is built from. This is the mechanism Ayurveda emphasises most, and modern nutrition increasingly agrees: you are not only what you eat, you are what you absorb.</p>

<h2>The Ayurvedic Reading</h2>
<p>Ayurveda places hair within the bone and nervous-tissue economy of the body — <em>asthi dhatu</em> — and treats the hair as a byproduct of how well the deeper tissues are nourished. Healthy hair, in this view, is a downstream signal of strong digestion (<strong>agni</strong>), good tissue nourishment, and protected vitality (<strong>ojas</strong>). When stress depletes those reserves, hair is among the first non-essential outputs the body sacrifices.</p>

<p>Classical texts also link hair quality closely to <em>pitta</em>, the heat-and-metabolism principle. Excess pitta — driven by stress, intensity, alcohol, heat, and overwork — is the pattern most often associated with premature thinning and greying. But the dosha that is actually driving your shedding determines what will help, which is why generic advice so often disappoints.</p>

<h2>Find the Pattern Before the Protocol</h2>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin:40px 0;">
  <div style="border-radius:8px;overflow:hidden;">
    <div style="background:#2a1f14;padding:16px 20px;"><div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;">Vata pattern</div><div style="font-size:15px;font-weight:700;color:#f5f0e8;margin-top:4px;">Dry, brittle, breaking</div></div>
    <div style="background:#f5f0e8;padding:20px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:13px;color:#4a3728;">Hair dry and splitting</div>
      <div style="font-size:13px;color:#4a3728;">Anxious, wired, poor sleep</div>
      <div style="font-size:13px;color:#4a3728;">Irregular meals, cold food</div>
      <div style="font-size:13px;font-weight:600;color:#b5763a;margin-top:8px;">Support: warm oil, regular meals, grounding routine</div>
    </div>
  </div>
  <div style="border-radius:8px;overflow:hidden;">
    <div style="background:#2a1f14;padding:16px 20px;"><div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;">Pitta pattern</div><div style="font-size:15px;font-weight:700;color:#f5f0e8;margin-top:4px;">Thinning, early greying</div></div>
    <div style="background:#f5f0e8;padding:20px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:13px;color:#4a3728;">Receding hairline, crown</div>
      <div style="font-size:13px;color:#4a3728;">Driven, irritable, overheated</div>
      <div style="font-size:13px;color:#4a3728;">Alcohol, coffee, overwork</div>
      <div style="font-size:13px;font-weight:600;color:#b5763a;margin-top:8px;">Support: cooling foods, less alcohol, heat reduction</div>
    </div>
  </div>
  <div style="border-radius:8px;overflow:hidden;">
    <div style="background:#2a1f14;padding:16px 20px;"><div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;">Kapha pattern</div><div style="font-size:15px;font-weight:700;color:#f5f0e8;margin-top:4px;">Oily scalp, clogged roots</div></div>
    <div style="background:#f5f0e8;padding:20px;display:flex;flex-direction:column;gap:8px;">
      <div style="font-size:13px;color:#4a3728;">Greasy scalp, slow shedding</div>
      <div style="font-size:13px;color:#4a3728;">Heavy, sluggish, congested</div>
      <div style="font-size:13px;color:#4a3728;">Rich diet, low movement</div>
      <div style="font-size:13px;font-weight:600;color:#b5763a;margin-top:8px;">Support: scalp stimulation, lighter diet, movement</div>
    </div>
  </div>
</div>

<h2>A Protocol That Goes Deeper Than the Scalp</h2>
<p>Topical treatments address the follicle from the outside. They can help, but if stress is the driver, the more important work is upstream — calming the nervous system, restoring digestion, and rebuilding reserves. The following is a general wellness framework, not a prescription.</p>

<p><strong>Protect sleep first.</strong> Deep sleep is when the body repairs tissue and lowers cortisol. Consistent sleep before 10pm does more for stress-related shedding than any serum. This is the single highest-leverage change for most people.</p>

<p><strong>Steady the meals.</strong> Regular, warm, protein-adequate meals give hair its raw materials and keep blood sugar — and therefore cortisol — stable through the day. Hair is largely protein; chronic under-eating shows up at the scalp.</p>

<p><strong>Reduce the heat inputs.</strong> For pitta-pattern thinning especially, lowering alcohol, excess caffeine, and relentless intensity removes a major accelerant. This is often the difference-maker that topical routines cannot replicate.</p>

<p><strong>Nourish the scalp with oil.</strong> Regular scalp massage with a suitable oil improves local circulation and is one of the oldest, most pleasant Ayurvedic practices. It also doubles as a nervous-system down-regulator — the act of slow self-massage lowers stress directly.</p>

<p><strong>Consider studied adaptogens — carefully.</strong> Herbs such as ashwagandha and bhringraj appear frequently in traditional hair formulas, and ashwagandha has modern research on stress and cortisol. These are not magic, interactions exist, and they are not appropriate for everyone — so treat them as something to discuss with a qualified practitioner, not to self-prescribe.</p>

<div style="background:#f5f0e8;border-radius:12px;padding:36px;margin:40px 0;border-left:4px solid #c49a6c;">
  <div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;margin-bottom:12px;">When to see a professional</div>
  <p style="margin:0;font-size:15px;color:#4a3728;line-height:1.75;">Hair loss that is sudden, patchy, comes out in clumps, or arrives with fatigue, weight change, or scalp irritation deserves medical evaluation. Thyroid issues, iron deficiency, and autoimmune conditions all cause shedding and are very treatable once identified. Ayurveda complements that care — it does not replace it.</p>
</div>

<h2>The Reassuring Part</h2>
<p>Stress-related shedding is, in most cases, one of the more reversible forms of hair loss. The follicles are usually not dead; they are dormant, waiting for conditions to improve. When the nervous system settles, digestion strengthens, and reserves rebuild, the cycle tends to recover — though it takes patience, because hair grows on a timescale of months, not days. The work is less about chasing the hair and more about giving the body, finally, enough margin to grow it.</p>`

export default function StressHairLossPage() {
  const readingTime = calculateReadingTime(content)
  const relatedArticles = getRelatedArticles("stress-hair-loss-ayurveda")

  return (
    <>
      <Navigation />
      <main style={{ minHeight: "100vh", backgroundColor: "#fdf8f3" }}>
        <ArticleHero title={TITLE} category={CATEGORY} date={DATE} highlightWord="Hair" />
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
          `}</style>
            <div
              style={{ color: "#2c1a0e", lineHeight: 1.85 }}
              dangerouslySetInnerHTML={{ __html: processArticleContent(content) }}
            />

            {/* Email Capture Section */}
            <ArticleEmailCapture articleTitle={TITLE} />

            {/* Related Reading Section */}
            <style>{`
            .related-reading-links a {
              display: block;
              color: #2a1f14;
              font-size: 18px;
              font-weight: 600;
              text-decoration: none;
              transition: color 0.2s;
            }
            .related-reading-links a:hover {
              color: #8a7a5a;
            }
          `}</style>
            <div style={{ marginTop: "64px", padding: "32px", borderRadius: "12px", background: "#f5f0e8", border: "1px solid #e0d5c5" }}>
              <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#b5763a", marginBottom: "18px" }}>
                Continue Reading
              </div>
              <div style={{ display: "grid", gap: "14px" }} className="related-reading-links">
                {relatedArticles.map((article) => (
                  <a key={article.href} href={article.href}>
                    {article.title} →
                  </a>
                ))}
              </div>
            </div>

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
