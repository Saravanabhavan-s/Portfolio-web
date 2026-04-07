import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { FiGithub, FiExternalLink, FiDownload } from 'react-icons/fi'
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { LINKS } from '../config/links'

const TITLES = ['Backend Developer', 'AI Developer', 'Full Stack Developer']

export default function Hero() {
  const heroRef = useRef(null)
  const orbsRef = useRef(null)
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing effect
  useEffect(() => {
    const current = TITLES[titleIdx]
    let timeout

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setTitleIdx((prev) => (prev + 1) % TITLES.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.substring(0, displayText.length - 1)
              : current.substring(0, displayText.length + 1)
          )
        },
        isDeleting ? 40 : 80
      )
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIdx])

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-tag', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.5 })
        .fromTo('.hero-name', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
        .fromTo('.hero-btns', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
        .fromTo('.hero-socials', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  // Mouse parallax on orbs
  useEffect(() => {
    const handleMouse = (e) => {
      if (!orbsRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      gsap.to(orbsRef.current.children, {
        x: (i) => x * (i + 1) * 0.5,
        y: (i) => y * (i + 1) * 0.5,
        duration: 1,
        ease: 'power2.out',
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24"
      id="hero"
    >
      {/* Background orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-accent-glow/15 blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-80 md:h-80 rounded-full bg-accent-secondary/15 blur-[80px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 md:w-64 md:h-64 rounded-full bg-green/10 blur-[60px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10 text-center max-w-4xl flex flex-col items-center">
        {/* Tag */}
        <div className="hero-tag opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border mb-10 text-sm text-text-muted">
          <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
          Open to opportunities where I can build, learn, and grow.
        </div>

        {/* Name */}
        <h1 className="hero-name opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 sm:mb-7">
          Hi, I&apos;m{' '}
          <span className="gradient-text">Saravanabhavan</span>
        </h1>

        {/* Typed title */}
        <div className="hero-title opacity-0 text-xl sm:text-2xl md:text-3xl font-semibold text-accent-bright mb-6 sm:mb-7 min-h-[2.75rem]">
          <span>{displayText}</span>
          <span className="cursor-blink" />
        </div>

        {/* Description */}
        <p className="hero-desc opacity-0 text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
          Backend-focused developer with experience in FastAPI, Node.js, Express.js, cloud deployment, and GenAI applications. Interested in scalable backend systems, AI-powered tools, and real-world software products.
        </p>

        {/* CTA Buttons */}
        <div className="hero-btns opacity-0 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-10">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 rounded-xl bg-accent text-white font-semibold glow-btn flex items-center gap-2 text-sm sm:text-base"
            id="hero-cta-projects"
          >
            <FiExternalLink className="w-4 h-4" />
            View Projects
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-xl border border-border text-text hover:bg-white/5 transition-colors font-semibold flex items-center gap-2 text-sm sm:text-base"
            id="hero-cta-resume"
          >
            <FiDownload className="w-4 h-4" />
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div className="hero-socials opacity-0 mt-6 flex items-center justify-center gap-4 pb-4 sm:pb-6">
          {[
            { icon: FiGithub, href: LINKS.githubProfile, label: 'GitHub' },
            { icon: FaXTwitter, href: LINKS.x, label: 'X / Twitter' },
            { icon: FaLinkedinIn, href: LINKS.linkedin, label: 'LinkedIn' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-xl border border-border/70 flex items-center justify-center text-text-muted/80 hover:text-accent hover:border-accent-glow/30 transition-all hover:shadow-[0_0_12px_-6px_rgba(99,102,241,0.18)]"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-text-dim text-xs">
        <span>Scroll</span>
        <div className="w-5 h-8 rounded-full border border-border flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
