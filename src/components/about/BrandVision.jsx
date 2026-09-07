import { ABOUT_VISION_DATA } from '../../data/aboutData'
import { Eye } from 'lucide-react'

export default function BrandVision() {
  return (
    <section className="about-vision-section">
      <div className="about-vision-container">
        
        {/* Left Column: Vision Editorial */}
        <div className="vision-text-col">
          <div className="vision-badge">
            <Eye size={14} className="vision-badge-icon" />
            <span>{ABOUT_VISION_DATA.badge}</span>
          </div>

          <h2 className="vision-title">{ABOUT_VISION_DATA.title}</h2>
          
          <h3 className="vision-lead">{ABOUT_VISION_DATA.lead}</h3>

          <p className="vision-copy">
            {ABOUT_VISION_DATA.copy}
          </p>
        </div>

        {/* Right Column: Calm Lifestyle Visual */}
        <div className="vision-visual-col">
          <div className="vision-img-frame">
            <img src={ABOUT_VISION_DATA.image} alt="Greenfuel Modern Heritage Vision" className="vision-img" />
            <div className="vision-overlay"></div>
            <div className="vision-caption">
              <span>Authentic Heritage for Contemporary Living</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
