'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

export default function EcommerceCaseStudy() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="min-h-screen pt-32">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link
              href="/work"
              className="text-accent hover:text-accent/80 transition-colors mb-6 inline-flex items-center"
            >
              ← Back to Work
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">E-Commerce Platform</h1>
            <p className="text-xl text-muted-foreground">
              A complete e-commerce solution built with cutting-edge technologies
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-96 md:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center text-8xl mb-16"
          >
            🛒
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-border"
          >
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase mb-4">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground mb-1">Client</p>
                  <p className="font-semibold">Fashion & Retail Brand</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Timeline</p>
                  <p className="font-semibold">6 months</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Category</p>
                  <p className="font-semibold">E-commerce Development</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Services</p>
                  <p className="font-semibold">Design, Development, Testing</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-accent uppercase mb-4">Technologies</h3>
              <div className="space-y-2">
                {['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 bg-primary/20 text-accent rounded-full text-sm mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The client needed a modern e-commerce platform that could handle high traffic volumes
              while providing an exceptional user experience. Their previous system was outdated and
              unable to scale with their growing business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Key requirements included seamless payment processing, real-time inventory management,
              mobile responsiveness, and analytics integration.
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 pb-16 border-b border-border"
          >
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We built a comprehensive e-commerce platform from the ground up using modern technologies.
              The platform includes:
            </p>
            <ul className="space-y-4 mb-6">
              {[
                'High-performance product catalog with advanced filtering',
                'Integrated payment processing with multiple payment methods',
                'Real-time inventory management system',
                'User authentication and order management',
                'Mobile-first responsive design',
                'Analytics and reporting dashboard',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { label: 'Revenue Increase', value: '240%' },
              { label: 'Site Performance', value: '98/100' },
              { label: 'Conversion Rate', value: '+45%' },
            ].map((result) => (
              <div key={result.label} className="p-6 border border-border rounded-lg">
                <p className="text-muted-foreground text-sm mb-2">{result.label}</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {result.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Interested in a Similar Project?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Get in touch to discuss your project.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Project
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
