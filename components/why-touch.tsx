'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Layers,
  Target,
  Rocket,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react'

const reasons = [
  {
    icon: Layers,
    title: 'One team, every skill',
    description:
      'Design, branding, web development, marketing, and video under one roof — no juggling five agencies and no handoff gaps.',
  },
  {
    icon: Target,
    title: 'Built for the Nigerian market',
    description:
      'Localized strategy and content that connects with the Nigerian consumer and scales across the rest of Africa.',
  },
  {
    icon: Rocket,
    title: 'Deep-focus partnership',
    description:
      'We work with a select number of clients at a time, so your project gets senior attention — never a factory template.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear, predictable process',
    description:
      'Itemized proposals, milestone checkpoints, and review stages built in. You always know what is happening and what it costs.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function WhyTouch() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
          Why Touch
        </span>
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          Why choose Touch Creative Agency?
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
          Because we are a full-service creative agency in Nigeria that builds and
          launches your entire brand with one focused team — design, branding, web
          development, marketing, and video working together from day one.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {reasons.map((reason) => (
          <motion.div
            key={reason.title}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border border-border bg-white/10 backdrop-blur-md flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center mb-5">
              <reason.icon className="text-accent" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          href="/contact"
          className="btn-primary px-8 py-4 inline-flex items-center gap-2"
        >
          Work with Touch Creative Agency
          <ArrowUpRight size={18} />
        </Link>
      </motion.div>
    </section>
  )
}
