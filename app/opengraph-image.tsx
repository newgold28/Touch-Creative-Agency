import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Touch Creative Agency — Best Creative Agency in Nigeria & Africa'
export const runtime = 'edge'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '88px',
          backgroundColor: '#000',
          backgroundImage:
            'radial-gradient(circle at 18% 12%, rgba(37,99,235,0.4), transparent 52%), radial-gradient(circle at 92% 88%, rgba(96,165,250,0.28), transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '44px',
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              backgroundColor: '#2563eb',
              marginRight: 16,
            }}
          />
          <div
            style={{
              color: '#60a5fa',
              fontSize: 26,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Touch Creative Agency
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            color: '#ffffff',
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.08,
          }}
        >
          Best Creative Agency in
        </div>
        <div
          style={{
            display: 'flex',
            color: '#60a5fa',
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.08,
          }}
        >
          Nigeria &amp; Africa
        </div>
        <div
          style={{
            display: 'flex',
            color: '#a3a3a3',
            fontSize: 30,
            marginTop: 52,
          }}
        >
          Design &middot; Branding &middot; Web Development &middot; Marketing &middot; Video
        </div>
        <div
          style={{
            display: 'flex',
            color: '#737373',
            fontSize: 24,
            marginTop: 72,
          }}
        >
          touchcreative.agency
        </div>
      </div>
    ),
    size,
  )
}
