import { ArrowRight, Sparkles } from 'lucide-react'
import heroWomanImg from '../../assets/hero_woman_product.png'
import heroProductsImg from '../../assets/signature_aura_ubtan_product.png'

export default function ShopHero() {
  const handleScrollToCatalogue = () => {
    const target = document.getElementById('shop-catalogue')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="shop-hero-section">
      <div className="shop-hero-container">
        
        {/* Left Editorial Text Column */}
        <div className="shop-hero-text-col">
          <div className="shop-hero-eyebrow">
            <Sparkles size={14} className="eyebrow-sparkle" />
            <span>SHOP GREENFUEL</span>
          </div>

          <h1 className="shop-hero-title">
            Discover Your <br />
            <span className="title-serif-italic">Everyday Ritual</span>
          </h1>

          <p className="shop-hero-desc">
            Thoughtfully crafted Ayurvedic formulations for modern living. 100% natural botanical potency rooted in timeless Vedic codices.
          </p>

          <button onClick={handleScrollToCatalogue} className="shop-hero-cta-btn">
            <span>Explore Products</span>
            <ArrowRight size={18} className="cta-arrow" />
          </button>
        </div>

        {/* Right Product Composition Showcase */}
        <div className="shop-hero-visual-col">
          <div className="shop-hero-img-card card-primary">
            <img src={heroWomanImg} alt="Ayurvedic Botanical Ritual" className="hero-product-img" />
            <div className="hero-img-badge">
              <span className="badge-dot"></span>
              <span>100% Pure Botanical</span>
            </div>
          </div>

          <div className="shop-hero-img-card card-secondary">
            <img src={heroProductsImg} alt="Greenfuel Signature Formulation" className="hero-product-img" />
          </div>
        </div>

      </div>
    </section>
  )
}
