// ══════════════════════════════════════════════
// SHARED FRAMER MOTION VARIANTS
// ══════════════════════════════════════════════
import type { Variants } from 'framer-motion';

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -80, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 80, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.88, opacity: 0, filter: 'blur(12px)' },
  visible: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EXPO_OUT },
  },
};

export const textMask: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.8, ease: EXPO_OUT },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export const letterStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

export const letterChild: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: EXPO_OUT },
  },
};
