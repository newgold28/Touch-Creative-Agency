import type { Metadata } from 'next'
import ToolPageLayout from '@/components/tools/tool-page-layout'
import FontPairingGenerator from '@/components/tools/font-pairing-generator'

export const metadata: Metadata = {
  title: 'Font Pairing Suggester',
  description: 'Free font pairing tool. Get professionally curated Google Fonts pairings for any design style — tech, luxury, corporate and more.',
  openGraph: {
    type: 'website',
    title: 'Font Pairing Suggester',
    description: 'Free font pairing tool. Get curated Google Fonts pairings for any design style.',
  },
}

export default function FontPairingToolPage() {
  return (
    <ToolPageLayout
      title="Font Pairing Suggester"
      description="Pick a design style and get a tested Google Fonts pairing — display headline plus readable body, ready to copy."
    >
      <FontPairingGenerator />
    </ToolPageLayout>
  )
}
