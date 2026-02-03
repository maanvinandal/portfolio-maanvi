import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section>
      <h1>Contact Me</h1>
      <div className="contact-layout">
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: maanvinandal@gmail.com</p>
          <p>Phone: 4379712903</p>
          <p>WhatsApp: <a href="https://wa.me/4379712903" target="_blank" rel="noopener noreferrer">
            <img src="/images/1200x630wa.png" alt="WhatsApp" className="whatsapp-logo" />
          </a></p>
          <p>Location: City, Country</p>
        </div>
        <div className="contact-form-section">
          <h3>Send a message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}