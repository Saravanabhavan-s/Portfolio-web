import { useEffect, useMemo, useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'
import { LINKS } from '../config/links'

const PROJECTS = [
  {
    title: 'EchoScore',
    subtitle: 'GenAI Powered Customer Support Quality Auditor',
    description:
      'GenAI-powered platform for auditing customer support chats and calls. Implemented LLM-based scoring, RAG pipeline, transcription, compliance analysis, and an analytics dashboard.',
    tech: ['Python', 'FastAPI', 'LangChain', 'Whisper', 'React', 'Milvus', 'Vector DB'],
    github: LINKS.summarizerRepo,
    live: '#',
    terminalFile: 'echoscore.md',
    terminalLines: [
      'Architected a GenAI auditor for support chat and call quality workflows.',
      'Pipeline: FastAPI APIs -> Whisper transcripts -> Milvus-backed RAG context.',
      'Implemented LLM rubric scoring and compliance detection with traceable outputs.',
      'Delivered faster QA turnaround with consistent, explainable evaluations.',
    ],
  },
  {
    title: 'Weather Song Recommender',
    subtitle: 'Environment-aware Music Discovery',
    description:
      'Flask-based web application that dynamically recommends songs based on live weather conditions using the OpenWeather API and YouTube integration.',
    tech: ['Flask', 'OpenWeather API', 'YouTube API', 'HTML', 'CSS', 'JavaScript'],
    github: LINKS.weatherSongRepo,
    live: '#',
    terminalFile: 'weather-song.md',
    terminalLines: [
      'Built a weather-aware recommendation engine for contextual music discovery.',
      'Stack: Flask + OpenWeather API + YouTube API + JavaScript UI layer.',
      'Mapped live weather vectors into mood signals and ranking heuristics.',
      'Optimized request flow for low-latency responses and seamless UX.',
    ],
  },
]

function TerminalPreview({ project }) {
  const fullScript = useMemo(() => project.terminalLines.join('\n'), [project.terminalLines])
  const [typed, setTyped] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [runId, setRunId] = useState(0)
  const typedLines = typed.split('\n')
  const totalLines = project.terminalLines.length

  useEffect(() => {
    let timeoutId
    const doneTyping = typed.length === fullScript.length
    const cleared = typed.length === 0

    if (!isDeleting && doneTyping) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1600)
    } else if (isDeleting && cleared) {
      timeoutId = setTimeout(() => setIsDeleting(false), 500)
    } else {
      const nextLength = isDeleting ? typed.length - 1 : typed.length + 1
      const nextDelay = isDeleting ? 14 : fullScript[typed.length] === '\n' ? 150 : 22

      timeoutId = setTimeout(() => {
        setTyped(fullScript.slice(0, nextLength))
      }, nextDelay)
    }

    return () => clearTimeout(timeoutId)
  }, [typed, isDeleting, fullScript, runId])

  useEffect(() => {
    setTyped('')
    setIsDeleting(false)
  }, [runId, fullScript])

  return (
    <div className="terminal-card relative h-full min-h-[420px] glow-border-hover rounded-[1.5rem] border border-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_80px_-28px_rgba(99,102,241,0.22)] overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(120% 80% at 0% 0%, rgba(99,102,241,0.16) 0%, rgba(99,102,241,0) 60%), radial-gradient(100% 80% at 100% 100%, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0) 70%)',
        }}
      />
      <div className="terminal-header justify-between text-[11px] md:text-[12px] bg-bg/85 backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="terminal-dot bg-[#ff5f57]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#28c840]" />
          <span className="text-text-dim ml-2 font-mono">{project.terminalFile}</span>
        </div>
        <button
          type="button"
          onClick={() => setRunId((prev) => prev + 1)}
          className="text-[11px] font-mono text-text-dim hover:text-accent transition-colors"
        >
          rerun
        </button>
      </div>

      <div className="px-5 py-5 md:px-8 md:py-7 relative flex flex-1 flex-col">
        <div className="mb-4 flex items-center justify-between text-[11px] font-mono text-text-dim/70">
          <span>shell</span>
          <span className="text-accent/70">Interactive preview</span>
        </div>

        <div className="rounded-2xl border border-white/5 bg-bg/40 overflow-hidden flex flex-1 flex-col">
          <div className="border-b border-white/5 px-4 py-3 text-[11px] font-mono text-text-dim/75 flex items-center gap-2">
            <span className="text-accent-bright">$</span>
            <span>cat intro.txt</span>
          </div>

          <div className="grid flex-1 grid-cols-[2.25rem_1fr] gap-0 px-4 py-4 md:px-6 md:py-5">
            <div className="select-none text-right pr-3 text-[11px] md:text-[12px] leading-7 md:leading-8 text-text-dim/35 font-mono">
              {Array.from({ length: totalLines }, (_, index) => (
                <div key={index + 1}>{index + 1}</div>
              ))}
            </div>

            <pre className="min-w-0 whitespace-pre-wrap break-words text-[12px] md:text-[13px] leading-7 md:leading-8 text-text-muted font-mono max-w-[32rem] md:max-w-[36rem]">
              {typedLines.map((line, index) => (
                <div key={`${project.title}-${index}`} className="min-h-[1.6rem]">
                  {line}
                </div>
              ))}
              <span className="cursor-blink" />
            </pre>
          </div>
        </div>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse-glow" />
      </div>
    </div>
  )
}

export default function FeaturedProjects() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-20 md:py-24 relative z-10" id="projects">
      <div className="section-container">
        {/* Header */}
        <div className="section-header" data-reveal="up">
          <span className="section-eyebrow text-sm font-mono text-accent tracking-widest uppercase block">
            Featured Work
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            Things I&apos;ve{' '}
            <span className="gradient-text">Built</span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-16 md:gap-24">
          {PROJECTS.map((project, i) => {
            const isEven = i % 2 === 1
            return (
              <div
                key={project.title}
                data-reveal={isEven ? 'right' : 'left'}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* Preview */}
                <div className={`w-full ${isEven ? 'md:order-last' : ''}`}>
                  <TerminalPreview project={project} />
                </div>

                {/* Info */}
                <div className={`w-full text-center md:text-left ${isEven ? 'md:text-right' : ''}`}>
                  <span className="text-sm font-mono text-accent mb-3 block">
                    Featured Project
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-5">{project.title}</h3>
                  <div className="glass rounded-2xl p-8 md:p-9 mb-6 border border-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_16px_45px_-25px_rgba(99,102,241,0.18)]">
                    <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
                      {project.description}
                    </p>
                  </div>
                  <div className={`mt-5 flex flex-wrap gap-2.5 mb-6 justify-center md:justify-start ${isEven ? 'md:justify-end' : ''}`}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-2 text-xs font-mono rounded-full bg-surface text-text-muted border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className={`mt-5 flex gap-4 justify-center md:justify-start ${isEven ? 'md:justify-end' : ''}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent transition-colors"
                      aria-label="Live"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
