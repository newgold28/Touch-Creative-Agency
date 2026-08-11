'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import PageSeo from '@/components/page-seo'
import FAQ from '@/components/faq'
import FaqJsonLd from '@/components/faq-jsonld'

const teamMembers = [
  { name: 'Ugwu Henry C.', role: 'Founder/CEO', image: '/team-img/_NUT2458.png' },
  { name: 'Onyekaike Benita', role: 'CMO', image: '/team-img/_NUT2513.jpg' },
  { name: 'Arinze Richard', role: 'Creative Lead', image: '/team-img/_NUT2514.jpg' },
  { name: 'Paschal Ezenwankwo', role: 'Development Lead', image: '/team-img/_NUT2507.jpg' },
]

const allTeamMembers = [
  ...teamMembers,
  { name: 'Ezekwesiri Lawrence', role: 'Growth Partner', image: '/team-img/_NUT2470.jpg' },
]

export default function About() {
  const [showAllTeam, setShowAllTeam] = useState(false)

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
      <FaqJsonLd />
      <Navbar />
      <PageSeo
        title="About Us | Best Creative Agency in Nigeria & Africa"
        description="Meet Touch Creative Agency — Nigeria's best creative agency. Our story, our values, and the team behind design, branding, marketing, and development for brands across Africa."
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nigeria&apos;s best creative agency. We&apos;re a team of passionate creators
              and technologists dedicated to building digital experiences that matter
              — for brands across Nigeria and Africa.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div className="relative h-96 rounded-2xl border border-border overflow-hidden bg-white/10 backdrop-blur-md">
              <Image
                src="/team-img/_NUT2492.jpg"
                alt="Touch Creative Agency team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2026, Touch Creative Agency was born from one founder&apos;s simple
                observation: great brands need more than just a beautiful website. They need
                design that speaks, marketing that moves, and development that performs — and
                rarely are all three done well under one roof. That&apos;s the gap we set out to
                close.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                What started as a one-person mission with a laptop and a big vision quickly
                grew into a tight-knit crew of designers, marketers, and developers who share
                a single obsession: making things that actually work — and look incredible
                doing it. But Touch isn&apos;t just about solving our clients&apos; problems — it&apos;s a
                home where creatives come together in a friendly, inspiring environment to
                do the best work of their lives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, every project gets the full Touch treatment. We sweat the details, we
                obsess over strategy, and we treat your goals like our own. We don&apos;t just
                build websites — we build momentum, relationships, and results that last.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Creativity',
                  description: 'We build an environment where ideas can breathe — for our clients and for our own makers.',
                },
                {
                  title: 'Collaboration',
                  description: 'We work with our clients and with each other like one friendly, creative crew.',
                },
                {
                  title: 'Community',
                  description: 'Touch is more than an agency — it\'s a home where creatives come together to share, support, and do their best work.',
                },
                {
                  title: 'Impact',
                  description: 'We measure success by the results we deliver for our clients.',
                },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="p-8 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all bg-white/10 backdrop-blur-md"
                >
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(showAllTeam ? allTeamMembers : teamMembers).map((member) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6 h-64 rounded-xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{member.role}</p>
                </motion.div>
              ))}
            </div>

            {/* See More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={() => setShowAllTeam(!showAllTeam)}
                className="px-8 py-3 border border-accent text-accent rounded-full font-semibold hover:bg-accent/10 transition-colors"
              >
                {showAllTeam ? 'Show Less' : 'See More'}
              </button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-t border-b border-border"
          >
            {[
              { label: 'Active Partnerships', value: '1' },
              { label: 'Campaign Onboarding', value: '6 Months' },
              { label: 'Creative Partners', value: '5' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground uppercase tracking-wider text-xs font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  )
}
