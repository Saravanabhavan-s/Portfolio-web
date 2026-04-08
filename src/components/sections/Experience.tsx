'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCES } from '@/lib/constants';
import { ScrollReveal, TextMaskReveal } from '@/components/shared/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const lineRef = useRef<SVGLineElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;
    const line = lineRef.current;
    const length = line.getTotalLength();
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;

    const ctx = gsap.context(() => {
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 30%',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative z-10 section-shell">
      <div className="section-container">
        {/* Terminal-style header */}
        <ScrollReveal variant="fade-up" className="mb-4">
          <span className="text-[11px] font-mono text-text-dim">~/experience</span>
        </ScrollReveal>
        <TextMaskReveal className="mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">Experience</h2>
        </TextMaskReveal>
        <ScrollReveal variant="fade-up" className="mb-10 md:mb-12">
          <p className="text-text-muted max-w-2xl leading-8 font-mono text-sm">
            <span className="text-accent">❯</span> Where I&apos;ve been and what I&apos;ve learned along the way.
          </p>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          <svg className="absolute left-3 md:left-6 top-0 bottom-0 w-px h-full" style={{ overflow: 'visible' }}>
            <line ref={lineRef} x1="0" y1="0" x2="0" y2="100%" stroke="#C8A2F8" strokeWidth="1" />
          </svg>

          <div className="flex flex-col gap-6 md:gap-8">
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={exp.role} variant="fade-up" delay={i * 0.06}>
                <div className="relative pl-10 md:pl-16">
                  <div
                    className="absolute left-3 md:left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 z-10"
                    style={exp.current ? { animation: 'pulse-glow 3s infinite' } : {}}
                  />

                  {/* Terminal-style experience card */}
                  <div className="rounded-xl border border-border bg-[#0C0C0E] overflow-hidden hover:border-border-hover transition-all duration-300">
                    {/* Card header bar */}
                    <div className="px-5 py-2.5 border-b border-border flex items-center justify-between">
                      <span className="text-[10px] font-mono text-text-dim">{exp.company.toLowerCase().replace(/\s+/g, '-')}</span>
                      <span className="text-[10px] font-mono text-accent bg-accent-dim px-2.5 py-0.5 rounded">{exp.period}</span>
                    </div>

                    <div className="p-5 md:p-6 lg:p-7">
                      <h3 className="text-base font-semibold text-text mb-2">{exp.role}</h3>
                      <p className="text-sm text-accent/70 mb-4 font-mono">{exp.company}</p>
                      <p className="text-sm text-text-muted leading-relaxed mb-5">{exp.description}</p>
                      <ul className="space-y-2 mb-5">
                        {exp.highlights.map((h) => (
                          <li key={h} className="text-sm text-text-muted flex gap-2 font-mono">
                            <span className="text-accent/50 mt-0.5 shrink-0">→</span>{h}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-3 py-1 text-[10px] font-mono text-text-dim rounded bg-surface border border-border/50">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
