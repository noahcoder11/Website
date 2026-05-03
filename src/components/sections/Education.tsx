import './Projects.css'; // Reusing styles from Projects

const educationList = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science and Mathematics",
    school: "California State University Channel Islands",
    date: "August 2024 - Present (Anticipated 2027)",
    details: [
      "GPA: 4.0/4.0",
      "Dean's List: 2024 - 2025",
      "Coursework: Algorithms, Automata, Electronics, Embedded Systems, Operating Systems, Discrete Mathematics, Higher Math"
    ]
  },
  {
    id: 2,
    degree: "Associate of Arts in General Studies, Math and Science Emphasis",
    school: "Ventura College",
    date: "January 2021 - August 2023",
    details: [
      "GPA: 4.0/4.0",
      "Coursework: Mathematics, Computer Science, Physics, Writing & Composition"
    ]
  }
];

const Education = () => {
  return (
    <section className="page-container container">
      <h2 className="section-title">Education</h2>
      <div className="projects-grid">
        {educationList.map((edu) => (
          <div key={edu.id} className="project-card glass-card">
            <div className="project-content">
              <h3 className="project-title">{edu.degree}</h3>
              <p className="project-description" style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: '0.5rem' }}>
                {edu.school}
              </p>
              <p className="project-description" style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                {edu.date}
              </p>
              <ul className="project-tech" style={{ flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                {edu.details.map((item, index) => (
                  <li key={index} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
