import type { Metadata } from 'next'
import BlogPostLayout from '@/components/blog-post-layout'
import ArticleJsonLd from '@/components/article-jsonld'

export const metadata: Metadata = {
  title: 'How Much Does a Website Cost in 2026? (Pricing Breakdown)',
  description: 'A realistic 2026 website pricing breakdown in Nigeria — DIY builders, freelancers, and agencies, plus the hidden costs nobody mentions.',
  openGraph: {
    type: 'article',
    title: 'How Much Does a Website Cost in 2026? (Pricing Breakdown)',
    description: 'A realistic 2026 website pricing breakdown in Nigeria — DIY builders, freelancers, and agencies, plus the hidden costs nobody mentions.',
    publishedTime: '2026-08-05',
    modifiedTime: '2026-08-05',
    authors: ['Paschal Ezenwankwo'],
    images: [
      {
        url: '/blog/website-cost.jpg',
        width: 1066,
        height: 1600,
        alt: 'Modern workspace with a laptop showing a website',
      },
    ],
  },
}

export default function HowMuchDoesAWebsiteCost() {
  return (
    <>
      <BlogPostLayout
        category="Web Design"
        title="How Much Does a Website Cost in 2026? A Realistic Pricing Breakdown"
        date="August 5, 2026"
        readTime="10 min read"
        author={{ name: 'Paschal Ezenwankwo', role: 'Development Lead', image: '/team-img/_NUT2507.jpg' }}
        hero={{ src: '/blog/website-cost.jpg', alt: 'Modern workspace with a laptop showing a website' }}
      >
        <p>
          &quot;How much does a website cost?&quot; is the first question every business owner asks —
          and the answer online is usually &quot;it depends,&quot; which helps nobody. So let&apos;s be
          specific. In 2026, a website can cost anywhere from <strong>₦150,000</strong> to over
          <strong> ₦5,000,000</strong> in Nigeria — and both prices can be right, depending on
          what you need.
        </p>

        <h2>What actually drives the price</h2>
        <p>Every price difference comes down to a handful of decisions:</p>
        <ul>
          <li><strong>Template vs custom design</strong> — a template starts fast but makes you look like everyone else; custom design is built around your brand.</li>
          <li><strong>Number of pages</strong> — a 5-page brochure site is a different project than a 40-page ecommerce store.</li>
          <li><strong>Features</strong> — payment integrations, booking systems, dashboards, and multi-language support all add time.</li>
          <li><strong>Content and SEO</strong> — a site nobody can find is a brochure nobody reads. Copywriting and SEO add value and cost.</li>
          <li><strong>Who builds it</strong> — freelancers, agencies, and DIY builders all price differently for good reasons.</li>
        </ul>

        <h2>Realistic ranges in 2026</h2>
        <ul>
          <li><strong>DIY builder</strong> (Wix, Shopify, WordPress.com): ₦150k–₦500k for a year of subscription and a decent theme. You do the work.</li>
          <li><strong>Freelancer, template-based</strong>: ₦300k–₦1m. Great for small businesses with clear content ready to go.</li>
          <li><strong>Agency, custom design</strong>: ₦1.5m–₦5m+. Includes strategy, custom design, development, content, SEO, and ongoing support.</li>
        </ul>
        <p>
          The most expensive mistake is not the agency price — it&apos;s paying for a site that
          doesn&apos;t get found, doesn&apos;t load fast, or doesn&apos;t convert. A cheap site that fails
          costs far more than a good one.
        </p>

        <h2>The hidden costs nobody tells you about</h2>
        <p>Your budget isn&apos;t complete without these:</p>
        <ul>
          <li><strong>Domain</strong> — ₦15k–₦100k+/year depending on the extension</li>
          <li><strong>Hosting</strong> — ₦50k–₦500k+/year for reliable, fast hosting</li>
          <li><strong>SSL certificate</strong> — usually free, but only if your host includes it</li>
          <li><strong>Maintenance and updates</strong> — budget 10–15% of the build cost per year</li>
          <li><strong>Plugins and tools</strong> — analytics, email, and booking tools add up</li>
        </ul>

        <h2>How to get the best value</h2>
        <ul>
          <li>Write your content <strong>before</strong> you commission the build — it saves design and dev time.</li>
          <li>Define your goals: is this for credibility, leads, or sales? The answer changes the design.</li>
          <li>Ask for a fixed scope with milestones, not an open-ended &quot;design fee.&quot;</li>
          <li>Check the agency&apos;s past work and ask who does the actual work — no handoffs to untrained juniors.</li>
        </ul>

        <h2>Red flags when pricing</h2>
        <p>
          Be wary of quotes that are suspiciously cheap (they usually mean offshore templates or
          hidden extras) and quotes with no breakdown at all. A reputable agency will happily
          itemise: design, development, content, SEO, and support.
        </p>

        <p>
          Want a straight answer for your specific project? Tell us what you need and we&apos;ll
          send a clear, itemised proposal — no surprise fees, no jargon.
        </p>
      </BlogPostLayout>

      <ArticleJsonLd
        title="How Much Does a Website Cost in 2026? A Realistic Pricing Breakdown"
        description="A realistic 2026 website pricing breakdown in Nigeria — DIY builders, freelancers, and agencies, plus the hidden costs nobody mentions."
        datePublished="2026-08-05"
        dateModified="2026-08-05"
        author="Paschal Ezenwankwo"
        image="/blog/website-cost.jpg"
        url="/blog/how-much-does-a-website-cost"
      />
    </>
  )
}
