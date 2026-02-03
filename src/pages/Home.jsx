import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Home() {
  const location = useLocation()
  const state = location.state

  return (
    <section className="page">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Software Developer · UX/UI Focus</p>
          <h1>Building premium, human-centered web experiences with clean code.</h1>
          <p className="lead">
            I design and develop scalable web applications with a focus on clarity,
            accessibility, and thoughtful interactions. My work blends modern
            engineering with refined product design to deliver recruiter-ready outcomes.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Start a project</Link>
            <Link to="/projects" className="btn btn-ghost">View projects</Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span>3+</span>
              <p>Selected projects</p>
            </div>
            <div className="stat">
              <span>2</span>
              <p>Research + UX roles</p>
            </div>
            <div className="stat">
              <span>100%</span>
              <p>Responsive builds</p>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <img src="/images/background.jpg" alt="Workspace aesthetic" />
            <div className="hero-card-panel">
              <p className="panel-title">Current focus</p>
              <ul className="panel-list">
                <li>Design systems & UI polish</li>
                <li>React + modern frontend architecture</li>
                <li>Accessible, recruiter-friendly UX</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {state?.message && (
        <div className="success-message">
          <strong>{state.message}</strong>
          <pre>{JSON.stringify(state.data, null, 2)}</pre>
        </div>
      )}

      <div className="container section">
        <div className="section-heading">
          <h2>Featured work</h2>
          <p>Strategic, detail-oriented projects that balance usability and engineering.</p>
        </div>
        <div className="featured-grid">
          <article className="featured-card">
            <h3>Human-Centered AI Platform</h3>
            <p>
              UX/UI platform design for clean technology founders with an emphasis
              on transparency, ethical AI, and accessibility.
            </p>
            <span className="tag">UX/UI + Frontend</span>
          </article>
          <article className="featured-card">
            <h3>Responsive SPA Build</h3>
            <p>
              A structured, mobile-first single-page experience with clean layout
              systems and elegant interactions.
            </p>
            <span className="tag">Frontend Development</span>
          </article>
          <article className="featured-card">
            <h3>Education Module Research</h3>
            <p>
              Content design and structured learning resources focused on clarity
              and measurable progress.
            </p>
            <span className="tag">Research + Content</span>
          </article>
        </div>
      </div>
    </section>
  )
}
