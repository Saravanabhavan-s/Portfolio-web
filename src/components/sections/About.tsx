'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ABOUT, STATS } from '@/lib/constants';
import { ScrollReveal, TextMaskReveal } from '@/components/shared/ScrollReveal';
import { staggerContainer, fadeUp } from '@/lib/animations';
import { useInView } from 'react-intersection-observer';

export function About() {
  return (
    <section id="about" className="relative z-10 py-32 md:py-44">
      <div className="section-container">
        {/* Header */}
        <TextMaskReveal className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">
            About
          </h2>
        </TextMaskReveal>
        <ScrollReveal variant="fade-up" className="mb-20 md:mb-28">
          <p className="text-text-muted max-w-lg">Backend-focused developer based in India, building systems that solve real problems.</p>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left — Stats + Identity */}
          <div className="w-full lg:w-5/12">
            <div className="lg:sticky lg:top-32">
              {/* Minimal identity card */}
              <ScrollReveal variant="scale-in">
                <div className="relative aspect-[4/3] rounded-2xl border border-border bg-bg-card overflow-hidden flex items-center justify-center">
                  {/* Soft gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent" />
                  <div className="relative text-center">
                    <span className="text-5xl md:text-6xl font-bold gradient-text-accent select-none block">SB</span>
                    <span className="text-[11px] font-mono text-text-dim mt-2 block">backend · ai · fullstack</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stats */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-2 gap-3 mt-6"
              >
                {STATS.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeUp}
                    className="rounded-xl border border-border bg-bg-card p-4 text-center"
                  >
                    <CountUp target={stat.value} suffix={stat.suffix} />
                    <p className="text-[11px] text-text-dim mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right — Bio paragraphs */}
          <div className="w-full lg:w-7/12 space-y-12">
            {ABOUT.bio.map((paragraph, i) => (
              <ScrollReveal key={i} variant="fade-up" delay={i * 0.08}>
                <p className="text-[15px] text-text-muted leading-[1.8]">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}

            {/* Clean code snippet — NO terminal dots */}
            <ScrollReveal variant="fade-up" delay={0.2}>
              <div className="rounded-xl border border-border bg-[#0C0C0E] overflow-hidden">
                <div className="px-5 py-3 border-b border-border flex items-center">
                  <span className="text-[11px] font-mono text-text-dim">{ABOUT.terminal.fileName}</span>
                </div>
                <div className="p-5 overflow-x-auto">
                  <pre className="text-text-muted text-[12px] leading-relaxed font-mono">
                    <code>
                      <span className="text-text-dim">{'{'}</span>
                      {'\n'}
                      {Object.entries(ABOUT.terminal.content).map(([key, value], i, arr) => (
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
                                  {vi < value.length - 1 && <span className="text-text-dim">, </span>}
                                </span>
                              ))}
                              <span className="text-text-dim">]</span>
                            </>
                          ) : (
                            <span className="text-green">&quot;{value}&quot;</span>
                          )}
                          {i < arr.length - 1 && <span className="text-text-dim">,</span>}
                          {'\n'}
                        </span>
                      ))}
                      <span className="text-text-dim">{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <div ref={inViewRef}>
      <span ref={ref} className="text-2xl font-bold text-text">{count}</span>
      <span className="text-xl font-bold text-accent">{suffix}</span>
    </div>
  );
}
