'use client';

import { ABOUT } from '@/lib/constants';
import { ScrollReveal, TextMaskReveal } from '@/components/shared/ScrollReveal';

export function About() {
  const profilePreview = {
    role: 'Backend + AI Developer',
    stack: 'FastAPI, Node.js, MongoDB',
    ai: 'RAG and LLM evaluation',
    building: 'Production APIs and AI workflows',
    location: 'India',
    style: 'Practical and execution-focused',
  };

  const previewEntries = Object.entries(profilePreview);

  return (
    <section id="about" className="relative z-10 section-shell">
      <div className="section-container">
        <ScrollReveal variant="fade-up" className="mb-4">
          <span className="text-[11px] font-mono text-text-dim">~/about</span>
        </ScrollReveal>

        <TextMaskReveal className="mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">About</h2>
        </TextMaskReveal>

        <ScrollReveal variant="fade-up" className="mb-9 md:mb-11">
          <p className="text-text-muted max-w-xl leading-8 font-mono text-sm">
            <span className="text-accent">❯</span> Quietly building useful software with a backend-first mindset.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_460px] gap-8 lg:gap-12 items-start">
          <div className="border-t border-border pt-6 md:pt-7">
            <ScrollReveal variant="fade-up">
              <p className="text-[15px] md:text-base text-text-muted leading-8 max-w-2xl">
                I build backend systems that are stable in production, easy to maintain, and useful for real users.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.08}>
              <p className="text-[15px] md:text-base text-text-muted leading-8 max-w-2xl mt-4 md:mt-5">
                My recent work focuses on APIs, auth flows, data handling, and GenAI features like RAG and evaluation.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.16}>
              <p className="text-[15px] md:text-base text-text-muted leading-8 max-w-2xl mt-4 md:mt-5">
                I enjoy turning complex requirements into clear architecture and shipping end-to-end features quickly.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={0.24}>
              <p className="text-[12px] font-mono text-text-dim mt-6 md:mt-7">
                {ABOUT.terminal.fileName} is a short snapshot, not a full autobiography.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-up" delay={0.12}>
            <aside className="lg:sticky lg:top-24 rounded-xl border border-border bg-[#0C0C0E] overflow-hidden">
              <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                <span className="text-[11px] font-mono text-text-dim">{ABOUT.terminal.fileName}</span>
                <span className="text-[10px] font-mono text-text-dim">read only</span>
              </div>

              <div className="px-4 py-4">
                <pre className="text-[11px] leading-6 font-mono text-text-muted whitespace-pre">
                  <code>
                    <span className="text-text-dim">{'{'}</span>
                    {'\n'}
                    {previewEntries.map(([key, value], i) => (
                      <span key={key}>
                        {'  '}
                        <span className="text-accent">&quot;{key}&quot;</span>
                        <span className="text-text-dim">: </span>
                        {Array.isArray(value) ? (
                          <>
                            <span className="text-text-dim">[</span>
                            {value.map((v, vi) => (
                              <span key={`${key}-${v}`}>
                                <span className="text-green">&quot;{v}&quot;</span>
                                {vi < value.length - 1 && <span className="text-text-dim">, </span>}
                              </span>
                            ))}
                            <span className="text-text-dim">]</span>
                          </>
                        ) : (
                          <span className="text-green">&quot;{value}&quot;</span>
                        )}
                        {i < previewEntries.length - 1 && <span className="text-text-dim">,</span>}
                        {'\n'}
                      </span>
                    ))}
                    <span className="text-text-dim">{'}'}</span>
                  </code>
                </pre>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
