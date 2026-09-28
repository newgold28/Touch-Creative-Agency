'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import ProjectSubnav from '@/components/work/project-subnav'
import PageSeo from '@/components/page-seo'

const gallery = [
  {
    month: 'August',
    items: [
      { file: 'skilledroom-august-1.webp', label: 'Campaign Design 01' },
      { file: 'skilledroom-august-2-1.webp', label: 'Campaign Design 02' },
      { file: 'skilledroom-august-3-1.webp', label: 'Campaign Design 03' },
      { file: 'skilledroom-august-4.webp', label: 'Campaign Design 04' },
      { file: 'skilledroom-august-5.webp', label: 'Campaign Design 05' },
      { file: 'skilledroom-august-6.webp', label: 'Campaign Design 06' },
      { file: 'skilledroom-august-7.webp', label: 'Campaign Design 07' },
      { file: 'skilledroom-august-8.webp', label: 'Campaign Design 08' },
    ],
  },
  {
    month: 'September',
    items: [
      { file: 'skilledroom-september-1.webp', label: 'Campaign Design 01' },
      { file: 'skilledroom-september-2.webp', label: 'Campaign Design 02' },
      { file: 'skilledroom-september-4.webp', label: 'Campaign Design 04' },
      { file: 'skilledroom-september-5.webp', label: 'Campaign Design 05' },
      { file: 'skilledroom-september-6.webp', label: 'Campaign Design 06' },
      { file: 'skilledroom-september-carousel-cv.webp', label: 'Carousel Set' },
    ],
  },
]

export default function SkilledRoomGraphics() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <PageSeo
        title="Skilled Room Graphics | Touch Creative Agency"
        description="Flyers, social creatives, and promotional design work produced for the Skilled Room campaign."
      />
      <main className="min-h-screen pt-32 text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-4">
              Skilled Room
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-muted-foreground to-white bg-clip-text text-transparent">
              Graphics
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              {gallery.reduce((total, group) => total + group.items.length, 0)} campaign
              creatives — flyers, social designs, and promo assets produced across the
              rollout.
            </p>
          </motion.div>

          <ProjectSubnav />

          {gallery.map((group) => (
            <motion.section
              key={group.month}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-widest text-accent">
                  {group.month}
                </h2>
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">
                  {group.items.length} designs
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((item) => (
                  <a
                    key={item.file}
                    href={`/work/skilled-room/${item.file}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-2xl border border-border bg-white/10 backdrop-blur-md p-3 hover:border-accent/50 transition-colors"
                  >
                    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-black/20">
                      <Image
                        src={`/work/skilled-room/${item.file}`}
                        alt={`${group.month} — ${item.label}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm font-semibold mt-3 mb-0.5 group-hover:text-accent transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{group.month}</p>
                  </a>
                ))}
              </div>
            </motion.section>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-border rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Want design like this?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Flyers, social creatives, and brand identity built to make your campaign look
              bigger than it is.
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
