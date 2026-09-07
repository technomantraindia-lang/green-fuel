import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Feather, Mail, Sprout, QrCode, PackageCheck, Leaf, Sparkles } from 'lucide-react'

import unboxingImg from '../assets/new-images/sustainable_unboxing_experience.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function PackagingExperience() {
  const sectionRef = useRef(null)
  const visualRef = useRef(null)
  const cardsRef = useRef([])

  const [activeStep, setActiveStep] = useState(0)

  const elements = [
    {
      id: 'fragrance',
      step: '01',
      icon: Feather,
      title: 'Soft Botanical Fragrance',
      subtitle: 'A sensory arrival',
      desc: 'Infused with therapeutic sandalwood & khus essential oil vapors during custom box assembly to calm your senses upon opening.'
    },
    {
      id: 'parchment',
      step: '02',
      icon: Mail,
      title: 'Ayurvedic Ritual Note',
      subtitle: 'Hand-printed parchment',
      desc: 'Includes custom dosha recommendations, seasonal skincare advice, and traditional application rituals.'
    },
    {
      id: 'seed-paper',
      step: '03',
      icon: Sprout,
      title: 'Plantable Wildflower Seed Tag',
      subtitle: 'Zero waste, full bloom',
      desc: 'Our product tags are embedded with organic wildflower seeds. Plant them in soil, water gently, and watch new life grow.'
    },
    {
      id: 'qr-passport',
      step: '04',
      icon: QrCode,
      title: 'QR Code Sourcing Passport',
      subtitle: 'Full origin transparency',
      desc: 'Scan your package code to trace batch harvest dates, lab purity certificates, and direct farmer stories.'
    },
    {
      id: 'zero-plastic',
      step: '05',
      icon: PackageCheck,
      title: 'Zero-Plastic Eco Shield',
      subtitle: '100% Biodegradable & Recyclable',
      desc: 'Crafted with FSC-certified unbleached kraft paper, water-activated gum tape, and soy-based non-toxic inks.'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Visual reveal animation
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%'
            }
          }
        )
      }

      // Cards staggered reveal
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
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
    <section ref={sectionRef} id="packaging" className="pkg-section">
      <div className="pkg-container">
        
        {/* Section Header */}
        <div className="pkg-header">
          <div className="pkg-badge">
            <Leaf size={14} className="pkg-badge-icon" />
            <span>SUSTAINABLE UNBOXING</span>
          </div>
          <h2 className="pkg-title">Thoughtful Beyond the Product</h2>
          <p className="pkg-subtitle">
            The Greenfuel ritual begins the moment your package arrives — crafted with zero plastic, pure botanicals, and conscious luxury.
          </p>
        </div>

        {/* Grid Layout: Visual Showcase Left & Interactive Steps Right */}
        <div className="pkg-grid">
          
          {/* Left Column: Visual Card Showcase */}
          <div ref={visualRef} className="pkg-visual-col">
            <div className="pkg-image-card">
              <img src={unboxingImg} alt="Sustainable Greenfuel Unboxing Ritual" className="pkg-img" />
              <div className="pkg-img-overlay"></div>
              
              {/* Floating Highlight Card */}
              <div className="pkg-floating-badge">
                <Sparkles size={18} className="badge-sparkle" />
                <div>
                  <span className="badge-heading">100% Eco-Luxury Unboxing</span>
                  <span className="badge-subtext">Zero Plastic • Seed Paper • Soy Inks</span>
                </div>
              </div>

              {/* Active Step Preview Banner */}
              <div className="pkg-step-preview">
                <span className="preview-number">{elements[activeStep].step}</span>
                <div>
                  <h4 className="preview-title">{elements[activeStep].title}</h4>
                  <p className="preview-desc">{elements[activeStep].desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Interactive Unboxing Steps */}
          <div className="pkg-steps-col">
            {elements.map((item, idx) => {
              const IconComponent = item.icon
              const isActive = activeStep === idx

              return (
                <div
                  key={item.id}
                  ref={(el) => (cardsRef.current[idx] = el)}
                  onClick={() => setActiveStep(idx)}
                  className={`pkg-step-card ${isActive ? 'active' : ''}`}
                >
                  <div className="step-num-icon">
                    <div className="step-icon-circle">
                      <IconComponent size={20} />
                    </div>
                    <span className="step-num">{item.step}</span>
                  </div>

                  <div className="step-content">
                    <div className="step-header">
                      <h3 className="step-title">{item.title}</h3>
                      <span className="step-tag">{item.subtitle}</span>
                    </div>
                    <p className="step-desc">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
