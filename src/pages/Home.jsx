import { motion } from 'framer-motion'
import heroVideo from '../assets/hero-video.mp4'
import aboutImg from '../assets/ayurvedic_ingredients_1786085356082.png'
import turmericImg from '../assets/ingredient_turmeric_1786086200563.png'
import sandalwoodImg from '../assets/ingredient_sandalwood_1786086211341.png'
import hibiscusImg from '../assets/ingredient_hibiscus_1786086232323.png'
import concernAntiAgingImg from '../assets/concern_anti_aging_1786089307369.png'
import concernAcneImg from '../assets/concern_acne_1786089318791.png'
import { Leaf, FlaskConical, Sprout, Recycle, Droplet, Sparkles, Sun, Waves, Feather, CircleDot, Wind, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <motion.video 
          autoPlay 
          loop 
          muted 
          playsInline
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="hero-bg"
        >
          <source src={heroVideo} type="video/mp4" />
        </motion.video>
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

      {/* AI Skin Advisor Section */}
      <section className="advisor-section">
        <motion.div 
          className="advisor-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="advisor-content">
            <h4 className="advisor-eyebrow">INNOVATION MEETS TRADITION</h4>
            <h2 className="advisor-title">Your Personal AI Skin Advisor</h2>
            <p className="advisor-text">
              Discover your perfect Ayurvedic routine in under 2 minutes. Our AI analyzes your unique skin profile to recommend a personalized journey to timeless skin.
            </p>
            <button className="advisor-button">START ANALYSIS</button>
          </div>
        </motion.div>
      </section>

      {/* Shop by Categories Section */}
      <section className="categories-section">
        <div className="categories-header">
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

        <motion.div 
          className="categories-slider-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="categories-slider">
            <div className="category-item">
              <div className="category-icon-wrapper">
                <img src={turmericImg} alt="Hair Mask" />
              </div>
              <span className="category-name">Hair Mask</span>
            </div>
            <div className="category-item">
              <div className="category-icon-wrapper">
                <img src={sandalwoodImg} alt="Face Mask" />
              </div>
              <span className="category-name">Face Mask</span>
            </div>
            <div className="category-item">
              <div className="category-icon-wrapper">
                <img src={hibiscusImg} alt="Ubtan" />
              </div>
              <span className="category-name">Ubtan</span>
            </div>
            <div className="category-item">
              <div className="category-icon-wrapper">
                <img src={concernAntiAgingImg} alt="Face Serum" />
              </div>
              <span className="category-name">Face Serum</span>
            </div>
            <div className="category-item">
              <div className="category-icon-wrapper">
                <img src={concernAcneImg} alt="Scalp Serum" />
              </div>
              <span className="category-name">Scalp Serum</span>
            </div>
            <div className="category-item">
              <div className="category-icon-wrapper">
                <img src={turmericImg} alt="Face Wash" />
              </div>
              <span className="category-name">Face Wash</span>
            </div>
            <div className="category-item">
              <div className="category-icon-wrapper">
                <img src={sandalwoodImg} alt="Moisturizing Cream" />
              </div>
              <span className="category-name">Moisturizing Cream</span>
            </div>
            <div className="category-item">
              <div className="category-icon-wrapper">
                <img src={hibiscusImg} alt="Roll On" />
              </div>
              <span className="category-name">Roll On</span>
            </div>
            <div className="category-item">
              <div className="category-icon-wrapper">
                <img src={concernAntiAgingImg} alt="Inhaler" />
              </div>
              <span className="category-name">Inhaler</span>
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

    </div>
  )
}
