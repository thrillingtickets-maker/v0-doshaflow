import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Contact DoshaFlow',
  description: 'Get in touch with DoshaFlow. Questions about Ayurveda, the dosha system, or DoshaFlow?',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main style={{ minHeight: '100vh', backgroundColor: '#fdf8f3' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '120px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
          <article>
            <header style={{ marginBottom: '48px', marginTop: '32px' }}>
              <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#2a1f14', marginBottom: '16px', fontFamily: 'Georgia, serif', lineHeight: 1.2 }}>
                Get in Touch
              </h1>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#6b5a4a', marginBottom: '8px' }}>
                Questions about Ayurveda, the dosha system, or DoshaFlow? I&apos;d like to hear from you.
              </p>
            </header>

            <div style={{ marginBottom: '48px', paddingBottom: '32px', borderBottom: '1px solid #e8d9c5' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#2a1f14', marginBottom: '16px' }}>
                Email
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#6b5a4a', marginBottom: '16px' }}>
                The best way to reach me is directly via email. I read every message.
              </p>
              <a 
                href="mailto:alex@doshaflow.com?subject=DoshaFlow%20Enquiry"
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#b5763a',
                  textDecoration: 'none',
                  borderBottom: '2px solid #b5763a',
                }}
              >
                alex@doshaflow.com
              </a>
            </div>

            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#2a1f14', marginBottom: '16px' }}>
                What I Can Help With
              </h2>
              <ul style={{ fontSize: '16px', lineHeight: 1.75, color: '#6b5a4a', listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '12px' }}>• Questions about your dosha and how it applies to your specific situation</li>
                <li style={{ marginBottom: '12px' }}>• Recommendations for sleep, digestion, stress, or nervous system recovery</li>
                <li style={{ marginBottom: '12px' }}>• How to use DoshaFlow for personalized wellness</li>
                <li style={{ marginBottom: '12px' }}>• Collaborations or partnership opportunities</li>
                <li>• Feedback about the site or your experience</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#f5f0e8', borderRadius: '12px', padding: '32px', marginTop: '48px' }}>
              <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#4a3728', margin: 0 }}>
                Response time varies based on volume, but I aim to reply within a few days. Thank you for reaching out.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
