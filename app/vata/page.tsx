"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const dynamic = 'force-dynamic'

export default function VataPage() {
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
              Vata Dosha
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8"
          >
            <span className="text-balance">
              You probably don&apos;t describe yourself as{" "}
              <span className="italic text-[#C97F3D]">Vata.</span> You describe yourself as anxious.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Overstimulated. Exhausted. Unable to sleep. Somehow both wired and depleted at the same time. Welcome to Vata imbalance in the modern world.
          </motion.p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* What Vata Actually Feels Like */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              What Vata Actually Feels Like
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Vata is the dosha of movement and air. It governs the nervous system, circulation, and the quality of motion in the body and mind. When Vata is balanced, you feel creative, energetic, responsive, and adaptable. When Vata becomes aggravated, everything becomes chaotic.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              If you&apos;re Vata, you know this pattern: your mind is constantly moving. You have multiple thoughts happening simultaneously. You&apos;re interested in lots of things but finish few of them. You get excited quickly and lose interest quickly. Your sleep is often interrupted — you wake at 3am with racing thoughts or dreams. Your digestion is irregular; sometimes you&apos;re hungry, sometimes you forget to eat entirely.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Your hands and feet are often cold. You&apos;re sensitive to loud noises and bright lights. You hate being still for long periods. You&apos;re drawn to stimulation — more music, more information, more experiences — yet this is exactly what makes your nervous system worse.
            </p>
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
              Energy Patterns in Vata
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong>Morning:</strong> Often scattered and un-grounded. You might wake before 6am with thoughts already racing. Coffee seems like the answer, but it makes things worse by adding more stimulation to an already over-activated nervous system.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong>Mid-day:</strong> Your energy fluctuates. Sometimes you&apos;re productive. Sometimes you crash. This depends on whether you&apos;re eating regularly, staying hydrated, and taking breaks.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong>Evening:</strong> This is when Vata peaks. Your mind becomes even more active. You struggle to wind down even when you&apos;re physically exhausted. You scroll endlessly. You can&apos;t commit to sleep even though you&apos;re depleted.
            </p>
          </motion.div>

          {/* Nervous System Patterns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Vata Nervous System
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Vata is the governing force of the nervous system. When Vata is balanced, your nervous system is responsive but not reactive. You can handle stress. You recover from it. When Vata is imbalanced, your nervous system is stuck in a state of partial activation.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              You become hyper-vigilant. Your body perceives threats that don&apos;t exist. Anxiety becomes background noise. The worst part: you feel the energy to do things but lack the grounding to follow through. This creates more anxiety because you don&apos;t finish what you start.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Excessive Vata manifests as: racing thoughts, inability to focus, restlessness, trembling, scattered feelings, difficulty sleeping, racing heartbeat, and a pervasive sense of being overwhelmed even when objectively things are fine.
            </p>
          </motion.div>

          {/* How Modern Life Aggravates Vata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              How Modern Life Aggravates Vata
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Modern life is designed to aggravate Vata. Constant notifications create constant stimulus. Irregular eating patterns disrupt Vata&apos;s need for rhythm. Screens before bed prevent sleep. Travel and jet lag create instability. The pace of work requires you to context-switch constantly — which is Vata in its most scattered form.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Add to this: excessive caffeine (which adds more movement to an already moving system), irregular sleep timing, skipped meals, cold foods, constant communication, and the pressure to be simultaneously available and high-performing. This is a recipe for Vata overwhelm.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The irony is that Vata types are often the highest achievers because of their natural energy and adaptability. But this achievement comes at the cost of your nervous system. You achieve by running on fumes. Until you can&apos;t.
            </p>
          </motion.div>

          {/* Signs of Vata Imbalance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Signs Your Vata Is Out of Balance
            </h2>
            <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <li>• Anxiety or panic that seems to come from nowhere</li>
              <li>• Sleep that is fragmented or non-restorative</li>
              <li>• Difficulty concentrating — your mind jumps constantly</li>
              <li>• Digestive irregularity — bloating, gas, unpredictable elimination</li>
              <li>• Cold hands and feet even in warm weather</li>
              <li>• Restlessness that feels almost physical</li>
              <li>• Scattered feeling even when nothing is wrong</li>
              <li>• Overstimulation by noise, light, or activity</li>
              <li>• Joint pain or cracking when you move</li>
              <li>• Dry skin or hair</li>
              <li>• Feeling both exhausted and wired simultaneously</li>
              <li>• Difficulty committing to anything</li>
            </ul>
          </motion.div>

          {/* Daily Routine for Vata Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Daily Routine That Balances Vata
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Morning (5:30-7:00am)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Wake before 6am if possible. This is Vata time (5-7am), and rising early allows you to establish grounding before Vata energy takes over. Do NOT reach for your phone immediately. Sit quietly for 2-3 minutes. Ground yourself.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Practice abhyanga (warm oil massage) for 5-10 minutes. Use warm sesame oil on your whole body. This is the single most powerful daily practice for Vata balance. It communicates to your nervous system: you are safe, you are held.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Drink warm water with lemon. Eat a warm, cooked breakfast with ghee. Oatmeal with dates and warm milk. Toast with ghee and jam. Warm rice porridge. Something that feels nourishing and grounding.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Midday (12:00-1:00pm)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eat your main meal at the same time every day. This consistency is everything for Vata. Include: warm, well-cooked food. Healthy fats (ghee, sesame oil, avocado). Protein (mung beans, lentils, fish). Grounding vegetables (root vegetables, squash, leafy greens). Avoid raw food, cold water, and eating on the go.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Afternoon (2:00-3:00pm)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  This is when Vata energy peaks and your mind becomes scattered. Take a break from screens if possible. Practice grounding: walk barefoot on grass, do gentle yoga, sit and breathe. Brahmi tea at this time supports mental clarity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Do NOT push through fatigue with more coffee. If you feel the 3pm crash, it&apos;s your body asking for rest. Honor it with a short walk or meditation instead of stimulation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Evening (5:00-9:00pm)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Dinner between 5-6pm. Something warm, nourishing, not too heavy. Avoid eating close to bedtime.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  After dinner, wind down. No screens after 8pm. Practice calming activities: reading, gentle stretching, journaling, warm bath with sesame oil.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bedtime routine is critical for Vata. Go to bed at the same time every night. This is non-negotiable. Your nervous system needs the rhythm. Warm milk with ashwagandha and nutmeg. Legs up the wall pose for 5 minutes. Sleep before 10pm if possible.
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
              Foods That Ground and Stabilize Vata
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-lg">Favor</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Warm cooked foods</li>
                  <li>• Healthy fats (ghee, sesame oil)</li>
                  <li>• Root vegetables (sweet potato, carrot, beet)</li>
                  <li>• Basmati rice</li>
                  <li>• Well-cooked legumes (mung, lentils)</li>
                  <li>• Whole grains</li>
                  <li>• Warming spices (ginger, cumin, cinnamon)</li>
                  <li>• Grounding herbs (ashwagandha, brahmi)</li>
                  <li>• Warm milk with spices</li>
                  <li>• Dates and sesame seeds</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-lg">Reduce</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Raw foods (salads, smoothies)</li>
                  <li>• Cold water and cold drinks</li>
                  <li>• Caffeine (especially on empty stomach)</li>
                  <li>• Alcohol (destabilizes the nervous system)</li>
                  <li>• Fried and greasy foods</li>
                  <li>• Dry foods (crackers, granola)</li>
                  <li>• Legumes without spices</li>
                  <li>• Irregular meal timing</li>
                  <li>• Eating while distracted</li>
                  <li>• Skipping meals</li>
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
              Herbs and Teas for Vata
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ashwagandha</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The primary Vata-balancing adaptogen. Rebuilds nervous system resilience, reduces cortisol, and improves sleep quality. Take 300-600mg nightly in warm milk. Results visible after 4-6 weeks of consistent use.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Brahmi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For mental clarity and scattered thinking. Cooling and clarifying. Use in the afternoon during the Vata window (2-6pm) when mental agitation is highest. 300mg standardised extract or as tea.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tulsi (Holy Basil)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Daily nervous system support. Adaptogenic without being sedating. Tulsi tea throughout the day supports stress resilience. Can be used consistently without concern for dependency.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Jatamansi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specific for Vata anxiety insomnia. When racing thoughts prevent sleep, jatamansi calms mental agitation. Take 300-500mg one hour before bed.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">CCF Tea (Cumin, Coriander, Fennel)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The classical Vata digestive support. Warm and stabilizing. Drink 20-30 minutes before meals to support digestion. Equal parts of each, steeped 10 minutes in hot water.
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
              "The biggest surprise was realizing that my anxiety wasn&apos;t a character flaw or something to be medicated out of existence. It was my nervous system asking for rhythm, grounding, and rest. When I gave it those things, the anxiety resolved naturally."
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
              What I Learned About Vata
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              The biggest surprise was realizing that the solution to Vata anxiety is not more stimulation or willpower. It&apos;s the opposite: consistency, grounding, and the permission to be still.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Vata types are often the highest achievers. We run on this constant stimulation and tell ourselves we&apos;re thriving. We make incredible things happen. But we do it at the cost of our nervous system. When I switched from pushing constantly to establishing rhythm and grounding, everything got better — including my productivity, because I could actually focus.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The irony is that slowing down makes you more capable, not less. But you have to be willing to do it before the evidence appears. That&apos;s the hardest part for Vata types. We need proof. We need to see the benefit. But the benefit only appears after we&apos;ve committed to the slower pace.
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
              The Vata Nervous System
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              If you&apos;re Vata, your nervous system is your most valuable asset and your most fragile one. It&apos;s what makes you creative, intuitive, and responsive. It&apos;s also what makes you vulnerable to overstimulation. Protecting it isn&apos;t selfish. It&apos;s the foundation for everything else you do.
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
                { title: "Best Herbs for Anxiety", href: "/blog/best-herbs-for-anxiety" },
                { title: "Why Am I Always Tired?", href: "/blog/why-am-i-always-tired" },
                { title: "Ayurvedic Morning Routine", href: "/blog/ayurvedic-morning-routine" },
                { title: "Best Tea for Sleep", href: "/blog/best-ayurvedic-tea-sleep" },
                { title: "Cortisol & Stress", href: "/blog/ayurveda-cortisol-stress" },
                { title: "Brahmi Benefits", href: "/blog/brahmi-benefits" },
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
              Ready to ground your Vata?
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
