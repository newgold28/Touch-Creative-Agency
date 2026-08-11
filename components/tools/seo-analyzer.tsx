'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

interface SeoIssue {
  label: string
  passed: boolean
  detail: string
  suggestion: string
}

interface SeoResult {
  url: string
  finalUrl: string
  status: number
  title: string
  titleLength: number
  metaDescription: string
  metaDescriptionLength: number
  h1s: string[]
  h1Count: number
  h2Count: number
  images: number
  imagesWithAlt: number
  links: number
  internalLinks: number
  wordCount: number
  https: boolean
  canonical: string | null
  robots: string | null
  ogTitle: string | null
  ogImage: string | null
  ogDescription: string | null
  viewport: string | null
  favicon: boolean
  score: number
  passed: number
  total: number
  issues: SeoIssue[]
  aiSummary: string
}

function scoreColor(score: number): string {
  if (score >= 80) return 'text-emerald-400'
  if (score >= 50) return 'text-amber-400'
  return 'text-red-400'
}

function ringColor(score: number): string {
  if (score >= 80) return '#34d399'
  if (score >= 50) return '#f59e0b'
  return '#f87171'
}

export default function SeoAnalyzer() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<SeoResult | null>(null)

  const normalizeUrl = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return trimmed
    if (!/^https?:\/\//i.test(trimmed)) return `https://${trimmed}`
    return trimmed
  }

  const analyze = async () => {
    setError(null)
    setResult(null)
    if (!url.trim()) {
      setError('Enter a website URL to analyze.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/analyze-seo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: normalizeUrl(url) }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Analysis failed. Try again.')
        return
      }
      setResult(data)
    } catch (err) {
      console.error('SEO analyzer error:', err)
      setError('Could not reach the analyzer. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Input */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-3">Website URL</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && analyze()}
              placeholder="yourwebsite.com"
              className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={analyze}
              disabled={loading}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? 'Analyzing...' : 'Analyze SEO'}
            </motion.button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Free on-page SEO check: titles, meta tags, headings, images, social tags and more. AI-powered recommendations included.
          </p>
        </div>
      </div>

      {/* Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-destructive/10 border border-destructive text-destructive rounded-lg"
        >
          {error}
        </motion.div>
      )}

      {/* Placeholder */}
      {!result && !loading && !error && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-6">
            Enter any public website URL and we&apos;ll audit its on-page SEO in seconds.
          </p>
          <Search size={48} className="text-accent" />
        </div>
      )}

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Score */}
          <div className="flex flex-col sm:flex-row items-center gap-8 p-6 rounded-2xl border border-border bg-white/10 backdrop-blur-md">
            <div className="relative w-36 h-36 shrink-0">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="10" className="text-border" />
                <motion.circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke={ringColor(result.score)}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 52}
                  initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - result.score / 100) }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-4xl font-bold ${scoreColor(result.score)}`}>{result.score}</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-1">
                {result.score >= 80 ? 'Great on-page SEO' : result.score >= 50 ? 'Room to improve' : 'Needs attention'}
              </h3>
              <p className="text-muted-foreground text-sm mb-3 break-all">{result.finalUrl}</p>
              <p className="text-sm text-muted-foreground">
                {result.passed}/{result.total} checks passed
              </p>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="p-5 rounded-xl bg-primary/10 border border-primary/30">
            <p className="text-sm font-semibold text-accent mb-2">AI Recommendations</p>
            <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
              {result.aiSummary}
            </p>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Title', value: result.title ? `${result.titleLength} chars` : 'Missing' },
              { label: 'Description', value: result.metaDescription ? `${result.metaDescriptionLength} chars` : 'Missing' },
              { label: 'Word count', value: String(result.wordCount) },
              { label: 'Links', value: `${result.internalLinks} internal / ${result.links} total` },
            ].map((metric) => (
              <div key={metric.label} className="p-4 rounded-lg border border-border bg-white/10 backdrop-blur-md">
                <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                <p className="font-semibold text-sm">{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Issues */}
          <div className="space-y-2">
            {result.issues.map((issue) => (
              <motion.div
                key={issue.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg border flex gap-3 ${
                  issue.passed ? 'border-border bg-white/10 backdrop-blur-md' : 'border-amber-500/30 bg-amber-500/5'
                }`}
              >
                <span className={`text-lg shrink-0 ${issue.passed ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {issue.passed ? '✓' : '✗'}
                </span>
                <div className="min-w-0">
                  <p className={`font-semibold text-sm ${issue.passed ? '' : 'text-amber-300'}`}>
                    {issue.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{issue.detail}</p>
                  {!issue.passed && (
                    <p className="text-xs text-muted-foreground mt-1">{issue.suggestion}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
