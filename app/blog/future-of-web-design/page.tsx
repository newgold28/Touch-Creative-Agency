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
          {/* Header */}
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
              The Future of Web Design in 2024
            </h1>
            <div className="flex flex-wrap gap-4 items-center text-muted-foreground">
              <span>June 15, 2024</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Design</span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-96 md:h-[500px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center text-8xl mb-16"
          >
            🎨
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 mb-16"
          >
            <section>
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Web design has evolved dramatically over the past few years, and 2024 marks a turning
                point in how we approach digital design. With new technologies, changing user expectations,
                and evolving best practices, designers need to stay ahead of the curve.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In this article, we'll explore the key trends and technologies shaping the future of
                web design.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">1. AI-Powered Design Tools</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Artificial intelligence is revolutionizing the design process. From automated layout
                suggestions to intelligent color palette generation, AI tools are making design more
                accessible and efficient than ever before. Designers can now focus on creative direction
                while AI handles repetitive tasks.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Immersive Experiences</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                3D graphics, WebGL, and interactive animations are becoming standard in web design.
                Users expect engaging, interactive experiences that go beyond static content. This trend
                is reshaping how we think about user engagement and storytelling on the web.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. Dark Mode Everything</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dark mode has moved beyond being a nice-to-have feature to being an essential design
                consideration. It's not just about aesthetics; dark mode reduces eye strain and saves
                battery life, making it a user preference that designers can't ignore.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Accessibility First</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Accessibility is no longer an afterthought. In 2024, designing with accessibility in
                mind from the start is a best practice. This includes proper color contrast, keyboard
                navigation, screen reader support, and more. Accessible design is good design.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Sustainability in Design</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As environmental concerns grow, web designers are focusing on creating sustainable
                digital experiences. This includes optimizing performance to reduce carbon footprints,
                using efficient assets, and promoting sustainable practices in the digital space.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The future of web design is exciting and full of possibilities. By embracing these trends
                and staying updated with emerging technologies, designers can create experiences that are
                not only beautiful but also functional, accessible, and meaningful. The key is to balance
                innovation with user needs and accessibility.
              </p>
            </section>
          </motion.div>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 border border-border rounded-lg mb-16"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="text-6xl">👨‍✍️</div>
              <div>
                <h3 className="text-xl font-bold">Alex Johnson</h3>
                <p className="text-muted-foreground">Design Director at Touch Creative Agency</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Alex is a passionate designer with over 8 years of experience in web and digital design.
              He's dedicated to creating beautiful, functional digital experiences that users love.
            </p>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'UX Design Principles That Work',
                  date: 'May 28, 2024',
                  slug: 'ux-design-principles',
                },
                {
                  title: 'Accessibility in Modern Web Design',
                  date: 'May 12, 2024',
                  slug: 'web-accessibility',
                },
              ].map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 border border-border rounded-lg hover:border-accent transition-colors cursor-pointer"
                  >
                    <h3 className="text-xl font-bold mb-2 hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{post.date}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  )
}
