import { Sparkles, ArrowDown } from 'lucide-react'
import { ABOUT_HERO_DATA } from '../../data/aboutData'

export default function AboutHero() {
  const handleScrollDown = () => {
    const target = document.getElementById('our-philosophy')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="about-hero-section">
      
      {/* Background Image Overlay with Warm Natural Lighting */}
      <img src={ABOUT_HERO_DATA.image} alt="About Greenfuel Heritage" className="about-hero-bg" />
      <div className="about-hero-overlay"></div>

      <div className="about-hero-container">
        <div className="about-hero-content">
          
          <div className="about-hero-eyebrow">
            <Sparkles size={14} className="sparkle-icon" />
            <span>{ABOUT_HERO_DATA.eyebrow}</span>
          </div>

          <h1 className="about-hero-title">{ABOUT_HERO_DATA.title}</h1>
          <p className="about-hero-subtitle">{ABOUT_HERO_DATA.subtitle}</p>

          <p className="about-hero-copy">
            {ABOUT_HERO_DATA.copy}
          </p>

          <button onClick={handleScrollDown} className="about-hero-scroll-btn" aria-label="Scroll to philosophy">
            <span>Discover Our Story</span>
            <ArrowDown size={16} className="scroll-arrow" />
          </button>

        </div>
      </div>

    </section>
  )
}
