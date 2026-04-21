import './App.css'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import profilePhoto from './assets/profile.png'
import dispenserImageOne from './assets/dispenser-1.png'
import dispenserImageTwo from './assets/dispenser-2.png'
import dispenserImageThree from './assets/dispenser-3.png'
import housingImageOne from './assets/housing-1.png'
import housingImageTwo from './assets/housing-2.png'
import housingImageThree from './assets/housing-3.png'
import containerAssemblyImageOne from './assets/container-assembly-1.png'
import containerAssemblyImageTwo from './assets/container-assembly-2.png'
import cupHolderImageOne from './assets/cup-holder-1.png'
import cupHolderImageTwo from './assets/cup-holder-2.png'
import nozzleHeadImageOne from './assets/nozzle-head-1.png'
import nozzleHeadImageTwo from './assets/nozzle-head-2.png'

function HomePage() {
  return (
    <div className="site-wrapper">
      <header className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Emeka Ohumaegbulem</h1>
        <p className="hero-text">
          I design and build 3D models, product concepts, and clean web experiences.
          This site shows my best work and how to contact me.
        </p>
        <Link className="button" to="/solidworks">
          View My Work
        </Link>
      </header>

      <main>
        <section className="card" id="about">
          <h2>About Me</h2>
          <div className="about-layout">
            <div className="about-photo" aria-label="Profile photo">
              <img
                src={profilePhoto}
                alt="Portrait of Emeka Ohumaegbulem"
                className="about-photo-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-copy">
              <p>
                I am Emeka Ohumaegbulem, a Biomedical Engineering student at The
                University of Texas at Dallas (expected May 2027, GPA 3.85) with
                hands-on experience in medical device design, CAD modeling, and
                prototyping. I work with SolidWorks, Arduino, MATLAB, and Python to
                build practical systems that connect engineering design with real
                clinical needs.
              </p>
            </div>
          </div>
        </section>

        <section className="card" id="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <article className="project">
              <h3>Liquid Medicine Dispenser</h3>
              <p>
                Designed and modeled a 3-medication automated dispensing device in
                SolidWorks and built Arduino-based dosing logic with feasibility testing
                across a 6-person engineering team.
              </p>
            </article>
            <article className="project">
              <h3>EEG Signal Processing</h3>
              <p>
                Engineered MATLAB threshold-based filtering workflows to process
                multi-channel neural data and improve sleep-stage classification
                accuracy for a bioinformatics project.
              </p>
            </article>
            <article className="project">
              <h3>Vision-Guided Robotics System</h3>
              <p>
                Built a vision-guided Cartesian pick-and-place robot with Arduino and
                MATLAB, including color-based image recognition and soft actuator
                fabrication techniques.
              </p>
            </article>
          </div>
        </section>

        <section className="card" id="contact">
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:mekaohums@gmail.com">mekaohums@gmail.com</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/edo230000">github.com/edo230000</a>
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Emeka Ohumaegbulem. All rights reserved.</p>
      </footer>
    </div>
  )
}

