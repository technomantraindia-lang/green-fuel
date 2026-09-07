import { useState } from 'react'
import { ArrowUpRight, Eye } from 'lucide-react'
import { SHOP_CONCERNS } from '../../data/shopData'
import { getConcernBySlug } from '../../data/concernsData'
import ConcernQuickViewModal from './ConcernQuickViewModal'

export default function ConcernDiscovery({ selectedConcern, onSelectConcern }) {
  const [modalConcern, setModalConcern] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConcernClick = (concernId) => {
    if (onSelectConcern) {
      onSelectConcern(selectedConcern === concernId ? null : concernId)
    }
    const fullConcernData = getConcernBySlug(concernId)
    setModalConcern(fullConcernData)
    setIsModalOpen(true)
  }

  return (
    <section className="shop-concern-section">
      
      <ConcernQuickViewModal 
        concern={modalConcern}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="shop-concern-container">
        
        <div className="shop-concern-header">
          <span className="global-section-badge">TARGETED BOTANICAL CARE</span>
          <h2 className="global-section-title">Shop by Concern</h2>
          <p className="global-section-subtitle">
            Curated Ayurvedic rituals tailored specifically to your skin and hair needs
          </p>
        </div>

        <div className="shop-concern-grid">
          {SHOP_CONCERNS.map((c) => {
            const isSelected = selectedConcern === c.id
            return (
              <div
                key={c.id}
                onClick={() => handleConcernClick(c.id)}
                className={`shop-concern-card ${isSelected ? 'is-selected' : ''}`}
                role="button"
                tabIndex={0}
              >
                <div className="concern-img-box">
                  <img src={c.image} alt={c.name} className="concern-img" />
                  <div className="concern-overlay"></div>
                </div>

                <div className="concern-content">
                  <h3 className="concern-title">{c.name}</h3>
                  <span className="concern-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
