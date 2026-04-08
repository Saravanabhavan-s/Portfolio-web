'use client';

import { useInView } from 'react-intersection-observer';

export function SectionDivider() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <div ref={ref} className="section-container py-6 md:py-8">
      <div
        className="h-px bg-border origin-left"
        style={{
          transform: inView ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}
