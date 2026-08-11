import { NextResponse } from 'next/server'
import { fetchPage } from '@/lib/server/fetch-page'
import { generateWithGroq } from '@/lib/ai/groq'

interface SeoIssue {
  label: string
  passed: boolean
  detail: string
  suggestion: string
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#\d+;/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function getMeta(html: string, name: string): string | null {
  const patterns = [
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`, 'i'),
  ]
  for (const p of patterns) {
    const m = html.match(p)
    if (m) return m[1]
  }
  return null
}

function getProperty(html: string, property: string): string | null {
  const patterns = [
    new RegExp(`<meta[^>]+property=["']${property}["'][^>]+content=["']([^"']*)["']`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+property=["']${property}["']`, 'i'),
  ]
  for (const p of patterns) {
    const m = html.match(p)
    if (m) return m[1]
  }
  return null
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json()
    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Please provide a URL to analyze.' }, { status: 400 })
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

    if (page.status >= 400) {
      return NextResponse.json(
        { error: `The page returned a ${page.status} error. Check the URL.` },
        { status: 400 }
      )
    }

    const html = page.html

    // Title
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
    const title = titleMatch ? stripHtml(titleMatch[1]) : ''
    const titleLength = title.length

    // Meta description
    const metaDescription = getMeta(html, 'description') ?? ''
    const metaDescriptionLength = metaDescription.length

    // Headings
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => stripHtml(m[1]).slice(0, 120)).filter(Boolean)
    const h1Count = h1s.length
    const h2Count = (html.match(/<h2[^>]*>/gi) || []).length

    // Images
    const images = [...html.matchAll(/<img[^>]*>/gi)].length
    const imagesWithAlt = [...html.matchAll(/<img[^>]*>/gi)].filter((m) => /alt=["'][^"']+["']/i.test(m[0])).length

    // Links
    const links = (html.match(/<a[^>]+href=["'][^"']+["'][^>]*>/gi) || []).length
    let internalLinks = 0
    try {
      const origin = new URL(page.finalUrl).origin
      internalLinks = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi)].filter((m) => {
        const href = m[1]
        if (href.startsWith('http')) return href.startsWith(origin)
        if (href.startsWith('/') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return true
        return false
      }).length
    } catch {
      internalLinks = 0
    }

    // Text + word count
    const wordCount = stripHtml(html).split(/\s+/).filter(Boolean).length

