import useScrollReveal from '../hooks/useScrollReveal'

const ABOUT_DATA = {
  bio: [
    "I am a backend-focused developer passionate about building scalable systems, GenAI applications, and cloud-based products. I enjoy working with APIs, authentication systems, backend architecture, and deployment pipelines.",
    "I have experience developing FastAPI and Node.js applications, integrating frontend and backend systems, and deploying projects using Docker, AWS EC2, Nginx, and Vercel.",
    "I am also interested in AI and GenAI technologies, including LangChain, RAG pipelines, LLM-based applications, vector databases, transcription systems, and analytics dashboards. Currently, I am exploring distributed systems, backend optimization, and advanced AI workflows.",
  ],
  terminal: {
    name: 'saravanabhavan.json',
    content: {
      name: 'Saravanabhavan S',
      role: 'Backend & AI Developer',
      location: 'India 🇮🇳',
      languages: ['Python', 'JavaScript', 'C++'],
      interests: ['GenAI', 'System Design', 'Backend Architecture'],
      education: 'Sathyabama Institute of Science and Technology',
      fun_fact: "I debug with print statements and I'm not sorry 🤷",
    },
  },
}

export default function About() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-24 md:py-36 relative z-10" id="about">
      <div className="section-container">
        {/* Header */}
        <div className="section-header" data-reveal="up">
          <span className="section-eyebrow text-sm font-mono text-accent tracking-widest uppercase block">
            Get to Know Me
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            About{' '}
            <span className="gradient-text">Me</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Text column */}
          <div className="w-full lg:w-1/2 space-y-6" data-reveal="left">
            {ABOUT_DATA.bio.map((paragraph, i) => (
              <p key={i} className="text-text-muted leading-relaxed text-sm md:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Terminal card */}
          <div className="w-full lg:w-1/2" data-reveal="right">
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ff5f57]" />
                <span className="terminal-dot bg-[#ffbd2e]" />
                <span className="terminal-dot bg-[#28c840]" />
                <span className="text-xs text-text-dim ml-2 font-mono">
                  {ABOUT_DATA.terminal.name}
                </span>
              </div>
              <div className="p-6 md:p-7 text-sm leading-relaxed overflow-x-auto">
                <pre className="text-text-muted">
                  <code>
                    <span className="text-text-dim">{'{'}</span>
                    {'\n'}
                    {Object.entries(ABOUT_DATA.terminal.content).map(
                      ([key, value], i, arr) => (
                        <span key={key}>
                          {'  '}
                          <span className="text-accent">&quot;{key}&quot;</span>
                          <span className="text-text-dim">: </span>
                          {Array.isArray(value) ? (
                            <>
                              <span className="text-text-dim">[</span>
                              {value.map((v, vi) => (
                                <span key={vi}>
                                  <span className="text-green">&quot;{v}&quot;</span>
                                  {vi < value.length - 1 && (
                                    <span className="text-text-dim">, </span>
                                  )}
                                </span>
                              ))}
                              <span className="text-text-dim">]</span>
                            </>
                          ) : (
                            <span className="text-green">&quot;{value}&quot;</span>
                          )}
                          {i < arr.length - 1 && (
                            <span className="text-text-dim">,</span>
                          )}
                          {'\n'}
                        </span>
                      )
                    )}
                    <span className="text-text-dim">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
