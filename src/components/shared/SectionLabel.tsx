'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { SECTIONS } from '@/lib/constants';
import { useSectionInView } from '@/hooks/useSectionInView';

export function SectionLabel() {
  const active = useSectionInView(SECTIONS);
  const index = SECTIONS.indexOf(active as typeof SECTIONS[number]);
  const label = String(index + 1).padStart(2, '0');

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-xs text-text-dim tracking-widest"
        >
          {label}
        </motion.span>
      </AnimatePresence>
      <div className="w-px h-8 bg-border" />
    </div>
  );
}
