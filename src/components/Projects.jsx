import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Planix",
      subtitle: "Project Management Platform",
      description: "A collaborative project management platform similar to Jira and ClickUp. Features include task and issue management, workspace collaboration, role-based access control, API integration, and a scalable backend architecture.",
      image: "/planix.png",
      tech: ["Node.js", "Express", "MongoDB", "React"],
      github: "https://github.com/sanitta2002/Planix",
      live: "https://planix-demo.com",
    },
    {
      title: "SketchSphere",
      subtitle: "E-commerce Platform",
      description: "A vibrant e-commerce platform for comic books featuring comprehensive user authentication (OTP & social login), product management with image upload and cropping, cart and order management, and a full admin dashboard for inventory tracking.",
      image: "/sketchsphere.png",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/sanitta2002/SketchSphere",
      live: "https://sketchsphere-demo.com",
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            03. Featured Work
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My <span>Projects</span>
          </motion.h2>
        </div>

        <div className="projects-list">
          {projects.map((project, idx) => (
            <motion.div 
              className="project-card glass-card"
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="glass-btn hover-cyan">
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
