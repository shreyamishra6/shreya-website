import './Work.css'

const interests = [
  'Machine Learning',
  'Software Development',
  'Computer Vision',
  'Distributed Systems',
]

const skills = [
  'C',
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'Git',
]

function Work() {
  return (
    <div className="work-page">
      <header className="work-header">
        <span className="work-logo">
          SM<span>.</span>
        </span>

        <div className="work-header-label">
          COMPUTER SCIENCE / SELECTED WORK
        </div>

        <nav className="work-nav">
          <a href="https://github.com/shreyamishra6" target="_blank" rel="noreferrer">
            GITHUB ↗
          </a>

          <a href="https://www.linkedin.com/in/shreyapuff/" target="_blank" rel="noreferrer">
            LINKEDIN ↗
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shreyamishra240406@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            CONTACT ↗
          </a>

          <a href="/Shreya-Mishra-CV.pdf" target="_blank" rel="noreferrer" className="work-cv">
            CV ↗
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
              Computer Science undergraduate.
            </p>

            <div className="profile-education">
              <span className="eyebrow">EDUCATION</span>

              <h3>B.Tech · Computer Science</h3>

              <p>Manipal University Jaipur · 2024—2028</p>
            </div>
          </section>

          <section className="research-panel">
            <div className="section-heading">
              <span className="eyebrow">02 / INTERESTS</span>
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
              <span className="eyebrow">03 / SKILLS</span>
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
                  Projects<span>.</span>
                </h2>
              </div>
            </div>

            {/* Add projects here as you complete them. */}
          </section>
        </main>
      </div>

      <footer className="work-footer">
        <span>SHREYA MISHRA © 2026</span>
      </footer>
    </div>
  )
}

export default Work