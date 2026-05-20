function Resume({ showOpenButton = true }) {
  const resumeHighlights = [
    'Full Stack Web Developer with 4.5+ years of experience building scalable web applications using Laravel, React, and modern front-end technologies.',
    'Skilled in designing responsive UI, creating RESTful APIs, and delivering polished digital experiences with a strong focus on usability.',
    'Committed to clear communication, efficient problem solving, and building solutions that help teams move quickly and with confidence.'
  ]

  const experiences = [
    {
      title: 'Senior Full Stack Web Developer',
      company: 'Tafsol Technologies (Pvt.) Ltd.',
      date: 'June 2024 – Present',
      bullets: [
        'Built robust Laravel applications and integrated modern front-end experiences using React and Tailwind CSS.',
        'Designed and maintained RESTful APIs with a focus on security, performance and scalability.',
        'Collaborated with product and design teams to deliver user-centered web solutions.'
      ]
    },
    {
      title: 'Senior Front-End Web Developer',
      company: 'Tafsol Technologies (Pvt.) Ltd.',
      date: 'June 2023 – June 2024',
      bullets: [
        'Led delivery of responsive web products using HTML, CSS, JavaScript, and React.',
        'Improved website performance and accessibility for client-facing applications.',
        'Integrated backend services and third-party APIs while optimizing front-end workflows.'
      ]
    },
    {
      title: 'Associate Front-End Web Developer',
      company: 'Tafsol Technologies (Pvt.) Ltd.',
      date: 'December 2021 – August 2023',
      bullets: [
        'Created responsive websites with HTML, CSS, and JavaScript to improve user experience.',
        'Customized WordPress themes and plugins to meet client requirements.',
        'Supported cross-browser compatibility and performance improvements across multiple projects.'
      ]
    },
    {
      title: 'Front-End Developer (Intern)',
      company: 'Tafsol Technologies (Pvt.) Ltd.',
      date: 'September 2021 – December 2021',
      bullets: [
        'Assisted development of user-friendly interfaces with modern front-end practices.',
        'Worked on responsive layouts, usability improvements, and accessibility enhancements.',
        'Collaborated with the team on project planning and quality checks.'
      ]
    }
  ]

  const education = [
    {
      school: 'IQRA UNIVERSITY (Main Campus)',
      program: 'Bachelor of Computer Science',
      date: '2018 – 2022'
    },
    {
      school: 'KBV CAA MODEL COLLEGE',
      program: 'Pre-Engineering',
      date: '2016 – 2017'
    },
    {
      school: 'S.M. PUBLIC ACADEMY',
      program: 'Computer Science',
      date: '2015'
    }
  ]

  const skills = [
    'Laravel', 'PHP', 'React JS', 'Next JS', 'Nuxt JS', 'JavaScript', 'Tailwind', 'Bootstrap', 'HTML5', 'CSS3', 'SCSS', 'MySQL', 'REST API', 'MODX', 'Webflow', 'WordPress', 'Shopify', 'Wix', 'Git'
  ]

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title"><span className="title-accent">My</span> Resume</h2>
          <div className="title-underline"></div>
        </div>

        {/* <div className="resume-intro fade-in">
          <p>
            I am a dedicated developer with a strong background in full-stack web development.
            I love solving complex problems, building scalable solutions, and creating user-friendly digital experiences.
          </p>
          <ul className="resume-highlight-list">
            {resumeHighlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div> */}

        <div className="resume-card">
          <div className="resume-sidebar fade-in">
            <div className="resume-profile-card">
              <div className="resume-profile-avatar">RM</div>
              <h3>Rameel Mirza</h3>
              <p>Full Stack Web Developer</p>
            </div>

            <div className="resume-box">
              <h4>Contact</h4>
              <p>📞 +92 336 3062738</p>
              <p>✉️ rameelmirza5@gmail.com</p>
              <p>📍 Karachi, Pakistan</p>
              <p>🔗 linkedin.com/in/rameelmirza</p>
            </div>

            <div className="resume-box">
              <h4>Skills</h4>
              <div className="resume-skill-list">
                {skills.map((skill) => (
                  <span key={skill} className="resume-skill-pill">{skill}</span>
                ))}
              </div>
            </div>

            <div className="resume-box">
              <h4>Languages</h4>
              <p>English — Intermediate</p>
              <p>Urdu — Fluent</p>
            </div>
          </div>

          <div className="resume-main fade-in">
            <section className="resume-block">
              <h3>Profile</h3>
              <p>
                Experienced Full Stack Web Developer with 4.5+ years of experience in Laravel, React,
                and responsive web development. I build fast, scalable applications with strong focus
                on usability, architecture, and maintainability.
              </p>
            </section>

            <section className="resume-block">
              <h3>Experience</h3>
              <div className="timeline">
                {experiences.map((item) => (
                  <div key={item.title} className="timeline-entry">
                    <div className="timeline-marker"></div>
                    <div>
                      <h4>{item.title}</h4>
                      <p className="timeline-meta">{item.company} · {item.date}</p>
                      <ul>
                        {item.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-block">
              <h3>Education</h3>
              <div className="education-grid">
                {education.map((item) => (
                  <div key={item.school} className="education-card">
                    <h4>{item.school}</h4>
                    <p>{item.program}</p>
                    <p className="education-date">{item.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        {/* {showOpenButton && (
          <div className="resume-action fade-in">
            <a href="/#resume-page" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open Full Resume
            </a>
          </div>
        )} */}
      </div>
    </section>
  )
}

export default Resume
