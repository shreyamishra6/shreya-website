import './Work.css'

const projects = [
  {
    no: '01',
    name: 'Neural Atlas',
    type: 'INTERPRETABLE ARTIFICIAL INTELLIGENCE',
    description:
      'An interpretability framework for mapping internal representations in large neural networks, making complex model behaviour easier to investigate.',
    contribution: 'RESEARCH & MODEL DEVELOPMENT',
    tech: 'PYTORCH · PYTHON · TRANSFORMERS',
    impact: 'MODEL INTERPRETABILITY',
    featured: true,
  },
  {
    no: '02',
    name: 'Synapse',
    type: 'DISTRIBUTED SYSTEMS',
    description:
      'A fault-tolerant event-processing architecture designed for high-throughput, real-time distributed applications.',
    contribution: 'SYSTEM ARCHITECTURE',
    tech: 'GO · KAFKA · REDIS',
    impact: 'HIGH-THROUGHPUT SYSTEMS',
    featured: false,
  },
  {
    no: '03',
    name: 'Aether',
    type: 'COMPUTER VISION',
    description:
      'A multimodal perception system combining visual and spatial information for real-time scene understanding.',
    contribution: 'ENGINEERING & RESEARCH',
    tech: 'PYTHON · PYTORCH · OPENCV',
    impact: 'REAL-TIME PERCEPTION',
    featured: false,
  },
]

const experience = [
  {
    date: '2026',
    role: 'Research Intern',
    company: 'Stanford HAI',
    description:
      'Investigated interpretability methods for large-scale neural networks and contributed to ongoing research.',
    type: 'RESEARCH',
  },
  {
    date: '2025',
    role: 'Software Engineer Intern',
    company: 'Google',
    description:
      'Worked on backend infrastructure, performance optimisation and scalable software systems.',
    type: 'ENGINEERING',
  },
  {
    date: '2025',
    role: 'Open Source Contributor',
    company: 'Google Summer of Code',
    description:
      'Designed and implemented features for an established open-source software project.',
    type: 'OPEN SOURCE',
  },
]

const publications = [
  {
    year: '2026',
    title: 'Towards Interpretable Representations in Deep Neural Networks',
    venue: 'NeurIPS',
    authorship: 'FIRST AUTHOR',
  },
  {
    year: '2026',
    title: 'Efficient Learning for Large-Scale Distributed Systems',
    venue: 'ICML',
    authorship: 'CO-AUTHOR',
  },
]

const achievements = [
  {
    title: 'ICPC Regional Finalist',
    detail: 'International Collegiate Programming Contest',
  },
  {
    title: 'International Hackathon Winner',
    detail: 'Global Innovation Challenge',
  },
  {
    title: 'Google Summer of Code',
    detail: 'Selected open-source contributor',
  },
  {
    title: 'Undergraduate Research Fellowship',
    detail: 'Awarded for research excellence',
  },
]

const leadership = [
  {
    role: 'Technical Club President',
    detail: 'Led a 40+ member student technology community.',
  },
  {
    role: 'Open Source Mentor',
    detail: 'Mentored developers through collaborative projects.',
  },
  {
    role: 'Hackathon Organiser',
    detail: 'Built and organised university-wide developer events.',
  },
]

const skills = [
  'Python',
  'C++',
  'Java',
  'TypeScript',
  'PyTorch',
  'TensorFlow',
  'React',
  'Next.js',
  'PostgreSQL',
  'Redis',
  'Docker',
  'AWS',
]

const interests = [
  'Machine Learning',
  'Human-Centred AI',
  'Distributed Systems',
  'Computer Vision',
]

