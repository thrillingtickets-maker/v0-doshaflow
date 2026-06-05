"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface ArticleEmailCaptureProps {
  articleTitle?: string;
}

export function ArticleEmailCapture({ articleTitle = "this article" }: ArticleEmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "article", articleTitle }),
      })

      if (response.ok) {
        setStatus("success")
        setEmail("")
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        marginTop: "48px",
        marginBottom: "48px",
        padding: "32px",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #faf6f0 0%, #f5f0e8 100%)",
        border: "1px solid #e0d5c5",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h3 style={{
          fontSize: "18px",
          fontWeight: 600,
          color: "#2c1a0e",
          marginBottom: "12px",
          fontFamily: "Georgia, serif",
        }}>
          Get Practical Guides Like This
        </h3>
        
        <p style={{
          fontSize: "15px",
          color: "#5a5a5a",
          marginBottom: "20px",
          lineHeight: 1.6,
        }}>
          Essays and protocols for nervous system recovery, dosha-based wellness, and modern healing—delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              minWidth: "200px",
              padding: "12px 16px",
              background: "white",
              border: "1px solid #d9cdb8",
              borderRadius: "8px",
              fontSize: "14px",
              color: "#2c1a0e",
              fontFamily: "inherit",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              padding: "12px 24px",
              background: status === "success" ? "#7cb342" : "#b5763a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "background 0.2s",
              opacity: status === "loading" ? 0.7 : 1,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
            }}
          >
            {status === "loading" ? "Sending..." : status === "success" ? "✓ Subscribed" : "Subscribe"}
          </button>
        </form>

        {status === "error" && (
          <p style={{
            marginTop: "12px",
            fontSize: "13px",
            color: "#d32f2f",
          }}>
            Something went wrong. Please try again.
          </p>
        )}

        <p style={{
          marginTop: "12px",
          fontSize: "12px",
          color: "#8a7a5a",
        }}>
          No spam, no noise. Just practical guides for healing.
        </p>
      </div>
    </motion.div>
  )
}
