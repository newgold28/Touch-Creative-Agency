// Colormind API - Free AI color palette generator
// No API key required, no rate limits, trained on real design palettes

export type ColorMindModel = 'default' | 'ui' | 'painting'

export interface ColorPalette {
  colors: string[]
  model: ColorMindModel
}

export async function generateColormindPalette(
  model: ColorMindModel = 'default',
  inputColors: number[] | null = null
): Promise<ColorPalette> {
  try {
    const payload: any = {
      model: model,
    }

    // If you want to provide seed colors, pass them as RGB arrays
    if (inputColors) {
      payload.input = inputColors
    }

    const response = await fetch('https://colormind.io/api/', {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error('Colormind API request failed')
    }

    const data = await response.json()

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
  } catch (error) {
    console.error('Colormind API error:', error)
    throw error
  }
}

export async function generateColormindPaletteByStyle(
  style: 'ui' | 'painting'
): Promise<ColorPalette> {
  return generateColormindPalette(style)
}
