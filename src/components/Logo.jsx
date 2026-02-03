import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/" className="brand" aria-label="Home">
      <span className="brand-mark">M</span>
      <span className="brand-text">Maanvi Nandal</span>
    </Link>
  )
}
