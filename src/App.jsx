import { useState, useEffect, useRef } from 'react'
import './App.css'
import Resume from './Resume.jsx'
import ResumePage from './ResumePage.jsx'
import { SiJavascript, SiReact, SiHtml5, SiSass, SiGit, SiBootstrap, SiTailwindcss, SiPhp, SiLaravel, SiNodedotjs, SiPython, SiPostgresql, SiWordpress, SiShopify, SiWix, SiModx, SiWebflow, SiFigma } from 'react-icons/si'

const SkillIcon = ({ skillName }) => {
  const iconColors = {
    'JavaScript': '#F7DF1E',
    'React': '#61DAFB',
    'HTML': '#E34C26',
    'CSS/SCSS/SASS': '#CC6699',
    'Git': '#F1502F',
    'Bootstrap': '#7952B3',
    'Tailwind CSS': '#06B6D4',
    'PHP': '#777BB4',
    'PHP Laravel': '#FF2D20',
    'Node.js': '#339933',
    'Python': '#3776AB',
    'SQL': '#336791',
    'WordPress': '#21759B',
    'Shopify': '#96BE28',
    'Wix': '#FFB81C',
    'MODX': '#ff5529',
    'Webflow': '#146ef5',
    'Figma': '#F24E1E'
  }

  const icons = {
    'JavaScript': <SiJavascript />,
    'React': <SiReact />,
    'HTML': <SiHtml5 />,
    'CSS/SCSS/SASS': <SiSass />,
    'Git': <SiGit />,
    'Bootstrap': <SiBootstrap />,
    'Tailwind CSS': <SiTailwindcss />,
    'PHP': <SiPhp />,
    'PHP Laravel': <SiLaravel />,
    'Node.js': <SiNodedotjs />,
    'Python': <SiPython />,
    'SQL': <SiPostgresql />,
    'WordPress': <SiWordpress />,
    'Shopify': <SiShopify />,
    // 'Wix': <SiWordpress />,
    'Wix': <SiWix />,
    // 'MODX': <SiPhp />
    'MODX': <SiModx />,
    'Webflow': <SiWebflow />,
    'Figma': <SiFigma />
    // 'Photoshop': <SiAdobe />,
    // 'Adobe XD': <SiAdobexd />
  }
  
  const Icon = icons[skillName]
  const color = iconColors[skillName]
  
  return Icon ? <span style={{ color }}>{Icon}</span> : null
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [activeHash, setActiveHash] = useState(window.location.hash)
  const [isLoading, setIsLoading] = useState(true)
  const [navbarScrolled, setNavbarScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 85 },
    { name: 'HTML', level: 100 },
    { name: 'CSS/SCSS/SASS', level: 100 },
    { name: 'Git', level: 85 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'PHP', level: 80 },
    { name: 'PHP Laravel', level: 80 },
    { name: 'Node.js', level: 30 },
    { name: 'Python', level: 30 },
    { name: 'SQL', level: 60 },
    { name: 'WordPress', level: 80 },
    { name: 'Shopify', level: 70 },
    { name: 'Wix', level: 70 },
    { name: 'MODX', level: 50 },
    { name: 'Webflow', level: 50 },
    { name: 'Figma', level: 50 }
    // { name: 'Photoshop', level: 40 },
    // { name: 'Adobe XD', level: 50 }
  ]

  const projects = [
    {
      title: 'Industrial Website',
      description: 'Modern corporate website revamp for an insulation & foam solutions company. Redesigned and revamped multiple webpages with improved UI/UX, responsive layouts, and optimized performance using MODX CMS.',
      tech: ['MODX', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: '#',
      demo: 'https://www.igloofoam.com/',
      image: '/images/Igloo.png'
    },
    {
      title: 'Travel Agency Website',
      description: 'Professional travel agency website developed on WordPress with customized pages, tour packages, booking inquiry flows, and responsive design for a seamless travel planning experience.',
      tech: ['WordPress', 'Elementor', 'PHP', 'MySQL', 'Responsive Design'],
      github: '#',
      demo: 'http://alrahla.com.pk/',
      image: '📊'
    },
    {
      title: 'AI-Powered Shopify Store',
      description: 'Developed a modern Shopify-based e-commerce store for nail products with AI-powered virtual try-on functionality, allowing users to upload hand images and preview multiple nail styles in real-time through AI integration.',
      tech: ['Shopify', 'AI Integration', 'Liquid', 'E-Commerce'],
      github: '#',
      demo: 'https://nail-ve.com/',
      image: '/images/nail-ve.png'
    },
    {
      title: 'Custom Booking Platform',
      description: 'Developed a large-scale multilingual booking platform for accommodations, vehicles, boats, and tour experiences similar to Airbnb. Built on Laravel with advanced booking workflows, multilingual support, and scalable architecture.',
      tech: ['Laravel', 'PHP', 'MySQL', 'REST API'],
      github: '#',
      demo: 'https://luxustars.com/',
      image: '/images/luxustars.png'
    },
    {
      title: 'Luxury Chauffeur Booking Platform',
      description: 'Developed the frontend for a luxury limousine and chauffeur booking platform with a modern, responsive user experience, while collaborating with the Laravel backend team.',
      tech: ['Laravel', 'Frontend Development', 'Responsive Design'],
      github: '#',
      demo: 'https://empirelimousines.com/',
      image: '/images/empire.png'
    }
  ]

  const particlesRef = useRef(null)

  useEffect(() => {
    // Enhanced loading animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    // Mouse movement tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Scroll progress tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)
      setNavbarScrolled(scrollTop > 50)

      // Update active section
      const sections = ['home', 'about', 'resume', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    // Create floating particles
    const createParticles = () => {
      if (!particlesRef.current) return

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 20 + 's'
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
        particlesRef.current.appendChild(particle)
      }
    }

    // Enhanced intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate')
          }, index * 100)
        }
      })
    }, observerOptions)

    // Observe elements
    setTimeout(() => {
      const animateElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in')
      animateElements.forEach(el => observer.observe(el))
    }, 100)

    const handleHashChange = () => setActiveHash(window.location.hash)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('hashchange', handleHashChange)
    handleScroll()
    createParticles()

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('hashchange', handleHashChange)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (activeHash === '#resume-page') {
    return <ResumePage />
  }

  return (
    <>
      {/* Enhanced Loading Screen */}
      {isLoading && (
        <div className="loading">
          <div className="loading-content">
            <div className="loading-logo">
              <img src="/images/logo.png" alt="Rameel Mirza" className="loading-logo-image" />
              {/* <div className="loading-spinner"></div> */}
            </div>
            <div className="loading-progress">
              <div className="progress-bar"></div>
            </div>
          </div>
        </div>
      )}

      <div className="portfolio">
        {/* Floating Particles Background */}
        <div className="particles-container" ref={particlesRef}></div>

        {/* Scroll Progress Bar */}
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

        {/* Interactive Cursor Effect */}
        <div
          className="cursor-effect"
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10
          }}
        ></div>

        {/* Enhanced Navigation */}
        <nav className={`navbar ${navbarScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <div className="nav-brand" onClick={() => scrollToSection('home')}>
              <img src="/images/logo.png" alt="Rameel Mirza" className="nav-brand-logo" />
              <span className="brand-text">Rameel</span>
              <span className="brand-accent">Mirza</span>
            </div>
            <ul className="nav-menu">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'resume', label: 'Resume' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                  >
                    <span className="nav-dot"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className={`nav-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(v => !v)}
              role="button"
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>

        {/* Mobile full-screen menu */}
        <div
          className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => { if (e.target === e.currentTarget) setMobileMenuOpen(false) }}
          role="dialog"
          aria-hidden={!mobileMenuOpen}
        >
          <div className="mobile-menu-decor">
            <div className="menu-bubble bubble-1" />
            <div className="menu-bubble bubble-2" />
            <div className="menu-bubble bubble-3" />
            <div className="menu-bubble bubble-4" />
            <div className="menu-bubble bubble-5" />
            <div className="menu-bubble bubble-6" />
          </div>
          <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">×</button>
          <ul className="mobile-menu-list">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'resume', label: 'Resume' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id} className="mobile-menu-item">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); scrollToSection(item.id) }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Section with Parallax */}
        <section id="home" className="hero-section">
          <div className="hero-background">
            <div className="hero-gradient"></div>
            <div className="hero-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-greeting fade-in">
                <span className="greeting-text">Hello, I'm</span>
              </div>
              <h1 className="hero-title">
                <span className="title-main fade-in">Rameel</span>
                <span className="title-accent fade-in">Mirza</span>
              </h1>
              <div className="hero-subtitle fade-in">
                <span className="subtitle-text">Full Stack Developer</span>
                {/* <span className="subtitle-cursor">|</span> */}
              </div>
              <p className="hero-description fade-in">
                Crafting digital experiences with modern technologies and creative solutions
              </p>
              <div className="hero-actions fade-in">
                <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                  <span>View My Work</span>
                  <div className="btn-glow"></div>
                </button>
                {/* <button className="btn btn-secondary" onClick={() => scrollToSection('resume')}>
                  <span>View Resume</span>
                </button> */}
                <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="profile-container">
                <div className="profile-glow"></div>
                <div className="profile-image">
                  <div className="profile-placeholder">
                    <span className="profile-icon">👨‍💻</span>
                    <div className="profile-particles">
                      <div className="particle particle-1"></div>
                      <div className="particle particle-2"></div>
                      <div className="particle particle-3"></div>
                    </div>
                  </div>
                </div>
                <div className="profile-stats">
                  <div className="stat-item">
                    <span className="stat-number">4.5+</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-scroll">
            <div className="scroll-indicator">
              <span>Scroll Down</span>
              <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="section-background">
            <div className="bg-shape bg-shape-1"></div>
            <div className="bg-shape bg-shape-2"></div>
          </div>

          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-accent">About</span> Me
              </h2>
              <div className="title-underline"></div>
            </div>

            <div className="about-content">
              <div className="about-text">
                <div className="text-block fade-in">
                  <p>
                    I'm a passionate full-stack developer who loves creating innovative solutions
                    and bringing ideas to life through code. With expertise in modern web technologies,
                    I craft digital experiences that are both functional and beautiful.
                  </p>
                </div>
                <div className="text-block fade-in">
                  <p>
                    My journey in software development has equipped me with a diverse skill set
                    and a problem-solving mindset. I enjoy working on challenging projects that
                    push the boundaries of what's possible.
                  </p>
                </div>
              </div>

              <div className="about-stats">
                <div className="stats-grid">
                  <div className="stat-card scale-in">
                    <div className="stat-icon">🚀</div>
                    <div className="stat-content">
                      <h3>4.5+</h3>
                      <p>Years Experience</p>
                    </div>
                  </div>
                  <div className="stat-card scale-in">
                    <div className="stat-icon">💼</div>
                    <div className="stat-content">
                      <h3>50+</h3>
                      <p>Projects Completed</p>
                    </div>
                  </div>
                  <div className="stat-card scale-in">
                    <div className="stat-icon">🎯</div>
                    <div className="stat-content">
                      <h3>15+</h3>
                      <p>Technologies Mastered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Resume />

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-accent">Skills</span> & Technologies
              </h2>
              <div className="title-underline"></div>
            </div>

            <div className="skills-showcase">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-card">
                    <div className="skill-header">
                      <span className="skill-icon"><SkillIcon skillName={skill.name} /></span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-accent">My</span> Projects
              </h2>
              <div className="title-underline"></div>
            </div>

            <div className="projects-showcase">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="project-item scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="project-card">
                    <div className="project-visual">
                      <div className="project-image">
                        {project.image && /\.(png|jpe?g|svg|webp)$/i.test(project.image) ? (
                          <img src={project.image} alt={project.title} className="project-image-asset" />
                        ) : (
                          <span className="project-emoji">{project.image}</span>
                        )}
                      </div>
                      <div className="project-overlay">
                        <div className="project-links">
                          <a href={project.github} className="project-link">
                            <span>GitHub</span>
                          </a>
                          <a href={project.demo} className="project-link primary">
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-accent">Get In</span> Touch
              </h2>
              <div className="title-underline"></div>
            </div>

            <div className="contact-content">
              <div className="contact-info slide-in-left">
                <div className="contact-message">
                  <h3>Let's Work Together</h3>
                  <p>
                    I'm always excited to take on new challenges and collaborate on interesting projects.
                    Whether you have a project in mind or just want to connect, feel free to reach out!
                  </p>
                </div>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div className="contact-text">
                      <span className="contact-label">Email: </span>
                      <span className="contact-value">rameelmirza5@gmail.com</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-text">
                      <span className="contact-label">Location: </span>
                      <span className="contact-value">Karachi, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-links slide-in-right">
                <h3>Connect With Me</h3>
                <div className="social-grid">
                  {[
                    { name: 'GitHub', icon: '🐙', url: 'https://github.com/rameelmirza' },
                    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/rameelmirza' },
                    { name: 'Twitter', icon: '🐦', url: 'https://x.com/RameelMirza1' },
                    { name: 'Instagram', icon: '📸', url: 'https://www.instagram.com/rameel_mirza' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <span className="brand-text">Rameel</span>
                <span className="brand-accent">Mirza</span>
              </div>
              <div className="footer-links">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                <a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}>Resume</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
              </div>
              <div className="footer-copyright">
                <p>&copy; 2026 Rameel Mirza. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App