import './Projects.css';

const openSourceProjects = [
  {
    id: 1,
    title: "gl-web-editor",
    description: "A web-based editor for a custom graphics library similar to WebGL, facilitating interactive in-browser graphics development and rendering.",
    tech: ["JavaScript"],
    github: "https://github.com/noahcoder11/gl-web-editor",
  },
  {
    id: 2,
    title: "Jarvis-client",
    description: "A modular virtual assistant client designed to handle complex user commands and interactions, acting as the frontend component for a broader voice or text-based automation system.",
    tech: ["Python"],
    github: "https://github.com/noahcoder11/Jarvis-client",
  },
  {
    id: 3,
    title: "Autonomous-Robot-Car",
    description: "Software for controlling an autonomous robotic vehicle. This project focuses on low-level hardware interfacing and sensor data processing to enable autonomous navigation.",
    tech: ["C"],
    github: "https://github.com/noahcoder11/Autonomous-Robot-Car",
  },
  {
    id: 5,
    title: "WebGL-Raytracer",
    description: "An iterative raytracer implemented directly in a WebGL fragment shader. Features real-time rendering of a 3D environment using iterative approaches to handle ray bounces without recursion.",
    tech: ["JavaScript", "WebGL", "GLSL"],
    github: "https://github.com/noahcoder11/WEBGL-RAYTRACER",
  }
];

const academicProjects = [
  {
    id: 1,
    title: "Electronics Project Portfolio",
    description: "Comprehensive portfolio detailing the design, construction, and testing of an adjustable DC power supply, a transistor gain measurement circuit, an oscilloscope apparatus, and an Arduino-controlled function generator.",
    tech: ["C++ (Arduino)", "MATLAB", "Circuit Design", "Soldering"],
    link: "./papers/Project Portfolio.pdf",
    image: "./project_images/electronics.png"
  },
  {
    id: 2,
    title: "Facial Segmentation in Images",
    description: "A Digital Image Processing research project developing automated preliminary processes for facial recognition. Implemented preprocessing, elliptical fitting, and masking to isolate faces and eyes from backgrounds.",
    tech: ["Python", "OpenCV", "Scikit-image", "Numpy"],
    link: "./papers/Facial Segmentation in Images Final Report.pdf",
    image: "./project_images/facial.png"
  },
  {
    id: 3,
    title: "Neural Ordinary Differential Equations",
    description: "An academic presentation exploring Neural ODEs as a continuous-time approach to machine learning, covering continuous backpropagation, the Adjoint State method, and training first/higher-order NODEs.",
    tech: ["Machine Learning", "Calculus", "Differential Equations"],
    link: "./papers/Neural_ODE_Presentation.pdf",
    github: "https://github.com/noahcoder11/NEURAL-ORDINARY-DIFFERENTIAL-EQUATIONS",
    image: "./project_images/neural.png"
  },
  {
    id: 4,
    title: "Discrete Mathematics Proof Portfolio",
    description: "A rigorous collection of mathematical proofs utilizing induction, direct proofs, and contradiction to solve problems in combinatorics, graph theory (bipartite graphs, planarity), and calculus.",
    tech: ["Proof Writing", "Graph Theory", "Combinatorics"],
    link: "./papers/Proof Portfolio.pdf",
    image: "./project_images/proof.png"
  },
  {
    id: 5,
    title: "Facial Recognition with PCA",
    description: "A comprehensive facial recognition system focusing on facial segmentation, feature extraction, and classification using Principal Component Analysis (PCA). Implemented a pipeline for high-accuracy face identification.",
    tech: ["Python", "Numpy", "PCA", "Machine Learning"],
    link: "./papers/Facial Recognition PCA Report.pdf",
    github: "https://github.com/noahcoder11/COMP-445-FINAL-PROJECT",
    image: "./project_images/pca_recognition.png"
  }
];

const Projects = () => {
  return (
    <section className="page-container container">
      <h2 className="section-title">Academic Research & Projects</h2>
      <div className="academic-grid" style={{ marginBottom: '4rem' }}>
        {academicProjects.map((project) => (
          <div key={`acad-${project.id}`} className="project-card glass-card academic-card">
            <div className="academic-content-wrapper">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-tech">
                  {project.tech.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                {(project.link || project.github) && (
                  <div className="project-links">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem'}}>View Paper</a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem'}}>View Code</a>
                    )}
                  </div>
                )}
              </div>
              {project.image && (
                <div className="academic-image-container">
                  <img src={project.image} alt={`Preview of ${project.title}`} className="academic-image" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">Open Source Projects</h2>
      <div className="projects-grid">
        {openSourceProjects.map((project) => (
          <div key={`os-${project.id}`} className="project-card glass-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech">
                {project.tech.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem'}}>View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;