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
interface Category { name: string; items: TechItem[]; }

const CATEGORIES: Category[] = [
  {
    name: 'Backend',
    items: [
      { name: 'Python', icon: SiPython }, { name: 'Node.js', icon: SiNodedotjs },
      { name: 'FastAPI', icon: SiFastapi }, { name: 'Express.js', icon: SiExpress },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { name: 'JavaScript', icon: SiJavascript }, { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact }, { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    name: 'AI / GenAI',
    items: [
      { name: 'TensorFlow', icon: SiTensorflow }, { name: 'OpenCV', icon: SiOpencv },
      { name: 'LangChain', icon: FiCpu }, { name: 'Whisper', icon: FiMessageCircle },
      { name: 'LLMs & RAG', icon: FiCpu },
    ],
  },
  {
    name: 'Cloud / DevOps',
    items: [
      { name: 'Docker', icon: SiDocker }, { name: 'AWS EC2', icon: FaAws },
      { name: 'Nginx', icon: SiNginx }, { name: 'Vercel', icon: SiVercel },
      { name: 'GitHub', icon: SiGithub }, { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    name: 'Database & Languages',
    items: [
      { name: 'C++', icon: SiCplusplus }, { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb }, { name: 'Vector DBs', icon: FiDatabase },
    ],
  },
];

export function Technologies() {
  return (
    <section id="tech" className="relative z-10 section-shell">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-[#09090B] px-6 py-7 md:px-9 md:py-10 lg:px-10 lg:py-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          <div className="relative">
            <ScrollReveal variant="fade-up" className="mb-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-dim">Stack</span>
            </ScrollReveal>

            <TextMaskReveal className="mb-7 md:mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">Technologies</h2>
            </TextMaskReveal>

            <ScrollReveal variant="fade-up" className="mb-8 md:mb-10">
              <p className="max-w-2xl text-text-muted text-sm md:text-base leading-8">
                Tools, languages, and infrastructure I use to ship production systems.
              </p>
            </ScrollReveal>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-9 gap-y-7 md:gap-x-12 md:gap-y-9"
            >
              {CATEGORIES.map((cat) => (
                <motion.div key={cat.name} variants={fadeUp}>
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-[11px] font-mono uppercase tracking-[0.16em] text-accent">
                      {cat.name}
                    </h3>
                    <span className="h-px flex-1 bg-border" />
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="inline-flex items-center gap-2 rounded-md border border-border/70 bg-[#101014]/90 px-3 py-2 transition-colors duration-300 hover:border-border-hover"
                      >
                        <item.icon className="h-3.5 w-3.5 shrink-0 text-text-dim" />
                        <span className="text-sm font-medium text-text-muted">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
