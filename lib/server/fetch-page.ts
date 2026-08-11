import { lookup } from 'node:dns/promises'
import { isIP } from 'node:net'

function isPrivateIp(ip: string): boolean {
  if (ip.includes(':')) {
    // IPv6
    const lower = ip.toLowerCase()
    if (lower === '::1' || lower.startsWith('::ffff:7f00:')) return true
    if (lower.startsWith('fc') || lower.startsWith('fd')) return true // fc00::/7
    if (lower.startsWith('fe8') || lower.startsWith('fe9') || lower.startsWith('fea') || lower.startsWith('feb')) return true // fe80::/10
    if (lower.startsWith('::')) return false
    return false
  }

  const parts = ip.split('.').map(Number)
  if (parts.length !== 4) return true

  const [a, b] = parts
  // 0.0.0.0/8, 10.0.0.0/8, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.168.0.0/16, 100.64.0.0/10
  if (a === 0 || a === 10 || a === 127) return true
  if (a === 169 && b === 254) return true
  if (a === 172 && b >= 16 && b <= 31) return true
  if (a === 192 && b === 168) return true
  if (a === 100 && b >= 64 && b <= 127) return true
  return false
}

export interface FetchedPage {
  url: string
  finalUrl: string
  html: string
  status: number
  contentType: string
  contentEncoding: string
  timeToFirstByteMs: number
  loadTimeMs: number
  redirects: number
}

export async function fetchPage(targetUrl: string): Promise<FetchedPage> {
  let parsed: URL
  try {
    parsed = new URL(targetUrl)
  } catch {
    throw new Error('That URL is not valid. Include the https:// prefix.')
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new Error('Only http and https URLs are supported.')
  }

  if (parsed.port && parsed.port !== '80' && parsed.port !== '443') {
    throw new Error('Only standard web ports (80/443) are supported.')
  }

  const hostname = parsed.hostname.toLowerCase()
  if (
    hostname === 'localhost' ||
    hostname.endsWith('.localhost') ||
    hostname.endsWith('.local') ||
    hostname.endsWith('.internal') ||
    hostname.endsWith('.lan')
  ) {
    throw new Error('Local network addresses are not allowed.')
  }

  const ip = isIP(hostname)
  if (ip !== 0) {
    if (isPrivateIp(hostname)) {
      throw new Error('Private and local IP addresses are not allowed.')
    }
  } else {
    try {
      const addresses = await lookup(hostname, { all: true })
      const blocked = addresses.find((a) => isPrivateIp(a.address))
      if (blocked) {
        throw new Error('Private and local IP addresses are not allowed.')
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('not allowed')) throw error
      throw new Error('Could not resolve that domain. Check the URL and try again.')
    }
  }

  const startedAt = performance.now()
  const response = await fetch(parsed.toString(), {
    redirect: 'manual',
    signal: AbortSignal.timeout(20000),
    headers: {
      'User-Agent':
        'Mozilla/5.0 (compatible; TouchCreativeTool/1.0; +https://touchcreative.agency)',
      'Accept': 'text/html,application/xhtml+xml',
    },
  })

  const timeToFirstByteMs = Math.round(performance.now() - startedAt)

  let finalUrl = parsed.toString()
  let redirects = 0
  let current = response
  let hops = 0

  while (current.status >= 300 && current.status < 400 && hops < 5) {
    const location = current.headers.get('location')
    if (!location) break
    const nextUrl = new URL(location, finalUrl)
    finalUrl = nextUrl.toString()
    redirects += 1
    hops += 1
    current = await fetch(nextUrl.toString(), {
      redirect: 'manual',
      signal: AbortSignal.timeout(20000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TouchCreativeTool/1.0)' },
    })
  }

  if (current.status >= 300 && current.status < 400) {
    throw new Error('Too many redirects. The site could not be checked.')
  }

  const html = await current.text()
  const loadTimeMs = Math.round(performance.now() - startedAt)

  return {
    url: parsed.toString(),
    finalUrl,
    html,
    status: current.status,
    contentType: current.headers.get('content-type') || '',
    contentEncoding: current.headers.get('content-encoding') || '',
    timeToFirstByteMs,
    loadTimeMs,
    redirects,
  }
}
