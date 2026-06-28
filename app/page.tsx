'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import Testimonials from '@/components/testimonials'
import Stats from '@/components/stats'

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
      <Navbar />
      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
              Creative Excellence
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                for Modern Brands
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              We craft digital experiences that captivate, engage, and convert. From
              stunning design to powerful development, we deliver results.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors text-center"
              >
                Start Your Project
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 border border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition-colors text-center"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </section>

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
              <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
              <p className="text-muted-foreground mb-6">
                Each project represents our commitment to excellence, creativity, and
                results. We partner with ambitious brands to build digital products
                that stand out.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-semibold"
              >
                Explore all projects
                <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="h-48 md:h-56 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border flex items-center justify-center text-center p-4 cursor-pointer"
                >
                  <span className="text-muted-foreground">Project {i}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Services Preview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your digital presence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Web Design',
                description: 'Beautiful, functional designs that capture your brand identity',
              },
              {
                title: 'Development',
                description: 'Robust, scalable solutions built with modern technologies',
              },
              {
                title: 'Digital Strategy',
                description: 'Strategic guidance to maximize your digital impact',
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 border border-border rounded-lg hover:border-accent transition-colors group cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
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
            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-2xl p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's work together to create something extraordinary.
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

        {/* Testimonials Section */}
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
