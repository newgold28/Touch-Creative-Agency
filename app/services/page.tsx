'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import PageSeo from '@/components/page-seo'

/* ─── Animated SVG Icons ─────────────────────────────────────────────────── */

function DesignIcon() {
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="24" cy="24" r="18"
        stroke="#2563eb" strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2 }}
      />
      <motion.line
        x1="30" y1="18" x2="40" y2="8"
        stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
      />
      <motion.circle
        cx="40" cy="8" r="3"
        fill="#60a5fa"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, times: [0, 0.25, 0.75, 1] }}
      />
      {[{ cx: 17, cy: 20 }, { cx: 24, cy: 16 }, { cx: 31, cy: 20 }, { cx: 24, cy: 32 }].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx} cy={dot.cy} r="2.5"
          fill="#2563eb"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.15 + 0.4, duration: 0.4, repeat: Infinity, repeatDelay: 2.8 }}
        />
      ))}
    </svg>
  )
}

function DevelopmentIcon() {
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="4" y="8" width="40" height="28" rx="3"
        stroke="#2563eb" strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.line
        x1="24" y1="36" x2="24" y2="43"
        stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.6, duration: 0.4, repeat: Infinity, repeatDelay: 2.8 }}
      />
      <motion.line
        x1="16" y1="43" x2="32" y2="43"
        stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.4, repeat: Infinity, repeatDelay: 2.6 }}
      />
      <motion.path
        d="M14 19 L10 22 L14 25"
        stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.9, duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.path
        d="M20 17 L17 27"
        stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.1, duration: 0.4, repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.path
        d="M24 19 L28 22 L24 25"
        stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.3, duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
      />
    </svg>
  )
}

function StrategyIcon() {
  const bars = [
    { x: 8,  height: 14, delay: 0 },
    { x: 20, height: 22, delay: 0.15 },
    { x: 32, height: 30, delay: 0.3 },
  ]
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="6" y1="6" x2="6" y2="42" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="42" x2="44" y2="42" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      {bars.map((bar, i) => (
        <motion.rect
          key={i}
          x={bar.x} y={42 - bar.height}
          width="10" height={bar.height}
          rx="2"
          fill={i === 2 ? '#2563eb' : '#60a5fa'}
          opacity={i === 2 ? 1 : 0.7}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ transformOrigin: `${bar.x + 5}px 42px` }}
          transition={{ delay: bar.delay, duration: 0.6, ease: 'backOut', repeat: Infinity, repeatDelay: 2 }}
        />
      ))}
      <motion.path
        d="M13 35 L25 25 L37 16"
        stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.8, repeat: Infinity, repeatDelay: 1.8 }}
      />
    </svg>
  )
}

function EcommerceIcon() {
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M10 18 L12 40 H36 L38 18 Z"
        stroke="#2563eb" strokeWidth="2.5" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.path
        d="M18 18 C18 12 30 12 30 18"
        stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 0.6, repeat: Infinity, repeatDelay: 2.5 }}
      />
      {[{ cx: 38, cy: 10, r: 1.5, delay: 1 }, { cx: 42, cy: 6, r: 1, delay: 1.3 }, { cx: 34, cy: 6, r: 1, delay: 1.6 }].map((s, i) => (
        <motion.circle
          key={i}
          cx={s.cx} cy={s.cy} r={s.r}
          fill="#60a5fa"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
          transition={{ delay: s.delay, duration: 0.6, repeat: Infinity, repeatDelay: 2.4 }}
        />
      ))}
    </svg>
  )
}

