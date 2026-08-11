import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Insights & Ideas for Modern Brands',
  description: 'Practical guides on branding, web design, video, and growth from the Touch Creative team in Nigeria. Learn how to build a brand that gets found, trusted, and bought from across Nigeria and Africa.',
  openGraph: {
    type: 'website',
    title: 'Blog — Insights & Ideas for Modern Brands',
    description: 'Practical guides on branding, web design, video, and growth from the Touch Creative team in Nigeria — the best creative agency in Africa.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Touch Creative Agency — Best Creative Agency in Nigeria & Africa',
      },
    ],
  },
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
