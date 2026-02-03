import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'Web Application Development',
      desc: 'Design and development of responsive, user-focused web applications with clean UI and maintainable code.',
      detail: 'HTML, CSS, JavaScript, React',
    },
    {
      title: 'Backend & Database Development',
      desc: 'Backend logic and relational database solutions to support secure data workflows.',
      detail: 'C#, ASP.NET, REST APIs, SQL',
    },
    {
      title: 'Applied Programming & Problem Solving',
      desc: 'Structured problem solving, debugging, and scripting with documentation that teams can trust.',
      detail: 'Python, JavaScript',
    },
  ]

  return (
    <section className="page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h1>How I can help</h1>
          <p>
            I partner with teams and founders to design thoughtful interfaces
            and ship reliable web applications.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="tag">{service.detail}</span>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <div>
            <h2>Let's build something recruiter-ready</h2>
            <p>
              From discovery to polished execution, I deliver work that balances
              speed, quality, and confidence.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">Book a call</Link>
        </div>
      </div>
    </section>
  )
}
