import { ABOUT_STORY_DATA } from '../../data/aboutData'

export default function OurStoryRoots() {
  return (
    <section className="about-story-section">
      <div className="about-story-container">
        
        {/* Story Text Box (Deep Forest Green Panel) */}
        <div className="story-text-panel">
          <span className="story-badge">{ABOUT_STORY_DATA.badge}</span>
          <h2 className="story-title">{ABOUT_STORY_DATA.title}</h2>

          <p className="story-lead-paragraph">
            {ABOUT_STORY_DATA.leadCopy}
          </p>

          <p className="story-body-paragraph">
            {ABOUT_STORY_DATA.bodyCopy}
          </p>

          {/* Mission Highlight Box */}
          <div className="story-mission-callout">
            <h3 className="mission-question">{ABOUT_STORY_DATA.missionQuestion}</h3>
            <p className="mission-answer">{ABOUT_STORY_DATA.missionAnswer}</p>
          </div>
        </div>

        {/* Story Visual Frame */}
        <div className="story-visual-panel">
          <div className="story-img-wrapper">
            <img src={ABOUT_STORY_DATA.image} alt="Generational Herbal Heritage" className="story-img" />
            <div className="story-img-caption">
              <span>Authentic Botanical Sourcing & Processing</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
