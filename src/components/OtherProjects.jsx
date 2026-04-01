import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'
import { LINKS } from '../config/links'

const PROJECTS = [
  {
    title: 'Cyber Shield Network Security',
    description: 'Worked on network security architecture, attack surface analysis, secure remote access, DNS filtering, firewall policies, and VPN-based access models.',
    tech: ['Packet Tracer', 'Firewall', 'VPN', 'DNS Filtering'],
    github: LINKS.githubProfile,
    live: null,
  },
  {
    title: 'AR/VR Planetarium',
    description: 'Interactive Unity-based planetarium system with clickable planets, animated orbits, info panels, comet system, and realistic 3D environment.',
    tech: ['Unity', 'C#', '3D UI', 'Interaction System'],
    github: LINKS.githubProfile,
    live: null,
  },
  {
    title: 'Line Following Robot',
    description: 'Built an autonomous line-following robot using IR sensors and microcontroller logic. The robot detects path direction and adjusts motor movement automatically to stay on track.',
    tech: ['Arduino', 'IR Sensors', 'Embedded C', 'Motors'],
    github: LINKS.githubProfile,
    live: null,
  },
  {
    title: 'CNN Based Image Classification',
    description: 'Built an image classification model using Convolutional Neural Networks for identifying and classifying images. Worked on preprocessing, model training, evaluation, and prediction.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'NumPy'],
    github: LINKS.githubProfile,
    live: null,
  },
]

export default function OtherProjects() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative z-10">
      <div className="section-container">
        {/* Header */}
        <div className="section-header" data-reveal="up">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide">
            Other Noteworthy{' '}
            <span className="gradient-text-accent">Projects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5" data-reveal-stagger>
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl p-6 flex flex-col glow-border-hover transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-5">
                <FiFolder className="w-8 h-8 text-accent" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-accent transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent transition-colors"
                      aria-label={`${project.title} Live`}
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-text-dim">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
