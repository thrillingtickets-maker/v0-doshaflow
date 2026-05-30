import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ArticleLayout } from "@/components/article-layout"

export const metadata = {
  title: "Ayurvedic Herbs: A Practical Guide to Ashwagandha, Triphala, Brahmi & More",
  description: "A practical guide to the most important Ayurvedic herbs — what they do, the evidence behind them, and how to match them to your dosha type.",
  openGraph: {
    title: "Ayurvedic Herbs: A Practical Guide to Ashwagandha, Triphala, Brahmi & More",
    description: "A practical guide to the most important Ayurvedic herbs — what they do, the evidence behind them, and how to match them to your dosha type.",
    url: "https://www.doshaflow.com/blog/ayurvedic-herbs-guide",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/ayurvedic-herbs-guide",
  },
};

export default function AyurvedicHerbsGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-[680px] mx-auto">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <time className="text-sm text-muted-foreground">
              May 28, 2026
            </time>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4 leading-tight">
              The Ayurvedic Herb Guide: What&apos;s Actually in These Formulas and Why
            </h1>
            <p className="text-muted-foreground">
              By <span className="text-foreground font-medium">Alex</span> · DoshaFlow
            </p>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#C97F3D] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-medium
            prose-blockquote:border-l-4 prose-blockquote:border-[#C97F3D] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/80
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:mb-2
            prose-hr:border-border prose-hr:my-8"
          >
            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <p>I&apos;m sitting in a pharmacy that&apos;s been operating for over 200 years.</p>

            <p>It&apos;s on the grounds of the retreat center in Kerala where I&apos;ve spent the last week, and it looks nothing like a pharmacy. There are no fluorescent lights, no numbered tickets, no white coats. There are wooden shelves floor to ceiling, hundreds of glass jars, bundles of dried roots hanging from beams, and a smell that I can only describe as the earth concentrating itself into a room.</p>

            <p>The practitioner here makes formulas by hand. He knows which plant grows in which part of the property, which combinations do what, which herbs are heating and which are cooling and why that matters for your particular constitution. He&apos;s been doing this for forty years. His father did it before him.</p>

            <img 
              src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=900&q=80" 
              alt="Ayurvedic herbs and spices" 
              style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', height: '320px' }} 
            />

            <p>I&apos;ve spent a lot of time in this room this week, asking questions. This article is what I&apos;ve learned — about the specific herbs that show up most in Ayurvedic medicine, what they actually do, and how to think about them if you&apos;re encountering this system for the first time.</p>

            <img src="https://source.unsplash.com/featured/800x450/?ayurvedic,pharmacy,herbs,kerala,india" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Ayurvedic pharmacy in Kerala" />

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>How to Think About Ayurvedic Herbs</h2>

            <p>Before the list, the framework. Because Ayurvedic herbs don&apos;t work the way Western supplements do, and if you approach them that way, you&apos;ll miss what&apos;s interesting about them.</p>

            <p>In Western medicine, a supplement does one thing. Vitamin C supports immunity. Magnesium helps sleep. The logic is direct and mechanistic.</p>

            <p>In Ayurveda, herbs are understood in terms of their qualities — their heating or cooling nature, their taste, their effect on each of the three doshas (Vata, Pitta, Kapha). Ashwagandha isn&apos;t just &quot;good for stress.&quot; It&apos;s a warming, heavy, grounding herb that specifically pacifies Vata — the dosha of movement, anxiety, and depletion. That distinction matters, because the same herb that calms a Vata type might not be right for a Pitta type running hot.</p>

            <p>The other thing to understand: Ayurvedic herbs are rarely used alone. The formulas I&apos;ve been watching the practitioner here make are combinations — herbs that enhance each other&apos;s absorption, balance each other&apos;s properties, address multiple aspects of an imbalance at once. Triphala, for instance, is a combination of three fruits (Amla, Haritaki, Bibhitaki) that together do something none of them does as well separately.</p>

            <p>I say all of this not to make herbs seem complicated, but to explain why I&apos;ve come to find them more interesting than the single-ingredient supplements I used to buy at Whole Foods. There&apos;s a sophistication here that took centuries to develop.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>The Herbs You&apos;ll Encounter Most</h2>

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Ashwagandha — The Foundation</h3>

            <p>If you&apos;ve heard of one Ayurvedic herb, it&apos;s this one. Ashwagandha (Withania somnifera) is now globally famous, and for once the hype is somewhat justified. This is the most well-researched Ayurvedic herb in Western clinical literature, with strong evidence for stress reduction, sleep quality, testosterone support, and nervous system recovery.</p>

            <p>In Ayurvedic terms, it&apos;s a <em>rasayana</em> — a rejuvenating tonic — with a specific affinity for the nervous system and reproductive system. It&apos;s warming and grounding, which makes it particularly suited to Vata types dealing with anxiety, depletion, and poor sleep. My practitioner calls it &quot;the herb that gives strength to the weak.&quot;</p>

            <p>What I&apos;ve learned here: the root form is more potent than most capsule products you&apos;ll find in the West. And it works slowly — this is not a one-dose herb. Three months is a meaningful trial period.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Turmeric — The Anti-Inflammatory Workhorse</h3>

            <p>Turmeric (Curcuma longa) has the strongest evidence base of any Ayurvedic herb for anti-inflammatory effects, joint health, gut health, and metabolic support. The active compound curcumin has been studied extensively, though the Ayurvedic tradition uses the whole root — not an extract — and almost always combines it with black pepper, which dramatically increases absorption.</p>

            <p>In Ayurvedic terms, turmeric is tridoshic — meaning it&apos;s generally balancing for all three doshas, which is unusual. It&apos;s bitter and pungent, it clears heat, it supports digestion, and it&apos;s been used here for thousands of years as a fundamental detox herb.</p>

            <p>The kitchen at this retreat uses turmeric in almost every meal. Not supplements — food. That&apos;s the original delivery system.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Ginger — Agni&apos;s Best Friend</h3>

            <p>Agni is the Ayurvedic concept of digestive fire — the capacity of the body to transform food, process experience, and eliminate waste. Almost all disease in Ayurveda is understood as beginning with weakened agni. Ginger (Zingiber officinale) is the primary herb for stoking it.</p>

            <p>Fresh ginger, dry ginger, ginger in tea, ginger in food — the uses here are constant. It improves circulation, reduces nausea, stimulates digestion, and clears sluggishness from the gut. Modern evidence is strong for its anti-nausea and digestive properties.</p>

            <p>In terms of dosha: ginger is warming and stimulating, making it especially good for Vata and Kapha types. Pitta types should use it more moderately — too much heat on an already-hot constitution is its own problem.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Amla (Indian Gooseberry) — The Vitamin C Bomb</h3>

            <p>Amla (Emblica officinalis) is one of the most nutrient-dense foods on the planet — extremely high in vitamin C, antioxidants, and compounds that support immunity, skin, hair, and longevity. It&apos;s one of the three fruits in Triphala and is considered a <em>rasayana</em> in its own right.</p>

            <p>The taste is extraordinary. It&apos;s sour, astringent, bitter, and sweet all at once — an experience that doesn&apos;t translate well to capsule form. The practitioners here eat it raw. I tried it. It&apos;s intense in the best way.</p>

            <p>Strong evidence for its antioxidant, immunomodulating, and metabolic effects. Worth taking seriously.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Triphala — The Gut Reset</h3>

            <img 
              src="https://images.unsplash.com/photo-1599909631430-c9a34a03c1b7?w=900&q=80" 
              alt="Turmeric root and powder" 
              style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', height: '320px' }} 
            />

            <p>Triphala (&quot;three fruits&quot;) is the combination of Amla, Haritaki, and Bibhitaki — and it&apos;s the most commonly prescribed Ayurvedic formula for gut health, elimination, and gentle detoxification. It&apos;s also one of the most studied Ayurvedic formulas in Western research.</p>

            <p>What it does: supports regular elimination without being a harsh laxative, gently cleanses the digestive tract, supports the gut microbiome, and acts as a mild antioxidant. It&apos;s tridoshic — appropriate for all constitutions — and used long-term rather than as a quick fix.</p>

            <p>This is the formula I&apos;ve been taking every morning here. The results on my digestion have been noticeable within days.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Brahmi — The Brain Herb</h3>

            <p>Brahmi (Bacopa monnieri) is Ayurveda&apos;s primary herb for the mind: focus, memory, learning, and anxiety. It&apos;s cooling and calming, which makes it particularly good for Pitta types dealing with mental overload and burnout — and for anyone whose mind is running too hot and fast.</p>

            <p>Moderate evidence in Western research for cognitive function and anxiety reduction. It works slowly — meaningful effects at 8-12 weeks. The practitioners here describe it as &quot;making the mind still enough to actually think.&quot;</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Tulsi (Holy Basil) — The Adaptogen You Haven&apos;t Heard Of</h3>

            <p>Tulsi (Ocimum sanctum) is revered in India the way few plants are. It grows in almost every household. It&apos;s used in religious practice. And it&apos;s one of the most effective adaptogens I&apos;ve encountered — herbs that help the body adapt to stress without either stimulating or sedating.</p>

            <p>Tulsi calms the nervous system, supports the immune system, clears respiratory congestion, and has a quality that&apos;s hard to describe: it makes you feel more present. More settled. The taste is distinctive — clove-like, complex, slightly peppery.</p>

            <p>Moderate-to-strong evidence for its adaptogenic, immunomodulating, and anti-inflammatory properties. Available as a tea, which is my preferred form.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Shatavari — For Women&apos;s Health</h3>

            <p>Shatavari (Asparagus racemosus) is Ayurveda&apos;s primary herb for women&apos;s reproductive health. It supports hormonal balance, helps with the transition through perimenopause, supports milk production in nursing mothers, and has a cooling, nourishing quality that counters the heat and depletion that often accompany hormonal fluctuation.</p>

            <p>The name translates roughly as &quot;she who has a hundred husbands&quot; — a reference to the vitality and reproductive strength it&apos;s associated with. That&apos;s not the most modern framing, but the underlying clinical data on hormonal support is interesting and growing.</p>

            <p>Moderate evidence. Worth the attention it&apos;s getting in women&apos;s wellness circles.</p>

            <img src="https://source.unsplash.com/featured/800x450/?herbs,jars,apothecary,spices,colorful" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Ayurvedic herb collection" />

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Neem — The Bitter Purifier</h3>

            <p>Neem (Azadirachta indica) is intensely bitter, antibacterial, and historically used for skin conditions, blood purification, and immune support. It&apos;s one of those herbs that every practitioner here reaches for when something is infected, inflamed, or needs clearing.</p>

            <p>The bitterness is significant in Ayurvedic terms — bitter taste specifically reduces Pitta and Kapha, clears heat, and supports detoxification. Neem is not a pleasant herb to take. It&apos;s not supposed to be.</p>

            <p>Moderate evidence for its antimicrobial and anti-inflammatory properties.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h3 style={{ fontSize: '20px', fontWeight: 700, marginTop: '36px', marginBottom: '12px', color: '#2c1a0e' }}>Ashwagandha + Shatavari + Brahmi — The Core Three</h3>

            <p>If I had to pick three herbs to start with based on what I&apos;ve learned here, it would be these. Ashwagandha for the nervous system and stress response, Shatavari for hormonal nourishment (particularly for women), and Brahmi for the mind. Together they address the three things most modern people need most: better stress recovery, hormonal balance, and a quieter mind.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>The Herbs With the Strongest Evidence</h2>

            <p>For the scientifically inclined, here&apos;s where the Western research is strongest:</p>

            <p><strong>Strong evidence:</strong> Ashwagandha, Turmeric, Ginger, Amla, Black Pepper (specifically for bioavailability enhancement)</p>

            <p><strong>Moderate-to-strong:</strong> Tulsi, Brahmi, Triphala, Shatavari, Guduchi</p>

            <p><strong>Traditional with emerging evidence:</strong> Neem, Vetiver, Haritaki, Bibhitaki, Punarnava</p>

            <p>This doesn&apos;t mean the traditional herbs are ineffective — it means they haven&apos;t been funded for Western clinical trials. The evidence gap reflects economics, not necessarily efficacy.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>How I Think About Using These Herbs</h2>

            <p>The practitioners here have a specific view: herbs work best when they&apos;re matched to your constitution and your current imbalance. Taking Ashwagandha because it&apos;s popular is less effective than taking it because you&apos;re a Vata type dealing with depletion. Taking Brahmi because it&apos;s a nootropic is less targeted than taking it because your mind genuinely runs too fast.</p>

            <p>This is where the dosha quiz becomes useful — not as a personality test, but as a way to identify your constitution and understand what your body is actually asking for. Once you know whether you&apos;re Vata, Pitta, or Kapha — or some combination — the herb recommendations get much more specific.</p>

            <p>That specificity is what I&apos;ve been experiencing here. I&apos;m not taking a general wellness stack. I&apos;m taking a formula built for my constitution, adjusted this week based on what&apos;s happening in my body right now. The difference is real.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>A Starting Point</h2>

            <img 
              src="https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=900&q=80" 
              alt="Ashwagandha and Ayurvedic herbs" 
              style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', height: '320px' }} 
            />

            <p>If you&apos;re new to Ayurvedic herbs, start simple:</p>

            <p><strong>Triphala</strong> — one of the most universally appropriate formulas, good for almost everyone, best taken at night before bed. Start here for gut health and elimination.</p>

            <p><strong>Ashwagandha</strong> — if you&apos;re dealing with chronic stress, poor sleep, or anxiety. Take it consistently for at least 8 weeks before evaluating.</p>

            <p><strong>Tulsi tea</strong> — replace one cup of coffee with tulsi tea in the afternoon. Notice the difference in how your nervous system feels by evening.</p>

            <p>Then take the dosha quiz. Know your constitution. Let the recommendations get specific.</p>

            <img src="https://source.unsplash.com/featured/800x450/?ashwagandha,triphala,herbs,powder,india" style={{width:'100%', borderRadius:'8px', margin:'32px 0'}} alt="Classical Ayurvedic herbs" />

            <p>The herbs here aren&apos;t magic. They&apos;re 5,000 years of paying attention to what works — and in this particular pharmacy, in this particular room that smells like concentrated earth, that lineage is very hard to dismiss.</p>

            <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

            <p><em>Alex is the founder of DoshaFlow, currently at an Ayurvedic retreat in Kerala, India. <Link href="/quiz" className="text-[#C97F3D] hover:underline">Take the dosha quiz →</Link> · <Link href="/blog" className="text-[#C97F3D] hover:underline">Read the retreat journal →</Link></em></p>
          </div>

          {/* Post Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#C97F3D] hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </Link>
          </footer>
        </div>
      </article>

      <Footer />
    </main>
  )
}
