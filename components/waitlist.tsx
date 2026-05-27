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
        /* Reset Kit form container */
        [data-uid="93062a6d88"],
        .formkit-form[data-uid="93062a6d88"] {
          width: 100% !important;
          max-width: 28rem !important;
          margin: 0 auto !important;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        
        /* Hide any image/card layouts from Kit */
        .formkit-form[data-uid="93062a6d88"] .formkit-background,
        .formkit-form[data-uid="93062a6d88"] .formkit-image,
        .formkit-form[data-uid="93062a6d88"] [data-element="header"],
        .formkit-form[data-uid="93062a6d88"] .formkit-header,
        .formkit-form[data-uid="93062a6d88"] .formkit-subheader,
        .formkit-form[data-uid="93062a6d88"] .formkit-guarantee,
        .formkit-form[data-uid="93062a6d88"] .formkit-powered-by-convertkit-container {
          display: none !important;
        }
        
        /* Form layout - horizontal on desktop, centered */
        .formkit-form[data-uid="93062a6d88"] .formkit-fields,
        .formkit-form[data-uid="93062a6d88"] form {
          display: flex !important;
          flex-direction: column !important;
          gap: 0.75rem !important;
          background: transparent !important;
          padding: 0 !important;
          align-items: center !important;
          justify-content: center !important;
        }
        
        @media (min-width: 640px) {
          .formkit-form[data-uid="93062a6d88"] .formkit-fields,
          .formkit-form[data-uid="93062a6d88"] form {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
        
        /* Field container */
        .formkit-form[data-uid="93062a6d88"] .formkit-field {
          flex: 1 !important;
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
        }
        
        /* Email input styling - solid white background, dark text */
        .formkit-form[data-uid="93062a6d88"] input[type="email"],
        .formkit-form[data-uid="93062a6d88"] input[type="text"],
        .formkit-form[data-uid="93062a6d88"] .formkit-input {
          width: 100% !important;
          height: 52px !important;
          padding: 0 24px !important;
          background: #ffffff !important;
          border: none !important;
          border-radius: 9999px !important;
          color: #1f1f1f !important;
          font-size: 1rem !important;
          font-family: inherit !important;
          line-height: 52px !important;
          box-sizing: border-box !important;
        }
        
        .formkit-form[data-uid="93062a6d88"] input::placeholder,
        .formkit-form[data-uid="93062a6d88"] .formkit-input::placeholder {
          color: #6b7280 !important;
        }
        
        .formkit-form[data-uid="93062a6d88"] input:focus,
        .formkit-form[data-uid="93062a6d88"] .formkit-input:focus {
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3) !important;
        }
        
        /* Submit button styling - green with white text */
        .formkit-form[data-uid="93062a6d88"] button[type="submit"],
        .formkit-form[data-uid="93062a6d88"] .formkit-submit,
        .formkit-form[data-uid="93062a6d88"] .formkit-submit button {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          white-space: nowrap !important;
          height: 52px !important;
          padding: 0 2rem !important;
          background: #2d4a3e !important;
          color: #ffffff !important;
          font-weight: 500 !important;
          font-size: 1rem !important;
          font-family: inherit !important;
          border-radius: 9999px !important;
          border: none !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          box-shadow: none !important;
        }
        
        .formkit-form[data-uid="93062a6d88"] button[type="submit"]:hover,
        .formkit-form[data-uid="93062a6d88"] .formkit-submit:hover,
        .formkit-form[data-uid="93062a6d88"] .formkit-submit button:hover {
          background: #3d5a4e !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25) !important;
          transform: translateY(-1px) !important;
        }
        
        /* Success message styling */
        .formkit-form[data-uid="93062a6d88"] .formkit-alert,
        .formkit-form[data-uid="93062a6d88"] [data-element="alert"] {
          background: rgba(255, 255, 255, 0.15) !important;
          border: 1px solid rgba(255, 255, 255, 0.25) !important;
          border-radius: 9999px !important;
          color: #fff !important;
          padding: 1rem 1.5rem !important;
          text-align: center !important;
          font-size: 1rem !important;
        }
        
        /* Hide any labels */
        .formkit-form[data-uid="93062a6d88"] label:not(.formkit-alert) {
          display: none !important;
        }
        
        /* Hide Kit branding */
        .formkit-form[data-uid="93062a6d88"] a[href*="kit.com"],
        .formkit-form[data-uid="93062a6d88"] a[href*="convertkit"],
        .formkit-form[data-uid="93062a6d88"] .formkit-powered-by {
          display: none !important;
        }
        
        /* Error message styling */
        .formkit-form[data-uid="93062a6d88"] .formkit-alert-error {
          background: rgba(220, 38, 38, 0.2) !important;
          border-color: rgba(220, 38, 38, 0.4) !important;
        }
        
        /* Success state */
        .formkit-form[data-uid="93062a6d88"] .formkit-alert-success {
          background: rgba(255, 255, 255, 0.15) !important;
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
