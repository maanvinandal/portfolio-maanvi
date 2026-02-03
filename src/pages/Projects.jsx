 import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'UX/UI & Human-Centered AI Platform (WILwork)',
    image: '/images/project-a..jpg',
    description:
      'Currently working on a user-centered digital platform designed to support founders, startups, partners, and global users within the clean technology ecosystem. The project focuses on intuitive UX/UI design, ethical and transparent AI interactions, and accessibility across all platform touchpoints.',
    role: 'UX/UI Designer & Frontend Developer',
    status: 'Currently Working',
  },
    {
      title: 'SPA Website – Semester 1 Final Project',
    image: '/images/project-b.png',
    description:
      'Semester 1 final project focused on designing and developing a responsive spa website. The project emphasized clean UI design, structured layouts, and user-friendly navigation using foundational web technologies.',
    role: 'Frontend Developer',
    link: 'http://studentweb.cencol.ca/m1095/project/final_project.html',
  
    },

    {
      title: 'Student Researcher – Self-Learning Module (WIMTACH)',
    image: '/images/project-c.png',
    description:
      'Worked as a student researcher at WIMTACH, Centennial College, contributing to the design of a self-learning module. Responsibilities included content generation, structuring educational material, and supporting the development of learner-focused digital resources.',
    role: 'Student Researcher & Content Designer',
  
    },
  ]

  return (
    <section>
      <h1>Projects</h1>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}