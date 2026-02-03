import React from 'react'

export default function Services() {
  const services = [
    {
      title: 'Web Application Development',
      desc: 'Design and development of responsive, user-focused web applications using HTML, CSS, JavaScript, C#, ASP.NET, and SQL, with attention to usability, clean UI, and maintainable code.',
      icon: '🌐'
    },
    {
      title: 'Backend & Database Development',
      desc: 'Development of backend logic and relational database solutions using C#, ASP.NET, REST APIs, and SQL to support secure data storage, retrieval, and application functionality.',
      icon: '🗄️'
    },
    {
      title: 'Applied Programming & Problem Solving',
      desc: 'General programming support using Python and JavaScript, focused on analytical problem-solving, debugging, scripting, and building reliable, well-documented solutions.',
      icon: '💡'
    },
  ];

  return (
    <section className="services-section">
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>My Services</h1>
          <p className="services-hero-text">
            Professional software development services tailored to bring your ideas to life
          </p>
        </div>
      </div>
      <div className="services-content">
        <p className="services-intro">
          I offer comprehensive software development services with expertise in modern web technologies and best practices.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}