function BrandIcon() {
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="19" y="14" width="10" height="28" rx="1"
        stroke="#2563eb" strokeWidth="2.5"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ transformOrigin: '24px 42px' }}
        transition={{ duration: 0.5, ease: 'backOut', repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.rect
        x="6" y="22" width="10" height="20" rx="1"
        stroke="#60a5fa" strokeWidth="2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ transformOrigin: '11px 42px' }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'backOut', repeat: Infinity, repeatDelay: 2.3 }}
      />
      <motion.rect
        x="32" y="26" width="10" height="16" rx="1"
        stroke="#60a5fa" strokeWidth="2"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        style={{ transformOrigin: '37px 42px' }}
        transition={{ delay: 0.35, duration: 0.5, ease: 'backOut', repeat: Infinity, repeatDelay: 2.15 }}
      />
      <motion.rect x="22" y="18" width="3" height="3" rx="0.5" fill="#60a5fa"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.7, repeat: Infinity, repeatDelay: 2.5 }} />
      <motion.rect x="22" y="25" width="3" height="3" rx="0.5" fill="#60a5fa"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.85, repeat: Infinity, repeatDelay: 2.5 }} />
      <line x1="4" y1="42" x2="44" y2="42" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function MarketingIcon() {
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="13" y="4" width="22" height="40" rx="4"
        stroke="#2563eb" strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.rect
        x="19" y="7" width="10" height="3" rx="1.5"
        fill="#2563eb"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.3, repeat: Infinity, repeatDelay: 2.7 }}
      />
      {[13, 18, 23].map((y, i) => (
        <motion.line
          key={i}
          x1="18" y1={y + 2} x2={i === 1 ? 30 : 26} y2={y + 2}
          stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: '18px 50%' }}
          transition={{ delay: 0.8 + i * 0.15, duration: 0.4, repeat: Infinity, repeatDelay: 2.5 }}
        />
      ))}
      <motion.circle
        cx="24" cy="34" r="3"
        stroke="#60a5fa" strokeWidth="1.5"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ delay: 1.5, duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
      />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="4" y="12" width="40" height="28" rx="4"
        stroke="#2563eb" strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.path
        d="M4 20 H44"
        stroke="#60a5fa" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.polygon
        points="20,24 32,28 20,32"
        fill="#2563eb"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.1, 1], opacity: [0, 1, 1] }}
        transition={{ delay: 0.9, duration: 0.5, repeat: Infinity, repeatDelay: 2.3 }}
      />
    </svg>
  )
}

function SocialIcon() {
  const nodes = [
    { cx: 24, cy: 12, r: 5 },
    { cx: 12, cy: 34, r: 5 },
    { cx: 36, cy: 34, r: 5 },
  ]
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[
        [0, 1],
        [0, 2],
        [1, 2],
      ].map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="#2563eb" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: i * 0.2, duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx} cy={n.cy} r={n.r}
          fill="#111111" stroke="#60a5fa" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.1, 1] }}
          transition={{ delay: i * 0.2, duration: 0.4, repeat: Infinity, repeatDelay: 2.5 }}
        />
      ))}
    </svg>
  )
}

function ContentIcon() {
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M8 40 L12 28 L32 8 L40 16 L20 36 Z"
        stroke="#2563eb" strokeWidth="2.5" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.line
        x1="28" y1="12" x2="36" y2="20"
        stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.6, duration: 0.4, repeat: Infinity, repeatDelay: 2.5 }}
      />
      {[{ cx: 34, cy: 8, delay: 1 }, { cx: 41, cy: 13, delay: 1.2 }, { cx: 38, cy: 6, delay: 1.4 }].map((s, i) => (
        <motion.circle
          key={i}
          cx={s.cx} cy={s.cy} r="1.5"
          fill="#60a5fa"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
          transition={{ delay: s.delay, duration: 0.6, repeat: Infinity, repeatDelay: 2.4 }}
        />
      ))}
    </svg>
  )
}

/* ─── Icon Dispatcher ────────────────────────────────────────────────────── */

function getIcon(title: string) {
  switch (title) {
    case 'Web Design':           return <DesignIcon />
    case 'Web Development':      return <DevelopmentIcon />
    case 'Digital Strategy':     return <StrategyIcon />
    case 'E-commerce Solutions': return <EcommerceIcon />
    case 'Brand Development':    return <BrandIcon />
    case 'Digital Marketing':    return <MarketingIcon />
    case 'Video & Content Creation': return <VideoIcon />
    case 'Social Media Management':  return <SocialIcon />
    case 'Copywriting & Content':    return <ContentIcon />
    default:                     return null
  }
}

