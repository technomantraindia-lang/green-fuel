import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

// Import all 10 concern avatars from clean new-images folder
import skinBrighteningImg from '../assets/new-images/concern_skin_brightening.png'
import hairFallImg from '../assets/new-images/concern_hair_fall.png'
import pigmentationImg from '../assets/new-images/concern_pigmentation.png'
import antiAgeingImg from '../assets/new-images/concern_anti_ageing.png'
import hydrationImg from '../assets/new-images/concern_hydration.png'
import dandruffImg from '../assets/new-images/concern_dandruff.png'
import bodyOdourImg from '../assets/new-images/concern_body_odour.png'
import drySkinImg from '../assets/new-images/concern_dry_skin.png'
import sensitiveSkinImg from '../assets/new-images/concern_sensitive_skin.png'
import darkCirclesImg from '../assets/new-images/concern_dark_circles.png'

gsap.registerPlugin(ScrollTrigger)

export default function ConcernGrid() {
  const sectionRef = useRef(null)
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)

  const concernsRow1 = [
    { name: "Skin Brightening", image: skinBrighteningImg, desc: "Restore luminous clarity with saffron & golden turmeric." },
    { name: "Hair Fall", image: hairFallImg, desc: "Strengthen roots and stimulate dormant follicles with Bhringraj." },
    { name: "Pigmentation", image: pigmentationImg, desc: "Fade stubborn dark spots and sun damage naturally." },
    { name: "Anti-Ageing", image: antiAgeingImg, desc: "Smooth fine lines with Bakuchiol & hibiscus AHA extracts." },
    { name: "Hydration", image: hydrationImg, desc: "Deeply quench parched cells with natural ghee & lotus." }
  ]

  const concernsRow2 = [
    { name: "Dandruff", image: dandruffImg, desc: "Balance scalp microbiome with tea tree & neem oil." },
    { name: "Body Odour", image: bodyOdourImg, desc: "Neutralize odor with therapeutic vetiver & sandalwood." },
    { name: "Dry Skin", image: drySkinImg, desc: "Restore vital lipid barriers for 24-hour softness." },
    { name: "Sensitive Skin", image: sensitiveSkinImg, desc: "Cool irritation & redness with soothing Brahmi remedies." },
    { name: "Dark Circles", image: darkCirclesImg, desc: "Revitalize tired eyes with cold-pressed botanical elixirs." }
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (row1Ref.current && row1Ref.current.children && row1Ref.current.children.length > 0) {
        gsap.fromTo(
          row1Ref.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%'
            }
          }
        )
      }

      if (row2Ref.current && row2Ref.current.children && row2Ref.current.children.length > 0) {
        gsap.fromTo(
          row2Ref.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.2,
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
    <section ref={sectionRef} id="concerns" className="concern-section">
      <div className="concern-header">
        <span className="section-label">SHOP BY CONCERN</span>
        <h2 className="concern-title">Tailored to Your Specific Need</h2>
        <p className="concern-subtitle">Targeted formulations mapped to individual skin and scalp concerns</p>
      </div>

      <div className="concern-rows-wrapper">
        {/* Row 1 */}
        <div ref={row1Ref} className="concern-row">
          {concernsRow1.map((item, idx) => (
            <div key={idx} className="concern-circle-card">
              <div className="concern-avatar-box">
                <img src={item.image} alt={item.name} className="concern-avatar-img" />
                <div className="concern-hover-overlay">
                  <ArrowRight size={20} className="concern-arrow" />
                </div>
              </div>
              <h3 className="concern-name">{item.name}</h3>
              <p className="concern-one-liner">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div ref={row2Ref} className="concern-row">
          {concernsRow2.map((item, idx) => (
            <div key={idx} className="concern-circle-card">
              <div className="concern-avatar-box">
                <img src={item.image} alt={item.name} className="concern-avatar-img" />
                <div className="concern-hover-overlay">
                  <ArrowRight size={20} className="concern-arrow" />
                </div>
              </div>
              <h3 className="concern-name">{item.name}</h3>
              <p className="concern-one-liner">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
