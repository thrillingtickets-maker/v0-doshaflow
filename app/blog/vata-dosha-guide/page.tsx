import Link from "next/link";

export const metadata = {
  title: "Vata Dosha: Signs You're Out of Balance and How to Fix It",
  description: "Vata dosha governs movement, creativity, and the nervous system. Learn the signs of Vata imbalance — anxiety, dry skin, insomnia — and exactly how to bring it back into balance.",
  openGraph: {
    title: "Vata Dosha: Signs You're Out of Balance and How to Fix It",
    description: "Vata dosha governs movement, creativity, and the nervous system. Learn the signs of Vata imbalance — anxiety, dry skin, insomnia — and exactly how to bring it back into balance.",
    url: "https://www.doshaflow.com/blog/vata-dosha-guide",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/vata-dosha-guide",
  },
};

export default function VataDoshaGuidePage() {
  return (
    <main className="min-h-screen bg-[#fdf8f3]">
      {/* Navigation */}
      <nav className="border-b border-[#e8d9c5] bg-[#fdf8f3]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#2c1a0e]">
            Dosha<span className="text-[#c49a6c]">Flow</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-sm text-[#5c4a3a] hover:text-[#2c1a0e]">
              Blog
            </Link>
            <Link href="/quiz" className="text-sm bg-[#c49a6c] text-white px-4 py-2 rounded-full hover:bg-[#b08a5c]">
              Take the Quiz
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-[680px] mx-auto px-6 py-16">
        {/* Post Header */}
        <header style={{ marginBottom: '48px' }}>
          <time style={{ fontSize: '14px', color: '#7a6a58' }}>
            May 28, 2026
          </time>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 42px)', color: '#2c1a0e', marginTop: '12px', marginBottom: '16px', lineHeight: 1.2, fontWeight: 700 }}>
            Vata Dosha: Signs You&apos;re Out of Balance and What To Do About It
          </h1>
          <p style={{ color: '#7a6a58' }}>
            By <span style={{ color: '#2c1a0e', fontWeight: 500 }}>Alex</span> · DoshaFlow
          </p>
        </header>

        {/* Article Content */}
        <div style={{ color: '#3d2e1e', fontSize: '17px', lineHeight: 1.75 }}>
          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>I used to think anxiety was just my personality.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The racing thoughts at 2am. The inability to finish one thing before starting three others. The way I&apos;d forget to eat, then wonder why I felt spacey and ungrounded by afternoon. I thought this was just how I was wired — type-A, always-on, slightly scattered.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Then I got my dosha assessment at an Ayurvedic retreat and the practitioner looked at me for about forty-five seconds before saying: &quot;Classic Vata imbalance.&quot;</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Everything she described — the cold hands, the dry skin, the variable digestion, the tendency to overthink — had a name. More importantly, it had a cause. And causes, in Ayurveda, have remedies.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>What Vata Actually Is</h2>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Vata is one of the three doshas — the three fundamental energies that govern how your body and mind function. If Pitta is fire and Kapha is earth, Vata is air and space. It governs movement: the movement of breath, of nerve impulses, of thoughts, of elimination.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>When Vata is in balance, it expresses as creativity, enthusiasm, quick thinking, and adaptability. Vata types are the ideas people, the connectors, the ones who light up a room with energy.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>When Vata is out of balance, that same energy becomes instability. Anxiety. Scattered focus. Insomnia. Dryness — in skin, in joints, in the gut. Constipation. Feeling unmoored.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The qualities of Vata are: cold, light, dry, rough, mobile, subtle, clear. When those qualities accumulate in excess — through cold weather, travel, irregular schedules, stress, screen time, under-eating — Vata goes out of balance. And modern life is essentially a Vata-aggravating machine.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>Signs Your Vata Is Out of Balance</h2>

          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&q=80" 
            alt="Meditation and mindfulness" 
            style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', height: '320px' }} 
          />

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>This is where Ayurveda gets specific in a way that Western medicine often doesn&apos;t. Vata imbalance doesn&apos;t look the same in everyone, but these are the patterns that show up most:</p>

          <p style={{ marginBottom: '12px', lineHeight: 1.75, fontWeight: 600 }}>In the body:</p>
          <ul style={{ marginBottom: '20px', paddingLeft: '24px', lineHeight: 1.75 }}>
            <li style={{ marginBottom: '8px' }}>Dry, rough, or flaky skin — especially in winter or dry climates</li>
            <li style={{ marginBottom: '8px' }}>Cold hands and feet, difficulty warming up</li>
            <li style={{ marginBottom: '8px' }}>Constipation or irregular digestion (bloating, gas, inconsistent)</li>
            <li style={{ marginBottom: '8px' }}>Joint stiffness or cracking</li>
            <li style={{ marginBottom: '8px' }}>Light, interrupted sleep — waking between 2 and 4am is a classic Vata sign</li>
            <li style={{ marginBottom: '8px' }}>Low or fluctuating energy — high in the morning, crashes later</li>
            <li style={{ marginBottom: '8px' }}>Headaches, especially tension-based</li>
            <li style={{ marginBottom: '8px' }}>Weight loss or difficulty maintaining weight</li>
          </ul>

          <p style={{ marginBottom: '12px', lineHeight: 1.75, fontWeight: 600 }}>In the mind:</p>
          <ul style={{ marginBottom: '20px', paddingLeft: '24px', lineHeight: 1.75 }}>
            <li style={{ marginBottom: '8px' }}>Racing thoughts, difficulty turning the mind off</li>
            <li style={{ marginBottom: '8px' }}>Anxiety, worry, overthinking</li>
            <li style={{ marginBottom: '8px' }}>Difficulty concentrating, jumping between tasks</li>
            <li style={{ marginBottom: '8px' }}>Forgetfulness — starting things but not finishing them</li>
            <li style={{ marginBottom: '8px' }}>Overwhelm when there&apos;s too much on the plate</li>
            <li style={{ marginBottom: '8px' }}>A general feeling of being ungrounded or scattered</li>
          </ul>

          <p style={{ marginBottom: '12px', lineHeight: 1.75, fontWeight: 600 }}>In your patterns:</p>
          <ul style={{ marginBottom: '20px', paddingLeft: '24px', lineHeight: 1.75 }}>
            <li style={{ marginBottom: '8px' }}>Forgetting to eat, then eating erratically</li>
            <li style={{ marginBottom: '8px' }}>Irregular sleep schedule</li>
            <li style={{ marginBottom: '8px' }}>Saying yes to too many things, then burning out</li>
            <li style={{ marginBottom: '8px' }}>Craving stimulation but needing rest</li>
          </ul>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>If you&apos;re reading this list and recognizing yourself in several of these, you&apos;re probably running high Vata. The season matters too — Vata naturally increases in fall and early winter, which is why so many people feel more anxious, dry, and ungrounded as the year winds down.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>What Aggravates Vata</h2>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Before the remedies, it helps to understand what&apos;s making it worse. Vata increases when you:</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Eat cold, raw, or light foods.</strong> Salads, smoothies, crackers, raw vegetables — these are all dry, light, and cold. They increase Vata qualities in the body. This is why Ayurveda doesn&apos;t recommend cold smoothies for breakfast, especially in fall and winter.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Skip meals or eat irregularly.</strong> Vata thrives on rhythm. Skipping meals or eating at random times destabilizes digestion and increases the erratic, spacey quality of Vata.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Travel frequently.</strong> Particularly air travel. There&apos;s a reason frequent flyers often feel dried out, scattered, and off — planes are the most Vata environment imaginable. Cold, dry, pressurized, constantly moving.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Overstimulate your nervous system.</strong> Too much screen time, too much input, too much noise. Vata&apos;s primary seat is in the nervous system, and overstimulating it depletes the whole system.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Stay up late.</strong> Vata time is 2-6am and 2-6pm. Going to bed well before 11pm is one of the most powerful Vata-balancing moves you can make.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Ignore your body&apos;s signals.</strong> Vata types tend to disconnect from physical sensation — working through hunger, pushing through fatigue. The body keeps score.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>How to Balance Vata</h2>

          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80" 
            alt="Yoga and grounding practices" 
            style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', height: '320px' }} 
          />

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The principle is simple: opposites pacify. Because Vata is cold, light, dry, and mobile — you balance it with warm, heavy, oily, and stable.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Warmth and oil.</strong> This is the core of Vata care. Warm cooked foods, warm liquids, oil on the body. Abhyanga — the Ayurvedic practice of self-massage with warm sesame or almond oil before showering — is one of the most grounding things a Vata type can do. It sounds indulgent. It works.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Regularity.</strong> Fixed wake times, meal times, and bedtimes do more for Vata than almost any supplement. The nervous system calms when it can predict the rhythm of the day.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Warm, cooked, oily food.</strong> Kitchari (rice and lentils cooked with ghee and spices), soups, stews, root vegetables, cooked grains. Adding ghee or good oil to most meals. Reducing raw salads and cold drinks.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Warming spices.</strong> Ginger, cinnamon, cumin, cardamom, fennel. These stoke digestive fire and counteract Vata&apos;s cold, light quality. Ginger tea throughout the day is one of the simplest Vata remedies.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Ashwagandha.</strong> This is Vata&apos;s herb — warming, grounding, deeply nourishing to the nervous system. It builds the resilience that Vata types tend to burn through. Taken consistently over 2-3 months, the difference is real.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Less screen time, more sensory grounding.</strong> Walking outside — especially in nature, especially barefoot. Warmth. Scent. Slow, rhythmic movement. Yin yoga. Not hot, fast, dynamic exercise — that increases Vata.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Rest.</strong> Vata types resist rest because they feel guilty when they&apos;re not doing. But rest is the medicine. The nervous system cannot regulate when it&apos;s constantly stimulated.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>The Vata Personality Trap</h2>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>Here&apos;s the thing I had to learn: being a Vata type doesn&apos;t mean you&apos;re destined to be anxious and scattered. It means those are your tendencies when you&apos;re not taking care of yourself. When Vata is balanced, you&apos;re creative, enthusiastic, quick-thinking, and adaptable. Those same qualities that become anxiety when you&apos;re depleted become genuine gifts when you&apos;re resourced.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The goal isn&apos;t to stop being Vata. The goal is to build enough stability that your natural Vata energy has a ground to move through.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>Where to Start</h2>

          <img 
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=80" 
            alt="Warm herbal tea and wellness" 
            style={{ width: '100%', borderRadius: '12px', marginBottom: '32px', objectFit: 'cover', height: '320px' }} 
          />

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>If you suspect you&apos;re running high Vata right now, start with three things:</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Fix your meal timing.</strong> Eat at roughly the same times every day — even if imperfectly. Don&apos;t skip breakfast. This one shift stabilizes digestion and, over time, the nervous system.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Add warmth.</strong> Replace one cold meal or drink with something warm. Swap the morning smoothie for oatmeal with ghee and cinnamon. Have warm water or ginger tea instead of cold water. Small moves, real effects.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}><strong>Take the dosha quiz.</strong> If you haven&apos;t confirmed your constitution, start there. Vata is often a primary dosha but it exists in combination — a Vata-Pitta type needs a somewhat different approach than a Vata-Kapha. Knowing your full picture matters.</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>The practitioner in Kerala put it plainly: &quot;Vata needs to be fed, warmed, and slowed down. That&apos;s it.&quot;</p>

          <p style={{ marginBottom: '20px', lineHeight: 1.75 }}>It really is that simple. And it really is that hard for Vata types to actually do.</p>

          <hr style={{ margin: '40px 0', borderColor: '#e8d9c5' }} />

          <p style={{ marginBottom: '20px', lineHeight: 1.75, fontStyle: 'italic' }}>
            Alex is the founder of DoshaFlow. <Link href="/quiz" style={{ color: '#c49a6c', textDecoration: 'underline' }}>Take the dosha quiz →</Link> · <Link href="/blog" style={{ color: '#c49a6c', textDecoration: 'underline' }}>Read the retreat journal →</Link>
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#e8d9c5] bg-[#fdf8f3] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-[#7a6a58]">
          <p>© 2026 DoshaFlow. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
