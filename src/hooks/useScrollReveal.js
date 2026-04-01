import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-reveal hook — sections assemble on scroll-down, disassemble on scroll-up.
 *
 * Usage:
 *   const sectionRef = useScrollReveal()
 *   <section ref={sectionRef}> ... children with data-reveal attributes ... </section>
 *
 * Add data attributes to children:
 *   data-reveal="up"       → slide up + fade
 *   data-reveal="left"     → slide from left
 *   data-reveal="right"    → slide from right
 *   data-reveal="scale"    → scale in + fade
 *   data-reveal="fade"     → fade only
 *   data-reveal-delay="0.1" → per-element extra delay (optional)
 *   data-reveal-stagger     → parent whose direct children stagger-reveal
 */
export default function useScrollReveal(options = {}) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Individual reveal elements
      const revealEls = el.querySelectorAll('[data-reveal]')
      revealEls.forEach((child) => {
        const type = child.getAttribute('data-reveal')
        const delay = parseFloat(child.getAttribute('data-reveal-delay') || '0')

        const from = { opacity: 0 }
        switch (type) {
          case 'up':
            from.y = 60
            break
          case 'down':
            from.y = -60
            break
          case 'left':
            from.x = -80
            break
          case 'right':
            from.x = 80
            break
          case 'scale':
            from.scale = 0.85
            break
          case 'fade':
          default:
            break
        }

        gsap.fromTo(
          child,
          from,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: child,
              start: options.start || 'top 90%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      })

      // Stagger groups
      const staggerGroups = el.querySelectorAll('[data-reveal-stagger]')
      staggerGroups.forEach((group) => {
        const children = group.children
        if (!children.length) return

        gsap.fromTo(
          children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: options.start || 'top 90%',
              toggleActions: 'play reverse play reverse',
            },
          }
        )
      })
    }, el)

    return () => ctx.revert()
  }, [options.start])

  return sectionRef
}
