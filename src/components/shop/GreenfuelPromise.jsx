import { ShieldCheck, Sparkles, Feather, Factory } from 'lucide-react'

export default function GreenfuelPromise() {
  const promises = [
    {
      icon: <Feather size={24} />,
      title: 'Ayurvedic Heritage',
      desc: 'Formulated following ancient Samhita codices for biological harmony'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Ingredient Transparency',
      desc: '100% full botanical disclosure with zero synthetic fillers or parabens'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Modern Formulation',
      desc: 'Enhanced dermal absorption verified by clinical dermatological standards'
    },
    {
      icon: <Factory size={24} />,
      title: 'Thoughtful Manufacturing',
      desc: 'Small-batch artisanal solar & copper vessel extraction process'
    }
  ]

  return (
    <section className="shop-promise-section">
      <div className="shop-promise-container">
        
        <div className="promise-grid">
          {promises.map((item, idx) => (
            <div key={idx} className="promise-card">
              <div className="promise-icon-wrap">
                {item.icon}
              </div>
              <h3 className="promise-title">{item.title}</h3>
              <p className="promise-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
