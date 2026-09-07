import { ABOUT_BELIEFS } from '../../data/aboutData'
import { Sparkles, Shield, Heart, Compass, Leaf, Flower2 } from 'lucide-react'

export default function BrandBeliefs() {
  const icons = [
    <Compass size={22} />,
    <Heart size={22} />,
    <Flower2 size={22} />,
    <Shield size={22} />,
    <Sparkles size={22} />,
    <Leaf size={22} />
  ]

  return (
    <section className="about-beliefs-section">
      <div className="about-beliefs-container">
        
        <div className="beliefs-header">
          <span className="global-section-badge">OUR CORE VALUES</span>
          <h2 className="global-section-title">What We Believe</h2>
          <p className="global-section-subtitle">
            Pillars of uncompromising botanical purity and respect that guide every Greenfuel formulation
          </p>
        </div>

        <div className="beliefs-grid">
          {ABOUT_BELIEFS.map((belief, idx) => (
            <div key={idx} className="belief-card">
              <div className="belief-top-row">
                <div className="belief-icon-box">
                  {icons[idx]}
                </div>
                <span className="belief-number">{belief.number}</span>
              </div>

              <h3 className="belief-title">{belief.title}</h3>
              <p className="belief-statement">{belief.statement}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
