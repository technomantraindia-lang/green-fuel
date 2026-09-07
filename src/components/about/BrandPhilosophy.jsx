import { ABOUT_PHILOSOPHY_DATA } from '../../data/aboutData'

export default function BrandPhilosophy() {
  return (
    <section id="our-philosophy" className="about-philosophy-section">
      <div className="about-philosophy-container">
        
        {/* Left Column: Large Ritual / Botanical Image */}
        <div className="philosophy-visual-col">
          <div className="philosophy-img-frame">
            <img src={ABOUT_PHILOSOPHY_DATA.image} alt="Ayurvedic Botanical Ritual" className="philosophy-img" />
            <div className="philosophy-img-badge">
              <span>Authentic Vedic Wisdom</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Philosophy & Pillars */}
        <div className="philosophy-content-col">
          <span className="global-section-badge">{ABOUT_PHILOSOPHY_DATA.badge}</span>
          <h2 className="philosophy-main-heading">{ABOUT_PHILOSOPHY_DATA.heading}</h2>
          
          <p className="philosophy-main-body">
            {ABOUT_PHILOSOPHY_DATA.body}
          </p>

          {/* 4 Philosophy Pillars Grid */}
          <div className="philosophy-pillars-grid">
            {ABOUT_PHILOSOPHY_DATA.pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-item-card">
                <div className="pillar-num">0{idx + 1}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