    // Other elements
    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ?? null
    const robots = getMeta(html, 'robots')
    const ogTitle = getProperty(html, 'og:title')
    const ogDescription = getProperty(html, 'og:description')
    const ogImage = getProperty(html, 'og:image')
    const viewport = getMeta(html, 'viewport')
    const favicon = /<link[^>]+rel=["'](?:shortcut\s+)?icon["']/i.test(html)
    const https = page.finalUrl.startsWith('https://')
    const noindex = robots ? /noindex/i.test(robots) : false

    const issues: SeoIssue[] = [
      {
        label: 'HTTPS enabled',
        passed: https,
        detail: https ? 'Site is served over a secure connection.' : 'Site is served over plain HTTP.',
        suggestion: 'Install an SSL certificate and redirect HTTP to HTTPS.',
      },
      {
        label: 'Page title',
        passed: titleLength > 0,
        detail: titleLength > 0 ? `Found: "${title.slice(0, 80)}${title.length > 80 ? '…' : ''}"` : 'No <title> tag found.',
        suggestion: 'Add a descriptive <title> tag with your primary keyword.',
      },
      {
        label: 'Title length (30–60 chars)',
        passed: titleLength >= 30 && titleLength <= 60,
        detail: `${titleLength} characters.`,
        suggestion: 'Keep titles between 30 and 60 characters so they render fully in search results.',
      },
      {
        label: 'Meta description',
        passed: metaDescriptionLength > 0,
        detail: metaDescriptionLength > 0 ? `${metaDescriptionLength} characters.` : 'No meta description found.',
        suggestion: 'Write a 150-character description that summarises the page and invites the click.',
      },
      {
        label: 'Description length (70–160 chars)',
        passed: metaDescriptionLength >= 70 && metaDescriptionLength <= 160,
        detail: `${metaDescriptionLength} characters.`,
        suggestion: 'Adjust the description to 70–160 characters to avoid truncation.',
      },
      {
        label: 'Exactly one H1',
        passed: h1Count === 1,
        detail: `${h1Count} H1 tag${h1Count === 1 ? '' : 's'} found.`,
        suggestion: 'Use a single H1 that describes the page topic; keep the rest as H2/H3.',
      },
      {
        label: 'Subheadings (H2/H3)',
        passed: h2Count > 0,
        detail: `${h2Count} H2 tags found.`,
        suggestion: 'Break content into sections with descriptive H2 headings for readability and SEO.',
      },
      {
        label: 'Image alt text',
        passed: images === 0 || imagesWithAlt / images >= 0.8,
        detail: images > 0 ? `${imagesWithAlt}/${images} images have alt text.` : 'No images detected.',
        suggestion: 'Add descriptive alt text to every image for accessibility and image search.',
      },
      {
        label: 'Content depth (300+ words)',
        passed: wordCount >= 300,
        detail: `${wordCount} words of visible text.`,
        suggestion: 'Add more substantive content — pages under 300 words rank poorly.',
      },
      {
        label: 'Canonical tag',
        passed: canonical !== null,
        detail: canonical ? `Set to ${canonical.slice(0, 60)}…` : 'No canonical tag found.',
        suggestion: 'Add a self-referencing canonical URL to avoid duplicate content issues.',
      },
      {
        label: 'Search engines allowed',
        passed: !noindex,
        detail: robots ? `robots meta: "${robots}"` : 'No robots meta found (defaults to indexable).',
        suggestion: 'Remove "noindex" to let search engines index the page.',
      },
      {
        label: 'Open Graph title',
        passed: ogTitle !== null,
        detail: ogTitle ? 'Social title configured.' : 'No og:title tag found.',
        suggestion: 'Add og:title so shared links render properly on social media.',
      },
      {
        label: 'Open Graph image',
        passed: ogImage !== null,
        detail: ogImage ? 'Social image configured.' : 'No og:image tag found.',
        suggestion: 'Add a 1200×630 og:image so link previews look professional.',
      },
      {
        label: 'Viewport meta',
        passed: viewport !== null,
        detail: viewport ? 'Mobile viewport configured.' : 'No viewport meta found.',
        suggestion: 'Add the responsive viewport meta tag — it is required for mobile ranking.',
      },
      {
        label: 'Favicon',
        passed: favicon,
        detail: favicon ? 'Favicon detected.' : 'No favicon detected.',
        suggestion: 'Add a favicon so your site looks polished in browser tabs.',
      },
    ]

    const passed = issues.filter((i) => i.passed).length
    const total = issues.length
    const score = Math.round((passed / total) * 100)

    const failed = issues.filter((i) => !i.passed)
    const fallbackSummary = failed.length
      ? `Your biggest opportunities are: ${failed
          .slice(0, 4)
          .map((i) => i.label)
          .join(', ')}. ${failed
          .slice(0, 3)
          .map((i) => i.suggestion)
          .join(' ')}`
      : 'This page has a solid on-page SEO foundation. Keep publishing fresh, useful content and building quality backlinks.'

    const aiSummary = await generateWithGroq({
      system:
        'You are a senior SEO consultant. Give 3-4 concise, prioritized, actionable recommendations in short bullet points. Be specific and practical, never generic.',
      prompt: `Analyze this website's on-page SEO and give the best 3-4 prioritized fixes.
URL: ${page.finalUrl}
Page title: "${title}"
Passed ${passed}/${total} checks (score ${score}/100).
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
      title,
      titleLength,
      metaDescription,
      metaDescriptionLength,
      h1s,
      h1Count,
      h2Count,
      images,
      imagesWithAlt,
      links,
      internalLinks,
      wordCount,
      https,
      canonical,
      robots,
      ogTitle,
      ogImage,
      ogDescription,
      viewport,
      favicon,
      score,
      passed,
      total,
      issues,
      aiSummary,
    })
  } catch (error) {
    console.error('SEO analyzer error:', error)
    return NextResponse.json({ error: 'Failed to analyze the page.' }, { status: 500 })
  }
}
