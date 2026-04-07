import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useScrollReveal from '../hooks/useScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCES = [
  {
    role: 'Infosys Springboard Internship 6.0',
    company: 'Infosys',
    period: '2026',
    description: 'Worked on a GenAI-based auditing platform involving LLM scoring, RAG pipeline, backend APIs, transcription, and dashboard integration.',
    highlights: [
      'Developed GenAI capabilities for automated auditing',
      'Integrated RAG pipelines and LLM scoring workflows',
      'Built backend APIs and connected transcription services',
    ],
    tech: ['Python', 'FastAPI', 'GenAI', 'LLMs', 'RAG'],
  },
  {
    role: 'Cisco Cybersecurity Virtual Internship',
    company: 'Cisco',
    period: '2025',
    description: 'Worked on network security design, attack surface analysis, secure access models, filtering policies, and VPN configuration.',
    highlights: [
      'Designed robust network security architectures',
      'Configured VPNs and implemented DNS filtering',
      'Analyzed attack surfaces and defined firewall policies',
    ],
    tech: ['Network Security', 'Firewalls', 'VPN'],
  },
  {
    role: 'Backend Developer',
    company: 'Startup Project',
    period: '2024',
    description: 'Worked on backend API development, authentication system, funding module, team management module, and database integration.',
    highlights: [
      'Engineered core backend APIs and authentication flows',
      'Developed funding and team management modules',
      'Designed and optimized database schemas',
    ],
    tech: ['Node.js', 'NoSQL', 'Databases', 'Authentication'],
  },
]

export default function Experience() {
  const sectionRef = useScrollReveal()
  const timelineRef = useRef(null)

  useEffect(() => {
    if (!timelineRef.current) return

    const line = timelineRef.current

    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: line.parentElement,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 0.8,
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-24 relative z-10" id="experience">
      <div className="section-container">
        {/* Header */}
        <div className="section-header" data-reveal="up">
          <span className="section-eyebrow text-sm font-mono text-accent tracking-widest uppercase block">
            My Journey
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            Experience &{' '}
            <span className="gradient-text">Work</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div
            ref={timelineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-secondary to-accent-glow origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Cards */}
          <div className="flex flex-col gap-16 md:gap-20">
            {EXPERIENCES.map((exp, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={exp.role}
                  data-reveal="up"
                  data-reveal-delay={String(i * 0.05)}
                  className={`relative flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'
                    } gap-9 md:gap-12`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-accent border-2 border-bg -translate-x-1/2 z-10"
                    style={{ boxShadow: '0 0 12px rgba(99, 102, 241, 0.5)' }}
                  />

                  {/* Spacer for alignment (desktop) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-10 md:ml-0 md:w-1/2">
                    <div className="glass rounded-2xl p-8 md:p-10 glow-border-hover transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <h3 className="text-lg font-bold text-text">{exp.role}</h3>
                        <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-accent-bright mb-4">
                        {exp.company}
                      </p>
                      <p className="text-sm text-text-muted leading-relaxed mb-5">
                        {exp.description}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="text-sm text-text-muted flex gap-2">
                            <span className="text-accent mt-0.5 shrink-0">▹</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-xs font-mono rounded-full bg-surface text-text-dim border border-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
