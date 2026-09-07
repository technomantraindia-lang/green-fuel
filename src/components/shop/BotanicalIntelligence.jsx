import { ArrowRight, Leaf } from 'lucide-react'
import { BOTANICAL_INGREDIENTS } from '../../data/shopData'

export default function BotanicalIntelligence({ selectedIngredient, onSelectIngredient }) {
  const handleIngredientClick = (ingId) => {
    onSelectIngredient(selectedIngredient === ingId ? null : ingId)
    const target = document.getElementById('shop-catalogue')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="botanical-intel-section">
      <div className="botanical-intel-container">
        
        <div className="botanical-intel-header">
          <div className="intel-badge">
            <Leaf size={14} className="intel-leaf-icon" />
            <span>HERBAL ALCHEMY</span>
          </div>
          <h2 className="intel-title">Botanical Intelligence</h2>
          <p className="intel-subtitle">
            Every Greenfuel formula begins in organic herbal harvests with potent bio-active purity
          </p>
        </div>

        <div className="botanical-intel-grid">
          {BOTANICAL_INGREDIENTS.map((ing) => {
            const isSelected = selectedIngredient === ing.id
            return (
              <div
                key={ing.id}
                onClick={() => handleIngredientClick(ing.id)}
                className={`botanical-card ${isSelected ? 'is-selected' : ''}`}
              >
                <div className="botanical-img-frame">
                  <img src={ing.image} alt={ing.name} className="botanical-img" />
                </div>

                <div className="botanical-body">
                  <span className="botanical-origin">{ing.origin}</span>
                  <h3 className="botanical-name">{ing.name}</h3>
                  <p className="botanical-role">{ing.role}</p>

                  <div className="botanical-link">
                    <span>Filter Formulations</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
