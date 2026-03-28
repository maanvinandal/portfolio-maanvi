import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices, deleteService } from '../../services/api';

export default function ServiceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);
    setError('');
    const response = await getServices();
    
    if (response.success) {
      setServices(response.data.data || []);
    } else {
      setError('Failed to load services');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this service?')) {
      const response = await deleteService(id);
      
      if (response.success) {
        setMessage('Service deleted successfully!');
        loadServices();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setError('Failed to delete service');
      }
    }
  };

  if (loading) return <div className="container"><p>Loading services...</p></div>;

  return (
    <div className="container" style={{ marginTop: '40px' }}>
      <h1>Services</h1>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      
      <Link to="/admin/services/new" className="btn btn-primary" style={{ marginBottom: '20px' }}>
        Add New Service
      </Link>

      {services.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Description</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service._id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{service.title}</td>
                <td style={{ padding: '10px' }}>{service.description?.substring(0, 50)}...</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>
                  <Link to={`/admin/services/${service._id}`} className="btn" style={{ marginRight: '10px' }}>
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(service._id)}
                    style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', cursor: 'pointer' }}
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
