import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section className="page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h1>Let's build something great</h1>
          <p>
            Tell me about your project, role, or collaboration idea. I'll respond
            with clarity and next steps.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact details</h3>
              <p className="info-row">
                <span>Email</span>
                <strong>maanvinandal@gmail.com</strong>
              </p>
              <p className="info-row">
                <span>Phone</span>
                <strong>437 971 2903</strong>
              </p>
              <p className="info-row">
                <span>Location</span>
                <strong>Toronto, Canada</strong>
              </p>
              <a
                href="https://wa.me/4379712903"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Message on WhatsApp
              </a>
            </div>
            <div className="info-card accent-card">
              <h3>Availability</h3>
              <p>
                Open to internships, junior software roles, and UX/UI-focused projects.
              </p>
              <p className="availability">Next response window: within 24-48 hours.</p>
            </div>
          </div>
          <div className="contact-form-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
