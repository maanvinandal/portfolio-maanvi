import React, { useEffect, useState } from 'react';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../api';

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    role: '',
    status: '',
    link: '',
  });

  const [message, setMessage] = useState('');

  const loadProjects = async () => {
    const result = await getProjects();
    if (Array.isArray(result)) {
      setProjects(result);
    } else if (result.projects) {
      setProjects(result.projects);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      role: '',
      status: '',
      link: '',
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    let result;
    if (editingId) {
      result = await updateProject(editingId, formData);
      setMessage(result.message || 'Project updated successfully');
    } else {
      result = await createProject(formData);
      setMessage(result.message || 'Project added successfully');
    }

    resetForm();
    loadProjects();
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title || '',
      description: project.description || '',
      image: project.image || '',
      role: project.role || '',
      status: project.status || '',
      link: project.link || '',
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if (!confirmDelete) return;

    const result = await deleteProject(id);
    setMessage(result.message || 'Project deleted successfully');
    loadProjects();
  };

  return (
    <section className="page">
      <div className="container">
        <div className="section-heading">
          <h1>Manage Projects</h1>
          <p>Add, edit, and delete portfolio projects.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL or path"
            value={formData.image}
            onChange={handleChange}
          />

          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
          />

          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
          />

          <input
            type="text"
            name="link"
            placeholder="Project Link"
            value={formData.link}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-primary">
            {editingId ? 'Update Project' : 'Add Project'}
          </button>

          {editingId && (
            <button type="button" className="btn btn-ghost" onClick={resetForm}>
              Cancel Edit
            </button>
          )}
        </form>

        {message && <p className="success-text">{message}</p>}

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="service-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Status:</strong> {project.status}</p>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button className="btn btn-primary" onClick={() => handleEdit(project)}>
                  Edit
                </button>
                <button className="btn btn-ghost" onClick={() => handleDelete(project._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}