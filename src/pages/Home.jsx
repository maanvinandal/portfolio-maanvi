import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Home() {
  const location = useLocation()
  const state = location.state

  return (
    <section>
      <h1>Welcome to My Portfolio</h1>
      <p>My mission is to design and develop accessible, maintainable,
        and user-centered web applications while continuously expanding
        my skills in modern web technologies. Through academic projects
        and hands-on development experience, I focus on writing clean,
        well-structured code, building responsive interfaces, and creating
        solutions that are practical, scalable, and easy to maintain. I am
        committed to continuous learning and staying current with emerging
        tools, frameworks, and best practices in software development</p>

      <div className="home-hero">
        <img src="/images/background.jpg" alt="Portfolio Background" className="home-background-image" />
        <div className="home-hero-content">
          <h2>Let's Build Something Amazing Together</h2>
          <p>Explore my work and get in touch to discuss your next project</p>
        </div>
      </div>

      <p>
        <Link to="/about">Learn more about me</Link> or view my <Link to="/projects">projects</Link>.
      </p>

      {state?.message && (
        <div className="success-message">
          <strong>{state.message}</strong>
          <pre>{JSON.stringify(state.data, null, 2)}</pre>
        </div>
      )}
    </section>
  )
}