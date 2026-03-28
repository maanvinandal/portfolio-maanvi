import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getReferenceById, createReference, updateReference } from '../../services/api';

export default function ReferenceForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    position: '',
    company: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing) {
      loadReference();
    }
  }, [id]);

  const loadReference = async () => {
    setLoading(true);
    const response = await getReferenceById(id);
    
    if (response.success) {
      setFormData(response.data.data);
    } else {
      setError('Failed to load reference');
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
      response = await updateReference(id, formData);
    } else {
      response = await createReference(formData);
    }

    if (response.success) {
      setMessage(isEditing ? 'Reference updated successfully!' : 'Reference created successfully!');
      setTimeout(() => navigate('/admin/references'), 1500);
    } else {
      setError(response.error || 'Failed to save reference');
    }
    setLoading(false);
  };

  if (loading && isEditing) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="container" style={{ marginTop: '40px', maxWidth: '500px' }}>
      <h1>{isEditing ? 'Edit Reference' : 'Add New Reference'}</h1>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>First Name *</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Last Name *</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Position *</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Company *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {loading ? 'Saving...' : isEditing ? 'Update Reference' : 'Create Reference'}
        </button>
      </form>
    </div>
  );
}
