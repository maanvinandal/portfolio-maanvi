import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Available for software development and UX/UI collaborations.</p>
          <p className="footer-meta">(c) 2026 Maanvi Nandal. Crafted with care.</p>
        </div>
      </footer>
    </div>
  )
}
