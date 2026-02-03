import React from 'react'

export default function ProjectCard({ title, image, description, role }) {
  return (
    <article style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: 6, width: 300 }}>
      <img src={image} alt={title} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 4 }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={{ fontStyle: 'italic', color: '#555' }}>Role: {role}</p>
    </article>
  )
}