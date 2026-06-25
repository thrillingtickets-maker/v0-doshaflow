"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { label: "Start Here", href: "/start-here" },
    { label: "Guides", href: "/guides" },
    { label: "Journal", href: "/journal" },
    { label: "For Men", href: "/ayurveda-for-men" },
    { label: "For Women", href: "/ayurveda-for-women" },
    { label: "Reports", href: "/samples" },
    { label: "FAQ", href: "/faq" },
    { label: "Transparency", href: "/transparency" },
    { label: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : ""
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-[20px]">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-sm">D</span>
              </span>
              <span className="font-serif text-xl font-medium text-foreground">DoshaFlow</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const isStartHere = link.label === "Start Here"
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm transition-colors duration-200 relative ${
                      isStartHere
                        ? "font-serif font-semibold text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    style={{
                      letterSpacing: "0.01em",
                    }}
                  >
                    {link.label}
                    <span 
                      className={`absolute bottom-0 left-0 h-px ${
                        isStartHere ? "bg-foreground" : "bg-foreground"
                      }`}
                      style={{
                        width: isStartHere ? "40%" : "0%",
                        transition: "width 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.width = "100%";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.width = isStartHere ? "40%" : "0%";
                      }}
                    />
                  </a>
                )
              })}
              <a
                href="/quiz"
                className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Take the Quiz →
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => {
                  const isStartHere = link.label === "Start Here"
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`py-2 ${
                        isStartHere
                          ? "font-serif font-semibold text-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  )
                })}
                <a
                  href="/quiz"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-primary text-primary-foreground text-center font-medium rounded-full block"
                >
                  Take the Quiz →
                </a>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  )
}
