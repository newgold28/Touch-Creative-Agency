'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const sections = [
  { href: '/work/skilled-room', label: 'Project Overview' },
  { href: '/work/skilled-room/content', label: 'Content Production' },
  { href: '/work/skilled-room/graphics', label: 'Graphics' },
]

export default function ProjectSubnav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col sm:flex-row gap-2 sm:gap-1 p-1.5 rounded-full border border-border bg-white/10 backdrop-blur-md w-full sm:w-fit mb-12">
      {sections.map((section) => {
        const isActive = pathname === section.href
        return (
          <Link
            key={section.href}
            href={section.href}
            className={`relative flex-1 sm:flex-none text-center px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="project-subnav-active"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative z-10">{section.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
