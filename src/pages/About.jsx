import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="page">
      <div className="container about-grid">
        <div className="about-media">
          <img src="/images/maanvi.jpeg" alt="Maanvi Nandal" />
          <div className="about-card">
            <p className="eyebrow">Based in Toronto</p>
            <h2>Software Engineering Technology</h2>
            <p>
              I combine structured engineering with an eye for elegant UI,
              building web experiences that feel polished and professional.
            </p>
          </div>
        </div>
        <div className="about-content">
          <p className="eyebrow">About</p>
          <h1>Detail-driven developer with a design-first mindset.</h1>
          <p className="lead">
            I am currently in my third semester of Software Engineering Technology,
            focused on delivering modern applications that are maintainable,
            accessible, and aligned with product goals.
          </p>
          <p>
            I care deeply about structured layouts, consistent visual language,
            and clean, reusable components. My workflow blends careful planning
            with fast iteration so teams can move confidently and ship quality.
          </p>
          <div className="about-actions">
            <a
              href="/Resume_Maanvi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download resume
            </a>
            <Link to="/contact" className="btn btn-ghost">Let's connect</Link>
          </div>
          <div className="about-highlights">
            <div>
              <h3>Core strengths</h3>
              <ul>
                <li>Frontend architecture</li>
                <li>UX/UI systems</li>
                <li>Accessibility-first design</li>
              </ul>
            </div>
            <div>
              <h3>Toolset</h3>
              <ul>
                <li>React + JavaScript</li>
                <li>HTML/CSS systems</li>
                <li>C#, ASP.NET, SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
