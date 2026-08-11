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

export type FontCategory =
  | 'tech'
  | 'luxury'
  | 'corporate'
  | 'modern'
  | 'journalism'
  | 'creative'

// Pre-curated font pairings that work well together, several per style
const pairingsByCategory: Record<FontCategory, FontPairing[]> = {
  tech: [
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
        family: 'Space Grotesk',
        category: 'sans-serif',
        variants: ['500', '700'],
      },
      body: {
        family: 'Inter',
        category: 'sans-serif',
        variants: ['400', '500'],
      },
      reason: 'Geometric, developer-friendly character with a neutral, highly readable body',
    },
    {
      heading: {
        family: 'Sora',
        category: 'sans-serif',
        variants: ['600', '800'],
      },
      body: {
        family: 'Work Sans',
        category: 'sans-serif',
        variants: ['400', '500'],
      },
      reason: 'Futuristic curves that feel AI-native, paired with a sturdy functional body',
    },
  ],
  luxury: [
    {
      heading: {
        family: 'Playfair Display',
        category: 'serif',
        variants: ['700', '900'],
      },
      body: {
        family: 'Lato',
        category: 'sans-serif',
        variants: ['300', '400'],
      },
      reason: 'Elegant and sophisticated - ideal for luxury and fashion',
    },
    {
      heading: {
        family: 'Cormorant Garamond',
        category: 'serif',
        variants: ['600', '700'],
      },
      body: {
        family: 'Montserrat',
        category: 'sans-serif',
        variants: ['400', '500'],
      },
      reason: 'Fine hairline serifs exude couture, with Montserrat adding a tailored, geometric contrast',
    },
    {
      heading: {
        family: 'Cinzel',
        category: 'serif',
        variants: ['600', '700'],
      },
      body: {
        family: 'Lora',
        category: 'serif',
        variants: ['400'],
      },
      reason: 'Roman inscriptional capitals for a heritage feel, balanced by a warm readable serif body',
    },
  ],
  corporate: [
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
        family: 'Lato',
        category: 'sans-serif',
        variants: ['700', '900'],
      },
      body: {
        family: 'Source Sans 3',
        category: 'sans-serif',
        variants: ['400', '500'],
      },
      reason: 'A reliable, characterful headline weight over a no-nonsense editorial body',
    },
    {
      heading: {
        family: 'Merriweather',
        category: 'serif',
        variants: ['700', '900'],
      },
      body: {
        family: 'Source Sans 3',
        category: 'sans-serif',
        variants: ['400', '500'],
      },
      reason: 'An authoritative serif headline lends trust, ideal for law, finance and consulting',
    },
  ],
  modern: [
    {
      heading: {
        family: 'Raleway',
        category: 'sans-serif',
        variants: ['600', '700'],
      },
      body: {
        family: 'Roboto',
        category: 'sans-serif',
        variants: ['300', '400'],
      },
      reason: 'Minimalist and contemporary - suits modern design',
    },
    {
      heading: {
        family: 'Outfit',
        category: 'sans-serif',
        variants: ['500', '700'],
      },
      body: {
        family: 'Rubik',
        category: 'sans-serif',
        variants: ['400', '500'],
      },
      reason: 'A fresh, rounded geometric display that feels current without ever feeling gimmicky',
    },
    {
      heading: {
        family: 'Nunito Sans',
        category: 'sans-serif',
        variants: ['700', '800'],
      },
      body: {
        family: 'Inter',
        category: 'sans-serif',
        variants: ['400', '500'],
      },
      reason: 'Friendly, softly rounded headlines over the default-neutral Inter for a warm modern feel',
    },
  ],
  journalism: [
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
        family: 'Playfair Display',
        category: 'serif',
        variants: ['700', '900'],
      },
      body: {
        family: 'Source Serif 4',
        category: 'serif',
        variants: ['400', '500'],
      },
      reason: 'A full-editorial pairing: dramatic display serif above a crisp reading serif',
    },
    {
      heading: {
        family: 'Archivo',
        category: 'sans-serif',
        variants: ['700', '800'],
      },
      body: {
        family: 'Noto Sans',
        category: 'sans-serif',
        variants: ['400', '500'],
      },
      reason: 'Tight, newsroom-ready headlines matched with a neutral, high-legibility body',
    },
  ],
  creative: [
    {
      heading: {
        family: 'Bebas Neue',
        category: 'sans-serif',
        variants: ['400'],
      },
      body: {
        family: 'Josefin Sans',
        category: 'sans-serif',
        variants: ['300', '400'],
      },
      reason: 'Creative and energetic - ideal for entertainment brands',
    },
    {
      heading: {
        family: 'Fredoka',
        category: 'sans-serif',
        variants: ['600', '700'],
      },
      body: {
        family: 'Nunito',
        category: 'sans-serif',
        variants: ['400', '600'],
      },
      reason: 'Rounded and playful - made for kids brands, events and anything joyful',
    },
    {
      heading: {
        family: 'Pacifico',
        category: 'handwriting',
        variants: ['400'],
      },
      body: {
        family: 'Quicksand',
        category: 'sans-serif',
        variants: ['400', '600'],
      },
      reason: 'A hand-drawn script for bold, memorable moments with a soft geometric body behind it',
    },
  ],
}

export async function getFontPairings(): Promise<FontPairing[]> {
  return Object.values(pairingsByCategory).flat()
}

export async function getFontPairingsByCategory(
  category: FontCategory
): Promise<FontPairing[]> {
  return pairingsByCategory[category] || []
}

export async function getRandomFontPairing(): Promise<FontPairing> {
  const all = Object.values(pairingsByCategory).flat()
  return all[Math.floor(Math.random() * all.length)]
}

export async function getFontPairingByCategory(
  category: FontCategory
): Promise<FontPairing> {
  const pairings = pairingsByCategory[category] || pairingsByCategory.tech
  return pairings[Math.floor(Math.random() * pairings.length)]
}

export function getGoogleFontUrl(fonts: Font[]): string {
  const families = fonts
    .map((font) => `family=${font.family.replace(/\s+/g, '+')}`+`:wght@${font.variants.join(';')}`)
    .join('&')

  return `https://fonts.googleapis.com/css2?${families}&display=swap`
}

export function buildFontCss(pairing: FontPairing): string {
  return `@import url('${getGoogleFontUrl([pairing.heading, pairing.body])}');

body {
  font-family: '${pairing.body.family}', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: '${pairing.heading.family}', sans-serif;
}`
}
