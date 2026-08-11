'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

type Author = {
  name: string
  role: string
  image: string
}

export default function BlogPostLayout({
  category,
  title,
  date,
  readTime,
  author,
  hero,
  children,
}: {
  category: string
  title: string
  date: string
  readTime: string
  author: Author
  hero: { src: string; alt: string }
  children: React.ReactNode
}) {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="min-h-screen pt-32">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              {category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-2">
                <Image
                  src={author.image}
                  alt={author.name}
                  width={28}
                  height={28}
                  className="rounded-full object-cover"
                />
                {author.name}
              </span>
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-10 rounded-xl overflow-hidden border border-border aspect-[16/9] bg-white/10 backdrop-blur-md"
          >
            <Image
              src={hero.src}
              alt={hero.alt}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-6 leading-relaxed [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:text-lg [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ul]:text-lg [&_strong]:text-foreground">
            {children}
          </div>

          {/* Author card */}
          <div className="mt-16 p-6 rounded-xl border border-border bg-white/10 backdrop-blur-md flex items-center gap-4">
            <Image
              src={author.image}
              alt={author.name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-foreground">{author.name}</p>
              <p className="text-sm text-muted-foreground">
                {author.role} at Touch Creative Agency
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-white/10 backdrop-blur-md p-10 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Need help putting this into practice?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Our team lives and breathes this stuff. Explore our services or let&apos;s
              talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services" className="btn-outline px-6 py-3.5 inline-flex">
                See Our Services
              </Link>
              <Link href="/about" className="text-sm font-semibold text-accent hover:underline">
                About Touch Creative Agency
              </Link>
              <Link href="/contact" className="btn-primary px-8 py-4 inline-flex">
                Start a Project
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
