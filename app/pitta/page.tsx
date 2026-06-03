"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const dynamic = 'force-dynamic'

export default function PittaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-8 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
              Pitta Dosha
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8"
          >
            <span className="text-balance">
              You&apos;re productive. Driven. Intense.{" "}
              <span className="italic text-[#C97F3D]">And secretly exhausted.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Welcome to Pitta burnout in a high-performance world. Where ambition is virtue — until it isn&apos;t.
          </motion.p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* What Pitta Actually Feels Like */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              What Pitta Actually Feels Like
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Pitta is the dosha of fire and transformation. It governs digestion, metabolism, and the quality of intensity in your drive and intellect. When Pitta is balanced, you are focused, ambitious, confident, and capable of sustained excellence. When Pitta becomes aggravated, you burn out.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              If you&apos;re Pitta, you have a reputation for getting things done. You set high standards for yourself. You notice what&apos;s wrong with things and you have the will to fix them. You&apos;re competitive (even if only with yourself). You have strong opinions and defend them passionately.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The problem is that your intensity is unsustainable. You run on high all the time. Rest feels like laziness. Taking breaks feels like failure. The fire that powers your ambition eventually consumes you. You develop inflammation, skin issues, digestive heat, perfectionist paralysis, and the particular form of exhaustion that comes from burning yourself out on your own standards.
            </p>
          </motion.div>

          {/* Related Symptom Patterns for Pitta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 p-6 bg-primary/5 border border-primary/20 rounded-lg"
          >
            <p className="text-sm font-medium uppercase tracking-wide text-primary mb-4">
              Common Pitta Symptom Clusters
            </p>
            <div className="space-y-3">
              <p className="text-base text-foreground">
                <a href="/blog/signs-of-high-cortisol" className="text-primary hover:underline font-medium">High cortisol patterns</a> are especially common in Pitta types because your high-drive nature produces sustained stress hormone elevation.
              </p>
              <p className="text-base text-foreground">
                <a href="/blog/alcohol-ayurveda-recovery" className="text-primary hover:underline font-medium">Alcohol recovery and heat regulation</a> are critical for Pitta balance — Pitta types often use alcohol to cool down, creating a cycle that eventually worsens inflammation.
              </p>
              <p className="text-base text-foreground">
                <a href="/blog/hair-loss-ayurveda" className="text-primary hover:underline font-medium">Hair loss and premature thinning</a> are common Pitta imbalance signs, often triggered by stress and internal heat.
              </p>
            </div>
          </motion.div>

          {/* Energy Patterns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Energy Patterns in Pitta
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong>Morning:</strong> You wake with purpose. Your mind is already working on problems. You jump into the day without breakfast or with just coffee. Your intensity is an asset early on. You accomplish things quickly.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong>Mid-day:</strong> This is your power hour. You&apos;re most productive between 10am-2pm. You crush your work. You don&apos;t notice hunger because you&apos;re focused. This is when Pitta peaks (10am-2pm) and it&apos;s when you do your best work — but you do it at the cost of proper nutrition.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong>Evening:</strong> You come down hard. All the intensity of the day hits you at once. You either collapse and sleep deeply, or you remain in intensity mode and struggle to turn off. Your sleep is often fitful because your nervous system is still activated from the day.
            </p>
          </motion.div>

          {/* The Pitta Burning Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Pitta Burning Pattern
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Pitta burnout is different than Vata exhaustion. Vata is scattered and unable to settle. Pitta is intensely focused on all the wrong things — perfecting what doesn&apos;t matter, fixing problems that aren&apos;t solvable, pushing toward goals at any cost. This pattern often leads to <a href="/blog/ayurveda-nervous-system-burnout" className="text-primary hover:underline font-medium">nervous system burnout</a> and <a href="/blog/signs-of-high-cortisol" className="text-primary hover:underline font-medium">chronically elevated cortisol</a>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              You develop this internal pressure that becomes toxic. You judge yourself harshly. You judge others harshly. Everything needs to be better, faster, more optimized. The fire of your ambition turns inward and creates <a href="/blog/pitta-inflammation-ayurveda" className="text-primary hover:underline font-medium">inflammation: skin issues, acid reflux, digestive problems</a>, hormonal irregularities, and a pervasive sense of dissatisfaction no matter what you accomplish.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What makes this pattern particularly painful for Pitta is that your discipline and willpower — your greatest strengths — become your greatest liabilities. You push through fatigue when you should rest. You ignore your body&apos;s signals. You believe if you just try harder, you&apos;ll solve the unsolvable. Until one day, your body simply stops cooperating.
            </p>
          </motion.div>

          {/* How Modern Life Aggravates Pitta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              How Modern Life Aggravates Pitta
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Modern work culture is designed to reward Pitta. Hustle culture. Performance metrics. Constant competition. The requirement to be always available and always solving. This is Pitta heaven — until it&apos;s hell and you experience <a href="/blog/ayurveda-nervous-system-burnout" className="text-primary hover:underline font-medium">nervous system burnout</a>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Add to this: <a href="/blog/alcohol-pitta-inflammation" className="text-primary hover:underline font-medium">alcohol (a heating substance that Pitta is drawn to)</a>, spicy food, <a href="/blog/ayurveda-caffeine-stress" className="text-primary hover:underline font-medium">excessive caffeine</a>, skipped meals, stress eating, competitive exercise, and the pressure to look perfect while achieving perfection. This is a recipe for accelerated Pitta burnout and <a href="/blog/not-losing-weight-calorie-deficit" className="text-primary hover:underline font-medium">metabolic dysfunction</a>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The system rewards exactly the behaviors that destroy your health. By the time you realize something needs to change, you&apos;re already burned out. And your Pitta nature makes it hard to admit you need help or that rest is anything other than weakness.
            </p>
          </motion.div>

          {/* Signs of Pitta Imbalance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Signs Your Pitta Is Out of Balance
            </h2>
            <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <li>• Acid reflux or heartburn</li>
              <li>• Inflammatory skin conditions (acne, rosacea)</li>
              <li>• Intestinal inflammation or diarrhea</li>
              <li>• Perfectionism that prevents completion</li>
              <li>• Irritability especially when hungry</li>
              <li>• Judgmental thinking toward self and others</li>
              <li>• Excessive ambition despite exhaustion</li>
              <li>• Difficulty relaxing or resting</li>
              <li>• Aggressive exercise patterns</li>
              <li>• Hormonal irregularities or heavy periods</li>
              <li>• Feeling intense pressure from within</li>
              <li>• Chronic inflammation</li>
            </ul>
          </motion.div>

          {/* Daily Routine for Pitta Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Daily Routine That Balances Pitta
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Morning (6:00-8:00am)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Wake early (before 6am is ideal) but don&apos;t immediately launch into work. This is the time to cool your system before Pitta hours peak. Practice a gentle morning routine with cooling elements.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Cool shower or splash cool water on your face. Gentle stretching or yoga — nothing competitive or intense. Eat a proper breakfast with cooling elements: oatmeal with coconut milk, basmati rice, fresh fruit, or toast with ghee and jam. This grounds you before the intensity begins.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Warm water with lemon and honey. NO coffee on empty stomach — this adds inflammation to an already fiery system. If you drink coffee, do it after food.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Midday (12:00-1:00pm)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This is when your digestive fire peaks (10am-2pm). Use this for your main meal, not for your most intense work. Include: cooling foods (coconut, cilantro, mint), not too much spice, plenty of healthy fats, and a relaxed eating environment. Sit down. Eat slowly. Don&apos;t work while eating.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Afternoon (2:00-6:00pm)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  This is when your Pitta fire starts to build toward intensity. Use this time for your most important work if you must, but also build in genuine breaks. Not checking emails, but actual rest. A walk. Meditation. Brahmi tea to cool mental agitation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Avoid intense exercise in afternoon heat. If you must exercise, do it early morning before 10am when it&apos;s cooler.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Evening (5:00-9:00pm)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Dinner between 5-6pm. Cooling, not too heavy. Something that digests easily. Avoid alcohol, spicy foods, and red meat.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  After dinner, genuinely transition. No work emails. No high-stimulation activities. Practice calming: reading, gentle yoga, or time in nature.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bedtime routine is important. Go to bed at a consistent time. Cooling practices: legs up wall, meditation, rose water on the pillow. Ashwagandha or brahmi tea with warm milk. Sleep deeply, rest fully.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Foods to Favor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Foods That Cool and Calm Pitta
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-lg">Favor</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Cooling foods (coconut, cucumber, melon)</li>
                  <li>• Sweet fruits (grapes, mangoes, dates)</li>
                  <li>• Basmati rice</li>
                  <li>• Mung beans and lentils</li>
                  <li>• Leafy greens</li>
                  <li>• Cooling herbs (cilantro, mint, parsley)</li>
                  <li>• Ghee in moderation</li>
                  <li>• Fresh milk with spices</li>
                  <li>• Rose water</li>
                  <li>• Breathing practices and meditation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-lg">Reduce</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Spicy foods (chili, hot sauce, wasabi)</li>
                  <li>• Alcohol (especially red wine, spirits)</li>
                  <li>• Caffeine (especially coffee on empty stomach)</li>
                  <li>• Red meat</li>
                  <li>• Fried foods</li>
                  <li>• Excessive salt</li>
                  <li>• Sour and fermented foods in excess</li>
                  <li>• High-intensity exercise in heat</li>
                  <li>• Competitive activities</li>
                  <li>• Eating while stressed or angry</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Herbs and Teas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Herbs and Teas for Pitta
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Brahmi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cooling and clarifying. Specifically for Pitta mental intensity and perfectionism. Brahmi cools the overheated mind. Use afternoon tea or 300mg standardised extract. The cooling effect is particularly valuable for Pitta types whose fire turns inward.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Shatavari</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The cooling rejuvenative specifically for Pitta inflammation. Nourishes and cools the system. Particularly valuable for women experiencing Pitta-driven hormonal intensity. 300-500mg daily or as tea.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ashwagandha</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While warming, ashwagandha is grounding and helps build capacity to rest. For Pitta, use cooler preparations: mixed with milk and cooling spices. Takes 4-6 weeks to show effect on burnout.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Rose</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cooling to the entire system. Rose water or rose petal tea cools inflammation and supports emotional cooling. Pitta burns internally from perfectionism and intensity. Rose provides the cooling support to counteract this.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Aloe Vera</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specifically cooling to the digestive tract. For Pitta inflammation, acid reflux, or intestinal heat. Pure aloe vera inner leaf juice (unsweetened) taken in the morning. Check with a practitioner for proper dosing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* What Surprised Me */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-[#C97F3D] pl-6 py-4 my-16"
          >
            <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed">
              "I realized that rest wasn&apos;t laziness. And slowing down wasn&apos;t giving up. The pace I was running at was unsustainable, and my body was starting to fail. Pitta&apos;s greatest strength is also its greatest danger — and I had to learn to redirect that intensity before it consumed me."
            </p>
          </motion.blockquote>

          {/* What Surprised Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              What I Learned About Pitta
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              The biggest surprise was realizing that my intensity wasn&apos;t a virtue — it was a liability I needed to manage. Pitta is fire, and fire is powerful. But fire without boundaries consumes everything, including itself.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I had built my entire identity around achievement and productivity. The idea that I might need to slow down felt like death. But what I discovered was that slowing down didn&apos;t diminish my capabilities — it actually enhanced them. I could work longer, think clearer, and achieve more from a place of sustainability than I ever could from burnout.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The hardest part for Pitta isn&apos;t taking rest — it&apos;s accepting that rest is part of the performance, not opposed to it. Once I could see rest as a tactical component of excellence rather than a weakness, everything changed.
            </p>
          </motion.div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/10 border border-primary/20 rounded-2xl p-8 my-16"
          >
            <p className="text-sm font-medium uppercase tracking-wide text-primary mb-3">
              The Pitta Path
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              Your fire is your power. Your intensity is what makes you capable. But without cooling and grounding, that same fire burns you to ash. Learning to direct your Pitta energy toward what matters — rather than toward more and more hustle — is what transforms Pitta from a liability into the greatest advantage you have.
            </p>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
              Related DoshaFlow Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Nervous System Burnout", href: "/blog/ayurveda-nervous-system-burnout" },
                { title: "Signs of High Cortisol", href: "/blog/signs-of-high-cortisol" },
                { title: "Best Herbs for Anxiety", href: "/blog/best-herbs-for-anxiety" },
                { title: "Hair Loss Ayurveda", href: "/blog/hair-loss-ayurveda" },
                { title: "Brahmi for Mental Clarity", href: "/blog/brahmi-benefits" },
                { title: "Best Tea for Sleep", href: "/blog/best-ayurvedic-tea-sleep" },
              ].map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  className="block p-6 border border-foreground/10 rounded-lg hover:border-[#C97F3D] transition-colors group"
                >
                  <p className="text-lg font-medium text-foreground group-hover:text-[#C97F3D] transition-colors flex items-center gap-2">
                    {article.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-xl font-medium text-foreground mb-8">
              Ready to cool your Pitta and sustain your fire?
            </p>
            <a
              href="/quiz"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#C97F3D] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C97F3D]/20"
            >
              Confirm Your Dosha
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
