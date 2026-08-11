'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import { tools } from '@/lib/tools'

function getToolIcon(id: string, size = 40) {
  switch (id) {
    case 'color-palette-generator':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 100 100"
          style={{ animation: 'spin 8s linear infinite' }}
        >
          <style>{`@keyframes spin { from { transform-origin: 50px 50px; transform: rotate(0deg); } to { transform-origin: 50px 50px; transform: rotate(360deg); } }`}</style>
          <path d="M50 50 L50 10 A40 40 0 0 1 90 50 Z" fill="#7C3AED" />
          <path d="M50 50 L90 50 A40 40 0 0 1 50 90 Z" fill="#06B6D4" />
          <path d="M50 50 L50 90 A40 40 0 0 1 10 50 Z" fill="#F59E0B" />
          <path d="M50 50 L10 50 A40 40 0 0 1 50 10 Z" fill="#EC4899" />
          <circle cx="50" cy="50" r="10" fill="white" fillOpacity="0.9" />
        </svg>
      )
    case 'font-pairing-suggester':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fontSize="46"
            fontFamily="Georgia, serif"
            fontWeight="bold"
            fill="currentColor"
            opacity="0.9"
          >
            Aa
          </text>
          <line
            x1="15" y1="76" x2="85" y2="76"
            stroke="#7C3AED"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0,70"
              to="70,0"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
      )
    case 'seo-analyzer':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <circle cx="42" cy="42" r="24" fill="none" stroke="currentColor" strokeWidth="6" />
          <line x1="60" y1="60" x2="82" y2="82" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <circle cx="42" cy="42" r="24" fill="none" stroke="#7C3AED" strokeWidth="3" opacity="0">
            <animate attributeName="r" from="24" to="44" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      )
    case 'performance-checker':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 100 100"
        >
          <path
            d="M60 10 L30 52 L50 52 L40 90 L70 48 L50 48 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <clipPath id="fillClipPerf">
            <rect x="0" y="0" width="100" height="100">
              <animate attributeName="y" from="90" to="10" dur="2s" repeatCount="indefinite" />
              <animate attributeName="height" from="0" to="90" dur="2s" repeatCount="indefinite" />
            </rect>
          </clipPath>
          <path
            d="M60 10 L30 52 L50 52 L40 90 L70 48 L50 48 Z"
            fill="#F59E0B"
            clipPath="url(#fillClipPerf)"
          />
        </svg>
      )
    default:
      return null
  }
}

export default function Tools() {
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
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">Free for Everyone</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Free AI
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Tools
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                Build better brands and websites faster. Generate color palettes and
                font pairings, audit your SEO, and check site performance — powered by
                free AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#tools"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors text-center text-sm"
                >
                  Explore the Tools
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border border-border text-foreground rounded-full font-semibold hover:bg-muted/30 transition-colors text-center text-sm bg-white/10 backdrop-blur-md"
                >
                  Request a Custom Tool
                </a>
              </div>
            </div>

            <div className="relative h-72 md:h-96 rounded-2xl border border-border bg-white/10 backdrop-blur-md p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-5"
              >
                <div className="h-32 w-32 flex items-center justify-center rounded-2xl border border-border bg-white/10 backdrop-blur-md">
                  {getToolIcon('color-palette-generator', 84)}
                </div>
                <p className="text-sm text-muted-foreground">Free, fast, and AI-powered</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            id="tools"
          >
            {tools.map((tool) => (
              <motion.div key={tool.id} variants={itemVariants} whileHover={{ y: -5 }} className="h-full">
                <Link
                  href={tool.href}
                  className="card-glow flex items-start gap-6 p-8 group border border-border rounded-xl hover:border-accent hover:bg-accent/5 transition-all h-full bg-white/10 backdrop-blur-md"
                >
                  <div className="shrink-0 mt-1">{getToolIcon(tool.id, 56)}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                      {tool.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {tool.description}
                    </p>
                    <span className="text-accent text-sm font-semibold inline-flex items-center gap-1">
                      Open tool <span>→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Use Our Tools?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Powered',
                  description: 'Built with free AI models for intelligent, practical recommendations.',
                },
                {
                  title: 'Free to Use',
                  description: 'All tools are completely free for our community members.',
                },
                {
                  title: 'Save Time',
                  description: 'Automate tedious tasks and focus on what matters.',
                },
              ].map((benefit) => (
                <motion.div
                  key={benefit.title}
                  whileHover={{ y: -5 }}
                  className="p-8 border border-border rounded-lg hover:border-accent transition-colors bg-white/10 backdrop-blur-md"
                >
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
