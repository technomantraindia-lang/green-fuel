import logoMain from '../assets/logo-main.png'
import { Instagram, Facebook, Twitter, Youtube, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Guarantees Bar */}
      <div className="footer-trust-bar">
        <div className="trust-item">
          <Truck size={24} className="trust-icon" />
          <div>
            <h4>Free Shipping</h4>
            <p>On all orders above ₹999 across India</p>
          </div>
        </div>
        <div className="trust-item">
          <ShieldCheck size={24} className="trust-icon" />
          <div>
            <h4>100% Authentic</h4>
            <p>Directly sourced organic botanicals</p>
          </div>
        </div>
        <div className="trust-item">
          <RotateCcw size={24} className="trust-icon" />
          <div>
            <h4>Easy Returns</h4>
            <p>Hassle-free 14-day return policy</p>
          </div>
        </div>
      </div>

      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo-box">
            <img src={logoMain} alt="GreenFuel Organic" className="footer-logo-img" />
          </div>
          <p className="footer-brand-text">
            Connecting modern lifestyles with India's authentic heritage of natural wellness and beauty. 100% organic, cruelty-free, and ethically formulated.
          </p>
          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#facebook" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#twitter" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#youtube" aria-label="Youtube"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Shop Column */}
        <div className="footer-col">
          <h3 className="footer-title">Shop Collection</h3>
          <ul className="footer-links">
            <li><a href="/products">Face Serums</a></li>
            <li><a href="/products">Face Masks & Ubtans</a></li>
            <li><a href="/products">Moisturizing Creams</a></li>
            <li><a href="/products">Scalp Oils & Tonics</a></li>
            <li><a href="/products">Roll Ons & Inhalers</a></li>
          </ul>
        </div>

        {/* Explore Column */}
        <div className="footer-col">
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-links">
            <li><a href="/story">Our Story</a></li>
            <li><a href="/ingredients">Digital Herbarium</a></li>
            <li><a href="/advisor">AI Skin Advisor</a></li>
            <li><a href="/journal">Knowledge Centre</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Support & Legal Column */}
        <div className="footer-col">
          <h3 className="footer-title">Customer Care</h3>
          <ul className="footer-links">
            <li><a href="/shipping">Shipping Policy</a></li>
            <li><a href="/returns">Returns & Refunds</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GreenFuel Organics. All rights reserved.</p>
        <span className="footer-crafted">
          Crafted with <Heart size={14} fill="#a3c054" color="#a3c054" /> for Timeless Beauty
        </span>
      </div>
    </footer>
  )
}
