import './Skills.css';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "C", "JavaScript", "Java", "MS SQL", "x86 Assembly", "Thumb Assembly", "HTML", "CSS"]
  },
  {
    title: "Hardware & Systems",
    skills: ["Electronics", "Embedded Systems (TM4C123GH6PM)", "High Performance Computing", "Linux Kernel Interaction", "CAD Design (Fusion 360)", "Soldering (THT)"]
  },
  {
    title: "Theory & Concepts",
    skills: ["Algorithm Theory", "Proof Writing & Higher Math", "Data Analysis & Probability", "Computer Networking"]
  }
];

const Skills = () => {
  return (
    <section className="page-container container">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category glass-card">
            <h3 className="category-title">{category.title}</h3>
            <ul className="skills-list">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
