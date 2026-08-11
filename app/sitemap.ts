import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://touchcreative.agency'

const staticRoutes = [
  '',
  '/about',
  '/services',
  '/work',
  '/work/skilled-room',
  '/blog',
  '/careers',
  '/tools',
  '/contact',
  '/newsletter',
]

const blogPosts = [
  {
    slug: 'how-to-choose-brand-colors',
    date: '2026-08-08',
    image: '/blog/brand-colors.jpg',
  },
  {
    slug: 'how-much-does-a-website-cost',
    date: '2026-08-05',
    image: '/blog/website-cost.jpg',
  },
  {
    slug: 'short-form-video-strategy',
    date: '2026-07-28',
    image: '/blog/short-form-video.jpg',
  },
  {
    slug: 'instagram-ads-guide',
    date: '2026-07-21',
    image: '/blog/instagram-ads.jpg',
  },
  {
    slug: 'best-font-pairings',
    date: '2026-07-14',
    image: '/blog/font-pairings.jpg',
  },
  {
    slug: 'web-design-trends-2026',
    date: '2026-07-07',
    image: '/blog/web-design-trends.jpg',
  },
]

const toolPages = [
  '/tools/color-palette-generator',
  '/tools/font-pairing-suggester',
  '/tools/seo-analyzer',
  '/tools/performance-checker',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date('2026-08-11'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const toolPagesSitemap: MetadataRoute.Sitemap = toolPages.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date('2026-08-11'),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
    images: [`${SITE_URL}${post.image}`],
  }))

  return [...pages, ...toolPagesSitemap, ...posts]
}
