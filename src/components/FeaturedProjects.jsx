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
    gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
    accent: '#818cf8',
  },
  {
    title: 'Weather Song Recommender',
    subtitle: 'Environment-aware Music Discovery',
    description:
      'Flask-based web application that dynamically recommends songs based on live weather conditions using the OpenWeather API and YouTube integration.',
    tech: ['Flask', 'OpenWeather API', 'YouTube API', 'HTML', 'CSS', 'JavaScript'],
    github: LINKS.weatherSongRepo,
    live: '#',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    accent: '#34d399',
  },
]

export default function FeaturedProjects() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-16 md:py-28 relative z-10" id="projects">
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
        <div className="flex flex-col gap-14 md:gap-24">
          {PROJECTS.map((project, i) => {
            const isEven = i % 2 === 1
            return (
              <div
                key={project.title}
                data-reveal={isEven ? 'right' : 'left'}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
              >
                {/* Preview */}
                <div className={`w-full ${isEven ? 'md:order-last' : ''}`}>
                  <div
                    className={`relative rounded-2xl overflow-hidden aspect-video bg-gradient-to-br ${project.gradient} border border-border group`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div
                          className="text-4xl md:text-5xl font-extrabold mb-2 opacity-30"
                          style={{ color: project.accent }}
                        >
                          {project.title}
                        </div>
                        <div className="text-sm text-text-muted opacity-50">{project.subtitle}</div>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-text hover:bg-accent/30 transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-text hover:bg-accent/30 transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className={`w-full text-center md:text-left ${isEven ? 'md:text-right' : ''}`}>
                  <span className="text-sm font-mono text-accent mb-2 block">
                    Featured Project
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                  <div className="glass rounded-xl p-5 md:p-6 mb-5">
                    <p className="text-text-muted text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className={`flex flex-wrap gap-2 mb-5 justify-center md:justify-start ${isEven ? 'md:justify-end' : ''}`}>
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
