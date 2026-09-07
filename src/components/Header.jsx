import { useState, useEffect, useRef, useMemo } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { 
  Search, 
  User, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Leaf
} from 'lucide-react'

import { CATALOGUE_PRODUCTS, BOTANICAL_INGREDIENTS } from '../data/shopData'
import { CONCERNS_DATA } from '../data/concernsData'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'

import headerLogo from '../assets/header-logo.png'
import ayurvedicImg from '../assets/ayurvedic_ingredients_1786085356082.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { wishlistCount } = useWishlist()
  const { totalItems, openCartDrawer } = useCart()
  const [mobileAccordion, setMobileAccordion] = useState({
    shop: false,
    concern: false,
    ingredients: false,
    knowledge: false
  })

  const headerRef = useRef(null)
  const timeoutRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll listener for sticky header transform
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  // Body scroll lock on mobile drawer or search overlay
  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen, searchOpen])

  // Outside click & Escape key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
        setSearchOpen(false)
      }
    }

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Live search result computations
  const liveSearchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return { products: [], concerns: [], ingredients: [] }

    const prods = CATALOGUE_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.descriptor?.toLowerCase().includes(q)
    ).slice(0, 4)

    const concs = CONCERNS_DATA.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.shortDescription.toLowerCase().includes(q)
    ).slice(0, 3)

    const ings = BOTANICAL_INGREDIENTS.filter(i =>
      i.name.toLowerCase().includes(q) ||
      i.role.toLowerCase().includes(q)
    ).slice(0, 3)

    return { products: prods, concerns: concs, ingredients: ings }
  }, [searchQuery])

  const handleSearchSubmit = (e) => {
    e?.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
    }
  }

  // Hover handlers with slight delay to avoid flicker
  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(menuName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 180)
  }

  const toggleMobileAccordion = (key) => {
    setMobileAccordion((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  // Categories data for Shop Mega Menu
  const shopData = {
    hair: [
      { name: "Hair Mask", path: "/category/hair-mask" },
      { name: "Scalp Serum", path: "/category/scalp-serum" }
    ],
    face: [
      { name: "Face Mask", path: "/category/face-mask" },
      { name: "Ubtan", path: "/category/ubtan" },
      { name: "Face Serum", path: "/category/face-serum" },
      { name: "Face Wash", path: "/category/face-wash" },
      { name: "Moisturizing Cream", path: "/category/moisturizing-cream" }
    ],
    wellness: [
      { name: "Roll-On", path: "/category/roll-on" },
      { name: "Inhaler", path: "/category/inhaler" }
    ]
  }

  // Concern data
  const concernData = {
    skin: [
      "Skin Brightening",
      "Pigmentation",
      "Anti-Ageing",
      "Hydration",
      "Dry Skin",
      "Sensitive Skin",
      "Dark Circles"
    ],
    hair: ["Hair Fall", "Dandruff"],
    body: ["Body Odour"]
  }

  // Knowledge Centre data
  const knowledgeTopics = [
    "Ingredient Science",
    "Ayurveda",
    "Dermatology",
    "Hair Science",
    "Nutrition",
    "Lifestyle",
    "Clinical Research",
    "Doctor Interviews"
  ]

  const hasSearchMatches = 
    liveSearchResults.products.length > 0 || 
    liveSearchResults.concerns.length > 0 || 
    liveSearchResults.ingredients.length > 0

  return (
    <>
      <header
        ref={headerRef}
        className={`greenfuel-navbar ${scrolled ? 'is-scrolled' : 'is-initial'}`}
      >
        <div className="navbar-container">
          {/* LEFT: Greenfuel Logo */}
          <div className="navbar-left">
            <Link to="/" className="navbar-logo-link" aria-label="Greenfuel Homepage">
              <img src={headerLogo} alt="Greenfuel" className="navbar-logo-img" />
            </Link>
          </div>

          {/* CENTER: 5 Main Navigation Links */}
          <nav className="navbar-center-desktop" aria-label="Main Navigation">
            {/* 1. SHOP MEGA MENU */}
            <div
              className={`nav-item-wrapper ${activeDropdown === 'shop' ? 'is-active' : ''}`}
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/products"
                className="nav-item-link"
                aria-expanded={activeDropdown === 'shop'}
                aria-haspopup="true"
              >
                <span>Shop</span>
                <ChevronDown size={14} className="nav-chevron" />
              </NavLink>

              {activeDropdown === 'shop' && (
                <div
                  className="mega-menu-dropdown mega-menu-shop"
                  onMouseEnter={() => handleMouseEnter('shop')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mega-menu-inner">
                    <div className="mega-columns-grid">
                      {/* Hair Column */}
                      <div className="mega-col">
                        <span className="mega-col-heading">HAIR</span>
                        <ul className="mega-link-list">
                          {shopData.hair.map((item, idx) => (
                            <li key={idx}>
                              <Link to={item.path}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Face Column */}
                      <div className="mega-col">
                        <span className="mega-col-heading">FACE</span>
                        <ul className="mega-link-list">
                          {shopData.face.map((item, idx) => (
                            <li key={idx}>
                              <Link to={item.path}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Wellness Column */}
                      <div className="mega-col">
                        <span className="mega-col-heading">WELLNESS</span>
                        <ul className="mega-link-list">
                          {shopData.wellness.map((item, idx) => (
                            <li key={idx}>
                              <Link to={item.path}>{item.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Lifestyle Featured Panel */}
                      <div className="mega-featured-card">
                        <img src={ayurvedicImg} alt="Vedic Formulations" className="mega-card-img" />
                        <div className="mega-card-overlay">
                          <span className="mega-card-tag">RESEARCH STUDIO</span>
                          <p className="mega-card-desc">100% Organic & Cold-Pressed Botanical Elixirs</p>
                        </div>
                      </div>
                    </div>

                    <div className="mega-menu-footer">
                      <Link to="/products" className="mega-footer-link">
                        <span>View All Products</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. SHOP BY CONCERN MENU */}
            <div
              className={`nav-item-wrapper ${activeDropdown === 'concern' ? 'is-active' : ''}`}
              onMouseEnter={() => handleMouseEnter('concern')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to="/shop-by-concern"
                className={({ isActive }) => (isActive ? 'nav-item-link active' : 'nav-item-link')}
                aria-expanded={activeDropdown === 'concern'}
                aria-haspopup="true"
              >
                <span>Shop by Concern</span>
                <ChevronDown size={14} className="nav-chevron" />
              </NavLink>

              {activeDropdown === 'concern' && (
                <div
                  className="mega-menu-dropdown mega-menu-concern"
                  onMouseEnter={() => handleMouseEnter('concern')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mega-menu-inner">
                    <div className="mega-columns-grid">
                      {/* Skin Column */}
                      <div className="mega-col">
                        <span className="mega-col-heading">SKIN</span>
                        <ul className="mega-link-list">
                          {concernData.skin.map((item, idx) => (
                            <li key={idx}>
                              <Link to={`/shop-by-concern/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Hair Column */}
                      <div className="mega-col">
                        <span className="mega-col-heading">HAIR</span>
                        <ul className="mega-link-list">
                          {concernData.hair.map((item, idx) => (
                            <li key={idx}>
                              <Link to={`/shop-by-concern/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Body Column */}
                      <div className="mega-col">
                        <span className="mega-col-heading">BODY</span>
                        <ul className="mega-link-list">
                          {concernData.body.map((item, idx) => (
                            <li key={idx}>
                              <Link to={`/shop-by-concern/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-footer">
                      <Link to="/shop-by-concern" className="mega-footer-link">
                        <span>View All Concerns</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. ABOUT US */}
            <div className="nav-item-wrapper">
              <NavLink to="/story" className={({ isActive }) => (isActive ? 'nav-item-link active' : 'nav-item-link')}>
                About Us
              </NavLink>
            </div>

            {/* 4. CONTACT US */}
            <div className="nav-item-wrapper">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-item-link active' : 'nav-item-link')}>
                Contact Us
              </NavLink>
            </div>

            {/* 5. KNOWLEDGE CENTRE MENU */}
            <div
              className={`nav-item-wrapper ${activeDropdown === 'knowledge' ? 'is-active' : ''}`}
              onMouseEnter={() => handleMouseEnter('knowledge')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/journal"
                className="nav-item-link"
                aria-expanded={activeDropdown === 'knowledge'}
                aria-haspopup="true"
              >
                <span>Knowledge Centre</span>
                <ChevronDown size={14} className="nav-chevron" />
              </Link>

              {activeDropdown === 'knowledge' && (
                <div
                  className="mega-menu-dropdown mega-menu-knowledge"
                  onMouseEnter={() => handleMouseEnter('knowledge')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="mega-menu-inner">
                    <span className="mega-col-heading">RESEARCH & JOURNAL PAPERS</span>
                    <ul className="mega-link-list grid-2col">
                      {knowledgeTopics.map((topic, idx) => (
                        <li key={idx}>
                          <Link to={`/journal?topic=${encodeURIComponent(topic)}`}>{topic}</Link>
                        </li>
                      ))}
                    </ul>

                    <div className="mega-menu-footer">
                      <Link to="/journal" className="mega-footer-link">
                        <span>View Knowledge Centre</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* RIGHT SIDE ICONS: Search, Account, Wishlist, Cart */}
          <div className="navbar-right-icons">
            {/* Search Button */}
            <button
              className="navbar-icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search site"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            {/* Account Link */}
            <Link to="/account" className="navbar-icon-btn" aria-label="User Account">
              <User size={20} strokeWidth={1.5} />
            </Link>

            {/* Wishlist Link */}
            <Link to="/wishlist" className="navbar-icon-btn wishlist-icon-btn" aria-label="Wishlist">
              <Heart size={20} strokeWidth={1.5} />
              <span className="icon-badge">{wishlistCount}</span>
            </Link>

            {/* Cart Button */}
            <button onClick={openCartDrawer} className="navbar-icon-btn cart-icon-btn" aria-label="Shopping Cart">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="icon-badge">{totalItems}</span>
            </button>

            {/* Hamburger Toggle (Mobile / Tablet) */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE-IN NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
            <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-drawer-top">
                <img src={headerLogo} alt="Greenfuel" className="mobile-drawer-logo" />
                <button onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>

              <div className="mobile-drawer-nav">
                {/* 1. Shop Accordion */}
                <div className="mobile-acc-item">
                  <button className="mobile-acc-trigger" onClick={() => toggleMobileAccordion('shop')}>
                    <span>Shop</span>
                    <ChevronDown size={16} className={`acc-chevron ${mobileAccordion.shop ? 'open' : ''}`} />
                  </button>
                  {mobileAccordion.shop && (
                    <div className="mobile-acc-content">
                      <span className="acc-subheading">HAIR</span>
                      <ul className="acc-links">
                        {shopData.hair.map((item, idx) => (
                          <li key={idx}><Link to={item.path}>{item.name}</Link></li>
                        ))}
                      </ul>

                      <span className="acc-subheading">FACE</span>
                      <ul className="acc-links">
                        {shopData.face.map((item, idx) => (
                          <li key={idx}><Link to={item.path}>{item.name}</Link></li>
                        ))}
                      </ul>

                      <span className="acc-subheading">WELLNESS</span>
                      <ul className="acc-links">
                        {shopData.wellness.map((item, idx) => (
                          <li key={idx}><Link to={item.path}>{item.name}</Link></li>
                        ))}
                      </ul>

                      <Link to="/products" className="acc-view-all">View All Products →</Link>
                    </div>
                  )}
                </div>

                {/* 2. Shop by Concern Accordion */}
                <div className="mobile-acc-item">
                  <button className="mobile-acc-trigger" onClick={() => toggleMobileAccordion('concern')}>
                    <span>Shop by Concern</span>
                    <ChevronDown size={16} className={`acc-chevron ${mobileAccordion.concern ? 'open' : ''}`} />
                  </button>
                  {mobileAccordion.concern && (
                    <div className="mobile-acc-content">
                      <span className="acc-subheading">SKIN</span>
                      <ul className="acc-links">
                        {concernData.skin.map((item, idx) => (
                          <li key={idx}><Link to={`/products?concern=${encodeURIComponent(item)}`}>{item}</Link></li>
                        ))}
                      </ul>

                      <span className="acc-subheading">HAIR</span>
                      <ul className="acc-links">
                        {concernData.hair.map((item, idx) => (
                          <li key={idx}><Link to={`/products?concern=${encodeURIComponent(item)}`}>{item}</Link></li>
                        ))}
                      </ul>

                      <span className="acc-subheading">BODY</span>
                      <ul className="acc-links">
                        {concernData.body.map((item, idx) => (
                          <li key={idx}><Link to={`/products?concern=${encodeURIComponent(item)}`}>{item}</Link></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 4. About Us (Direct Link) */}
                <div className="mobile-acc-item">
                  <Link to="/story" className="mobile-direct-link">About Us</Link>
                </div>

                {/* 5. Contact Us (Direct Link) */}
                <div className="mobile-acc-item">
                  <Link to="/contact" className="mobile-direct-link">Contact Us</Link>
                </div>

                {/* 5. Knowledge Centre Accordion */}
                <div className="mobile-acc-item">
                  <button className="mobile-acc-trigger" onClick={() => toggleMobileAccordion('knowledge')}>
                    <span>Knowledge Centre</span>
                    <ChevronDown size={16} className={`acc-chevron ${mobileAccordion.knowledge ? 'open' : ''}`} />
                  </button>
                  {mobileAccordion.knowledge && (
                    <div className="mobile-acc-content">
                      <ul className="acc-links">
                        {knowledgeTopics.map((topic, idx) => (
                          <li key={idx}><Link to={`/journal?topic=${encodeURIComponent(topic)}`}>{topic}</Link></li>
                        ))}
                      </ul>
                      <Link to="/journal" className="acc-view-all">View Knowledge Centre →</Link>
                    </div>
                  )}
                </div>

                {/* Mobile Account & Wishlist Links */}
                <div className="mobile-drawer-bottom">
                  <Link to="/account" className="mobile-bottom-link">
                    <User size={18} />
                    <span>My Account</span>
                  </Link>
                  <Link to="/wishlist" className="mobile-bottom-link">
                    <Heart size={18} />
                    <span>Wishlist (0)</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ACCESSIBLE LIVE SEARCH OVERLAY / DRAWER MODAL */}
      {searchOpen && (
        <div className="search-overlay-backdrop" onClick={() => setSearchOpen(false)}>
          <div 
            className="search-modal-container" 
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent="true"
          >
            <div className="search-modal-header">
              <span className="search-modal-title">Search Greenfuel Botanicals</span>
              <button onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="search-input-wrapper">
              <Search size={22} className="search-input-icon" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products (e.g. Aura Ubtan), herbs (Saffron), or concerns..."
                className="search-main-input"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery('')} className="search-clear-input-btn">
                  <X size={16} />
                </button>
              )}
            </form>

            {/* LIVE MATCHED RESULTS / SUGGESTIONS */}
            {searchQuery.trim() ? (
              <div className="search-live-results-box">
                {hasSearchMatches ? (
                  <>
                    {/* Products Matches */}
                    {liveSearchResults.products.length > 0 && (
                      <div className="search-results-group">
                        <span className="group-title-label">FORMULATIONS & PRODUCTS</span>
                        <div className="search-results-list">
                          {liveSearchResults.products.map(prod => (
                            <Link 
                              key={prod.id} 
                              to={`/product/${prod.id}`}
                              onClick={() => setSearchOpen(false)}
                              className="search-result-item product-item"
                            >
                              <img src={prod.image} alt={prod.name} className="result-thumb-img" />
                              <div className="result-info">
                                <span className="result-cat">{prod.category}</span>
                                <h4 className="result-title">{prod.name}</h4>
                                <span className="result-price">{prod.formattedPrice}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Concerns Matches */}
                    {liveSearchResults.concerns.length > 0 && (
                      <div className="search-results-group">
                        <span className="group-title-label">SKIN & HAIR CONCERNS</span>
                        <div className="search-results-list">
                          {liveSearchResults.concerns.map(c => (
                            <Link 
                              key={c.id} 
                              to={`/shop-by-concern/${c.slug}`}
                              onClick={() => setSearchOpen(false)}
                              className="search-result-item concern-item"
                            >
                              <Sparkles size={16} className="result-icon-sparkle" />
                              <div className="result-info">
                                <h4 className="result-title">{c.name}</h4>
                                <p className="result-desc">{c.tagline}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Herb Ingredients Matches */}
                    {liveSearchResults.ingredients.length > 0 && (
                      <div className="search-results-group">
                        <span className="group-title-label">BOTANICAL HERBS</span>
                        <div className="search-results-list">
                          {liveSearchResults.ingredients.map(ing => (
                            <Link 
                              key={ing.id} 
                              to={`/shop?ingredient=${ing.id}`}
                              onClick={() => setSearchOpen(false)}
                              className="search-result-item herb-item"
                            >
                              <img src={ing.image} alt={ing.name} className="result-thumb-img round" />
                              <div className="result-info">
                                <h4 className="result-title">{ing.name}</h4>
                                <span className="result-desc">{ing.role}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <button onClick={handleSearchSubmit} className="search-all-results-btn">
                      <span>View All Results for "{searchQuery}"</span>
                      <ArrowRight size={16} />
                    </button>
                  </>
                ) : (
                  <div className="search-no-results-box">
                    <p>No formulations or herbs found matching "<strong>{searchQuery}</strong>".</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="search-quick-suggestions">
                <span className="suggestions-label">Popular Searches:</span>
                <div className="suggestions-chips">
                  {['Aura Ubtan', 'Saffron', 'Bakuchiol', 'Hair Fall', 'Anti-Ageing', 'Digital Herbarium'].map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(chip)}
                      className="suggestion-chip"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  )
}
