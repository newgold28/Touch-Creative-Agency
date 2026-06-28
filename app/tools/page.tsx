'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import ColorPaletteGenerator from '@/components/tools/color-palette-generator'
import FontPairingGenerator from '@/components/tools/font-pairing-generator'

const tools = [
  {
    id: 'palette',
    title: 'AI Color Palette Generator',
    description: 'Generate beautiful color palettes for your projects using AI.',
    icon: '🎨',
  },
  {
    id: 'fonts',
    title: 'Font Pairing Suggester',
    description: 'Get AI-powered font pairing recommendations for your designs.',
    icon: '📝',
  },
  {
    id: 'seo',
    title: 'SEO Analyzer',
    description: 'Analyze and optimize your website for search engines.',
    icon: '📊',
  },
  {
    id: 'perf',
    title: 'Performance Checker',
    description: 'Check your website performance and get optimization suggestions.',
    icon: '⚡',
  },
]

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState('palette')

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
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Developer Tools</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powered by AI, these tools help you build better websites and
              applications faster.
            </p>
          </motion.div>

          {/* Tools Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {tools.map((tool) => (
              <motion.button
                key={tool.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTool(tool.id)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  selectedTool === tool.id
                    ? 'border-accent bg-accent/10'
                    : 'border-border hover:border-accent'
                }`}
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="font-bold mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Tool Content */}
          <motion.div
            key={selectedTool}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12"
          >
            {selectedTool === 'palette' && <ColorPaletteGenerator />}
            {selectedTool === 'fonts' && <FontPairingGenerator />}
            {selectedTool === 'seo' && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📊</div>
                <h2 className="text-3xl font-bold mb-4">SEO Analyzer</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  This tool is coming soon. We&apos;re building a comprehensive SEO
                  analysis and optimization tool.
                </p>
                <div className="inline-block px-6 py-3 bg-primary/20 text-accent rounded-lg">
                  Coming Soon
                </div>
              </div>
            )}
            {selectedTool === 'perf' && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">⚡</div>
                <h2 className="text-3xl font-bold mb-4">Performance Checker</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  This tool is coming soon. We&apos;re developing a website performance
                  analysis tool.
                </p>
                <div className="inline-block px-6 py-3 bg-primary/20 text-accent rounded-lg">
                  Coming Soon
                </div>
              </div>
            )}
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
                  description: 'Built with advanced AI models for intelligent recommendations.',
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
                  className="p-8 border border-border rounded-lg hover:border-accent transition-colors"
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
