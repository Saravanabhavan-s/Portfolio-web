'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { LINKS, MAIL_TO } from '@/lib/constants';
import { TextMaskReveal, ScrollReveal } from '@/components/shared/ScrollReveal';
import { staggerSlow, scaleIn } from '@/lib/animations';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
    } catch {
      const el = document.createElement('textarea');
      el.value = LINKS.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: FiGithub, href: LINKS.githubProfile, label: 'GitHub' },
    { icon: FiLinkedin, href: LINKS.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: LINKS.x, label: 'Twitter' },
    { icon: FiMail, href: MAIL_TO, label: 'Email' },
  ];

  return (
    <section id="contact" className="relative z-10 section-shell min-h-[58vh] flex items-center justify-center">
      <div className="section-container text-center">
        {/* Terminal-style header */}
        <ScrollReveal variant="fade-up" className="mb-4">
          <span className="text-[11px] font-mono text-text-dim">~/contact</span>
        </ScrollReveal>
        <TextMaskReveal className="mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text leading-none">
            Let&apos;s talk
          </h2>
        </TextMaskReveal>

        <ScrollReveal variant="fade-up" delay={0.15} className="mb-10 md:mb-11">
          <p className="text-text-muted text-base max-w-md mx-auto leading-8 font-mono text-sm">
            <span className="text-accent">❯</span> Got a project or just want to chat? Drop me a line.
          </p>
        </ScrollReveal>

        {/* Email in terminal-style card */}
        <ScrollReveal variant="fade-up" delay={0.25} className="mb-10 md:mb-11">
          <div className="inline-block rounded-xl border border-border bg-[#0C0C0E] overflow-hidden">
            <div className="px-5 py-2 border-b border-border">
              <span className="text-[10px] font-mono text-text-dim">~/mail</span>
            </div>
            <div className="px-6 py-4">
              <button onClick={copyEmail} className="group relative inline-block">
                <span className="font-mono text-lg sm:text-xl text-text-muted hover:text-text transition-colors">
                  {LINKS.email}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-px bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }} />
              </button>
              <motion.div
                initial={false}
                animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 8 }}
                className="mt-3 text-xs font-mono text-accent"
              >
                Copied to clipboard ✓
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              variants={scaleIn}
              href={s.href}
              target={s.label === 'Email' ? undefined : '_blank'}
              rel={s.label === 'Email' ? undefined : 'noopener noreferrer'}
              aria-label={s.label}
              className="w-10 h-10 rounded-lg border border-border bg-[#0C0C0E] flex items-center justify-center text-text-dim hover:text-accent hover:border-border-hover transition-all duration-300"
            >
              <s.icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
