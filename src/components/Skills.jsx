import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaFigma, FaRobot, FaBrain,
  FaDocker, FaAws, FaInfinity
} from 'react-icons/fa';
import { 
  SiJavascript, SiExpress, SiNestjs, SiMongodb, SiPostman, SiPostgresql 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#FFF" /> },
        { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "SQL", icon: <SiPostgresql color="#00758F" /> },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#FFF" /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
        { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
      ]
    },
    {
      title: "AI Tools",
      skills: [
        { name: "Cursor", icon: <FaRobot color="#FFF" /> },
        { name: "ChatGPT", icon: <FaBrain color="#10A37F" /> },
        { name: "Claude", icon: <FaRobot color="#D97757" /> },
        { name: "Gemini", icon: <FaBrain color="#4F86F9" /> },
        { name: "Antigravity", icon: <FaRobot color="#00d4ff" /> },
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "AWS", icon: <FaAws color="#FF9900" /> },
        { name: "CI/CD", icon: <FaInfinity color="#00d4ff" /> },
      ]
    }
  ];

  // Flatten skills for the marquee
  const allSkills = skillCategories.flatMap(cat => cat.skills);
  
  // Dynamic marquee content (duplicated for seamless loop)
  const marqueeSkills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            02. Technical Arsenal
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My <span>Skills</span>
          </motion.h2>
        </div>

        <div className="skills-marquee-wrapper">
          <div className="marquee-track">
            {marqueeSkills.map((skill, idx) => (
              <div key={`${skill.name}-${idx}`} className="marquee-item glass-card">
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="category-header">
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
