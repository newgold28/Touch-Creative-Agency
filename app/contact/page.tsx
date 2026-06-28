'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
// FIXED: Replaced Phone icon with MessageCircle (the perfect chat/bubble representation for WhatsApp since Lucide does not have brand icons)
import { Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

// FIXED: Swapped out Phone icon with MessageCircle for an authentic chat bubble design
const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'WhatsApp', href: 'https://wa.me', icon: MessageCircle },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
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
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg font-bold mb-3 text-accent">Email</h3>
                <a
                  href="mailto:info@touchcreativeagency.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@touchcreativeagency.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-accent">Phone</h3>
                <a
                  href="tel:+2349161783147"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +234 916 178 3147
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-accent">Address</h3>
                <p className="text-muted-foreground">
                  Lagos
                  <br />
                 Nigeria
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-accent">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-accent">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        title={social.name}
                        target={social.name === 'WhatsApp' ? '_blank' : undefined}
                        rel={social.name === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                        className="w-12 h-12 rounded-full border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all group"
                      >
                        <IconComponent 
                          size={20} 
                          className="text-muted-foreground group-hover:text-accent transition-colors" 
                        />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="lg:col-span-2 space-y-6"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-accent/10 border border-accent rounded-xl text-center"
                >
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2 text-accent">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We&apos;ve received your message and will get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </>
              )}
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
