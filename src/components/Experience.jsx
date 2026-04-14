import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            04. Background
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Journey & <span>Education</span>
          </motion.h2>
        </div>

        <div className="experience-grid">
          <motion.div 
            className="timeline"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-header">
              <FaBriefcase className="timeline-icon text-cyan" />
              <h3>Experience</h3>
            </div>
            
            <div className="timeline-item glass-card">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>MERN Stack Developer</h4>
                <p className="timeline-entity">Brototype</p>
                <p className="timeline-desc">
                  Completed an intensive, self-paced MERN Stack development program focused on building 
                  production-ready full-stack applications. Gained deep hands-on experience architecting 
                  robust Node.js backends and dynamic React frontends through real-world project development.
                </p>
                <div className="timeline-tags">
                  <span className="tech-badge">MERN Stack</span>
                  <span className="tech-badge">Project-Driven</span>
                  <span className="tech-badge">Continuous Learner</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="timeline"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="timeline-header">
              <FaGraduationCap className="timeline-icon text-purple" />
              <h3>Education</h3>
            </div>
            
            <div className="timeline-item glass-card">
              <div className="timeline-dot dot-purple"></div>
              <div className="timeline-content">
                <h4>Bachelor of Computer Applications</h4>
                <p className="timeline-entity">St. Joseph’s College, Irinjalakuda</p>
                <p className="timeline-desc">
                  Graduated with a strong academic foundation in computer science principles, programming structures, 
                  and software engineering practices.
                </p>
              </div>
            </div>

            <div className="timeline-item glass-card">
              <div className="timeline-dot dot-purple"></div>
              <div className="timeline-content">
                <h4>Higher Secondary Education</h4>
                <p className="timeline-entity">Kerala State Board</p>
                <p className="timeline-desc">
                  Completed higher secondary education with a focus on core subjects, building a strong academic 
                  foundation for further studies in computer science.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
