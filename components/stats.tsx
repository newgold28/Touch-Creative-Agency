'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function Counter({ end, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      {count}
      {suffix}
    </div>
  )
}

export default function Stats() {
  const stats = [
    { label: 'Projects Completed', value: 120, suffix: '+' },
    { label: 'Happy Clients', value: 95, suffix: '+' },
    { label: 'Team Members', value: 18 },
    { label: 'Years Experience', value: 4, suffix: '+' },
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
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="text-center"
          >
            <Counter end={stat.value} suffix={stat.suffix} />
            <p className="text-muted-foreground mt-4">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
