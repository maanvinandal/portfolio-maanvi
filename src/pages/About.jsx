import React from 'react'

export default 
function About() 
{ return ( <section> <h1>Meet Me</h1> 
<img src="/images/maanvi.jpeg" alt="Maanvi" style={{ width: 160, borderRadius: 8 }} />


          <p>
            My name is Maanvi, and I am currently in my third semester of the
            <strong> Software Engineering Technology </strong>
            program. I am new to the world of artificial intelligence, but I am
            highly motivated to learn and grow in this field.
          </p>

          <p>
            I have a strong interest in coding and problem-solving, and my goal
            is to build a successful career in software development and modern
            technology.
          </p>

          <a
            href="/Resume_Maanvi.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download My Resume (PDF)
          </a>
       

      
    </section> ); }
