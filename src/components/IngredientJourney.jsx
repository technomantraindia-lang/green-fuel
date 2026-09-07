import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import the classic botanical ingredient images
import bhringrajImg from '../assets/ingredient_bhringraj_plant.png'
import bakuchiolImg from '../assets/ingredient_bakuchiol_purple.png'
import saffronImg from '../assets/ingredient_saffron_strands.png'
import neemImg from '../assets/ingredient_neem_leaves.png'
import tulsiImg from '../assets/ingredient_tulsi_basil.png'

gsap.registerPlugin(ScrollTrigger)

export default function IngredientJourney() {
  const containerRef = useRef(null)
  const rowRef = useRef(null)

  const ingredients = [
    { name: 'Bhringraj', latinName: 'Eclipta Alba', image: bhringrajImg },
    { name: 'Bakuchiol', latinName: 'Psoralea Corylifolia', image: bakuchiolImg },
    { name: 'Kashmiri Saffron', latinName: 'Crocus Sativus', image: saffronImg },
    { name: 'Wild Neem', latinName: 'Azadirachta Indica', image: neemImg },
    { name: 'Holy Tulsi', latinName: 'Ocimum Tenuiflorum', image: tulsiImg }
  ]

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      if (rowRef.current && rowRef.current.children) {
        gsap.fromTo(
          rowRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%'
            }
          }
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="ingredients" className="ingredient-journey-section">
      <div className="journey-header global-section-header">
        <span className="global-section-badge">BOTANICAL SOURCING</span>
        <h2 className="global-section-title">Ingredient Journey</h2>
        <p className="global-section-subtitle">Farm-to-bottle traceability of India's purest Ayurvedic herbs</p>
      </div>

      <div className="journey-flow-wrapper">
        <div ref={rowRef} className="journey-flex-row">
          {ingredients.map((item, idx) => (
            <div key={idx} className="journey-card-container">
              
              <div className="journey-card-unit">
                {/* Top: Image Card */}
                <div 
                  className="journey-clean-card bg-card"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="bg-card-overlay"></div>
                  <h3 className="journey-card-name-overlay">{item.name}</h3>
                  <span className="journey-card-latin-overlay">{item.latinName}</span>
                </div>

                {/* Bottom: Dark Flow Panel below image */}
                <div className="journey-bottom-flow-panel">
                  {/* Step 1: Origin */}
                  <div className="flow-step">
                    <div className="flow-icon-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span className="flow-label">Origin</span>
                  </div>

                  <span className="flow-dash">-</span>

                  {/* Step 2: Science */}
                  <div className="flow-step">
                    <div className="flow-icon-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 2v7.5L4.7 20.5A2 2 0 0 0 6.5 23h11a2 2 0 0 0 1.8-2.5L14 9.5V2" />
                        <path d="M8.5 2h7" />
                      </svg>
                    </div>
                    <span className="flow-label">Science</span>
                  </div>

                  <span className="flow-dash">-</span>

                  {/* Step 3: Benefits */}
                  <div className="flow-step">
                    <div className="flow-icon-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span className="flow-label">Benefits</span>
                  </div>

                  <span className="flow-dash">-</span>

                  {/* Step 4: Products */}
                  <div className="flow-step">
                    <div className="flow-icon-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    </div>
                    <span className="flow-label">Products</span>
                  </div>
                </div>
              </div>

              {/* Connecting Arrow between cards */}
              {idx < ingredients.length - 1 && (
                <div className="journey-card-connector">
                  <span>→</span>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
