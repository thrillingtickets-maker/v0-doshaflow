import { ImageResponse } from 'next/og'

export const alt = 'DoshaFlow: personalized Ayurvedic wellness for how your body actually feels'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#f6f3ec',
          color: '#2e2620',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 20, height: 20, borderRadius: 10, background: '#3f6545' }} />
          <div style={{ fontSize: 34, letterSpacing: 1 }}>DoshaFlow</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.1, maxWidth: 960 }}>
            Personalized wellness for how your body actually feels
          </div>
          <div style={{ fontSize: 30, color: '#6b6158', fontFamily: 'sans-serif' }}>
            Ayurvedic guides for Vata, Pitta and Kapha
          </div>
        </div>
        <div style={{ display: 'flex', height: 8, width: 160, background: '#3f6545' }} />
      </div>
    ),
    size,
  )
}
