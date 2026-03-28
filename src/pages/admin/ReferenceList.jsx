import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getReferences, deleteReference } from '../../services/api';

export default function ReferenceList() {
  const [references, setReferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadReferences();
  }, []);

  const loadReferences = async () => {
    setLoading(true);
    setError('');

    const response = await getReferences();

    if (response.success) {
      setReferences(response.data || []);
    } else {
      setError(response.message || 'Failed to load references');
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this reference?')) {
      const response = await deleteReference(id);

      if (response.success) {
        setMessage('Reference deleted successfully!');
        await loadReferences();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setError(response.message || 'Failed to delete reference');
      }
    }
  };

  if (loading) {
    return (
      <div className="container">
        <p>Loading references...</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '40px' }}>
      <h1>References</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <Link
        to="/admin/references/new"
        className="btn btn-primary"
        style={{ marginBottom: '20px' }}
      >
        Add New Reference
      </Link>

      {references.length === 0 ? (
        <p>No references found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Position</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Company</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {references.map((ref) => (
              <tr key={ref.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>
                  {ref.firstname} {ref.lastname}
                </td>
                <td style={{ padding: '10px' }}>{ref.email}</td>
                <td style={{ padding: '10px' }}>{ref.position}</td>
                <td style={{ padding: '10px' }}>{ref.company}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>
                  <Link
                    to={`/admin/references/${ref.id}`}
                    className="btn"
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(ref.id)}
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