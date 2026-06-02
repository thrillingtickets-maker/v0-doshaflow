"use client"

import { motion } from "framer-motion"

export function WhyAyurvedaHelped() {
  return (
    <section className="px-6 py-24 md:py-40 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
            What Ayurveda Actually Helped Me Understand
          </h2>
        </motion.div>

        {/* Content - Editorial Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="prose prose-sm md:prose-base prose-neutral max-w-none"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
            Most wellness promises you can fix yourself with the right protocol. Ayurveda doesn't do that. Instead, it teaches you to see your exhaustion as information.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
            My burnout wasn't a personal failure. It was my nervous system telling me that modern life had broken my capacity to rest. My digestion wasn't weak. It was struggling because I was eating in a state of stress. My sleep wasn't defective. It was poor because my circadian rhythm had been obliterated by inconsistent schedules and constant stimulation.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
            Ayurveda didn't give me supplements to optimize with. It gave me a framework for seeing my body as a system that needs routine, that needs to digest food calmly, that needs rhythm. It gave me permission to do less so I could recover more. It taught me that my nervousness was a dosage problem, not a personality problem.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
            This is what I'm building DoshaFlow around. Not another thing to optimize. Not another supplement to take. A framework for understanding why your body is struggling and what actual recovery looks like.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            You're not broken. You're just overloaded. And the path back to calm is simpler than you think.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
