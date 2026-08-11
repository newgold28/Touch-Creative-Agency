'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TrustedBy() {
  return (
    <section className="border-y border-border bg-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 text-center md:text-left"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            One client at a time.
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>Currently partnering with
          </p>
          <div className="h-px w-10 bg-border hidden md:block" aria-hidden="true" />
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 rounded-xl bg-white flex items-center justify-center overflow-hidden p-1.5 shadow-lg shadow-primary/10">
              <Image
                src="/skilled-room-logo.png"
                alt="Skilled Room"
                width={44}
                height={44}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-bold leading-tight">Skilled Room</p>
              <p className="text-xs text-muted-foreground">Worker Marketplace App</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
