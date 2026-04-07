'use client';
// ══════════════════════════════════════════════
// GSAP PLUGIN REGISTRATION
// ══════════════════════════════════════════════
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function registerGSAP() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({
    ease: 'expo.out',
    duration: 0.7,
  });
  registered = true;
}

export { gsap, ScrollTrigger };
