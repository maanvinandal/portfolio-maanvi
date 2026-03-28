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

        {/* Admin Links (Dropdown for better UX) */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          <details style={{ position: 'relative' }}>
            <summary style={{ cursor: 'pointer', padding: '8px 12px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
              Admin
            </summary>
            <div style={{ 
              position: 'absolute', 
              top: '100%', 
              right: 0, 
              backgroundColor: 'white', 
              border: '1px solid #ddd', 
              borderRadius: '4px',
              minWidth: '150px',
              zIndex: 1000,
              marginTop: '5px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
            }}>
              <NavLink to="/admin/users" className={linkClass} style={{ display: 'block', padding: '10px 15px', borderBottom: '1px solid #eee', textDecoration: 'none', color: '#333' }}>
                Users
              </NavLink>
              <NavLink to="/admin/projects" className={linkClass} style={{ display: 'block', padding: '10px 15px', borderBottom: '1px solid #eee', textDecoration: 'none', color: '#333' }}>
                Projects
              </NavLink>
              <NavLink to="/admin/services" className={linkClass} style={{ display: 'block', padding: '10px 15px', borderBottom: '1px solid #eee', textDecoration: 'none', color: '#333' }}>
                Services
              </NavLink>
              <NavLink to="/admin/references" className={linkClass} style={{ display: 'block', padding: '10px 15px', textDecoration: 'none', color: '#333' }}>
                References
              </NavLink>
            </div>
          </details>
        </div>
      </div>
    </nav>
  )
}
