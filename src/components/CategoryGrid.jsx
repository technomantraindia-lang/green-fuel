import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import assets from clean new-images folder
import catHairMask from '../assets/new-images/cat_hair_mask_jar.png'
import catFaceMask from '../assets/new-images/cat_face_mask_jar.png'
import catUbtan from '../assets/new-images/cat_ubtan_jar.png'
import catFaceSerum from '../assets/new-images/cat_face_serum_dropper.png'
import catScalpSerum from '../assets/new-images/cat_scalp_serum_pump.png'
import catFaceWash from '../assets/new-images/cat_face_wash_pump.png'
import catCream from '../assets/new-images/cat_cream_jar.png'
import catRollOn from '../assets/new-images/cat_roll_on_bottle.png'
import catInhaler from '../assets/new-images/cat_inhaler_spray.png'

gsap.registerPlugin(ScrollTrigger)

export default function CategoryGrid() {
  const containerRef = useRef(null)
  const topRowRef = useRef(null)
  const bottomRowRef = useRef(null)

  const topCategories = [
    { name: "Hair Mask", slug: "hair-mask", image: catHairMask },
    { name: "Face Mask", slug: "face-mask", image: catFaceMask },
    { name: "Ubtan", slug: "ubtan", image: catUbtan },
    { name: "Face Serum", slug: "face-serum", image: catFaceSerum },
    { name: "Scalp Serum", slug: "scalp-serum", image: catScalpSerum }
  ]

  const bottomCategories = [
    { name: "Face Wash", slug: "face-wash", image: catFaceWash },
    { name: "Moisturizing Cream", slug: "moisturizing-cream", image: catCream },
    { name: "Roll On", slug: "roll-on", image: catRollOn },
    { name: "Inhaler", slug: "inhaler", image: catInhaler }
  ]

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      if (topRowRef.current && topRowRef.current.children) {
        gsap.fromTo(
          topRowRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%'
            }
          }
        )
      }

      if (bottomRowRef.current && bottomRowRef.current.children) {
        gsap.fromTo(
          bottomRowRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            delay: 0.15,
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
    <section ref={containerRef} id="categories" className="category-section">
      <div className="category-header global-section-header">
        <span className="global-section-badge">SHOP BY CATEGORIES</span>
        <h2 className="global-section-title">Discover Your Greenfuel Ritual</h2>
        <p className="global-section-subtitle">Pure Ayurvedic formulations crafted for your daily wellness</p>
      </div>

      <div className="category-rows-container">
        {/* Top Row: 5 Cards */}
        <div ref={topRowRef} className="category-row-top">
          {topCategories.map((cat, idx) => (
            <Link key={idx} to={`/category/${cat.slug}`} className="category-item-card">
              <div className="category-img-box">
                <img src={cat.image} alt={cat.name} className="category-img" />
              </div>
              <div className="category-label-pill">
                <h3 className="category-label-title">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Row: 4 Cards (Centered) */}
        <div ref={bottomRowRef} className="category-row-bottom">
          {bottomCategories.map((cat, idx) => (
            <Link key={idx} to={`/category/${cat.slug}`} className="category-item-card">
              <div className="category-img-box">
                <img src={cat.image} alt={cat.name} className="category-img" />
              </div>
              <div className="category-label-pill">
                <h3 className="category-label-title">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
