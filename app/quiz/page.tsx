"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "What best describes your body frame?",
    options: [
      { letter: "A", text: "Slim, light, and lean" },
      { letter: "B", text: "Medium build, muscular" },
      { letter: "C", text: "Broad, sturdy, and solid" },
    ],
  },
  {
    id: 2,
    question: "How would you describe your energy levels?",
    options: [
      { letter: "A", text: "Variable and unpredictable" },
      { letter: "B", text: "Intense and driven" },
      { letter: "C", text: "Slow to start, but steady" },
    ],
  },
  {
    id: 3,
    question: "How does your mind typically work?",
    options: [
      { letter: "A", text: "Quick, creative, sometimes scattered" },
      { letter: "B", text: "Sharp, analytical, focused" },
      { letter: "C", text: "Calm, steady, methodical" },
    ],
  },
  {
    id: 4,
    question: "How do you typically respond to stress?",
    options: [
      { letter: "A", text: "Anxiety and overwhelm" },
      { letter: "B", text: "Irritability and frustration" },
      { letter: "C", text: "Withdrawal and avoidance" },
    ],
  },
  {
    id: 5,
    question: "How is your digestion?",
    options: [
      { letter: "A", text: "Irregular and variable" },
      { letter: "B", text: "Strong but sensitive" },
      { letter: "C", text: "Slow and steady" },
    ],
  },
  {
    id: 6,
    question: "How would you describe your sleep?",
    options: [
      { letter: "A", text: "Light, disrupted, restless" },
      { letter: "B", text: "Moderate with intense dreams" },
      { letter: "C", text: "Heavy and hard to wake" },
    ],
  },
  {
    id: 7,
    question: "What best describes your skin?",
    options: [
      { letter: "A", text: "Dry, thin, and rough" },
      { letter: "B", text: "Warm, oily, and sensitive" },
      { letter: "C", text: "Thick, smooth, and pale" },
    ],
  },
  {
    id: 8,
    question: "What is your relationship with food?",
    options: [
      { letter: "A", text: "Forget to eat, irregular meals" },
      { letter: "B", text: "Strong hunger, irritable if late" },
      { letter: "C", text: "Emotional eater, comfort foods" },
    ],
  },
  {
    id: 9,
    question: "What type of exercise appeals to you?",
    options: [
      { letter: "A", text: "Gentle, grounding yoga & walking" },
      { letter: "B", text: "Challenging and competitive" },
      { letter: "C", text: "Need motivation to move" },
    ],
  },
  {
    id: 10,
    question: "When out of balance, you feel...",
    options: [
      { letter: "A", text: "Scattered and anxious" },
      { letter: "B", text: "Inflamed and reactive" },
      { letter: "C", text: "Stuck and sluggish" },
    ],
  },
]

