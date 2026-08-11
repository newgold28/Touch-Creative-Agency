'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PenTool } from 'lucide-react'
import {
  getFontPairingByCategory,
  getRandomFontPairing,
  getGoogleFontUrl,
  buildFontCss,
  type FontCategory,
  type FontPairing,
} from '@/lib/apis/google-fonts'

const categories: Array<{ value: FontCategory; label: string }> = [
  { value: 'tech', label: 'Technology' },
  { value: 'luxury', label: 'Luxury & Fashion' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'modern', label: 'Modern' },
  { value: 'journalism', label: 'Journalism' },
  { value: 'creative', label: 'Creative' },
]

const defaultPreview = 'The quick brown fox jumps over the lazy dog'

function loadFontStyles(fonts: { heading: FontPairing['heading']; body: FontPairing['body'] }) {
  const fontUrl = getGoogleFontUrl([fonts.heading, fonts.body])
  const link = document.createElement('link')
  link.href = fontUrl
  link.rel = 'stylesheet'
  document.head.appendChild(link)
}

export default function FontPairingGenerator() {
  const [category, setCategory] = useState<FontCategory>('tech')
  const [pairing, setPairing] = useState<FontPairing | null>(null)
  const [previewText, setPreviewText] = useState(defaultPreview)
  const [loading, setLoading] = useState(false)
  const [copiedFont, setCopiedFont] = useState<string | null>(null)
  const [copiedCss, setCopiedCss] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generatePairing = async (specific?: FontPairing) => {
    setLoading(true)
    setError(null)
    try {
      const fontPairing = specific || (await getFontPairingByCategory(category))
      setPairing(fontPairing)
      loadFontStyles(fontPairing)
    } catch (err) {
      setError('Failed to load a font pairing. Please try again.')
      console.error('Error generating font pairing:', err)
    } finally {
      setLoading(false)
    }
  }

  const randomPairing = async () => {
    setLoading(true)
    setError(null)
    try {
      const fontPairing = await getRandomFontPairing()
      setPairing(fontPairing)
      loadFontStyles(fontPairing)
    } catch (err) {
      setError('Failed to load a random pairing. Please try again.')
      console.error('Error generating random pairing:', err)
    } finally {
      setLoading(false)
    }
  }

  const swapFonts = () => {
    if (!pairing) return
    const swapped: FontPairing = {
      heading: pairing.body,
      body: pairing.heading,
      reason: pairing.reason,
    }
    setPairing(swapped)
    loadFontStyles(swapped)
  }

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedFont(key)
      setTimeout(() => setCopiedFont(null), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  const copyCss = async () => {
    if (!pairing) return
    try {
      await navigator.clipboard.writeText(buildFontCss(pairing))
      setCopiedCss(true)
      setTimeout(() => setCopiedCss(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-3">Design Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as FontCategory)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Preview Text</label>
            <input
              type="text"
              value={previewText}
              onChange={(e) => setPreviewText(e.target.value || defaultPreview)}
              placeholder="The quick brown fox jumps over the lazy dog"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => generatePairing()}
            disabled={loading}
            className="flex-1 min-w-48 px-6 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? 'Loading...' : pairing ? 'New Pairing' : 'Generate Pairing'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={randomPairing}
            disabled={loading}
            className="px-6 py-4 bg-accent/20 text-accent rounded-full font-semibold hover:bg-accent/30 transition-colors disabled:opacity-50"
          >
            Random
          </motion.button>

          {pairing && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={swapFonts}
              className="px-6 py-4 bg-primary/20 text-accent rounded-full font-semibold hover:bg-primary/30 transition-colors"
            >
              Swap
            </motion.button>
          )}
        </div>
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

          {/* Combined hero preview */}
          <div className="p-8 bg-white/10 backdrop-blur-md border border-border rounded-lg space-y-4">
            <h3 className="text-lg font-bold">Live Preview</h3>
            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight"
              style={{ fontFamily: pairing.heading.family }}
            >
              {previewText}
            </h1>
            <p className="text-base leading-relaxed max-w-2xl" style={{ fontFamily: pairing.body.family }}>
              {previewText} {previewText} This sample pairs {pairing.heading.family} headlines with{' '}
              {pairing.body.family} body copy — a combination tested for contrast and hierarchy.
            </p>
          </div>

          {/* Heading Font */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Heading Font</h3>
            <div className="p-8 bg-white/10 backdrop-blur-md border border-border rounded-lg">
              <p className="text-4xl font-bold mb-6" style={{ fontFamily: pairing.heading.family }}>
                {previewText}
              </p>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => copyToClipboard(`font-family: '${pairing.heading.family}';`, 'heading')}
                  className="p-3 bg-white/10 backdrop-blur-md border border-border rounded cursor-pointer hover:border-accent transition-colors flex justify-between items-center group"
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
                <p className="text-xs text-muted-foreground">Category: {pairing.heading.category}</p>
              </div>
            </div>
          </div>

          {/* Body Font */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Body Font</h3>
            <div className="p-8 bg-white/10 backdrop-blur-md border border-border rounded-lg">
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: pairing.body.family }}>
                {previewText} This is a sample paragraph demonstrating the body font. The pairing is
                designed to work beautifully together, with the heading font drawing attention and the
                body font ensuring excellent readability at any length.
              </p>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => copyToClipboard(`font-family: '${pairing.body.family}';`, 'body')}
                  className="p-3 bg-white/10 backdrop-blur-md border border-border rounded cursor-pointer hover:border-accent transition-colors flex justify-between items-center group"
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
                <p className="text-xs text-muted-foreground">Category: {pairing.body.category}</p>
              </div>
            </div>
          </div>

          {/* CSS Implementation */}
          <div className="p-6 bg-white/10 backdrop-blur-md border border-border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm font-semibold">CSS Implementation:</p>
              <button
                onClick={copyCss}
                className="px-4 py-2 bg-primary/20 text-accent rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors"
              >
                {copiedCss ? '✓ Copied' : 'Copy CSS'}
              </button>
            </div>
            <pre className="p-4 bg-black rounded text-sm text-green-400 overflow-x-auto">{buildFontCss(pairing)}</pre>
          </div>
        </motion.div>
      )}

      {/* Placeholder */}
      {!pairing && !loading && !error && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-6">
            Pick a design style to get a curated Google Fonts pairing — display headline plus readable
            body, ready to preview and copy.
          </p>
          <PenTool size={48} className="text-accent" />
        </div>
      )}
    </div>
  )
}
