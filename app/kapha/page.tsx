"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function KaphaPage() {
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
              Kapha Dosha
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8"
          >
            <span className="text-balance">
              You keep telling yourself you need more discipline.{" "}
              <span className="italic text-[#C97F3D]">But the issue isn&apos;t laziness.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            It&apos;s stagnation. It&apos;s heaviness. It&apos;s your system asking for movement, not motivation.
          </motion.p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* What Kapha Actually Feels Like */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              What Kapha Actually Feels Like
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Kapha is the dosha of earth and water. It governs structure, stability, and the quality of nourishment in your body and emotions. When Kapha is balanced, you are grounded, patient, compassionate, and steadfast. When Kapha becomes aggravated, you become stuck.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              If you&apos;re Kapha, you have a naturally calm demeanor. You&apos;re reliable. People trust you. You&apos;re a good listener and a loyal friend. You don&apos;t get reactive easily. You can handle slow, steady progress without needing constant external validation.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The problem is that this same steadiness can become inertia. Moving becomes harder than staying still. You sleep longer than you need to. You eat beyond fullness because food feels comforting. Your body becomes heavy. Your mind becomes foggy. Tasks feel overwhelming even when they&apos;re small. Everything requires more effort than it should. You tell yourself you&apos;re lazy, but you&apos;re actually stuck in stagnation.
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
              Energy Patterns in Kapha
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong>Morning:</strong> You struggle to get up even though you slept 8-9 hours. Morning feels heavy and sluggish. You don&apos;t wake hungry. You reach for comfort food or coffee without appetite. The morning itself feels like a weight you have to push through.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              <strong>Mid-day:</strong> Your energy is most stable now. You can work steadily. But there&apos;s no enthusiasm. You do what needs to be done. You don&apos;t get excited about things easily. Energy is consistent but flat — like moving through water.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong>Evening:</strong> After dinner, you feel heavier. You want to relax. You stay up late even though you&apos;re tired because the effort to move to bed feels significant. Once you&apos;re asleep, you sleep deeply and don&apos;t wake easily.
            </p>
          </motion.div>

          {/* The Kapha Stagnation Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Kapha Stagnation Pattern
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Kapha stagnation is different from Vata anxiety or Pitta burnout. You&apos;re not anxious and you&apos;re not burning out. You&apos;re stuck. Your body holds onto weight. Your digestion is slow. Your mind is sluggish. Things feel hard even when they&apos;re easy.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              The blame pattern: you blame yourself for not having enough discipline. You think if you just tried harder, you&apos;d have more energy. So you push. You attempt extreme diets and intense exercise. This works for a week or two. Then you crash back into stagnation. The cycle reinforces the belief that you&apos;re lazy — when actually your system is too heavy to move at the intensity you&apos;re demanding.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              What makes this pattern particularly insidious for Kapha is that you don&apos;t get the feedback that Vata and Pitta get. Vata gets anxious (clear feedback something is wrong). Pitta gets burned out (clear feedback something is wrong). Kapha just gets heavier and slower. You might not realize anything is wrong until you&apos;ve gained 30 pounds and can&apos;t climb stairs without effort.
            </p>
          </motion.div>

          {/* How Modern Life Aggravates Kapha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              How Modern Life Aggravates Kapha
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Modern life is designed to aggravate Kapha. Sedentary work. Cars instead of walking. Heating and air conditioning that create stable, unchanging environments. Food engineered to be hyper-palatable and easy to overeat. Work that requires sitting all day. All of this creates stagnation.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Add to this: cold foods (smoothies, salads), excessive dairy, heavy comfort foods, sleeping long hours, minimal movement, and the cultural acceptance of Kapha behavior (being easygoing is celebrated, even when it becomes stagnation). The system doesn&apos;t push back on Kapha excess the way it does with Vata and Pitta.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The result is that Kapha imbalance often goes unaddressed longer than other doshas. By the time you realize something needs to change, you&apos;re significantly heavier, slower, and more stuck than you were years ago.
            </p>
          </motion.div>

          {/* Signs of Kapha Imbalance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Signs Your Kapha Is Out of Balance
            </h2>
            <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <li>• Weight gain that resists normal dieting</li>
              <li>• Morning heaviness and difficulty waking</li>
              <li>• Brain fog and sluggish thinking</li>
              <li>• Lethargy and lack of motivation</li>
              <li>• Slow digestion and feeling heavy after eating</li>
              <li>• Congestion or sinus issues</li>
              <li>• Excessive sleeping</li>
              <li>• Emotional heaviness or seasonal depression</li>
              <li>• Attachment to routines (even bad ones)</li>
              <li>• Possessiveness or resistance to change</li>
              <li>• Water retention and swelling</li>
              <li>• Difficulty with new challenges or change</li>
            </ul>
          </motion.div>

          {/* Daily Routine for Kapha Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              The Daily Routine That Balances Kapha
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Morning (6:00-7:30am)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Wake early (before 6am if possible). Kapha morning heaviness is strongest between 6-10am (Kapha time). Force yourself out of bed even if you don&apos;t feel like it. This single act begins to break the stagnation pattern.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Dry brush massage (garshana) with warming, stimulating pressure. This activates circulation and wakes up the body. Warm (not hot) shower with stimulating essential oils like ginger or eucalyptus.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Drink warm ginger or CCF tea before breakfast. This stimulates digestive fire. Eat a light breakfast: avoid heavy grains, dairy, and oils. Lightly spiced toast. Fruit. Warm cereal without milk. Something that doesn&apos;t sit heavy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  MOVEMENT: This is critical. Walk, do yoga, dance — something that gets your body moving. 15-30 minutes is ideal. This breaks stagnation at the root.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Midday (12:00-1:00pm)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This is your secondary digestive peak and your energy window. Make your main meal here but keep it moderate in size. Include: warming spices, light proteins, minimal oil, cooked vegetables. Avoid heavy foods, dairy, and excessive grains. Eat quickly and move on — don&apos;t linger after eating.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Afternoon (3:00-5:00pm)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  This is when Kapha energy begins to peak again (after 2pm). Use this time for your most important work while you still have energy. Don&apos;t save heavy work for evening.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Movement continues to be critical. Walk. Exercise. Do anything that stimulates circulation. Avoid sitting for extended periods.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3 text-lg">Evening (5:00-9:00pm)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Light dinner between 5-6pm. Something warm but not heavy. Stimulating spices but not too much food volume. Avoid dairy, oils, and heavy grains.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Gentle evening movement if possible. A walk. Light yoga. This prevents post-dinner heaviness.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Bed on time but not too early. 10-11pm is better than 9pm. This prevents excessive sleep. Your goal is to avoid oversleeping — waking naturally after 7-8 hours, not sleeping 9+ hours because the weight is so heavy you can&apos;t wake.
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
              Foods That Stimulate and Lighten Kapha
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-lg">Favor</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Warming spices (ginger, cayenne, black pepper)</li>
                  <li>• Legumes with spices</li>
                  <li>• Light proteins (poultry, fish)</li>
                  <li>• Cooked vegetables</li>
                  <li>• Minimal oil</li>
                  <li>• Bitter and astringent tastes</li>
                  <li>• Herbal teas without milk</li>
                  <li>• Small, frequent meals</li>
                  <li>• Dry cooking methods (roasting, grilling)</li>
                  <li>• Stimulating movement</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-lg">Reduce</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Heavy grains (wheat, rice in excess)</li>
                  <li>• Dairy (especially cheese, yogurt)</li>
                  <li>• Oils and fats</li>
                  <li>• Sweet foods</li>
                  <li>• Cold foods and drinks</li>
                  <li>• Processed foods</li>
                  <li>• Overeating</li>
                  <li>• Heavy meats (red meat, pork)</li>
                  <li>• Sitting for long periods</li>
                  <li>• Excessive sleep</li>
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
              Herbs and Teas for Kapha
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Ginger</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fresh ginger tea is the most important daily practice for Kapha. Warms the system, stimulates digestive fire, and breaks stagnation. Drink warm ginger tea each morning before breakfast and throughout the day when feeling sluggish. Fresh root is more potent than powder.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Triphala</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The primary Kapha-balancing formula. Supports gentle elimination without harshness, and rebuilds digestive fire. The drying quality of Triphala is perfect for Kapha heaviness. Take 1/2-1 teaspoon in warm water before bed. Results within 4-7 days.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tulsi (Holy Basil)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stimulating and clarifying. Tulsi tea throughout the day supports mental clarity and breaks brain fog. More stimulating for Kapha than other doshas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Neem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bitter and stimulating. Supports lymphatic drainage and breaks stagnation. Particularly valuable for Kapha weight management and sluggish circulation. Neem powder or tea with warming spices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">CCF Tea (Cumin, Coriander, Fennel)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Universal digestive support. For Kapha, the warming quality helps break stagnation. Drink before meals to prepare the system for food and stimulate digestive fire.
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
              "I realized that the solution wasn&apos;t more discipline. It was breaking the stagnation pattern with consistent small movements. One walk changed everything. Then another walk was easier. Momentum built. And suddenly, what felt impossible became inevitable."
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
              What I Learned About Kapha
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              The biggest surprise was realizing that the issue wasn&apos;t my character — it was stagnation that had built up over time. I wasn&apos;t lazy. I was stuck. And the solution wasn&apos;t to shame myself into action or force extreme changes.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              It was to do one small thing: move. That&apos;s it. A 15-minute walk in the morning. The first walk was hard. The second walk was slightly easier. After a week, I could feel something shifting. After two weeks, I wanted to move. After a month, I had energy I hadn&apos;t had in years.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              For Kapha types, the secret is this: don&apos;t try to become different. Just create enough movement to break the stagnation pattern. Once the stagnation breaks, you naturally become more active, more clear-thinking, and more engaged with life. The key is starting small and building momentum rather than attempting to overhaul everything at once.
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
              Movement Matters
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              For Kapha, movement isn&apos;t exercise. It&apos;s medicine. It&apos;s the most direct way to break stagnation, increase energy, and restore motivation. It doesn&apos;t have to be intense. Just consistent. A 15-minute morning walk will change your life more than any supplement or diet ever could.
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
                { title: "I Can't Lose Weight", href: "/blog/i-cant-lose-weight" },
                { title: "Ayurvedic Morning Routine", href: "/blog/ayurvedic-morning-routine" },
                { title: "How to Improve Digestion", href: "/blog/how-to-improve-digestion-naturally" },
                { title: "Triphala Benefits", href: "/blog/triphala-benefits" },
                { title: "Why Am I Always Tired?", href: "/blog/why-am-i-always-tired" },
                { title: "Best Ayurvedic Tea for Digestion", href: "/blog/best-ayurvedic-tea-digestion" },
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
              Ready to break stagnation and restore your Kapha balance?
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
