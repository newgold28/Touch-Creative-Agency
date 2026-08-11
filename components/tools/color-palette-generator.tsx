'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'
import { generateColormindPaletteByStyle } from '@/lib/apis/colormind'

type Swatch = {
  hex: string
  name: string
  role: string
  usage: string
}

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'E-commerce',
  'Fitness',
  'Fashion',
  'Food & Beverage',
  'Real Estate',
]

const moods = [
  'Professional',
  'Creative',
  'Playful',
  'Minimalist',
  'Luxurious',
  'Energetic',
  'Calming',
  'Bold',
]

const colorRoles = ['Primary', 'Secondary', 'Tertiary', 'Accent', 'Supporting']
const colorUsages = [
  'Main brand color - buttons, links, key highlights',
  'Secondary elements - cards, borders, section backgrounds',
  'Tertiary accents - charts, icons, small details',
  'Interactive elements - hover states, focus rings, CTAs',
  'Background accents - subtle fills and supporting surfaces',
]

// Each mood maps to a hue so the AI actually respects the chosen direction
const moodSeeds: Record<string, { h: number; s: number; l: number }> = {
  Professional: { h: 218, s: 35, l: 45 },
  Creative: { h: 268, s: 50, l: 45 },
  Playful: { h: 22, s: 70, l: 52 },
  Minimalist: { h: 215, s: 8, l: 48 },
  Luxurious: { h: 40, s: 55, l: 40 },
  Energetic: { h: 358, s: 60, l: 50 },
  Calming: { h: 172, s: 45, l: 45 },
  Bold: { h: 320, s: 55, l: 45 },
}

const industrySaturation: Record<string, number> = {
  Technology: -10,
  Finance: -15,
  Healthcare: -20,
  'E-commerce': 5,
  Fitness: 10,
  Fashion: 15,
  'Food & Beverage': 10,
  'Real Estate': -10,
}

/* ---------------- Color math helpers ---------------- */

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100
  l /= 100
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ]
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean
  const num = parseInt(full, 16)
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255]
}

function rgbToHex(rgb: [number, number, number]): string {
  return (
    '#' +
    rgb
      .map((x) => {
        const h = Math.max(0, Math.min(255, Math.round(x))).toString(16)
        return h.length === 1 ? '0' + h : h
      })
      .join('')
      .toUpperCase()
  )
}

function rgbToHsl(rgb: [number, number, number]): { h: number; s: number; l: number } {
  const r = rgb[0] / 255
  const g = rgb[1] / 255
  const b = rgb[2] / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  const d = max - min
  if (d === 0) return { h: 0, s: 0, l: l * 100 }
  const s = d / (1 - Math.abs(2 * l - 1))
  let h = 0
  if (max === r) h = ((g - b) / d) % 6
  else if (max === g) h = (b - r) / d + 2
  else h = (r - g) / d + 4
  return { h: (h * 60 + 360) % 360, s: s * 100, l: l * 100 }
}

// Shift a color's hue/saturation/lightness toward a mood target (shortest hue arc).
function steerTowardMood(
  rgb: [number, number, number],
  target: { h: number; s: number; l: number },
  strength = 0.55
): [number, number, number] {
  const hsl = rgbToHsl(rgb)
  let dh = target.h - hsl.h
  dh = ((dh + 180) % 360) - 180
  const h = (hsl.h + dh * strength + 360) % 360
  const s = Math.max(0, Math.min(100, hsl.s + (target.s - hsl.s) * strength))
  const l = Math.max(0, Math.min(100, hsl.l + (target.l - hsl.l) * strength))
  return hslToRgb(h, s, l)
}

// Offline fallback: build a harmonious 5-color scheme around the mood using HSL geometry
// (base, analogous, contrast, tint, shade). Used only when the Colormind API is unreachable.
function generateLocalPalette(target: { h: number; s: number; l: number }): string[] {
  const { h, s, l } = target
  const slots = [
    { h: h, s: Math.max(10, s), l: l },
    { h: (h + 32) % 360, s: Math.max(10, s * 0.85), l: Math.min(95, l + 7) },
    { h: (h - 42 + 360) % 360, s: Math.max(8, s * 0.7), l: Math.max(8, l - 7) },
    { h: h, s: Math.max(8, s * 0.3), l: Math.min(97, l + 30) },
    { h: h, s: Math.max(8, s * 0.45), l: Math.max(6, l - 22) },
  ]
  return slots.map((sl) => rgbToHex(hslToRgb(sl.h, sl.s, sl.l)))
}

