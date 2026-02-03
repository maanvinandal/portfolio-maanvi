import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active' : ''}`

  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <Logo />
        <div className="nav-links">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
        </div>
        <div className="nav-cta">
          <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