const doshaResults = {
  vata: {
    name: "Vata",
    emoji: "🌬️",
    tagline: "The Creative Mover",
    description: [
      "You embody the qualities of air and space — light, quick, creative, and always in motion. Your mind is a fountain of ideas, and you thrive on variety and change. When balanced, you're enthusiastic, imaginative, and wonderfully spontaneous.",
      "When out of balance, you may experience anxiety, restlessness, dry skin, and irregular digestion. Grounding practices, warm nourishing foods, and consistent routines will help you feel centered and calm.",
    ],
    traits: ["Creative", "Enthusiastic", "Quick-thinking", "Adaptable", "Light", "Energetic"],
    kits: [
      {
        name: "Grounding Oil Kit",
        description: "Sesame oil, ashwagandha, and vetiver for deep grounding",
        icon: "🧴",
      },
      {
        name: "Herbal Blend",
        description: "Ashwagandha, shatavari, and warming ginger tea",
        icon: "🌿",
      },
      {
        name: "Meal Plan Kit",
        description: "Kitchari recipes and warm, grounding foods",
        icon: "🍲",
      },
      {
        name: "Yoga Kit",
        description: "Yin yoga sequences and restorative flows",
        icon: "🧘",
      },
    ],
  },
  pitta: {
    name: "Pitta",
    emoji: "🔥",
    tagline: "The Ambitious Leader",
    description: [
      "You embody the qualities of fire and water — sharp, intense, driven, and naturally magnetic. Your intellect is powerful, and you have an innate ability to lead and inspire. When balanced, you're focused, courageous, and wonderfully warm-hearted.",
      "When out of balance, you may experience inflammation, skin irritations, acid reflux, and frustration. Cooling practices, fresh foods, and time in nature will help you maintain your natural brilliance without burning out.",
    ],
    traits: ["Focused", "Ambitious", "Intelligent", "Confident", "Warm", "Decisive"],
    kits: [
      {
        name: "Cooling Oil Kit",
        description: "Coconut oil, brahmi, rose & sandalwood blend",
        icon: "🧴",
      },
      {
        name: "Herbal Blend",
        description: "Brahmi, amalaki, and refreshing rose mint tea",
        icon: "🌿",
      },
      {
        name: "Meal Plan Kit",
        description: "Cooling bitter and sweet seasonal foods",
        icon: "🥗",
      },
      {
        name: "Movement Kit",
        description: "Swimming, hiking, and lunar yoga practices",
        icon: "🏊",
      },
    ],
  },
  kapha: {
    name: "Kapha",
    emoji: "🌍",
    tagline: "The Steady Nurturer",
    description: [
      "You embody the qualities of earth and water — stable, strong, nurturing, and deeply compassionate. Your presence is calming, and you have remarkable endurance and loyalty. When balanced, you're loving, patient, and wonderfully grounded.",
      "When out of balance, you may experience weight gain, lethargy, congestion, and attachment. Energizing practices, light spicy foods, and stimulating activities will help you stay vibrant and motivated.",
    ],
    traits: ["Loyal", "Patient", "Nurturing", "Strong", "Calm", "Compassionate"],
    kits: [
      {
        name: "Energizing Oil Kit",
        description: "Mustard oil, ginger, eucalyptus & dry brush",
        icon: "🧴",
      },
      {
        name: "Herbal Blend",
        description: "Trikatu, tulsi, and warming ginger turmeric tea",
        icon: "🌿",
      },
      {
        name: "Meal Plan Kit",
        description: "Light, spicy, and invigorating recipes",
        icon: "🌶️",
      },
      {
        name: "Movement Kit",
        description: "HIIT workouts, power yoga, breath of fire",
        icon: "💪",
      },
    ],
  },
}

type Dosha = "vata" | "pitta" | "kapha"

