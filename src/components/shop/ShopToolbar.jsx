import { useState } from 'react'
import { SlidersHorizontal, X, ChevronDown, RotateCcw, Search } from 'lucide-react'
import { SHOP_CATEGORIES, SHOP_CONCERNS, BOTANICAL_INGREDIENTS } from '../../data/shopData'

export default function ShopToolbar({
  productCount,
  selectedCategory,
  onSelectCategory,
  selectedConcern,
  onSelectConcern,
  selectedIngredient,
  onSelectIngredient,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onClearAllFilters
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const activeFilterCount =
    (selectedCategory ? 1 : 0) +
    (selectedConcern ? 1 : 0) +
    (selectedIngredient ? 1 : 0) +
    (searchQuery ? 1 : 0)

  const getCategoryName = (slug) => {
    const item = SHOP_CATEGORIES.find((c) => c.slug === slug)
    return item ? item.name : slug
  }

  const getConcernName = (slug) => {
    const item = SHOP_CONCERNS.find((c) => c.id === slug)
    return item ? item.name : slug
  }

  const getIngredientName = (slug) => {
    const item = BOTANICAL_INGREDIENTS.find((i) => i.id === slug)
    return item ? item.name : slug
  }

  return (
    <div id="shop-catalogue" className="shop-toolbar-wrapper">
      
      {/* Main Toolbar Line */}
      <div className="shop-toolbar-inner">
        
        {/* Left: Product Count & Inline Search */}
        <div className="toolbar-left">
          <span className="product-count-badge">
            Formulations <span className="count-num">({productCount})</span>
          </span>

          <div className="toolbar-search-box">
            <Search size={16} className="tbar-search-icon" />
            <input 
              type="text"
              value={searchQuery || ''}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search formulations or herbs..."
              className="tbar-search-input"
            />
            {searchQuery && (
              <button onClick={() => onSearchChange('')} className="tbar-clear-btn" aria-label="Clear search">
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Right: Filter Trigger & Sort Dropdown */}
        <div className="toolbar-right">
          
          {/* Filter Drawer Toggle Button */}
          <button 
            onClick={() => setIsDrawerOpen(true)} 
            className={`toolbar-filter-btn ${activeFilterCount > 0 ? 'has-active' : ''}`}
          >
            <SlidersHorizontal size={16} />
            <span>Filter</span>
            {activeFilterCount > 0 && <span className="active-badge">{activeFilterCount}</span>}
          </button>

          {/* Sort Dropdown */}
          <div className="toolbar-sort-select-wrap">
            <label htmlFor="shop-sort" className="sort-label">Sort by:</label>
            <select
              id="shop-sort"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <ChevronDown size={14} className="sort-chevron" />
          </div>

        </div>

      </div>

      {/* Active Filter Chips Bar (If filters applied) */}
      {activeFilterCount > 0 && (
        <div className="toolbar-active-chips-bar">
          <span className="chips-label">Active Filters:</span>
          
          {searchQuery && (
            <span className="filter-chip">
              Search: "{searchQuery}"
              <X size={14} onClick={() => onSearchChange('')} className="chip-remove" />
            </span>
          )}

          {selectedCategory && (
            <span className="filter-chip">
              Category: {getCategoryName(selectedCategory)}
              <X size={14} onClick={() => onSelectCategory(null)} className="chip-remove" />
            </span>
          )}

          {selectedConcern && (
            <span className="filter-chip">
              Concern: {getConcernName(selectedConcern)}
              <X size={14} onClick={() => onSelectConcern(null)} className="chip-remove" />
            </span>
          )}

          {selectedIngredient && (
            <span className="filter-chip">
              Ingredient: {getIngredientName(selectedIngredient)}
              <X size={14} onClick={() => onSelectIngredient(null)} className="chip-remove" />
            </span>
          )}

          <button onClick={onClearAllFilters} className="clear-all-chips-btn">
            <RotateCcw size={13} />
            <span>Clear All</span>
          </button>
        </div>
      )}

      {/* Compact Slide-over Filter Drawer */}
      {isDrawerOpen && (
        <div className="filter-drawer-backdrop" onClick={() => setIsDrawerOpen(false)}>
          <div className="filter-drawer-panel" onClick={(e) => e.stopPropagation()}>
            
            {/* Drawer Header */}
            <div className="drawer-header">
              <h3>Filter Formulations</h3>
              <button onClick={() => setIsDrawerOpen(false)} className="drawer-close-btn">
                <X size={20} />
              </button>
            </div>

            {/* Drawer Body Options */}
            <div className="drawer-body">
              
              {/* 1. Category Filter Group */}
              <div className="drawer-group">
                <h4 className="group-title">Category</h4>
                <div className="group-chips-grid">
                  <button
                    onClick={() => onSelectCategory(null)}
                    className={`drawer-chip ${!selectedCategory ? 'active' : ''}`}
                  >
                    All Categories
                  </button>
                  {SHOP_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => onSelectCategory(selectedCategory === cat.slug ? null : cat.slug)}
                      className={`drawer-chip ${selectedCategory === cat.slug ? 'active' : ''}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Concern Filter Group */}
              <div className="drawer-group">
                <h4 className="group-title">Skin & Hair Concern</h4>
                <div className="group-chips-grid">
                  <button
                    onClick={() => onSelectConcern(null)}
                    className={`drawer-chip ${!selectedConcern ? 'active' : ''}`}
                  >
                    All Concerns
                  </button>
                  {SHOP_CONCERNS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => onSelectConcern(selectedConcern === c.id ? null : c.id)}
                      className={`drawer-chip ${selectedConcern === c.id ? 'active' : ''}`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Ingredient Filter Group */}
              <div className="drawer-group">
                <h4 className="group-title">Key Herb Ingredient</h4>
                <div className="group-chips-grid">
                  <button
                    onClick={() => onSelectIngredient(null)}
                    className={`drawer-chip ${!selectedIngredient ? 'active' : ''}`}
                  >
                    All Ingredients
                  </button>
                  {BOTANICAL_INGREDIENTS.map((ing) => (
                    <button
                      key={ing.id}
                      onClick={() => onSelectIngredient(selectedIngredient === ing.id ? null : ing.id)}
                      className={`drawer-chip ${selectedIngredient === ing.id ? 'active' : ''}`}
                    >
                      🌿 {ing.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Drawer Footer Actions */}
            <div className="drawer-footer">
              <button onClick={onClearAllFilters} className="drawer-reset-btn">
                Reset All
              </button>
              <button onClick={() => setIsDrawerOpen(false)} className="drawer-apply-btn">
                Apply Filters ({productCount})
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
