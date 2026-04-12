import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../services/api.js';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const result = await getProjects();

      if (Array.isArray(result)) {
        setProjects(result);
      } else if (result.projects) {
        setProjects(result.projects);
      }
    };

    loadProjects();
  }, []);

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
          {projects.map((p) => (
            <ProjectCard key={p._id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
