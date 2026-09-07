import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShoppingBag, ChevronLeft, ChevronRight, Eye } from 'lucide-react'

import ubtanImg from '../assets/new-images/signature_aura_ubtan_product.png'
import faceWashImg from '../assets/new-images/cat_face_wash_pump.png'
import creamImg from '../assets/new-images/cat_cream_jar.png'
import rollOnImg from '../assets/new-images/cat_roll_on_bottle.png'
import inhalerImg from '../assets/new-images/cat_inhaler_spray.png'
import hairMaskImg from '../assets/new-images/cat_hair_mask_jar.png'

gsap.registerPlugin(ScrollTrigger)

export default function BestSellersCarousel() {
  const sectionRef = useRef(null)
  const sliderRef = useRef(null)

  const products = [
    {
      id: 1,
      name: "Aura Ubtan Face Mask Powder",
      category: "Face Mask & Scrub",
      price: "₹899",
      rating: "4.9 ★ (184)",
      badge: "Flagship",
      image: ubtanImg
    },
    {
      id: 2,
      name: "Waterless Face Wash Spray",
      category: "Cleanser Mist",
      price: "₹699",
      rating: "4.8 ★ (92)",
      badge: "Innovative",
      image: faceWashImg
    },
    {
      id: 3,
      name: "Sparsh Moisturizing Cream",
      category: "Lipid Repair",
      price: "₹1,249",
      rating: "5.0 ★ (140)",
      badge: "Bestseller",
      image: creamImg
    },
    {
      id: 4,
      name: "Under Arm Roll-On",
      category: "Deodorant Care",
      price: "₹499",
      rating: "4.7 ★ (88)",
      badge: "Essential",
      image: rollOnImg
    },
    {
      id: 5,
      name: "Herbal Natural Inhaler",
      category: "Dosha Aromatherapy",
      price: "₹349",
      rating: "4.9 ★ (210)",
      badge: "Wellness",
      image: inhalerImg
    },
    {
      id: 6,
      name: "KeshVruddhi Herbal Hair Mask",
      category: "Hair Shaft Repair",
      price: "₹1,099",
      rating: "4.9 ★ (156)",
      badge: "Top Rated",
      image: hairMaskImg
    }
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (sliderRef.current && sliderRef.current.children && sliderRef.current.children.length > 0) {
        gsap.fromTo(
          sliderRef.current.children,
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section ref={sectionRef} id="bestsellers" className="bestsellers-section">
      <div className="bestsellers-header">
        <div className="global-section-header">
          <span className="global-section-badge">E-COMMERCE ESSENTIALS</span>
          <h2 className="global-section-title">Best Sellers</h2>
          <p className="global-section-subtitle">Authentic Ayurvedic formulations loved by our community</p>
        </div>

        <div className="carousel-nav-buttons">
          <button onClick={() => handleScroll('left')} className="nav-arrow-btn" aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => handleScroll('right')} className="nav-arrow-btn" aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="bestsellers-slider-wrapper">
        <div ref={sliderRef} className="bestsellers-slider-track">
          {products.map((item) => (
            <div key={item.id} className="bestseller-card">
              <div className="bestseller-img-box">
                {item.badge && <span className="bestseller-badge">{item.badge}</span>}
                <img src={item.image} alt={item.name} className="bestseller-img" />
                <div className="card-quick-controls">
                  <button className="quick-action-btn" title="Quick Add">
                    <ShoppingBag size={16} /> <span>Add</span>
                  </button>
                  <button className="quick-action-btn icon-only" title="Quick View">
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              <div className="bestseller-card-info">
                <div className="card-category-row">
                  <span className="card-cat">{item.category}</span>
                  <span className="card-rating">{item.rating}</span>
                </div>
                <h3 className="card-name">{item.name}</h3>
                <div className="card-price-row">
                  <span className="card-price">{item.price}</span>
                  <button className="card-buy-link">Add to Ritual →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
