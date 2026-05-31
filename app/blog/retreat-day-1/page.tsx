import Link from "next/link"

export const metadata = {
  title: "Day 1 at an Ayurvedic Retreat: Arriving in the Wrong Condition",
  description:
    "An honest first-person account of day 1 at an Ayurvedic retreat in Kerala — arriving with addiction, anxiety and bad sleep, the intake consultation, Abhyanga, and why I'm really here.",
  openGraph: {
    title: "Day 1 at an Ayurvedic Retreat: Arriving in the Wrong Condition",
    description:
      "An honest first-person account of day 1 at an Ayurvedic retreat in Kerala — arriving with addiction, anxiety and bad sleep, the intake consultation, Abhyanga, and why I'm really here.",
    url: "https://www.doshaflow.com/blog/retreat-day-1",
    siteName: "DoshaFlow",
    type: "article",
  },
  alternates: {
    canonical: "https://www.doshaflow.com/blog/retreat-day-1",
  },
}

export default function RetreatDay1Page() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdf8f3' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 24px' }}>
        <Link href="/journal" style={{ color: '#9a7a5a', textDecoration: 'none', fontSize: '14px', marginBottom: '24px', display: 'inline-block' }}>
          &larr; Back to Retreat Journal
        </Link>

        <header style={{ marginBottom: '48px' }}>
          <time style={{ fontSize: '14px', color: '#9a7a5a' }}>May 25, 2026</time>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#2c1a0e', marginTop: '12px', marginBottom: '16px', lineHeight: 1.2 }}>
            Day 1: I Arrived Smelling Like Alcohol. The Doctor Noticed.
          </h1>
          <p style={{ color: '#9a7a5a' }}>By <span style={{ color: '#2c1a0e', fontWeight: 500 }}>Alex</span> · May 25, 2026 · Ayurvedic Retreat, Day 1</p>
        </header>

        <article style={{ color: '#2c1a0e', lineHeight: 1.75 }}>
          <p style={{ marginBottom: '20px' }}>Let me be honest about how I arrived here. I landed in India on Wednesday. I was supposed to come to the retreat on Thursday. Instead I gave myself a long weekend, and I made some choices that were not exactly in the spirit of what I was about to do. By the time I walked into the intake consultation on Monday morning, the doctor &mdash; a soft-spoken woman who has probably seen everything &mdash; looked at me and said, with no judgment and complete matter-of-factness, that she could smell the alcohol. I couldn&apos;t smell it. She could. That&apos;s where we&apos;re starting.</p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>Why I&apos;m here.</h2>

          <p style={{ marginBottom: '20px' }}>The honest version: addiction. And through that, or because of that, or in a loop with that &mdash; sleep problems, anxiety, depression. The classic trifecta that nobody talks about cleanly because they&apos;re all tangled together and it&apos;s hard to say which came first. Alcohol helps with the anxiety while I&apos;m drinking it. Then it wrecks the sleep. Then the bad sleep makes the depression worse. Then the depression makes the anxiety worse. Then the anxiety makes me want a drink. Most people who&apos;ve struggled with any of this will recognise the cycle immediately. It&apos;s not complicated, exactly. It&apos;s just very hard to get out of once you&apos;re in it. I&apos;ve tried other things. I&apos;m here because I want to try something that addresses the root &mdash; the nervous system, the constitution, the actual underlying pattern &mdash; rather than just managing the symptoms. I&apos;m also here because I want this to be the last time I arrive somewhere like this in this condition. I want to come back to Ayurvedic retreats in the future to maintain and enhance, not to reset from scratch. That distinction matters to me.</p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>First impressions.</h2>

          <p style={{ marginBottom: '20px' }}>The place is quiet. It&apos;s low season &mdash; rainy season in Kerala &mdash; so there aren&apos;t many guests, which I prefer. Hot and humid in a way that hits you immediately when you step outside. The kind of humid that makes you sweat just standing still, which the practitioners tell me is actually ideal for what I&apos;m here to do. The body needs to move things out. Sweating is part of that. I have my own room, my own bathroom. Small things that matter more than they should when you&apos;re already feeling raw. The first meal was good. Simple, warm, spiced. I ate it and felt something settle slightly.</p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>What the first days look like.</h2>

          <p style={{ marginBottom: '20px' }}>The doctor has restricted me from any real activities for the first two to three days. No yoga, no exercise, no agenda. Just treatments &mdash; massages, rest, adjustment. The Ayurvedic massage here &mdash; Abhyanga &mdash; is worth knowing about if you haven&apos;t experienced it before. You are on a wooden table. There is a lot of warm oil. If you are not comfortable with that kind of thing it can feel overwhelming. I&apos;ve done versions of it before so I know what&apos;s coming, but it&apos;s still a particular experience to surrender to. Two practitioners working in rhythm, oil everywhere, no conversation. It sounds strange. It does something real.</p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>What I&apos;m telling myself.</h2>

          <p style={{ marginBottom: '20px' }}>Can&apos;t get worse than what it was. That&apos;s my baseline motivation right now, and I&apos;ll take it. I&apos;m not coming in with a plan or a philosophy or optimism. I&apos;m coming in willing. One foot in front of the other, see what happens, try not to be an idiot about it. The doctor is sweet and seems to know what she&apos;s doing. The food is good. The room is quiet. That&apos;s enough for day one.</p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: '#2c1a0e' }}>One thing I&apos;d say to anyone thinking about doing this.</h2>

          <p style={{ marginBottom: '20px' }}>Start your practice before you arrive. Even a week of better sleep and no alcohol before walking through the door would have made this easier. I didn&apos;t do that, and I am going to feel it for the next few days. But here I am anyway.</p>

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e8d9c5', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link href="/quiz" style={{ color: '#9a7a5a', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>
              Take the dosha quiz &rarr;
            </Link>
            <Link href="/journal" style={{ color: '#9a7a5a', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>
              Read more from the retreat &rarr;
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}