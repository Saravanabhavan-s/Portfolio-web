'use client';

import { useMemo } from 'react';
import { ACHIEVEMENTS, CERTIFICATIONS, EXPERIENCES } from '@/lib/constants';
import { ScrollReveal, TextMaskReveal } from '@/components/shared/ScrollReveal';

export function Experience() {
  const certificationGroups = useMemo(() => {
    return CERTIFICATIONS.reduce<Record<string, typeof CERTIFICATIONS>>((acc, cert) => {
      if (!acc[cert.issuer]) acc[cert.issuer] = [];
      acc[cert.issuer].push(cert);
      return acc;
    }, {});
  }, []);

  return (
    <section id="experience" className="relative z-10 section-shell">
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

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-8 xl:gap-10">
          <div>
            <ScrollReveal variant="fade-up" className="mb-4">
              <h3 className="text-lg font-semibold text-text">Experience</h3>
            </ScrollReveal>

            <div className="relative">
              <div aria-hidden className="absolute left-3 md:left-6 top-1.5 bottom-1.5 w-px -translate-x-1/2 bg-border/90" />
              <div aria-hidden className="absolute left-3 md:left-6 top-1.5 bottom-1.5 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/90 to-transparent opacity-80 animate-pulse" />

              <div className="flex flex-col gap-6 md:gap-8">
                {EXPERIENCES.map((exp, i) => (
                  <ScrollReveal key={exp.role} variant="fade-up" delay={i * 0.06}>
                    <div className="relative pl-10 md:pl-16">
                      <div
                        className="absolute left-3 md:left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 z-10"
                        style={exp.current ? { animation: 'pulse-glow 3s infinite' } : {}}
                      />

                      <div className="rounded-xl border border-border bg-[#0C0C0E] overflow-hidden hover:border-border-hover transition-all duration-300">
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

          <div className="space-y-5 self-start">
            <div className="mb-4 border-b border-border/70 pb-2">
              <h3 className="text-lg font-semibold text-text">Achievements</h3>
            </div>

            <div className="rounded-xl border border-border bg-[#0C0C0E] overflow-hidden">
              <div className="px-5 py-2.5 border-b border-border flex items-center justify-end">
                <span className="text-[10px] font-mono text-accent bg-accent-dim px-2.5 py-0.5 rounded">
                  {ACHIEVEMENTS.length} items
                </span>
              </div>

              <div className="p-5 md:p-6 space-y-4">
                {ACHIEVEMENTS.map((item) => (
                  <article key={item.title} className="rounded-lg border border-border/70 bg-surface/40 p-4">
                    <p className="text-sm text-text leading-snug font-semibold">🏆 {item.title}</p>
                    <p className="text-sm text-text-muted mt-2 leading-relaxed">{item.details}</p>
                    {item.period ? <p className="mt-3 text-[11px] font-mono text-accent/80">{item.period}</p> : null}
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-[#0C0C0E] overflow-hidden">
              <div className="px-5 py-2.5 border-b border-border flex items-center justify-between">
                <span className="text-[10px] font-mono text-text-dim">certifications</span>
                <span className="text-[10px] font-mono text-accent bg-accent-dim px-2.5 py-0.5 rounded">
                  {CERTIFICATIONS.length} items
                </span>
              </div>

              <div className="p-5 md:p-6 space-y-3">
                {Object.entries(certificationGroups).map(([issuer, certs]) => (
                  <section key={issuer} className="rounded-lg border border-border/70 bg-surface/40 p-3.5">
                    <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-accent/80">{issuer}</p>
                    <ul className="mt-2.5 space-y-2.5">
                      {certs.map((cert) => (
                        <li key={`${cert.title}-${cert.year}`} className="text-sm text-text-muted">
                          <p className="text-sm text-text leading-snug">• {cert.title}</p>
                          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono text-accent/80">
                            <span>{cert.year}</span>
                            {cert.credentialId ? <span>ID: {cert.credentialId}</span> : null}
                          </div>
                          {cert.link ? (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-2 inline-flex text-[11px] font-mono text-accent hover:text-accent-bright transition-colors"
                            >
                              View Certificate →
                            </a>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
