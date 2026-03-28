import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects, deleteProject } from '../../services/api';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    setError('');

    const response = await getProjects();

    if (response.success) {
      setProjects(response.data || []);
    } else {
      setError(response.message || 'Failed to load projects');
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const response = await deleteProject(id);

      if (response.success) {
        setMessage('Project deleted successfully!');
        await loadProjects();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setError(response.message || 'Failed to delete project');
      }
    }
  };

  if (loading) {
    return (
      <div className="container">
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '40px' }}>
      <h1>Projects</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <Link
        to="/admin/projects/new"
        className="btn btn-primary"
        style={{ marginBottom: '20px' }}
      >
        Add New Project
      </Link>

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Completion Date</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Description</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{project.title}</td>
                <td style={{ padding: '10px' }}>
                  {project.completion
                    ? new Date(project.completion).toLocaleDateString()
                    : 'N/A'}
                </td>
                <td style={{ padding: '10px' }}>
                  {project.description
                    ? project.description.length > 50
                      ? `${project.description.substring(0, 50)}...`
                      : project.description
                    : 'No description'}
                </td>
                <td style={{ padding: '10px', textAlign: 'center' }}>
                  <Link
                    to={`/admin/projects/${project.id}`}
                    className="btn"
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(project.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}