import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'UX/UI & Human-Centered AI Platform (WILwork)',
      image: '/images/project-a..jpg',
      description:
        'Designing a platform for clean technology founders with a focus on ethical AI touchpoints, thoughtful onboarding, and accessible navigation.',
      role: 'UX/UI Designer & Frontend Developer',
      status: 'In progress',
    },
    {
      title: 'Responsive SPA Website',
      image: '/images/project-b.png',
      description:
        'A responsive single-page site with clean layout systems, modern typography, and smooth interaction patterns.',
      role: 'Frontend Developer',
      link: 'http://studentweb.cencol.ca/m1095/project/final_project.html',
    },
    {
      title: 'Self-Learning Module Research (WIMTACH)',
      image: '/images/project-c.png',
      description:
        'Structured learner content and supported the design of a self-paced education module focused on clarity and engagement.',
      role: 'Student Researcher & Content Designer',
    },
  ]

  return (
    <section className="page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h1>Selected work</h1>
          <p>
            A curated set of projects showcasing UX strategy, frontend execution,
            and thoughtful problem solving.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
