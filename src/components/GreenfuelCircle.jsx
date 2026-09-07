import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2, MessageSquare, X, Mail, User, Send, Sparkles } from 'lucide-react'

import ctaBgImg from '../assets/new-images/cta_dark_leaves_bg.png'

gsap.registerPlugin(ScrollTrigger)

export default function GreenfuelCircle() {
  const sectionRef = useRef(null)
  
  // Contact Modal State
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [contactSubmitted, setContactSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (contactForm.name && contactForm.email) {
      setContactSubmitted(true)
      setTimeout(() => {
        setContactSubmitted(false)
        setIsContactOpen(false)
        setContactForm({ name: '', email: '', message: '' })
      }, 2500)
    }
  }

  return (
    <section ref={sectionRef} id="circle" className="cta-membership-section">
      <div className="cta-membership-card">
        
        {/* Background Image & Overlay */}
        <img src={ctaBgImg} alt="Botanical Circle Background" className="cta-card-bg-img" />
        <div className="cta-card-overlay"></div>

        {/* Content Container */}
        <div className="cta-card-content">
          <span className="cta-badge">EXCLUSIVE MEMBERSHIP</span>
          <h2 className="cta-title">Join the Greenfuel Circle</h2>
          <p className="cta-desc">
            Receive exclusive invitations to private seasonal harvest drops, bespoke Ayurvedic routine guides, and pioneer access to new botanical research launches.
          </p>

          {/* Single Prominent CTA Button */}
          <div className="cta-action-center">
            <button onClick={() => setIsContactOpen(true)} className="cta-main-gold-btn">
              <MessageSquare size={20} />
              <span>Get in Touch with Herbal Experts</span>
              <ArrowRight size={18} className="btn-arrow" />
            </button>
          </div>
        </div>

      </div>

      {/* CONTACT POPUP MODAL */}
      {isContactOpen && (
        <div className="contact-modal-backdrop" onClick={() => setIsContactOpen(false)}>
          <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Close Button */}
            <button onClick={() => setIsContactOpen(false)} className="modal-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>

            {!contactSubmitted ? (
              <div className="modal-inner">
                <div className="modal-header">
                  <div className="modal-icon-badge">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="modal-title">Consultation & Inquiries</h3>
                  <p className="modal-subtitle">Speak directly with our Ayurvedic formulation team</p>
                </div>

                <form onSubmit={handleContactSubmit} className="modal-form">
                  <div className="modal-field">
                    <label>Full Name</label>
                    <div className="modal-input-wrap">
                      <User size={16} className="modal-input-icon" />
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="modal-field">
                    <label>Email Address</label>
                    <div className="modal-input-wrap">
                      <Mail size={16} className="modal-input-icon" />
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="modal-field">
                    <label>How can we help your skincare journey?</label>
                    <textarea
                      rows={4}
                      placeholder="Ask us about dosha types, product ingredients, or routine recommendations..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="modal-success-state">
                <CheckCircle2 size={48} className="success-big-icon" />
                <h3>Message Sent Successfully</h3>
                <p>Our Ayurvedic experts will reach out to your email within 24 hours.</p>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  )
}
