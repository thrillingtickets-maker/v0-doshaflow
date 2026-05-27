"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Yoga Instructor",
    content: "Finally, a wellness app that doesn't feel like a one-size-fits-all solution. The meal plans actually match how my body feels.",
    dosha: "Vata"
  },
  {
    name: "James K.",
    role: "Software Engineer",
    content: "The digestion tracking helped me identify that dairy was causing my afternoon slumps. Game changer for my productivity.",
    dosha: "Pitta"
  },
  {
    name: "Maria L.",
    role: "Marketing Director",
    content: "I love how the workouts adapt to my energy levels. Some days I need grounding yoga, other days I can handle more intensity.",
    dosha: "Kapha"
  },
  {
    name: "David R.",
    role: "Entrepreneur",
    content: "The combination of Ayurvedic wisdom with modern tracking is exactly what I was looking for. No woo-woo, just results.",
    dosha: "Vata-Pitta"
  },
]

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
            Real results, real people
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Join thousands who have transformed their wellness routine with personalized, dosha-based guidance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-2xl border border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground">
                  {testimonial.dosha}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
