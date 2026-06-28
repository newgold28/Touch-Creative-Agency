'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

export default function BlogPost() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="min-h-screen pt-32">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link
              href="/blog"
              className="text-accent hover:text-accent/80 transition-colors mb-6 inline-flex items-center"
            >
              ← Back to Blog
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              React 19: What&apos;s New and What You Need to Know
            </h1>
            <div className="flex flex-wrap gap-4 items-center text-muted-foreground">
              <span>June 10, 2024</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Development</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-96 md:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center text-8xl mb-16"
          >
            ⚛️
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 mb-16"
          >
            <section>
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                React 19 brings significant improvements and new features that enhance developer
                experience and application performance. In this comprehensive guide, we explore the
                key updates and how to leverage them in your projects.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Key Features in React 19</h2>
              <ul className="space-y-4">
                {[
                  'Enhanced Server Components for better performance',
                  'Improved Hooks API with new utilities',
                  'Better TypeScript support and type safety',
                  'Automatic memoization for optimized rendering',
                  'New Suspense capabilities',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Migration Guide</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Upgrading to React 19 is straightforward for most projects. The framework maintains
                backward compatibility while introducing opt-in features for new capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                React 19 represents a significant step forward in the evolution of the React framework.
                Whether you're building new applications or maintaining existing ones, understanding
                these new features will help you build better React applications.
              </p>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 border border-border rounded-lg"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="text-6xl">👨‍💻</div>
              <div>
                <h3 className="text-xl font-bold">Sarah Chen</h3>
                <p className="text-muted-foreground">Lead Developer at Touch Creative Agency</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Sarah is a passionate full-stack developer specializing in React and modern JavaScript.
              She loves helping others learn and grow in their development journey.
            </p>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  )
}
