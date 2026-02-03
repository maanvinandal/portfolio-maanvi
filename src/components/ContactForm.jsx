import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* This form collects data and redirects to Home with the submitted data.
   No backend required for this assignment; you could later add an API endpoint. */
export default function ContactForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Save message to localStorage (optional) so it persists across reloads
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]')
    submissions.push({ ...form, submittedAt: new Date().toISOString() })
    localStorage.setItem('submissions', JSON.stringify(submissions))

    // Redirect to home and pass submitted data via navigation state
    navigate('/', { state: { message: 'Thanks! Your message was sent.', data: form } })
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-header">
        <h3>Send a message</h3>
        <p>Share the essentials and I'll reply with a clear plan.</p>
      </div>
      <div className="form-row">
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
      </div>
      <input name="phone" placeholder="Contact Number" value={form.phone} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows="5" required />
      <button type="submit" className="btn btn-primary">Send message</button>
    </form>
  )
}
