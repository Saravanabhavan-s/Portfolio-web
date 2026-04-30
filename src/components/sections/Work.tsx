'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight, FiX } from 'react-icons/fi';
import { PROJECTS, type Project } from '@/lib/constants';
import { ProjectAnimation } from '@/components/shared/ProjectAnimation';
import { ScrollReveal, TextMaskReveal } from '@/components/shared/ScrollReveal';
import { useLenis } from '@/components/shared/LenisProvider';
import { staggerContainer, fadeUp } from '@/lib/animations';

export function Work() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);
  const [terminalProject, setTerminalProject] = useState<Project | null>(null);
  const lenis = useLenis();

  // Lock body scroll when modal is open.
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
    <section id="work" className={`relative section-shell ${terminalProject ? 'z-[100]' : 'z-10'}`}>
      <div className="section-container">
        <ScrollReveal variant="fade-up" className="mb-4">
          <span className="text-[11px] font-mono text-text-dim">~/projects</span>
        </ScrollReveal>

        <TextMaskReveal className="mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">Selected Projects</h2>
        </TextMaskReveal>

        <ScrollReveal variant="fade-up" className="mb-10 md:mb-12">
          <p className="text-text-muted max-w-2xl leading-8 font-mono text-sm">
            <span className="text-accent">❯</span> A few things I&apos;ve shipped. Each one taught me something new.
          </p>
        </ScrollReveal>

        <div className="space-y-7 md:space-y-8 mb-20 md:mb-24">
          {featured.map((project, i) => (
            <FeaturedProject
              key={project.title}
              project={project}
              index={i}
              onInspect={() => setTerminalProject(project)}
            />
          ))}
        </div>

        <ScrollReveal variant="fade-up" className="mb-8 md:mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-accent">❯</span>
              <h3 className="text-lg font-semibold text-text-muted font-mono">ls ./other</h3>
            </div>
            <span className="text-[11px] font-mono text-text-dim">{others.length.toString().padStart(2, '0')} entries</span>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {others.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <OtherCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>

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

function FeaturedProject({
  project,
  index,
  onInspect,
}: {
  project: Project;
  index: number;
  onInspect: () => void;
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
      <article className="group relative overflow-hidden rounded-2xl border border-border bg-[#0C0C0E] transition-all duration-500 hover:border-border-hover">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_88%_18%,rgba(200,162,248,0.14),transparent_42%),radial-gradient(circle_at_6%_88%,rgba(200,162,248,0.08),transparent_36%)]" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="border-b border-border lg:border-b-0 lg:border-r border-border">
            <header className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 md:px-6 md:py-4 border-b border-border/70">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-accent/25 bg-accent/8 text-[11px] font-mono text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[11px] font-mono text-text-dim">
                  project://{project.title.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </div>
              <span className="text-[10px] font-mono text-green-300/70">{project.live ? '[DEPLOYED]' : '[SOURCE ONLY]'}</span>
            </header>

            <div className="px-5 py-6 md:px-6 md:py-7">
              <h3 className="text-xl md:text-[1.65rem] font-semibold tracking-tight text-text mb-3 transition-colors duration-300 group-hover:text-accent-bright">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-accent/75 mb-4 uppercase tracking-[0.08em]">{project.subtitle}</p>
              <p className="text-sm text-text-muted leading-relaxed max-w-2xl mb-7">{project.description}</p>

              <div className="mb-7">
                <span className="text-[10px] font-mono text-text-dim uppercase tracking-[0.12em]">Tech Stack</span>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono text-text-muted px-3.5 py-1.5 rounded-md border border-border bg-surface/70 transition-colors group-hover:border-border-hover">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-mono text-text-muted transition-colors hover:text-accent"
                >
                  <FiGithub className="w-4 h-4" /> source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-mono text-text-muted transition-colors hover:text-accent"
                  >
                    <FiExternalLink className="w-4 h-4" /> demo
                  </a>
                )}
                <button
                  onClick={onInspect}
                  className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-accent/20 px-3 py-1.5 text-xs font-mono text-accent/75 transition-all hover:border-accent/35 hover:bg-accent/8 hover:text-accent"
                >
                  $ inspect
                </button>
              </div>
            </div>
          </div>

          <div
            role="button"
            onClick={onInspect}
            className="group/anim relative flex h-full min-h-[260px] flex-col justify-between text-left transition-colors hover:bg-surface/35 cursor-pointer"
            aria-label={`Inspect ${project.title}`}
          >
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/40 text-text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-black/60"
                title="View demo"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.animationId ? (
              <ProjectAnimation animationId={project.animationId} />
            ) : (
              <>
                <div className="flex items-center justify-between p-5 md:p-6">
                  <span className="text-[10px] font-mono text-text-dim">performance.signal</span>
                  <span className="text-[10px] font-mono text-accent/70">click to inspect</span>
                </div>
                <div className="rounded-lg border border-border bg-[#0A0A0C] p-4 mx-5 mb-5">
                  <SparklineGraph data={sparkData} color="var(--color-accent)" />
                </div>
                <div className="grid grid-cols-3 gap-2 px-5 pb-5">
                  {['build', 'scale', 'impact'].map((metric, metricIndex) => (
                    <div key={metric} className="rounded-md border border-border bg-surface/40 px-2.5 py-2">
                      <div className="text-[9px] font-mono uppercase tracking-[0.08em] text-text-dim">{metric}</div>
                      <div className="mt-1 text-xs font-mono text-text">
                        {String(72 + ((index + 1) * 7 + metricIndex * 5) % 24).padStart(2, '0')}%
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

function SparklineGraph({ data, color }: { data: number[]; color: string }) {
  const width = 240;
  const height = 80;

  const points = data.map((v, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - (v / 100) * height,
  }));

  const pathD = points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(' ');
  const areaD = `${pathD} L${width},${height} L0,${height} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      {[0.25, 0.5, 0.75].map((r) => (
        <line
          key={r}
          x1={0}
          y1={height * r}
          x2={width}
          y2={height * r}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.5"
        />
      ))}
      <motion.path
        d={areaD}
        fill="url(#sparkGrad)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      />
      <motion.circle
        cx={points.at(-1)!.x}
        cy={points.at(-1)!.y}
        r="3"
        fill={color}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        viewport={{ once: true }}
      />
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.12" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TerminalOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
  const lines = [
    `❯ ./inspect --project="${project.title}"`,
    '[INFO] Locating project data... OK',
    '',
    `NAME:    ${project.title}`,
    `TYPE:    ${project.subtitle}`,
    `STATUS:  ${project.live ? 'Deployed (Live)' : 'Development / Repository only'}`,
    `GITHUB:  ${project.github ? 'Available' : 'Private'}`,
    '',
    '[INFO] Analyzing tech stack...',
    ...project.tech.map((t) => `  [+] Loaded dependency: ${t}`),
    '',
    '[INFO] Fetching core description...',
    ...project.description
      .split('. ')
      .filter((s) => s.trim().length > 0)
      .map((s) => `  > ${s.trim()}${s.trim().endsWith('.') ? '' : '.'}`),
    '',
    '[INFO] Project analysis complete.',
    '❯ _',
  ];

  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) {
      return;
    }

    const line = lines[currentLine];

    if (line === '' || line === '❯ _') {
      setTypedLines((prev) => [...prev, line]);
      setCurrentLine((lineIndex) => lineIndex + 1);
      setCurrentChar(0);
      return;
    }

    if (currentChar <= line.length) {
      const delay = line.startsWith('❯') ? 25 : 8;
      const timeout = setTimeout(() => {
        setTypedLines((prev) => {
          const next = [...prev];
          next[currentLine] = line.substring(0, currentChar + 1);
          return next;
        });
        setCurrentChar((charIndex) => charIndex + 1);
      }, currentChar === 0 ? 80 : delay);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentLine((lineIndex) => lineIndex + 1);
      setCurrentChar(0);
    }, 60);

    return () => clearTimeout(timeout);
  }, [currentLine, currentChar, lines]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl rounded-xl border border-border bg-[#0A0A0C] overflow-hidden shadow-2xl h-[75vh] md:h-[650px] flex flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0">
          <span className="text-[11px] font-mono text-text-dim">~/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
          <button onClick={onClose} className="text-text-dim hover:text-text transition-colors">
            <FiX className="w-4 h-4" />
          </button>
        </div>
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

function OtherCard({ project }: { project: Project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full overflow-hidden rounded-xl border border-border bg-[#0C0C0E] transition-all duration-300 hover:-translate-y-1 hover:border-border-hover"
    >
      <div className="relative px-5 py-3 border-b border-border flex items-center justify-between">
        <span className="text-[10px] font-mono text-text-dim">~/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
        <FiArrowUpRight className="w-3.5 h-3.5 text-text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(90deg,transparent,rgba(200,162,248,0.08),transparent)]" />
      </div>

      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold leading-tight text-text transition-colors group-hover:text-accent-bright">{project.title}</h3>
          <span className="shrink-0 rounded-full border border-border px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.08em] text-text-dim">
            repo
          </span>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-text-muted">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="rounded border border-border/50 bg-surface px-2.5 py-1 text-[10px] font-mono text-text-dim">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded border border-border/50 bg-surface px-2.5 py-1 text-[10px] font-mono text-text-dim">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
