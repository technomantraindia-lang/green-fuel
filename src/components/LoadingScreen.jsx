import { useState, useEffect } from 'react'
import mainLogo from '../assets/logo-main.png'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Show preloader for ~1.6s then trigger smooth fade out transition
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 1600)

    const removeTimer = setTimeout(() => {
      setLoading(false)
    }, 2100)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!loading) return null

  return (
    <div 
      className={`greenfuel-loading-overlay ${fadeOut ? 'is-fading-out' : ''}`}
      data-lenis-prevent="true"
    >
      <div className="loading-content-box">
        
        {/* Animated Brand Logo */}
        <div className="loading-logo-wrapper">
          <img src={mainLogo} alt="Greenfuel Botanicals" className="loading-brand-logo" />
          <div className="loading-logo-glow"></div>
        </div>

        {/* Botanical Tagline */}
        <span className="loading-badge">AYURVEDIC FORMULATIONS</span>
        <p className="loading-tagline">Crafting Timeless Vedic Alchemy...</p>

        {/* Progress Bar Track */}
        <div className="loading-progress-track">
          <div className="loading-progress-fill"></div>
        </div>

      </div>
    </div>
  )
}
