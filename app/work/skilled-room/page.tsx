'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'

function getServiceIcon(title: string) {
  if (title === 'Brand & Flyer Design') {
    // Pen/brush stroke SVG with animated path drawing
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 100 100">
        {/* Pen body */}
        <path
          d="M70 10 L85 25 L35 75 L15 80 L20 60 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Brush stroke — animated draw-in */}
        <path
          d="M20 82 Q40 70 65 78 Q80 83 90 75"
          fill="none"
          stroke="#7C3AED"
          strokeWidth="3.5"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dasharray"
            from="0, 100"
            to="100, 0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    )
  }

  if (title === 'Social Media Management') {
    // Three overlapping circles with animated connection lines
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 100 100">
        {/* Connection lines */}
        <line x1="30" y1="35" x2="50" y2="65" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
        </line>
        <line x1="70" y1="35" x2="50" y2="65" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
        </line>
        <line x1="30" y1="35" x2="70" y2="35" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.4s" repeatCount="indefinite" />
        </line>
        {/* Three circles */}
        <circle cx="30" cy="35" r="16" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="70" cy="35" r="16" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="50" cy="68" r="16" fill="none" stroke="currentColor" strokeWidth="3.5" />
      </svg>
    )
  }

  if (title === 'Video & Content Creation') {
    // Play button with animated progress bar
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 100 100">
        {/* Rounded rect screen */}
        <rect x="8" y="8" width="84" height="66" rx="8" fill="none" stroke="currentColor" strokeWidth="3.5" />
        {/* Play triangle */}
        <polygon points="38,28 38,56 68,42" fill="currentColor" opacity="0.8" />
        {/* Progress bar track */}
        <rect x="8" y="84" width="84" height="8" rx="4" fill="currentColor" opacity="0.15" />
        {/* Progress bar fill */}
        <rect x="8" y="84" width="0" height="8" rx="4" fill="#EC4899">
          <animate attributeName="width" from="0" to="84" dur="2.5s" repeatCount="indefinite" />
        </rect>
      </svg>
    )
  }

  if (title === 'Ads & Lead Generation') {
    // Rising funnel with animated particles
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 100 100">
        {/* Funnel shape */}
        <path
          d="M10 15 L90 15 L62 50 L62 82 L38 82 L38 50 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Particle 1 — top to funnel */}
        <circle cx="30" cy="15" r="4" fill="#F59E0B" opacity="0">
          <animate attributeName="cy" from="5" to="80" dur="1.8s" repeatCount="indefinite" begin="0s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.7;1" dur="1.8s" repeatCount="indefinite" begin="0s" />
        </circle>
        {/* Particle 2 */}
        <circle cx="50" cy="15" r="4" fill="#F59E0B" opacity="0">
          <animate attributeName="cy" from="5" to="80" dur="1.8s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.7;1" dur="1.8s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        {/* Particle 3 */}
        <circle cx="70" cy="15" r="4" fill="#F59E0B" opacity="0">
          <animate attributeName="cy" from="5" to="80" dur="1.8s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.7;1" dur="1.8s" repeatCount="indefinite" begin="1s" />
        </circle>
      </svg>
    )
  }

  return null
}

const services = [
  {
    title: 'Brand & Flyer Design',
    desc: 'Creating professional brand assets, marketing flyers, and app teaser designs to establish trust.',
  },
  {
    title: 'Social Media Management',
    desc: 'Strategic content calendar and community building on Instagram, TikTok, and Facebook.',
  },
  {
    title: 'Video & Content Creation',
    desc: 'High-converting short-form videos and copywriting showcasing app benefits to workers.',
  },
  {
    title: 'Ads & Lead Generation',
    desc: 'Targeted campaigns to acquire and onboard top-tier skilled vendors onto the platform.',
  },
]

const milestones = [
  { month: 'Month 1', title: 'Branding & Social Launch', status: 'completed', desc: 'Established visual identity and initial organic teaser posts.' },
  { month: 'Month 2', title: 'Video Teaser Campaign', status: 'completed', desc: 'Released high-production short-form video explainers for vendors.' },
  { month: 'Month 3', title: 'Paid Ads & Lead Capture', status: 'active', desc: 'Onboarding vendors via high-performance targeted ad campaigns.' },
  { month: 'Month 4', title: 'Vendor Vetting & Verification', status: 'upcoming', desc: 'Pre-qualifying registered service providers for launch readiness.' },
  { month: 'Month 5', title: 'App Beta Testing', status: 'upcoming', desc: 'Testing client-vendor matching with a closed loop of early signups.' },
  { month: 'Month 6', title: 'Public Launch & Scale', status: 'upcoming', desc: 'Full app deployment with certified vendors ready for requests.' },
]

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0 mt-0.5">
    <polyline points="4 12 9 17 20 7"/>
  </svg>
)

