const profile = {
  name: "Lokesh Ravada",
  title: "Computer Science Undergraduate | Full-Stack Developer",
  location: "Visakhapatnam, India",
  phone: "+91 9398287625",
  email: "ravadalokesh2004@gmail.com",
  linkedin: "https://linkedin.com/in/lokeshravada",
  github: "https://github.com/Ravadalokesh",
};

const skills = [
  {
    group: "Programming",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    group: "Web Development",
    items: ["HTML5", "CSS3", "Bootstrap", "React.js", "Node.js", "Express.js"],
  },
  {
    group: "Databases & Cloud",
    items: ["MongoDB", "SQL", "AWS (EC2, S3)"],
  },
  {
    group: "Machine Learning",
    items: [
      "Supervised Learning",
      "Classification",
      "Regression",
      "CNN",
      "NLP",
    ],
  },
  {
    group: "Core CS",
    items: [
      "Data Structures",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];

const experience = [
  {
    date: "May 2025 - Jun 2025",
    role: "Machine Learning Intern",
    company: "SkillDzire (Remote)",
    summary:
      "Worked on supervised and unsupervised models, including prediction systems, recommendation engines, classification models, CNNs, and NLP tasks.",
    tags: ["Machine Learning", "Classification", "CNN", "NLP"],
  },
  {
    date: "Nov 2023 - May 2024",
    role: "Web Development Engineer Intern",
    company: "Vinukoti Business Solutions",
    summary:
      "Developed MERN modules and integrated REST APIs for frontend-backend communication. Improved UI responsiveness and client-server performance.",
    tags: ["MERN", "REST APIs", "Responsive UI", "Performance"],
  },
];

const projects = [
  {
    name: "AgroMart Organic Products Website",
    year: "2025",
    summary:
      "Built a full-stack e-commerce platform with product listings, cart management, user authentication, and order processing.",
    tags: ["MERN", "E-commerce", "Authentication"],
  },
  {
    name: "Government Schemes Eligibility Checker",
    year: "2025",
    summary:
      "Developed a web application to evaluate eligibility for multiple government schemes using validated inputs and conditional logic.",
    tags: ["JavaScript", "Form Validation", "Responsive UI"],
  },
  {
    name: "Personal Portfolio Website",
    year: "2025",
    summary:
      "Designed and deployed a responsive portfolio showcasing projects and skills, optimized for performance and SEO.",
    tags: ["React", "Performance", "SEO"],
  },
];

const education = [
  {
    degree: "B.Tech - Computer Science",
    institute: "ANITS Engineering College",
    details: "2024 - 2027 | CGPA: 8.5/10",
  },
  {
    degree: "Diploma - Computer Science",
    institute: "State Board of Technical Education",
    details: "2021 - 2024 | Percentage: 91.2",
  },
];

const certifications = [
  "Machine Learning Internship - SkillDzire",
  "Web Development Internship - VBS Technologies",
  "Advanced HTML Certification - LinkedIn",
  "JavaScript Developer Certification - LinkedIn",
];

function App() {
  return (
    <>
      <header className="topbar">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            {profile.name.toUpperCase()}
            <span className="accent">.</span>
          </a>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container text-center">
            <h1 className="hero-title">{profile.title}</h1>
            <p className="hero-subtitle">
              Computer Science undergraduate with practical full-stack
              development experience. Skilled in Python, Java, MERN stack, and
              AWS cloud with focus on scalable, deployment-ready applications.
            </p>
            <div className="info-strip">
              <span className="info-pill">{profile.location}</span>
              <span className="info-pill">CGPA 8.5/10</span>
              <span className="info-pill">2 Internships</span>
            </div>
            <div className="hero-actions">
              <a href="#projects" className="btn-glow">
                View Projects
              </a>
              <a href={`mailto:${profile.email}`} className="btn-outline">
                Email Me
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="grid three-col">
              {skills.map((block) => (
                <article className="glass card-pad" key={block.group}>
                  <h3>{block.group}</h3>
                  <div>
                    {block.items.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={item.role}>
                  <div className="timeline-date">{item.date}</div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="muted">{item.summary}</p>
                  <div>
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="grid two-col">
              {projects.map((project) => (
                <article className="glass project-card" key={project.name}>
                  <div className="project-head">
                    <h3>{project.name}</h3>
                    <span className="muted">{project.year}</span>
                  </div>
                  <p className="muted">{project.summary}</p>
                  <div>
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="grid two-col">
              <article className="glass card-pad">
                <h3>{education[0].degree}</h3>
                <p className="company">{education[0].institute}</p>
                <p className="muted">{education[0].details}</p>
              </article>
              <article className="glass card-pad">
                <h3>{education[1].degree}</h3>
                <p className="company">{education[1].institute}</p>
                <p className="muted">{education[1].details}</p>
              </article>
            </div>
            <div className="glass card-pad cert-card">
              <h3>Certifications</h3>
              <ul className="muted">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section text-center">
          <div className="container">
            <div className="glass contact-card">
              <h2>Contact</h2>
              <p className="muted profile-meta">{profile.email}</p>
              <p className="muted profile-meta">{profile.phone}</p>
              <p className="muted profile-meta">{profile.location}</p>
              <div className="link-row center-row">
                <a href={profile.github} className="text-link">
                  GitHub
                </a>
                <a href={profile.linkedin} className="text-link">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer text-center">
        <div className="container">
          <p className="muted">
            Copyright 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
