import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getServiceById, createService, updateService } from '../../services/api';

export default function ServiceForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      loadService();
    }
  }, [id]);

  const loadService = async () => {
    setLoading(true);
    const response = await getServiceById(id);
    
    if (response.success) {
      setFormData(response.data.data);
    } else {
      setError('Failed to load service');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    let response;
    if (isEditing) {
      response = await updateService(id, formData);
    } else {
      response = await createService(formData);
    }

    if (response.success) {
      setMessage(isEditing ? 'Service updated successfully!' : 'Service created successfully!');
      setTimeout(() => navigate('/admin/services'), 1500);
    } else {
      setError(response.error || 'Failed to save service');
    }
    setLoading(false);
  };

  if (loading && isEditing) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="container" style={{ marginTop: '40px', maxWidth: '500px' }}>
      <h1>{isEditing ? 'Edit Service' : 'Add New Service'}</h1>
      
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
          {loading ? 'Saving...' : isEditing ? 'Update Service' : 'Create Service'}
        </button>
      </form>
    </div>
  );
}
