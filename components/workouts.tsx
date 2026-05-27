"use client"

import { motion } from "framer-motion"

const workouts = [
  { type: "Vata", focus: "Grounding & Gentle", activities: ["Yoga", "Walking", "Swimming"], color: "bg-blue-100 text-blue-700" },
  { type: "Pitta", focus: "Cooling & Moderate", activities: ["Hiking", "Cycling", "Pilates"], color: "bg-green-100 text-green-700" },
  { type: "Kapha", focus: "Energizing & Vigorous", activities: ["Running", "HIIT", "Dancing"], color: "bg-amber-100 text-amber-700" },
]

export function Workouts() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-4">
              {workouts.map((workout, index) => (
                <motion.div
                  key={workout.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-card rounded-2xl border border-border/50 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${workout.color}`}>
                        {workout.type}
                      </span>
                      <h4 className="font-serif text-xl font-medium text-foreground mt-2">
                        {workout.focus}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {workout.activities.map((activity) => (
                      <span
                        key={activity}
                        className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-6 p-6 bg-primary/5 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🚶</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Daily walking goal</p>
                  <p className="font-serif text-xl font-medium text-foreground">7,500 steps</p>
                  <p className="text-xs text-muted-foreground">Adjusted for your energy levels</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-primary/10 text-primary rounded-full">
              Movement
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Exercise that energizes, not depletes
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Not everyone thrives on the same workout. Your dosha influences how your body responds to different types of movement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DoshaFlow creates workout routines and walking goals that match your constitution — helping you feel energized rather than exhausted after exercise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
