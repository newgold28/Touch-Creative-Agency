'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Design in 2024',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web design.',
    category: 'Design',
    date: 'June 15, 2024',
    readTime: '5 min read',
    image: '🎨',
    slug: 'future-of-web-design',
  },
  {
    id: 2,
    title: 'React 19: What\'s New and What You Need to Know',
    excerpt: 'A deep dive into the latest features and improvements in React 19.',
    category: 'Development',
    date: 'June 10, 2024',
    readTime: '8 min read',
    image: '⚛️',
    slug: 'react-19-guide',
  },
  {
    id: 3,
    title: 'Building High-Performance Web Applications',
    excerpt: 'Best practices and strategies for optimizing your web applications.',
    category: 'Performance',
    date: 'June 5, 2024',
    readTime: '6 min read',
    image: '⚡',
    slug: 'performance-optimization',
  },
  {
    id: 4,
    title: 'UX Design Principles That Work',
    excerpt: 'Essential UX principles that every designer should know.',
    category: 'Design',
    date: 'May 28, 2024',
    readTime: '7 min read',
    image: '🎯',
    slug: 'ux-design-principles',
  },
  {
    id: 5,
    title: 'The Business Case for Investing in Web Development',
    excerpt: 'Why investing in quality web development can transform your business.',
    category: 'Business',
    date: 'May 20, 2024',
    readTime: '5 min read',
    image: '💼',
    slug: 'web-development-business',
  },
  {
    id: 6,
    title: 'Accessibility in Modern Web Design',
    excerpt: 'Creating inclusive web experiences for all users.',
    category: 'Accessibility',
    date: 'May 12, 2024',
    readTime: '6 min read',
    image: '♿',
    slug: 'web-accessibility',
  },
]

export default function Blog() {
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tips, and trends from our team. Stay updated with the latest
              in web design and development.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl border border-border hover:border-accent transition-all mb-6">
                  <div className="h-80 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                    {blogPosts[0].image}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-4 items-center mb-4">
                    <span className="text-xs text-accent font-semibold uppercase bg-accent/10 px-3 py-1 rounded-full">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {blogPosts[0].date}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-lg text-muted-foreground">{blogPosts[0].excerpt}</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.slice(1).map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group cursor-pointer h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-xl border border-border hover:border-accent transition-all mb-6">
                      <div className="h-48 md:h-56 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                        {post.image}
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex gap-3 items-center mb-3">
                        <span className="text-xs text-accent font-semibold uppercase">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                      {post.date}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-r from-primary/10 to-accent/10 border border-border rounded-2xl p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest insights, tips, and trends delivered to your inbox every
              week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-card border border-border rounded-full focus:border-accent focus:outline-none transition-colors"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
