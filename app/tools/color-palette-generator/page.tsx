import type { Metadata } from 'next'
import ToolPageLayout from '@/components/tools/tool-page-layout'
import ColorPaletteGenerator from '@/components/tools/color-palette-generator'

export const metadata: Metadata = {
  title: 'AI Color Palette Generator',
  description: 'Free AI color palette generator. Pick an industry and mood — get 5 curated, accessible hex codes in seconds.',
  openGraph: {
    type: 'website',
    title: 'AI Color Palette Generator',
    description: 'Free AI color palette generator. Pick an industry and mood — get 5 curated hex codes in seconds.',
  },
}

export default function ColorPaletteToolPage() {
  return (
    <ToolPageLayout
      title="AI Color Palette Generator"
      description="Choose an industry and mood, and get a professional 5-color palette with usage tips — powered by Colormind AI."
    >
      <ColorPaletteGenerator />
    </ToolPageLayout>
  )
}
