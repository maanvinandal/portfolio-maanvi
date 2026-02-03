import React from 'react'
import { Link } from 'react-router-dom'


export default function Logo() {
  const style = {
    display: 'inline-block',
    width: 40,
    height: 40,
    background: '#2b6cb0',
    color: '#fff',
    fontWeight: '700',
    borderRadius: 6,
    textAlign: 'center',
    lineHeight: '40px',
  }
  return (
    <Link to="/" aria-label="Home">
      <div style={style}>M</div> 
    </Link>
  )
}