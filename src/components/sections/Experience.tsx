import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Resident Advisor",
    company: "CSU Channel Islands",
    date: "January 2026 - Present",
    description: [
      "Responsible for the safety and wellbeing of 39 residents.",
      "Attended consistent team meetings to discuss improving care."
    ]
  },
  {
    id: 2,
    role: "NREIP Intern",
    company: "U.S. Navy NAWCWD",
    date: "June 2025 - August 2025",
    description: [
      "Gained experience in hardware and software system design.",
      "Used Fusion 360 for professional CAD design and fabrication using 3D printing.",
      "Gained public speaking experience presenting the project to NAWCWD leadership.",
      "Accelerated AI model using an NPU and observed 30x to 40x speedup."
    ]
  },
  {
    id: 3,
    role: "Physics Research",
    company: "CSU Channel Islands",
    date: "January 2025 - May 2025",
    description: [
      "Studied various electronics and physics concepts for various research projects.",
      "Worked with Dr. Brian Rasnow on a water well controller system design."
    ]
  },
  {
    id: 4,
    role: "Math and Physics Tutor",
    company: "Ventura Community College",
    date: "September 2023 - Present",
    description: [
      "Assisting students in their studies of mathematics and physics ranging from college algebra to differential equations.",
      "Gained valuable experience working with students from many different backgrounds, finding ways to help them better understand complex topics in mathematics."
    ]
  },
  {
    id: 5,
    role: "Software Engineer",
    company: "StepUp Tutoring",
    date: "2021",
    description: [
      "Helped create a tutor dashboard for the company's website.",
      "Used React JS framework to implement various statistics."
    ]
  }
];

const Experience = () => {
  return (
    <section className="page-container container">
      <h2 className="section-title">Where I've Worked</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item glass-card">
            <div className="experience-header">
              <h3 className="role">{exp.role} <span className="company">@ {exp.company}</span></h3>
              <p className="date">{exp.date}</p>
            </div>
            <ul className="experience-details">
              {exp.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
