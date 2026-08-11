export interface Tool {
  id: string
  label: string
  shortLabel: string
  href: string
  description: string
}

export const tools: Tool[] = [
  {
    id: 'color-palette-generator',
    label: 'Color Palette Generator',
    shortLabel: 'Color Palette',
    href: '/tools/color-palette-generator',
    description: 'Generate beautiful, brand-matched color palettes using AI. Pick an industry and mood — get 5 curated hex codes instantly.',
  },
  {
    id: 'font-pairing-suggester',
    label: 'Font Pairing Suggester',
    shortLabel: 'Font Pairing',
    href: '/tools/font-pairing-suggester',
    description: 'Get professionally curated Google Fonts pairings tailored to your design style — from tech startups to luxury brands.',
  },
  {
    id: 'seo-analyzer',
    label: 'SEO Analyzer',
    shortLabel: 'SEO Analyzer',
    href: '/tools/seo-analyzer',
    description: 'Audit any website for on-page SEO issues in seconds — titles, meta tags, headings, images, and more.',
  },
  {
    id: 'performance-checker',
    label: 'Performance Checker',
    shortLabel: 'Performance',
    href: '/tools/performance-checker',
    description: 'Measure website speed, page size, and resources — with AI-powered optimization tips.',
  },
]
