import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const linkStyle = ({ isActive }) => ({
  margin: '0 8px',
  textDecoration: 'none',
  color: isActive ? '#2b6cb0' : '#333',
  fontWeight: isActive ? '600' : '400',
})

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <div>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
        <NavLink to="/services" style={linkStyle}>Services</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </div>
    </nav>
  )
}