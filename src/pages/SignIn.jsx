import React, { useState } from 'react';
import { signinUser } from '../services/api.js';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const result = await signinUser(formData);

    if (result.success === false) {
      setError(result.message || 'Sign in failed');
      return;
    }

    login(result);
    navigate('/admin/projects');
  };

  return (
    <section className="page">
      <div className="container auth-container">
        <div className="auth-card">
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>

          {error && <p className="error-text">{error}</p>}

          <p>
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}