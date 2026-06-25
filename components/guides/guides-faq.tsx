"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { guidesFaqs } from "./guides-data"

export function GuidesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="px-6 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full">
            FAQ
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground text-balance">
            Ayurveda questions, answered
          </h2>
        </motion.div>

        <div className="space-y-3">
          {guidesFaqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                  id={`guides-faq-question-${index}`}
                  aria-controls={`guides-faq-answer-${index}`}
                >
                  <span className="font-medium text-foreground">{item.question}</span>
                  <span className="shrink-0 text-primary">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <div
                  id={`guides-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`guides-faq-question-${index}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
