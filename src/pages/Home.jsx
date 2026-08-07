import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/hero-video.mp4'
import heroBg from '../assets/hero-background.png'
import heroBgTab from '../assets/hero-background-tebview.png'
import heroBgMobile from '../assets/hero-background-mobileview.png'
import aboutImg from '../assets/ayurvedic_ingredients_1786085356082.png'
import turmericImg from '../assets/ingredient_turmeric_1786086200563.png'
import sandalwoodImg from '../assets/ingredient_sandalwood_1786086211341.png'
import hibiscusImg from '../assets/ingredient_hibiscus_1786086232323.png'
import concernAntiAgingImg from '../assets/concern_anti_aging_1786089307369.png'
import concernAcneImg from '../assets/concern_acne_1786089318791.png'
import catHairMask from '../assets/cat_hair_mask_1786095666703.png'
import catFaceMask from '../assets/cat_face_mask_1786095688132.png'
import catUbtan from '../assets/cat_ubtan_1786095708136.png'
import catFaceSerum from '../assets/cat_face_serum_1786095729102.png'
import catScalpSerum from '../assets/cat_scalp_serum_1786095748967.png'
import catFaceWash from '../assets/cat_face_wash_1786095765313.png'
import catCream from '../assets/cat_cream_1786095783138.png'
import catRollOn from '../assets/cat_roll_on_1786095801340.png'
import catInhaler from '../assets/cat_inhaler_1786095820218.png'
import { Leaf, FlaskConical, Sprout, Recycle, Droplet, Sparkles, Sun, Waves, Feather, CircleDot, Wind, Heart, Star, ShoppingBag, ChevronLeft, ChevronRight, Scan, CheckCircle2, Cpu, Zap, Shield } from 'lucide-react'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedSpotlightIndex, setSelectedSpotlightIndex] = useState(0)
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)
  const sliderRef = useRef(null)

  const handleNextHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev === 0 ? 1 : 0))
  }

  const handlePrevHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev === 0 ? 1 : 0))
  }

  const categoryData = [
    { name: "Hair Mask", image: catHairMask, count: "12", desc: "Nourishing herbal hair masks infused with Bhringraj & Neem for deep hair shaft repair." },
    { name: "Face Mask", image: catFaceMask, count: "18", desc: "Purifying clay and golden turmeric masks formulated to detoxify and revive radiant glow." },
    { name: "Ubtan", image: catUbtan, count: "14", desc: "Traditional sun-dried herbal ubtan scrubs enriched with saffron, sandalwood, and raw lentils." },
    { name: "Face Serum", image: catFaceSerum, count: "24", desc: "Concentrated botanical oil elixirs for deep cellular hydration and collagen boost." },
    { name: "Scalp Serum", image: catScalpSerum, count: "10", desc: "Targeted scalp tonics to stimulate hair follicles, control dandruff, and boost growth." },
    { name: "Face Wash", image: catFaceWash, count: "16", desc: "Sulfate-free botanical cleanser gels that gently purify without stripping natural oils." },
    { name: "Moisturizing Cream", image: catCream, count: "20", desc: "Ultra-hydrating lotus & ghee whips that restore lipid barriers for 24-hour softness." },
    { name: "Roll On", image: catRollOn, count: "8", desc: "Therapeutic essential oil roll-ons for instant stress relief, headache ease, and sleep." },
    { name: "Inhaler", image: catInhaler, count: "6", desc: "Pure aromatic herbal inhalers designed for respiratory clarity and dosha balance." }
  ]

  const categorySliderRef = useRef(null)

  const handleCategoryScroll = (direction) => {
    if (categorySliderRef.current) {
      const scrollAmount = direction === 'left' ? -categorySliderRef.current.clientWidth : categorySliderRef.current.clientWidth
      categorySliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const products = [
    {
      id: 1,
      name: "Golden Turmeric Glow Serum",
      category: "Serums & Oils",
      price: "₹1,299",
      rating: "4.9 (124)",
      badge: "Bestseller",
      image: turmericImg
    },
    {
      id: 2,
      name: "Sandalwood Soothing Ubtan",
      category: "Masks & Ubtans",
      price: "₹899",
      rating: "4.8 (98)",
      badge: "New",
      image: sandalwoodImg
    },
    {
      id: 3,
      name: "Hibiscus Youth Renewal Cream",
      category: "Creams",
      price: "₹1,499",
      rating: "5.0 (156)",
      badge: null,
      image: hibiscusImg
    },
    {
      id: 4,
      name: "Ashwagandha Restorative Elixir",
      category: "Serums & Oils",
      price: "₹1,699",
      rating: "4.9 (210)",
      badge: "Bestseller",
      image: aboutImg
    },
    {
      id: 5,
      name: "Neem & Tea Tree Spot Serum",
      category: "Serums & Oils",
      price: "₹1,199",
      rating: "4.7 (84)",
      badge: "Trending",
      image: concernAcneImg
    },
    {
      id: 6,
      name: "Kumkumadi Radiance Face Mask",
      category: "Masks & Ubtans",
      price: "₹1,350",
      rating: "4.9 (142)",
      badge: "Award Winner",
      image: concernAntiAgingImg
    },
    {
      id: 7,
      name: "Brahmi & Amla Scalp Fuel",
      category: "Serums & Oils",
      price: "₹999",
      rating: "4.8 (115)",
      badge: "New",
      image: turmericImg
    },
    {
      id: 8,
      name: "Rose & Saffron Hydrating Cream",
      category: "Creams",
      price: "₹1,749",
      rating: "4.9 (178)",
      badge: "Popular",
      image: hibiscusImg
    }
  ]

  const categories = ['All', 'Serums & Oils', 'Masks & Ubtans', 'Creams']

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="home-container">
      {/* Desktop Side-Scrolling Hero Carousel */}
      <div className="hero-carousel-wrapper desktop-only">
        <div 
          className="hero-carousel-track"
          style={{ transform: `translateX(-${activeHeroSlide * 100}%)` }}
        >
          {/* Banner 1: Video */}
          <div className="hero-slide">
            <section className="hero-section hero-banner-video">
              <div className="hero-bg-container">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="hero-bg hero-video-element"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
              </div>
              <div className="hero-overlay"></div>
              
              <div className="hero-content">
                <motion.h1 
                  className="hero-title"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Rediscover<br/>Timeless Skin
                </motion.h1>
                
                <motion.p 
                  className="hero-subtitle"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  Rooted in Tradition. Refined by Science. Inspired by Nature.
                </motion.p>
                
                <motion.button 
                  className="cta-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  EXPLORE OUR WORLD
                </motion.button>
              </div>
            </section>
          </div>

          {/* Banner 2: Image */}
          <div className="hero-slide">
            <section className="hero-section hero-banner-image">
              <div className="hero-bg-container">
                <img 
                  src={heroBg}
                  alt="GreenFuel Organic Skincare"
                  className="hero-bg"
                />
              </div>
              <div className="hero-overlay"></div>
              
              <div className="hero-content">
                <motion.h1 className="hero-title">
                  Pure Ayurvedic<br/>Radiance
                </motion.h1>
                
                <motion.p className="hero-subtitle">
                  Sustainably Harvested. Formulated for Holistic Wellness.
                </motion.p>
                
                <motion.button className="cta-button">
                  SHOP COLLECTION
                </motion.button>
              </div>
            </section>
          </div>
        </div>

        {/* Hero Navigation Controls */}
        <button 
          className="hero-arrow hero-arrow-left" 
          onClick={handlePrevHeroSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={26} />
        </button>

        <button 
          className="hero-arrow hero-arrow-right" 
          onClick={handleNextHeroSlide}
          aria-label="Next Slide"
        >
          <ChevronRight size={26} />
        </button>

        {/* Hero Dots Indicators */}
        <div className="hero-dots">
          <button 
            className={`hero-dot ${activeHeroSlide === 0 ? 'active' : ''}`}
            onClick={() => setActiveHeroSlide(0)}
          >
            <span>01</span>
          </button>
          <button 
            className={`hero-dot ${activeHeroSlide === 1 ? 'active' : ''}`}
            onClick={() => setActiveHeroSlide(1)}
          >
            <span>02</span>
          </button>
        </div>
      </div>

      {/* Mobile Hero Banner: Mobile Image Only */}
      <section className="hero-section hero-banner-mobile mobile-only">
        <div className="hero-bg-container">
          <motion.img 
            src={heroBgMobile}
            alt="GreenFuel Organic Skincare Mobile"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="hero-bg"
          />
        </div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Rediscover<br/>Timeless Skin
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Rooted in Tradition. Refined by Science.
          </motion.p>
          
          <motion.button 
            className="cta-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            EXPLORE RITUALS
          </motion.button>
        </div>
      </section>
      
      {/* Features Banner */}
      <div className="features-banner">
        <div className="features-container">
          <div className="feature-item">
            <Leaf size={24} strokeWidth={1.5} />
            <span>Ayurvedic Wisdom</span>
          </div>
          <div className="feature-divider"></div>
          <div className="feature-item">
            <FlaskConical size={24} strokeWidth={1.5} />
            <span>Modern Science</span>
          </div>
          <div className="feature-divider"></div>
          <div className="feature-item">
            <Sprout size={24} strokeWidth={1.5} />
            <span>Pure Ingredients</span>
          </div>
          <div className="feature-divider"></div>
          <div className="feature-item">
            <Recycle size={24} strokeWidth={1.5} />
            <span>Ethical & Sustainable</span>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <section className="about-section">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <img 
              src={aboutImg} 
              alt="Ayurvedic Ingredients" 
              className="about-image" 
            />
          </motion.div>
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h4 className="about-eyebrow">THE GREENFUEL PHILOSOPHY</h4>
            <h2 className="about-title">Where Tradition Becomes Tomorrow.</h2>
            <p className="about-text">
              Long before laboratories created thousands of cosmetic products, India had already mastered the science of natural beauty. 
            </p>
            <p className="about-text">
              Greenfuel was born with a larger purpose—to reconnect modern lifestyles with India's authentic heritage of natural wellness and beauty. If our ancestors trusted nature for centuries, why should modern consumers have to choose between tradition and science?
            </p>
            <blockquote className="about-quote">
              "We do not believe that tradition belongs in museums. We believe it belongs in everyday life."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Premium Horizontal Shop by Category Section */}
      <section className="categories-section horizontal-categories-section">
        <div className="categories-header-flex">
          <div>
            <motion.h4 
              className="section-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              DISCOVER YOUR RITUAL
            </motion.h4>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Shop by Category
            </motion.h2>
          </div>

          <div className="slider-arrows category-arrows">
            <button className="slider-arrow" onClick={() => handleCategoryScroll('left')} aria-label="Previous categories">
              <ChevronLeft size={22} />
            </button>
            <button className="slider-arrow" onClick={() => handleCategoryScroll('right')} aria-label="Next categories">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <motion.div 
          className="horizontal-categories-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="horizontal-categories-slider" ref={categorySliderRef}>
            {categoryData.map((cat, idx) => (
              <motion.div 
                className="horizontal-cat-card"
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="horizontal-cat-img-box">
                  <img src={cat.image} alt={cat.name} className="horizontal-cat-img" />
                  <div className="horizontal-cat-overlay"></div>
                </div>
                <h3 className="horizontal-cat-name">{cat.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Ingredients Journey Section */}
      <section className="ingredients-section">
        <div className="ingredients-header">
          <motion.h4 
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            PURITY FROM SEED TO SKIN
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The Ingredient Journey
          </motion.h2>
        </div>

        <div className="ingredients-grid">
          {/* Ingredient 1 */}
          <motion.div 
            className="ingredient-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ingredient-image-container">
              <img 
                src={turmericImg} 
                alt="Turmeric (Haldi)" 
                className="ingredient-image" 
              />
            </div>
            <div className="ingredient-info">
              <h3 className="ingredient-name">Turmeric <span>(Haldi)</span></h3>
              <p className="ingredient-benefit">Brightening & Purifying</p>
            </div>
          </motion.div>

          {/* Ingredient 2 */}
          <motion.div 
            className="ingredient-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="ingredient-image-container">
              <img 
                src={sandalwoodImg} 
                alt="Sandalwood (Chandan)" 
                className="ingredient-image" 
              />
            </div>
            <div className="ingredient-info">
              <h3 className="ingredient-name">Sandalwood <span>(Chandan)</span></h3>
              <p className="ingredient-benefit">Cooling & Soothing</p>
            </div>
          </motion.div>

          {/* Ingredient 3 */}
          <motion.div 
            className="ingredient-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="ingredient-image-container">
              <img 
                src={hibiscusImg} 
                alt="Hibiscus" 
                className="ingredient-image" 
              />
            </div>
            <div className="ingredient-info">
              <h3 className="ingredient-name">Hibiscus</h3>
              <p className="ingredient-benefit">Nourishing & Rejuvenating</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shop by Concern Section */}
      <section className="concerns-section">
        <div className="concerns-header">
          <motion.h4 
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            TAILORED TO YOUR SKIN
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Shop by Concern
          </motion.h2>
        </div>

        <div className="concerns-grid">
          {/* Concern 1 */}
          <motion.div 
            className="concern-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={concernAntiAgingImg} 
              alt="Anti-Aging" 
              className="concern-image" 
            />
            <div className="concern-overlay">
              <h3 className="concern-title">Anti-Aging & Firmness</h3>
              <button className="concern-button">Discover Routine</button>
            </div>
          </motion.div>

          {/* Concern 2 */}
          <motion.div 
            className="concern-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img 
              src={concernAcneImg} 
              alt="Acne & Blemishes" 
              className="concern-image" 
            />
            <div className="concern-overlay">
              <h3 className="concern-title">Acne & Blemishes</h3>
              <button className="concern-button">Discover Routine</button>
            </div>
          </motion.div>

          {/* Concern 3 */}
          <motion.div 
            className="concern-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={hibiscusImg} 
              alt="Dryness & Hydration" 
              className="concern-image" 
            />
            <div className="concern-overlay">
              <h3 className="concern-title">Dryness & Hydration</h3>
              <button className="concern-button">Discover Routine</button>
            </div>
          </motion.div>

          {/* Concern 4 */}
          <motion.div 
            className="concern-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img 
              src={turmericImg} 
              alt="Dullness & Glow" 
              className="concern-image" 
            />
            <div className="concern-overlay">
              <h3 className="concern-title">Dullness & Glow</h3>
              <button className="concern-button">Discover Routine</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Premium Light AI Skin Advisor Section */}
      <section className="advisor-section light-advisor-section">
        <motion.div 
          className="advisor-container light-advisor-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="advisor-split-grid">
            {/* Left Side: Minimal Steps Card */}
            <motion.div 
              className="advisor-light-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="light-card-header">
                <span className="light-tag">2-Min Consultation</span>
                <span className="light-badge">AI Powered</span>
              </div>

              <div className="light-steps-list">
                <div className="light-step-item">
                  <span className="step-num">01</span>
                  <div>
                    <h4>Dosha & Skin Profile</h4>
                    <p>Identify your unique Vata, Pitta, or Kapha constitution</p>
                  </div>
                </div>

                <div className="light-step-item active">
                  <span className="step-num">02</span>
                  <div>
                    <h4>Botanical Ratio Matching</h4>
                    <p>Precision selection of pure botanical active extracts</p>
                  </div>
                </div>

                <div className="light-step-item">
                  <span className="step-num">03</span>
                  <div>
                    <h4>Bespoke Daily Ritual</h4>
                    <p>Get your tailored morning & evening skincare regime</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Clean Minimal Copy */}
            <div className="advisor-light-content">
              <span className="section-eyebrow dark-eyebrow">
                INNOVATION MEETS TRADITION
              </span>
              
              <h2 className="section-title dark-title">
                Your Personal AI Skin Advisor
              </h2>
              
              <p className="advisor-light-text">
                Discover your perfect Ayurvedic routine in under 2 minutes. Our intelligent engine pairs 5,000-year-old Vedic wisdom with modern skin science to curate a custom journey for your skin.
              </p>

              <div className="advisor-light-features">
                <span>✓ Free Consultation</span>
                <span>✓ 100% Personalised</span>
                <span>✓ Certified Organic</span>
              </div>

              <button className="advisor-light-btn">
                <span>START YOUR ANALYSIS</span>
                <Sparkles size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Routine Storytelling Section */}
      <section className="routine-section">
        <div className="routine-header">
          <motion.h4 
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A ROUTINE ROOTED IN TRADITION
          </motion.h4>
          <motion.h2 
            className="section-title dark-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            The GreenFuel Ritual
          </motion.h2>
        </div>

        <div className="routine-container">
          {/* Step 1 */}
          <div className="routine-step">
            <motion.div 
              className="routine-image-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={concernAcneImg} alt="Purify - Step 1" className="routine-image" />
            </motion.div>
            <motion.div 
              className="routine-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="routine-number">01</span>
              <h3 className="routine-title">Purify & Cleanse</h3>
              <p className="routine-text">
                Begin your ritual by washing away the impurities of the day. Our natural cleansers and Ubtans gently exfoliate while preserving your skin's natural moisture barrier, preparing it for deeper nourishment.
              </p>
              <button className="routine-link">Explore Cleansers</button>
            </motion.div>
          </div>

          {/* Step 2 */}
          <div className="routine-step reverse">
            <motion.div 
              className="routine-image-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={concernAntiAgingImg} alt="Nourish - Step 2" className="routine-image" />
            </motion.div>
            <motion.div 
              className="routine-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="routine-number">02</span>
              <h3 className="routine-title">Deeply Nourish</h3>
              <p className="routine-text">
                Deliver potent botanical extracts directly to the cellular level. Our active serums are formulated to target specific concerns, from dullness to fine lines, offering your skin a drink of pure vitality.
              </p>
              <button className="routine-link">Explore Serums</button>
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className="routine-step">
            <motion.div 
              className="routine-image-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={aboutImg} alt="Protect - Step 3" className="routine-image" />
            </motion.div>
            <motion.div 
              className="routine-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="routine-number">03</span>
              <h3 className="routine-title">Seal & Protect</h3>
              <p className="routine-text">
                Lock in hydration and shield your skin from environmental stressors. Our luxurious moisturizing creams create a protective barrier, leaving your skin soft, supple, and glowing all day long.
              </p>
              <button className="routine-link">Explore Moisturizers</button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Featured Products Section with 3D Slider */}
      <section className="products-section">
        <div className="products-header">
          <motion.h4 
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            CURATED BESTSELLERS
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured Essentials
          </motion.h2>

          {/* Category Filter Tabs & Navigation Controls */}
          <div className="products-controls">
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="slider-arrows">
              <button className="slider-arrow" onClick={() => handleScroll('left')} aria-label="Scroll left">
                <ChevronLeft size={20} />
              </button>
              <button className="slider-arrow" onClick={() => handleScroll('right')} aria-label="Scroll right">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Crazy Interactive Carousel Slider */}
        <div className="products-slider-wrapper">
          <div className="products-slider" ref={sliderRef}>
            {filteredProducts.map((product, idx) => (
              <motion.div 
                key={product.id}
                className="product-card crazy-card"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ 
                  scale: 1.04, 
                  rotateY: -4, 
                  rotateX: 4, 
                  z: 30,
                  transition: { duration: 0.3 } 
                }}
              >
                <div className="product-image-wrapper">
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <img src={product.image} alt={product.name} className="product-image" />
                  <button className="product-quick-add">
                    <ShoppingBag size={18} /> Quick Add
                  </button>
                </div>
                <div className="product-details">
                  <div className="product-meta">
                    <span className="product-category">{product.category}</span>
                    <span className="product-rating"><Star size={14} fill="#a3c054" color="#a3c054" /> {product.rating}</span>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Herbarium Section */}
      <section className="herbarium-section">
        <div className="herbarium-header">
          <motion.h4 
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            NATURE'S APOTHECARY
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Digital Herbarium
          </motion.h2>
          <motion.p 
            className="herbarium-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore the powerful botanicals at the heart of our formulations.
          </motion.p>
        </div>

        <div className="herbarium-grid">
          {/* Card 1 */}
          <motion.div 
            className="herbarium-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={turmericImg} alt="Turmeric" className="herbarium-image" />
            <div className="herbarium-overlay">
              <h3 className="herbarium-name">Turmeric</h3>
              <p className="herbarium-latin">Curcuma longa</p>
              <div className="herbarium-divider"></div>
              <p className="herbarium-desc">Renowned for its powerful anti-inflammatory and brightening properties, Turmeric restores your natural glow.</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="herbarium-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={sandalwoodImg} alt="Sandalwood" className="herbarium-image" />
            <div className="herbarium-overlay">
              <h3 className="herbarium-name">Sandalwood</h3>
              <p className="herbarium-latin">Santalum album</p>
              <div className="herbarium-divider"></div>
              <p className="herbarium-desc">A sacred wood that cools, soothes, and helps clear blemishes while providing a deeply grounding aroma.</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="herbarium-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={hibiscusImg} alt="Hibiscus" className="herbarium-image" />
            <div className="herbarium-overlay">
              <h3 className="herbarium-name">Hibiscus</h3>
              <p className="herbarium-latin">Hibiscus rosa-sinensis</p>
              <div className="herbarium-divider"></div>
              <p className="herbarium-desc">Known as the 'Botox plant', it is rich in AHAs and antioxidants that naturally firm and tone the skin.</p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            className="herbarium-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img src={aboutImg} alt="Ashwagandha" className="herbarium-image" />
            <div className="herbarium-overlay">
              <h3 className="herbarium-name">Ashwagandha</h3>
              <p className="herbarium-latin">Withania somnifera</p>
              <div className="herbarium-divider"></div>
              <p className="herbarium-desc">An adaptogenic powerhouse that helps skin resist environmental stress and prevents premature aging.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Knowledge Centre Section */}
      <section className="knowledge-section">
        <div className="knowledge-header">
          <motion.h4 
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            THE JOURNAL
          </motion.h4>
          <motion.h2 
            className="section-title dark-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Knowledge Centre
          </motion.h2>
        </div>

        <div className="knowledge-grid">
          {/* Article 1 */}
          <motion.div 
            className="article-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="article-image-wrapper">
              <img src={aboutImg} alt="Ayurvedic Skincare Secrets" className="article-image" />
            </div>
            <div className="article-content">
              <span className="article-category">Ayurvedic Wisdom</span>
              <h3 className="article-title">The Ancient Science of Face Mapping</h3>
              <p className="article-excerpt">Discover what your blemishes are trying to tell you about your internal health using traditional Ayurvedic face mapping techniques.</p>
              <button className="article-link">Read Article <span className="arrow">→</span></button>
            </div>
          </motion.div>

          {/* Article 2 */}
          <motion.div 
            className="article-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="article-image-wrapper">
              <img src={turmericImg} alt="Ingredient Spotlight" className="article-image" />
            </div>
            <div className="article-content">
              <span className="article-category">Ingredient Spotlight</span>
              <h3 className="article-title">Why Turmeric is the Ultimate Brightener</h3>
              <p className="article-excerpt">Uncover the scientific reasons why this golden spice has been the cornerstone of Indian bridal skincare for thousands of years.</p>
              <button className="article-link">Read Article <span className="arrow">→</span></button>
            </div>
          </motion.div>

          {/* Article 3 */}
          <motion.div 
            className="article-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="article-image-wrapper">
              <img src={concernAntiAgingImg} alt="Wellness Rituals" className="article-image" />
            </div>
            <div className="article-content">
              <span className="article-category">Wellness Rituals</span>
              <h3 className="article-title">A 5-Minute Morning Lymphatic Massage</h3>
              <p className="article-excerpt">Learn how to instantly de-puff and sculpt your face each morning using just your hands and our favorite facial oil.</p>
              <button className="article-link">Read Article <span className="arrow">→</span></button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Experience Section */}
      <section className="experience-section">
        <div className="experience-container">
          <motion.div 
            className="experience-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="section-eyebrow">ETHICAL & SUSTAINABLE</h4>
            <h2 className="section-title dark-text">The GreenFuel Experience</h2>
            <p className="experience-text">
              We believe that luxury should not come at the cost of the Earth. From our heavy, fully recyclable glass bottles to our biodegradable shipping materials, every touchpoint is designed to respect the environment while providing you with an unparalleled unboxing experience.
            </p>
            
            <div className="experience-features">
              <div className="experience-feature-item">
                <Recycle className="feature-icon" size={24} />
                <span>100% Recyclable Glass</span>
              </div>
              <div className="experience-feature-item">
                <Leaf className="feature-icon" size={24} />
                <span>Ethically Sourced Botanicals</span>
              </div>
              <div className="experience-feature-item">
                <Heart className="feature-icon" size={24} />
                <span>Cruelty-Free & Vegan</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="experience-image-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={aboutImg} alt="Premium Sustainable Packaging" className="experience-image" />
          </motion.div>
        </div>
      </section>

      {/* GreenFuel Circle Section */}
      <section className="circle-section">
        <div className="circle-container">
          <motion.h4 
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            COMMUNITY & REWARDS
          </motion.h4>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Join the GreenFuel Circle
          </motion.h2>
          <motion.p 
            className="circle-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Subscribe to receive 15% off your first order, exclusive access to new releases, and weekly Ayurvedic skincare rituals delivered straight to your inbox.
          </motion.p>
          
          <motion.form 
            className="circle-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email address" className="circle-input" required />
            <button type="submit" className="circle-button">Subscribe</button>
          </motion.form>
        </div>
      </section>

    </div>
  )
}