function Work() {
  return (
    <div className="work-page">
      <header className="work-header">
        <a href="/" className="work-logo">
          SM<span>.</span>
        </a>

        <div className="work-header-label">
          COMPUTER SCIENCE / SELECTED WORK
        </div>

        <nav className="work-nav">
          <a
            href="https://github.com/shreyamishra24"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>

          <a
            href="https://www.linkedin.com/in/shreyapuff/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN ↗
          </a>

          <a href="mailto:hello@shreyamishra.dev">
            CONTACT ↗
          </a>

          <a href="#" className="work-cv">
            CV ↓
          </a>
        </nav>
      </header>

      <div className="work-layout">
        <aside className="work-sidebar">
          <section className="profile-panel">
            <span className="eyebrow">01 / PROFILE</span>

            <h1>
              Shreya
              <br />
              Mishra<span>.</span>
            </h1>

            <p className="profile-description">
              Computer scientist exploring intelligent systems,
              machine learning and the engineering behind them.
            </p>

            <div className="profile-tags">
              <span>ENGINEERING</span>
              <span>RESEARCH</span>
              <span>OPEN SOURCE</span>
            </div>

            <div className="profile-education">
              <span className="eyebrow">EDUCATION</span>

              <h3>B.Tech · Computer Science</h3>

              <p>Manipal University Jaipur · 2024—2028</p>

              <div className="education-meta">
                <div>
                  <strong>9.8</strong>
                  <span>CGPA / 10</span>
                </div>

                <div>
                  <strong>01</strong>
                  <span>UNDERGRADUATE</span>
                </div>
              </div>
            </div>
          </section>

          <section className="research-panel">
            <div className="section-heading">
              <span className="eyebrow">02 / RESEARCH FOCUS</span>
            </div>

            <div className="interest-list">
              {interests.map((interest, index) => (
                <div key={interest}>
                  <span className="interest-number">
                    0{index + 1}
                  </span>

                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="skills-panel">
            <div className="section-heading">
              <span className="eyebrow">03 / TECHNICAL TOOLKIT</span>
            </div>

            <div className="skills-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>
        </aside>

        <main className="work-main">
          <section className="projects-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">04 / SELECTED WORK</span>
                <h2>
                  Building things
                  <br />
                  that matter<span>.</span>
                </h2>
              </div>

              <span className="section-index">01 — 03</span>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article
                  className={`project-card ${
                    project.featured ? 'project-featured' : ''
                  }`}
                  key={project.no}
                >
                  <div className="project-top">
                    <span>{project.no} / PROJECT</span>
                    <span className="project-arrow">↗</span>
                  </div>

                  <span className="project-type">
                    {project.type}
                  </span>

                  <h3>{project.name}</h3>

                  <p>{project.description}</p>

                  <div className="project-details">
                    <span className="project-contribution">
                      {project.contribution}
                    </span>

                    <span className="project-impact">
                      {project.impact}
                    </span>
                  </div>

                  <div className="project-bottom">
                    <span>{project.tech}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="experience-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">05 / EXPERIENCE</span>
                <h2>
                  Selected experience<span>.</span>
                </h2>
              </div>
            </div>

            <div className="experience-list">
              {experience.map((item) => (
                <article
                  className="experience-item"
                  key={item.company}
                >
                  <span className="experience-date">
                    {item.date}
                  </span>

                  <div className="experience-details">
                    <h3>{item.role}</h3>
                    <span>{item.company}</span>
                  </div>

                  <p className="experience-description">
                    {item.description}
                  </p>

                  <span className="experience-type">
                    {item.type}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className="publications-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">06 / RESEARCH OUTPUT</span>
                <h2>
                  Publications<span>.</span>
                </h2>
              </div>

              <span className="section-index">2026</span>
            </div>

            <div className="research-publications">
              {publications.map((publication) => (
                <article
                  className="publication-item"
                  key={publication.title}
                >
                  <span className="publication-year">
                    {publication.year}
                  </span>

                  <div>
                    <h3>{publication.title}</h3>

                    <p>
                      {publication.venue}
                      <span> / {publication.authorship}</span>
                    </p>
                  </div>

                  <span className="publication-arrow">↗</span>
                </article>
              ))}
            </div>
          </section>
        </main>

        <section className="bottom-grid">
          <div className="bottom-panel">
            <div className="section-heading">
              <div>
                <span className="eyebrow">07 / RECOGNITION</span>
                <h2>
                  Achievements<span>.</span>
                </h2>
              </div>
            </div>

            <div className="achievement-list">
              {achievements.map((achievement, index) => (
                <article
                  className="achievement-item"
                  key={achievement.title}
                >
                  <span className="achievement-number">
                    0{index + 1}
                  </span>

                  <div>
                    <strong>{achievement.title}</strong>
                    <p>{achievement.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="bottom-panel">
            <div className="section-heading">
              <div>
                <span className="eyebrow">08 / COMMUNITY</span>
                <h2>
                  Leadership<span>.</span>
                </h2>
              </div>
            </div>

            <div className="leadership-list">
              {leadership.map((item) => (
                <article
                  className="leadership-item"
                  key={item.role}
                >
                  <strong>{item.role}</strong>
                  <span>{item.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="work-footer">
        <span>SHREYA MISHRA © 2026</span>
        <span>BUILT WITH CURIOSITY & INTENTION</span>
        <a href="mailto:hello@shreyamishra.dev">
          LET'S CONNECT ↗
        </a>
      </footer>
    </div>
  )
}

export default Work