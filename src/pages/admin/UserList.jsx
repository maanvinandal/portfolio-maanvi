import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../../services/api';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    setError('');

    const response = await getUsers();

    if (response.success) {
      setUsers(response.data || []);
    } else {
      setError(response.message || 'Failed to load users');
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const response = await deleteUser(id);

      if (response.success) {
        setMessage('User deleted successfully!');
        await loadUsers();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setError(response.message || 'Failed to delete user');
      }
    }
  };

  if (loading) {
    return (
      <div className="container">
        <p>Loading users...</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: '40px' }}>
      <h1>Users</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <Link to="/admin/users/new" className="btn btn-primary" style={{ marginBottom: '20px' }}>
        Add New User
      </Link>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>First Name</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Last Name</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
              <th style={{ padding: '10px', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px' }}>{user.firstname}</td>
                <td style={{ padding: '10px' }}>{user.lastname}</td>
                <td style={{ padding: '10px' }}>{user.email}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>
                  <Link to={`/admin/users/${user.id}`} className="btn" style={{ marginRight: '10px' }}>
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
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