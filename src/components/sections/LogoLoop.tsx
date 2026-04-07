'use client';

import { TECH_LOGOS } from '@/lib/constants';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function LogoLoop() {
  // Double the logos for infinite scroll effect
  const logos = [...TECH_LOGOS, ...TECH_LOGOS];

  return (
    <section id="logoloop" className="relative z-10 py-16 md:py-20">
      <div className="section-container mb-8">
        <ScrollReveal variant="fade-left">
          <span className="font-display text-[10px] font-medium tracking-[3px] uppercase text-accent">
            Technologies I Use
          </span>
        </ScrollReveal>
      </div>

      <div
        className="border-t border-b border-border py-6 overflow-hidden"
        style={{
          mask: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMask: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          height: 80,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="flex gap-8 items-center"
          style={{
            animation: 'marquee 30s linear infinite',
            width: 'max-content',
          }}
        >
          {logos.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-sm font-mono text-text-dim whitespace-nowrap px-4 py-2 border border-border/40 hover:text-accent hover:border-accent/30 transition-colors flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
