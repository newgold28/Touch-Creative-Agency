import { NextResponse } from 'next/server'
import { fetchPage } from '@/lib/server/fetch-page'
import { generateWithGroq } from '@/lib/ai/groq'

interface PerfIssue {
  label: string
  passed: boolean
  detail: string
  suggestion: string
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json()
    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Please provide a URL to check.' }, { status: 400 })
    }

    let page
    try {
      page = await fetchPage(url)
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Could not fetch that page.' },
        { status: 400 }
      )
    }

    const html = page.html
    const sizeBytes = Buffer.byteLength(html, 'utf8')
    const scripts = (html.match(/<script[^>]+src=/gi) || []).length
    const styles = (html.match(/<link[^>]+rel=["']stylesheet["']/gi) || []).length
    const images = (html.match(/<img[^>]*>/gi) || []).length
    const fonts = (html.match(/<link[^>]+rel=["']preload["'][^>]+font/gi) || []).length
    const totalResources = scripts + styles + images + fonts
    const compressed = page.contentEncoding ? page.contentEncoding.toLowerCase() : ''
    const ttfb = page.timeToFirstByteMs
    const loadTime = page.loadTimeMs
    const redirects = page.redirects

    const issues: PerfIssue[] = [
      {
        label: 'Response status',
        passed: page.status === 200,
        detail: `Server returned ${page.status}.`,
        suggestion: 'Fix the non-200 status so pages and resources load correctly.',
      },
      {
        label: 'Time to first byte (TTFB)',
        passed: ttfb < 400,
        detail: `${ttfb} ms to first byte.${ttfb < 200 ? ' Excellent.' : ttfb < 400 ? ' Good.' : ''}`,
        suggestion: 'Use fast hosting, enable caching, and reduce server-side work to get TTFB under 400 ms.',
      },
      {
        label: 'Redirects',
        passed: redirects <= 1,
        detail: `${redirects} redirect${redirects === 1 ? '' : 's'} before the final page.`,
        suggestion: 'Remove redirect chains — every hop adds latency and can dilute SEO signals.',
      },
      {
        label: 'Compression',
        passed: compressed === 'gzip' || compressed === 'br' || compressed === 'deflate' || compressed === 'zstd',
        detail: compressed ? `Compressed with ${compressed.toUpperCase()}.` : 'No content compression detected.',
        suggestion: 'Enable gzip or Brotli compression to cut transfer size significantly.',
      },
      {
        label: 'HTML size',
        passed: sizeBytes < 1024 * 1024,
        detail: `HTML document is ${formatBytes(sizeBytes)}.`,
        suggestion: 'Keep HTML lean — inline critical CSS, defer non-essential scripts.',
      },
      {
        label: 'Resource count',
        passed: totalResources < 60,
        detail: `${totalResources} resources found (${scripts} scripts, ${styles} stylesheets, ${images} images${fonts ? `, ${fonts} fonts` : ''}).`,
        suggestion: 'Reduce the number of scripts and images; combine files and lazy-load below-the-fold media.',
      },
      {
        label: 'Total load time',
        passed: loadTime < 3000,
        detail: `Page loaded in ${(loadTime / 1000).toFixed(2)} s.`,
        suggestion: 'Target a sub-3-second load on 4G. Optimise images, minify assets, and consider a CDN.',
      },
    ]

    const passed = issues.filter((i) => i.passed).length
    const total = issues.length

    // Weighted score: TTFB 30, status 10, compression 15, size 15, resources 15, redirects 10, load 5
    const weights: Record<string, number> = {
      'Response status': 10,
      'Time to first byte (TTFB)': 30,
      Redirects: 10,
      Compression: 15,
      'HTML size': 15,
      'Resource count': 15,
      'Total load time': 5,
    }
    const score = Math.round(
      issues.reduce((acc, issue) => acc + (issue.passed ? weights[issue.label] : 0), 0)
    )

    const failed = issues.filter((i) => !i.passed)
    const fallbackSummary = failed.length
      ? `Focus on: ${failed
          .slice(0, 4)
          .map((i) => i.label)
          .join(', ')}. ${failed
          .slice(0, 3)
          .map((i) => i.suggestion)
          .join(' ')}`
      : 'This page loads fast and is well optimised. Keep images compressed and consider a CDN for global reach.'

    const aiSummary = await generateWithGroq({
      system:
        'You are a senior web performance engineer. Give 3-4 concise, prioritized, actionable recommendations in short bullet points. Be specific, never generic.',
      prompt: `Analyze this website's performance and give the best 3-4 prioritized fixes.
URL: ${page.finalUrl}
TTFB: ${ttfb} ms, total load: ${loadTime} ms, HTML size: ${formatBytes(sizeBytes)}, compression: "${compressed || 'none'}", resources: ${totalResources}, redirects: ${redirects}.
Failed checks:
${failed.map((f) => `- ${f.label}: ${f.suggestion}`).join('\n')}`,
      maxTokens: 350,
      temperature: 0.5,
      fallback: fallbackSummary,
    })

    return NextResponse.json({
      url: page.url,
      finalUrl: page.finalUrl,
      status: page.status,
      ttfb,
      loadTime,
      sizeBytes,
      sizeLabel: formatBytes(sizeBytes),
      compressed,
      scripts,
      styles,
      images,
      fonts,
      totalResources,
      redirects,
      score,
      passed,
      total,
      issues,
      aiSummary,
    })
  } catch (error) {
    console.error('Performance checker error:', error)
    return NextResponse.json({ error: 'Failed to check the page.' }, { status: 500 })
  }
}
