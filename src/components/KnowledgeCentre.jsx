import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, BookOpen } from 'lucide-react'

import bowlsImg from '../assets/what_is_botanical_bowls.jpg'
import copperImg from '../assets/what_is_copper_vessels.jpg'
import labFlasksImg from '../assets/what_is_lab_flasks.jpg'
import herbsImg from '../assets/split_ayurveda_herbs.png'

gsap.registerPlugin(ScrollTrigger)

export default function KnowledgeCentre() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  const articles = [
    {
      id: 1,
      category: "Ingredient Science",
      readTime: "5 min read",
      title: "Bio-Active Extraction: How Cold-Pressing Preserves Phytochemical Integrity",
      snippet: "Discover why standard high-heat industrial processing destroys vital curcuminoids and how Vedic slow-churning protects botanical activity.",
      image: bowlsImg
    },
    {
      id: 2,
      category: "Ayurvedic Heritage",
      readTime: "7 min read",
      title: "The Vedic Science of Abhyanga: Daily Self-Oil Massage for Longevity",
      snippet: "An in-depth exploration of lymphatic detoxification and dosha pacification through traditional morning oiling rituals.",
      image: copperImg
    },
    {
      id: 3,
      category: "Dermatology Research",
      readTime: "6 min read",
      title: "Bakuchiol vs. Retinol: A Double-Blind Clinical Analysis of Epidermal Renewal",
      snippet: "Comparative trials show equal collagen-stimulating potency without erythema, photosensitivity, or barrier compromise.",
      image: labFlasksImg
    },
    {
      id: 4,
      category: "Hair Science & Scalp Health",
      readTime: "4 min read",
      title: "Reversing Follicular Miniaturization with Bhringraj & Brahmi Extracts",
      snippet: "How bio-active peptides in Eclipta alba stimulate micro-circulation around scalp follicles to extend the anagen growth phase.",
      image: herbsImg
    }
  ]

  const topics = [
    "Ingredient Science", "Ayurveda", "Dermatology", "Hair Science",
    "Nutrition", "Lifestyle", "Clinical Research", "Doctor Interviews"
  ]

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (gridRef.current && gridRef.current.children && gridRef.current.children.length > 0) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
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

  return (
    <section ref={sectionRef} id="knowledge" className="knowledge-section-editorial">
      <div className="knowledge-container">
        <div className="knowledge-header-row">
          <div className="global-section-header">
            <span className="global-section-badge">RESEARCH JOURNAL</span>
            <h2 className="global-section-title">Greenfuel Knowledge Centre</h2>
            <p className="global-section-subtitle">
              Peer-reviewed botanical research, Ayurvedic codices, and clinical dermatologist insights
            </p>
          </div>

          <a href="/journal" className="btn-link-golden">
            <span>Explore All Journal Papers</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Topic Categories Strip */}
        <div className="topic-categories-scroll">
          {topics.map((topic, idx) => (
            <span key={idx} className="topic-pill">{topic}</span>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div ref={gridRef} className="knowledge-cards-grid">
          {articles.map((item) => (
            <article key={item.id} className="editorial-story-card">
              <div className="story-img-wrapper">
                <img src={item.image} alt={item.title} className="story-img" />
                <span className="story-category-tag">{item.category}</span>
              </div>
              
              <div className="story-content">
                <div className="story-meta">
                  <span className="read-time"><BookOpen size={12} /> {item.readTime}</span>
                </div>
                <h3 className="story-title">{item.title}</h3>
                <p className="story-snippet">{item.snippet}</p>
                <div className="story-read-link">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
