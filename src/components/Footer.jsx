import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logoMain from '../assets/logo-main.png'
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Sparkles,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const columnsRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return

    const ctx = gsap.context(() => {
      if (columnsRef.current && columnsRef.current.children && columnsRef.current.children.length > 0) {
        gsap.fromTo(
          columnsRef.current.children,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%'
            }
          }
        )
      }
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="footer-deep-green">
      {/* Trust & Guarantee Bar */}
      <div className="footer-trust-bar">
        <div className="trust-container">
          <div className="trust-item">
            <Truck size={22} className="trust-icon" />
            <div>
              <h4 className="trust-title">Free Express Shipping</h4>
              <p className="trust-desc">On all orders above ₹999 across India</p>
            </div>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <ShieldCheck size={22} className="trust-icon" />
            <div>
              <h4 className="trust-title">100% Authentic Vedic</h4>
              <p className="trust-desc">Directly sourced organic botanicals</p>
            </div>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <RotateCcw size={22} className="trust-icon" />
            <div>
              <h4 className="trust-title">Easy 14-Day Returns</h4>
              <p className="trust-desc">Hassle-free ritual satisfaction guarantee</p>
            </div>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <Sparkles size={22} className="trust-icon" />
            <div>
              <h4 className="trust-title">Zero Preservatives</h4>
              <p className="trust-desc">Freshly batched dry powders & elixirs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main-container">
        <div ref={columnsRef} className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link">
              <img src={logoMain} alt="GreenFuel Organic" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline-quote">
              “Connecting modern lifestyles with India's authentic heritage of natural wellness and beauty.”
            </p>
            <p className="footer-address-info">
              <MapPin size={14} className="icon-contact" /> Western Ghats Research Lab & Studio, India
            </p>
            <p className="footer-address-info">
              <Mail size={14} className="icon-contact" /> care@greenfuel.com
            </p>
            <p className="footer-address-info">
              <Phone size={14} className="icon-contact" /> +91 (800) 473-3638
            </p>
            
            <div className="footer-social-row">
              <a href="#instagram" aria-label="Instagram" className="social-btn"><Instagram size={18} /></a>
              <a href="#facebook" aria-label="Facebook" className="social-btn"><Facebook size={18} /></a>
              <a href="#twitter" aria-label="Twitter" className="social-btn"><Twitter size={18} /></a>
              <a href="#youtube" aria-label="Youtube" className="social-btn"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Shop Categories Column */}
          <div className="footer-col">
            <h3 className="footer-col-title">Shop Rituals</h3>
            <ul className="footer-nav-list">
              <li><Link to="/category/hair-mask">Hair Mask</Link></li>
              <li><Link to="/category/face-mask">Face Mask</Link></li>
              <li><Link to="/category/ubtan">Aura Ubtan</Link></li>
              <li><Link to="/category/face-serum">Face Serum</Link></li>
              <li><Link to="/category/scalp-serum">Scalp Serum</Link></li>
              <li><Link to="/category/face-wash">Face Wash</Link></li>
              <li><Link to="/category/moisturizing-cream">Moisturizing Cream</Link></li>
              <li><Link to="/category/roll-on">Roll-On</Link></li>
              <li><Link to="/category/inhaler">Inhaler</Link></li>
            </ul>
          </div>


          {/* Customer Care Column */}
          <div className="footer-col">
            <h3 className="footer-col-title">Customer Care</h3>
            <ul className="footer-nav-list">
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/wishlist">My Favorites</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div className="footer-col">
            <h3 className="footer-col-title">Legal & Trust</h3>
            <ul className="footer-nav-list">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>

            <div className="circle-mini-cta">
              <span className="mini-cta-title">Join The Circle</span>
              <p className="mini-cta-desc">15% off your first ritual order</p>
              <a href="#circle" className="mini-cta-link">
                <span>Subscribe</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} Greenfuel Wellness Organics Pvt Ltd. All rights reserved.
          </p>

          <p className="developer-credit-text">
            Designed &amp; Developed by{' '}
            <a 
              href="https://technomantra.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="technomantra-highlight"
            >
              Technomantra
            </a>
          </p>

          <div className="legal-mini-links">
            <Link to="/privacy">Privacy</Link>
            <span>•</span>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
