import Link from "next/link"

export const metadata = {
  title: "Ayurveda for Hormonal Balance: What the Ancient System Gets Right",
  description: "Ayurveda offers a sophisticated framework for women's hormonal health — from dosha-specific patterns to herbs like Shatavari and Ashwagandha. Here's what I've learned.",
  openGraph: {
    title: "Ayurveda for Hormonal Balance: What the Ancient System Gets Right",
    description: "Ayurveda offers a sophisticated framework for women's hormonal health — from dosha-specific patterns to herbs like Shatavari and Ashwagandha. Here's what I've learned.",
    url: "https://www.doshaflow.com/blog/ayurveda-hormonal-balance",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/ayurveda-hormonal-balance",
  },
}

export default function AyurvedaHormonalBalancePage() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Navigation */}
      <nav className="border-b border-[#e8e0d4] bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#2c1a0e]">
            Dosha<span className="text-[#c49a6c]">Flow</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-sm text-[#5c4a3a] hover:text-[#2c1a0e] transition-colors">
              Blog
            </Link>
            <Link href="/quiz" className="text-sm bg-[#c49a6c] text-white px-4 py-2 rounded-full hover:bg-[#b8896a] transition-colors">
              Take the Quiz
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-16">
        {/* Post Header */}
        <header className="mb-12">
          <time className="text-sm text-[#8a7a6a]">May 28, 2026</time>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#2c1a0e', marginTop: '12px', marginBottom: '16px', lineHeight: 1.2 }}>
            Ayurveda for Hormonal Balance: What I Wish I&apos;d Known Sooner
          </h1>
          <p className="text-[#8a7a6a]">
            By <span className="text-[#2c1a0e] font-medium">Alex</span> · DoshaFlow
          </p>
        </header>

        {/* Post Content */}
        <div className="text-[#3d2e1e]">
          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>I spent the better part of my twenties being told my hormones were &quot;normal.&quot;</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Blood tests in range. Thyroid fine. Cycle regular enough. Nothing technically wrong. And yet: the mood swings the week before my period that felt disproportionate to my actual life. The energy crashes. The skin that would flare up cyclically. The sense that my body was operating on a logic I didn&apos;t have access to.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Western medicine is good at identifying pathology. It&apos;s less good at the space between thriving and diagnosable — the gray zone where millions of women live and are told, essentially, that they&apos;re fine.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Ayurveda lives in that gray zone. And what I&apos;ve learned here in Kerala has reframed almost everything I thought I understood about hormones.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80" 
            alt="Healthy food and wellness" 
            style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', height: '320px' }} 
          />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>How Ayurveda Understands Hormonal Health</h2>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Western medicine understands hormones as chemicals — specific molecules produced by specific glands with specific measurable levels. Estrogen, progesterone, cortisol, insulin. The medical goal is getting those levels into range.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Ayurveda doesn&apos;t have the language of hormones — the system predates endocrinology by millennia. But it has an understanding of the forces that govern the same systems, and that understanding maps onto hormonal health in surprisingly precise ways.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The key concept is <strong>ojas</strong> — the refined essence of all body tissues, the ultimate product of healthy digestion and metabolism. Ojas is described as the source of immunity, vitality, reproductive health, and emotional resilience. When ojas is abundant, the body&apos;s regulatory systems — including what we now understand as hormonal systems — run smoothly. When ojas is depleted, everything becomes dysregulated.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Ojas is built through good digestion, adequate sleep, nourishing food, meaningful connection, and managed stress. It&apos;s depleted by overwork, undereating, poor sleep, chronic stress, excessive stimulation, and what Ayurveda calls &quot;excessive outflow&quot; — giving more than you&apos;re taking in across any dimension of life.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Translate that into the language of modern women&apos;s health and it maps almost perfectly onto the conditions most associated with hormonal disruption.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>The Dosha-Hormone Connection</h2>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Each dosha has specific relationships to hormonal health:</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Vata and hormones:</strong> Vata governs movement and the nervous system — including the communication pathways between the brain, the adrenals, and the reproductive organs. When Vata is high, those communication pathways become erratic. The result is irregular cycles, spotting, or cycles that shift significantly with stress and travel. The anxiety-hormone loop — where stress disrupts hormones, which increase anxiety, which further disrupts hormones — is a Vata pattern. Vata women often experience more dysregulation during perimenopause because of this sensitivity.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Pitta and hormones:</strong> Pitta governs transformation and heat — including the metabolic processes of liver function, inflammation, and the conversion and breakdown of hormones. When Pitta is high, the liver (Pitta&apos;s primary organ) can have trouble processing and clearing hormones efficiently. The result: estrogen excess patterns — heavy periods, PMS with intensity and anger, inflammatory skin flares mid-cycle, symptoms that worsen in summer or with alcohol and spicy food. High-achieving, high-Pitta women often find their hormonal symptoms track closely with their stress and workload.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Kapha and hormones:</strong> Kapha governs structure and fluidity — including the reproductive tissues themselves. Kapha women tend toward longer, heavier cycles, more water retention, and a greater tendency toward conditions like PCOS and hypothyroidism, both of which have a Kapha quality (slow, dense, accumulating). Kapha hormonal imbalance often responds well to stimulating the metabolism and reducing the heavy, dense foods that accumulate Kapha.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <img 
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80" 
            alt="Herbal medicine and wellness" 
            style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', height: '320px' }} 
          />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>The Herbs That Actually Matter</h2>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Ayurveda has a sophisticated pharmacopeia for women&apos;s hormonal health, and several of these herbs now have meaningful Western research behind them.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Shatavari</strong> (<em>Asparagus racemosus</em>) — This is the foundational herb for women&apos;s health in Ayurveda. Cooling, nourishing, and specifically targeted at the reproductive system and hormonal regulation. It&apos;s used to support cycle regularity, ease PMS symptoms, support fertility, manage perimenopause transitions, and maintain healthy estrogen activity. The name translates roughly as &quot;she who has a hundred husbands&quot; — a reference to the vitality and hormonal resilience it supports. Emerging research is validating its effects on hormonal markers and menopausal symptoms.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Ashwagandha</strong> (<em>Withania somnifera</em>) — More commonly known for stress and nervous system support, Ashwagandha&apos;s mechanism here matters: it&apos;s an adaptogen that specifically targets cortisol regulation. Since cortisol is the hormone that, in excess, disrupts the entire hormonal cascade (suppressing progesterone, destabilizing the cycle, depleting thyroid function), addressing it directly addresses downstream hormonal disruption. Several clinical trials have confirmed its ability to lower cortisol and improve thyroid markers.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Brahmi</strong> (<em>Bacopa monnieri</em>) — For the cognitive and emotional dimensions of hormonal imbalance. Brain fog, mood dysregulation, anxiety, and difficulty concentrating in the luteal phase and around perimenopause all respond to Brahmi&apos;s cooling, calming, brain-nourishing properties.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Guduchi</strong> (<em>Tinospora cordifolia</em>) — A powerful adaptogen and immune modulator, increasingly used for the inflammatory and autoimmune conditions that often accompany hormonal disruption in women.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Triphala</strong> — Gut health and hormonal health are deeply linked (the gut microbiome plays a significant role in estrogen metabolism), and Triphala&apos;s gentle daily cleansing action supports the elimination of processed hormones that can recirculate and cause symptoms when the gut isn&apos;t moving efficiently.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>Diet and Lifestyle for Hormonal Balance</h2>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The herbs support the foundation that diet and lifestyle build. In Ayurvedic terms, hormonal health is downstream of digestive health — fix agni, fix ojas, fix the hormones.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Eat warm, cooked, nourishing food.</strong> The correlation between undereating (or eating cold, raw, nutrient-poor food) and hormonal disruption is strong both in Ayurvedic theory and in modern research. The body treats caloric insufficiency as a stress signal that suppresses reproductive function. Eat enough. Eat warm. Eat fat — hormones are built from fat, and low-fat diets have a long, documented history of disrupting hormonal cycles.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Prioritize sleep, specifically the hours before midnight.</strong> The hormonal restoration that happens during sleep is disproportionately concentrated in the earlier hours. The Ayurvedic recommendation to sleep before 10pm isn&apos;t arbitrary — it&apos;s aligned with the circadian rhythms that govern cortisol, growth hormone, and melatonin production.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Reduce alcohol.</strong> Alcohol is processed by the liver, which also processes and clears estrogen. Consistent alcohol consumption — even moderate amounts — impairs estrogen clearance and is directly associated with estrogen-dominance symptoms. This is particularly significant for Pitta types and anyone with PMS, heavy periods, or hormonal acne.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Track the cycle with the doshas.</strong> The menstrual cycle has its own dosha rhythm. The follicular phase (after the period, building toward ovulation) is Kapha-dominant — the time for building, for movement, for social engagement. The ovulatory phase is Pitta — peak energy, leadership, outward expression. The luteal phase is Vata — the time to slow down, turn inward, need more rest. When we push against these rhythms — being as socially and professionally active in the luteal phase as in the follicular — we compound hormonal symptoms.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Abhyanga — oil self-massage.</strong> The practice of warm oil massage before bathing is deeply nourishing to the nervous system and the reproductive tissues. For Vata and Pitta hormonal patterns especially, the daily grounding and cooling practice of abhyanga does something that&apos;s hard to explain but real to experience.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80" 
            alt="Yoga and meditation for hormonal balance" 
            style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', height: '320px' }} 
          />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>What Changed for Me</h2>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>I came to this retreat with what I thought was a stress problem that sometimes expressed as a hormonal problem. What I&apos;m leaving with is the understanding that they&apos;re the same problem, viewed from different angles.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The cortisol-ojas-hormonal cascade isn&apos;t separable. The way I eat, sleep, and manage my nervous system either depletes the system that makes good hormonal function possible, or supports it.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>That&apos;s not complicated. It&apos;s just not the framework I had before.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The herbs help. The diet helps. The sleep helps. But the biggest shift has been understanding that hormonal health isn&apos;t something that gets fixed and then stays fixed — it&apos;s something you maintain, actively, through the daily choices that either build or deplete ojas.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>Where to Start</h2>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>If you&apos;re dealing with hormonal disruption — in any form — start with the foundation before going to the herbs:</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Sleep before 10pm, consistently, for two weeks. Notice what changes in your cycle and your mood.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Eat more warm, nourishing food and more fat. Specifically: ghee, avocado, coconut, nuts. These are the building blocks of hormones and ojas.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Take the dosha quiz to understand whether your pattern is primarily Vata, Pitta, or Kapha — because the specific approach differs significantly.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Then consider Shatavari and Ashwagandha as a starting stack — the two most well-evidenced herbs for women&apos;s hormonal health in the Ayurvedic tradition. Give them three months before evaluating.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The practitioners here have been supporting women&apos;s hormonal health with these tools for generations. The results are often remarkable — not because the tools are magic, but because they address the actual root rather than managing the symptoms.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <p style={{ marginBottom: '20px', lineHeight: 1.75, fontStyle: 'italic' }}>
            Alex is the founder of DoshaFlow, currently at an Ayurvedic retreat in Kerala, India. <Link href="/quiz" className="text-[#c49a6c] hover:underline">Take the dosha quiz</Link> · <Link href="/blog" className="text-[#c49a6c] hover:underline">Read the retreat journal</Link>
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#e8e0d4] py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-[#8a7a6a]">
          <p>&copy; 2026 DoshaFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
