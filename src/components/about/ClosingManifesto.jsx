import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import { ABOUT_CLOSING_MANIFESTO } from '../../data/aboutData'

export default function ClosingManifesto() {
  return (
    <section className="about-manifesto-section">
      <div className="about-manifesto-container">
        
        <div className="manifesto-content">
          <span className="global-section-badge">BRAND MANIFESTO</span>

          <h2 className="manifesto-heading">
            {ABOUT_CLOSING_MANIFESTO.heading}
          </h2>

          <p className="manifesto-subheading">
            {ABOUT_CLOSING_MANIFESTO.subheading}
          </p>

          <p className="manifesto-tagline">
            {ABOUT_CLOSING_MANIFESTO.tagline}
          </p>

          {/* Restrained CTAs */}
          <div className="manifesto-cta-row">
            <Link to="/products" className="manifesto-btn-primary">
              <span>Explore Formulations</span>
              <ArrowRight size={16} />
            </Link>

            <Link to="/journal" className="manifesto-btn-secondary">
              <BookOpen size={16} />
              <span>Read Journal</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
