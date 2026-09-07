import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, CheckCircle2, RefreshCw, Sun, Moon, Calendar, ArrowRight, ShieldCheck } from 'lucide-react'

// Import assets for dynamic prescribed products
import catUbtan from '../assets/new-images/cat_ubtan_jar.png'
import catFaceSerum from '../assets/new-images/cat_face_serum_dropper.png'
import catScalpSerum from '../assets/new-images/cat_scalp_serum_pump.png'
import catFaceWash from '../assets/new-images/cat_face_wash_pump.png'
import catCream from '../assets/new-images/cat_cream_jar.png'
import catHairMask from '../assets/new-images/cat_hair_mask_jar.png'
import catFaceMask from '../assets/new-images/cat_face_mask_jar.png'
import catRollOn from '../assets/new-images/cat_roll_on_bottle.png'
import catInhaler from '../assets/new-images/cat_inhaler_spray.png'

gsap.registerPlugin(ScrollTrigger)

export default function SkinHairAdvisor() {
  const sectionRef = useRef(null)
  const [step, setStep] = useState(1) // 1: Concern, 2: Dosha/Type, 3: Results
  const [selectedConcern, setSelectedConcern] = useState(null)
  const [selectedType, setSelectedType] = useState(null)

  const concerns = [
    { id: 'pigmentation', label: 'Pigmentation & Dark Spots', icon: '✨', detail: 'Evens skin tone & restores clarity' },
    { id: 'acne', label: 'Acne & Active Blemishes', icon: '🌿', detail: 'Soothes inflammation & refines pores' },
    { id: 'dryness', label: 'Dryness & Barrier Damage', icon: '💧', detail: 'Deeply hydrates & locks moisture' },
    { id: 'oiliness', label: 'Excess Sebum & Clogged Pores', icon: '🍃', detail: 'Balances sebum & detoxifies skin' },
    { id: 'wrinkles', label: 'Fine Lines & Elasticity Loss', icon: '🌸', detail: 'Firms skin & boosts collagen' },
    { id: 'thinning', label: 'Hair Thinning & Scalp Flakes', icon: '🌱', detail: 'Nourishes roots & stimulates growth' }
  ]

  const skinTypes = [
    { id: 'vata', label: 'Dry / Sensitive (Vata)', dosha: 'VATA CONSTITUTION', desc: 'Needs rich lipid replenishment, warming botanical oils, and barrier repair.' },
    { id: 'pitta', label: 'Combination / Inflamed (Pitta)', dosha: 'PITTA CONSTITUTION', desc: 'Needs cooling herbal extracts, anti-redness active compounds, and pore balance.' },
    { id: 'kapha', label: 'Oily / Heavy (Kapha)', dosha: 'KAPHA CONSTITUTION', desc: 'Needs detoxifying clay minerals, light aqueous fluids, and gentle exfoliation.' }
  ]

  // Dynamic recommendation lookup mapped with variable product counts (2 to 4 products)
  const getPrescribedRegimen = () => {
    const cId = selectedConcern?.id || 'pigmentation'

    const regimenDatabase = {
      pigmentation: {
        routineTitle: '3-Step Radiance Regimen',
        morning: [
          'Cleanse: Waterless Face Wash Spray mist (2 pumps)',
          'Active: Golden Saffron & Turmeric Radiance Serum (3 drops)',
          'Seal: Sparsh Lipid Repair Cream for day-long luminosity'
        ],
        evening: [
          'Purify: Aura Ubtan Powder activated with Rose Water',
          'Restore: Bakuchiol Youth Elixir targeted spot treatment',
          'Overnight: Deep Cell Recovery & Melanin Balance Compound'
        ],
        products: [
          { name: 'Saffron Serum', img: catFaceSerum },
          { name: 'Aura Ubtan', img: catUbtan },
          { name: 'Sparsh Cream', img: catCream }
        ],
        timeline: 'Visibly reduces dark spot intensity and evens skin tone within 14 to 28 days.'
      },
      acne: {
        routineTitle: '2-Step Clarifying Duo',
        morning: [
          'Cleanse: Neem & Tulsi Waterless Cleansing Mist',
          'Active: Anti-Blemish Tea Tree & Turmeric Drops'
        ],
        evening: [
          'Purify: Detoxifying Neem & Clay Herbal Ubtan Paste',
          'Overnight: Spot Purifying Herbal Gel'
        ],
        products: [
          { name: 'Neem Wash', img: catFaceWash },
          { name: 'Aura Ubtan', img: catUbtan }
        ],
        timeline: 'Calms active breakouts within 48 hours; clears clogged pores in 14 days.'
      },
      dryness: {
        routineTitle: '3-Step Barrier Repair Trio',
        morning: [
          'Cleanse: Gentle Hydrating Botanical Wash',
          'Active: Hyaluronic Acid & Sandalwood Hydrating Serum',
          'Seal: Ultra-Rich Sparsh Moisture Barrier Cream'
        ],
        evening: [
          'Purify: Creamy Almond Exfoliating Ubtan Paste',
          'Restore: Deep Repair Rosehip & Ashwagandha Oil',
          'Overnight: Lipid Restorative Overnight Balm'
        ],
        products: [
          { name: 'Sparsh Cream', img: catCream },
          { name: 'Hydra Serum', img: catFaceSerum },
          { name: 'Face Mask', img: catFaceMask }
        ],
        timeline: 'Restores skin hydration barrier in 7 days; plumper skin texture by Day 21.'
      },
      oiliness: {
        routineTitle: '2-Step Sebum Balance Duo',
        morning: [
          'Cleanse: Waterless Pore Refine Wash Spray',
          'Active: Niacinamide & Vetiver Sebum Balancing Serum'
        ],
        evening: [
          'Purify: Charcoal & Fuller\'s Earth Deep Ubtan Mask',
          'Overnight: Balancing Sebum Regulator'
        ],
        products: [
          { name: 'Wash Spray', img: catFaceWash },
          { name: 'Roll-On Care', img: catRollOn }
        ],
        timeline: 'Reduces midday excess shine by 65% in 7 days and tightens enlarged pores by Day 28.'
      },
      wrinkles: {
        routineTitle: '3-Step Youth Renewal Trio',
        morning: [
          'Cleanse: Firming Botanical Hydration Mist',
          'Active: Bio-Peptide & Saffron Collagen Boost Serum',
          'Seal: Youth Restorative Sparsh Firming Cream'
        ],
        evening: [
          'Purify: Regenerative Ubtan & Rose Petal Scrub',
          'Restore: Pure Bakuchiol Retinol-Alternative Night Elixir',
          'Overnight: Deep Elasticity Overnight Renewal Mask'
        ],
        products: [
          { name: 'Bakuchiol Serum', img: catFaceSerum },
          { name: 'Sparsh Cream', img: catCream },
          { name: 'Aura Ubtan', img: catUbtan }
        ],
        timeline: 'Improves skin firmness by 32% and softens fine lines within 28 days of daily ritual.'
      },
      thinning: {
        routineTitle: '4-Step Complete Hair & Scalp Rejuvenation Bundle',
        morning: [
          'Cleanse: Scalp Detoxifying Botanical Rinse',
          'Active: Bio-active Bhringraj & Rosemary Scalp Serum',
          'Nourish: Root Fortifying Leave-in Tonic'
        ],
        evening: [
          'Purify: Scalp Renewal Clay & Herb Exfoliator',
          'Massage: Warm Hibiscus & Coconut Oil Treatment',
          'Overnight: Deep Follicle Restorative Hair Mask'
        ],
        products: [
          { name: 'Scalp Serum', img: catScalpSerum },
          { name: 'Hair Mask', img: catHairMask },
          { name: 'Active Serum', img: catFaceSerum },
          { name: 'Herbal Tonic', img: catInhaler }
        ],
        timeline: 'Reduces hair fall on washing by 45% in 14 days; stimulates fresh root sprouting by Day 28.'
      }
    }

    return regimenDatabase[cId] || regimenDatabase['pigmentation']
  }

  const regimen = getPrescribedRegimen()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSelectConcern = (item) => {
    setSelectedConcern(item)
    setTimeout(() => setStep(2), 250)
  }

  const handleSelectType = (item) => {
    setSelectedType(item)
    setTimeout(() => setStep(3), 250)
  }

  const handleReset = () => {
    setStep(1)
    setSelectedConcern(null)
    setSelectedType(null)
  }

  return (
    <section ref={sectionRef} id="advisor" className="adv-section">
      <div className="adv-card-container">
        
        {/* Header */}
        <div className="adv-header">
          <div className="adv-badge">
            <Sparkles size={14} className="adv-sparkle-icon" />
            <span>AI SKIN & HAIR ADVISOR</span>
          </div>
          <h2 className="adv-title">Personalized Vedic Consultation</h2>
          <p className="adv-subtitle">
            Match your dosha constitution and specific skin needs with custom-crafted botanical remedies.
          </p>

          {/* Interactive Step Progress Bar */}
          <div className="adv-progress-bar">
            <div className={`adv-step-pill ${step >= 1 ? 'active' : ''}`}>
              <span className="pill-num">1</span>
              <span>Primary Need</span>
            </div>
            <div className={`adv-step-line ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`adv-step-pill ${step >= 2 ? 'active' : ''}`}>
              <span className="pill-num">2</span>
              <span>Dosha Type</span>
            </div>
            <div className={`adv-step-line ${step >= 3 ? 'active' : ''}`}></div>
            <div className={`adv-step-pill ${step >= 3 ? 'active' : ''}`}>
              <span className="pill-num">3</span>
              <span>Prescribed Ritual</span>
            </div>
          </div>
        </div>

        {/* STEP 1: Select Concern */}
        {step === 1 && (
          <div className="adv-step-view fade-in">
            <h3 className="adv-step-prompt">Step 1: Select Your Primary Concern</h3>
            <div className="adv-concerns-grid">
              {concerns.map((item) => {
                const isSelected = selectedConcern?.id === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectConcern(item)}
                    className={`adv-concern-card ${isSelected ? 'selected' : ''}`}
                  >
                    <div className="card-top">
                      <span className="concern-emoji">{item.icon}</span>
                      {isSelected && <CheckCircle2 size={18} className="check-icon" />}
                    </div>
                    <h4 className="concern-name">{item.label}</h4>
                    <p className="concern-detail">{item.detail}</p>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Select Skin/Dosha Type */}
        {step === 2 && (
          <div className="adv-step-view fade-in">
            <h3 className="adv-step-prompt">
              Step 2: What best describes your skin or scalp feel?
            </h3>
            <div className="adv-dosha-grid">
              {skinTypes.map((item) => {
                const isSelected = selectedType?.id === item.id
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectType(item)}
                    className={`adv-dosha-card ${isSelected ? 'selected' : ''}`}
                  >
                    <div className="dosha-badge-tag">{item.dosha}</div>
                    <h4 className="dosha-name">{item.label}</h4>
                    <p className="dosha-desc">{item.desc}</p>
                  </div>
                )
              })}
            </div>
            
            <div className="adv-nav-actions">
              <button onClick={() => setStep(1)} className="adv-back-btn">
                ← Back to Primary Concerns
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Prescribed Routine Output */}
        {step === 3 && (
          <div className="adv-step-view fade-in">
            <div className="adv-results-bar">
              <div className="results-tag-wrap">
                <ShieldCheck size={16} className="shield-icon" />
                <span>{regimen.routineTitle}: {selectedConcern?.label} ({selectedType?.dosha})</span>
              </div>
              <button onClick={handleReset} className="adv-reset-btn">
                <RefreshCw size={14} /> Re-Take Assessment
              </button>
            </div>

            <div className="adv-routine-grid">
              
              {/* Morning Ritual */}
              <div className="adv-routine-card morning">
                <div className="routine-head">
                  <Sun size={22} className="head-icon sun" />
                  <div>
                    <h4>Morning Ritual</h4>
                    <span className="subhead">Daily Protection & Activation</span>
                  </div>
                </div>
                <ul className="routine-steps">
                  {regimen.morning.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* Evening Ritual */}
              <div className="adv-routine-card night">
                <div className="routine-head">
                  <Moon size={22} className="head-icon moon" />
                  <div>
                    <h4>Evening Ritual</h4>
                    <span className="subhead">Deep Cellular Repair</span>
                  </div>
                </div>
                <ul className="routine-steps">
                  {regimen.evening.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>

              {/* Recommended Bundle & Timeline */}
              <div className="adv-routine-card summary">
                <div className="routine-head">
                  <Calendar size={22} className="head-icon cal" />
                  <div>
                    <h4>Expected Outcome</h4>
                    <span className="subhead">28-Day Epidermal Cycle</span>
                  </div>
                </div>
                
                <p className="summary-desc">{regimen.timeline}</p>

                <div className="bundle-thumb-row">
                  {regimen.products.map((p, idx) => (
                    <div key={idx} className="thumb-item">
                      <img src={p.img} alt={p.name} />
                      <span>{p.name}</span>
                    </div>
                  ))}
                </div>

                <a href="/products" className="adv-cta-btn">
                  <span>Add Prescribed ({regimen.products.length} Products) Bundle</span>
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  )
}
