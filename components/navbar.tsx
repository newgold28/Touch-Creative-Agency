'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { tools } from '@/lib/tools'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
]

const companyItems = [
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

function NavDropdown({
  label,
  active,
  open,
  onOpenChange,
  panelWidth = 'w-72',
  children,
}: {
  label: string
  active: boolean
  open: boolean
  onOpenChange: (open: boolean) => void
  panelWidth?: string
  children: React.ReactNode
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <button
        onClick={() => onOpenChange(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          active || open
            ? 'bg-accent text-accent-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
        }`}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 top-full pt-4 ${panelWidth}`}
          >
            <div className="rounded-xl border border-border bg-black/90 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  const isToolsActive = pathname === '/tools' || pathname.startsWith('/tools/')
  const isCompanyActive =
    pathname === '/blog' ||
    pathname.startsWith('/blog/') ||
    pathname === '/careers' ||
    pathname === '/contact'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the dropdowns whenever the route changes
  useEffect(() => {
    setToolsOpen(false)
    setCompanyOpen(false)
  }, [pathname])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-xl border-border shadow-lg shadow-black/40'
          : 'bg-black/40 backdrop-blur-md border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Container */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity" suppressHydrationWarning>
            <Image
              src="/logo.png"
              alt="Touch Creative Agency"
              width={250}
              height={48}
              className="h-12 w-auto object-contain block"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-1 p-1.5 rounded-full border border-border/40 bg-muted/30 backdrop-blur-sm">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    pathname === item.href
                      ? 'bg-accent text-accent-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Company Dropdown */}
              <NavDropdown
                label="Company"
                active={isCompanyActive}
                open={companyOpen}
                onOpenChange={(o) => {
                  setCompanyOpen(o)
                  if (o) setToolsOpen(false)
                }}
                panelWidth="w-52"
              >
                {companyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setCompanyOpen(false)}
                    className={`block px-4 py-3 text-sm font-semibold transition-colors hover:bg-white/10 ${
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? 'bg-white/10 text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </NavDropdown>
            </nav>
          </div>

          {/* CTA + Tools */}
          <div className="hidden md:flex items-center gap-3">
            {/* Tools Dropdown */}
            <NavDropdown
              label="Tools"
              active={isToolsActive}
              open={toolsOpen}
              onOpenChange={(o) => {
                setToolsOpen(o)
                if (o) setCompanyOpen(false)
              }}
              panelWidth="w-72"
            >
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  onClick={() => setToolsOpen(false)}
                  className={`block px-4 py-3 transition-colors hover:bg-white/10 ${
                    pathname === tool.href ? 'bg-white/10' : ''
                  }`}
                >
                  <p className="text-sm font-semibold text-foreground">
                    {tool.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {tool.description.slice(0, 72)}
                    {tool.description.length > 72 ? '…' : ''}
                  </p>
                </Link>
              ))}
              <div className="border-t border-border">
                <Link
                  href="/tools"
                  onClick={() => setToolsOpen(false)}
                  className="block px-4 py-3 text-sm text-accent font-semibold hover:bg-white/10 transition-colors"
                >
                  All Tools →
                </Link>
              </div>
            </NavDropdown>

            <Link
              href="/contact"
              className="btn-primary px-6 py-2.5 text-sm"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 border-t border-border"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Company */}
              <div className="pt-2">
                <p className="text-xs font-bold text-accent uppercase tracking-wider px-1 pb-1">
                  Company
                </p>
                {companyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2.5 pl-3 text-sm font-medium transition-colors ${
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? 'text-accent'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Tools */}
              <div className="pt-2">
                <p className="text-xs font-bold text-accent uppercase tracking-wider px-1 pb-1">
                  Tools
                </p>
                {tools.map((tool) => (
                  <Link
                    key={tool.id}
                    href={tool.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2.5 pl-3 text-sm font-medium transition-colors ${
                      pathname === tool.href
                        ? 'text-accent'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tool.shortLabel}
                  </Link>
                ))}
                <Link
                  href="/tools"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 pl-3 text-sm font-semibold text-accent"
                >
                  All Tools →
                </Link>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-4 px-6 py-2.5 text-sm text-center w-full"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
