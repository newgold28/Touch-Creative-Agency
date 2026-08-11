'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Palette, Megaphone, Code2, ArrowUpRight, Check } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import Philosophy from '@/components/philosophy'
import Stats from '@/components/stats'
import TrustedBy from '@/components/trusted-by'
import Process from '@/components/process'
import RotatingWords from '@/components/rotating-words'
import WhyTouch from '@/components/why-touch'
import FAQ from '@/components/faq'
import FaqJsonLd from '@/components/faq-jsonld'
import Marquee from '@/components/marquee'

function PaletteIllustration() {
  const swatches = ['#2563eb', '#60a5fa', '#a78bfa', '#34d399', '#f59e0b']
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 shrink-0">
      {/* Background circle */}
      <motion.circle
        cx="32" cy="32" r="30"
        fill="#111111" stroke="#2563eb" strokeWidth="1"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      {/* Pie slices as arcs */}
      {swatches.map((color, i) => {
        const angle = (i * 360) / swatches.length
        const rad = (angle * Math.PI) / 180
        const endRad = ((angle + 72) * Math.PI) / 180
        const round = (n: number) => Number(n.toFixed(2))
        const x1 = round(32 + 24 * Math.cos(rad))
        const y1 = round(32 + 24 * Math.sin(rad))
        const x2 = round(32 + 24 * Math.cos(endRad))
        const y2 = round(32 + 24 * Math.sin(endRad))
        return (
          <motion.path
            key={i}
            d={`M32,32 L${x1},${y1} A24,24 0 0,1 ${x2},${y2} Z`}
            fill={color}
            fillOpacity="0.8"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
          />
        )
      })}
      <circle cx="32" cy="32" r="10" fill="#000000" />
      <motion.circle cx="32" cy="32" r="5" fill="#60a5fa"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  )
}

function FontIllustration() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14 shrink-0">
      <rect width="64" height="64" rx="12" fill="#111111" />
      {/* "Aa" display font style */}
      <motion.text
        x="8" y="38"
        fontSize="28" fontWeight="700"
        fill="#2563eb"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      >
        Aa
      </motion.text>
      {/* Body text lines */}
      <motion.rect x="8" y="44" width="40" height="3" rx="1.5" fill="#60a5fa" fillOpacity="0.6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        style={{ transformOrigin: '8px 45.5px' }}
      />
      <motion.rect x="8" y="50" width="30" height="3" rx="1.5" fill="#60a5fa" fillOpacity="0.35"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        style={{ transformOrigin: '8px 51.5px' }}
      />
    </svg>
  )
}

