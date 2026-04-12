import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <section className="page">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Dashboard</p>
          <h1>Welcome {user?.name || 'User'}</h1>
          <p>Manage your portfolio content from here.</p>
        </div>

        <div className="services-grid">
          <Link to="/admin/projects" className="service-card">
            <h3>Manage Projects</h3>
            <p>Add, edit, or delete your projects.</p>
          </Link>

          <Link to="/admin/services" className="service-card">
            <h3>Manage Services</h3>
            <p>Add, edit, or delete services.</p>
          </Link>

          <Link to="/admin/references" className="service-card">
            <h3>Manage References</h3>
            <p>Add, edit, or delete references.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