function relativeLuminance(rgb: [number, number, number]): number {
  const [r, g, b] = rgb.map((x) => {
    const c = x / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrastRatio(a: [number, number, number], b: [number, number, number]): number {
  const la = relativeLuminance(a)
  const lb = relativeLuminance(b)
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05)
}

function readableText(hex: string): string {
  const rgb = hexToRgb(hex)
  const onWhite = contrastRatio(rgb, [255, 255, 255])
  const onBlack = contrastRatio(rgb, [0, 0, 0])
  return onWhite >= onBlack ? '#FFFFFF' : '#0A0A0A'
}

function wcagRating(hex: string): { label: string; ratio: number } {
  const rgb = hexToRgb(hex)
  const white = contrastRatio(rgb, [255, 255, 255])
  const black = contrastRatio(rgb, [0, 0, 0])
  const best = Math.max(white, black)
  const label = best >= 7 ? 'AAA' : best >= 4.5 ? 'AA' : best >= 3 ? 'AA Lg' : 'Fail'
  return { label, ratio: Number(best.toFixed(1)) }
}

/* ---------------- Color naming ---------------- */

const namedColors: Record<string, [number, number, number]> = {
  Black: [0, 0, 0], MidnightBlue: [25, 25, 112], Navy: [0, 0, 128], DarkBlue: [0, 0, 139],
  Blue: [0, 0, 255], MediumBlue: [0, 0, 205], RoyalBlue: [65, 105, 225], DodgerBlue: [30, 144, 255],
  CornflowerBlue: [100, 149, 237], SteelBlue: [70, 130, 180], SkyBlue: [135, 206, 235], DeepSkyBlue: [0, 191, 255],
  LightSteelBlue: [176, 196, 222], CadetBlue: [95, 158, 160], SlateBlue: [106, 90, 205], DarkSlateBlue: [72, 61, 139],
  Indigo: [75, 0, 130], RebeccaPurple: [102, 51, 153], Purple: [128, 0, 128], DarkMagenta: [139, 0, 139],
  BlueViolet: [138, 43, 226], DarkViolet: [148, 0, 211], MediumPurple: [147, 112, 219], Magenta: [255, 0, 255],
  Orchid: [218, 112, 214], Plum: [221, 160, 221], Violet: [238, 130, 238], Pink: [255, 192, 203],
  HotPink: [255, 105, 180], DeepPink: [255, 20, 147], PaleVioletRed: [219, 112, 147], Crimson: [220, 20, 60],
  Red: [255, 0, 0], Firebrick: [178, 34, 34], DarkRed: [139, 0, 0], IndianRed: [205, 92, 92],
  Tomato: [255, 99, 71], Coral: [255, 127, 80], Salmon: [250, 128, 114], OrangeRed: [255, 69, 0],
  DarkOrange: [255, 140, 0], Orange: [255, 165, 0], Gold: [255, 215, 0], Goldenrod: [218, 165, 32],
  DarkGoldenrod: [184, 134, 11], Yellow: [255, 255, 0], Khaki: [240, 230, 140], Olive: [128, 128, 0],
  DarkOliveGreen: [85, 107, 47], YellowGreen: [154, 205, 50], GreenYellow: [173, 255, 47], LimeGreen: [50, 205, 50],
  Green: [0, 128, 0], DarkGreen: [0, 100, 0], ForestGreen: [34, 139, 34], SeaGreen: [46, 139, 87],
  MediumSeaGreen: [60, 179, 113], SpringGreen: [0, 255, 127], Turquoise: [64, 224, 208], Teal: [0, 128, 128],
  DarkCyan: [0, 139, 139], Aqua: [0, 255, 255], LightSeaGreen: [32, 178, 170], MediumAquamarine: [102, 205, 170],
  Brown: [165, 42, 42], SaddleBrown: [139, 69, 19], Sienna: [160, 82, 45], Chocolate: [210, 105, 30],
  Peru: [205, 133, 63], Tan: [210, 180, 140], SandyBrown: [244, 164, 96], RosyBrown: [188, 143, 143],
  Maroon: [128, 0, 0], Gainsboro: [220, 220, 220], LightGrey: [211, 211, 211], Silver: [192, 192, 192],
  DarkGrey: [169, 169, 169], Grey: [128, 128, 128], DimGrey: [105, 105, 105], SlateGrey: [112, 128, 144],
  DarkSlateGrey: [47, 79, 79], White: [255, 255, 255], Snow: [255, 250, 250], GhostWhite: [248, 248, 255],
}

const hueNames: Array<[number, string]> = [
  [345, 'Red'], [15, 'Orange'], [45, 'Gold'], [70, 'Yellow'],
  [150, 'Green'], [185, 'Teal'], [245, 'Blue'], [285, 'Purple'],
  [330, 'Magenta'], [360, 'Red'],
]

function describeColor(hex: string): string {
  const { h, s, l } = rgbToHsl(hexToRgb(hex))
  const hue = hueNames.find(([max]) => h <= max)?.[1] || 'Grey'
  const satWord = s < 12 ? 'Muted ' : s >= 65 ? 'Vibrant ' : ''
  const lightWord = l < 18 ? 'Very Dark' : l < 32 ? 'Dark' : l >= 78 && s < 25 ? 'Pale' : l >= 82 ? 'Light' : ''
  return `${satWord}${hue}${lightWord ? ' ' + lightWord : ''}`.trim()
}

function nearestColorName(hex: string): string {
  const target = hexToRgb(hex)
  let best = 'Unknown'
  let bestDist = Infinity
  for (const [name, rgb] of Object.entries(namedColors)) {
    const dist =
      Math.pow(rgb[0] - target[0], 2) + Math.pow(rgb[1] - target[1], 2) + Math.pow(rgb[2] - target[2], 2)
    if (dist < bestDist) {
      bestDist = dist
      best = name
    }
  }
  const threshold = 40 * 40 * 3
  return bestDist < threshold ? best : describeColor(hex)
}

/* ---------------- Export helpers ---------------- */

function downloadFile(filename: string, content: string, mime: string) {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

/* ---------------- Design tips ---------------- */

function buildLocalTips(colors: string[]): string {
  const tips: string[] = []
  const sorted = colors
    .map((hex) => ({ hex, ...wcagRating(hex) }))
    .sort((a, b) => b.ratio - a.ratio)
  const strongest = sorted[0]
  const darkest = [...colors].sort(
    (a, b) => relativeLuminance(hexToRgb(a)) - relativeLuminance(hexToRgb(b))
  )[0]
  const lightest = [...colors].sort(
    (a, b) => relativeLuminance(hexToRgb(b)) - relativeLuminance(hexToRgb(a))
  )[0]

  if (strongest && strongest.ratio >= 4.5) {
    tips.push(
      `Use ${strongest.hex} for body text on light surfaces — it reaches ${strongest.label} contrast (${strongest.ratio}:1).`
    )
  }
  tips.push(
    `Pair ${darkest} as the text color with ${lightest} as the background for the highest readability in your palette.`
  )
  tips.push(
    `Apply the most saturated color to interactive elements only — buttons, links and focus states — so calls to action stand out.`
  )
  return tips.map((t) => '• ' + t).join('\n')
}

export default function ColorPaletteGenerator() {
  const [industry, setIndustry] = useState(industries[0])
  const [mood, setMood] = useState(moods[0])
  const [swatches, setSwatches] = useState<Swatch[] | null>(null)
  const [description, setDescription] = useState('')
  const [locked, setLocked] = useState<boolean[]>(Array(5).fill(false))
  const [loading, setLoading] = useState(false)
  const [designTips, setDesignTips] = useState('')
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [copiedExport, setCopiedExport] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const styleForMood = (m: string) => (m === 'Professional' || m === 'Minimalist' ? 'ui' : 'painting')

  const moodSeed = (m: string, ind: string): { h: number; s: number; l: number } => {
    const base = moodSeeds[m] || moodSeeds.Professional
    const adjust = industrySaturation[ind] || 0
    const s = Math.max(0, Math.min(100, base.s + adjust))
    return { h: base.h, s, l: base.l }
  }

  const buildSwatch = (hex: string, index: number): Swatch => ({
    hex,
    name: nearestColorName(hex),
    role: colorRoles[index % colorRoles.length],
    usage: colorUsages[index % colorUsages.length],
  })

  // Colormind can't take partial input (it 500s on null slots), so we generate a fresh
  // palette and steer it toward the chosen mood in HSL space instead.
  const steerPalette = (colors: string[], target: { h: number; s: number; l: number }): string[] =>
    colors.map((hex) => rgbToHex(steerTowardMood(hexToRgb(hex), target)))

  const generatePalette = async () => {
    setLoading(true)
    setError(null)
    try {
      const style = styleForMood(mood)
      const target = moodSeed(mood, industry)
      let colors: string[]
      try {
        const colormindPalette = await generateColormindPaletteByStyle(style)
        colors = steerPalette(colormindPalette.colors, target)
      } catch {
        colors = generateLocalPalette(target)
      }

      // Keep colors the user locked
      if (swatches && locked.some(Boolean)) {
        colors = colors.map((hex, i) => (locked[i] ? swatches[i].hex : hex))
      }

      setSwatches(colors.map((hex, i) => buildSwatch(hex, i)))
      setLocked(Array(colors.length).fill(false))
      setDescription(
        `AI-powered ${mood.toLowerCase()} palette tuned for ${industry}, seeded from a ${nearestColorName(
          rgbToHex(hslToRgb(target.h, target.s, target.l))
        )} base color.`
      )

      try {
        const tipsResponse = await fetch('/api/design-tips', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ colors, fonts: ['Poppins', 'Inter'] }),
        })
        const contentType = tipsResponse.headers.get('content-type') || ''
        if (tipsResponse.ok && contentType.includes('application/json')) {
          const tipsData = await tipsResponse.json()
          setDesignTips(tipsData.tips || buildLocalTips(colors))
        } else {
          setDesignTips(buildLocalTips(colors))
        }
      } catch {
        setDesignTips(buildLocalTips(colors))
      }
    } catch (err) {
      setError('Failed to generate palette. Please try again.')
      console.error('Error generating palette:', err)
    } finally {
      setLoading(false)
    }
  }

  const regenerateColor = async (index: number) => {
    if (!swatches) return
    setLoading(true)
    setError(null)
    try {
      const style = styleForMood(mood)
      const target = moodSeed(mood, industry)
      let fresh: string[]
      try {
        const result = await generateColormindPaletteByStyle(style)
        fresh = steerPalette(result.colors, target)
      } catch {
        fresh = generateLocalPalette(target)
      }
      const next = [...swatches]
      next[index] = buildSwatch(fresh[index % fresh.length], index)
      setSwatches(next)
    } catch {
      setError('Failed to regenerate that color. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleLock = (index: number) => {
    setLocked((prev) => prev.map((l, i) => (i === index ? !l : l)))
  }

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedHex(key)
      setTimeout(() => setCopiedHex(null), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  const copyExport = async (kind: 'CSS' | 'JSON' | 'Figma' | 'Hex') => {
    if (!swatches) return
    let text = ''
    if (kind === 'CSS') {
      text =
        `:root {\n` +
        swatches
          .map((s) => `  --color-${s.role.toLowerCase()}: ${s.hex};`)
          .join('\n') +
        `\n}`
    } else if (kind === 'JSON') {
      text = JSON.stringify(
        swatches.map((s) => ({ role: s.role, name: s.name, hex: s.hex, usage: s.usage })),
        null,
        2
      )
    } else if (kind === 'Figma') {
      text = swatches.map((s) => `${s.role}\t${s.hex}\t${s.name}\t${s.usage}`).join('\n')
    } else {
      text = swatches.map((s) => s.hex).join(' ')
    }
    try {
      await navigator.clipboard.writeText(text)
      setCopiedExport(kind)
      setTimeout(() => setCopiedExport(null), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  const downloadJson = () => {
    if (!swatches) return
    downloadFile(
      `${mood.toLowerCase()}-palette.json`,
      JSON.stringify(
        {
          name: `${mood} ${industry} palette`,
          colors: swatches.map((s) => ({ role: s.role, name: s.name, hex: s.hex, usage: s.usage })),
        },
        null,
        2
      ),
      'application/json'
    )
  }

  const exportButtons: Array<{ key: 'CSS' | 'JSON' | 'Figma' | 'Hex'; label: string }> = [
    { key: 'CSS', label: 'CSS variables' },
    { key: 'JSON', label: 'JSON' },
    { key: 'Figma', label: 'Figma' },
    { key: 'Hex', label: 'Hex list' },
  ]

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-3">Industry</label>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Mood</label>
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
            >
              {moods.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={generatePalette}
          disabled={loading}
          className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {loading ? 'Generating...' : swatches ? 'Regenerate Palette' : 'Generate Palette'}
        </motion.button>
      </div>

      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-destructive/10 border border-destructive text-destructive rounded-lg"
        >
          {error}
        </motion.div>
      )}

      {/* Palette Display */}
      {swatches && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Palette Info */}
          <div>
            <h3 className="text-lg font-bold mb-1">{mood} Palette</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          {/* Design Tips from AI */}
          {designTips && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-primary/10 border border-primary/30 rounded-lg space-y-2"
            >
              <p className="text-sm font-semibold text-accent">AI Design Tips:</p>
              <p className="text-sm text-muted-foreground whitespace-pre-line">{designTips}</p>
            </motion.div>
          )}

          {/* Color Swatches */}
          <div className="space-y-3">
            {swatches.map((color, index) => {
              const rating = wcagRating(color.hex)
              const textColor = readableText(color.hex)
              return (
                <div
                  key={color.hex + index}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 rounded-lg border border-border hover:border-accent transition-colors bg-white/10 backdrop-blur-md"
                >
                  <div
                    className="relative w-full sm:w-24 h-20 sm:h-24 rounded-lg shadow-lg flex flex-col items-center justify-center gap-1 shrink-0"
                    style={{ backgroundColor: color.hex }}
                  >
                    <span
                      className="text-xs font-bold tracking-wider"
                      style={{ color: textColor }}
                    >
                      {color.hex}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                        rating.label === 'Fail' ? 'opacity-80' : ''
                      }`}
                      style={{ color: textColor, border: `1px solid ${textColor}66` }}
                    >
                      {rating.label} {rating.ratio}:1
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold">
                      {color.name}
                      <span className="ml-2 text-sm font-normal text-muted-foreground">
                        {color.role}
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{color.usage}</p>
                  </div>

                  <div className="flex gap-2 flex-wrap shrink-0">
                    <button
                      onClick={() => copyToClipboard(color.hex, color.hex)}
                      className="px-3 py-2 bg-primary/20 text-accent rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors"
                    >
                      {copiedHex === color.hex ? '✓ Copied' : 'Copy'}
                    </button>
                    <button
                      onClick={() => toggleLock(index)}
                      aria-pressed={locked[index]}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        locked[index]
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-primary/20 text-accent hover:bg-primary/30'
                      }`}
                    >
                      {locked[index] ? 'Locked' : 'Lock'}
                    </button>
                    <button
                      onClick={() => regenerateColor(index)}
                      disabled={loading || locked[index]}
                      className="px-3 py-2 bg-primary/20 text-accent rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors disabled:opacity-40"
                      title={locked[index] ? 'Unlock to regenerate this color' : 'Regenerate this color'}
                    >
                      Shuffle
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Export Options */}
          <div className="pt-4 border-t border-border space-y-3">
            <p className="text-sm text-muted-foreground">
              {swatches.some((_, i) => locked[i])
                ? 'Locked colors stay fixed when you regenerate.'
                : 'Export your palette:'}
            </p>
            <div className="flex gap-3 flex-wrap">
              {exportButtons.map((btn) => (
                <button
                  key={btn.key}
                  onClick={() => copyExport(btn.key)}
                  className="px-4 py-2 bg-primary/20 text-accent rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors"
                >
                  {copiedExport === btn.key ? '✓ Copied' : btn.label}
                </button>
              ))}
              <button
                onClick={downloadJson}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Download JSON
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Placeholder */}
      {!swatches && !loading && !error && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-6">
            Pick an industry and mood — the AI seeds the palette around your direction and returns 5
            accessible, named colors with WCAG contrast ratings.
          </p>
          <Palette size={48} className="text-accent" />
        </div>
      )}
    </div>
  )
}
