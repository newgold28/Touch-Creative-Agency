import type { Metadata } from 'next'
import ToolPageLayout from '@/components/tools/tool-page-layout'
import SeoAnalyzer from '@/components/tools/seo-analyzer'

export const metadata: Metadata = {
  title: 'SEO Analyzer',
  description: 'Free on-page SEO checker. Audit any website for titles, meta tags, headings, images, and social tags — with AI recommendations.',
  openGraph: {
    type: 'website',
    title: 'SEO Analyzer',
    description: 'Free on-page SEO checker with AI-powered recommendations for any website.',
  },
}

export default function SeoAnalyzerToolPage() {
  return (
    <ToolPageLayout
      title="SEO Analyzer"
      description="Paste any public URL and get a full on-page SEO audit — scored out of 100, with AI recommendations to fix what matters."
    >
      <SeoAnalyzer />
    </ToolPageLayout>
  )
}
