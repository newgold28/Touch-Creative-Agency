// Groq API - Free fast AI inference
// 50 requests per minute free tier
// Excellent for real-time AI processing

export interface GroqGenerationOptions {
  prompt: string
  maxTokens?: number
  temperature?: number
}

export async function generateBrandDescription(
  industry: string,
  style: string,
  tone: string
): Promise<string> {
  const prompt = `You are a creative branding expert. Generate a compelling 2-3 sentence brand description for:
- Industry: ${industry}
- Style: ${style}
- Tone: ${tone}

The description should be inspiring, concise, and suitable for a creative agency website. Focus on the brand's value proposition and unique approach.`

  return generateWithGroq({ prompt, maxTokens: 150, temperature: 0.7 })
}

export async function generateDesignTips(colors: string[], fonts: string[]): Promise<string> {
  const prompt = `You are a UX/UI design expert. Provide 3 specific, actionable design tips for using these colors and fonts together:
- Colors: ${colors.join(', ')}
- Fonts: ${fonts.join(', ')}

Format as bullet points. Be practical and specific.`

  return generateWithGroq({ prompt, maxTokens: 200, temperature: 0.6 })
}

export async function generateMarketingCopy(
  productName: string,
  targetAudience: string,
  benefit: string
): Promise<string> {
  const prompt = `You are a high-converting copywriter. Write a compelling 1-2 sentence marketing message for:
- Product: ${productName}
- Target Audience: ${targetAudience}
- Main Benefit: ${benefit}

The copy should be persuasive, clear, and action-oriented.`

  return generateWithGroq({ prompt, maxTokens: 100, temperature: 0.8 })
}

async function generateWithGroq(options: GroqGenerationOptions): Promise<string> {
  try {
    // For demo purposes, we'll return example responses
    // In production, you would call the actual Groq API with an API key
    // Groq free tier: https://console.groq.com

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return example responses based on the prompt
    if (options.prompt.includes('brand description')) {
      return 'We transform digital visions into compelling experiences through innovative design and cutting-edge technology. Our team blends creativity with strategy to deliver brands that resonate and results that exceed expectations.'
    } else if (options.prompt.includes('design tips')) {
      return '• Use the primary color for CTAs and key elements to draw attention\n• Apply the secondary color sparingly for accents and hover states\n• Ensure sufficient contrast between text and background colors for accessibility'
    } else if (options.prompt.includes('marketing')) {
      return 'Transform your brand identity with professional design that captivates and converts your ideal customers.'
    }

    return 'AI response generated.'
  } catch (error) {
    console.error('Groq API error:', error)
    throw error
  }
}

// Helper function to actually call Groq API when API key is available
export async function callGroqAPI(
  prompt: string,
  apiKey?: string
): Promise<string> {
  if (!apiKey) {
    // Fallback to local generation if no API key
    return generateWithGroq({ prompt, maxTokens: 200, temperature: 0.7 })
  }

  try {
    const response = await fetch('https://api.groq.com/api/v1/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        prompt: prompt,
        max_tokens: 200,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error('Groq API request failed')
    }

    const data = await response.json()
    return data.choices[0].text
  } catch (error) {
    console.error('Error calling Groq API:', error)
    // Fallback to local generation
    return generateWithGroq({ prompt, maxTokens: 200, temperature: 0.7 })
  }
}
