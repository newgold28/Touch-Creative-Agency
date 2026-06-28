// Google Fonts API - Free typography library
// 1000+ professional fonts available
// No API key required for basic usage

export interface Font {
  family: string
  category: string
  variants: string[]
}

export interface FontPairing {
  heading: Font
  body: Font
  reason: string
}

// Pre-curated font pairings that work well together
const fontPairings: FontPairing[] = [
  {
    heading: {
      family: 'Poppins',
      category: 'sans-serif',
      variants: ['400', '600', '700'],
    },
    body: {
      family: 'Inter',
      category: 'sans-serif',
      variants: ['400', '500'],
    },
    reason: 'Modern and clean - perfect for tech and startup brands',
  },
  {
    heading: {
      family: 'Playfair Display',
      category: 'serif',
      variants: ['700', '900'],
    },
    body: {
      family: 'Lato',
      category: 'sans-serif',
      variants: ['400', '300'],
    },
    reason: 'Elegant and sophisticated - ideal for luxury and fashion',
  },
  {
    heading: {
      family: 'Montserrat',
      category: 'sans-serif',
      variants: ['700', '800'],
    },
    body: {
      family: 'Open Sans',
      category: 'sans-serif',
      variants: ['400', '500'],
    },
    reason: 'Bold and professional - great for corporate brands',
  },
  {
    heading: {
      family: 'Raleway',
      category: 'sans-serif',
      variants: ['600', '700'],
    },
    body: {
      family: 'Roboto',
      category: 'sans-serif',
      variants: ['400', '300'],
    },
    reason: 'Minimalist and contemporary - suits modern design',
  },
  {
    heading: {
      family: 'Oswald',
      category: 'sans-serif',
      variants: ['700'],
    },
    body: {
      family: 'Lora',
      category: 'serif',
      variants: ['400', '500'],
    },
    reason: 'Impactful headlines with readable body - perfect for journalism',
  },
  {
    heading: {
      family: 'Bebas Neue',
      category: 'sans-serif',
      variants: ['400'],
    },
    body: {
      family: 'Josefin Sans',
      category: 'sans-serif',
      variants: ['400', '300'],
    },
    reason: 'Creative and energetic - ideal for entertainment brands',
  },
]

export async function getFontPairings(): Promise<FontPairing[]> {
  return fontPairings
}

export async function getRandomFontPairing(): Promise<FontPairing> {
  const randomIndex = Math.floor(Math.random() * fontPairings.length)
  return fontPairings[randomIndex]
}

export async function getFontPairingByCategory(
  category: 'tech' | 'luxury' | 'corporate' | 'modern' | 'journalism' | 'creative'
): Promise<FontPairing> {
  const categoryMap: { [key: string]: number } = {
    tech: 0,
    luxury: 1,
    corporate: 2,
    modern: 3,
    journalism: 4,
    creative: 5,
  }

  const index = categoryMap[category] || 0
  return fontPairings[index]
}

export function getGoogleFontUrl(fonts: Font[]): string {
  const families = fonts
    .map((font) => `family=${font.family.replace(/\s+/g, '+')}`+`:wght@${font.variants.join(';')}`)
    .join('&')

  return `https://fonts.googleapis.com/css2?${families}&display=swap`
}
