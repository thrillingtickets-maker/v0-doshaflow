"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setError("")

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
      setError("Something went wrong — try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    onClose()
    // Reset state after modal closes
    setTimeout(() => {
      setEmail("")
      setSubmitted(false)
      setError("")
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[#FDF8F3] rounded-2xl p-8 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-[#2D3B2D]/60 hover:text-[#2D3B2D] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-4">
                <h3 className="font-serif text-2xl font-medium text-[#2D3B2D] mb-3">
                  You're on the list.
                </h3>
                <p className="text-[#2D3B2D]/70 mb-6">
                  We'll be in touch.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-[#2D3B2D] text-white font-medium rounded-full hover:bg-[#3d4d3d] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-medium text-[#2D3B2D] mb-2 text-center">
                  Join the Waitlist
                </h3>
                <p className="text-[#2D3B2D]/70 text-center mb-6">
                  Be the first to know when DoshaFlow launches.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError("")
                    }}
                    placeholder="Enter your email"
                    required
                    className="w-full px-5 py-4 bg-white border border-[#2D3B2D]/20 rounded-full text-[#2D3B2D] placeholder:text-[#2D3B2D]/40 focus:outline-none focus:ring-2 focus:ring-[#2D3B2D]/20 focus:border-[#2D3B2D]/40"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#2D3B2D] text-white font-medium rounded-full hover:bg-[#3d4d3d] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Joining...
                      </>
                    ) : (
                      "Join the Waitlist"
                    )}
                  </button>
                  {error && (
                    <p className="text-red-600 text-sm text-center">{error}</p>
                  )}
                </form>

                <p className="mt-4 text-xs text-[#2D3B2D]/50 text-center">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
