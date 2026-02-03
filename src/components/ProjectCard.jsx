import React from 'react'

export default function ProjectCard({ title, image, description, role, link, status }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="project-role">Role: {role}</p>
        <div className="project-meta">
          {status && <span className="tag">{status}</span>}
          {link && (
            <a className="text-link" href={link} target="_blank" rel="noopener noreferrer">
              View project
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
