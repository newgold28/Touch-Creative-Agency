'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

const teamMembers = [
  { name: 'Ugwu Henry C.', role: 'Founder/CEO', image: '/team-img/_NUT2458.png' },
  { name: 'Onyekaike Benita', role: 'CMO', image: '/team-img/_NUT2513.jpg' },
  { name: 'Arinze Richard', role: 'Lead Video Editor', image: '/team-img/_NUT2514.jpg' },
  { name: 'Ezekwesiri Lawrence', role: 'Growth Partner', image: '/team-img/_NUT2470.jpg' },
]

const allTeamMembers = [
  ...teamMembers,
  { name: 'Paschal Ezenwankwo', role: 'Lead web developer', image: '/team-img/_NUT2507.jpg' },
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
      <Navbar />
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
              We&apos;re a team of passionate creators and technologists dedicated to
              building digital experiences that matter.
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
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-border flex items-center justify-center overflow-hidden">
              <img src="/team-img/_NUT2492.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2020, Touch Creative Agency emerged from a simple belief: great
                design and development shouldn&apos;t be complicated. We started as a small
                team of three and have grown into a diverse collective of thinkers, makers,
                and innovators.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every project we undertake is an opportunity to push boundaries and create
                work that resonates. We don&apos;t just build websites; we build relationships
                and drive meaningful change for our clients.
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
                  title: 'Excellence',
                  description: 'We obsess over details and never settle for good enough.',
                },
                {
                  title: 'Innovation',
                  description: 'We embrace new technologies and creative approaches.',
                },
                {
                  title: 'Collaboration',
                  description: 'We work closely with our clients as true partners.',
                },
                {
                  title: 'Impact',
                  description: 'We measure success by the results we deliver.',
                },
              ].map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="p-8 border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all"
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
                  <div className="mb-6 h-64 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center text-8xl mx-auto overflow-hidden">
                    {member.image.startsWith('/') ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      member.image
                    )}
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
              { label: 'Projects Completed', value: '120+' },
              { label: 'Happy Clients', value: '95+' },
              { label: 'Team Members', value: '18' },
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
        </section>
      </main>
      <Footer />
    </>
  )
}
