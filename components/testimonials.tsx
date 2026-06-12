"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Yoga Instructor",
    location: "Portland, OR",
    photo: "/testimonials/sarah.png",
    betaTester: true,
    content: "I've taken probably a dozen wellness quizzes over the years and learned nothing. This one actually helped me understand why I'm always cold, why salads for lunch don't sit well, and why my anxiety tends to spike in autumn. 25 questions and I finally have a framework.",
    dosha: "Vata"
  },
  {
    name: "James Keller",
    role: "Software Engineer",
    location: "Austin, TX",
    photo: "/testimonials/james.png",
    betaTester: true,
    content: "I'm a skeptic. I took this mostly out of curiosity. A couple weeks after adjusting when I eat and cutting the coffee before breakfast, my afternoon crashes eased up noticeably. Didn't expect that from a quiz.",
    dosha: "Pitta"
  },
  {
    name: "Maria Lopez",
    role: "Marketing Director",
    location: "Chicago, IL",
    photo: "/testimonials/maria.png",
    betaTester: true,
    content: "The quiz connected things about myself I'd never linked before — patterns around energy, motivation in the morning, and how I hold onto things emotionally. It felt thoughtful and specific rather than generic.",
    dosha: "Kapha"
  },
  {
    name: "David Reyes",
    role: "Entrepreneur",
    location: "Denver, CO",
    photo: "/testimonials/david.png",
    betaTester: true,
    content: "No crystals, no vague advice, no 'drink more water.' Just a clear explanation of how my body tends to work and some practical things to try. Refreshingly straightforward.",
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
            What early users are saying
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed mb-4">
            Feedback from beta testers using personalized, dosha-based guidance.
          </p>
          <p className="text-xs text-muted-foreground mt-2 opacity-75">
            Shared with permission. Results vary by individual.
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
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                {testimonial.betaTester && (
                  <span className="px-2.5 py-1 text-[11px] font-medium bg-primary/10 text-primary rounded-full">
                    Beta Tester
                  </span>
                )}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-secondary shrink-0">
                    <Image
                      src={testimonial.photo || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} · {testimonial.location}
                    </p>
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
