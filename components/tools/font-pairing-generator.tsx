'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  getFontPairingByCategory,
  getRandomFontPairing,
  getGoogleFontUrl,
  type FontPairing,
} from '@/lib/apis/google-fonts'

const categories = [
  { value: 'tech', label: 'Technology' },
  { value: 'luxury', label: 'Luxury & Fashion' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'modern', label: 'Modern' },
  { value: 'journalism', label: 'Journalism' },
  { value: 'creative', label: 'Creative' },
]

export default function FontPairingGenerator() {
  const [category, setCategory] = useState('tech')
  const [pairing, setPairing] = useState<FontPairing | null>(null)
  const [loading, setLoading] = useState(false)
  const [copiedFont, setCopiedFont] = useState<string | null>(null)

  const generatePairing = async () => {
    setLoading(true)
    try {
      const fontPairing = await getFontPairingByCategory(
        category as 'tech' | 'luxury' | 'corporate' | 'modern' | 'journalism' | 'creative'
      )
      setPairing(fontPairing)

      // Load the fonts from Google Fonts
      const fontUrl = getGoogleFontUrl([fontPairing.heading, fontPairing.body])
      const link = document.createElement('link')
      link.href = fontUrl
      link.rel = 'stylesheet'
      document.head.appendChild(link)
    } catch (error) {
      console.error('Error generating font pairing:', error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string, font: string) => {
    navigator.clipboard.writeText(text)
    setCopiedFont(font)
    setTimeout(() => setCopiedFont(null), 2000)
  }

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-3">Design Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={generatePairing}
            disabled={loading}
            className="flex-1 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Generate Pairing'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={async () => {
              setLoading(true)
              try {
                const randomPairing = await getRandomFontPairing()
                setPairing(randomPairing)
                const fontUrl = getGoogleFontUrl([randomPairing.heading, randomPairing.body])
                const link = document.createElement('link')
                link.href = fontUrl
                link.rel = 'stylesheet'
                document.head.appendChild(link)
              } finally {
                setLoading(false)
              }
            }}
            className="px-6 py-4 bg-accent/20 text-accent rounded-lg font-semibold hover:bg-accent/30 transition-colors disabled:opacity-50"
          >
            Random
          </motion.button>
        </div>
      </div>

      {/* Pairing Display */}
      {pairing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Reason */}
          <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
            <p className="text-sm font-semibold text-accent mb-2">Why this pairing works:</p>
            <p className="text-muted-foreground">{pairing.reason}</p>
          </div>

          {/* Heading Font */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Heading Font</h3>
            <div className="p-8 bg-card border border-border rounded-lg">
              <p
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: pairing.heading.family }}
              >
                The Quick Brown Fox
              </p>
              <p
                className="text-xl mb-6"
                style={{ fontFamily: pairing.heading.family }}
              >
                Jumps Over the Lazy Dog
              </p>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => copyToClipboard(`font-family: '${pairing.heading.family}';`, 'heading')}
                  className="p-3 bg-background border border-border rounded cursor-pointer hover:border-accent transition-colors flex justify-between items-center group"
                >
                  <code className="text-sm text-muted-foreground">{pairing.heading.family}</code>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-sm text-accent font-medium"
                  >
                    {copiedFont === 'heading' ? '✓ Copied' : 'Copy'}
                  </motion.span>
                </motion.div>
                <p className="text-xs text-muted-foreground">
                  Category: {pairing.heading.category}
                </p>
              </div>
            </div>
          </div>

          {/* Body Font */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Body Font</h3>
            <div className="p-8 bg-card border border-border rounded-lg">
              <p
                className="text-base leading-relaxed mb-6"
                style={{ fontFamily: pairing.body.family }}
              >
                This is a sample paragraph demonstrating the body font. The quick brown fox jumps over
                the lazy dog. This pairing is designed to work beautifully together, with the heading
                font drawing attention and the body font ensuring excellent readability.
              </p>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => copyToClipboard(`font-family: '${pairing.body.family}';`, 'body')}
                  className="p-3 bg-background border border-border rounded cursor-pointer hover:border-accent transition-colors flex justify-between items-center group"
                >
                  <code className="text-sm text-muted-foreground">{pairing.body.family}</code>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-sm text-accent font-medium"
                  >
                    {copiedFont === 'body' ? '✓ Copied' : 'Copy'}
                  </motion.span>
                </motion.div>
                <p className="text-xs text-muted-foreground">
                  Category: {pairing.body.category}
                </p>
              </div>
            </div>
          </div>

          {/* CSS Implementation */}
          <div className="p-6 bg-background border border-border rounded-lg space-y-4">
            <p className="text-sm font-semibold">CSS Implementation:</p>
            <pre className="p-4 bg-black rounded text-sm text-green-400 overflow-x-auto">
              {`@import url('https://fonts.googleapis.com/css2?family=${pairing.heading.family.replace(/\s+/g, '+')}:wght@${pairing.heading.variants.join(';')}&family=${pairing.body.family.replace(/\s+/g, '+')}:wght@${pairing.body.variants.join(';')}&display=swap');

body {
  font-family: '${pairing.body.family}', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: '${pairing.heading.family}', sans-serif;
}`}
            </pre>
          </div>
        </motion.div>
      )}

      {/* Placeholder */}
      {!pairing && !loading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-6">
            Select a design category to get professionally curated font pairings from Google Fonts.
          </p>
          <div className="inline-block text-5xl">✍️</div>
        </div>
      )}
    </div>
  )
}
