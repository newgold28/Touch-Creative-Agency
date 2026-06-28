'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      "Touch Creative Agency transformed our online presence. The team's attention to detail and creative thinking exceeded all expectations.",
    author: 'Emily Johnson',
    role: 'CEO, TechStartup Inc',
    image: '👩‍💼',
  },
  {
    quote:
      'Working with Touch was a game-changer for our business. They delivered a website that perfectly represents our brand.',
    author: 'Michael Chen',
    role: 'Founder, Design Studio',
    image: '👨‍💼',
  },
  {
    quote:
      "The entire team was professional, responsive, and truly understood our vision. Highly recommended for any project!",
    author: 'Sarah Williams',
    role: 'Marketing Director, Fashion Brand',
    image: '👩‍🎨',
  },
]

export default function Testimonials() {
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
        <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it. Hear from some of our amazing clients.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.author}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="p-8 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all"
          >
            <div className="flex items-start mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-accent">
                  ★
                </span>
              ))}
            </div>

            <p className="text-lg mb-6 leading-relaxed italic">
              "{testimonial.quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="text-4xl">{testimonial.image}</div>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
