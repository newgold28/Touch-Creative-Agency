'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Twitter, Linkedin, Instagram, MessageCircle, ArrowUpRight } from 'lucide-react'
import { TikTokIcon } from '@/components/ui/tiktok-icon'
import { useState } from 'react'

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Portfolio', href: '/work' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Tools', href: '/tools' },
      { label: 'Guides', href: '/blog' },
      { label: 'Case Studies', href: '/work' },
      { label: 'Newsletter', href: '/newsletter' },
    ],
  },
]

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/touchcreativeagency/', icon: Instagram },
  { name: 'TikTok', href: 'https://www.tiktok.com/@touchcreativeagency', icon: TikTokIcon },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        setStatus('error')
        return
      }
      setEmail('')
      setStatus('done')
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-border bg-white/10 backdrop-blur-md p-10 md:p-14 text-center mb-16"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let&apos;s build something great.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Tell us about your project and we&apos;ll get back to you with a clear plan.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex px-8 py-4"
          >
            Start a Project
            <ArrowUpRight size={18} className="ml-2" />
          </Link>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="lg:col-span-1">
            <div className="flex items-center mb-4" suppressHydrationWarning>
              <Image
                src="/logo.png"
                alt="Touch Creative Agency"
                width={250}
                height={48}
                className="h-12 w-auto object-contain block"
                priority
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A small creative agency building big ideas for modern brands.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    title={social.name}
                    target={social.href !== '#' ? '_blank' : undefined}
                    rel={social.href !== '#' ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-full border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all group bg-white/10 backdrop-blur-md"
                  >
                    <IconComponent size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                )
              })}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:gap-3 transition-all"
            >
              <MessageCircle size={16} />
              Message us
            </Link>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="lg:col-span-1">
              <h3 className="text-foreground font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="lg:col-span-1">
            <h3 className="text-foreground font-semibold mb-6">Stay in the loop</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Design ideas and agency insights, no spam.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-border rounded-full text-sm focus:border-accent focus:outline-none transition-colors min-w-0"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary px-5 py-3 text-sm shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {status === 'done' && (
              <p className="text-sm text-accent mt-3">You&apos;re on the list. Check your inbox!</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400 mt-3">
                Couldn&apos;t subscribe right now. Email us at info@touchcreativeagency.com.
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Touch Creative Agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
