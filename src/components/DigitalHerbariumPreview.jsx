import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ashwagandhaPlate from '../assets/new-images/herbarium_ashwagandha_plate.png'
import saffronImg from '../assets/Curcuma Longa.png'
import bhringrajImg from '../assets/Santalum Album.png'
import neemImg from '../assets/Azadirachta Indica.png'
import tulsiImg from '../assets/Ocimum Tenuiflorum.png'
import herbariumBg from '../assets/new-images/herbarium_dark_bg.png'

export default function DigitalHerbariumPreview() {
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    {
      id: 1,
      name: 'Ashwagandha',
      latin: 'Withania somnifera',
      desc: 'A revered adaptogen that helps the body resist stress, improves vitality and supports skin & hair health.',
      image: ashwagandhaPlate,
      features: ['Stress Relief', 'Strength', 'Rejuvenation']
    },
    {
      id: 2,
      name: 'Curcuma Longa',
      latin: 'Turmeric (Golden Haldi)',
      desc: 'Traditional bridal Haridra ritual herb for deep dermal purification and protection against negative energy.',
      image: saffronImg,
      features: ['Purifying', 'Brightening', 'Antioxidant']
    },
    {
      id: 3,
      name: 'Santalum Album',
      latin: 'Chandana (White Sandalwood)',
      desc: 'Sacred temple wood applied to third eye for profound nervous system calm and skin cooling.',
      image: bhringrajImg,
      features: ['Cooling', 'Calming', 'Anti-Pigmentation']
    },
    {
      id: 4,
      name: 'Azadirachta Indica',
      latin: 'Neem Leaves',
      desc: 'Known as the village pharmacy, neem provides unparalleled antibacterial and clarifying properties.',
      image: neemImg,
      features: ['Antibacterial', 'Clarifying', 'Healing']
    },
    {
      id: 5,
      name: 'Ocimum Tenuiflorum',
      latin: 'Holy Basil (Tulsi)',
      desc: 'A sacred plant in Ayurveda, prized for its potent purifying, balancing, and adaptogenic effects.',
      image: tulsiImg,
      features: ['Balancing', 'Purifying', 'Adaptogenic']
    }
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const activeItem = items[activeIndex]

  return (
    <section id="herbarium" className="dh-section">
      {/* Full-width Background Texture/Leaves */}
      <img src={herbariumBg} alt="Botanical Background" className="dh-bg-overlay-img" />
      
      <div className="dh-banner-container">
        <div className="dh-content-wrapper">
          {/* Left Text Content */}
          <div className="dh-left-content">
            <h2 className="dh-title">Digital Herbarium</h2>
            <p className="dh-desc">
              Explore the therapeutic wisdom of India's most powerful botanicals.
            </p>
            <button className="dh-cta-btn">
              Join the Circle
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C12 2 7 8 7 14C7 16.7614 9.23858 19 12 19C14.7614 19 17 16.7614 17 14C17 8 12 2 12 2Z" />
                <path d="M12 19V22" />
                <path d="M12 14L15 11" />
              </svg>
            </button>
          </div>

          {/* Right Carousel Area */}
          <div className="dh-carousel-area">
            <button className="dh-arrow dh-arrow-prev" onClick={handlePrev}><ChevronLeft size={28} /></button>
            
            <div className="dh-card-column">
              <div className="dh-card">
                <div className="dh-card-img-wrapper">
                  <img src={activeItem.image} alt={activeItem.name} className="dh-card-img fade-transition" key={activeItem.image} />
                </div>
                <div className="dh-card-info fade-transition" key={activeItem.name}>
                  <h3 className="dh-card-title">{activeItem.name}</h3>
                  <h4 className="dh-card-subtitle">{activeItem.latin}</h4>
                  <p className="dh-card-desc">{activeItem.desc}</p>
                  <div className="dh-card-features">
                    {/* Icon 1 */}
                    <div className="dh-feature">
                      <div className="dh-feature-icon-wrapper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5D6D4A" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 12C8 12 10 10 12 10C14 10 16 12 16 12" />
                        </svg>
                      </div>
                      <span>{activeItem.features[0]}</span>
                    </div>
                    {/* Icon 2 */}
                    <div className="dh-feature">
                      <div className="dh-feature-icon-wrapper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5D6D4A" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 7V17M9 14L12 17L15 14" />
                        </svg>
                      </div>
                      <span>{activeItem.features[1]}</span>
                    </div>
                    {/* Icon 3 */}
                    <div className="dh-feature">
                      <div className="dh-feature-icon-wrapper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5D6D4A" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 7C12 7 9 10 9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13C15 10 12 7 12 7Z" />
                        </svg>
                      </div>
                      <span>{activeItem.features[2]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots centered directly below the card */}
              <div className="dh-dots">
                {items.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`dh-dot ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  ></div>
                ))}
              </div>
            </div>

            <button className="dh-arrow dh-arrow-next" onClick={handleNext}><ChevronRight size={28} /></button>
          </div>

        </div>

      </div>
    </section>
  )
}