/* ─── Data ───────────────────────────────────────────────────────────────── */

const services = [
  {
    title: 'Web Design',
    description: 'Stunning, user-centric designs that bring your vision to life.',
    features: ['UI/UX Design', 'Responsive Design', 'Design Systems', 'Prototyping'],
  },
  {
    title: 'Web Development',
    description: 'High-performance websites and applications built with modern tech.',
    features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization'],
  },
  {
    title: 'Digital Strategy',
    description: 'Strategic planning to maximize your online presence and impact.',
    features: ['Market Research', 'Competitor Analysis', 'Growth Strategy', 'Digital Roadmap'],
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms to boost your online sales.',
    features: ['Store Development', 'Payment Integration', 'Inventory Management', 'Analytics'],
  },
  {
    title: 'Brand Development',
    description: 'Cohesive brand identity that resonates with your audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Messaging Strategy'],
  },
  {
    title: 'Digital Marketing',
    description: 'Results-driven marketing campaigns that drive growth.',
    features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics'],
  },
  {
    title: 'Video & Content Creation',
    description: 'High-impact short-form video and creative content that converts.',
    features: ['Short-form Video', 'Reels & Stories', 'Scriptwriting', 'Motion Graphics'],
  },
  {
    title: 'Social Media Management',
    description: 'A consistent, engaging presence across every platform that matters.',
    features: ['Content Calendars', 'Community Management', 'Platform Strategy', 'Reporting'],
  },
  {
    title: 'Copywriting & Content',
    description: 'Persuasive copy and content that tells your story and drives action.',
    features: ['Web Copy', 'Ad Copy', 'Blog & SEO Articles', 'Brand Voice'],
  },
]

export default function Services() {
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
      <PageSeo
        title="Web Design, Branding & Marketing Services in Nigeria | Touch Creative Agency"
        description="Explore Touch Creative Agency's services — web design, branding, marketing, video production, and development. The best creative agency in Nigeria and Africa."
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Creative & Digital Services for Brands in Nigeria
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Web design, branding, marketing, video, and development — tailored to
              your business goals by Nigeria&apos;s best creative agency.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="p-8 border border-border rounded-xl hover:border-accent transition-all h-full flex flex-col bg-white/10 backdrop-blur-md hover:bg-white/15">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform w-fit">
                    {getIcon(service.title)}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 bg-primary/20 text-accent rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-16 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We understand your goals, audience, and challenges.' },
                { step: '02', title: 'Strategy', description: 'We develop a comprehensive plan to achieve your objectives.' },
                { step: '03', title: 'Execution', description: 'We bring your vision to life with precision and creativity.' },
                { step: '04', title: 'Optimization', description: 'We continuously refine and improve performance.' },
              ].map((phase) => (
                <motion.div
                  key={phase.step}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                  {phase.step !== '04' && (
                    <div className="hidden md:block absolute top-10 -right-4 text-2xl text-primary/40">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold mb-16 text-center">Pricing</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto rounded-2xl border border-border bg-white/10 backdrop-blur-md p-10 md:p-14 text-center"
            >
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                Every engagement is scoped around your goals, so pricing varies. Share your
                project with us and we will send a clear, itemized proposal — no surprise fees.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex px-8 py-4"
              >
                Share Your Project
              </Link>
            </motion.div>
          </motion.div>

          {/* Team Band */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-border mb-24 bg-white/10 backdrop-blur-md"
          >
            <Image
              src="/team-img/_NUT2496.jpg"
              alt="Touch Creative Agency team at work"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 md:p-12 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Every project gets senior hands on deck
                </h2>
                <p className="text-white/80 mb-6">
                  No handoffs to juniors — the people you meet are the people doing the work.
                </p>
                <Link
                  href="/about"
                  className="inline-flex px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  Meet the team
                </Link>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-border rounded-2xl p-12 md:p-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss how we can help your business grow.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Schedule a Consultation
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
