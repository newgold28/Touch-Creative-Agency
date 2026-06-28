'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import Link from 'next/link'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send to your backend
    console.log('Newsletter signup:', email)
    setSubmitted(true)
    setTimeout(() => {
      setEmail('')
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      <ParticleBackground />
      <Navbar />
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
            className="bg-gradient-to-br from-primary/10 to-accent/10 border border-border rounded-2xl p-12 md:p-20"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">✓</div>
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
                    className="w-full px-6 py-4 bg-card border border-border rounded-lg focus:border-accent focus:outline-none transition-colors text-lg"
                    placeholder="your@email.com"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg"
                >
                  Subscribe
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
              {[
                {
                  title: 'Design Trends',
                  description: 'Stay updated with the latest design trends and best practices.',
                  icon: '🎨',
                },
                {
                  title: 'Dev Tips',
                  description: 'Practical development tips to improve your coding skills.',
                  icon: '💻',
                },
                {
                  title: 'Case Studies',
                  description: 'In-depth analysis of successful projects and campaigns.',
                  icon: '📚',
                },
                {
                  title: 'Tools & Resources',
                  description: 'Curated tools and resources to enhance your workflow.',
                  icon: '🛠️',
                },
                {
                  title: 'Industry News',
                  description: 'Important updates and news from the tech industry.',
                  icon: '📰',
                },
                {
                  title: 'Community',
                  description: 'Connect with other designers and developers in our community.',
                  icon: '👥',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  className="p-6 border border-border rounded-lg hover:border-accent transition-colors"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
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
                  className="p-8 border border-border rounded-lg hover:border-accent transition-all"
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
