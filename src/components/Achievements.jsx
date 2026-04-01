import useScrollReveal from '../hooks/useScrollReveal'

const ACHIEVEMENTS = [
  {
    icon: '🤖',
    title: 'IEEE Robotics & Automation Society',
    description: 'Active member participating in robotics-related activities and technical events. Organized 5+ technical events, workshops, and student engagement activities.',
    date: '2023 - Present',
  },
  {
    icon: '📢',
    title: 'Class Ambassador',
    description: 'Represented the class in academic and coordination activities. Acted as the communication bridge between students and faculty. Helped organize events, announcements, and class-related activities.',
    date: '2023 - Present',
  },
  {
    icon: '🌍',
    title: 'International Technology Bootcamp',
    description: 'Participated in bootcamp at Universiti Sains Islam Malaysia focusing on IoT, AI, Robotics, and developing a Capstone Project.',
    date: 'December 2024',
  },
  {
    icon: '🎓',
    title: 'CS Undergraduate',
    description: 'Pursuing degree at Sathyabama Institute of Science and Technology.',
    date: 'Present',
  },
]

export default function Achievements() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-24 md:py-36 relative z-10" id="achievements">
      <div className="section-container">
        {/* Header */}
        <div className="section-header" data-reveal="up">
          <span className="section-eyebrow text-sm font-mono text-accent tracking-widest uppercase block">
            Milestones
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            Achievements &{' '}
            <span className="gradient-text-accent">Highlights</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          data-reveal-stagger
        >
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-6 glow-border-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-2">
                    {item.description}
                  </p>
                  <span className="text-xs font-mono text-text-dim">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
