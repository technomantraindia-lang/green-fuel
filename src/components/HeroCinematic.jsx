import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroVideo from '../assets/hero-video.mp4'
import heroBg from '../assets/new-images/hero_woman_product.png'
import { ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HeroCinematic() {
  const containerRef = useRef(null)
  const bgRef = useRef(null)
  const headlineRef = useRef(null)
  const scrollCueRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Intro animations
      if (headlineRef.current && headlineRef.current.children && headlineRef.current.children.length > 0) {
        gsap.fromTo(
          headlineRef.current.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
        )
      }

      // Scroll trigger slow zoom & fade
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          scale: 1.08,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        })
      }

      if (scrollCueRef.current) {
        gsap.to(scrollCueRef.current, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '30% top',
            scrub: true
          }
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth'
    })
  }

  return (
    <section ref={containerRef} className="hero-cinematic">
      <div className="hero-media-wrapper">
        <div ref={bgRef} className="hero-bg-inner">
          <video autoPlay loop muted playsInline poster={heroBg} className="hero-video-media">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-overlay-gradient"></div>
        </div>
      </div>

      <div className="hero-content-container">
        <div ref={headlineRef} className="hero-text-block">
          <span className="hero-tagline">AYURVEDIC BOTANICAL RESEARCH</span>
          <h1 className="hero-main-title">
            Ancient Wisdom.<br />
            <span className="serif-italic">Modern Science.</span>
          </h1>
          <p className="hero-subtitle">
            Where Tradition Becomes Tomorrow...
          </p>
          <div className="hero-cta-wrapper">
            <a href="#rituals" className="btn-primary-golden">
              Explore Rituals
            </a>
          </div>
        </div>
      </div>

      <div ref={scrollCueRef} className="hero-scroll-cue" onClick={handleScrollDown}>
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown size={14} className="cue-arrow-icon" />
      </div>
    </section>
  )
}
