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
    <section ref={sectionRef} id="experience" className="relative z-10 py-32 md:py-44">
      <div className="section-container">
        <TextMaskReveal className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">Experience</h2>
        </TextMaskReveal>
        <ScrollReveal variant="fade-up" className="mb-20 md:mb-28">
          <p className="text-text-muted max-w-lg">Where I&apos;ve been and what I&apos;ve learned along the way.</p>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          <svg className="absolute left-3 md:left-6 top-0 bottom-0 w-px h-full" style={{ overflow: 'visible' }}>
            <line ref={lineRef} x1="0" y1="0" x2="0" y2="100%" stroke="#C8A2F8" strokeWidth="1" />
          </svg>

          <div className="flex flex-col gap-12 md:gap-16">
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={exp.role} variant="fade-up" delay={i * 0.06}>
                <div className="relative pl-10 md:pl-16">
                  <div
                    className="absolute left-3 md:left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 z-10"
                    style={exp.current ? { animation: 'pulse-glow 3s infinite' } : {}}
                  />

                  <div className="rounded-xl border border-border bg-bg-card p-6 md:p-8 hover:border-border-hover transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="text-base font-semibold text-text">{exp.role}</h3>
                      <span className="text-[11px] font-mono text-accent bg-accent-dim px-2.5 py-1 rounded-md whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-sm text-accent/70 mb-3">{exp.company}</p>
                    <p className="text-sm text-text-muted leading-relaxed mb-4">{exp.description}</p>
                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((h) => (
                        <li key={h} className="text-sm text-text-muted flex gap-2">
                          <span className="text-accent/50 mt-0.5 shrink-0">—</span>{h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-text-dim rounded bg-surface border border-border/50">{t}</span>
                      ))}
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
