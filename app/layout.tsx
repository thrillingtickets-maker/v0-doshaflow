import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.doshaflow.com'),
  title: 'DoshaFlow | Personalized Wellness for How Your Body Actually Feels',
  description: 'Meal plans, movement, digestion, and recovery — all adapted to your body and routine. Experience Ayurvedic wellness meets modern science.',
  keywords: ['wellness', 'ayurveda', 'dosha', 'meal planning', 'digestion', 'workouts', 'personalized health'],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'DoshaFlow — Ayurvedic Guides & Journal' }],
    },
  },
  openGraph: {
    title: 'DoshaFlow | Personalized Wellness for How Your Body Actually Feels',
    description: 'Meal plans, movement, digestion, and recovery — all adapted to your body and routine. Experience Ayurvedic wellness meets modern science.',
    url: 'https://www.doshaflow.com',
    siteName: 'DoshaFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DoshaFlow | Personalized Wellness for How Your Body Actually Feels',
    description: 'Meal plans, movement, digestion, and recovery — all adapted to your body and routine.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.doshaflow.com/#organization',
      name: 'DoshaFlow',
      url: 'https://www.doshaflow.com',
      description:
        'Personalized Ayurvedic wellness guidance — meal plans, movement, digestion, and recovery adapted to your body and routine.',
      founder: {
        '@type': 'Person',
        name: 'Alex Osborne',
        url: 'https://www.doshaflow.com/founder',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.doshaflow.com/#website',
      url: 'https://www.doshaflow.com',
      name: 'DoshaFlow',
      publisher: { '@id': 'https://www.doshaflow.com/#organization' },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
