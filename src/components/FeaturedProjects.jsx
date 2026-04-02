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
    file: 'echoscore.audit.ts',
    introLines: [
      '$ init audit-pipeline --source chats,calls',
      '> loading whisper transcription + diarization',
      '> indexing support logs in vector db (milvus)',
      '> scoring with llm rubric and compliance checks',
      '> exposing insights via fastapi analytics endpoints',
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
    file: 'weather-mood.flow.js',
    introLines: [
      '$ fetch weather --city Chennai',
      '> humidity: 76% | condition: cloudy',
      '> mapping weather profile to mood vectors',
      '> ranking youtube tracks with weighted tags',
      '> serving playlist recommendations via flask api',
    ],
  },
]

function TerminalPreview({ project }) {
  const [typedLength, setTypedLength] = useState(0)

  const fullScript = useMemo(
    () => project.introLines.join('\n'),
    [project.introLines]
  )

  useEffect(() => {
    let frameTimer
    let resetTimer

    const startTyping = () => {
      let idx = 0
      frameTimer = setInterval(() => {
        idx += 1
        setTypedLength(idx)

        if (idx >= fullScript.length) {
          clearInterval(frameTimer)
          resetTimer = setTimeout(() => {
            setTypedLength(0)
            startTyping()
          }, 1600)
        }
      }, 22)
    }

    startTyping()

    return () => {
      clearInterval(frameTimer)
      clearTimeout(resetTimer)
    }
  }, [fullScript])

  const typedText = fullScript.slice(0, typedLength)

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border bg-[#0b0d18] shadow-[0_20px_60px_-40px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b border-border bg-[#101427]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <span className="text-xs md:text-sm font-mono text-text-dim">{project.file}</span>
        <div className="w-12" />
      </div>

      <div className="aspect-video px-4 md:px-6 py-4 md:py-5 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed text-text-muted bg-[linear-gradient(180deg,#101325_0%,#0b0d18_100%)]">
        <pre className="whitespace-pre-wrap break-words">
          {typedText}
          <span className="cursor-blink" />
        </pre>
      </div>

      <div className="px-4 md:px-6 py-3 md:py-4 border-t border-border bg-black/20 flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-muted hover:text-accent transition-colors inline-flex items-center gap-2"
          aria-label={`${project.title} GitHub`}
        >
          <FiGithub className="w-4 h-4" />
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-muted hover:text-accent transition-colors inline-flex items-center gap-2"
          aria-label={`${project.title} Live Demo`}
        >
          <FiExternalLink className="w-4 h-4" />
          Live
        </a>
      </div>
    </div>
  )
}

export default function FeaturedProjects() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative z-10" id="projects">
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
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
              >
                {/* Preview */}
                <div className={`w-full ${isEven ? 'md:order-last' : ''}`}>
                  <TerminalPreview project={project} />
                </div>

                {/* Info */}
                <div className={`w-full text-center md:text-left ${isEven ? 'md:text-right' : ''}`}>
                  <span className="text-sm font-mono text-accent mb-2 block">
                    Featured Project
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                  <div className="glass rounded-xl p-6 md:p-7 mb-6">
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-2.5 mb-6 justify-center md:justify-start ${isEven ? 'md:justify-end' : ''}`}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-surface text-text-muted border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className={`flex gap-4 justify-center md:justify-start ${isEven ? 'md:justify-end' : ''}`}>
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
