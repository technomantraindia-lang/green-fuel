import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import GreenfuelPromise from '../components/shop/GreenfuelPromise'
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Tag, 
  Check, 
  Sparkles,
  ArrowLeft
} from 'lucide-react'

export default function CartPage() {
  const {
    cartItems,
    totalItems,
    subtotal,
    formattedSubtotal,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart()

  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState(null)
  const [couponError, setCouponError] = useState('')
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  // Calculate discount if promo applied
  const discountAmount = appliedCoupon ? Math.round(subtotal * 0.15) : 0
  const finalTotal = subtotal - discountAmount

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    setCouponError('')
    if (couponCode.trim().toUpperCase() === 'VEDIC15' || couponCode.trim().toUpperCase() === 'GREEN15') {
      setAppliedCoupon({ code: couponCode.trim().toUpperCase(), discount: '15%' })
    } else {
      setCouponError('Invalid coupon code. Try "VEDIC15" for 15% off!')
    }
  }

  const handleProceedCheckout = () => {
    setIsCheckingOut(true)
    setTimeout(() => {
      alert('Order Placed Successfully! (Laravel API Checkout Endpoint Integration Ready)')
      clearCart()
      setIsCheckingOut(false)
    }, 1200)
  }

  return (
    <div className="cart-page-wrapper">
      
      {/* 1. BREADCRUMB */}
      <div className="pdp-breadcrumb-container">
        <div className="pdp-breadcrumb-inner">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <Link to="/products" className="breadcrumb-link">Shop</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current">Shopping Bag</span>
        </div>
      </div>

      {/* 2. HERO HEADER */}
      <section className="cart-hero-section">
        <div className="cart-hero-container">
          <span className="sbc-sub-badge">CHECKOUT RITUAL</span>
          <h1 className="cart-hero-title">
            Your Shopping Bag <span className="sans-num">({totalItems})</span>
          </h1>
          <p className="cart-hero-subtitle">
            Review your selected Ayurvedic formulations, apply promotional certificates, and proceed to express dispatch.
          </p>
        </div>
      </section>

      {/* 3. MAIN CART CONTENT */}
      <section className="cart-content-section">
        <div className="cart-content-container">
          
          {cartItems.length > 0 ? (
            <div className="cart-layout-grid">
              
              {/* LEFT: CART ITEMS LIST */}
              <div className="cart-items-column">
                
                <div className="cart-table-header">
                  <span className="col-product">Formulation</span>
                  <span className="col-price">Price</span>
                  <span className="col-qty">Quantity</span>
                  <span className="col-total">Total</span>
                </div>

                <div className="cart-items-list-box">
                  {cartItems.map(({ product, quantity }) => (
                    <div key={product.id} className="cart-item-row">
                      
                      {/* Product Info & Media */}
                      <div className="item-info-cell">
                        <Link to={`/product/${product.id}`} className="cart-item-thumb-link">
                          <img src={product.image} alt={product.name} className="cart-item-thumb" />
                        </Link>

                        <div className="cart-item-details-wrap">
                          <span className="cart-item-cat">{product.category}</span>
                          <Link to={`/product/${product.id}`} className="cart-item-title-link">
                            {product.name}
                          </Link>
                          {product.descriptor && (
                            <p className="cart-item-desc-snippet">{product.descriptor}</p>
                          )}
                          <button 
                            onClick={() => removeFromCart(product.id)}
                            className="cart-remove-inline-btn"
                          >
                            <Trash2 size={14} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      {/* Unit Price Cell */}
                      <div className="item-price-cell">
                        <span className="unit-price">{product.formattedPrice}</span>
                      </div>

                      {/* Quantity Stepper Cell */}
                      <div className="item-qty-cell">
                        <div className="cart-qty-counter">
                          <button 
                            onClick={() => updateQuantity(product.id, quantity - 1)} 
                            className="qty-btn"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="qty-val sans-num">{quantity}</span>
                          <button 
                            onClick={() => updateQuantity(product.id, quantity + 1)} 
                            className="qty-btn"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Total Price Cell */}
                      <div className="item-total-cell">
                        <span className="row-total-price">
                          ₹{(product.price * quantity).toLocaleString('en-IN')}
                        </span>
                      </div>

                    </div>
                  ))}
                </div>

                {/* Table Footer Controls */}
                <div className="cart-actions-bar">
                  <Link to="/products" className="cart-continue-btn">
                    <ArrowLeft size={16} />
                    <span>Continue Shopping</span>
                  </Link>

                  <button onClick={clearCart} className="cart-clear-all-btn">
                    <Trash2 size={15} />
                    <span>Clear Bag</span>
                  </button>
                </div>

              </div>

              {/* RIGHT: ORDER SUMMARY CARD */}
              <div className="cart-summary-column">
                <div className="cart-summary-card">
                  
                  <h3 className="summary-card-title">Order Summary</h3>

                  {/* Summary Breakdown */}
                  <div className="summary-lines-box">
                    <div className="summary-line">
                      <span>Bag Subtotal (<span className="sans-num">{totalItems}</span> items)</span>
                      <span className="val">{formattedSubtotal}</span>
                    </div>

                    <div className="summary-line">
                      <span>Express Shipping</span>
                      <span className="val free-tag">FREE</span>
                    </div>

                    {appliedCoupon && (
                      <div className="summary-line discount-line">
                        <span>Promo Discount ({appliedCoupon.code})</span>
                        <span className="val discount-val">-₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                  </div>

                  <div className="summary-divider"></div>

                  {/* Coupon Promo Input Box */}
                  <form onSubmit={handleApplyCoupon} className="coupon-form-box">
                    <label className="coupon-label">Promotional Certificate / Code:</label>
                    <div className="coupon-input-wrap">
                      <Tag size={16} className="coupon-icon" />
                      <input 
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter code (e.g. VEDIC15)"
                        className="coupon-input"
                      />
                      <button type="submit" className="coupon-apply-btn">Apply</button>
                    </div>
                    {couponError && <p className="coupon-msg error">{couponError}</p>}
                    {appliedCoupon && <p className="coupon-msg success">🎉 Code {appliedCoupon.code} applied! Saved 15%.</p>}
                  </form>

                  <div className="summary-divider"></div>

                  {/* Grand Total */}
                  <div className="summary-total-line">
                    <span>Total Amount</span>
                    <span className="grand-total-val">₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>

                  {/* Checkout CTA Button */}
                  <button 
                    onClick={handleProceedCheckout}
                    disabled={isCheckingOut}
                    className="cart-checkout-main-btn"
                  >
                    {isCheckingOut ? (
                      <span>Processing Order...</span>
                    ) : (
                      <>
                        <span>Proceed to Checkout</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  {/* Trust Stamps */}
                  <div className="cart-trust-stamps">
                    <div className="stamp-item">
                      <Truck size={16} className="stamp-icn" />
                      <span>Free Express Dispatch in 24h</span>
                    </div>
                    <div className="stamp-item">
                      <ShieldCheck size={16} className="stamp-icn" />
                      <span>100% Authentic Botanical Promise</span>
                    </div>
                    <div className="stamp-item">
                      <RotateCcw size={16} className="stamp-icn" />
                      <span>Easy 14-Day Returns & Exchanges</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ) : (
            <div className="cart-empty-card">
              <div className="empty-bag-icon-box">
                <ShoppingBag size={48} stroke="#C47A46" fill="rgba(196, 122, 70, 0.1)" />
              </div>
              <h2>Your Shopping Bag is Empty</h2>
              <p>You haven't added any Ayurvedic formulations to your bag yet. Explore our curated range of natural rituals.</p>
              <Link to="/products" className="cart-empty-browse-btn">
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
