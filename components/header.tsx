"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sand">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl text-bark">DoshaFlow</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-bark-light hover:text-saffron transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-bark-light hover:text-saffron transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-bark-light hover:text-saffron transition-colors"
            >
              My Story
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center rounded-full bg-saffron px-5 py-2 text-sm font-medium text-white hover:bg-saffron-dark transition-colors"
            >
              Take the Quiz
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-bark-light hover:text-bark hover:bg-sand transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-sand">
            <div className="flex flex-col gap-4">
              <Link
                href="/#how-it-works"
                className="text-sm font-medium text-bark-light hover:text-saffron transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-bark-light hover:text-saffron transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-bark-light hover:text-saffron transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Story
              </Link>
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-full bg-saffron px-5 py-2 text-sm font-medium text-white hover:bg-saffron-dark transition-colors w-fit"
                onClick={() => setMobileMenuOpen(false)}
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
