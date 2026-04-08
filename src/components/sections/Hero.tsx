'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { SITE, LINKS } from '@/lib/constants';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const TITLES = ['Backend Developer', 'AI Developer', 'System Architect'];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [displayText, setDisplayText] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [greeting, setGreeting] = useState('Hello');

  // Time-based greeting
  useEffect(() => {
    const h = new Date().getHours();
    if (h < 12) setGreeting('Good morning');
    else if (h < 17) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  // Typing effect
  useEffect(() => {
    const current = TITLES[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIdx((p) => (p + 1) % TITLES.length);
    } else {
      timeout = setTimeout(
        () => setDisplayText(isDeleting ? current.substring(0, displayText.length - 1) : current.substring(0, displayText.length + 1)),
        isDeleting ? 35 : 70
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIdx]);

  // GSAP stagger entrance
  useEffect(() => {
    if (reduced || !heroRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.hero-tag', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 })
        .fromTo('.hero-greeting', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-name', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-typed', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-terminal', { opacity: 0, y: 30, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, '-=0.2')
        .fromTo('.hero-btns', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-socials', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, [reduced]);

  // Mouse parallax on orbs
  useEffect(() => {
    if (reduced) return;
    const handleMouse = (e: MouseEvent) => {
      if (!orbsRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(Array.from(orbsRef.current.children), {
        x: (_i: number) => x * (_i + 1) * 0.4,
        y: (_i: number) => y * (_i + 1) * 0.4,
        duration: 1.2, ease: 'power2.out',
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [reduced]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32"
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Background orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/8 blur-[100px]" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full bg-chart-2/8 blur-[80px]" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-56 md:h-72"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,11,0) 0%, rgba(10,10,11,0.72) 60%, rgba(10,10,11,1) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      />

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        {/* Availability tag */}
        <div className="hero-tag opacity-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border mb-8 md:mb-9 text-[13px] text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          {SITE.tagline}
        </div>

        {/* Greeting */}
        <p className="hero-greeting opacity-0 text-text-muted text-base mb-4">
          {greeting} 👋
        </p>

        {/* Name */}
        <h1 className="hero-name opacity-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 md:mb-6">
          I&apos;m{' '}
          <span className="gradient-text-accent">{SITE.name}</span>
        </h1>

        {/* Typed title */}
        <div className="hero-typed opacity-0 text-xl sm:text-2xl md:text-3xl font-semibold text-accent-bright mb-7 md:mb-8 min-h-[2.5rem]">
          <span>{displayText}</span>
          <span className="inline-block w-0.5 h-[1.2em] bg-accent ml-1 animate-pulse align-middle" />
        </div>

        {/* Education */}
        <p className="hero-education opacity-0 text-sm sm:text-base text-text-muted font-mono tracking-wide mb-8">
          Sathyabama Institute of Science and Technology · B.E CSE
        </p>

        {/* Description */}
        <p className="hero-desc opacity-0 text-[15px] md:text-base text-text-muted max-w-xl mx-auto mb-11 md:mb-12 leading-8">
          I architect scalable backend systems, build GenAI applications, and ship products that matter.
        </p>

        {/* Status terminal card */}
        <div className="hero-terminal relative z-20 opacity-0 w-full max-w-2xl mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="rounded-2xl border border-border bg-[#0C0C0E]/95 shadow-[0_24px_80px_rgba(0,0,0,0.35)] overflow-hidden text-left backdrop-blur-md">
            <div className="px-5 py-3 border-b border-border flex items-center">
              <span className="text-[11px] font-mono text-text-dim">~/status</span>
            </div>
            <div className="p-6 md:p-7 font-mono text-[13px] md:text-sm leading-relaxed">
              <div className="flex gap-2 text-text-muted">
                <span className="text-accent">❯</span>
                <span className="text-text font-medium">cat current.md</span>
              </div>
              <div className="mt-3 space-y-1.5 pl-4 text-text-muted">
                <div><span className="text-text-dim">→</span> building GenAI auditing platforms</div>
                <div><span className="text-text-dim">→</span> exploring distributed systems & backend architecture</div>
                <div><span className="text-text-dim">→</span> working with FastAPI, LangChain, RAG pipelines</div>
                <div><span className="text-text-dim">→</span> stack: Python, Node.js, React, Docker</div>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="text-accent">❯</span>
                <span className="inline-block w-2.5 h-4 bg-accent/60 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="hero-btns opacity-0 mt-2 md:mt-3 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-9 md:mb-10">
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="w-full max-w-[320px] sm:w-auto sm:max-w-none px-7 sm:px-10 lg:px-11 py-3 sm:py-4 rounded-xl bg-accent/15 border border-accent/25 text-accent font-semibold text-sm hover:bg-accent/25 transition-all inline-flex items-center justify-center gap-2.5 sm:gap-3"
          >
            <FiExternalLink className="w-4 h-4" />
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="w-full max-w-[320px] sm:w-auto sm:max-w-none px-7 sm:px-10 lg:px-11 py-3 sm:py-4 rounded-xl border border-border text-text-muted hover:text-text hover:border-border-hover font-semibold text-sm transition-all inline-flex items-center justify-center"
          >
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="hero-socials opacity-0 flex items-center justify-center gap-3">
          {[
            { icon: FiGithub, href: LINKS.githubProfile, label: 'GitHub' },
            { icon: FaXTwitter, href: LINKS.x, label: 'X' },
            { icon: FaLinkedinIn, href: LINKS.linkedin, label: 'LinkedIn' },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-text-dim hover:text-accent hover:border-border-hover transition-all duration-300"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
