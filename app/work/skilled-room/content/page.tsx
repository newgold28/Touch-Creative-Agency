'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ParticleBackground from '@/components/particle-background'
import ProjectSubnav from '@/components/work/project-subnav'
import PageSeo from '@/components/page-seo'

const reels = [
  { file: 'skilled-room-register-now.mp4', title: 'Register Now', duration: '0:26' },
  { file: 'skilled-room-our-services.mp4', title: 'Our Services', duration: '0:29' },
  { file: 'skilled-room-ad-1.mp4', title: 'Skilled Room Ad 1', duration: '0:45' },
  { file: 'skilled-room-3-things.mp4', title: '3 Things Skilled Room', duration: '0:48' },
  { file: 'skilled-room-notify-3.mp4', title: 'Notify 3', duration: '0:58' },
  { file: 'skilled-room-short-film-ad.mp4', title: 'Short Film Ad', duration: '0:58' },
  { file: 'skilled-room-verification.mp4', title: 'Verification', duration: '1:45' },
  { file: 'skilled-room-babe-stop-now.mp4', title: 'Babe Stop Now', duration: '2:07' },
]

const longform = {
  file: 'skilled-room-how-to-register.mp4',
  title: 'How to Register — Full Walkthrough',
  duration: '8:03',
}

const copySamples = [
  {
    platform: 'Instagram',
    body: 'Your skills are in demand. Your next client is one tap away. Skilled Room connects you with customers who need exactly what you do — no middlemen, no waiting. Download the app and get your first job this week.',
  },
  {
    platform: 'TikTok',
    body: 'POV: you finally get paid directly for the work you have been doing for years. Skilled Room puts real customers in front of real artisans. No agent cuts. No referrals. Just your work, your rate, your money.',
  },
  {
    platform: 'Facebook',
    body: 'Hiring a trusted professional should not mean endless phone calls. Skilled Room verifies every provider, so you book with confidence and they get paid fairly. Launching soon — join the waitlist.',
  },
]

function VideoCard({
  file,
  title,
  duration,
  landscape = false,
}: {
  file: string
  title: string
  duration: string
  landscape?: boolean
}) {
  return (
    <div className="rounded-2xl border border-border bg-white/10 backdrop-blur-md p-4 overflow-hidden">
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-black/60 ${
          landscape ? 'aspect-video' : 'aspect-[9/16]'
        }`}
      >
        <video
          src={`/work/skilled-room/videos/${file}`}
          poster={`/work/skilled-room/videos/posters/${file.replace(/\.mp4$/, '.webp')}`}
          controls
          preload="none"
          playsInline
          className="absolute inset-0 w-full h-full object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex items-center justify-between gap-4 mt-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-xs text-muted-foreground tabular-nums shrink-0">
          {duration}
        </span>
      </div>
    </div>
  )
}

export default function SkilledRoomContent() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <PageSeo
        title="Skilled Room Content Production | Touch Creative Agency"
        description="Nine short-form videos and the social copy produced for the Skilled Room vendor acquisition campaign."
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
              Content Production
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              {reels.length + 1} videos and the social copy built to win the attention of
              handymen, technicians, and decorators — and push them to install the app.
            </p>
          </motion.div>

          <ProjectSubnav />

          {/* Reel grid */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          >
            {reels.map((video) => (
              <VideoCard key={video.file} {...video} />
            ))}
          </motion.section>

          {/* Long-form walkthrough */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <VideoCard {...longform} landscape />
          </motion.section>

          {/* Social Copy */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-4">Campaign Copy</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Platform-specific captions written to match the tone of each feed.
            </p>
            <div className="space-y-6">
              {copySamples.map((sample) => (
                <div
                  key={sample.platform}
                  className="p-6 rounded-xl border border-border bg-white/10 backdrop-blur-md hover:border-accent transition-colors"
                >
                  <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-3">
                    {sample.platform}
                  </span>
                  <p className="text-muted-foreground leading-relaxed">{sample.body}</p>
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
            <h2 className="text-3xl font-bold mb-4">Want content like this for your brand?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We build video and social campaigns that turn attention into customers.
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
