'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import PageSeo from '@/components/page-seo'
import CountUp from '@/components/count-up'

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <PageSeo
        title="Our Work & Portfolio | Best Creative Agency in Nigeria & Africa"
        description="Browse Touch Creative Agency's portfolio — web design, branding, video, and campaigns for brands across Nigeria and Africa."
      />
      <main className="min-h-screen pt-32 text-foreground">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">Our Active Clients</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Active clients.
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Every campaign live.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                End-to-end campaigns for brands across Nigeria and Africa. Rather than
                managing dozens of small templates, we dedicate our full resources to
                executing custom growth work for a select number of clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary px-6 py-3 text-sm text-center"
                >
                  Start Your Project
                </Link>
                <Link
                  href="#campaign"
                  className="btn-outline px-6 py-3 text-sm text-center"
                >
                  See the Current Campaign
                </Link>
              </div>
            </div>

            <div className="relative h-72 md:h-96 rounded-2xl border border-border bg-white/10 backdrop-blur-md p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
              <div className="flex-1 flex flex-col items-center justify-center gap-5">
                <div className="h-24 w-24 rounded-2xl bg-white flex items-center justify-center overflow-hidden p-2 shadow-xl shadow-primary/20">
                  <Image src="/skilled-room-logo.png" alt="Skilled Room logo" width={64} height={64} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Skilled Room</h3>
                <p className="text-sm text-muted-foreground">6-month branding &amp; vendor onboarding campaign</p>
              </div>
              <span className="absolute top-4 right-4 text-xs bg-accent/20 text-accent border border-accent/20 px-2.5 py-1 rounded-full font-semibold">
                Active Campaign
              </span>
            </div>
          </motion.div>

          {/* Single Signature Project Feature */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
            id="campaign"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-2xl font-bold uppercase tracking-widest text-accent text-center"
            >
              Current Active Campaign
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="relative group overflow-hidden rounded-2xl border border-border bg-white/10 backdrop-blur-md p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Visual Block */}
                <div className="h-64 md:h-80 bg-white/10 backdrop-blur-md rounded-xl border border-border flex flex-col justify-center p-8 relative overflow-hidden group-hover:border-accent/40 transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
                  <div className="h-20 w-20 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1.5 shadow-lg shadow-primary/20 mb-5">
                    <Image src="/skilled-room-logo.png" alt="Skilled Room logo" width={56} height={56} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-3xl font-extrabold mb-2 tracking-tight">Skilled Room</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">6-month marketing, flyer design, paid ads, and short-form video content creation campaign.</p>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-accent/20 border border-accent/30 text-accent rounded text-xs font-semibold">
                    In Progress
                  </div>
                </div>

                {/* Info Block */}
                <div className="space-y-6">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest block">Featured Client Partner</span>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Skilled Worker Marketplace App</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Helping Skilled Room build their vendor/worker database. We manage the visual design, video marketing, paid advertising, and overall acquisition strategy.
                  </p>

                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-border">
                    <div>
                      <span className="text-xs text-muted-foreground block">Deliverables</span>
                      <span className="font-semibold text-sm">Design, Videos, Ads, Copy</span>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block">Scope</span>
                      <span className="font-semibold text-sm">6 Months Onboarding</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: 1, suffix: '', label: 'Brand Partner' },
                      { value: 6, suffix: ' Mos', label: 'Campaign Runway' },
                      { value: 4, suffix: '', label: 'Service Lines' },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-xl border border-border bg-white/10 backdrop-blur-md">
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          <CountUp value={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/work/skilled-room"
                      className="btn-primary px-6 py-3 text-sm text-center"
                    >
                      View Campaign Details
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-outline px-6 py-3 text-sm text-center"
                    >
                      Discuss Your Project
                    </Link>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {[
                      { href: '/work/skilled-room', label: 'Project Overview' },
                      { href: '/work/skilled-room/content', label: 'Content Production' },
                      { href: '/work/skilled-room/graphics', label: 'Graphics' },
                    ].map((section) => (
                      <Link
                        key={section.href}
                        href={section.href}
                        className="px-4 py-2 rounded-full border border-border bg-white/5 text-sm text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors text-center"
                      >
                        {section.label}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-border rounded-2xl p-12 md:p-20 text-center mt-24"
          >
            <h2 className="text-4xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s create something amazing together. Get in touch with us today.
            </p>
            <Link
              href="/contact"
              className="btn-primary px-8 py-4"
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
