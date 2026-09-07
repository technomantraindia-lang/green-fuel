import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/shop/ProductCard'
import GreenfuelPromise from '../components/shop/GreenfuelPromise'
import { Heart, ArrowRight, Trash2, ShoppingBag, Check, ChevronRight } from 'lucide-react'

export default function WishlistPage() {
  const { wishlistProducts, wishlistCount, removeFromWishlist } = useWishlist()
  const [addedId, setAddedId] = useState(null)

  const handleAddToCart = (productId) => {
    setAddedId(productId)
    setTimeout(() => setAddedId(null), 1800)
  }

  return (
    <div className="wishlist-page-wrapper">
      
      {/* 1. BREADCRUMB */}
      <div className="pdp-breadcrumb-container">
        <div className="pdp-breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">Favorites & Wishlist</span>
        </div>
      </div>

      {/* 2. HERO HEADER */}
      <section className="wishlist-hero-section">
        <div className="wishlist-hero-container">
          <span className="sbc-sub-badge">YOUR SAVED RITUALS</span>
          <h1 className="wishlist-hero-title">
            My Favorites <span className="sans-num">({wishlistCount})</span>
          </h1>
          <p className="wishlist-hero-subtitle">
            Your personal collection of targeted Ayurvedic formulations saved for quick re-ordering and routine building.
          </p>
        </div>
      </section>

      {/* 3. MAIN WISHLIST GRID OR EMPTY STATE */}
      <section className="wishlist-content-section">
        <div className="wishlist-content-container">
          
          {wishlistCount > 0 ? (
            <div className="spec-product-grid">
              {wishlistProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="wishlist-empty-card">
              <div className="empty-heart-icon-box">
                <Heart size={44} stroke="#C47A46" fill="rgba(196, 122, 70, 0.1)" />
              </div>
              <h2>Your Favorites List is Empty</h2>
              <p>Explore Greenfuel's Ayurvedic formulations and click the heart icon on any product to save it here.</p>
              <Link to="/products" className="wishlist-browse-btn">
                <span>Explore Formulations</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* 4. GREENFUEL PROMISE */}
      <GreenfuelPromise />

    </div>
  )
}
