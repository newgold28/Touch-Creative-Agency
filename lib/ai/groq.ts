// Server-side Groq helper — free fast AI inference via GROQ_API_KEY.
// Falls back to a local response when no key is present so the tools
// always return something useful.

export interface GroqChatMessage {
  role: 'system' | 'user'
  content: string
}

const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile'

export async function generateWithGroq({
  system,
  prompt,
  maxTokens = 300,
  temperature = 0.6,
  fallback,
}: {
  system?: string
  prompt: string
  maxTokens?: number
  temperature?: number
  fallback: string
}): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY

  if (!apiKey) {
    return fallback
  }

  try {
    const messages: GroqChatMessage[] = []
    if (system) {
      messages.push({ role: 'system', content: system })
    }
    messages.push({ role: 'user', content: prompt })

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        max_tokens: maxTokens,
        temperature,
      }),
      signal: AbortSignal.timeout(15000),
    })

    if (!response.ok) {
      console.error('Groq API error:', response.status)
      return fallback
    }

    const data = await response.json()
    const content = data.choices?.[0]?.message?.content
    return typeof content === 'string' && content.trim() ? content.trim() : fallback
  } catch (error) {
    console.error('Groq API error:', error)
    return fallback
  }
}
