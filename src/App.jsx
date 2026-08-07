import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import SmoothScroll from './components/SmoothScroll'
import Footer from './components/Footer'
import { User, ShoppingBag, Menu, X } from 'lucide-react'
import headerLogo from './assets/header-logo.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="logo-container">
          <img src={headerLogo} alt="GreenFuel Logo" className="logo-img" />
        </div>
        
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>

        {/* Blurred background overlay when mobile menu is open */}
        {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)}></div>}

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <div className="drawer-header">
            <span className="drawer-brand">GreenFuel</span>
            <span className="drawer-tagline">Ayurvedic Wellness</span>
            <div className="drawer-divider"></div>
          </div>

          <div className="drawer-links">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/story" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Our Story</NavLink>
            <NavLink to="/products" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Collection</NavLink>
            <NavLink to="/ingredients" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Ingredients</NavLink>
            <NavLink to="/journal" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Journal</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
          </div>

          <div className="drawer-footer">
            <span className="drawer-footer-title">Join The Circle</span>
            <p>15% off your first ritual order</p>
            <div className="drawer-contact">support@greenfuel.com</div>
          </div>
        </nav>
        
        <div className="nav-icons">
          <User size={22} strokeWidth={1.5} />
          <ShoppingBag size={22} strokeWidth={1.5} />
        </div>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
