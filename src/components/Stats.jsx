import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useScrollReveal from '../hooks/useScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 4, suffix: '+', label: 'Projects Built', icon: '🚀' },
  { value: 100, suffix: '+', label: 'GitHub Contributions', icon: '⭐' },
  { value: 15, suffix: '+', label: 'Technologies', icon: '🛠️' },
  { value: 2, suffix: '+', label: 'Years Learning', icon: '📚' },
]

export default function Stats() {
  const sectionRef = useScrollReveal()
  const countersRef = useRef([])

  useEffect(() => {
    countersRef.current.forEach((el, i) => {
      if (!el) return
      const target = STATS[i].value

      gsap.fromTo(
        { val: 0 },
        { val: 0 },
        {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val)
          },
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-14 md:py-24 relative z-10">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal="up"
              data-reveal-delay={String(i * 0.05)}
              className="glass rounded-2xl min-h-[145px] sm:min-h-[155px] p-5 sm:p-6 md:p-8 text-center glow-border-hover transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center justify-center"
            >
              <div className="text-2xl mb-2.5 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-text mb-1 flex items-center justify-center gap-0.5 leading-none">
                <span ref={(el) => (countersRef.current[i] = el)}>0</span>
                <span className="gradient-text-accent">{stat.suffix}</span>
              </div>
              <div className="text-sm text-text-muted font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
