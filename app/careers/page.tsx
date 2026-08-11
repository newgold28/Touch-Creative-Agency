'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import PageSeo from '@/components/page-seo'
import { ArrowUpRight, Briefcase, Sparkles, Send, Bell } from 'lucide-react'

const lifeImages = [
  { src: '/team-img/_NUT2496.jpg', alt: 'Touch Creative Agency team at work' },
  { src: '/team-img/_NUT2499.jpg', alt: 'Touch Creative Agency brainstorming' },
  { src: '/team-img/_NUT2500.jpg', alt: 'Touch Creative Agency in a meeting' },
]

const values = [
  {
    icon: Sparkles,
    title: 'Creativity',
    description: 'We build an environment where ideas can breathe — for our clients and for each other.',
  },
  {
    icon: Briefcase,
    title: 'Creative Autonomy',
    description: 'Great work comes from people trusted to take real ownership.',
  },
  {
    icon: Bell,
    title: 'Community',
    description: 'Touch is a home where creatives come together to share, support, and grow.',
  },
]

const perks = [
  { title: 'Work on real, visible projects', description: 'No busywork — your work reaches real clients.' },
  { title: 'Learn and level up constantly', description: 'New tools, new disciplines, new challenges.' },
  { title: 'A small, supportive team', description: 'Everyone knows your name — and your strengths.' },
]

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

export default function Careers() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <PageSeo
        title="Careers | Join Nigeria's Best Creative Agency"
        description="Careers at Touch Creative Agency — a home where creatives come together in a friendly, inspiring environment. Not hiring right now, but great people are always on our radar."
      />
      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-accent mb-6">
              Careers at Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Join the <span className="text-accent">Touch</span> team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re a small creative agency building big ideas for modern brands.
              Talented, driven people are always on our radar.
            </p>
          </motion.div>

          {/* Status Notice */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-accent/30 bg-white/10 backdrop-blur-md p-10 md:p-14 text-center mb-24"
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              We&apos;re not hiring right now
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              We&apos;re not taking anyone for now — but we&apos;re always happy to meet
              great people. Reach out and introduce yourself; when a role opens up,
              we&apos;ll reach out first to people we already know.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
                Get in Touch
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:border-accent hover:bg-accent/10 transition-all bg-white/10 backdrop-blur-md"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>

          {/* Open Positions Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-4 text-center">Open Positions</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Check back here for open roles. Right now, there are none.
            </p>

            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <Briefcase size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">No open roles right now</h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                We&apos;re not accepting applications at the moment. When we do open a
                role, it will show up here first — and we&apos;ll announce it on our
                socials too.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                <Send size={16} />
                Say hello anyway
              </Link>
            </motion.div>
          </motion.div>

          {/* Life at Touch Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Life at Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lifeImages.map((img) => (
                <motion.div
                  key={img.src}
                  variants={itemVariants}
                  className="relative h-80 rounded-2xl border border-border overflow-hidden bg-white/10 backdrop-blur-md"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values & Perks Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    className="rounded-2xl border border-border bg-card p-8"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="rounded-2xl border border-border bg-card p-10 md:p-12">
              <h3 className="text-2xl font-bold mb-8 text-center">What working with us is like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {perks.map((perk, i) => (
                  <motion.div key={perk.title} variants={itemVariants} className="text-center">
                    <span className="text-4xl font-bold text-accent block mb-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-semibold mb-2">{perk.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {perk.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Band */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-border bg-white/10 backdrop-blur-md p-10 md:p-14 text-center"
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-primary/25 blur-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Not hiring — but let&apos;s stay connected.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Tell us a little about yourself and what you&apos;d love to work on.
              When we&apos;re ready to grow the team, we&apos;ll come to you first.
            </p>
            <Link href="/contact" className="btn-primary inline-flex px-8 py-4">
              Introduce Yourself
              <ArrowUpRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
