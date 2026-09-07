import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react'

export default function CartDrawer() {
  const {
    cartItems,
    totalItems,
    subtotal,
    formattedSubtotal,
    isCartDrawerOpen,
    closeCartDrawer,
    updateQuantity,
    removeFromCart
  } = useCart()

  const navigate = useNavigate()

  if (!isCartDrawerOpen) return null

  // Free shipping threshold (₹999)
  const FREE_SHIPPING_THRESHOLD = 999
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  const handleCheckoutClick = () => {
    closeCartDrawer()
    navigate('/cart')
  }

  return (
    <div className="cart-drawer-backdrop" onClick={closeCartDrawer}>
      <div 
        className="cart-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
      >
        
        {/* Drawer Header */}
        <div className="cart-drawer-header">
          <div className="drawer-title-row">
            <ShoppingBag size={20} className="drawer-bag-icon" />
            <h3>Your Shopping Bag <span className="drawer-item-count">({totalItems})</span></h3>
          </div>
          <button onClick={closeCartDrawer} className="drawer-close-btn" aria-label="Close cart drawer">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="cart-shipping-banner">
          {amountNeededForFreeShipping > 0 ? (
            <p className="shipping-text">
              Add <strong>₹{amountNeededForFreeShipping.toLocaleString('en-IN')}</strong> more to unlock <strong>Free Express Shipping</strong>!
            </p>
          ) : (
            <p className="shipping-text success">
              🎉 Congratulations! You have unlocked <strong>Free Express Shipping</strong>!
            </p>
          )}
          <div className="shipping-progress-track">
            <div className="shipping-progress-fill" style={{ width: `${shippingProgress}%` }}></div>
          </div>
        </div>

        {/* Cart Drawer Items List */}
        <div className="cart-drawer-body">
          {cartItems.length > 0 ? (
            <div className="drawer-items-list">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="drawer-cart-item">
                  
                  {/* Thumbnail Image */}
                  <Link to={`/product/${product.id}`} onClick={closeCartDrawer} className="drawer-item-img-link">
                    <img src={product.image} alt={product.name} className="drawer-item-img" />
                  </Link>

                  {/* Product Details */}
                  <div className="drawer-item-details">
                    <span className="drawer-item-cat">{product.category}</span>
                    <Link to={`/product/${product.id}`} onClick={closeCartDrawer} className="drawer-item-title">
                      {product.name}
                    </Link>
                    
                    <div className="drawer-item-price-row">
                      <span className="drawer-item-price">{product.formattedPrice}</span>
                      <span className="drawer-item-subtotal">₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                    </div>

                    {/* Stepper + Delete */}
                    <div className="drawer-item-actions">
                      <div className="drawer-qty-stepper">
                        <button 
                          onClick={() => updateQuantity(product.id, quantity - 1)} 
                          className="qty-step-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="qty-step-val">{quantity}</span>
                        <button 
                          onClick={() => updateQuantity(product.id, quantity + 1)} 
                          className="qty-step-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button 
                        onClick={() => removeFromCart(product.id)} 
                        className="drawer-item-remove-btn"
                        aria-label="Remove item"
                        title="Remove formulation"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="drawer-empty-state">
              <div className="drawer-empty-icon-wrap">
                <ShoppingBag size={40} className="empty-icon" />
              </div>
              <h4>Your Shopping Bag is Empty</h4>
              <p>Explore our cold-pressed Ayurvedic formulations and build your daily wellness routine.</p>
              <button onClick={closeCartDrawer} className="drawer-empty-shop-btn">
                <span>Browse Formulations</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Cart Drawer Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="drawer-summary-line">
              <span>Subtotal:</span>
              <span className="drawer-subtotal-val">{formattedSubtotal}</span>
            </div>
            
            <div className="drawer-summary-note">
              <span>Taxes included • Free Express Shipping</span>
            </div>

            <div className="drawer-footer-cta-row">
              <Link to="/cart" onClick={closeCartDrawer} className="drawer-view-cart-btn">
                View Bag
              </Link>

              <button onClick={handleCheckoutClick} className="drawer-checkout-btn">
                <span>Checkout</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="drawer-trust-row">
              <ShieldCheck size={14} className="trust-icn" />
              <span>100% Authentic Vedic Promise • Secure Checkout</span>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
