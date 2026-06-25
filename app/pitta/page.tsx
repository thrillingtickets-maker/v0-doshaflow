import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pitta Dosha Guide: Burnout, Inflammation & Stress | DoshaFlow",
  description: "Understanding Pitta dosha — what it is, how it manifests, and the practical protocols for Pitta balance. Burnout, inflammation, irritability, and nervous system recovery.",
  alternates: { canonical: "https://www.doshaflow.com/pitta" },
  openGraph: {
    title: "Pitta Dosha Guide: Burnout, Inflammation & Stress | DoshaFlow",
    description: "Understand Pitta dosha — the causes of burnout, inflammation, and driven exhaustion. Cooling foods, herbs, and daily practices for sustainable energy.",
    type: "article",
    url: "https://www.doshaflow.com/pitta",
  },
}

export const dynamic = 'force-dynamic'

export default function PittaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#C97F3D]/10 text-[#C97F3D] text-xs font-medium tracking-widest uppercase rounded-full mb-6">
            Pitta Dosha
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            You probably don't describe yourself as Pitta. You describe yourself as burned out.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Driven. Relentless. Ambitious. Angry for reasons you don't understand. Burning out despite doing everything right. Welcome to Pitta in overdrive.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-24">
        <div className="max-w-2xl mx-auto space-y-12">
          {/* What Pitta Actually Feels Like */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              What Pitta Actually Feels Like
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Pitta is the dosha of transformation and fire. It governs metabolism, digestion, body temperature, and the drive to achieve. When Pitta is balanced, you feel focused, confident, and capable. You accomplish things. You're a natural leader. You know what you want and you go get it.
              </p>
              <p>
                When Pitta becomes aggravated, the same qualities turn against you. Your drive becomes relentless. Your ambition turns into perfectionism that no outcome can satisfy. You're always moving, always pushing, always heating up internally. The body responds by running hot — inflammation in the gut, skin problems, acid reflux. The mind responds with irritability, impatience, and a burning sensation that won't settle.
              </p>
              <p>
                You're the person who can run on three hours of sleep and still get things done. Until one day you can't. And then you're completely fried.
              </p>
            </div>
          </section>

          {/* The Physical Signs */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Physical Signs of Pitta Imbalance
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <ul className="list-disc pl-6 space-y-2">
                <li>Burnout and exhaustion despite adequate sleep</li>
                <li>Acid reflux, heartburn, or sensitive digestion</li>
                <li>Skin issues: rashes, acne, rosacea, eczema</li>
                <li>Inflammation throughout the body</li>
                <li>Early waking (4-5am) with racing mind</li>
                <li>Irritability and impatience disproportionate to circumstances</li>
                <li>Body temperature running hot, heavy sweating</li>
                <li>Hair loss or graying</li>
                <li>Strong appetite but digestive problems</li>
                <li>An underlying anger or frustration that won't resolve</li>
              </ul>
            </div>
          </section>

          {/* Why Pitta Goes Out of Balance */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Why Pitta Goes Out of Balance in the Modern World
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Pitta imbalance is the burnout epidemic. It's especially common among people in leadership, high-output careers, or any environment that rewards intensity and punishes rest.
              </p>
              <p>
                The conditions that aggravate Pitta are now celebrated: constant striving, competitive environments, high intensity, the pressure to optimize everything. Pitta people are naturally good at these environments, so they thrive — until they don't. The body keeps score. Inflammation accumulates. The nervous system learns to run hot constantly. And then the system begins to fail.
              </p>
              <p>
                The typical Pitta burnout manifests as high cortisol, digestive inflammation, skin problems, and an irritability that seems disconnected from circumstances. Again, blood work comes back normal. But you're not normal. You're on fire.
              </p>
            </div>
          </section>

          {/* The Pitta Protocol */}
          <section>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Pitta Protocol: What Actually Works
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Cooling First</h3>
                <p>
                  The core intervention for Pitta is cooling. Not literally — though that helps — but shifting from a heating lifestyle to a cooling one. This means less intensity, less competition, less heat-generating activity. It also means conscious cooling practices: cool water, cooling herbs, cooling breath work (shitali pranayama).
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Release Before Rest</h3>
                <p>
                  Pitta has to discharge the heat before bed. Intense exercise in the morning or early evening helps. Sauna helps (followed by cool water). Breath work helps. But the key is releasing the accumulated heat before trying to sleep. Otherwise, Pitta lies awake internally burning.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Food That Cools</h3>
                <p>
                  Eat cooling foods: leafy greens, coconut, cucumber, fresh fruit, cooling grains (basmati rice, oats). Reduce heating foods: spicy food, alcohol, red meat. Reduce alcohol especially — for Pitta, alcohol is particularly heating and inflammatory. Your digestion will improve noticeably when heating foods are reduced.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Reduce Intensity</h3>
                <p>
                  This is the hardest prescription for Pitta because intensity feels like success. But intensity is what's burning you out. Reduce competitive activity. Reduce the constant push. Give yourself permission to do less. This is not laziness; it's survival.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Practice Letting Go</h3>
                <p>
                  Pitta holds things rigidly. Practice releasing — through meditation, through letting projects go, through accepting outcomes you can't control. The tighter Pitta grips, the hotter it burns. Learning to release is learning to cool.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">Cooling Herbs</h3>
                <p>
                  Brahmi for mental cooling and reducing inflammation. Ashwagandha for managing cortisol and heat. Cooling coconut and cilantro as part of diet. These work best when combined with lifestyle changes — herbs alone won't cool a heated system.
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
                <strong className="text-foreground">Week 1-2:</strong> Reducing intensity will feel wrong. You'll feel like you're falling behind. You're probably not. Stick with it.
              </p>
              <p>
                <strong className="text-foreground">Week 3-4:</strong> Digestion will improve. Acid reflux will begin to ease. You'll notice the irritability is slightly less sharp.
              </p>
              <p>
                <strong className="text-foreground">Month 2:</strong> Sleep will deepen. The early waking will begin to resolve. Your skin will often clear noticeably as inflammation reduces.
              </p>
              <p>
                <strong className="text-foreground">Month 3+:</strong> You'll recognize yourself again. The burnout has lifted. You have capacity and patience you forgot existed. And you understand now that maintaining this requires ongoing commitment to cooling and release.
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
                <Link href="/blog/nervous-system-burnout" className="text-[#C97F3D] hover:underline font-medium">
                  Nervous System Burnout: The Pitta Trap
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/best-herbs-for-anxiety" className="text-[#C97F3D] hover:underline font-medium">
                  Best Herbs for Anxiety and Irritability
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/best-ayurvedic-tea-sleep" className="text-[#C97F3D] hover:underline font-medium">
                  Best Ayurvedic Tea for Sleep
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/blog/why-am-i-always-bloated" className="text-[#C97F3D] hover:underline font-medium">
                  Why Am I Always Bloated: Pitta Digestion
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/vata" className="text-[#C97F3D] hover:underline font-medium">
                  Vata Dosha Guide
                </Link>
              </p>
              <p className="text-muted-foreground">
                <Link href="/kapha" className="text-[#C97F3D] hover:underline font-medium">
                  Kapha Dosha Guide
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
