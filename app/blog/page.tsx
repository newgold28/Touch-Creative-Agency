'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

const blogPosts = [
  {
    id: 1,
    title: 'How to Choose Brand Colors That Convert (2026 Guide)',
    excerpt: 'Pick a palette that communicates your message and drives action — with a free color palette generator inside.',
    category: 'Branding',
    date: 'August 8, 2026',
    readTime: '8 min read',
    image: '/blog/brand-colors.jpg',
    alt: 'Brand color swatches on a table',
    slug: 'how-to-choose-brand-colors',
  },
  {
    id: 2,
    title: 'How Much Does a Website Cost in 2026?',
    excerpt: 'A realistic, honest pricing breakdown — DIY builders, freelancers, and agencies — plus the hidden costs nobody mentions.',
    category: 'Web Design',
    date: 'August 5, 2026',
    readTime: '10 min read',
    image: '/blog/website-cost.jpg',
    alt: 'Modern workspace with a laptop showing a website',
    slug: 'how-much-does-a-website-cost',
  },
  {
    id: 3,
    title: 'Short-Form Video Strategy: How to Get More Views in 2026',
    excerpt: 'The exact system for hooks, retention, and repurposing that gets TikTok, Reels, and Shorts working for your brand.',
    category: 'Video',
    date: 'July 28, 2026',
    readTime: '7 min read',
    image: '/blog/short-form-video.jpg',
    alt: 'Person recording a video on a smartphone',
    slug: 'short-form-video-strategy',
  },
  {
    id: 4,
    title: "Instagram & Facebook Ads: The Beginner's Guide That Converts",
    excerpt: 'Set up tracking, pick the right objective, and read the metrics that matter — a no-fluff playbook for 2026.',
    category: 'Marketing',
    date: 'July 21, 2026',
    readTime: '9 min read',
    image: '/blog/instagram-ads.jpg',
    alt: 'Social media analytics dashboard on a laptop',
    slug: 'instagram-ads-guide',
  },
  {
    id: 5,
    title: 'The Best Font Pairings for Your Brand (Free Tool Inside)',
    excerpt: 'Five proven display + body pairings, the two rules that make them work, and a free font pairing suggester.',
    category: 'Branding',
    date: 'July 14, 2026',
    readTime: '6 min read',
    image: '/blog/font-pairings.jpg',
    alt: 'Typography and type specimens',
    slug: 'best-font-pairings',
  },
  {
    id: 6,
    title: 'Web Design Trends 2026: What Actually Matters',
    excerpt: 'What to adopt (bold type, purpose, performance) and what to skip — the trends tied to attention and trust.',
    category: 'Design',
    date: 'July 7, 2026',
    readTime: '8 min read',
    image: '/blog/web-design-trends.jpg',
    alt: 'Code on a laptop screen',
    slug: 'web-design-trends-2026',
  },
]

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="min-h-screen pt-32">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Our Blog
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Insights &amp; Ideas
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                for Modern Brands
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical guides on branding, web design, video, and growth — written by the
              Touch Creative team.
            </p>
          </motion.div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants} className="group">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="rounded-xl overflow-hidden aspect-[16/9] border border-border mb-4 bg-white/10 backdrop-blur-md">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-accent font-semibold">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
