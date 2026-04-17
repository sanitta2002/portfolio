import { motion } from 'framer-motion';
import { SiLeetcode, SiGithub } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import './CodingProfiles.css';

const CodingProfiles = () => {
  return (
    <section id="profiles" className="section">
      <div className="container overflow-visible">
        <div className="section-header">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            04. Problem Solving
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Coding <span>Activity</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Passionate about algorithms, data structures, and consistent open-source contributions.
          </motion.p>
        </div>

        <div className="profiles-grid">
          {/* GitHub Profile */}
          <motion.div 
            className="profile-card glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-header">
              <SiGithub className="profile-icon github-icon" />
              <h3>GitHub Stats</h3>
            </div>
            <div className="profile-stats-container">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=sanitta2002&show_icons=true&theme=tokyonight&hide_border=true&bg_color=transparent" 
                alt="GitHub Stats" 
                className="stat-image"
              />
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=sanitta2002&theme=tokyonight&hide_border=true&background=transparent" 
                alt="GitHub Streak" 
                className="stat-image mt-3"
              />
            </div>
            <div className="profile-action">
              <a href="https://github.com/sanitta2002/leetcode-solution" target="_blank" rel="noreferrer" className="btn btn-outline">
                View GitHub
              </a>
            </div>
          </motion.div>

          {/* LeetCode Profile */}
          <motion.div 
            className="profile-card glass-card leetcode-card-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="profile-header">
              <SiLeetcode className="profile-icon leetcode-icon" />
              <h3>LeetCode Progress</h3>
            </div>
            
            <div className="leetcode-custom-stats">
               <motion.div 
                 className="lc-badge"
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}
               >
                 <FaCode className="lc-badge-icon" />
               </motion.div>
               <motion.h4 
                 className="lc-count"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 }}
               >
                 500+
               </motion.h4>
               <motion.p 
                 className="lc-text"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6 }}
               >
                 Problems Solved
               </motion.p>
               
               <div className="lc-bar-chart">
                 <div className="lc-bar easy">
                    <span>Easy</span>
                    <div className="bar-track">
                      <motion.div 
                        className="bar-fill" 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '45%' }} 
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                 </div>
                 <div className="lc-bar medium">
                    <span>Medium</span>
                    <div className="bar-track">
                      <motion.div 
                        className="bar-fill" 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '75%' }} 
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      />
                    </div>
                 </div>
                 <div className="lc-bar hard">
                    <span>Hard</span>
                    <div className="bar-track">
                      <motion.div 
                        className="bar-fill" 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '30%' }} 
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                      />
                    </div>
                 </div>
               </div>
            </div>

            <div className="profile-action">
              <a href="https://leetcode.com/u/sanittajohnson/" target="_blank" rel="noreferrer" className="btn btn-outline leetcode-btn">
                View LeetCode
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
