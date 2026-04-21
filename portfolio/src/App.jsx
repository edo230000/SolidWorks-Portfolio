import './App.css'

function App() {
  return (
    <div className="site-wrapper">
      <header className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Your Name</h1>
        <p className="hero-text">
          I design and build 3D models, product concepts, and clean web experiences.
          This site shows my best work and how to contact me.
        </p>
        <a className="button" href="#projects">
          View My Work
        </a>
      </header>

      <main>
        <section className="card" id="about">
          <h2>About Me</h2>
          <p>
            I am a beginner developer and CAD designer focused on practical projects.
            I enjoy turning ideas into clear visual designs and responsive websites.
          </p>
        </section>

        <section className="card" id="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <article className="project">
              <h3>Mechanical Bracket Design</h3>
              <p>
                Created a production-ready bracket in SolidWorks with detailed
                dimensions and assembly notes.
              </p>
            </article>
            <article className="project">
              <h3>Phone Stand Prototype</h3>
              <p>
                Modeled and iterated a compact phone stand concept from sketch to
                printable file.
              </p>
            </article>
            <article className="project">
              <h3>Personal Portfolio Website</h3>
              <p>
                Built this React website using reusable components and modern CSS
                layout techniques.
              </p>
            </article>
          </div>
        </section>

        <section className="card" id="contact">
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:yourname@email.com">yourname@email.com</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/edo230000">github.com/edo230000</a>
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
