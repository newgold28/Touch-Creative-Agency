'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import { tools } from '@/lib/tools'

export default function ToolPageLayout({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="min-h-screen pt-32">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Free AI Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </section>

        {/* Tool sub-navigation */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2"
            aria-label="Other tools"
          >
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  pathname === tool.href
                    ? 'bg-accent/15 border-accent text-accent'
                    : 'border-border text-muted-foreground hover:border-accent hover:text-foreground bg-white/10 backdrop-blur-md'
                }`}
              >
                {tool.shortLabel}
              </Link>
            ))}
          </motion.nav>
        </section>

        {/* Tool body */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white/10 backdrop-blur-md border border-border rounded-2xl p-6 md:p-10"
          >
            {children}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
