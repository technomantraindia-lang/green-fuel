import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, Check } from 'lucide-react'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product, onAddToCart, isWishlisted: propIsWishlisted, onToggleWishlist }) {
  const [added, setAdded] = useState(false)
  const { isInWishlist, toggleWishlist } = useWishlist()
  const { addToCart } = useCart()

  // Use prop if provided, otherwise use global WishlistContext
  const isFavorited = propIsWishlisted !== undefined ? propIsWishlisted : isInWishlist(product.id)

  const handleAdd = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (onAddToCart) {
      onAddToCart(product)
    } else {
      addToCart(product, 1, true)
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const handleWishlist = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (onToggleWishlist) {
      onToggleWishlist(product.id)
    } else {
      toggleWishlist(product.id)
    }
  }

  const productLink = `/product/${product.id}`

  return (
    <div className="spec-product-card">
      
      {/* Product Image & Badges Box */}
      <div className="card-media-box">
        {product.badge && <span className="card-badge">{product.badge}</span>}

        <button 
          onClick={handleWishlist} 
          className={`card-wishlist-btn ${isFavorited ? 'active' : ''}`}
          aria-label={isFavorited ? "Remove from Favorites" : "Add to Favorites"}
          title={isFavorited ? "Remove from Favorites" : "Add to Favorites"}
        >
          <Heart size={18} fill={isFavorited ? '#C47A46' : 'none'} stroke={isFavorited ? '#C47A46' : '#1B2E1E'} />
        </button>

        <Link to={productLink} className="card-img-link">
          <img src={product.image} alt={product.name} className="card-img" />
        </Link>
      </div>

      {/* Product Information */}
      <div className="card-info-content">
        <span className="card-cat-label">{product.category}</span>

        <h3 className="card-title" title={product.name}>
          <Link to={productLink} className="card-title-link">
            {product.name}
          </Link>
        </h3>

        {product.descriptor && (
          <p className="card-short-desc">{product.descriptor}</p>
        )}

        {/* Footer Row: Price + Add to Cart Button */}
        <div className="card-action-row">
          <div className="card-price-wrap">
            <span className="price-val">{product.formattedPrice}</span>
          </div>

          <button 
            onClick={handleAdd} 
            className={`card-add-cart-btn ${added ? 'is-added' : ''}`}
          >
            {added ? (
              <>
                <Check size={16} />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag size={16} />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  )
}
