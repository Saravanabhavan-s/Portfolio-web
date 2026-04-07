'use client';

import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type RevealVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'text-mask' | 'line-by-line';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'span';
}

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const variantMap: Record<RevealVariant, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -80, filter: 'blur(6px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 80, filter: 'blur(6px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  'scale-in': {
    hidden: { scale: 0.88, opacity: 0, filter: 'blur(12px)' },
    visible: { scale: 1, opacity: 1, filter: 'blur(0px)' },
  },
  'text-mask': {
    hidden: { y: '110%' },
    visible: { y: '0%' },
  },
  'line-by-line': {
    hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
};

const noMotion: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.15,
  once = true,
  className = '',
  as = 'div',
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ threshold, triggerOnce: once });

  const variants = reduced ? noMotion : variantMap[variant];
  const Component = motion[as];

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: variant === 'text-mask' ? 0.8 : 0.7,
        ease: EXPO_OUT,
        delay,
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

// Text mask wrapper - wraps each line in overflow-hidden
export function TextMaskReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={reduced ? {} : { y: '110%' }}
        animate={inView ? { y: '0%' } : { y: '110%' }}
        transition={{
          duration: 0.8,
          ease: EXPO_OUT,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
