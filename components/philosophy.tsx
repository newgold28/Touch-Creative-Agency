'use client'

import { motion } from 'framer-motion'

function PhilosophyIcon({ id }: { id: string }) {
  switch (id) {
    case 'focus':
      // Target/bullseye with animated dot hitting center
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100">
          {/* Concentric circles */}
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.3" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.5" />
          <circle cx="50" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.8" />
          {/* Animated dot travelling from outer edge to center */}
          <circle cx="50" cy="6" r="5" fill="#7C3AED">
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,44; 0,44"
              keyTimes="0; 0.7; 1"
              dur="2.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1; 1; 0"
              keyTimes="0; 0.7; 1"
              dur="2.2s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Center bullseye fill */}
          <circle cx="50" cy="50" r="6" fill="#7C3AED" />
        </svg>
      )
    case 'location':
      // Map pin with animated pulse rings
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100">
          {/* Pulse rings from pin base */}
          <circle cx="50" cy="68" r="4" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0">
            <animate attributeName="r" from="4" to="28" dur="2s" repeatCount="indefinite" begin="0s" />
            <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" begin="0s" />
          </circle>
          <circle cx="50" cy="68" r="4" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0">
            <animate attributeName="r" from="4" to="28" dur="2s" repeatCount="indefinite" begin="0.7s" />
            <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" begin="0.7s" />
          </circle>
          {/* Teardrop pin shape */}
          <path
            d="M50 10 C35 10 22 23 22 38 C22 54 38 68 50 82 C62 68 78 54 78 38 C78 23 65 10 50 10 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Pin inner circle */}
          <circle cx="50" cy="38" r="10" fill="#06B6D4" />
        </svg>
      )
    case 'circuit':
      // Circuit board / nodes with animated current dot
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 100 100">
          {/* Node rectangles */}
          <rect x="8" y="40" width="18" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
          <rect x="72" y="14" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
          <rect x="72" y="68" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
          {/* Connecting lines */}
          <polyline
            points="26,50 50,50 50,23 72,23"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
          <polyline
            points="50,50 50,77 72,77"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
          {/* Animated current dot along top path */}
          <circle cx="0" cy="0" r="4" fill="#F59E0B">
            <animateMotion
              path="M26,50 L50,50 L50,23 L72,23"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Animated current dot along bottom path */}
          <circle cx="0" cy="0" r="4" fill="#F59E0B">
            <animateMotion
              path="M50,50 L50,77 L72,77"
              dur="1.6s"
              repeatCount="indefinite"
              begin="0.8s"
            />
          </circle>
        </svg>
      )
    default:
      return null
  }
}

export default function Philosophy() {
  const points = [
    {
      title: 'Deep-Focus Model',
      description: 'We do not dilute our attention across dozens of clients. We partner with one ambitious brand at a time, acting as their dedicated in-house growth and creative department.',
      iconId: 'focus',
    },
    {
      title: 'Lagos-Centric Strategy',
      description: 'We build visual assets, localized content, and social media campaigns that directly resonate with the unique dynamics of the Nigerian consumer market.',
      iconId: 'location',
    },
    {
      title: 'Full-Stack Execution',
      description: 'From producing short-form video ads to designing marketing collateral and managing lead capture funnels, we handle the entire funnel from awareness to acquisition.',
      iconId: 'circuit',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">How We Operate</span>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Our Working Philosophy</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We believe in hyper-focused execution. Here is how we guarantee maximum impact for our client partners.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {points.map((point) => (
          <motion.div
            key={point.title}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl border border-border hover:border-accent hover:bg-accent/5 transition-all flex flex-col justify-between bg-white/10 backdrop-blur-md"
          >
            <div>
              <div className="mb-6">
                <PhilosophyIcon id={point.iconId} />
              </div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
