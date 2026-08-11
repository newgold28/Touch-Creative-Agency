// Colormind API - Free AI color palette generator
// No API key required, no rate limits, trained on real design palettes

export type ColorMindModel = 'default' | 'ui' | 'painting'

export interface ColorPalette {
  colors: string[]
  model: ColorMindModel
}

export async function generateColormindPalette(
  model: ColorMindModel = 'default',
  inputColors: Array<[number, number, number] | null> | null = null
): Promise<ColorPalette> {
  const payload: any = {
    model: model,
  }

  // If you want to provide seed colors, pass them as RGB arrays
  if (inputColors) {
    payload.input = inputColors
  }

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  // Colormind is flaky: it intermittently returns 500 HTML pages. Retry a few times
  // and only fail after the attempts are exhausted.
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt > 0) await delay(400 * attempt)
    try {
      const response = await fetch('https://colormind.io/api/', {
        method: 'POST',
        body: JSON.stringify(payload),
      })

      // Colormind replies with content-type "text/html" even when the body is JSON,
      // so read it as text and parse manually instead of trusting response.json().
      const text = await response.text()
      let data: any
      try {
        data = JSON.parse(text)
      } catch {
        continue
      }

      if (
        response.ok &&
        Array.isArray(data.result) &&
        data.result.every((rgb: unknown) => Array.isArray(rgb) && rgb.length === 3)
      ) {
        // Convert RGB arrays to hex
        const hexColors = data.result.map((rgb: number[]) => {
          const hex = rgb.map((x) => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
          }).join('')
          return '#' + hex.toUpperCase()
        })

        return {
          colors: hexColors,
          model: model,
        }
      }
    } catch (error) {
      if (attempt === 2) console.error('Colormind API error:', error)
    }
  }

  throw new Error('Colormind API request failed')
}

export async function generateColormindPaletteByStyle(
  style: 'ui' | 'painting'
): Promise<ColorPalette> {
  return generateColormindPalette(style)
}
