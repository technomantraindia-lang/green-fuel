import { useState, useMemo, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { 
  CATALOGUE_PRODUCTS, 
  SHOP_CATEGORIES, 
  BOTANICAL_INGREDIENTS 
} from '../data/shopData'
import ProductCard from '../components/shop/ProductCard'
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Heart, 
  ShoppingBag, 
  Check, 
  ChevronRight, 
  Minus, 
  Plus, 
  Sparkles, 
  Leaf, 
  Info, 
  Droplet, 
  Award, 
  ArrowLeft,
  Share2
} from 'lucide-react'

import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isInWishlist, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()

  // Find product by ID or category slug
  const product = useMemo(() => {
    if (!id) return null
    return CATALOGUE_PRODUCTS.find(p => p.id === id || p.categorySlug === id) || CATALOGUE_PRODUCTS[0]
  }, [id])

  // Scroll to top on route / product ID change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  // Interactive States
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('benefits')
  const [copiedLink, setCopiedLink] = useState(false)

  const isWishlisted = product ? isInWishlist(product.id) : false

  if (!product) {
    return (
      <div className="product-not-found-container">
        <h2>Formulation Not Found</h2>
        <p>The requested Ayurvedic formulation could not be located.</p>
        <Link to="/shop" className="pdp-back-btn">
          <ArrowLeft size={18} /> Return to Shop
        </Link>
      </div>
    )
  }

  // Find related products (same category or general fallback)
  const relatedProducts = CATALOGUE_PRODUCTS.filter(
    (p) => p.id !== product.id && (p.categorySlug === product.categorySlug || p.category === product.category)
  ).concat(
    CATALOGUE_PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug !== product.categorySlug)
  ).slice(0, 3)

  // Map ingredient details
  const matchedIngredients = BOTANICAL_INGREDIENTS.filter(ing => 
    product.ingredients?.includes(ing.id)
  )

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta))
  }

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  return (
    <div className="pdp-page-wrapper">
      
      {/* 1. BREADCRUMB NAVIGATION BAR */}
      <div className="pdp-breadcrumb-container">
        <div className="pdp-breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <Link to="/shop" className="breadcrumb-link">Catalogue</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <Link to={`/shop?category=${product.categorySlug}`} className="breadcrumb-link">
            {product.category}
          </Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">{product.name}</span>
        </div>
      </div>

      {/* 2. MAIN PRODUCT HERO CONTAINER */}
      <section className="pdp-main-section">
        <div className="pdp-main-container">
          
          {/* LEFT: IMAGE & BADGES SHOWCASE */}
          <div className="pdp-gallery-box">
            <div className="pdp-main-image-wrap">
              {product.badge && <span className="pdp-badge-tag">{product.badge}</span>}
              
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`pdp-wishlist-fab ${isWishlisted ? 'active' : ''}`}
                aria-label={isWishlisted ? "Remove from Favorites" : "Add to Favorites"}
                title={isWishlisted ? "Remove from Favorites" : "Add to Favorites"}
              >
                <Heart size={22} fill={isWishlisted ? '#C47A46' : 'none'} stroke={isWishlisted ? '#C47A46' : '#1B2E1E'} />
              </button>

              <button 
                onClick={handleShare}
                className="pdp-share-fab"
                aria-label="Share Product"
                title="Copy product link"
              >
                {copiedLink ? <Check size={18} color="#2D5A27" /> : <Share2 size={18} />}
              </button>

              <img 
                src={product.image} 
                alt={product.name} 
                className="pdp-hero-image"
              />
            </div>

            {/* Quality Stamps Below Image */}
            <div className="pdp-stamps-grid">
              <div className="pdp-stamp-item">
                <Leaf size={20} className="stamp-icon" />
                <span>100% Botanical</span>
              </div>
              <div className="pdp-stamp-item">
                <Sparkles size={20} className="stamp-icon" />
                <span>Cold-Extracted</span>
              </div>
              <div className="pdp-stamp-item">
                <Award size={20} className="stamp-icon" />
                <span>AYUSH Certified</span>
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT DETAILS & BUYING PANEL */}
          <div className="pdp-details-box">
            
            {/* Category & Rating */}
            <div className="pdp-meta-top">
              <span className="pdp-category-pill">{product.category}</span>
              <div className="pdp-rating-strip">
                <div className="pdp-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#C47A46" stroke="#C47A46" />
                  ))}
                </div>
                <span className="pdp-rating-text">4.9 (148 Ratings)</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="pdp-product-title">{product.name}</h1>

            {/* Price & Taxes info */}
            <div className="pdp-price-container">
              <span className="pdp-price-val">{product.formattedPrice}</span>
              <span className="pdp-tax-note">Inclusive of all taxes & free express shipping</span>
            </div>

            {/* Short Descriptor */}
            <p className="pdp-short-descriptor">{product.descriptor}</p>

            {/* Size / Net Quantity Selection */}
            <div className="pdp-size-selector-wrap">
              <span className="pdp-size-label">Net Volume / Size:</span>
              <div className="pdp-size-options">
                <button className="pdp-size-btn active">Standard Jar / Bottle</button>
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div className="pdp-actions-block">
              
              {/* Counter */}
              <div className="pdp-quantity-counter">
                <button onClick={() => handleQuantityChange(-1)} className="qty-btn" aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>
                <span className="qty-value">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="qty-btn" aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>

              {/* Add to Cart */}
              <button 
                onClick={handleAddToCart} 
                className={`pdp-add-cart-btn ${added ? 'added' : ''}`}
              >
                {added ? (
                  <>
                    <Check size={20} />
                    <span>Added ({quantity})</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} />
                    <span>Add to Cart • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                  </>
                )}
              </button>

            </div>

            {/* Immediate Guarantee Perks */}
            <div className="pdp-perks-row">
              <div className="perk-item">
                <Truck size={18} className="perk-icon" />
                <div>
                  <strong>Free Express Delivery</strong>
                  <p>Dispatched within 24 hours</p>
                </div>
              </div>
              <div className="perk-item">
                <ShieldCheck size={18} className="perk-icon" />
                <div>
                  <strong>100% Authentic Guarantee</strong>
                  <p>Direct from Western Ghats harvest</p>
                </div>
              </div>
              <div className="perk-item">
                <RotateCcw size={18} className="perk-icon" />
                <div>
                  <strong>30-Day Returns</strong>
                  <p>Hassle-free botanical promise</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. TABBED AYURVEDIC KNOWLEDGE & FORMULATION DETAILS */}
      <section className="pdp-tabs-section">
        <div className="pdp-tabs-container">
          
          {/* Tab Controls */}
          <div className="pdp-tabs-header">
            <button 
              className={`pdp-tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Key Benefits
            </button>
            <button 
              className={`pdp-tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              Botanical Ingredients ({matchedIngredients.length})
            </button>
            <button 
              className={`pdp-tab-btn ${activeTab === 'directions' ? 'active' : ''}`}
              onClick={() => setActiveTab('directions')}
            >
              Directions for Use
            </button>
          </div>

          {/* Tab Content Panel */}
          <div className="pdp-tab-content-card">
            
            {/* BENEFITS TAB */}
            {activeTab === 'benefits' && (
              <div className="pdp-tab-pane">
                <h3 className="tab-pane-title">Ayurvedic Efficacy & Benefits</h3>
                <p className="tab-pane-intro">
                  Formulated in strict accordance with classical Ayurvedic texts to deliver visible cellular restoration without synthetic additives.
                </p>
                
                <div className="pdp-benefits-grid">
                  <div className="benefit-card">
                    <Leaf className="benefit-icon" size={24} />
                    <h4>Cellular Dermal Repair</h4>
                    <p>Penetrates deep skin & scalp layers to nourish hair roots and rebuild dermal moisture barriers.</p>
                  </div>
                  <div className="benefit-card">
                    <Sparkles className="benefit-icon" size={24} />
                    <h4>Zero Synthetic Toxins</h4>
                    <p>Free from parabens, phthalates, artificial fragrance, mineral oil, and silicone fillers.</p>
                  </div>
                  <div className="benefit-card">
                    <Droplet className="benefit-icon" size={24} />
                    <h4>Bio-Active Potency</h4>
                    <p>Cold-pressed botanical extractions preserve natural Phyto-nutrients for maximum potency.</p>
                  </div>
                </div>
              </div>
            )}

            {/* INGREDIENTS TAB */}
            {activeTab === 'ingredients' && (
              <div className="pdp-tab-pane">
                <h3 className="tab-pane-title">Key Active Herbs</h3>
                <p className="tab-pane-intro">
                  Sourced sustainably from wild groves and heritage farms across India.
                </p>

                <div className="pdp-ingredients-flex">
                  {matchedIngredients.length > 0 ? (
                    matchedIngredients.map((ing) => (
                      <div key={ing.id} className="pdp-ing-card">
                        <img src={ing.image} alt={ing.name} className="ing-card-img" />
                        <div className="ing-card-info">
                          <h4>{ing.name}</h4>
                          <span className="ing-origin">{ing.origin}</span>
                          <p>{ing.role}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="pdp-ing-card">
                      <Leaf className="ing-card-img-placeholder" size={32} />
                      <div className="ing-card-info">
                        <h4>Pure Botanical Extracts</h4>
                        <span className="ing-origin">Himalayan Harvest</span>
                        <p>Infused with Ayurvedic herbs, essential oils, and floral distillates.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* DIRECTIONS FOR USE TAB */}
            {activeTab === 'directions' && (
              <div className="pdp-tab-pane">
                <h3 className="tab-pane-title">Directions for Use</h3>
                <p className="tab-pane-intro">
                  Follow this simple Ayurvedic ritual for maximum absorbency and optimal efficacy.
                </p>

                {product.usageInstructions && (
                  <div className="pdp-direct-instructions-box">
                    <strong>Recommended Application:</strong>
                    <p>{product.usageInstructions}</p>
                  </div>
                )}
                
                <div className="pdp-steps-timeline">
                  <div className="timeline-step">
                    <span className="step-num">01</span>
                    <div className="step-content">
                      <h4>Cleanse & Prepare</h4>
                      <p>Cleanse target area gently with lukewarm water to clear surface oils and open skin/scalp pores.</p>
                    </div>
                  </div>
                  <div className="timeline-step">
                    <span className="step-num">02</span>
                    <div className="step-content">
                      <h4>Apply & Massage</h4>
                      <p>Dispense an even layer and massage gently using circular upward strokes with your fingertips.</p>
                    </div>
                  </div>
                  <div className="timeline-step">
                    <span className="step-num">03</span>
                    <div className="step-content">
                      <h4>Absorb & Restore</h4>
                      <p>Allow the active botanical formulation to deeply penetrate and restore for best results.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 4. RELATED FORMULATIONS RECOMMENDATION */}
      <section className="pdp-related-section">
        <div className="pdp-related-container">
          <div className="related-header">
            <span className="section-label">RECOMMENDED FORMULATIONS</span>
            <h2 className="section-title">Complete Your Ayurvedic Ritual</h2>
          </div>

          <div className="spec-product-grid">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