function NetworkIllustration() {
  const nodes = [
    { cx: 100, cy: 65 },
    { cx: 55, cy: 35 },
    { cx: 145, cy: 35 },
    { cx: 55, cy: 95 },
    { cx: 145, cy: 95 },
    { cx: 30, cy: 65 },
    { cx: 170, cy: 65 },
  ]
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 2], [3, 4],
  ]
  return (
    <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Edges */}
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="#2563eb" strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 0.1 * i, duration: 0.6 }}
        />
      ))}
      {/* Pulsing ring on center */}
      <motion.circle
        cx={nodes[0].cx} cy={nodes[0].cy} r="20"
        fill="none" stroke="#2563eb" strokeWidth="1"
        animate={{ r: [14, 24, 14], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx} cy={n.cy}
          r={i === 0 ? 12 : 7}
          fill={i === 0 ? '#2563eb' : '#111111'}
          stroke={i === 0 ? '#60a5fa' : '#2563eb'}
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.05 * i, duration: 0.4, type: 'spring' }}
        />
      ))}
      {/* Person dots inside outer nodes */}
      {nodes.slice(1).map((n, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={n.cx} cy={n.cy}
          r="3"
          fill="#60a5fa"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  )
}

const pillars = [
  {
    title: 'Design',
    icon: Palette,
    desc: 'Brands and interfaces people remember.',
    services: [
      { name: 'Brand & Visual Design', desc: 'Identity, guidelines and marketing assets' },
      { name: 'Web & UI Design', desc: 'Websites, apps and reusable design systems' },
      { name: 'Video & Content Creation', desc: 'Reels, motion graphics and short-form video' },
    ],
  },
  {
    title: 'Marketing',
    icon: Megaphone,
    desc: 'Campaigns that find, engage and convert your audience.',
    services: [
      { name: 'Digital Strategy & Ads', desc: 'Paid campaigns and growth plans that acquire customers' },
      { name: 'Digital Marketing & SEO', desc: 'Search, content and lifecycle marketing that compounds' },
      { name: 'Social Media Management', desc: 'An always-on, on-brand presence across platforms' },
      { name: 'Copywriting & Content', desc: 'Web copy and campaigns that persuade' },
    ],
  },
  {
    title: 'Development',
    icon: Code2,
    desc: 'Fast, reliable digital products.',
    services: [
      { name: 'Web Development', desc: 'Modern websites and web applications' },
      { name: 'E-commerce Solutions', desc: 'Storefronts with payments, inventory and analytics' },
    ],
  },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <>
      <ParticleBackground />
      <FaqJsonLd />
      <Navbar />
      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)] -z-[1]"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-balance"
            >
              Nigeria&apos;s Best Creative
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Agency for Modern Brands
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-foreground mb-3"
            >
              We deliver <RotatingWords />
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              From Lagos to the rest of Africa, we craft digital experiences that
              captivate, engage, and convert — design, branding, marketing, and
              development under one roof.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="btn-primary px-8 py-4 text-center"
              >
                Start Your Project
              </Link>
              <Link
                href="/work"
                className="btn-outline px-8 py-4 border-accent text-accent hover:bg-accent/10"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <Marquee />

        <TrustedBy />

        {/* Featured Work Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Our Current Focus</span>
              <h2 className="text-4xl font-bold mb-6">Active Partnership</h2>
              <p className="text-muted-foreground mb-6">
                We dedicate our agency to launching high-growth products. Our active focus is with <strong>Skilled Room</strong>, building their worker network through brand marketing, visual assets, short-form video ads, and targeted lead generation.
              </p>
              <Link
                href="/work/skilled-room"
                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-semibold"
              >
                Explore the active campaign
                <span className="ml-2">→</span>
              </Link>
            </div>

            <Link href="/work/skilled-room" className="block group">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="h-72 bg-white/10 backdrop-blur-md rounded-2xl border border-border p-8 flex flex-col justify-between cursor-pointer hover:border-accent/40 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="flex-1 flex items-center justify-center">
                  <NetworkIllustration />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Skilled Room App</h3>
                    <p className="text-xs text-muted-foreground">6-month branding &amp; vendor onboarding campaign.</p>
                  </div>
                  <span className="text-accent group-hover:translate-x-1 transition-transform shrink-0 ml-4">→</span>
                </div>
                <span className="absolute top-4 right-4 text-xs bg-accent/20 text-accent border border-accent/20 px-2 py-0.5 rounded font-semibold">Active Campaign</span>
              </motion.div>
            </Link>
          </motion.div>
        </section>

        {/* Services Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Design, marketing and development — every service you need to grow, all
                under one roof.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card-glow relative p-8 rounded-xl border border-border bg-white/10 backdrop-blur-md overflow-hidden"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-5">
                    <pillar.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{pillar.desc}</p>

                  <ul className="space-y-4 mb-8">
                    {pillar.services.map((service) => (
                      <li key={service.name} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-accent" />
                        </span>
                        <div>
                          <p className="font-semibold leading-snug">{service.name}</p>
                          <p className="text-sm text-muted-foreground">{service.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-accent font-semibold group text-sm"
                  >
                    Explore services
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Touch Section */}
        <WhyTouch />

        {/* Process Section */}
        <Process />

        {/* Blog Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">From the Blog</span>
              <h2 className="text-4xl font-bold">Ideas &amp; Insights</h2>
            </div>
            <Link
              href="/blog"
              className="text-accent hover:text-accent/80 font-semibold transition-colors inline-flex items-center gap-2 shrink-0"
            >
              View all articles <span>→</span>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                image: '/blog/brand-colors.jpg',
                alt: 'Brand color swatches on a table',
                category: 'Branding',
                title: 'How to Choose Brand Colors That Convert',
                excerpt: 'Pick a palette that communicates your message and drives action — free generator inside.',
                slug: '/blog/how-to-choose-brand-colors',
                readTime: '8 min read',
              },
              {
                image: '/blog/website-cost.jpg',
                alt: 'Modern workspace with a laptop showing a website',
                category: 'Web Design',
                title: 'How Much Does a Website Cost in 2026?',
                excerpt: 'A realistic pricing breakdown — plus the hidden costs nobody mentions.',
                slug: '/blog/how-much-does-a-website-cost',
                readTime: '10 min read',
              },
              {
                image: '/blog/short-form-video.jpg',
                alt: 'Person recording a video on a smartphone',
                category: 'Video',
                title: 'Short-Form Video: How to Get More Views',
                excerpt: 'The hooks, retention tricks, and repurposing system that actually grows reach.',
                slug: '/blog/short-form-video-strategy',
                readTime: '7 min read',
              },
            ].map((post) => (
              <motion.div key={post.title} variants={itemVariants} whileHover={{ y: -6 }} className="h-full">
                <Link
                  href={post.slug}
                  className="card-glow block group h-full border border-border rounded-xl overflow-hidden hover:border-accent transition-colors bg-white/10 backdrop-blur-md"
                >
                  <div className="aspect-[16/9] overflow-hidden border-b border-border bg-card">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{post.category}</span>
                    <h3 className="text-base font-bold mt-2 mb-3 group-hover:text-accent transition-colors leading-snug">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tools Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-border">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">Free for Everyone</span>
              <h2 className="text-4xl font-bold">AI-Powered Tools</h2>
            </div>
            <Link
              href="/tools"
              className="text-accent hover:text-accent/80 font-semibold transition-colors inline-flex items-center gap-2 shrink-0"
            >
              Explore all tools <span>→</span>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                illustration: <PaletteIllustration />,
                title: 'AI Color Palette Generator',
                description: 'Generate beautiful, brand-matched color palettes using AI. Pick an industry and mood — get 5 curated hex codes instantly.',
                badge: 'Live',
                href: '/tools/color-palette-generator',
              },
              {
                illustration: <FontIllustration />,
                title: 'Font Pairing Suggester',
                description: 'Get professionally curated Google Fonts pairings tailored to your design style — from tech startups to luxury brands.',
                badge: 'Live',
                href: '/tools/font-pairing-suggester',
              },
            ].map((tool) => (
              <motion.div key={tool.title} variants={itemVariants} whileHover={{ y: -5 }} className="h-full">
                <Link
                  href={tool.href}
                  className="card-glow flex items-center gap-6 p-6 group border border-border rounded-xl hover:border-accent hover:bg-accent/5 transition-all h-full bg-white/10 backdrop-blur-md"
                >
                  {tool.illustration}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-bold group-hover:text-accent transition-colors">{tool.title}</h3>
                      <span className="text-xs bg-accent/20 text-accent border border-accent/20 px-2 py-0.5 rounded font-semibold">{tool.badge}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-border rounded-2xl p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let&apos;s work together to create something extraordinary.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Philosophy Section */}
        <Philosophy />

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">The Team</span>
            <h2 className="text-4xl font-bold">The people behind the pixels</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A small, senior team that treats your brand like our own.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-border mb-8 bg-white/10 backdrop-blur-md"
          >
            <Image
              src="/team-img/_NUT2496.jpg"
              alt="Touch Creative Agency team at work"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <p className="text-white text-xl md:text-2xl font-bold max-w-md">
                Great work happens when people care.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold mt-3 group"
              >
                Meet the team
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {['_NUT2475.jpg', '_NUT2499.jpg', '_NUT2500.jpg', '_NUT2505.jpg', '_NUT2510.jpg'].map((src) => (
              <motion.div
                key={src}
                variants={itemVariants}
                className="relative aspect-[3/4] rounded-xl overflow-hidden border border-border group bg-white/10 backdrop-blur-md"
              >
                <Image
                  src={`/team-img/${src}`}
                  alt={`Touch Creative Agency team member — creatives at Nigeria's best creative agency`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>

          {/* Careers Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-border bg-white/10 backdrop-blur-md p-10 md:p-14 text-center"
            >
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
                Careers
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Build with the Touch team
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                We&apos;re a small creative family — designers, marketers, and developers doing
                our best work together. We&apos;re not hiring right now, but great people are
                always on our radar.
              </p>
              <Link href="/careers" className="btn-primary inline-flex px-8 py-4">
                See Careers
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </section>

          {/* FAQ Section */}
          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  )
}
