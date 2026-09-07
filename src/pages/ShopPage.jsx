import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ShopHero from '../components/shop/ShopHero'
import ShopCategoryGrid from '../components/shop/ShopCategoryGrid'
import ShopToolbar from '../components/shop/ShopToolbar'
import ProductCard from '../components/shop/ProductCard'
import ConcernDiscovery from '../components/shop/ConcernDiscovery'
import BotanicalIntelligence from '../components/shop/BotanicalIntelligence'
import GreenfuelPromise from '../components/shop/GreenfuelPromise'
import { CATALOGUE_PRODUCTS } from '../data/shopData'
import { FilterX } from 'lucide-react'

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  // Filter States initialized from URL params if present
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || null)
  const [selectedConcern, setSelectedConcern] = useState(searchParams.get('concern') || null)
  const [selectedIngredient, setSelectedIngredient] = useState(searchParams.get('ingredient') || null)
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || searchParams.get('q') || '')
  const [sortBy, setSortBy] = useState('featured')

  // Wishlist State
  const [wishlist, setWishlist] = useState([])

  // Synchronize state when URL query params change (e.g. from Header search bar)
  useEffect(() => {
    const qParam = searchParams.get('search') || searchParams.get('q') || ''
    const catParam = searchParams.get('category') || null
    const concParam = searchParams.get('concern') || null
    const ingParam = searchParams.get('ingredient') || null

    if (qParam !== searchQuery) setSearchQuery(qParam)
    if (catParam !== selectedCategory) setSelectedCategory(catParam)
    if (concParam !== selectedConcern) setSelectedConcern(concParam)
    if (ingParam !== selectedIngredient) setSelectedIngredient(ingParam)
  }, [searchParams])

  // Synchronize URL parameters when filters change
  useEffect(() => {
    const params = {}
    if (selectedCategory) params.category = selectedCategory
    if (selectedConcern) params.concern = selectedConcern
    if (selectedIngredient) params.ingredient = selectedIngredient
    if (searchQuery.trim()) params.search = searchQuery.trim()
    setSearchParams(params, { replace: true })
  }, [selectedCategory, selectedConcern, selectedIngredient, searchQuery, setSearchParams])

  // Handle wishlisting
  const handleToggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    )
  }

  // Clear All Filters
  const handleClearAllFilters = () => {
    setSelectedCategory(null)
    setSelectedConcern(null)
    setSelectedIngredient(null)
    setSearchQuery('')
  }

  // Filter & Sort Catalogue Products
  const filteredProducts = useMemo(() => {
    let result = [...CATALOGUE_PRODUCTS]

    // Search Query Filter
    const q = searchQuery.trim().toLowerCase()
    if (q) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.descriptor?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.concerns?.some(c => c.toLowerCase().includes(q)) ||
        p.ingredients?.some(i => i.toLowerCase().includes(q))
      )
    }

    // Filter by Category
    if (selectedCategory) {
      result = result.filter((p) => p.categorySlug === selectedCategory)
    }

    // Filter by Concern
    if (selectedConcern) {
      result = result.filter((p) => p.concerns.includes(selectedConcern))
    }

    // Filter by Ingredient
    if (selectedIngredient) {
      result = result.filter((p) => p.ingredients.includes(selectedIngredient))
    }

    // Sort Products
    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    } else if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [selectedCategory, selectedConcern, selectedIngredient, searchQuery, sortBy])

  return (
    <div className="shop-page-wrapper">
      
      {/* 1. COMPACT SHOP HERO */}
      <ShopHero />

      {/* 2. SHOP BY CATEGORY (9 Confirmed Categories Grid) */}
      <ShopCategoryGrid
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 3. PRODUCT CATALOGUE CONTAINER */}
      <section className="shop-catalogue-section">
        <div className="shop-catalogue-container">
          
          {/* Toolbar & Filter Drawer */}
          <ShopToolbar
            productCount={filteredProducts.length}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedConcern={selectedConcern}
            onSelectConcern={setSelectedConcern}
            selectedIngredient={selectedIngredient}
            onSelectIngredient={setSelectedIngredient}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onClearAllFilters={handleClearAllFilters}
          />

          {/* 4. MAIN PRODUCT GRID (3x3 Layout) */}
          {filteredProducts.length > 0 ? (
            <div className="spec-product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={handleToggleWishlist}
                />
              ))}
            </div>
          ) : (
            <div className="shop-empty-state">
              <FilterX size={44} className="empty-icon" />
              <h3>No Formulations Found</h3>
              <p>No formulations matched your search filter criteria.</p>
              <button onClick={handleClearAllFilters} className="empty-clear-btn">
                Clear All Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 5. SHOP BY CONCERN EDITORIAL DISCOVERY */}
      <ConcernDiscovery
        selectedConcern={selectedConcern}
        onSelectConcern={setSelectedConcern}
      />

      {/* 6. BOTANICAL INTELLIGENCE STRIP */}
      <BotanicalIntelligence
        selectedIngredient={selectedIngredient}
        onSelectIngredient={setSelectedIngredient}
      />

      {/* 7. GREENFUEL PROMISE TRUST SECTION */}
      <GreenfuelPromise />

    </div>
  )
}
