import { useMemo, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { SHOP_CATEGORIES, CATALOGUE_PRODUCTS, BOTANICAL_INGREDIENTS } from '../data/shopData'
import ProductCard from '../components/shop/ProductCard'
import GreenfuelPromise from '../components/shop/GreenfuelPromise'
import { 
  ChevronRight, 
  Sparkles, 
  Leaf, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  FilterX, 
  ArrowLeft 
} from 'lucide-react'

// Category extended details mapping for rich editorial experience
const CATEGORY_DETAILS = {
  'hair-mask': {
    tagline: 'Deep Scalp Conditioning & Follicle Shaft Repair',
    description: 'Nourish hair roots and repair environmental shaft damage with cold-extracted Ayurvedic oil blends, wild Bhringraj extractions, and natural botanical clays.',
    ritualGuide: 'Apply twice weekly to damp hair from scalp roots to ends. Leave for 20 minutes before rinsing with lukewarm water.'
  },
  'face-mask': {
    tagline: 'Deep Dermal Detox & Pore Purification',
    description: 'Purify dermal pores, clear excess sebum, and calm skin inflammation using sun-dried Fuller’s Earth and anti-microbial wild Neem leaves.',
    ritualGuide: 'Apply an even layer over cleansed face. Relax for 15 minutes until dry, then rinse off gently using circular massaging motions.'
  },
  'ubtan': {
    tagline: 'Traditional Vedic Polishing & Natural Radiance',
    description: 'Ancient bridal Ubtan recipe formulated with Kashmiri Saffron strands, organic turmeric, and crushed botanical grains to reveal velvety soft luminosity.',
    ritualGuide: 'Mix 1 tablespoon of Ubtan powder with raw milk or rose water to form a smooth paste. Gently polish skin and wash off with water.'
  },
  'face-serum': {
    tagline: 'Concentrated Phyto-Active Dermal Elixirs',
    description: 'High-potency botanical micro-serums enriched with Himalayan Bakuchiol and Kashmiri Saffron to stimulate natural collagen synthesis and fade dark spots.',
    ritualGuide: 'Dispense 3-4 drops onto clean fingertips. Gently press into face and neck before applying your moisturizing cream.'
  },
  'scalp-serum': {
    tagline: 'Root Activation & Follicle Density Boosting',
    description: 'Targeted scalp revitalizer designed to reduce root shedding, stimulate micro-circulation, and maintain a healthy scalp microbiome balance.',
    ritualGuide: 'Section hair and apply directly onto scalp. Massage thoroughly with fingertips using circular motions. Leave in overnight.'
  },
  'face-wash': {
    tagline: 'No-Rinse Hydro-Cleansing & Hydration Refresh',
    description: 'Ultra-gentle Ayurvedic mist cleanser that sweeps away urban micro-pollutants and excess surface lipids without stripping natural moisture.',
    ritualGuide: 'Spray 2-3 pumps onto face or cotton pad. Wipe gently across skin to instantly cleanse and refresh on-the-go.'
  },
  'moisturizing-cream': {
    tagline: '100-Times Washed Ghee & Barrier Repair Care',
    description: 'Rich lipid-replenishing cream formulated with classical Shata Dhauta Ghrita (100-times washed cow ghee) for deep 48-hour moisture reservation.',
    ritualGuide: 'Smooth a pearl-sized amount over face and neck morning and night to lock in hydration and fortify skin defenses.'
  },
  'roll-on': {
    tagline: '24h Natural Odor Control & Microbiome Balance',
    description: 'Natural crystal alum roll-on infused with cooling Sandalwood hydrosol and anti-bacterial Neem to keep underarms fresh without blocking sweat pores.',
    ritualGuide: 'Apply directly onto clean, dry underarms after showering for all-day natural odor protection.'
  },
  'inhaler': {
    tagline: 'Therapeutic Aromatherapy & Respiratory Balance',
    description: 'Pure essential oil inhaler stick crafted with adaptogenic Holy Tulsi, eucalyptus, and mint extractions to clear senses and balance Prana energy.',
    ritualGuide: 'Hold inhaler close to nostrils and inhale deeply 2-3 times whenever feeling fatigued or congested.'
  }
}

export default function CategoryPage() {
  const { categorySlug } = useParams()
  const navigate = useNavigate()

  // Determine active category object
  const activeCategory = useMemo(() => {
    const slug = categorySlug || 'hair-mask'
    return SHOP_CATEGORIES.find((c) => c.slug === slug || c.id === slug) || SHOP_CATEGORIES[0]
  }, [categorySlug])

  // Get category extra metadata
  const extraDetails = useMemo(() => {
    return CATEGORY_DETAILS[activeCategory.slug] || {
      tagline: 'Targeted Ayurvedic Botanical Formulation',
      description: 'Handcrafted in small batches using cold-pressed botanicals and classical Ayurvedic wisdom.',
      ritualGuide: 'Incorporate into your daily morning and evening wellness ritual for optimal cellular restoration.'
    }
  }, [activeCategory])

  // Filter products for this specific category
  const categoryProducts = useMemo(() => {
    return CATALOGUE_PRODUCTS.filter(
      (p) => p.categorySlug === activeCategory.slug || p.category === activeCategory.name
    )
  }, [activeCategory])

  // Find ingredients connected to this category's products
  const connectedIngredients = useMemo(() => {
    const ingIds = new Set()
    categoryProducts.forEach((p) => p.ingredients?.forEach((id) => ingIds.add(id)))
    return BOTANICAL_INGREDIENTS.filter((ing) => ingIds.has(ing.id))
  }, [categoryProducts])

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [categorySlug])

  return (
    <div className="cat-page-wrapper">
      
      {/* 1. BREADCRUMB NAVIGATION */}
      <div className="pdp-breadcrumb-container">
        <div className="pdp-breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <Link to="/products" className="breadcrumb-link">Shop</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">{activeCategory.name}</span>
        </div>
      </div>

      {/* 2. CATEGORY EDITORIAL HERO BANNER */}
      <section className="cat-hero-section">
        <div className="cat-hero-container">
          <div className="cat-hero-grid">
            
            {/* Left Image Box */}
            <div className="cat-hero-img-box">
              <img src={activeCategory.image} alt={activeCategory.name} className="cat-hero-img" />
              <span className="cat-product-count-badge">
                {categoryProducts.length} {categoryProducts.length === 1 ? 'Formulation' : 'Formulations'}
              </span>
            </div>

            {/* Right Details */}
            <div className="cat-hero-text-box">
              <span className="sbc-sub-badge">CURATED CATEGORY</span>
              <h1 className="cat-hero-title">{activeCategory.name}</h1>
              <p className="cat-hero-tagline">{extraDetails.tagline}</p>
              <div className="sbc-story-divider"></div>
              <p className="cat-hero-desc">{extraDetails.description}</p>
              
              <div className="cat-trust-strip">
                <div className="cat-trust-item">
                  <Leaf size={16} className="trust-icon" />
                  <span>100% Organic Extracts</span>
                </div>
                <div className="cat-trust-item">
                  <Sparkles size={16} className="trust-icon" />
                  <span>Cold-Pressed Extraction</span>
                </div>
                <div className="cat-trust-item">
                  <ShieldCheck size={16} className="trust-icon" />
                  <span>Ayurvedic Efficacy</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CATEGORY PRODUCTS CATALOGUE GRID */}
      <section className="cat-products-section">
        <div className="cat-products-container">
          <div className="cat-section-header">
            <span className="sbc-sub-badge">AVAILABLE FORMULATIONS</span>
            <h2>{activeCategory.name} Range</h2>
            <p>Explore formulations crafted specifically for {activeCategory.name.toLowerCase()} care.</p>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="spec-product-grid">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="sbc-no-products-card">
              <FilterX size={40} className="no-prod-icon" />
              <h3>Formulation Arriving Soon</h3>
              <p>New {activeCategory.name} formulations are currently undergoing batch extraction.</p>
              <Link to="/products" className="sbc-browse-all-btn">
                <span>Explore Full Catalogue</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 4. RITUAL & USAGE GUIDANCE PANEL */}
      <section className="cat-guide-section">
        <div className="cat-guide-container">
          <div className="cat-guide-card">
            <div className="guide-header-row">
              <Clock size={20} className="guide-clock-icon" />
              <h3>How to Integrate {activeCategory.name} into Your Routine</h3>
            </div>
            <p className="guide-text">{extraDetails.ritualGuide}</p>
          </div>
        </div>
      </section>

      {/* 5. CONNECTED BOTANICAL HERBS */}
      {connectedIngredients.length > 0 && (
        <section className="sbc-ingredients-section">
          <div className="sbc-ingredients-container">
            <div className="sbc-ingredients-header">
              <span className="sbc-dark-badge">BOTANICAL HERBS</span>
              <h2 className="sbc-dark-title">Key Active Herbs in {activeCategory.name}</h2>
              <p className="sbc-dark-subtitle">Cold-pressed plant extractions powering these formulations.</p>
            </div>

            <div className="sbc-ingredients-grid">
              {connectedIngredients.map((ing) => (
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
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. SWITCH TO OTHER 8 CATEGORIES BAR */}
      <section className="cat-switcher-section">
        <div className="cat-switcher-container">
          <div className="cat-switcher-header">
            <span className="sbc-sub-badge">EXPLORE MORE CATEGORIES</span>
            <h2>Browse All 9 Ayurvedic Categories</h2>
          </div>

          <div className="cat-switcher-chips-flex">
            {SHOP_CATEGORIES.map((cat) => {
              const isCurrent = cat.slug === activeCategory.slug
              return (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  className={`cat-switcher-chip ${isCurrent ? 'active' : ''}`}
                >
                  <img src={cat.image} alt={cat.name} className="chip-cat-thumb" />
                  <span>{cat.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. GREENFUEL PROMISE */}
      <GreenfuelPromise />

    </div>
  )
}
