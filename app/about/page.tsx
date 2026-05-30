"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Subtle background pattern */}
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
              My Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-8"
          >
            <span className="text-balance">
              I didn&apos;t find Ayurveda.{" "}
              <span className="italic text-[#C97F3D]">It found me.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            On the other side of addiction, burnout, and years of feeling like life was passing me by — I found a system that actually made sense for my body.
          </motion.p>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          {/* Opening */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg leading-relaxed text-foreground">
              My name is Alex. I&apos;m 36, I live in Los Angeles, and for a long time I was the last person you&apos;d expect to be talking about wellness.
            </p>
          </motion.div>

          {/* The Struggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              For years, I struggled with alcohol abuse. Poor sleep was my constant companion. My diet was terrible — convenient, processed, whatever required the least effort. Anxiety and depression weren&apos;t occasional visitors; they had moved in permanently.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              On the surface, I was functional. I showed up to work. I maintained friendships. I did what was expected. But underneath all of that, I felt like a passenger in my own life — like life was passing me by and I was just watching it happen through a fog.
            </p>
          </motion.div>

          {/* Image 1: Kerala Ayurveda Retreat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <img
              src="https://source.unsplash.com/featured/800x500/?kerala,india,ayurveda,retreat"
              alt="Ayurvedic retreat Kerala India"
              style={{ width: '100%', borderRadius: '8px', margin: '32px 0' }}
            />
          </motion.div>

          {/* Pull Quote */}
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-[#C97F3D] pl-6 py-4 my-16"
          >
            <p className="text-xl md:text-2xl font-serif italic text-foreground leading-relaxed">
              &ldquo;I had this feeling that life was passing me by. Not because nothing was happening — but because I wasn&apos;t really there for any of it.&rdquo;
            </p>
          </motion.blockquote>

          {/* Trying Things */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I tried a lot of things over the years. Therapy helped me understand my patterns, but didn&apos;t always give me the tools to change them. Exercise came in bursts — intense motivation followed by weeks of nothing. I cycled through diets: keto, intermittent fasting, whole30. Each one promised a reset, and each one eventually faded.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nothing felt like it was built for me specifically. Everything felt like a universal plan I was supposed to force myself into.
            </p>
          </motion.div>

          {/* Discovering Ayurveda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              I discovered Ayurveda sideways — through a friend who mentioned it casually, a podcast episode I half-listened to, a book I picked up on a whim. At first, it seemed too ancient, too esoteric. A 5,000-year-old system from India? How could that possibly be relevant to my life in LA in 2024?
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              But the more I learned, the more I felt something I hadn&apos;t felt before: recognized. Ayurveda wasn&apos;t asking me to follow a universal plan. It was asking me to understand my individual nature — and then work with it, not against it.
            </p>
          </motion.div>

          {/* Identifying as Vata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              When I learned about the doshas, everything clicked. I&apos;m Vata — creative, energetic, prone to anxiety when out of balance. The description read like a biography: the restless sleep, the racing thoughts, the cold hands and feet, the tendency to skip meals and then wonder why I felt scattered.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              For the first time, I understood why certain things worked for other people but never worked for me. And I understood what might actually help: warm, grounding foods. Consistent routines. Calming practices. Everything I&apos;d been doing was exactly wrong for my constitution.
            </p>
          </motion.div>

          {/* The Changes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              The changes were gradual. I started with warm oil massage in the mornings — just five minutes, but it grounded me in a way coffee never had. I began eating at consistent times, favoring warm, cooked foods over raw salads and cold smoothies. I reduced alcohol not through willpower or white-knuckling, but by understanding what it was doing to my nervous system. It wasn&apos;t helping me relax; it was shattering my already fragile equilibrium.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sleep came easier. Mornings got calmer. The fog started to lift. I wasn&apos;t just surviving my days — I was actually present for them.
            </p>
          </motion.div>

          {/* Green Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/10 border border-primary/20 rounded-2xl p-8 my-16"
          >
            <p className="text-sm font-medium uppercase tracking-wide text-primary mb-3">
              Right now — May 2026
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              I&apos;m in the middle of a two-week Ayurvedic retreat — deepening my practice, studying with teachers, and documenting everything. This blog is my attempt to share that journey in real time.
            </p>
          </motion.div>

          {/* Image 2: Ayurvedic Treatment Session */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <img
              src="https://source.unsplash.com/featured/800x500/?ayurvedic,treatment,massage,india"
              alt="Ayurvedic treatment session"
              style={{ width: '100%', borderRadius: '8px', margin: '32px 0' }}
            />
          </motion.div>

          {/* What DoshaFlow Is */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              DoshaFlow is what I wished had existed when I started this journey. It&apos;s dosha-based nutrition that actually tastes good. Grounding movement that doesn&apos;t require a gym membership. Herbal blends, oils, and rituals that fit into a real life.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m not a guru. I&apos;m not a doctor. I&apos;m someone who was struggling and found something that worked — and I want to make it accessible to others who might be where I was.
            </p>
          </motion.div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xl leading-relaxed text-foreground font-medium">
              If any part of what I&apos;ve described sounds familiar — the fog, the feeling that you&apos;re not quite showing up for your own life — I built this for you.
            </p>
          </motion.div>

          {/* Image 3: Kerala Landscape */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <img
              src="https://source.unsplash.com/featured/800x500/?kerala,india,nature,green,tropical"
              alt="Kerala India landscape"
              style={{ width: '100%', borderRadius: '8px', margin: '32px 0' }}
            />
          </motion.div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-8"
          >
            Find your dosha. Find your flow.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/quiz"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#C97F3D] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C97F3D]/20"
            >
              Take the Dosha Quiz
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/20 text-foreground font-medium rounded-full transition-all duration-300 hover:border-foreground/40"
            >
              Read the Blog
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
