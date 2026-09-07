import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  X, 
  Sparkles, 
  Leaf, 
  ShoppingBag, 
  Check, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react'
import { getProductsForConcern, getIngredientsForConcern } from '../../data/concernsData'
import { useCart } from '../../context/CartContext'

export default function ConcernQuickViewModal({ concern, isOpen, onClose }) {
  const [addedProductId, setAddedProductId] = useState(null)
  const { addToCart } = useCart()

  // Lock background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen || !concern) return null

  const suggestedProducts = getProductsForConcern(concern.id)
  const connectedIngredients = getIngredientsForConcern(concern.id)

  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    addToCart(product, 1, true)
    setAddedProductId(product.id)
    setTimeout(() => setAddedProductId(null), 1800)
  }

  return (
    <div 
      className="concern-modal-backdrop" 
      onClick={onClose}
      data-lenis-prevent="true"
      data-lenis-prevent-wheel="true"
      data-lenis-prevent-touch="true"
    >
      <div 
        className="concern-modal-container" 
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
      >
        
        {/* Modal Close Button */}
        <button onClick={onClose} className="concern-modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Hero Header */}
        <div className="concern-modal-header">
          <img src={concern.image} alt={concern.name} className="modal-header-img" />
          <div className="modal-header-overlay"></div>
          <div className="modal-header-content">
            <span className="modal-badge-tag">CONCERN QUICK GUIDE</span>
            <h2 className="modal-concern-title">{concern.name}</h2>
            <p className="modal-concern-tagline">{concern.tagline}</p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="concern-modal-body">
          
          {/* Section A: Ayurvedic Science Insight */}
          <div className="modal-info-block">
            <h3>Ayurvedic Approach</h3>
            <p className="modal-desc-text">{concern.longDescription || concern.shortDescription}</p>
            {concern.greenfuelApproach && (
              <div className="modal-approach-highlight">
                <Sparkles size={18} className="approach-icon" />
                <p><strong>Greenfuel Formula:</strong> {concern.greenfuelApproach}</p>
              </div>
            )}
          </div>

          {/* Section B: Key Active Botanical Ingredients */}
          {connectedIngredients.length > 0 && (
            <div className="modal-info-block">
              <h3>Connected Botanical Herbs</h3>
              <div className="modal-herbs-chips">
                {connectedIngredients.map((herb) => (
                  <div key={herb.id} className="herb-chip">
                    <img src={herb.image} alt={herb.name} className="herb-chip-img" />
                    <div className="herb-chip-text">
                      <strong>{herb.name}</strong>
                      <span>{herb.origin}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section C: Suggested Products */}
          <div className="modal-info-block">
            <h3>Suggested Formulations ({suggestedProducts.length})</h3>
            
            {suggestedProducts.length > 0 ? (
              <div className="modal-products-grid">
                {suggestedProducts.map((product) => {
                  const isAdded = addedProductId === product.id
                  return (
                    <div key={product.id} className="modal-product-card">
                      <div className="modal-prod-img-box">
                        {product.badge && <span className="modal-prod-badge">{product.badge}</span>}
                        <img src={product.image} alt={product.name} className="modal-prod-img" />
                      </div>

                      <div className="modal-prod-details">
                        <span className="modal-prod-cat">{product.category}</span>
                        <h4 className="modal-prod-title">{product.name}</h4>
                        <span className="modal-prod-price">{product.formattedPrice}</span>
                        
                        <div className="modal-prod-actions">
                          <Link 
                            to={`/product/${product.id}`} 
                            onClick={onClose}
                            className="modal-view-btn"
                          >
                            View
                          </Link>

                          <button 
                            onClick={(e) => handleAddToCart(e, product)}
                            className={`modal-cart-btn ${isAdded ? 'added' : ''}`}
                          >
                            {isAdded ? <Check size={14} /> : <ShoppingBag size={14} />}
                            <span>{isAdded ? 'Added' : 'Add'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="no-products-note">No products are currently mapped to this concern.</p>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="concern-modal-footer">
          <Link 
            to={`/shop-by-concern/${concern.slug}`}
            onClick={onClose}
            className="modal-full-guide-btn"
          >
            <span>Explore Complete {concern.name} Ritual</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}
