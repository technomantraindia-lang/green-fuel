import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import catUbtan from '../assets/new-images/signature_aura_ubtan_product.png'

gsap.registerPlugin(ScrollTrigger)

export default function SignatureProductStory() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%'
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="signature-product" className="signature-product-section">
      <div ref={containerRef} className="signature-banner-card">
        {/* Left Content Side */}
        <div className="signature-left-col">
          <span className="signature-ritual-label">SIGNATURE RITUAL</span>
          
          <h2 className="signature-title">
            Aura Ubtan<br />
            Face Mask Powder
          </h2>

          <p className="signature-tagline">Purify. Brighten. Rejuvenate.</p>

          {/* 4 Feature Columns Row (Center Aligned) */}
          <div className="signature-features-grid">
            {/* Feature 1 */}
            <div className="sig-feature-item">
              <div className="sig-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7A6855" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <h4 className="sig-feature-title">Problem</h4>
              <p className="sig-feature-desc">Dullness, uneven tone & tired skin</p>
            </div>

            {/* Feature 2 */}
            <div className="sig-feature-item">
              <div className="sig-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7A6855" strokeWidth="1.5">
                  <path d="M10 2v7.5L4.7 20.5A2 2 0 0 0 6.5 23h11a2 2 0 0 0 1.8-2.5L14 9.5V2" />
                  <path d="M8.5 2h7" />
                </svg>
              </div>
              <h4 className="sig-feature-title">Ritual</h4>
              <p className="sig-feature-desc">Detoxify, nourish & reveal natural glow</p>
            </div>

            {/* Feature 3 */}
            <div className="sig-feature-item">
              <div className="sig-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7A6855" strokeWidth="1.5">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h4 className="sig-feature-title">Key Ingredients</h4>
              <p className="sig-feature-desc">Saffron, Sandalwood, Khas, Rose</p>
            </div>

            {/* Feature 4 */}
            <div className="sig-feature-item">
              <div className="sig-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7A6855" strokeWidth="1.5">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                </svg>
              </div>
              <h4 className="sig-feature-title">Benefits</h4>
              <p className="sig-feature-desc">Brightens, soothes & improves texture</p>
            </div>
          </div>
        </div>

        {/* Right Studio Product Image Side */}
        <div className="signature-right-col">
          <div className="sig-product-img-box">
            <span className="for-skin-types-tag">For all<br />skin types</span>
            <img src={catUbtan} alt="Aura Ubtan Face Mask Powder" className="sig-product-img" />
          </div>
        </div>
      </div>
    </section>
  )
}
