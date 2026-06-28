import { anthropic } from '@ai-sdk/anthropic'
import { generateText } from 'ai'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { industry, mood } = await req.json()

    if (!process.env.ANTHROPIC_API_KEY) {
      // Fallback to a predefined palette if no API key is present
      return NextResponse.json({
        colors: [
          { name: 'Primary', hex: '#6366F1', usage: 'Main brand color' },
          { name: 'Secondary', hex: '#8B5CF6', usage: 'Accents and highlights' },
          { name: 'Tertiary', hex: '#EC4899', usage: 'Supporting elements' },
          { name: 'Accent', hex: '#F43F5E', usage: 'Interactive elements' },
          { name: 'Neutral', hex: '#F8FAFC', usage: 'Background accents' },
        ],
        description: `A vibrant ${mood.toLowerCase()} palette for the ${industry.toLowerCase()} industry.`,
        mood: mood,
      })
    }

    const prompt = `Generate a modern 5-color palette for a Creative Agency client:
    - Industry: ${industry}
    - Mood: ${mood}
    
    Provide 5 hex colors with names and intended usage. 
    Format response as JSON with this structure:
    {
      "colors": [
        { "name": "Color Name", "hex": "#HEXCODE", "usage": "Usage description" }
      ],
      "description": "Short explanation of the palette",
      "mood": "${mood}"
    }`

    const { text } = await generateText({
      model: anthropic('claude-3-5-sonnet-20240620'),
      prompt: prompt,
    })

    // Parse the AI response (assuming it returned valid JSON)
    const data = JSON.parse(text)
    return NextResponse.json(data)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate palette' },
      { status: 500 }
    )
  }
}
