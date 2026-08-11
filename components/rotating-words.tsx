'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = [
  'Branding.',
  'Web Design.',
  'Web Development.',
  'Short-form Video.',
  'Paid Ads.',
  'Social Media.',
  'E-commerce.',
  'SEO & Growth.',
]

export default function RotatingWords() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
