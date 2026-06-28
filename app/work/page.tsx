'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Development',
    description: 'Full-featured e-commerce platform with payment integration',
    image: '🛒',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/work/ecommerce',
  },
  {
    id: 2,
    title: 'Corporate Website',
    category: 'Design',
    description: 'Modern corporate website with engaging animations',
    image: '🏢',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '/work/corporate',
  },
  {
    id: 3,
    title: 'Mobile App Design',
    category: 'Design',
    description: 'Mobile app UI/UX design for a fintech startup',
    image: '📱',
    tags: ['Figma', 'Design System', 'Prototyping'],
    link: '/work/mobile-app',
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Development',
    description: 'Analytics dashboard for a SaaS platform',
    image: '📊',
    tags: ['React', 'TypeScript', 'D3.js'],
    link: '/work/saas-dashboard',
  },
  {
    id: 5,
    title: 'Content Platform',
    category: 'Strategy',
    description: 'Content management and publishing platform',
    image: '📝',
    tags: ['Next.js', 'CMS', 'SEO'],
    link: '/work/content-platform',
  },
  {
    id: 6,
    title: 'Brand Identity',
    category: 'Design',
    description: 'Complete brand identity for a tech startup',
    image: '🎨',
    tags: ['Branding', 'Visual Identity', 'Guidelines'],
    link: '/work/brand-identity',
  },
]

const categories = ['All', 'Design', 'Development', 'Strategy']

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the projects we&apos;re proud of. Each one represents our
              commitment to excellence and innovation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border hover:border-accent text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Link href={project.link} className="group cursor-pointer block h-full">
                  <div className="relative overflow-hidden rounded-xl border border-border hover:border-accent transition-all h-full flex flex-col">
                    {/* Project Image */}
                    <div className="h-48 md:h-56 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="mb-3">
                        <span className="text-xs text-accent font-semibold uppercase">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-primary/20 text-accent rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-2xl p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s create something amazing together. Get in touch with us today.
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
