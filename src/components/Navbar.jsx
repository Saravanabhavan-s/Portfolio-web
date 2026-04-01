import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MAIL_TO } from '../config/links'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech', href: '#tech' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const drawerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    )

    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (drawerRef.current) {
      if (isOpen) {
        gsap.to(drawerRef.current, { x: 0, duration: 0.4, ease: 'power3.out' })
        document.body.style.overflow = 'hidden'
      } else {
        gsap.to(drawerRef.current, { x: '100%', duration: 0.3, ease: 'power3.in' })
        document.body.style.overflow = ''
      }
    }
  }, [isOpen])

  const scrollTo = (href) => {
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-lg' : ''
        }`}
        style={{ opacity: 0 }}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="relative z-10 text-xl font-bold"
            id="nav-logo"
          >
            <span className="gradient-text-accent">SB</span>
            <span className="text-text-muted text-sm font-mono ml-2 hidden sm:inline">
              / developer
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm text-text-muted hover:text-text transition-colors rounded-lg hover:bg-white/5"
                id={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={MAIL_TO}
              className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-xl bg-accent text-white glow-btn"
              id="nav-cta"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
            id="nav-hamburger"
          >
            <span
              className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8"
        style={{
          transform: 'translateX(100%)',
          background: 'rgba(10, 10, 15, 0.97)',
          backdropFilter: 'blur(40px)',
        }}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-2xl font-semibold text-text-muted hover:text-text transition-colors"
          >
            {link.label}
          </button>
        ))}
        <a
          href={MAIL_TO}
          className="mt-4 px-8 py-3 text-lg font-semibold rounded-xl bg-accent text-white glow-btn"
        >
          Let&apos;s Talk
        </a>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
