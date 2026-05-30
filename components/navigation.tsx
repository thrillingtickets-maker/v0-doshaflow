"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const howItWorksHref = pathname === "/" ? "#how-it-works" : "/#how-it-works"

  const navLinks = [
    { label: "How it works", href: howItWorksHref },
    { label: "My Story", href: "/about" },
    {
      label: "Blog",
      href: "/blog",
      dropdown: [
        { label: "Articles", href: "/blog" },
        { label: "Retreat Journal", href: "/journal" },
      ],
    },
    { label: "Sample Reports", href: "/samples" },
    { label: "For Men", href: "/ayurveda-for-men" },
    { label: "For Women", href: "/ayurveda-for-women" },
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
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-sm">D</span>
              </span>
              <span className="font-serif text-xl font-medium text-foreground">DoshaFlow</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative group">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-background border border-border rounded-xl shadow-lg py-2 min-w-[180px]">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ),
              )}
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
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label} className="flex flex-col gap-2">
                      <span className="text-foreground py-2 font-medium">{link.label}</span>
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground py-1 pl-4"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground py-2"
                    >
                      {link.label}
                    </a>
                  ),
                )}
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
