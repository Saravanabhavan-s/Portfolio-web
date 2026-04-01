import { FiGithub, FiHeart, FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import useScrollReveal from '../hooks/useScrollReveal'
import { LINKS, MAIL_TO } from '../config/links'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech', href: '#tech' },
]

const SOCIALS = [
  { icon: FiGithub, label: 'GitHub', href: LINKS.githubProfile },
  { icon: FaXTwitter, label: 'X / Twitter', href: LINKS.x },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: LINKS.linkedin },
]

export default function Footer() {
  const sectionRef = useScrollReveal()

  const scrollTo = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer ref={sectionRef} className="relative z-20 mt-8 md:mt-12 border-t border-border bg-bg/80 backdrop-blur-sm">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start" data-reveal-stagger>
          {/* Brand */}
          <div className="text-center md:text-left max-w-xs md:max-w-sm md:justify-self-start">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="text-2xl font-bold gradient-text-accent inline-block mb-3"
            >
              SB
            </a>
            <p className="text-sm text-text-muted leading-relaxed">
              Backend & AI Developer building scalable systems
              and intelligent applications.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center md:items-start gap-3 md:justify-self-center">
            <span className="text-sm font-semibold text-text mb-1">Navigation</span>
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start gap-3 md:justify-self-end">
            <span className="text-sm font-semibold text-text mb-1">Connect</span>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:border-accent-glow/40 transition-all hover:shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)] group"
                >
                  <s.icon className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" aria-hidden="true" />
                </a>
              ))}
            </div>
            <a
              href={MAIL_TO}
              className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors mt-2"
            >
              <FiMail className="w-4 h-4" />
              {LINKS.email}
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-text-dim text-center md:text-left">
          <span className="leading-relaxed">© {new Date().getFullYear()} Saravanabhavan S. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with React &{' '}
            <FiHeart className="w-3.5 h-3.5 text-pink-400" />
          </span>
        </div>
      </div>
    </footer>
  )
}
