'use client';

import { motion } from 'framer-motion';
import {
  SiPython, SiFastapi, SiFlask, SiNodedotjs, SiExpress,
  SiReact, SiTailwindcss, SiJavascript, SiTypescript,
  SiMongodb, SiDocker, SiGithub, SiLinux, SiNginx, SiMysql,
  SiVercel, SiTensorflow, SiOpencv, SiCplusplus, SiNextdotjs
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FiCpu, FiMessageCircle, FiDatabase } from 'react-icons/fi';
import { ScrollReveal, TextMaskReveal } from '@/components/shared/ScrollReveal';
import { staggerContainer, fadeUp } from '@/lib/animations';

interface TechItem { name: string; icon: React.ComponentType<{ className?: string }>; }
interface Category { name: string; color: string; items: TechItem[]; }

const CATEGORIES: Category[] = [
  {
    name: 'Backend',
    color: '#C8A2F8',
    items: [
      { name: 'Python', icon: SiPython }, { name: 'Node.js', icon: SiNodedotjs },
      { name: 'FastAPI', icon: SiFastapi }, { name: 'Express.js', icon: SiExpress },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    name: 'Frontend',
    color: '#7DD3FC',
    items: [
      { name: 'JavaScript', icon: SiJavascript }, { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact }, { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    name: 'AI / GenAI',
    color: '#86EFAC',
    items: [
      { name: 'TensorFlow', icon: SiTensorflow }, { name: 'OpenCV', icon: SiOpencv },
      { name: 'LangChain', icon: FiCpu }, { name: 'Whisper', icon: FiMessageCircle },
      { name: 'LLMs & RAG', icon: FiCpu },
    ],
  },
  {
    name: 'Cloud / DevOps',
    color: '#FCD34D',
    items: [
      { name: 'Docker', icon: SiDocker }, { name: 'AWS EC2', icon: FaAws },
      { name: 'Nginx', icon: SiNginx }, { name: 'Vercel', icon: SiVercel },
      { name: 'GitHub', icon: SiGithub }, { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    name: 'Database & Languages',
    color: '#FCA5A5',
    items: [
      { name: 'C++', icon: SiCplusplus }, { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb }, { name: 'Vector DBs', icon: FiDatabase },
    ],
  },
];

export function Technologies() {
  return (
    <section id="tech" className="relative z-10 py-32 md:py-44">
      <div className="section-container">
        {/* Header */}
        <TextMaskReveal className="mb-20 md:mb-28">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Technologies I{' '}
            <span className="gradient-text-accent">Work With</span>
          </h2>
        </TextMaskReveal>

        {/* Category cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
        >
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              variants={fadeUp}
              className={`glass min-h-[200px] px-6 pt-6 pb-5 hover:border-border-hover transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                i === CATEGORIES.length - 1 ? 'md:col-span-2 xl:col-span-1' : ''
              }`}
            >
              {/* Category header */}
              <h3
                className="text-lg font-bold flex items-center gap-2.5 mb-4"
                style={{ color: cat.color }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                {cat.name}
              </h3>

              {/* Tech items grid */}
              <div className="grid grid-cols-2 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-surface/50 border border-border/50 hover:border-border-hover transition-colors group"
                  >
                    <item.icon className="w-4 h-4 text-text-dim group-hover:text-accent transition-colors shrink-0" />
                    <span className="text-sm text-text-muted group-hover:text-text transition-colors truncate">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
