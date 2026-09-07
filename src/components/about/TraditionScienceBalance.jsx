import { ABOUT_BALANCE_DATA } from '../../data/aboutData'
import { Sparkles, CheckCircle2 } from 'lucide-react'

export default function TraditionScienceBalance() {
  return (
    <section className="about-balance-section">
      <div className="about-balance-container">
        
        {/* Section Header */}
        <div className="balance-header">
          <span className="global-section-badge">{ABOUT_BALANCE_DATA.badge}</span>
          <h2 className="global-section-title">{ABOUT_BALANCE_DATA.heading}</h2>
        </div>

        {/* 3-Column Duality Junction Layout */}
        <div className="balance-duality-grid">
          
          {/* Left Panel: The Wisdom of Ayurveda */}
          <div className="balance-side-card card-ayurveda">
            <span className="side-tag">AYURVEDIC HERITAGE</span>
            <h3 className="side-heading">{ABOUT_BALANCE_DATA.ayurvedaWisdom.title}</h3>
            
            <ul className="side-points-list">
              {ABOUT_BALANCE_DATA.ayurvedaWisdom.points.map((pt, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="point-icon icon-gold" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Floating Junction: Mortar & Pestle x Lab Glassware */}
          <div className="balance-center-junction">
            <div className="junction-arch-frame">
              <img src={ABOUT_BALANCE_DATA.mortarImage} alt="Tradition x Science Mortar and Lab Flask" className="junction-img" />
              <div className="junction-overlay"></div>
              <div className="junction-badge">
                <Sparkles size={16} className="sparkle-gold" />
                <span>Perfect Duality</span>
              </div>
            </div>
          </div>

          {/* Right Panel: The Power of Science */}
          <div className="balance-side-card card-science">
            <span className="side-tag">MODERN DERMATOLOGY</span>
            <h3 className="side-heading">{ABOUT_BALANCE_DATA.sciencePower.title}</h3>

            <ul className="side-points-list">
              {ABOUT_BALANCE_DATA.sciencePower.points.map((pt, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="point-icon icon-green" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Closing Duality Quote */}
        <div className="balance-closing-bar">
          <p className="closing-quote">
            "{ABOUT_BALANCE_DATA.closingQuote}"
          </p>
        </div>

      </div>
    </section>
  )
}
