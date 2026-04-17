import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const featuredProjects = [
    {
      title: "Planix",
      subtitle: "Project Management Platform",
      description: "A collaborative project management platform built with NestJS and React. Features workspace management, task tracking, and role-based permissions with a scalable backend architecture.",
      image: "/planix.png",
      tech: ["NestJS", "React", "MongoDB", "Redux"],
      github: "https://github.com/sanitta2002/Planix",
    },
    {
      title: "User Management System",
      subtitle: "MERN Stack Application",
      description: "A comprehensive user management platform with Redux Toolkit and Tailwind CSS. Implements full CRUD operations, advanced search, and dynamic role assignments with a sleek dashboard.",
      image: "/user-mgmt.png",
      tech: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      github: "https://github.com/sanitta2002/User_managemnet_MERN",
    },
    {
      title: "Quick Blog",
      subtitle: "Modern Content Platform",
      description: "A high-performance blog platform leveraging React 19 and Framer Motion for seamless transitions. Includes a robust admin dashboard for content management and interactive user engagement.",
      image: "/quick-blog.png",
      tech: ["React 19", "Framer Motion", "Tailwind", "Vite"],
      github: "https://github.com/sanitta2002/Quick_Blog",
    },
    {
      title: "SketchSphere",
      subtitle: "E-commerce Comics Store",
      description: "A vibrant e-commerce platform for comic books featuring OTP authentication, product management, and a dedicated admin dashboard for inventory and order tracking.",
      image: "/sketchsphere.png",
      tech: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/sanitta2002/SketchSphere",
    }
  ];

  const miniProjects = [
    {
      title: "Netflix Clone",
      description: "Pixel-perfect UI recreation with responsive sliders and high-fidelity video preview modals.",
      image: "/netflix-clone.png",
      tech: ["React", "TMDB", "Firebase"],
      github: "https://github.com/sanitta2002/Netflix_Clone",
    },
    {
      title: "Weather App",
      description: "Real-time weather data visualization with location-based services and dynamic backgrounds.",
      image: "/weather.png",
      tech: ["JavaScript", "OpenWeather", "CSS"],
      github: "https://github.com/sanitta2002/weather_app",
    },
    {
      title: "Memory Game",
      description: "Interactive card-matching game built to practice state management and CSS animations.",
      image: "/memory-game.png",
      tech: ["React", "Framer Motion"],
      github: "https://github.com/sanitta2002/memory_game",
    },
    {
      title: "Task Manager",
      description: "Strictly typed todo application showcasing TypeScript best practices and local storage persistence.",
      image: "/todo-list.png",
      tech: ["TypeScript", "React", "SCSS"],
      github: "https://github.com/sanitta2002/Typescript-Todo",
    }
  ];

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    setProgress(0);
  }, [featuredProjects.length]);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setProgress(0);
  };

  // Auto-play and Progress Bar logic
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // Update progress every 50ms
    const step = (interval / 6000) * 100; // Total duration 6000ms

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextProject();
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, nextProject]);

  return (
    <section id="projects" className="section">
      <div className="container overflow-visible">
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
            Major <span>Projects</span>
          </motion.h2>
        </div>

        {/* Modern Showcase Slider */}
        <div 
          className="showcase-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="showcase-track-wrapper">
            <div 
              className="showcase-track"
              style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 40}px))` }}
            >
              {featuredProjects.map((project, idx) => (
                <div 
                  key={project.title}
                  className={`showcase-card glass-card ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
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
                </div>
              ))}
            </div>
          </div>

          <div className="showcase-controls">
            <button onClick={prevProject} className="showcase-btn prev"><FaChevronLeft /></button>
            <div className="showcase-progress">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              <div className="project-counter">
                <span>0{currentIndex + 1}</span> / 0{featuredProjects.length}
              </div>
            </div>
            <button onClick={nextProject} className="showcase-btn next"><FaChevronRight /></button>
          </div>
        </div>

        {/* Mini Projects Marquee */}
        <div className="mini-projects-header">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Notable <span>Mini Projects</span>
          </motion.h3>
        </div>
      </div> {/* This closes .container */}

      {/* Full Window Width Marquee */}
      <div className="full-width-marquee-wrapper">
        <div className="full-marquee-track">
          {[...miniProjects, ...miniProjects, ...miniProjects, ...miniProjects].map((mini, idx) => (
            <div 
              key={`${mini.title}-${idx}`}
              className="mini-card glass-card"
            >
              <div className="mini-card-image">
                <img src={mini.image} alt={mini.title} />
                <div className="mini-card-overlay">
                  <a href={mini.github} target="_blank" rel="noreferrer" className="btn btn-primary"><FaGithub /> View Code</a>
                </div>
              </div>
              <div className="mini-card-content">
                <h4>{mini.title}</h4>
                <p>{mini.description}</p>
                <div className="mini-tech">
                  {mini.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
