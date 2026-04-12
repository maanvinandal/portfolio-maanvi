import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

// Admin Components
import UserList from './pages/admin/UserList';
import UserForm from './pages/admin/UserForm';
import ProjectList from './pages/admin/ProjectList';
import ProjectForm from './pages/admin/ProjectForm';
import ServiceList from './pages/admin/ServiceList';
import ServiceForm from './pages/admin/ServiceForm';
import ReferenceList from './pages/admin/ReferenceList';
import ReferenceForm from './pages/admin/ReferenceForm';
import Dashboard from './pages/Dashboard';

import './App.css';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="site-main">
        
        <Routes>
          {/* Portfolio Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth Pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Admin Users */}
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users/new"
            element={
              <ProtectedRoute>
                <UserForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users/:id"
            element={
              <ProtectedRoute>
                <UserForm />
              </ProtectedRoute>
            }
          />

          {/* Admin Projects */}
          <Route
            path="/admin/projects"
            element={
              <ProtectedRoute>
                <ProjectList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects/new"
            element={
              <ProtectedRoute>
                <ProjectForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects/:id"
            element={
              <ProtectedRoute>
                <ProjectForm />
              </ProtectedRoute>
            }
          />

          {/* Admin Services */}
          <Route
            path="/admin/services"
            element={
              <ProtectedRoute>
                <ServiceList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/services/new"
            element={
              <ProtectedRoute>
                <ServiceForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/services/:id"
            element={
              <ProtectedRoute>
                <ServiceForm />
              </ProtectedRoute>
            }
          />

          {/* Admin References */}
          <Route
            path="/admin/references"
            element={
              <ProtectedRoute>
                <ReferenceList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/references/new"
            element={
              <ProtectedRoute>
                <ReferenceForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/references/:id"
            element={
              <ProtectedRoute>
                <ReferenceForm />
              </ProtectedRoute>
            }
          />
          <Route
          path="/dashboard"
          element={
             <ProtectedRoute>
             <Dashboard />
            </ProtectedRoute>
            }
/>
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Available for software development and UX/UI collaborations.</p>
          <p className="footer-meta">(c) 2026 Maanvi Nandal. Crafted with care.</p>
        </div>
      </footer>
    </div>
  );
}