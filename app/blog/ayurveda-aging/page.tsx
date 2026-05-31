import { getPostBySlug } from "@/lib/posts";
import { ArticleHero } from "@/components/article-hero";
import { highlightMap } from "@/lib/article-colors";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ slug: "ayurveda-aging" }];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug("ayurveda-aging");
  if (!post) return {};

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
    },
  };
}

export default function ArticlePage() {
  const post = getPostBySlug("ayurveda-aging");
  const highlightWord = highlightMap["ayurveda-aging"];

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleHero
        title={post.title}
        category={post.category}
        date={post.date}
        highlightWord={highlightWord}
      />
      <main className="min-h-screen bg-background">
        <article className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Opening */}
          <p className="text-lg leading-relaxed text-foreground mb-8">
            At some point in your late 30s or 40s, something shifts. The recovery that used to take a night now takes a week. The diet that worked for a decade stops working. The sleep that used to come automatically becomes something you have to manage. The energy that felt unlimited starts to have a ceiling. Western medicine mostly says: yes, this is aging, here are some supplements. Ayurveda says something more specific: what you are experiencing is a transition between life stages, each governed by a different dosha, and if you understand which stage you are in, you can work with it rather than against it.
          </p>

          {/* The three stages of life section */}
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">The three stages of life.</h2>
          <p className="text-base leading-relaxed text-foreground mb-8">
            Ayurveda maps human life into three broad phases, each corresponding to one of the three doshas. The first phase — from birth through adolescence, roughly the first thirty years — is Kapha time. Kapha governs growth, building, and structure. Children have the soft tissues, the heavy sleep, the easy weight gain, and the physical resilience that are characteristic of Kapha energy. The body is building itself. The second phase — from roughly the late 20s through the mid-50s — is Pitta time. Pitta governs ambition, transformation, metabolism, and achievement. This is why the 30s and 40s are typically the period of peak career drive, peak metabolic function, and peak intensity. The fire of Pitta is running the show. The third phase — from the mid-50s onward — is Vata time. Vata governs movement, dryness, lightness, and deterioration. The natural drying and lightening of the body that happens with aging are Vata qualities expressing themselves at a life stage level.
          </p>

          {/* Pitta to Vata transition section */}
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">What the Pitta-to-Vata transition actually feels like.</h2>
          <p className="text-base leading-relaxed text-foreground mb-8">
            The shift most people notice and struggle with is the transition out of Pitta time. In the early 40s, the Pitta fire that has been running your metabolism, your drive, your recovery, and your hormones begins to modulate. For women, this is often experienced as perimenopause — the hormonal transition that marks the winding down of the reproductive Pitta phase. For men, the equivalent shift is less dramatic but real: slower recovery, changing body composition, a shift in what the body needs. The changes feel like something is wrong because they are departures from a baseline that was itself a particular phase — not a permanent state. The 35-year-old body was Pitta time. The 48-year-old body is something different, and it needs to be managed differently. This is not decline in the Ayurvedic understanding. It is transition.
          </p>

          {/* What changes section */}
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">What changes, practically.</h2>
          <p className="text-base leading-relaxed text-foreground mb-8">
            As Vata begins to rise in the mid-life transition, specific patterns emerge that are recognisable once you know what you are looking at. Sleep becomes lighter and more fragile — Vata governs the nervous system, and an increasingly Vata system means a more easily disturbed sleep. The 3am wake-up, the difficulty returning to sleep, the feeling of never quite getting enough — these are Vata signatures. Digestion becomes more irregular. The strong digestive fire of Pitta time gives way to more variable agni. What you could eat at 35 without consequence starts to have consequences at 45. Joints and skin become drier. Vata's dryness quality expresses itself in the tissues. Anxiety increases — elevated Vata means elevated mental activity, more worry, more future-orientation, more difficulty being present. Recovery slows. The same exercise that bounced back from overnight now needs a day or two.
          </p>

          {/* How to work with it section */}
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">How to work with it.</h2>
          <p className="text-base leading-relaxed text-foreground mb-8">
            The Ayurvedic response to the rising Vata of mid-life is not to fight it but to counterbalance it with the opposite qualities: warmth, moisture, heaviness, regularity, and nourishment. Routine becomes more important, not less. The irregularity that Vata naturally creates is counteracted by consistent meal times, consistent sleep times, and consistent morning practices. Oil becomes more important. Warm oil applied to the body — Abhyanga — directly addresses the dryness that Vata brings. It nourishes the joints, calms the nervous system, and maintains the moisture in tissues that Vata depletes. This is not a luxury in Ayurvedic medicine. It is basic maintenance for an aging Vata system. Food becomes more important. The lighter foods and more intense flavours that served you in Pitta time may need adjusting. Warming, nourishing, easy-to-digest food becomes the priority — cooked vegetables, warm soups, ghee, root vegetables, warm spiced milk at night. Herbs shift. Ashwagandha becomes even more central in Vata time — it is deeply nourishing to the nervous system and adrenal function. Triphala for digestion. Shatavari for women navigating the hormonal transition.
          </p>

          {/* The opportunity section */}
          <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">The opportunity in the transition.</h2>
          <p className="text-base leading-relaxed text-foreground mb-8">
            There is something Ayurveda says about Vata time that the Western conversation about aging almost never says: it can be the most spiritually clear and mentally rich phase of life, if the body is maintained well enough to support it. Vata's qualities — lightness, movement, subtlety, creativity — are the qualities of the meditating mind, the creative mind, the mind that is no longer primarily oriented toward achievement and accumulation. The burning ambition of Pitta time moderates. Something quieter and potentially deeper becomes available. The problem most people have with aging is that they experience Vata's challenges without the practices that would let them access Vata's gifts. The insomnia, the anxiety, the dryness, the irregular digestion take over because no one told them what was happening or what to do about it. This is what Ayurveda offers in mid-life: not a way to stay in Pitta time, but a way to navigate Vata time with enough stability to actually enjoy it.
          </p>

          {/* Related Articles Section */}
          <section className="mt-16 pt-12 border-t border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link
                href="/blog/signs-of-vata-imbalance"
                className="group p-6 rounded-lg border border-border hover:border-accent transition-colors duration-300"
              >
                <h4 className="font-serif font-semibold text-foreground group-hover:text-accent mb-2">
                  Signs of Vata Imbalance
                </h4>
                <p className="text-sm text-muted-foreground">Learn how to recognize Vata imbalances and their physical manifestations.</p>
              </Link>

              <Link
                href="/blog/ashwagandha-benefits"
                className="group p-6 rounded-lg border border-border hover:border-accent transition-colors duration-300"
              >
                <h4 className="font-serif font-semibold text-foreground group-hover:text-accent mb-2">
                  Ashwagandha Benefits
                </h4>
                <p className="text-sm text-muted-foreground">Discover how ashwagandha supports the nervous system and aging gracefully.</p>
              </Link>

              <Link
                href="/blog/best-ayurvedic-tea-sleep"
                className="group p-6 rounded-lg border border-border hover:border-accent transition-colors duration-300"
              >
                <h4 className="font-serif font-semibold text-foreground group-hover:text-accent mb-2">
                  Best Ayurvedic Tea for Sleep
                </h4>
                <p className="text-sm text-muted-foreground">Explore herbal teas that support restful sleep during the Vata transition.</p>
              </Link>

              <Link
                href="/blog/perimenopause-ayurveda"
                className="group p-6 rounded-lg border border-border hover:border-accent transition-colors duration-300"
              >
                <h4 className="font-serif font-semibold text-foreground group-hover:text-accent mb-2">
                  Perimenopause & Ayurveda
                </h4>
                <p className="text-sm text-muted-foreground">Understand the Ayurvedic approach to navigating perimenopause.</p>
              </Link>
            </div>
          </section>

          {/* CTA Button */}
          <section className="mt-12 pt-12 border-t border-border text-center">
            <p className="text-foreground mb-6">
              Discover your unique constitutional makeup and how to work with it through life's transitions.
            </p>
            <Link
              href="/quiz"
              className="inline-block px-8 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              Take the Free Dosha Quiz
            </Link>
          </section>

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
