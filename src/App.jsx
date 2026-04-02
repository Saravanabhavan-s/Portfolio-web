import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import FeaturedProjects from './components/FeaturedProjects'
import OtherProjects from './components/OtherProjects'
import About from './components/About'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <div className="noise-bg relative min-h-screen">
      <Navbar />
      <main className="flex flex-col gap-14 md:gap-20 pt-20 md:pt-24 pb-28 md:pb-36">
        <Hero />
        <Stats />
        <FeaturedProjects />
        <OtherProjects />
        <About />
        <Experience />
        <Achievements />
        <Technologies />
      </main>
      <Footer />
    </div>
  )
}

export default App
