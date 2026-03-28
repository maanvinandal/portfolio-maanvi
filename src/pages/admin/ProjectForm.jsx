import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById, createProject, updateProject } from '../../services/api';

export default function ProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    completion: 0,
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      loadProject();
    }
  }, [id]);

  const loadProject = async () => {
    setLoading(true);
    const response = await getProjectById(id);
    
    if (response.success) {
      setFormData(response.data.data);
    } else {
      setError('Failed to load project');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'completion' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    let response;
    if (isEditing) {
      response = await updateProject(id, formData);
    } else {
      response = await createProject(formData);
    }

    if (response.success) {
      setMessage(isEditing ? 'Project updated successfully!' : 'Project created successfully!');
      setTimeout(() => navigate('/admin/projects'), 1500);
    } else {
      setError(response.error || 'Failed to save project');
    }
    setLoading(false);
  };

  if (loading && isEditing) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="container" style={{ marginTop: '40px', maxWidth: '500px' }}>
      <h1>{isEditing ? 'Edit Project' : 'Add New Project'}</h1>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Completion Percentage (0-100) *</label>
          <input
            type="number"
            name="completion"
            value={formData.completion}
            onChange={handleChange}
            min="0"
            max="100"
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', fontFamily: 'Arial' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {loading ? 'Saving...' : isEditing ? 'Update Project' : 'Create Project'}
        </button>
      </form>
    </div>
  );
}
