import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function GSAPBackground() {
  const noiseRef = useRef(null)

  useEffect(() => {
    // Create an infinite shifting animation for the noise texture
    // It moves left and up, and resets to create a continuous film-grain flow
    gsap.to(noiseRef.current, {
      backgroundPositionX: "-=256px",
      backgroundPositionY: "-=256px",
      repeat: -1,
      duration: 30, // slow, subtle, premium feel
      ease: "none"
    })
  }, [])

  return (
    <div className="fixed inset-0 z-0 bg-[#0a0a0f] overflow-hidden pointer-events-none">
      <div 
        ref={noiseRef}
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px'
        }}
      />
      {/* Soft gradient overlay to blend corners into pure darkness */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(10,10,15,0.8)_100%)] z-10" />
    </div>
  )
}
