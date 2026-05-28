"use client"

import { motion } from "framer-motion"

const digestiveStats = [
  { label: "Energy Level", value: 72, trend: "up" },
  { label: "Digestive Comfort", value: 85, trend: "up" },
  { label: "Bloating", value: 23, trend: "down" },
]

const recentLogs = [
  { time: "Today, 12:30pm", meal: "Lunch - Quinoa Bowl", feeling: "Good", energy: "High" },
  { time: "Today, 8:00am", meal: "Breakfast - Oatmeal", feeling: "Great", energy: "Moderate" },
  { time: "Yesterday, 7:00pm", meal: "Dinner - Soup", feeling: "Good", energy: "Low" },
]

export function DigestiveTracking() {
  return (
    <section className="px-6 py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-primary/10 text-primary rounded-full">
            Digestion Tracking
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Understand your gut
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Track how different foods affect your digestion, energy, and overall wellbeing. Identify patterns and make informed choices about what you eat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl border border-border/50 p-8 shadow-lg"
          >
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">Weekly Overview</h3>
            <div className="space-y-6">
              {digestiveStats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-foreground">
                      {stat.value}%
                      <span className={stat.trend === "up" ? "text-green-600" : "text-amber-600"}>
                        {stat.trend === "up" ? "↑" : "↓"}
                      </span>
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className={`h-full rounded-full ${
                        stat.label === "Bloating" ? "bg-amber-400" : "bg-primary"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">💡</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Insight</p>
                  <p className="text-sm text-muted-foreground">Your digestion improves with warm, cooked meals in the evening.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-3xl border border-border/50 p-8 shadow-lg"
          >
            <h3 className="font-serif text-xl font-medium text-foreground mb-6">Recent Logs</h3>
            <div className="space-y-4">
              {recentLogs.map((log, index) => (
                <motion.div
                  key={log.time}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-xs text-muted-foreground">{log.time}</p>
                    <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                      {log.feeling}
                    </span>
                  </div>
                  <p className="font-medium text-foreground text-sm">{log.meal}</p>
                  <p className="text-xs text-muted-foreground mt-1">Energy: {log.energy}</p>
                </motion.div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 text-sm font-medium text-primary border border-primary/20 rounded-full hover:bg-primary/5 transition-colors">
              Log a meal
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
