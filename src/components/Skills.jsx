import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaFigma 
} from 'react-icons/fa';
import { 
  SiJavascript, SiExpress, SiNestjs, SiMongodb, SiPostman, SiPostgresql 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="category-icon text-cyan" />,
      skills: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="category-icon text-green" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#FFF" /> },
        { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
      ]
    },
    {
      title: "Database",
      icon: <SiMongodb className="category-icon text-green" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "SQL", icon: <SiPostgresql color="#00758F" /> },
      ]
    },
    {
      title: "Tools",
      icon: <FaGitAlt className="category-icon text-orange" />,
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
        { name: "GitHub", icon: <FaGithub color="#FFF" /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
        { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

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
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              
              <motion.div 
                className="skills-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} className="skill-item" variants={itemVariants}>
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
