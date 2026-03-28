import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'

// Admin Components
import UserList from './pages/admin/UserList'
import UserForm from './pages/admin/UserForm'
import ProjectList from './pages/admin/ProjectList'
import ProjectForm from './pages/admin/ProjectForm'
import ServiceList from './pages/admin/ServiceList'
import ServiceForm from './pages/admin/ServiceForm'
import ReferenceList from './pages/admin/ReferenceList'
import ReferenceForm from './pages/admin/ReferenceForm'

import './App.css'

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

          {/* Admin Users */}
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/users/new" element={<UserForm />} />
          <Route path="/admin/users/:id" element={<UserForm />} />

          {/* Admin Projects */}
          <Route path="/admin/projects" element={<ProjectList />} />
          <Route path="/admin/projects/new" element={<ProjectForm />} />
          <Route path="/admin/projects/:id" element={<ProjectForm />} />

          {/* Admin Services */}
          <Route path="/admin/services" element={<ServiceList />} />
          <Route path="/admin/services/new" element={<ServiceForm />} />
          <Route path="/admin/services/:id" element={<ServiceForm />} />

          {/* Admin References */}
          <Route path="/admin/references" element={<ReferenceList />} />
          <Route path="/admin/references/new" element={<ReferenceForm />} />
          <Route path="/admin/references/:id" element={<ReferenceForm />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Available for software development and UX/UI collaborations.</p>
          <p className="footer-meta">(c) 2026 Maanvi Nandal. Crafted with care.</p>
        </div>
      </footer>
    </div>
  )
}
