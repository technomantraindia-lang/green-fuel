import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ayurvedaBg from '../assets/new-images/split_ayurveda_herbs.png'
import scienceBg from '../assets/new-images/split_science_lab.png'

gsap.registerPlugin(ScrollTrigger)

export default function TraditionScienceSplit() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const centerRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
        }
      )
      gsap.fromTo(
        centerRef.current,
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 1, delay: 0.15, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' }
        }
      )
      gsap.fromTo(
        rightRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="tradition-science" className="ts-section">
      <div className="ts-banner">
        {/* Left Panel — Ayurveda */}
        <div ref={leftRef} className="ts-panel ts-panel-left">
          <img src={ayurvedaBg} alt="Ayurvedic Heritage" className="ts-panel-bg" />
          <div className="ts-panel-overlay ts-overlay-warm"></div>
          <div className="ts-panel-text">
            <h3 className="ts-panel-title">Ayurveda</h3>
            <p className="ts-panel-desc">Timeless wisdom of<br />herbs and rituals.</p>
          </div>
        </div>

        {/* Center Arch Bridge */}
        <div ref={centerRef} className="ts-center-arch">
          <h2 className="ts-arch-title">
            Tradition<br />
            <span className="ts-arch-x">×</span><br />
            Science
          </h2>
          <p className="ts-arch-desc">
            Authentic Ayurvedic heritage, refined by science for today's skin and hair.
          </p>
          {/* Small leaf flourish */}
          <div className="ts-arch-flourish">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M10 18C10 18 8 12 12 8C16 4 22 6 22 6C22 6 20 12 16 16C12 20 10 18 10 18Z" stroke="#6B7D5A" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M12 8C12 8 14 11 16 16" stroke="#6B7D5A" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M7 22C9 19 12 18 15 18" stroke="#6B7D5A" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Right Panel — Modern Science */}
        <div ref={rightRef} className="ts-panel ts-panel-right">
          <img src={scienceBg} alt="Modern Laboratory Science" className="ts-panel-bg" />
          <div className="ts-panel-overlay ts-overlay-cool"></div>
          <div className="ts-panel-text">
            <h3 className="ts-panel-title">Modern Science</h3>
            <p className="ts-panel-desc">Research-led innovation<br />for real results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