export default function QuizPage() {
  const [step, setStep] = useState<"intro" | "quiz" | "results">("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<Dosha | null>(null)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleStartQuiz = () => {
    setStep("quiz")
    setCurrentQuestion(0)
    setAnswers([])
  }

  const handleAnswer = (letter: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = letter
    setAnswers(newAnswers)

    // Auto-advance after 380ms
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        calculateResult(newAnswers)
      }
    }, 380)
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleContinue = () => {
    if (answers[currentQuestion] && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else if (answers[currentQuestion] && currentQuestion === questions.length - 1) {
      calculateResult(answers)
    }
  }

  const calculateResult = (finalAnswers: string[]) => {
    const counts = { A: 0, B: 0, C: 0 }
    finalAnswers.forEach((answer) => {
      if (answer in counts) {
        counts[answer as keyof typeof counts]++
      }
    })

    let dominant: Dosha = "vata"
    if (counts.B > counts.A && counts.B >= counts.C) {
      dominant = "pitta"
    } else if (counts.C > counts.A && counts.C > counts.B) {
      dominant = "kapha"
    }

    setResult(dominant)
    setStep("results")
  }

  const handleRetake = () => {
    setStep("intro")
    setCurrentQuestion(0)
    setAnswers([])
    setResult(null)
    setEmail("")
    setSubmitted(false)
    setSubmitError("")
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
      
      if (!response.ok) {
        throw new Error("Subscription failed")
      }
      
      setSubmitted(true)
    } catch {
      setSubmitError("Something went wrong, please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center px-6 py-20"
          >
            <div className="max-w-2xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 mb-8 text-sm font-medium tracking-wide uppercase bg-secondary text-secondary-foreground rounded-full"
              >
                Free Dosha Assessment
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif text-4xl md:text-6xl font-medium leading-tight text-foreground mb-6"
              >
                Discover your{" "}
                <span className="italic text-[#C4884F]">Ayurvedic type.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto"
              >
                Answer 10 questions about your body, mind, and tendencies. We&apos;ll identify your dosha and recommend a personalized wellness kit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center gap-6 mb-12 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-2">
                  <span>⏱</span> 2 minutes
                </span>
                <span className="flex items-center gap-2">
                  <span>✦</span> 10 questions
                </span>
                <span className="flex items-center gap-2">
                  <span>🎁</span> Personalized kit
                </span>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={handleStartQuiz}
                className="inline-flex items-center gap-2 px-10 py-4 bg-[#C4884F] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C4884F]/20 text-lg"
              >
                Begin Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col px-6 py-12"
          >
            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto w-full mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="flex-1 flex items-center justify-center">
              <div className="max-w-2xl mx-auto w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-10 text-center">
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="space-y-4">
                      {questions[currentQuestion].options.map((option) => (
                        <button
                          key={option.letter}
                          onClick={() => handleAnswer(option.letter)}
                          className={`w-full p-5 rounded-xl border-2 transition-all duration-200 text-left flex items-center gap-4 ${
                            answers[currentQuestion] === option.letter
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50 bg-card"
                          }`}
                        >
                          <span
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-colors ${
                              answers[currentQuestion] === option.letter
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            {option.letter}
                          </span>
                          <span className="text-foreground font-medium">{option.text}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div className="max-w-2xl mx-auto w-full mt-8 flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className={`inline-flex items-center gap-2 px-6 py-3 font-medium rounded-full transition-all ${
                  currentQuestion === 0
                    ? "text-muted-foreground cursor-not-allowed"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <button
                onClick={handleContinue}
                disabled={!answers[currentQuestion]}
                className={`inline-flex items-center gap-2 px-8 py-3 font-medium rounded-full transition-all ${
                  answers[currentQuestion]
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                    : "bg-secondary text-muted-foreground cursor-not-allowed"
                }`}
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === "results" && result && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen px-6 py-20"
          >
            <div className="max-w-4xl mx-auto">
              {/* Result Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <span className="text-7xl mb-6 block">{doshaResults[result].emoji}</span>
                <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-3">
                  You are{" "}
                  <span className="text-[#C4884F]">{doshaResults[result].name}</span>
                </h1>
                <p className="text-xl text-muted-foreground">{doshaResults[result].tagline}</p>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                {doshaResults[result].description.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Traits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-3 justify-center mb-16"
              >
                {doshaResults[result].traits.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </motion.div>

              {/* Recommended Kits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-16"
              >
                <h2 className="font-serif text-2xl font-medium text-foreground mb-8 text-center">
                  Your Recommended Kits
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {doshaResults[result].kits.map((kit, index) => (
                    <motion.div
                      key={kit.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="p-6 bg-card border border-border rounded-2xl"
                    >
                      <span className="text-3xl mb-4 block">{kit.icon}</span>
                      <h3 className="font-medium text-foreground text-lg mb-2">{kit.name}</h3>
                      <p className="text-muted-foreground">{kit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Email Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-card border border-border rounded-2xl p-8 text-center mb-12"
              >
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Get notified when your kit ships
                </h3>
                <p className="text-muted-foreground mb-6">
                  Be the first to know when your personalized {doshaResults[result].name} wellness kit is available.
                </p>
                {submitted ? (
                  <p className="text-primary font-medium">
                    Thank you! We&apos;ll notify you when your kit is ready.
                  </p>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setSubmitError("")
                        }}
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-5 py-3 bg-background border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-[#C4884F] text-white font-medium rounded-full transition-all hover:shadow-lg hover:shadow-[#C4884F]/20 disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Notify Me"}
                      </button>
                    </div>
                    {submitError && (
                      <p className="text-red-500 text-sm">{submitError}</p>
                    )}
                  </form>
                )}
              </motion.div>

              {/* Retake Quiz */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center"
              >
                <button
                  onClick={handleRetake}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Retake Quiz
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
