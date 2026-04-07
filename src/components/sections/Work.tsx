'use client';

import { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight, FiX } from 'react-icons/fi';
import { PROJECTS, type Project } from '@/lib/constants';
import { ScrollReveal, TextMaskReveal } from '@/components/shared/ScrollReveal';
import { useLenis } from '@/components/shared/LenisProvider';
import { staggerContainer, fadeUp } from '@/lib/animations';

export function Work() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);
  const [terminalProject, setTerminalProject] = useState<Project | null>(null);
  const lenis = useLenis();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (terminalProject) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    };
  }, [terminalProject, lenis]);

  return (
    <section id="work" className={`relative py-32 md:py-44 ${terminalProject ? 'z-[100]' : 'z-10'}`}>
      <div className="section-container">
        <TextMaskReveal className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">
            Selected Projects
          </h2>
        </TextMaskReveal>
        <ScrollReveal variant="fade-up" className="mb-20 md:mb-28">
          <p className="text-text-muted max-w-lg">
            A few things I&apos;ve shipped. Each one taught me something new.
          </p>
        </ScrollReveal>

        {/* Featured projects */}
        <div className="space-y-8 mb-24">
          {featured.map((project, i) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={i}
              onInspect={() => setTerminalProject(project)}
            />
          ))}
        </div>

        {/* Other explorations */}
        <ScrollReveal variant="fade-up" className="mb-8">
          <h3 className="text-lg font-semibold text-text-muted">Other explorations</h3>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {others.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <OtherCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ═══ FULLSCREEN TERMINAL MODAL ═══ */}
      <AnimatePresence>
        {terminalProject && (
          <TerminalOverlay
            project={terminalProject}
            onClose={() => setTerminalProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FEATURED PROJECT CARD — Sparkline + click to open modal
   ═══════════════════════════════════════════════════════ */
function FeaturedProject({
  project, index, onInspect,
}: {
  project: Project; index: number; onInspect: () => void;
}) {
  const sparkData = useMemo(() => {
    const seed = project.title.length * 7 + index * 13;
    return Array.from({ length: 24 }, (_, i) => {
      const x = Math.sin(seed + i * 0.7) * 30 + Math.cos(i * 1.3) * 20 + 50;
      return Math.max(5, Math.min(95, x));
    });
  }, [project.title, index]);

  return (
    <ScrollReveal variant="fade-up">
      <div className="group relative rounded-2xl border border-border bg-bg-card overflow-hidden transition-all duration-500 hover:border-border-hover">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-accent-glow via-transparent to-transparent" />

        <div className="relative flex flex-col lg:flex-row">
          {/* Left: Content */}
          <div className="flex-1 p-8 md:p-10">
            <span className="text-[11px] font-mono text-accent mb-3 block">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-text mb-3 group-hover:text-accent-bright transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="text-[11px] font-mono text-text-dim px-2.5 py-1 rounded-md bg-surface border border-border">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors">
                <FiGithub className="w-4 h-4" /> Source
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors">
                  <FiExternalLink className="w-4 h-4" /> Demo
                </a>
              )}
              <button
                onClick={onInspect}
                className="ml-auto flex items-center gap-1.5 text-xs font-mono text-accent/70 hover:text-accent transition-colors px-3 py-1.5 rounded-md border border-accent/15 hover:border-accent/30 hover:bg-accent/5"
              >
                $ inspect
              </button>
            </div>
          </div>

          {/* Right: Sparkline graph — click opens modal */}
          <div
            className="w-full lg:w-[320px] p-6 lg:p-8 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-l border-border cursor-pointer hover:bg-surface/30 transition-colors"
            onClick={onInspect}
          >
            <SparklineGraph data={sparkData} color="var(--color-accent)" />
            <span className="text-[10px] font-mono text-text-dim mt-3">click to inspect →</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ═══════════════════════════════════════════════════════
   SPARKLINE SVG GRAPH
   ═══════════════════════════════════════════════════════ */
function SparklineGraph({ data, color }: { data: number[]; color: string }) {
  const width = 240, height = 80;
  const points = data.map((v, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - (v / 100) * height,
  }));
  const pathD = points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(' ');
  const areaD = pathD + ` L${width},${height} L0,${height} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      {[0.25, 0.5, 0.75].map((r) => (
        <line key={r} x1={0} y1={height * r} x2={width} y2={height * r} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
      ))}
      <motion.path d={areaD} fill="url(#sparkGrad)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} />
      <motion.path d={pathD} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} />
      <motion.circle cx={points.at(-1)!.x} cy={points.at(-1)!.y} r="3" fill={color} initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5, duration: 0.3 }} viewport={{ once: true }} />
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.12" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   TERMINAL OVERLAY — Fullscreen modal with blur + typing
   ═══════════════════════════════════════════════════════ */
function TerminalOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
  const lines = [
    `❯ ./inspect --project="${project.title}"`,
    `[INFO] Locating project data... OK`,
    ``,
    `NAME:    ${project.title}`,
    `TYPE:    ${project.subtitle}`,
    `STATUS:  ${project.live ? 'Deployed (Live)' : 'Development / Repository only'}`,
    `GITHUB:  ${project.github ? 'Available' : 'Private'}`,
    ``,
    `[INFO] Analyzing tech stack...`,
    ...project.tech.map((t) => `  [+] Loaded dependency: ${t}`),
    ``,
    `[INFO] Fetching core description...`,
    ...project.description.split('. ').filter((s) => s.trim().length > 0).map((s) => `  > ${s.trim()}${s.trim().endsWith('.') ? '' : '.'}`),
    ``,
    `[INFO] Project analysis complete.`,
    `❯ _`,
  ];

  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (line === '' || line === `❯ _`) {
      // Empty line or final prompt — show instantly
      setTypedLines((p) => [...p, line]);
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
      return;
    }

    if (currentChar <= line.length) {
      const isCmd = line.startsWith('❯');
      const delay = isCmd ? 25 : 8; // Commands type slower
      const timeout = setTimeout(() => {
        setTypedLines((prev) => {
          const next = [...prev];
          next[currentLine] = line.substring(0, currentChar + 1);
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, currentChar === 0 ? 80 : delay);
      return () => clearTimeout(timeout);
    } else {
      // Line done, move to next
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* Terminal window */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl rounded-xl border border-border bg-[#0A0A0C] overflow-hidden shadow-2xl h-[75vh] md:h-[650px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
          <span className="text-[11px] font-mono text-text-dim">
            ~/{project.title.toLowerCase().replace(/\s+/g, '-')}
          </span>
          <button onClick={onClose} className="text-text-dim hover:text-text transition-colors">
            <FiX className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal content */}
        <div 
          className="p-6 md:p-8 font-mono text-[13px] md:text-sm leading-[1.8] flex-1 overflow-y-auto"
          data-lenis-prevent="true"
        >
          {typedLines.map((line, i) => (
            <div key={i} className="min-h-[1.5rem]">
              {line.startsWith('❯') ? (
                <span>
                  <span className="text-accent">❯</span>
                  <span className="text-text">{line.slice(1)}</span>
                  {line === '❯ _' && (
                    <span className="inline-block w-2 h-3.5 bg-accent/60 animate-pulse ml-0.5 align-middle" />
                  )}
                </span>
              ) : line.startsWith('  [+]') ? (
                <span className="text-text-muted">{line}</span>
              ) : line.startsWith('NAME:') ? (
                <span className="text-text font-semibold text-base">{line}</span>
              ) : line.startsWith('TYPE:') ? (
                <span className="text-accent/80 font-semibold">{line}</span>
              ) : line.startsWith('[INFO]') ? (
                <span className="text-accent/50">{line}</span>
              ) : line === '' ? null : (
                <span className="text-text-dim">{line}</span>
              )}
            </div>
          ))}
          {currentLine < lines.length && (
            <span className="inline-block w-2 h-3.5 bg-accent/60 animate-pulse" />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   OTHER CARD
   ═══════════════════════════════════════════════════════ */
function OtherCard({ project }: { project: Project }) {
  return (
    <a href={project.github} target="_blank" rel="noopener noreferrer"
      className="group block rounded-xl border border-border bg-bg-card p-6 h-full hover:border-border-hover transition-all duration-300">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-semibold text-text group-hover:text-accent-bright transition-colors">{project.title}</h3>
        <FiArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-accent transition-all flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <p className="text-sm text-text-muted leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="text-[10px] font-mono text-text-dim px-2 py-0.5 rounded bg-surface border border-border/50">{t}</span>
        ))}
        {project.tech.length > 4 && (
          <span className="text-[10px] font-mono text-text-dim px-2 py-0.5 rounded bg-surface border border-border/50">+{project.tech.length - 4}</span>
        )}
      </div>
    </a>
  );
}
