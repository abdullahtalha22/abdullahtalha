import { useState, useEffect } from "react";

export default function App() {
  const [active, setActive] = useState("HOME");
  const roles = [
    "SOFTWARE ENGINEER",
    "FLUTTER DEVELOPER",
    "UI/UX DESIGNER",
    "APPLICATION DEVELOPER",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  // cycle typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    "HOME",
    "ABOUT",
    "EDUCATION",
    "EXPERIENCE",
    "PROJECTS",
    "CONTACT",
  ];

  return (
    <>
      {/* Navigation */}
      <header className="navbar">
        {navItems.map((item) => (
          <a
            key={item}
            className={`nav-link ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </a>
        ))}

        {/* White line + glowing circle */}
        <div className="nav-decoration">
          <div className="nav-line"></div>
          <div className="nav-circle"></div>
        </div>
      </header>

      {/* -------- HOME Section -------- */}
      {active === "HOME" && (
        <main className="hero-wrapper">
          <div className="hero">
            <p className="hero-greet">Hello ///</p>
            <h1 className="hero-name">I’m Abdullah Talha</h1>

            <h2 className="hero-role">
              <span key={currentRole} className="typing-glow">
                {roles[currentRole]}
              </span>
            </h2>

            <p className="hero-desc">
              Motivated and detail-oriented Software Engineer & Full Stack Developer
              with expertise in Flutter, Firebase, REST APIs, and UI/UX design.
              Skilled in building scalable cross-platform apps with seamless backend
              integration. Passionate about delivering innovative digital solutions
              with proven projects in spiritual wellness and healthcare technology.
            </p>
            <a href="/resume.pdf" download className="resume-btn">
  Resume
</a>
          </div>


          <div className="hero-image-container">
            <img src="/profile.png" alt="Profile" className="hero-image" />
          </div>
        </main>
      )}

      {/* -------- ABOUT Section -------- */}
      {active === "ABOUT" && (
        <section className="about-wrapper">
          {/* Left side: About Me */}
          <div className="about-left">
            <h2 className="about-heading">ABOUT ME</h2>
            <p className="about-desc">
              I am Abdullah Talha, a Software Engineer and Full Stack Developer
               from Abbottabad, Pakistan. Skilled in Flutter, Firebase, and 
               modern web technologies, I specialize in building scalable 
               cross-platform applications with clean UI/UX. My experience spans 
               mobile and web development, graphic design, and digital product 
               creation, with projects like SoulVerse, a travel app, and a 
               medicine reminder app etc . I am passionate about turning ideas 
               into impactful solutions and continuously improving my skills 
               to contribute to innovative projects.
            </p>
          </div>

          {/* Right side: Skills */}
          <div className="about-right">
            <h2 className="about-heading">SKILLS</h2>
            <div className="skills-container">
              <span className="skill-pill">Flutter</span>
              <span className="skill-pill">Dart</span>
              <span className="skill-pill">Firebase</span>
              <span className="skill-pill">REST APIs</span>
              <span className="skill-pill">React</span>
              <span className="skill-pill">Tailwind CSS</span>
              <span className="skill-pill">HTML</span>
              <span className="skill-pill">CSS</span>
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">API Integration</span>
              <span className="skill-pill">Git/GitHub</span>
              <span className="skill-pill">Responsive Dashboards</span>
              <span className="skill-pill">UI/UX Design</span>
              <span className="skill-pill">Problem-Solving</span>
              <span className="skill-pill">Project Planning</span>
              <span className="skill-pill">Communication</span>
              <span className="skill-pill">Leadership</span>
              <span className="skill-pill">Team Collaboration</span>
            </div>
          </div>
        </section>
      )}

            {/* -------- EDUCATION Section -------- */}
      {active === "EDUCATION" && (
        <section className="about-wrapper">
          {/* Left side: Heading + description */}
          <div className="about-left">
            <h2 className="about-heading">EDUCATION</h2>
            <p className="about-desc">
              My academic journey has built the foundation of my career 
              as a Software Engineer. With a strong background in science
               and technology, I have developed analytical, problem-solving, 
               and technical skills that guide my professional growth. This
                path ultimately led me to pursue a Bachelor’s in 
              Software Engineering, where I gained in-depth knowledge of 
              modern programming, software development, and emerging technologies.
            </p>
          </div>

          {/* Right side: Degrees */}
          <div className="about-right">
            <div className="education-item">
              <h3 className="degree-heading">BS in Software Engineering</h3>
              <p className="about-desc">
                Abbottabad University of Science and Technology (2021 – 2025) <br />
                <strong>CGPA: 3.39</strong>
              </p>
            </div>

            <div className="education-item">
              <h3 className="degree-heading">F.Sc Pre-Medical</h3>
              <p className="about-desc">
                Army Burn Hall College for Boys, Abbottabad (2016 – 2018)
              </p>
            </div>

            <div className="education-item">
              <h3 className="degree-heading">Matriculation (Science)</h3>
              <p className="about-desc">
                Army Burn Hall College for Boys, Abbottabad (2014 – 2016)
              </p>
            </div>
          </div>
        </section>
      )}
 
       {/* -------- EXPERIENCE Section -------- */}
      {active === "EXPERIENCE" && (
        <section className="about-wrapper">
          {/* Left side: Heading + description */}
          <div className="about-left">
            <h2 className="about-heading">EXPERIENCE</h2>
            <p className="about-desc">
              My professional journey includes hands-on freelance projects where
               I developed scalable cross-platform applications using Flutter, Firebase, and 
               modern web technologies. I have experience in designing full stack
                solutions, integrating REST APIs, implementing authentication, and 
                creating responsive UI/UX. By collaborating closely with clients, I
              transformed ideas into functional products, ensuring high 
              performance, usability, and smooth deployment on both Android and iOS platforms.
            </p>
          </div>

          {/* Right side: Experience list */}
          <div className="about-right">
            <div className="experience-item">
              <span className="experience-arrow">»</span>
              <h3 className="degree-heading">Freelance Developer</h3>
              <p className="about-desc">
  Remote &nbsp;|&nbsp; 2024 – Present <br />
  • Designed and developed scalable cross-platform mobile apps using Flutter & Firebase. <br />
  • Built full stack solutions with REST APIs, authentication, and cloud integration. <br />
  • Created modern, responsive, and user-centered UI/UX to enhance usability. <br />
  • Collaborated with clients to analyze requirements and deliver tailored solutions. <br />
  • Deployed applications on Android & iOS platforms ensuring smooth performance.
</p>

            </div>
          </div>
        </section>
      )}

      {/* -------- PROJECTS Section -------- */}
      {active === "PROJECTS" && (
        <section className="projects-wrapper">
          <h2 className="projects-heading">PROJECTS</h2>
          <div className="projects-grid">
            
            
            {/* Project 1: Travel App */}
            <div className="project-card">
              <img src="/travel-app.png" alt="Travel App" className="project-img" />
              <h3 className="project-title">Travel Application</h3>
              <p className="project-date">2024</p>
              <p className="project-desc">
                A cross-platform travel booking and exploration app with map integration,
                hotel recommendations, and itinerary planning using Flutter & Firebase.
              </p>
            </div>

            {/* Project 2: SoulVerse */}
            <div className="project-card">
              <img src="/soulverse.png" alt="SoulVerse App" className="project-img" />
              <h3 className="project-title">SoulVerse – Spiritual Guidance</h3>
              <p className="project-date">2024</p>
              <p className="project-desc">
                Developed an Islamic spiritual guidance app with mood-based personalized 
                recommendations, multilingual support, and Firebase backend.
              </p>
            </div>

            {/* Project 3: Medicine Reminder */}
            <div className="project-card">
              <img src="/medicine-reminder.png" alt="Medicine Reminder App" className="project-img" />
              <h3 className="project-title">Medicine Reminder</h3>
              <p className="project-date">2025</p>
              <p className="project-desc">
                A healthcare app that helps patients take medicine on time using 
                notifications, reminders, and scheduling features built with Flutter.
              </p>
            </div>

            {/* Project 4: Portfolio Website */}
            <div className="project-card">
              <img src="/portfolio.png" alt="Portfolio Website" className="project-img" />
              <h3 className="project-title">Portfolio Website</h3>
              <p className="project-date">2025</p>
              <p className="project-desc">
                A futuristic glassmorphism-themed personal portfolio built with 
                React & Tailwind CSS, showcasing animations, glowing effects, and modern UI.
              </p>
            </div>

          </div>
        </section>
      )}

{/* -------- CONTACT Section -------- */}
{active === "CONTACT" && (
  <section className="contact-wrapper">
    <h2 className="about-heading">CONTACT</h2>

    <div className="contact-row">
      {/* Phone */}
      <div className="contact-item">
        <i className="fas fa-phone contact-icon phone"></i>
        <h3 className="contact-subheading">PHONE</h3>
        <p className="contact-text">+92 345 9625775</p>
      </div>

      {/* Email */}
      <div className="contact-item">
        <i className="fas fa-envelope contact-icon email"></i>
        <h3 className="contact-subheading">EMAIL</h3>
        <p className="contact-text">abdullah.talha22@gmail.com</p>
      </div>

      {/* Address */}
      <div className="contact-item">
        <i className="fas fa-map-marker-alt contact-icon address"></i>
        <h3 className="contact-subheading">ADDRESS</h3>
        <p className="contact-text">Abbottabad, Pakistan</p>
      </div>

      {/* Socials */}
      <div className="contact-item">
        <i className="fas fa-users contact-icon social"></i>
        <h3 className="contact-subheading">SOCIAL</h3>
        <div className="social-links">
          <a
            href="https://github.com/abdullahtalha22"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdullahtalha22/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
)}


      {/* Bottom Line */}
      <footer className="bottom-line">
        <div className="bottom-circle"></div>
        <div className="bottom-line-bar"></div>
        <span className="bottom-text">ABDULLAH TALHA ©</span>
      </footer>
    </>
  );
}
