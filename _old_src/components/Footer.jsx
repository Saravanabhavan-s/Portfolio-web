import useScrollReveal from '../hooks/useScrollReveal'
import { LINKS, MAIL_TO } from '../config/links'

const FOOTER_LINKS = [
  { label: 'GitHub', href: LINKS.githubProfile },
  { label: 'LinkedIn', href: LINKS.linkedin },
  { label: 'Email', href: MAIL_TO },
]

export default function Footer() {
  const sectionRef = useScrollReveal()

  return (
    <footer ref={sectionRef} className="relative z-10 mt-10 border-t border-white/10 bg-black/45 backdrop-blur-md">
      <div
        className="pointer-events-none absolute inset-x-0 -top-14 h-14"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,15,0) 0%, rgba(10,10,15,0.45) 100%)',
        }}
      />
      <div className="section-container pt-12 pb-10 md:pt-12 md:pb-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold text-text/80">Saravanabhavan S</p>
            <p className="mt-1 text-sm text-text-muted/70">&copy; {new Date().getFullYear()}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-text-muted/70">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
