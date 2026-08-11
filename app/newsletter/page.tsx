'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import PageSeo from '@/components/page-seo'
import Link from 'next/link'

/** Inline SVG checkmark icon */
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent mt-0.5 shrink-0"
    >
      <polyline points="4 12 9 17 20 7" />
    </svg>
  )
}

/** Large success checkmark SVG for the submitted state */
function BigCheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#60a5fa"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-4"
    >
      <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeOpacity="0.5" />
      <polyline points="7 12 10 15 17 9" />
    </svg>
  )
}

/** Benefit card icon by id */
function getBenefitIcon(id: string) {
  const C1 = '#2563eb'
  const C2 = '#60a5fa'

  if (id === 'design') {
    return (
      <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill={C1} fillOpacity="0.12" />
        <rect x="8" y="12" width="24" height="4" rx="2" fill={C1} fillOpacity="0.8" />
        <rect x="8" y="19" width="16" height="3" rx="1.5" fill={C2} fillOpacity="0.7" />
        <rect x="8" y="25" width="20" height="3" rx="1.5" fill={C2} fillOpacity="0.5" />
      </svg>
    )
  }
  if (id === 'dev') {
    return (
      <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill={C1} fillOpacity="0.12" />
        <polyline points="10,20 16,14 10,8" fill="none" stroke={C2} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="18" y1="26" x2="30" y2="26" stroke={C1} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (id === 'case') {
    return (
      <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill={C1} fillOpacity="0.12" />
        <rect x="10" y="8" width="20" height="24" rx="3" fill="none" stroke={C2} strokeWidth="1.8" />
        <line x1="14" y1="15" x2="26" y2="15" stroke={C1} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="20" x2="26" y2="20" stroke={C1} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="25" x2="20" y2="25" stroke={C1} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (id === 'tools') {
    return (
      <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill={C1} fillOpacity="0.12" />
        <path d="M12 28 L20 12 L28 28 Z" fill="none" stroke={C2} strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="20" cy="22" r="3" fill={C1} fillOpacity="0.7" />
      </svg>
    )
  }
  if (id === 'news') {
    return (
      <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill={C1} fillOpacity="0.12" />
        <circle cx="20" cy="20" r="10" fill="none" stroke={C2} strokeWidth="1.8" />
        <line x1="20" y1="12" x2="20" y2="20" stroke={C1} strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="20" x2="26" y2="24" stroke={C1} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  // community
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill={C1} fillOpacity="0.12" />
      <circle cx="15" cy="17" r="5" fill="none" stroke={C2} strokeWidth="1.8" />
      <circle cx="25" cy="17" r="5" fill="none" stroke={C1} strokeWidth="1.8" />
      <path d="M8 32 Q15 26 22 32" fill="none" stroke={C2} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 32 Q25 26 32 32" fill="none" stroke={C1} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

const benefits = [
  {
    id: 'design',
    title: 'Design Trends',
    description: 'Stay updated with the latest design trends and best practices.',
  },
  {
    id: 'dev',
    title: 'Dev Tips',
    description: 'Practical development tips to improve your coding skills.',
  },
  {
    id: 'case',
    title: 'Case Studies',
    description: 'In-depth analysis of successful projects and campaigns.',
  },
  {
    id: 'tools',
    title: 'Tools & Resources',
    description: 'Curated tools and resources to enhance your workflow.',
  },
  {
    id: 'news',
    title: 'Industry News',
    description: 'Important updates and news from the tech industry.',
  },
  {
    id: 'community',
    title: 'Community',
    description: 'Connect with other designers and developers in our community.',
  },
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setFormError('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setFormError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
      setEmail('')
    } catch {
      setFormError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <PageSeo
        title="Newsletter | Touch Creative Agency"
        description="Subscribe to Touch Creative Agency's newsletter — design ideas and agency insights for brands in Nigeria and Africa."
      />
      <main className="min-h-screen pt-32">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Newsletter</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get curated insights, tips, and trends delivered to your inbox every week.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-border rounded-2xl p-12 md:p-20"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <BigCheckIcon />
                <h2 className="text-3xl font-bold mb-2 text-accent">Welcome!</h2>
                <p className="text-muted-foreground">
                  Check your email to confirm your subscription.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-3">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-lg"
                    placeholder="your@email.com"
                  />
                </div>
                {formError && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                    {formError}
                  </p>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitting}
                  className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Subscribing...' : 'Subscribe'}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* What You'll Get */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">What You&apos;ll Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  className="p-6 border border-border rounded-lg hover:border-accent transition-colors bg-white/10 backdrop-blur-md"
                >
                  <div className="mb-4">{getBenefitIcon(item.id)}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Subscribers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: 'John Doe',
                  role: 'Product Designer',
                  quote:
                    'The newsletter is a goldmine of insights. I look forward to it every week!',
                },
                {
                  name: 'Sarah Smith',
                  role: 'Full Stack Developer',
                  quote:
                    'Great curated content that saves me hours of research. Highly recommended!',
                },
              ].map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 border border-border rounded-lg hover:border-accent transition-all bg-white/10 backdrop-blur-md"
                >
                  <p className="text-lg mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Want to explore more content?
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-semibold"
            >
              Browse our blog
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
