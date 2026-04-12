import React, { useState } from 'react';
import { signupUser } from '../services/api.js';
import { useNavigate, Link } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  firstname: '',
  lastname: '',
  email: '',
  password: '',
});

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const result = await signupUser(formData);

    if (result.success === false) {
      setError(result.message || 'Sign up failed');
      return;
    }

    setMessage('Account created successfully. Please sign in.');
    setTimeout(() => navigate('/signin'), 1200);
  };

  return (
    <section className="page">
      <div className="container auth-container">
        <div className="auth-card">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit} className="auth-form">
  <input
    type="text"
    name="firstname"
    placeholder="First Name"
    value={formData.firstname}
    onChange={handleChange}
    required
  />

  <input
    type="text"
    name="lastname"
    placeholder="Last Name"
    value={formData.lastname}
    onChange={handleChange}
    required
  />

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
    Create Account
  </button>
</form>

          {message && <p className="success-text">{message}</p>}
          {error && <p className="error-text">{error}</p>}

          <p>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>
        </div>
      </div>
    </section>
  );
}