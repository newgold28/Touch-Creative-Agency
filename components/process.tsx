'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We dig into your goals, audience, and market to shape a sharp strategy before a single pixel is designed.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We craft a cohesive brand direction — visuals, messaging, and campaign assets built around one strong idea.',
  },
  {
    number: '03',
    title: 'Build & Create',
    description:
      'We design, develop, produce video, and launch your campaign with quality checks at every milestone.',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    description:
      'We ship, measure what works, and iterate relentlessly — turning early wins into sustained growth.',
  },
]

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
        <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">How We Work</span>
        <h2 className="text-4xl font-bold">From Idea to Impact</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A proven, transparent process that keeps every partnership moving forward.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {steps.map((step, i) => (
          <motion.div key={step.number} variants={itemVariants} className="relative h-full">
            <div className="p-6 rounded-xl border border-border bg-white/10 backdrop-blur-md h-full flex flex-col">
              <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {step.number}
              </span>
              <h3 className="text-lg font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 text-accent font-bold">
                →
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
