import { useState, useMemo, useEffect, useRef } from 'react'
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom'
import { 
  CONCERNS_DATA, 
  getConcernBySlug, 
  getProductsForConcern, 
  getIngredientsForConcern 
} from '../data/concernsData'
import ProductCard from '../components/shop/ProductCard'
import GreenfuelPromise from '../components/shop/GreenfuelPromise'
import ConcernQuickViewModal from '../components/shop/ConcernQuickViewModal'
import { 
  ArrowRight, 
  ArrowDown, 
  Sparkles, 
  Leaf, 
  BookOpen, 
  Clock, 
  CheckCircle,
  Filter,
  ChevronRight,
  Eye
} from 'lucide-react'

// Import imagery for Tradition x Science split
import traditionImg from '../assets/split_ayurveda_herbs.png'
import scienceImg from '../assets/split_science_lab.png'
import heroBgImg from '../assets/hero-background.png'

export default function ShopByConcernPage() {
  const { concernSlug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const storyRef = useRef(null)

  // Quick View Modal state
  const [modalConcern, setModalConcern] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Determine active concern from URL param (:concernSlug) or Query param (?concern=slug)
  const activeSlug = useMemo(() => {
    return concernSlug || searchParams.get('concern') || 'hair-fall'
  }, [concernSlug, searchParams])

  // Get active concern object
  const selectedConcern = useMemo(() => {
    return getConcernBySlug(activeSlug)
  }, [activeSlug])

  // Get mapped products & ingredients for selected concern
  const mappedProducts = useMemo(() => {
    return getProductsForConcern(selectedConcern.id)
  }, [selectedConcern])

  const mappedIngredients = useMemo(() => {
    return getIngredientsForConcern(selectedConcern.id)
  }, [selectedConcern])

  // Handle concern card click: opens pop-up modal & updates active focus
  const handleSelectConcern = (concernObj) => {
    setModalConcern(concernObj)
    setIsModalOpen(true)
    navigate(`/shop-by-concern/${concernObj.slug}`, { replace: true })
  }

  // Scroll to top or story section on initial mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [concernSlug])

  return (
    <div className="sbc-page-wrapper">
      
      {/* QUICK VIEW POPUP MODAL */}
      <ConcernQuickViewModal 
        concern={modalConcern || selectedConcern}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* 1. SECTION 1 — SHOP BY CONCERN COMPACT HERO */}
      <section className="sbc-hero-section">
        <div className="sbc-hero-bg-overlay">
          <img src={heroBgImg} alt="Botanical Ayurvedic Harvest" className="sbc-hero-bg-img" />
          <div className="sbc-hero-gradient-overlay"></div>
        </div>

        <div className="sbc-hero-content">
          <span className="sbc-section-badge">SHOP BY CONCERN</span>
          <h1 className="sbc-hero-title">Begin With What Your Skin & Hair Need</h1>
          <p className="sbc-hero-subtitle">
            Explore Greenfuel by concern, then discover the formulations, cold-pressed botanicals, and daily rituals connected to it.
          </p>
          <a href="#concern-explorer" className="sbc-hero-cta-btn">
            <span>Explore Concerns</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </section>

      {/* 2. SECTION 2 — CONCERN EXPLORER (10 CONFIRMED CONCERNS GRID) */}
      <section id="concern-explorer" className="sbc-explorer-section">
        <div className="sbc-explorer-container">
          <div className="sbc-explorer-header">
            <span className="sbc-sub-badge">SELECT YOUR FOCUS</span>
            <h2>Select a Skin or Hair Concern</h2>
            <p>Click any concern to view targeted Ayurvedic formulations and pop-up guide.</p>
          </div>

          {/* 10 Concerns Grid (5x2 Layout on Desktop, 2x5 on Mobile) */}
          <div className="sbc-concern-cards-grid">
            {CONCERNS_DATA.map((concern) => {
              const isSelected = selectedConcern.id === concern.id
              return (
                <div 
                  key={concern.id}
                  onClick={() => handleSelectConcern(concern)}
                  className={`sbc-concern-card ${isSelected ? 'is-selected' : ''}`}
                  role="button"
                  tabIndex={0}
                >
                  <div className="sbc-card-img-wrap">
                    <img src={concern.image} alt={concern.name} className="sbc-card-img" />
                    {isSelected && <span className="sbc-active-pill">Active Focus</span>}
                    <div className="sbc-quick-preview-btn">
                      <Eye size={14} />
                      <span>Quick Info</span>
                    </div>
                  </div>
                  <div className="sbc-card-body">
                    <h3 className="sbc-card-title">{concern.name}</h3>
                    <div className="sbc-card-arrow-row">
                      <span className="sbc-explore-text">Explore Info</span>
                      <ArrowRight size={14} className="sbc-arrow-icon" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. SECTION 3 — SELECTED CONCERN STORY */}
      <section ref={storyRef} className="sbc-story-section">
        <div className="sbc-story-container">
          
          <div className="sbc-story-grid">
            {/* Left Image Showcase */}
            <div className="sbc-story-media-box">
              <img src={selectedConcern.image} alt={selectedConcern.name} className="sbc-story-img" />
              <div className="sbc-story-tagline-badge">
                <Sparkles size={16} />
                <span>{selectedConcern.tagline}</span>
              </div>
            </div>

            {/* Right Educational Details */}
            <div className="sbc-story-text-box">
              <span className="sbc-sub-badge">UNDERSTANDING THE CONCERN</span>
              <h2 className="sbc-story-heading">A Greenfuel Approach to {selectedConcern.name}</h2>
              <p className="sbc-story-lead">{selectedConcern.shortDescription}</p>
              
              <div className="sbc-story-divider"></div>

              <div className="sbc-story-paragraph-box">
                <h4>Dermal & Hair Science Insight</h4>
                <p>{selectedConcern.longDescription}</p>
              </div>

              <div className="sbc-story-approach-box">
                <h4>The Ayurvedic Formulation Philosophy</h4>
                <p>{selectedConcern.greenfuelApproach}</p>
              </div>

              <button 
                onClick={() => { setModalConcern(selectedConcern); setIsModalOpen(true); }}
                className="sbc-popup-trigger-btn"
              >
                <Sparkles size={16} />
                <span>View {selectedConcern.name} Quick Info & Products</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECTION 4 — CONCERN → INGREDIENT JOURNEY (BOTANICAL INTELLIGENCE) */}
      <section className="sbc-ingredients-section">
        <div className="sbc-ingredients-container">
          <div className="sbc-ingredients-header">
            <span className="sbc-dark-badge">BOTANICAL INTELLIGENCE</span>
            <h2 className="sbc-dark-title">Ingredients Connected to Your Ritual</h2>
            <p className="sbc-dark-subtitle">
              Ayurvedic herbs and cold-pressed botanical extractions formulated for {selectedConcern.name}.
            </p>
          </div>

          <div className="sbc-ingredients-grid">
            {mappedIngredients.length > 0 ? (
              mappedIngredients.map((ing) => (
                <div key={ing.id} className="sbc-ing-card">
                  <div className="sbc-ing-img-wrap">
                    <img src={ing.image} alt={ing.name} className="sbc-ing-img" />
                  </div>
                  <div className="sbc-ing-info">
                    <span className="sbc-ing-origin">{ing.origin}</span>
                    <h3 className="sbc-ing-name">{ing.name}</h3>
                    <p className="sbc-ing-role">{ing.role}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="sbc-ing-fallback">
                <Leaf size={32} />
                <p>Pure Ayurvedic herb extractions sourced from wild harvests across Western Ghats.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. SECTION 5 — PRODUCTS FOR THIS CONCERN */}
      <section className="sbc-products-section">
        <div className="sbc-products-container">
          <div className="sbc-products-header">
            <span className="sbc-sub-badge">TARGETED FORMULATIONS</span>
            <h2>Products for {selectedConcern.name}</h2>
            <p>Ayurvedic skincare and haircare formulated specifically for {selectedConcern.name.toLowerCase()}.</p>
          </div>

          {mappedProducts.length > 0 ? (
            <div className="spec-product-grid">
              {mappedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="sbc-no-products-card">
              <Filter size={40} className="no-prod-icon" />
              <h3>No Formulations Currently Mapped</h3>
              <p>No Greenfuel products are currently mapped to this specific concern category.</p>
              <Link to="/products" className="sbc-browse-all-btn">
                <span>Browse All Products</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 6. SECTION 6 — TRADITION × SCIENCE SPLIT BANNER */}
      <section className="sbc-ts-section">
        <div className="sbc-ts-container">
          <div className="sbc-ts-banner">
            
            {/* Left: Ayurvedic Tradition */}
            <div className="sbc-ts-panel panel-tradition">
              <img src={traditionImg} alt="Ayurvedic Heritage Herbs" className="sbc-ts-bg" />
              <div className="sbc-ts-overlay warm"></div>
              <div className="sbc-ts-content">
                <span className="sbc-ts-tag">ANCIENT HERITAGE</span>
                <h3>Vedic Textual Wisdom</h3>
                <p>Classical Ayurvedic botanicals harvested from wild Western Ghats groves.</p>
              </div>
            </div>

            {/* Center Bridge */}
            <div className="sbc-ts-center-bridge">
              <span>TRADITION</span>
              <span className="bridge-x">×</span>
              <span>SCIENCE</span>
            </div>

            {/* Right: Modern Formulation Science */}
            <div className="sbc-ts-panel panel-science">
              <img src={scienceImg} alt="Modern Lab Science" className="sbc-ts-bg" />
              <div className="sbc-ts-overlay cool"></div>
              <div className="sbc-ts-content">
                <span className="sbc-ts-tag">MODERN EXTRACTION</span>
                <h3>Phyto-Active Science</h3>
                <p>Cold-pressed micro-encapsulation ensuring bio-active nutrient purity.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SECTION 7 — RITUAL PLACEMENT */}
      {selectedConcern.ritualPhases && (
        <section className="sbc-ritual-section">
          <div className="sbc-ritual-container">
            <div className="sbc-ritual-header">
              <span className="sbc-sub-badge">ROUTINE INTEGRATION</span>
              <h2>Where It Fits Into Your Ritual</h2>
              <p>Simple step-by-step guidance to integrate these formulations into your daily regimen.</p>
            </div>

            <div className="sbc-ritual-cards-flex">
              {selectedConcern.ritualPhases.map((phaseItem, index) => (
                <div key={index} className="sbc-ritual-card">
                  <div className="ritual-phase-badge">
                    <Clock size={16} />
                    <span>{phaseItem.phase}</span>
                  </div>
                  <h4 className="ritual-step-name">{phaseItem.step}</h4>
                  <div className="ritual-rec-box">
                    <span className="rec-label">Recommended Formulation:</span>
                    <strong className="rec-val">{phaseItem.recommendation}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. SECTION 8 — KNOWLEDGE CENTRE SUPPORT */}
      <section className="sbc-knowledge-section">
        <div className="sbc-knowledge-container">
          <div className="sbc-knowledge-header">
            <span className="sbc-sub-badge">RESEARCH & READINGS</span>
            <h2>Learn More About {selectedConcern.name}</h2>
            <p>Explore articles from our Botanical Knowledge Centre explaining the science behind this concern.</p>
          </div>

          <div className="sbc-knowledge-cards-grid">
            <div className="sbc-article-card">
              <div className="article-tag">AYURVEDA & SCIENCE</div>
              <h3>Understanding Dermal Oxidation and Phyto-Nutrients</h3>
              <p>How botanical antioxidants prevent stress-induced skin dullness and restore cellular radiance naturally.</p>
              <Link to="/journal" className="article-read-link">
                <span>Read Article</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="sbc-article-card">
              <div className="article-tag">INGREDIENT DISCOVERY</div>
              <h3>The Phyto-Retinol Secret of Bakuchiol</h3>
              <p>A clinical look at how Himalayan Bakuchiol boosts collagen synthesis without synthetic retinol irritation.</p>
              <Link to="/journal" className="article-read-link">
                <span>Read Article</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 9 — GREENFUEL PROMISE */}
      <GreenfuelPromise />

    </div>
  )
}
