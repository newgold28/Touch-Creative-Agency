import type { Metadata } from 'next'
import ToolPageLayout from '@/components/tools/tool-page-layout'
import PerformanceChecker from '@/components/tools/performance-checker'

export const metadata: Metadata = {
  title: 'Performance Checker',
  description: 'Free website speed test. Measure load time, TTFB, page size, and compression — with AI-powered optimization tips.',
  openGraph: {
    type: 'website',
    title: 'Performance Checker',
    description: 'Free website speed checker with AI-powered optimization tips.',
  },
}

export default function PerformanceCheckerToolPage() {
  return (
    <ToolPageLayout
      title="Performance Checker"
      description="Measure how fast any website loads — time to first byte, page size, compression, and resources — then get AI tips to make it faster."
    >
      <PerformanceChecker />
    </ToolPageLayout>
  )
}
