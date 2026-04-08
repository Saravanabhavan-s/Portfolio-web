'use client';

import { SITE } from '@/lib/constants';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-border">
      <ScrollReveal variant="fade-up">
        <div className="section-container py-8 md:py-9 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-dim font-mono">
            <span className="text-accent/50">❯</span> Built with obsession. &copy; {new Date().getFullYear()} {SITE.name}
          </p>
          <button
            onClick={scrollToTop}
            className="text-sm text-text-dim font-mono hover:text-accent transition-colors link-draw"
          >
            cd ~ ↑
          </button>
        </div>
      </ScrollReveal>
    </footer>
  );
}
