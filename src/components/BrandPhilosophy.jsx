import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import botanicalBowlsImg from '../assets/new-images/what_is_botanical_bowls.png'
import labFlasksImg from '../assets/new-images/what_is_lab_flasks.png'
import copperVesselsImg from '../assets/new-images/what_is_copper_vessels.png'

gsap.registerPlugin(ScrollTrigger)

export default function BrandPhilosophy() {
  const sectionRef = useRef(null)
  const leftColRef = useRef(null)
  const blockRef = useRef(null)
  const badgeRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Left text reveal
      if (leftColRef.current && leftColRef.current.children) {
        gsap.fromTo(
          leftColRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%'
            }
          }
        )
      }

      // Right 3-image block reveal
      if (blockRef.current) {
        gsap.fromTo(
          blockRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%'
            }
          }
        )
      }

      // Floating Badge reveal
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { y: 30, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 0.35,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 65%'
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="philosophy" className="philosophy-section">
      <div className="philosophy-container">
        {/* Left Editorial Copy Block */}
        <div ref={leftColRef} className="philosophy-left">
          <div className="philosophy-leaf-logo">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 30C14 30 11 20 18 13C25 6 34 8 34 8C34 8 32 17 25 24C18 31 14 30 14 30Z" stroke="#4A614A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 13C18 13 22 18 25 24" stroke="#4A614A" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 34C13 30 18 29 23 29" stroke="#4A614A" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M23 19C25 17 29 16 33 16" stroke="#4A614A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <span className="global-section-badge">BRAND PHILOSOPHY</span>
          <h2 className="philosophy-title">What is Greenfuel?</h2>

          <p className="philosophy-core-statement">
            Every Greenfuel formulation combines modern dermatological science with the timeless wisdom of Ayurveda.
          </p>

          <p className="philosophy-body-text">
            Long before laboratory chemistry synthesized isolated compounds, Ayurvedic wisdom had mapped the holistic harmony of botanical extracts and human vitality.
          </p>

          <p className="philosophy-body-text">
            Greenfuel bridges this divide—extracting clinically validated phytochemicals while honoring authentic Vedic preparation rituals. We formulate pure, high-efficacy remedies for modern skin and hair needs.
          </p>
        </div>

        {/* Right Section: All 3 Images Joined Seamlessly (0 Gap) */}
        <div className="philosophy-right">
          <div ref={blockRef} className="trio-seamless-block">
            <img src={botanicalBowlsImg} alt="Vedic Botanical Preparation" className="seamless-img" />
            <img src={labFlasksImg} alt="Laboratory Phytochemical Extraction" className="seamless-img" />
            <img src={copperVesselsImg} alt="Traditional Copper Pot Distillation" className="seamless-img" />

            {/* Overlapping Translucent See-Through Dark Green Badge Card */}
            <div ref={badgeRef} className="trio-badge-card see-through">
              <p className="trio-badge-text">
                Ancient<br />
                rituals meet<br />
                modern<br />
                science.
              </p>
              <div className="trio-badge-icons">
                {/* Leaf Icon SVG */}
                <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="#FAF8F5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 26C8 26 7 14 17 7C27 2 31 5 31 5C31 5 29 15 20 21C11 27 8 26 8 26Z" />
                  <path d="M17 7C17 7 19 13 20 21" />
                  <path d="M5 30C10 28 15 27 19 27" />
                </svg>
                {/* Lab Flask Icon SVG */}
                <svg width="34" height="34" viewBox="0 0 36 36" fill="none" stroke="#FAF8F5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 4h8" />
                  <path d="M16 4v8L8 25.5A2.5 2.5 0 0 0 10.2 29h15.6a2.5 2.5 0 0 0 2.2-3.5L20 12V4" />
                  <path d="M10.5 21h15" />
                  <circle cx="18" cy="24.5" r="1.5" fill="#FAF8F5" opacity="0.85" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
