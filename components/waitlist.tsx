"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Script from "next/script"

export function Waitlist() {
  useEffect(() => {
    // Style the Kit form after it loads to match our design
    const styleKitForm = () => {
      const formContainer = document.querySelector('[data-uid="93062a6d88"]')
      if (formContainer) {
        // The Kit form will be styled via CSS below
      }
    }
    
    // Check periodically until the form loads
    const interval = setInterval(() => {
      const form = document.querySelector('[data-uid="93062a6d88"]')
      if (form) {
        styleKitForm()
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="waitlist" className="px-6 py-24 md:py-32 bg-primary text-primary-foreground">
      <style jsx global>{`
        /* Kit form custom styling to match existing design */
        [data-uid="93062a6d88"] {
          max-width: 28rem !important;
          margin: 0 auto !important;
        }
        
        [data-uid="93062a6d88"] form {
          display: flex !important;
          flex-direction: column !important;
          gap: 0.75rem !important;
        }
        
        @media (min-width: 640px) {
          [data-uid="93062a6d88"] form {
            flex-direction: row !important;
          }
        }
        
        [data-uid="93062a6d88"] input[type="email"],
        [data-uid="93062a6d88"] input[type="text"] {
          flex: 1 !important;
          padding: 1rem 1.5rem !important;
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 9999px !important;
          color: hsl(var(--primary-foreground)) !important;
          font-size: 1rem !important;
        }
        
        [data-uid="93062a6d88"] input[type="email"]::placeholder,
        [data-uid="93062a6d88"] input[type="text"]::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        
        [data-uid="93062a6d88"] input[type="email"]:focus,
        [data-uid="93062a6d88"] input[type="text"]:focus {
          outline: none !important;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3) !important;
        }
        
        [data-uid="93062a6d88"] button[type="submit"],
        [data-uid="93062a6d88"] input[type="submit"] {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.5rem !important;
          padding: 1rem 2rem !important;
          background: hsl(var(--primary-foreground)) !important;
          color: hsl(var(--primary)) !important;
          font-weight: 500 !important;
          border-radius: 9999px !important;
          border: none !important;
          cursor: pointer !important;
          transition: all 0.2s !important;
          font-size: 1rem !important;
        }
        
        [data-uid="93062a6d88"] button[type="submit"]:hover,
        [data-uid="93062a6d88"] input[type="submit"]:hover {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2) !important;
        }
        
        [data-uid="93062a6d88"] label {
          color: hsl(var(--primary-foreground)) !important;
        }
        
        [data-uid="93062a6d88"] p,
        [data-uid="93062a6d88"] span {
          color: hsl(var(--primary-foreground)) !important;
        }
        
        /* Hide Kit branding if present */
        [data-uid="93062a6d88"] a[href*="kit.com"],
        [data-uid="93062a6d88"] a[href*="convertkit"] {
          display: none !important;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase bg-primary-foreground/10 text-primary-foreground rounded-full">
            Join the waitlist
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            Be the first to experience personalized wellness
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 leading-relaxed mb-12">
            Join our waitlist for early access. We&apos;ll notify you when DoshaFlow is ready — plus early members get 3 months free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <Script 
            async 
            data-uid="93062a6d88" 
            src="https://doshaflow.kit.com/93062a6d88/index.js"
            strategy="lazyOnload"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-sm text-primary-foreground/60"
        >
          No spam, ever. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  )
}
