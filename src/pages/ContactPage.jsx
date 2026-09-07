import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  HelpCircle, 
  ChevronDown 
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Product Inquiry',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: 'Product Inquiry',
        message: ''
      })
    }, 4000)
  }

  const faqs = [
    {
      question: "How fast will my order be processed and shipped?",
      answer: "All orders placed before 2 PM IST are dispatched on the same business day from our Western Ghats studio. Delivery takes 2–4 business days across India."
    },
    {
      question: "Are Green Fuel formulations 100% natural and AYUSH certified?",
      answer: "Yes, every single Green Fuel product is crafted using cold-pressed wild botanicals without parabens, sulfates, silicones, or artificial colors."
    },
    {
      question: "Can I get a personalized Ayurvedic consultation for my skin/hair type?",
      answer: "Absolutely! Our team of Ayurvedic Vaidyas offers free digital consultations. Leave us a message selecting 'Ayurvedic Consultation' in the form."
    },
    {
      question: "What is your return and refund policy?",
      answer: "We offer a 30-day Green Promise refund policy. If a formulation does not suit your skin, contact us for a hassle-free exchange or full refund."
    }
  ]

  return (
    <div className="contact-page-wrapper">
      
      {/* 1. HERO HEADER */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <span className="contact-section-tag">WE ARE HERE FOR YOU</span>
          <h1 className="contact-hero-title">Connect with Green Fuel</h1>
          <p className="contact-hero-subtitle">
            Have questions about our Ayurvedic formulations, order status, or botanical research? 
            Our wellness team and Ayurvedic experts are ready to assist you.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT SECTION (INFO + FORM) */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          
          {/* LEFT: DIRECT CONTACT INFO */}
          <div className="contact-info-card">
            <h2 className="info-card-heading">Get in Touch</h2>
            <p className="info-card-desc">
              Reach out directly through any of our support channels below. We commit to responding within 24 hours.
            </p>

            <div className="info-items-list">
              
              {/* Phone */}
              <div className="info-item">
                <div className="info-icon-circle">
                  <Phone size={22} />
                </div>
                <div className="info-item-text">
                  <span className="info-item-label">Customer Support & Helpline</span>
                  <a href="tel:+919876543210" className="info-item-val">+91 98765 43210</a>
                  <span className="info-subtext">Mon – Sat, 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>

              {/* Email */}
              <div className="info-item">
                <div className="info-icon-circle">
                  <Mail size={22} />
                </div>
                <div className="info-item-text">
                  <span className="info-item-label">Email Us</span>
                  <a href="mailto:care@greenfuel.in" className="info-item-val">care@greenfuel.in</a>
                  <span className="info-subtext">For general & order inquiries</span>
                </div>
              </div>

              {/* HQ Address */}
              <div className="info-item">
                <div className="info-icon-circle">
                  <MapPin size={22} />
                </div>
                <div className="info-item-text">
                  <span className="info-item-label">Botanical Research Studio HQ</span>
                  <p className="info-address">
                    Green Fuel Formulations Lab,<br />
                    Western Ghats Botanical Reserve, Kerala – 685612
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="info-item">
                <div className="info-icon-circle">
                  <Clock size={22} />
                </div>
                <div className="info-item-text">
                  <span className="info-item-label">Studio Operating Hours</span>
                  <p className="info-item-val" style={{ fontSize: '0.95rem' }}>Monday – Saturday: 9 AM to 7 PM IST</p>
                  <span className="info-subtext">Closed on Sundays & National Holidays</span>
                </div>
              </div>

            </div>

            {/* Ayurvedic Promise Box */}
            <div className="ayurvedic-consultation-banner">
              <Sparkles size={24} className="consult-icon" />
              <div>
                <strong>Need Formulating Guidance?</strong>
                <p>Request a 1-on-1 Ayurvedic Vaidya skincare consultation for tailored advice.</p>
              </div>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE CONTACT FORM */}
          <div className="contact-form-card">
            <div className="form-header-box">
              <h2>Send Us a Message</h2>
              <p>Fill in the details below and our team will get back to you promptly.</p>
            </div>

            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={56} className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out to Green Fuel. Our team will contact you shortly at <strong>{formData.email}</strong>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="form-input"
                  />
                </div>

                {/* Email & Phone */}
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 00000"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="form-group">
                  <label htmlFor="subject">Topic / Query Type *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Product Inquiry">Product Inquiry & Advice</option>
                    <option value="Order Status">Order Status & Tracking</option>
                    <option value="Ayurvedic Consultation">Ayurvedic Vaidya Consultation</option>
                    <option value="Partnership">Retail & Wholesale Partnership</option>
                    <option value="Feedback">Feedback & Suggestions</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="contact-submit-btn">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="contact-faq-section">
        <div className="contact-faq-container">
          <div className="faq-header">
            <HelpCircle size={28} className="faq-header-icon" />
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions about Green Fuel products and services.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} className={`faq-chevron ${activeFaq === index ? 'open' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="faq-answer-box">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