function SolidWorksPage() {
  const carouselImages = [
    dispenserImageOne,
    dispenserImageTwo,
    dispenserImageThree,
  ]
  const housingImages = [housingImageOne, housingImageTwo, housingImageThree]
  const containerAssemblyImages = [
    containerAssemblyImageOne,
    containerAssemblyImageTwo,
  ]
  const cupHolderImages = [cupHolderImageOne, cupHolderImageTwo]
  const nozzleHeadImages = [nozzleHeadImageOne, nozzleHeadImageTwo]
  const [activeImage, setActiveImage] = useState(0)
  const [activeHousingImage, setActiveHousingImage] = useState(0)
  const [activeContainerImage, setActiveContainerImage] = useState(0)
  const [activeCupHolderImage, setActiveCupHolderImage] = useState(0)
  const [activeNozzleHeadImage, setActiveNozzleHeadImage] = useState(0)

  const goToPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? carouselImages.length - 1 : current - 1,
    )
  }

  const goToNextImage = () => {
    setActiveImage((current) =>
      current === carouselImages.length - 1 ? 0 : current + 1,
    )
  }

  const goToPreviousHousingImage = () => {
    setActiveHousingImage((current) =>
      current === 0 ? housingImages.length - 1 : current - 1,
    )
  }

  const goToNextHousingImage = () => {
    setActiveHousingImage((current) =>
      current === housingImages.length - 1 ? 0 : current + 1,
    )
  }

  const goToPreviousContainerImage = () => {
    setActiveContainerImage((current) =>
      current === 0 ? containerAssemblyImages.length - 1 : current - 1,
    )
  }

  const goToNextContainerImage = () => {
    setActiveContainerImage((current) =>
      current === containerAssemblyImages.length - 1 ? 0 : current + 1,
    )
  }

  const goToPreviousCupHolderImage = () => {
    setActiveCupHolderImage((current) =>
      current === 0 ? cupHolderImages.length - 1 : current - 1,
    )
  }

  const goToNextCupHolderImage = () => {
    setActiveCupHolderImage((current) =>
      current === cupHolderImages.length - 1 ? 0 : current + 1,
    )
  }

  const goToPreviousNozzleHeadImage = () => {
    setActiveNozzleHeadImage((current) =>
      current === 0 ? nozzleHeadImages.length - 1 : current - 1,
    )
  }

  const goToNextNozzleHeadImage = () => {
    setActiveNozzleHeadImage((current) =>
      current === nozzleHeadImages.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <div className="site-wrapper">
      <header className="hero">
        <p className="eyebrow">SolidWorks Portfolio</p>
        <h1>Design and CAD Work</h1>
        <p className="hero-text">
          A focused view of my engineering design projects, fabrication workflow, and
          technical problem-solving process.
        </p>
        <Link className="button button-secondary" to="/">
          Back to Home
        </Link>
      </header>

      <main>
        <section className="card">
          <h2>What I Build</h2>
          <ul className="portfolio-list">
            <li>3D part and assembly design in SolidWorks</li>
            <li>Design for prototyping and fabrication readiness</li>
            <li>Medical-device-inspired design documentation workflows</li>
          </ul>
        </section>

        <section className="card">
          <h2>Liquid Medicine Dispenser - General Overview</h2>
          <p>
            The Liquid Medicine Dispenser is an undergraduate project I am currently
            developing in collaboration with a physician from UT Southwestern. Our
            goal is to design a device that provides patients with a safe, accurate, and
            easy way to receive prescribed liquid medications at home.
          </p>
          <p>
            The system automates dosing, scheduling, and user verification to reduce
            common errors caused by manual measurement and caregiver variability. By
            securely storing multiple medications and dispensing precise volumes on
            demand or on schedule, the device supports better adherence and helps
            minimize risks of misuse or overdose.
          </p>
        </section>

        <section className="card">
          <h2>Prototype Assembly Preview</h2>
          <div className="download-row" role="note" aria-label="Prototype assembly download">
            <a
              className="button button-secondary download-button"
              href="/downloads/prototype-assembly.zip"
              download
            >
              Download Prototype Assembly (.zip)
            </a>
            <p className="download-note">
              Includes the SolidWorks prototype assembly files for review.
            </p>
          </div>
          <div className="overview-layout">
            <div className="carousel-column">
              <div className="overview-image" aria-label="Project image carousel">
                <button
                  type="button"
                  className="carousel-arrow left"
                  onClick={goToPreviousImage}
                  aria-label="Previous image"
                >
                  &#8592;
                </button>
                <img
                  src={carouselImages[activeImage]}
                  alt={`Liquid medicine dispenser render ${activeImage + 1}`}
                  className="carousel-image"
                />
                <button
                  type="button"
                  className="carousel-arrow right"
                  onClick={goToNextImage}
                  aria-label="Next image"
                >
                  &#8594;
                </button>
              </div>
              <p className="carousel-caption">prototype assembly</p>
              <div className="carousel-dots" aria-label="Carousel indicators">
                {carouselImages.map((_, index) => (
                  <button
                    type="button"
                    key={`dot-${index}`}
                    className={`carousel-dot ${index === activeImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="overview-textbox">
              <p>
                The device features an outer shell equipped with a cupholder,
                ventilation fan, external power supply, and a lockable door that
                encloses all internal components. The front view highlights the user
                interface, which includes a digital display and keypad for
                identification and dispensing.
              </p>
              <p>
                The rear door uses a pin-based hinge mechanism, allowing easy removal
                when the device needs to be cleaned or sanitized. The back and side
                views reveal the internal system, consisting of a peristaltic pump,
                liquid medication containers, an electric lock, and a tubing network
                that transports medication from the reservoirs to the user.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Mechanical Housing</h2>
          <div className="overview-layout">
            <div className="carousel-column">
              <div className="overview-image" aria-label="Mechanical housing carousel">
                <button
                  type="button"
                  className="carousel-arrow left"
                  onClick={goToPreviousHousingImage}
                  aria-label="Previous housing image"
                >
                  &#8592;
                </button>
                <img
                  src={housingImages[activeHousingImage]}
                  alt={`Mechanical housing render ${activeHousingImage + 1}`}
                  className="carousel-image"
                />
                <button
                  type="button"
                  className="carousel-arrow right"
                  onClick={goToNextHousingImage}
                  aria-label="Next housing image"
                >
                  &#8594;
                </button>
              </div>
              <p className="carousel-caption">mechanical housing</p>
              <div className="carousel-dots" aria-label="Mechanical housing carousel indicators">
                {housingImages.map((_, index) => (
                  <button
                    type="button"
                    key={`housing-dot-${index}`}
                    className={`carousel-dot ${index === activeHousingImage ? 'active' : ''}`}
                    onClick={() => setActiveHousingImage(index)}
                    aria-label={`Go to housing image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="overview-textbox">
              <p>
                This section highlights the mechanical housing that encloses the
                dispensing system and supports component mounting within the device
                envelope. The enclosure geometry provides protected volume for internal
                hardware while maintaining access features for service, routing, and
                user interaction.
              </p>
              <p>
                Shown views focus on exterior packaging, interface cutouts, and the
                structural intent of the housing as the primary load-carrying shell.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Liquid Medicine Container Assembly</h2>
          <div className="overview-layout">
            <div className="carousel-column">
              <div className="overview-image" aria-label="Container assembly carousel">
                <button
                  type="button"
                  className="carousel-arrow left"
                  onClick={goToPreviousContainerImage}
                  aria-label="Previous container image"
                >
                  &#8592;
                </button>
                <img
                  src={containerAssemblyImages[activeContainerImage]}
                  alt={`Liquid medicine container assembly render ${activeContainerImage + 1}`}
                  className="carousel-image"
                />
                <button
                  type="button"
                  className="carousel-arrow right"
                  onClick={goToNextContainerImage}
                  aria-label="Next container image"
                >
                  &#8594;
                </button>
              </div>
              <p className="carousel-caption">prototype assembly</p>
              <div className="carousel-dots" aria-label="Container carousel indicators">
                {containerAssemblyImages.map((_, index) => (
                  <button
                    type="button"
                    key={`container-dot-${index}`}
                    className={`carousel-dot ${index === activeContainerImage ? 'active' : ''}`}
                    onClick={() => setActiveContainerImage(index)}
                    aria-label={`Go to container image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="overview-textbox">
              <p>
                This assembly houses the liquid medication reservoir for the dispensing
                device. The design accommodates dual container positioning with a shared
                mounting frame, ensuring consistent geometry and stable placement within
                the overall system. The structure supports precise alignment to maintain
                reliable fluid interface with downstream components.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Cup Holder Part</h2>
          <div className="overview-layout">
            <div className="carousel-column">
              <div className="overview-image image-fit-full" aria-label="Cup holder part carousel">
                <button
                  type="button"
                  className="carousel-arrow left"
                  onClick={goToPreviousCupHolderImage}
                  aria-label="Previous cup holder image"
                >
                  &#8592;
                </button>
                <img
                  src={cupHolderImages[activeCupHolderImage]}
                  alt={`Cup holder part render ${activeCupHolderImage + 1}`}
                  className="carousel-image"
                />
                <button
                  type="button"
                  className="carousel-arrow right"
                  onClick={goToNextCupHolderImage}
                  aria-label="Next cup holder image"
                >
                  &#8594;
                </button>
              </div>
              <p className="carousel-caption">cup holder prototype</p>
              <div className="carousel-dots" aria-label="Cup holder part carousel indicators">
                {cupHolderImages.map((_, index) => (
                  <button
                    type="button"
                    key={`cup-holder-dot-${index}`}
                    className={`carousel-dot ${index === activeCupHolderImage ? 'active' : ''}`}
                    onClick={() => setActiveCupHolderImage(index)}
                    aria-label={`Go to cup holder image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="overview-textbox">
              <p>
                This component serves as the mechanical interface for securing the
                dispensing cup within the medication delivery system. The bracket
                geometry provides constrained radial and axial positioning, ensuring
                repeatable cup placement during each dispense cycle. The mounting
                flanges integrate directly with the device frame to maintain structural
                stability under operational loading.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Nozzle Head Part</h2>
          <div className="overview-layout">
            <div className="carousel-column">
              <div className="overview-image image-fit-full" aria-label="Nozzle head part carousel">
                <button
                  type="button"
                  className="carousel-arrow left"
                  onClick={goToPreviousNozzleHeadImage}
                  aria-label="Previous nozzle head image"
                >
                  &#8592;
                </button>
                <img
                  src={nozzleHeadImages[activeNozzleHeadImage]}
                  alt={`Nozzle head part render ${activeNozzleHeadImage + 1}`}
                  className="carousel-image"
                />
                <button
                  type="button"
                  className="carousel-arrow right"
                  onClick={goToNextNozzleHeadImage}
                  aria-label="Next nozzle head image"
                >
                  &#8594;
                </button>
              </div>
              <p className="carousel-caption">nozzle head prototype</p>
              <div className="carousel-dots" aria-label="Nozzle head part carousel indicators">
                {nozzleHeadImages.map((_, index) => (
                  <button
                    type="button"
                    key={`nozzle-head-dot-${index}`}
                    className={`carousel-dot ${index === activeNozzleHeadImage ? 'active' : ''}`}
                    onClick={() => setActiveNozzleHeadImage(index)}
                    aria-label={`Go to nozzle head image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="overview-textbox">
              <p>
                This assembly defines the flow-path terminus of the medication
                dispensing system. The conical nozzle geometry directs fluid output
                with controlled directionality, while the inlet port interfaces with
                the upstream tubing or pump line. The form factor balances hydraulic
                flow intent with spatial constraints imposed by the overall device
                envelope.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solidworks" element={<SolidWorksPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
