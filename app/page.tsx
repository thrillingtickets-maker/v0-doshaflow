import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-saffron mb-4">
                Ayurvedic Wellness
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-bark leading-tight text-balance">
                Ancient wisdom for{" "}
                <span className="italic text-saffron">modern balance</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-2xl">
                Discover your unique dosha and unlock personalized nutrition, movement, and rituals that restore your natural equilibrium.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center rounded-full bg-saffron px-8 py-3 text-base font-medium text-white hover:bg-saffron-dark transition-colors"
                >
                  Take the Dosha Quiz
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border-2 border-bark px-8 py-3 text-base font-medium text-bark hover:bg-bark hover:text-cream transition-colors"
                >
                  Read My Story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="bg-sand-light py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-saffron mb-4">
                The Process
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-bark">
                How it works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-cream rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-saffron">1</span>
                </div>
                <h3 className="font-serif text-xl text-bark mb-3">Discover Your Dosha</h3>
                <p className="text-muted leading-relaxed">
                  Take our comprehensive quiz to understand your unique Ayurvedic constitution — Vata, Pitta, or Kapha.
                </p>
              </div>
              <div className="bg-cream rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-saffron">2</span>
                </div>
                <h3 className="font-serif text-xl text-bark mb-3">Get Your Plan</h3>
                <p className="text-muted leading-relaxed">
                  Receive personalized recommendations for nutrition, movement, and daily rituals tailored to your dosha.
                </p>
              </div>
              <div className="bg-cream rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center mb-6">
                  <span className="font-serif text-2xl text-saffron">3</span>
                </div>
                <h3 className="font-serif text-xl text-bark mb-3">Find Your Flow</h3>
                <p className="text-muted leading-relaxed">
                  Integrate small, sustainable changes that compound into profound shifts in how you feel and show up.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <blockquote>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-bark leading-relaxed italic">
                &quot;Ayurveda is not about living a restricted life. It&apos;s about understanding yourself so deeply that balance becomes effortless.&quot;
              </p>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-bark py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-cream">
              Ready to find your balance?
            </h2>
            <p className="mt-4 text-sand text-lg">
              Start with a simple quiz that takes less than 5 minutes.
            </p>
            <div className="mt-8">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center rounded-full bg-saffron px-8 py-3 text-base font-medium text-white hover:bg-saffron-dark transition-colors"
              >
                Take the Dosha Quiz
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
