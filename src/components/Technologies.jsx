import {
  SiPython, SiFastapi, SiFlask, SiNodedotjs, SiExpress,
  SiReact, SiTailwindcss, SiJavascript, SiBootstrap,
  SiMongodb, SiDocker, SiGithub, SiLinux, SiNginx, SiMysql,
  SiVercel, SiTensorflow, SiOpencv, SiCplusplus
} from 'react-icons/si'
import { FiDatabase, FiCpu, FiMessageCircle } from 'react-icons/fi'
import { FaHtml5, FaCss3Alt, FaAws } from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'

const CATEGORIES = [
  {
    name: 'Backend',
    color: '#818cf8',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    name: 'Frontend',
    color: '#c084fc',
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
    ],
  },
  {
    name: 'AI / GenAI',
    color: '#34d399',
    items: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'LangChain', icon: SiPython },
      { name: 'Whisper', icon: FiMessageCircle },
      { name: 'LLMs & RAG', icon: FiCpu },
    ],
  },
  {
    name: 'Cloud / DevOps',
    color: '#f59e0b',
    items: [
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS EC2', icon: FaAws },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Vercel', icon: SiVercel },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    name: 'Database & Languages',
    color: '#fb7185',
    items: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Vector DBs', icon: FiDatabase },
    ],
  },
]

export default function Technologies() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef} className="pt-24 pb-32 mb-8 md:pt-36 md:pb-48 md:mb-12 relative z-10" id="tech">
      <div className="section-container">
        {/* Header */}
        <div className="section-header" data-reveal="up">
          <span className="section-eyebrow text-sm font-mono text-accent tracking-widest uppercase block">
            Tech Stack
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
            Technologies I{' '}
            <span className="gradient-text">Work With</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7" data-reveal-stagger>
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.name}
              className={`glass rounded-2xl p-6 glow-border-hover transition-all duration-300 hover:-translate-y-1 ${i === CATEGORIES.length - 1 ? 'md:col-span-2 xl:col-span-1' : ''}`}
            >
              <h3
                className="text-lg font-bold mb-5 flex items-center gap-2"
                style={{ color: cat.color }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color }}
                />
                {cat.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-surface/50 border border-border hover:border-border-glow transition-colors group"
                  >
                    <item.icon
                      className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors shrink-0"
                    />
                    <span className="text-sm text-text-muted group-hover:text-text transition-colors truncate">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
