import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-sand-light border-t border-sand">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl text-bark">DoshaFlow</span>
            </Link>
            <p className="mt-4 text-sm text-muted max-w-md">
              Ancient Ayurvedic wisdom adapted for modern life. Discover your dosha and find balance through personalized nutrition, movement, and rituals.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-bark uppercase tracking-wider">Explore</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/#how-it-works" className="text-sm text-muted hover:text-saffron transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-sm text-muted hover:text-saffron transition-colors">
                  Take the Quiz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted hover:text-saffron transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted hover:text-saffron transition-colors">
                  My Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-bark uppercase tracking-wider">Connect</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href="#" className="text-sm text-muted hover:text-saffron transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted hover:text-saffron transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="mailto:hello@doshaflow.com" className="text-sm text-muted hover:text-saffron transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sand">
          <p className="text-sm text-muted text-center">
            &copy; {new Date().getFullYear()} DoshaFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
