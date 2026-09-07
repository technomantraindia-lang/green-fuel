import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SHOP_CATEGORIES } from '../../data/shopData'

export default function ShopCategoryGrid({ selectedCategory, onSelectCategory }) {
  // Top Row: First 5 items
  const topRow = SHOP_CATEGORIES.slice(0, 5)
  // Bottom Row: Remaining 4 items (Centered)
  const bottomRow = SHOP_CATEGORIES.slice(5, 9)

  const handleCardClick = (catSlug) => {
    if (onSelectCategory) {
      onSelectCategory(selectedCategory === catSlug ? null : catSlug)
    }
  }

  return (
    <section className="shop-category-section">
      <div className="shop-category-container">
        
        <div className="shop-category-header">
          <span className="global-section-badge">CURATED RITUALS</span>
          <h2 className="global-section-title">Shop by Category</h2>
          <p className="global-section-subtitle">
            Targeted Ayurvedic care for your daily hair, facial, and body wellness
          </p>
        </div>

        <div className="shop-category-grid-wrapper">
          {/* Top Row: 5 Cards */}
          <div className="category-row top-row-5">
            {topRow.map((cat) => {
              const isSelected = selectedCategory === cat.slug
              return (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  onClick={() => handleCardClick(cat.slug)}
                  className={`shop-cat-card ${isSelected ? 'is-selected' : ''}`}
                >
                  <div className="cat-img-box">
                    <img src={cat.image} alt={cat.name} className="cat-img" />
                    <span className="cat-explore-badge">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <div className="cat-text-bar">
                    <h3 className="cat-name">{cat.name}</h3>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Bottom Row: 4 Cards (Centered) */}
          <div className="category-row bottom-row-4">
            {bottomRow.map((cat) => {
              const isSelected = selectedCategory === cat.slug
              return (
                <Link
                  key={cat.id}
                  to={`/category/${cat.slug}`}
                  onClick={() => handleCardClick(cat.slug)}
                  className={`shop-cat-card ${isSelected ? 'is-selected' : ''}`}
                >
                  <div className="cat-img-box">
                    <img src={cat.image} alt={cat.name} className="cat-img" />
                    <span className="cat-explore-badge">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                  <div className="cat-text-bar">
                    <h3 className="cat-name">{cat.name}</h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
