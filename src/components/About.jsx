import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            01. Introduction
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            About <span>Me</span>
          </motion.h2>
        </div>

        <div className="about-content">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-glass glass-card">
              <img 
                src="/about.png" 
                alt="Profile" 
                className="about-image" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"; }} 
              />
              <div className="image-backdrop-glow"></div>
            </div>
          </motion.div>

          <div className="about-text-container">
            <motion.div 
              className="about-text glass-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I am a passionate <strong>MERN Stack Developer</strong> with a strong foundation in modern web development. 
                My journey involves building real-world projects with a deep focus on scalability, clean architecture, and user experience.
              </p>
              <p>
                Beyond writing clean code, I enjoy exploring advanced concepts across the stack to build solutions that not only 
                look visually appealing but also perform efficiently. I am currently learning advanced backend concepts and aiming 
                to secure a full-time developer role where I can contribute and grow.
              </p>
              <p>
                Whether it's designing an intuitive frontend with React or architecting a robust backend with Node.js and MongoDB, 
                I strive for excellence in every layer of the stack.
              </p>
            </motion.div>

            <motion.div 
              className="about-stats-grid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="stat-card glass-card">
                <h3>Fresh</h3>
                <p>Energy & Ideas</p>
              </div>
              <div className="stat-card glass-card">
                <h3>5+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat-card glass-card">
                <h3>100%</h3>
                <p>Commitment</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
