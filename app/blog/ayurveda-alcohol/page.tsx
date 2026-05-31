"use client"
import { ArticleHero } from "@/components/article-hero"
import Link from "next/link"

export default function AyurvediaAlcoholPage() {
  return (
    <main className="min-h-screen bg-background">
      <ArticleHero
        title="Alcohol and Ayurveda: What the Classical Texts Actually Say"
        category="article"
        date="May 27, 2026"
        highlightWord="Alcohol"
      />

      {/* Article Content */}
      <article className="pt-12 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground mb-12">
            <p>
              Before you assume Ayurveda is going to tell you to stop drinking, know this: the classical texts contain entire chapters dedicated to fermented drinks. Charaka and Sushruta, the two foundational figures of Ayurvedic medicine, both wrote extensively about alcohol — its properties, its correct use, its therapeutic applications, and yes, its dangers. The Ayurvedic position on alcohol is not do not drink. It is considerably more nuanced than that, and considerably more interesting.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">The classical texts on alcohol.</h2>
            <p>
              The Charaka Samhita dedicates a full chapter to what it calls Madya — fermented drinks — classifying them by their ingredients, their effects on the doshas, and their appropriate use. Sushruta goes further, describing over 84 types of wine and fermented preparations. More importantly, the texts describe a category of medicinal alcoholic preparations called Arishtas and Asavas — herbal fermentations in which medicinal herbs are steeped in or fermented with water and natural sugars. These are not ceremonial. They are still used in Ayurvedic clinical practice today. Dashamoolarishtam is a fermented herbal formulation used for postpartum recovery, muscle weakness, and Vata disorders. These are pharmacy items in India, not ancient curiosities. Alcohol, in the Ayurvedic framework, is neither prohibited nor recommended universally. It is a substance with specific properties — heating, penetrating, fast-acting — that can be therapeutic in the right context and harmful in the wrong one.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What alcohol does to each dosha.</h2>
            <p>
              Alcohol is heating and Pitta-aggravating by nature. This is the most important thing to understand about it from an Ayurvedic perspective. For Vata types — cold, dry, anxious, irregular — small amounts of warming alcohol can actually be grounding. A small glass of red wine with a meal, taken occasionally, is considered less disruptive for Vata than for other constitutions. The heat and heaviness counter some of Vata&apos;s natural instability. For Pitta types — already hot, sharp, and intense — alcohol adds fuel to an already-burning fire. The inflammation, the irritability, the skin issues, the headaches, the next-day regret: these are Pitta responses to a Pitta-aggravating substance. For Kapha types — heavy, slow, dense — alcohol&apos;s initial stimulating effect might feel appealing, but the heaviness and the ama it produces over time work directly against Kapha&apos;s need for lightness and movement.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">Where Ayurveda draws the line.</h2>
            <p>
              The texts are unambiguous about the difference between conscious moderate use and what they call Madatyaya — intoxication and alcohol dependency. Charaka describes this as a disease state, not a moral failing, but a serious one. The symptoms he lists are recognisable to anyone who has spent time around addiction: irregular sleep, destroyed digestion, weakened immunity, mental instability, loss of memory and judgment. The Ayurvedic position is not that alcohol is evil. It is that alcohol used unconsciously — without regard to constitution, season, quantity, food intake, or state of health — causes predictable damage to the body over time.
            </p>

            <h2 className="font-serif text-3xl text-foreground mt-12 mb-6">What this means practically.</h2>
            <p>
              Know your dosha. If you are predominantly Pitta, you are working against your constitution every time you drink. Never drink on an empty stomach — alcohol needs food to buffer its impact on digestion. Season matters — alcohol is more disruptive in summer when Pitta is already naturally elevated. Quality over quantity — fermented drinks made from fruits, grains, and herbs are preferable to distilled spirits. And if you are using alcohol to manage anxiety — which the Charaka Samhita specifically identifies as one of the most common misuses — Ayurveda would say you are borrowing against a debt that compounds. The anxiety that drives the drinking is being made structurally worse by the drinking, even if it is temporarily quieted by it. That particular loop is not a moral problem in the Ayurvedic framework. It is a clinical one, with clinical solutions.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12 mb-12">
            <Link
              href="/quiz"
              className="inline-block px-6 py-3 bg-[#C97F3D] text-white font-semibold rounded hover:bg-[#B86F2D] transition-colors"
            >
              Take the Free Dosha Quiz
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
