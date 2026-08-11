import { NextResponse } from 'next/server'
import { generateWithGroq } from '@/lib/ai/groq'

export async function POST(req: Request) {
  try {
    const { colors, fonts } = await req.json()

    if (!Array.isArray(colors) || colors.length === 0) {
      return NextResponse.json({ error: 'Provide at least one color.' }, { status: 400 })
    }

    const fallback =
      '• Use the primary color for CTAs and key elements to draw attention\n' +
      '• Apply the secondary color sparingly for accents and hover states\n' +
      '• Ensure sufficient contrast between text and background colors for accessibility'

    const tips = await generateWithGroq({
      system:
        'You are a senior UX/UI designer. Give exactly 3 concise, specific, actionable design tips in bullet points (each starting with "•"). Never be generic.',
      prompt: `Give 3 specific, actionable design tips for using these colors and fonts together:
Colors: ${colors.join(', ')}
Fonts: ${Array.isArray(fonts) ? fonts.join(', ') : 'Poppins, Inter'}

Format as bullet points. Be practical and specific about contrast, hierarchy, and usage.`,
      maxTokens: 250,
      temperature: 0.6,
      fallback,
    })

    return NextResponse.json({ tips })
  } catch (error) {
    console.error('Design tips error:', error)
    return NextResponse.json({ error: 'Failed to generate design tips.' }, { status: 500 })
  }
}
