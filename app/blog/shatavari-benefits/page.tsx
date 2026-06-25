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

const TITLE = "Shatavari: The Cooling Adaptogen for When Ashwagandha Isn't Working"
const CATEGORY = "Tea & Herbs"
const DATE = "June 24, 2026"
const AUTHOR = "Alex"
const DESCRIPTION =
  "Shatavari is Ayurveda's most underused adaptogen. Unlike ashwagandha, it cools rather than warms. Here is what it actually does, who needs it by dosha, and how to take it."

export const metadata = {
  title: `${TITLE} | DoshaFlow`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.doshaflow.com/blog/shatavari-benefits",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "article",
    url: "https://www.doshaflow.com/blog/shatavari-benefits",
  },
}

const dek =
  "Shatavari is Ayurveda's most underused adaptogen. Unlike ashwagandha, it cools rather than warms. Here is what it actually does, who needs it by dosha, and how to take it."

const content = `<p>Most people who get into Ayurvedic herbs start with ashwagandha. This makes sense — it is the most studied, the most available, and the most recommended for the nervous system exhaustion that brings most people to Ayurveda in the first place. But ashwagandha is a warming herb. And not everyone needs warming.</p>

<p>Shatavari is what they need.</p>

<p>In Sanskrit, the name translates as "she who possesses a hundred husbands" — a reference to the herb's traditional reputation for reproductive and vital nourishment. In practice, shatavari is Ayurveda's primary cooling, nourishing, regenerative adaptogen. Where ashwagandha builds strength, shatavari builds fluidity. Where ashwagandha generates heat, shatavari soothes it. They work on overlapping but fundamentally different pathways.</p>

<p>If you are someone who runs hot, experiences acid reflux under stress, gets skin inflammation, or feels a burning kind of depletion rather than a cold and scattered one — shatavari is the herb ashwagandha is not.</p>

<div style="border:1px solid #e0d5c5;border-radius:8px;overflow:hidden;margin:40px 0;">
  <div style="display:grid;grid-template-columns:120px 1fr 1fr;background:#2a1f14;padding:12px 20px;">
    <div style="font-size:11px;letter-spacing:0.1em;color:#b5763a;text-transform:uppercase;"></div>
    <div style="font-size:11px;letter-spacing:0.1em;color:#b5763a;text-transform:uppercase;">Ashwagandha</div>
    <div style="font-size:11px;letter-spacing:0.1em;color:#f5f0e8;text-transform:uppercase;font-weight:700;">Shatavari</div>
  </div>
  <div style="display:grid;grid-template-columns:120px 1fr 1fr;padding:14px 20px;background:#faf7f2;border-bottom:1px solid #e0d5c5;">
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Thermal quality</div>
    <div style="font-size:13px;color:#4a3728;">Warming</div>
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Cooling</div>
  </div>
  <div style="display:grid;grid-template-columns:120px 1fr 1fr;padding:14px 20px;background:#f5f0e8;border-bottom:1px solid #e0d5c5;">
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Primary action</div>
    <div style="font-size:13px;color:#4a3728;">Builds strength and energy</div>
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Nourishes and soothes</div>
  </div>
  <div style="display:grid;grid-template-columns:120px 1fr 1fr;padding:14px 20px;background:#faf7f2;border-bottom:1px solid #e0d5c5;">
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Best dosha fit</div>
    <div style="font-size:13px;color:#4a3728;">Vata, Kapha</div>
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Pitta, Vata</div>
  </div>
  <div style="display:grid;grid-template-columns:120px 1fr 1fr;padding:14px 20px;background:#f5f0e8;border-bottom:1px solid #e0d5c5;">
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Key symptoms</div>
    <div style="font-size:13px;color:#4a3728;">Cold, scattered, depleted, low drive</div>
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Hot, inflamed, burning, intense</div>
  </div>
  <div style="display:grid;grid-template-columns:120px 1fr 1fr;padding:14px 20px;background:#faf7f2;border-bottom:1px solid #e0d5c5;">
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Gut effect</div>
    <div style="font-size:13px;color:#4a3728;">Stimulates digestion</div>
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Soothes gut inflammation</div>
  </div>
  <div style="display:grid;grid-template-columns:120px 1fr 1fr;padding:14px 20px;background:#f5f0e8;">
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">Signal to switch</div>
    <div style="font-size:13px;color:#4a3728;">If it makes you feel agitated or hot → try shatavari</div>
    <div style="font-size:13px;font-weight:700;color:#2a1f14;">If it makes you feel heavier or sluggish → add ashwagandha</div>
  </div>
</div>

<h2>What Shatavari Actually Is</h2>
<p>Shatavari (<em>Asparagus racemosus</em>) is a climbing plant native to India and the Himalayas. The roots contain the active compounds — steroidal saponins called shatavarins, which are responsible for the documented effects on hormonal balance, immunity, and gut health.</p>

<p>It is classified in Ayurveda as a <strong>Rasayana</strong> — a class of substances that nourish at the deepest tissue level and rebuild <strong>ojas</strong>, the essential vitality that governs immunity, reproductive health, and resilience. Other Rasayanas include ashwagandha and amalaki. What distinguishes shatavari within this class is its cooling, moistening quality. Most Rasayanas are warming. Shatavari is the exception.</p>

<p>In traditional texts, it is associated with Pitta pacification, female reproductive health, gut lining nourishment, digestive inflammation, and immune resilience. Modern research has added: antiulcer activity, anti-inflammatory effects, prebiotic action on gut bacteria, and preliminary evidence for cortisol modulation.</p>

<h2>What Shatavari Actually Does</h2>
<p>The best framework for understanding shatavari's action is systemic cooling and nourishment. It works across multiple systems simultaneously.</p>

<div style="background:#f5f0e8;border-radius:12px;padding:36px;margin:40px 0;">
  <div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;margin-bottom:24px;">Shatavari — what it does, system by system</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
    <div style="padding:18px;background:white;border-radius:8px;">
      <div style="font-size:13px;font-weight:700;color:#2a1f14;margin-bottom:8px;">Digestive system</div>
      <div style="font-size:13px;color:#4a3728;">Soothes the gut lining with documented mucilaginous properties. Reduces stomach and intestinal inflammation. Studied for antiulcer effects. For Pitta-type symptoms: acid reflux, burning digestion, inflammatory gut responses.</div>
    </div>
    <div style="padding:18px;background:white;border-radius:8px;">
      <div style="font-size:13px;font-weight:700;color:#2a1f14;margin-bottom:8px;">Hormonal system</div>
      <div style="font-size:13px;color:#4a3728;">Mild phytoestrogenic activity supports hormonal transitions: perimenopause, menstrual irregularity from Pitta excess, reproductive stress from overwork or nutritional depletion. Also supports ojas — the deep vitality that hormone production depends on.</div>
    </div>
    <div style="padding:18px;background:white;border-radius:8px;">
      <div style="font-size:13px;font-weight:700;color:#2a1f14;margin-bottom:8px;">Immune system</div>
      <div style="font-size:13px;color:#4a3728;">Immunomodulatory rather than stimulating — regulates rather than amplifies immune response. Particularly relevant for Pitta-type overreaction: allergies, skin inflammation, autoimmune tendencies. It doesn't turn immunity up. It balances it.</div>
    </div>
    <div style="padding:18px;background:white;border-radius:8px;">
      <div style="font-size:13px;font-weight:700;color:#2a1f14;margin-bottom:8px;">Nervous system</div>
      <div style="font-size:13px;color:#4a3728;">Not sedating. Nourishing. Reduces the inflammatory quality of Pitta-type stress — the heat and irritation underneath the drive — while rebuilding the ojas that chronic intensity depletes. The effect is subtle but accumulates over weeks.</div>
    </div>
  </div>
</div>

<p><strong>Digestive system</strong>: Shatavari contains saponins with documented mucilaginous properties. It soothes the gut lining, reduces inflammation in the stomach and small intestine, and has been studied for antiulcer effects. For people with Pitta-type gut symptoms — acid reflux, burning digestion, inflammatory bowel responses — shatavari addresses the inflammatory root rather than suppressing the symptom.</p>

<p><strong>Hormonal system</strong>: The steroidal saponins have mild phytoestrogenic properties, which supports hormonal transitions: perimenopause symptoms (hot flashes, dryness), menstrual irregularity driven by Pitta excess, and reproductive stress from overwork or nutritional depletion. The name "shatavari" as a reproductive tonic is not historical coincidence — it maps precisely to Pitta's tendency to burn through hormonal reserves.</p>

<p><strong>Immune system</strong>: Shatavari appears to regulate rather than simply stimulate immunity. For people with Pitta-type immune overreaction — allergies, skin inflammation, autoimmune tendencies — this regulating action is particularly relevant. It doesn't turn the immune system up. It balances it.</p>

<p><strong>Nervous system</strong>: Less documented than ashwagandha's nervous system effects, but meaningful. Shatavari reduces the inflammatory quality of Pitta-type stress — the heat and irritation — while nourishing the deep reserves that chronic stress depletes. It is not sedating. It is nourishing.</p>

<h2>Who Needs Shatavari vs. Who Needs Ashwagandha</h2>
<p>The practical decision comes down to your constitution and your specific pattern of stress.</p>

<div style="border:1px solid #e0d5c5;border-radius:8px;overflow:hidden;margin:40px 0;">
  <div style="background:#2a1f14;padding:16px 20px;">
    <div style="font-size:11px;letter-spacing:0.1em;color:#b5763a;text-transform:uppercase;">Who needs shatavari — by dosha</div>
  </div>
  <div style="padding:24px;background:#faf7f2;border-bottom:1px solid #e0d5c5;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="font-size:16px;font-weight:700;color:#2a1f14;">Pitta</div>
      <div style="background:#b5763a;color:white;font-size:11px;font-weight:700;padding:3px 12px;border-radius:12px;">Primary candidate</div>
    </div>
    <div style="font-size:13px;color:#4a3728;">Hot, driven, inflamed, perfectionistic. Acid reflux under stress. Skin that reacts in heat. Found ashwagandha too stimulating or agitating. Navigating perimenopause, hormonal intensity, or Pitta-driven burnout. Shatavari is the cooling Rasayana Pitta has been missing.</div>
  </div>
  <div style="padding:24px;background:#f5f0e8;border-bottom:1px solid #e0d5c5;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="font-size:16px;font-weight:700;color:#2a1f14;">Vata</div>
      <div style="background:#8c7055;color:white;font-size:11px;font-weight:700;padding:3px 12px;border-radius:12px;">Secondary / combined</div>
    </div>
    <div style="font-size:13px;color:#4a3728;">Useful when there is significant depletion — the dry, nutritionally depleted Vata type who needs deep nourishment rather than just stimulation. Often used alongside ashwagandha to address both the scattered nervous system (ashwagandha) and the depleted tissue (shatavari).</div>
  </div>
  <div style="padding:24px;background:#faf7f2;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="font-size:16px;font-weight:700;color:#2a1f14;">Kapha</div>
      <div style="background:#c4b49a;color:white;font-size:11px;font-weight:700;padding:3px 12px;border-radius:12px;">Use carefully</div>
    </div>
    <div style="font-size:13px;color:#4a3728;">Kapha's constitution is already moist, nourishing, and cooling by nature. Shatavari's building quality can increase Kapha heaviness. Not a primary recommendation. If a Kapha type uses it, smaller doses and only if hormonal support is specifically needed.</div>
  </div>
</div>

<p><strong>Choose shatavari if you:</strong> run warm or flush easily; experience acid reflux or burning digestion under stress; have skin that reacts with heat — rashes, rosacea, acne that flares in summer; are navigating perimenopause, menstrual irregularity, or hormonal transition; have been described as type A — driven, perfectionistic, intense; or found ashwagandha made you feel agitated, overheated, or unable to sleep. That last point is the most reliable signal: if ashwagandha didn't suit you, shatavari almost certainly will.</p>

<p><strong>Choose ashwagandha if you:</strong> run cold and feel scattered; experience anxiety as fear or depletion rather than heat; struggle with energy and drive more than with intensity; have no gut inflammation or skin reactivity.</p>

<p><strong>Use both if you</strong> have significant burnout with both Vata and Pitta components — depleted and inflamed simultaneously. This pattern is common in people who have been running at high intensity for years: the Pitta-driven overwork has depleted the Vata nervous system. Both herbs, used together, address both layers.</p>

<p>Kapha types rarely need shatavari at the doses most protocols suggest. Kapha is already moist and nourishing by nature — the building quality of shatavari can increase heaviness if Kapha is already elevated.</p>

<h2>How to Take Shatavari</h2>

<div style="background:#2a1f14;border-radius:12px;padding:40px;margin:40px 0;">
  <div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;margin-bottom:8px;">How to take shatavari</div>
  <div style="font-size:20px;font-weight:700;color:#f5f0e8;font-family:Georgia,serif;margin-bottom:24px;">Consistency over 6–8 weeks matters more than dose.</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;gap:14px;padding:14px;background:rgba(255,255,255,0.05);border-radius:8px;">
      <div style="background:#b5763a;color:white;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;min-width:24px;text-align:center;height:fit-content;">1</div>
      <div><strong style="color:#f5f0e8;font-size:14px;">Capsules — 500–1000mg daily</strong><span style="font-size:13px;color:#c4a882;"> — standardised to shatavarins. Take in the evening with warm milk or water. The most consistent and reliable method for daily use.</span></div>
    </div>
    <div style="display:flex;gap:14px;padding:14px;background:rgba(255,255,255,0.05);border-radius:8px;">
      <div style="background:#b5763a;color:white;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;min-width:24px;text-align:center;height:fit-content;">2</div>
      <div><strong style="color:#f5f0e8;font-size:14px;">Shatavari milk — traditional preparation</strong><span style="font-size:13px;color:#c4a882;"> — 1/2 tsp shatavari powder in a cup of warm whole milk with a pinch of cardamom and a small amount of honey. Warm gently, don't boil. Drink before bed. The most bioavailable everyday form and the one closest to traditional use.</span></div>
    </div>
    <div style="display:flex;gap:14px;padding:14px;background:rgba(255,255,255,0.05);border-radius:8px;">
      <div style="background:#b5763a;color:white;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;min-width:24px;text-align:center;height:fit-content;">3</div>
      <div><strong style="color:#f5f0e8;font-size:14px;">Timeline — 6 to 8 weeks minimum</strong><span style="font-size:13px;color:#c4a882;"> — shatavari's effects accumulate gradually, unlike some herbs that act quickly. First signs tend to be improved digestion, reduced skin reactivity, and a quieting of the burning quality that Pitta imbalance produces. Assess at 8 weeks, not 2.</span></div>
    </div>
    <div style="display:flex;gap:14px;padding:14px;background:rgba(255,255,255,0.05);border-radius:8px;">
      <div style="background:#8c7055;color:white;font-size:11px;font-weight:700;padding:3px 8px;border-radius:4px;height:fit-content;">Note</div>
      <div><strong style="color:#f5f0e8;font-size:14px;">Oestrogen-sensitive conditions</strong><span style="font-size:13px;color:#c4a882;"> — shatavari has mild phytoestrogenic activity. If you have an oestrogen-sensitive condition or are taking hormonal medication, consult a qualified practitioner before use. For most people it is well-tolerated.</span></div>
    </div>
  </div>
</div>

<p>The herb has been in continuous use for thousands of years and is well-characterised in both traditional and modern literature. If you have been using ashwagandha and found it too heating, or if you recognise yourself in the Pitta portrait — running hot, burning bright, and quietly depleting your reserves — shatavari is the herb you have been missing.</p>

<div style="background:#f0ebe2;border-radius:12px;padding:36px;margin:48px 0;text-align:center;">
  <div style="font-size:11px;letter-spacing:0.15em;color:#b5763a;text-transform:uppercase;margin-bottom:12px;">Find your dosha</div>
  <div style="font-size:18px;font-weight:700;color:#2a1f14;font-family:Georgia,serif;margin-bottom:16px;">Knowing whether you're primarily Vata, Pitta, or Kapha tells you which adaptogen your body actually needs — and which one to avoid.</div>
  <a href="/quiz" style="display:inline-block;background:#2a1f14;color:#f5f0e8;padding:14px 28px;border-radius:8px;text-decoration:none;font-weight:600;font-size:15px;">Take the Free Dosha Quiz →</a>
</div>`

const PAGE_URL = "https://www.doshaflow.com/blog/shatavari-benefits"

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: new Date(DATE).toISOString(),
    dateModified: new Date(DATE).toISOString(),
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    url: PAGE_URL,
    author: { "@type": "Person", name: "Alex Osborne", url: "https://www.doshaflow.com/founder" },
    publisher: { "@type": "Organization", name: "DoshaFlow", "@id": "https://www.doshaflow.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.doshaflow.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.doshaflow.com/blog" },
      { "@type": "ListItem", position: 3, name: TITLE, item: PAGE_URL },
    ],
  },
]

export default function ShatavariBenefitsPage() {
  const readingTime = calculateReadingTime(content)
  const { intro, body } = splitArticleIntro(processArticleContent(content))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main style={{ minHeight: "100vh", backgroundColor: "#fdf8f3" }}>
        <ArticleHero title={TITLE} category={CATEGORY} date={DATE} highlightWord="Shatavari" />
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
            <RelatedReading currentSlug="shatavari-benefits" />

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