export default function SkilledRoomCaseStudy() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="min-h-screen pt-32 text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link
              href="/work"
              className="text-accent hover:text-accent/80 transition-colors mb-6 inline-flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Work
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-semibold">
                6-Month Active Campaign
              </span>
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
                Vendor Acquisition Focus
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-muted-foreground to-white bg-clip-text text-transparent">
              Skilled Room
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Powering the vendor acquisition, branding, and marketing strategy to onboard premium service providers onto a next-generation skilled worker marketplace.
            </p>
          </motion.div>

          {/* Video Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            <div className="rounded-2xl border border-border bg-white/10 backdrop-blur-md p-4 overflow-hidden">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black/60">
                <iframe
                  src="https://drive.google.com/file/d/1kbCy-3NtiCzO3blHUxlF9L-Phkt11dJr/preview"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="Short-Form Social Video 1"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 mb-1">Short-Form Social Video 1</h3>
              <p className="text-muted-foreground text-sm">Targeted high-engagement Instagram Reel showcasing why handymen and artisans should join Skilled Room.</p>
            </div>

            <div className="rounded-2xl border border-border bg-white/10 backdrop-blur-md p-4 overflow-hidden">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black/60">
                <iframe
                  src="https://drive.google.com/file/d/1zK1jK4L3pjsguCMX_OTORnQ1c7ZzZ6Nr/preview"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title="Short-Form Social Video 2"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 mb-1">Short-Form Social Video 2</h3>
              <p className="text-muted-foreground text-sm">TikTok-style creative illustrating the app matching system and how providers get paid directly.</p>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 pb-12 border-b border-border"
          >
            <div>
              <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Client</h4>
              <p className="text-lg font-bold">Skilled Room App</p>
              <p className="text-sm text-muted-foreground">Nigeria &amp; Global Market</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Campaign Duration</h4>
              <p className="text-lg font-bold">6 Months</p>
              <p className="text-sm text-muted-foreground">Ongoing Collaboration</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Core Services</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {['Design', 'Social Media', 'Videos', 'Ads', 'Marketing'].map((s) => (
                  <span key={s} className="text-xs px-2.5 py-0.5 bg-primary/20 text-accent rounded border border-accent/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Context & Scope */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
          >
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold">The Strategic Scope</h2>
              <p className="text-muted-foreground leading-relaxed">
                Skilled Room is developing an innovative digital platform designed to bridge the gap between users needing reliable work and pre-verified service providers. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To prepare for a successful rollout, Touch Creative Agency is managing a holistic 6-month marketing campaign. Our objective is to generate awareness and onboard qualified handymen, technicians, decorators, and other service professionals so that the app launch meets active demand instantly.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-border p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-bold">Campaign Deliverables</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckIcon /> Brand Guide &amp; Identity</li>
                <li className="flex items-center gap-2"><CheckIcon /> Social Media Calendars</li>
                <li className="flex items-center gap-2"><CheckIcon /> Short-form Video Ads</li>
                <li className="flex items-center gap-2"><CheckIcon /> Paid Ads Lead funnels</li>
                <li className="flex items-center gap-2"><CheckIcon /> Ongoing Flyer Designs</li>
              </ul>
            </div>
          </motion.section>

          {/* Services breakdown */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-center">What We Are Executing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-6 rounded-xl border border-border bg-white/10 backdrop-blur-md hover:border-accent transition-colors group"
                >
                  <div className="mb-3">{getServiceIcon(service.title)}</div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Campaign Timeline / Roadmap */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">6-Month Campaign Roadmap</h2>
            <div className="relative border-l border-border pl-6 ml-4 space-y-8">
              {milestones.map((m) => (
                <div key={m.month} className="relative group">
                  {/* Status Indicator Circle */}
                  <div className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    m.status === 'completed' 
                      ? 'bg-accent border-accent' 
                      : m.status === 'active' 
                      ? 'bg-primary border-primary animate-pulse' 
                      : 'bg-background border-muted'
                  }`} />
                  
                  <div className="p-5 bg-white/10 backdrop-blur-md border border-border rounded-xl hover:border-accent/40 transition-colors">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-1">
                      {m.month} • {m.status.toUpperCase()}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-border rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Want to launch your brand app?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              From product design, media creation, and digital marketing, Touch handles everything needed to find your audience.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
