import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetailPage from './pages/ProductDetailPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage'
import ShopByConcernPage from './pages/ShopByConcernPage'
import CategoryPage from './pages/CategoryPage'
import WishlistPage from './pages/WishlistPage'
import CartPage from './pages/CartPage'
import CartDrawer from './components/shop/CartDrawer'
import LoadingScreen from './components/LoadingScreen'
import SmoothScroll from './components/SmoothScroll'
import Footer from './components/Footer'
import { WishlistProvider } from './context/WishlistContext'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        {/* Initial Site Reload Splash Screen */}
        <LoadingScreen />

        <SmoothScroll>
          <div className="app-main-layout">
            {/* Premium Responsive Navbar */}
            <Header />

            <main className="main-content-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/shop" element={<Products />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/category/:categorySlug" element={<CategoryPage />} />
                <Route path="/shop-by-concern" element={<ShopByConcernPage />} />
                <Route path="/shop-by-concern/:concernSlug" element={<ShopByConcernPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/shop/:id" element={<ProductDetailPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/story" element={<AboutUsPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/contact-us" element={<ContactPage />} />
              </Routes>
            </main>

            {/* Slide-in Cart Drawer Overlay */}
            <CartDrawer />

            {/* Global Footer */}
            <Footer />
          </div>
        </SmoothScroll>
      </CartProvider>
    </WishlistProvider>
  )
}

export default App
