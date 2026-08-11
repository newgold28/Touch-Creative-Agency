import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://touchcreative.agency'

export const metadata: Metadata = {
  title: 'Free AI Tools — Color Palettes, Font Pairings, SEO & Performance',
  description: 'Free AI-powered tools from Touch Creative Agency: color palette generator, font pairing suggester, SEO analyzer, and website performance checker.',
  openGraph: {
    type: 'website',
    title: 'Free AI Tools — Color Palettes, Font Pairings, SEO & Performance',
    description: 'Free AI-powered tools from Touch Creative Agency: color palette generator, font pairing suggester, SEO analyzer, and website performance checker.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Free AI tools from Touch Creative Agency — Nigeria\'s best creative agency',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Touch Creative Free AI Tools',
  url: `${SITE_URL}/tools`,
  description:
    'Free AI-powered tools: color palette generator, font pairing suggester, SEO analyzer, and website performance checker.',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Touch Creative Agency',
    url: SITE_URL,
  },
  featureList: [
    'AI Color Palette Generator',
    'Font Pairing Suggester',
    'SEO Analyzer',
    'Performance Checker',
  ],
}

export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
