import { ABOUT_BELIEF_MANIFESTO } from '../../data/aboutData'
import { Feather, Sparkles } from 'lucide-react'

export default function MoreThanCosmetic() {
  return (
    <section className="about-cosmetic-section">
      <div className="about-cosmetic-container">
        
        <div className="cosmetic-header">
          <div className="cosmetic-badge">
            <Feather size={14} />
            <span>{ABOUT_BELIEF_MANIFESTO.badge}</span>
          </div>

          <h2 className="cosmetic-quote">
            "{ABOUT_BELIEF_MANIFESTO.quote}"
          </h2>
        </div>

        {/* 3 Core Philosophical Principles */}
        <div className="cosmetic-principles-grid">
          {ABOUT_BELIEF_MANIFESTO.principles.map((item, idx) => (
            <div key={idx} className="cosmetic-card">
              <div className="card-top-icon">
                <Sparkles size={18} className="sparkle-copper" />
              </div>
              <h3 className="card-heading">{item.title}</h3>
              <p className="card-detail">{item.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
