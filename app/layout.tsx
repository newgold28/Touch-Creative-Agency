import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import MotionProvider from '@/components/motion-provider'
import ScrollProgress from '@/components/scroll-progress'
import BackToTop from '@/components/back-to-top'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://touchcreative.agency'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Touch Creative Agency | Best Creative Agency in Nigeria & Africa',
    template: '%s | Touch Creative Agency',
  },
  description: 'Touch Creative Agency is Nigeria\'s best creative agency in Africa — delivering premium design, branding, web development, marketing, and video for modern brands across Nigeria and Africa.',
  generator: 'v0.app',
  keywords: [
    'best creative agency in Nigeria',
    'best creative agency in Africa',
    'creative agency Nigeria',
    'creative agency Africa',
    'design agency Nigeria',
    'marketing agency Nigeria',
    'web development agency Nigeria',
    'branding agency Africa',
    'video production Nigeria',
    'Touch Creative Agency',
  ],
  icons: {
    icon: '/logo.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Touch Creative Agency',
    title: 'Touch Creative Agency | Best Creative Agency in Nigeria & Africa',
    description: 'Nigeria\'s best creative agency — premium design, branding, web development, marketing, and video for modern brands across Africa.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Touch Creative Agency — Best Creative Agency in Nigeria & Africa',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Touch Creative Agency | Best Creative Agency in Nigeria & Africa',
    description: 'Nigeria\'s best creative agency — premium design, branding, web development, marketing, and video for modern brands across Africa.',
    images: ['/opengraph-image'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Touch Creative Agency',
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              description: "Nigeria's best creative agency — premium design, branding, web development, marketing, and video for modern brands across Africa.",
              areaServed: ['Nigeria', 'Africa'],
              address: { '@type': 'PostalAddress', addressCountry: 'NG' },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'info@touchcreativeagency.com',
              },
              sameAs: [
                'https://www.instagram.com/touchcreativeagency/',
                'https://www.tiktok.com/@touchcreativeagency',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Touch Creative Agency',
              url: SITE_URL,
              description: "Best creative agency in Nigeria & Africa — design, branding, web development, marketing, and video.",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden">
          <div className="absolute -top-48 -left-32 h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[130px]" />
          <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[150px]" />
          <div className="absolute inset-x-0 top-0 h-[55vh] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.14),transparent_70%)]" />
        </div>
        <MotionProvider>{children}</MotionProvider>
        <BackToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
