import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './Hero.css';

const codeLines = [
  { indent: 0, parts: [{ type: 'keyword', text: 'const' }, { type: 'variable', text: ' developer' }, { type: 'operator', text: ' = ' }, { type: 'punct', text: '{' }] },
  { indent: 1, parts: [{ type: 'property', text: 'name' }, { type: 'punct', text: ': ' }, { type: 'string', text: '"Sanitta Johnson"' }, { type: 'punct', text: ',' }] },
  { indent: 1, parts: [{ type: 'property', text: 'role' }, { type: 'punct', text: ': ' }, { type: 'string', text: '"Full Stack Developer"' }, { type: 'punct', text: ',' }] },
  { indent: 1, parts: [{ type: 'property', text: 'stack' }, { type: 'punct', text: ': [' }, { type: 'string', text: '"MongoDB"' }, { type: 'punct', text: ', ' }, { type: 'string', text: '"Express"' }, { type: 'punct', text: ', ' }, { type: 'string', text: '"React"' }, { type: 'punct', text: ', ' }, { type: 'string', text: '"Node"' }, { type: 'punct', text: '],' }] },
  { indent: 1, parts: [{ type: 'property', text: 'passion' }, { type: 'punct', text: ': ' }, { type: 'string', text: '"Scalable web apps"' }] },
  { indent: 0, parts: [{ type: 'punct', text: '};' }] },
  { indent: 0, parts: [] },
  { indent: 0, parts: [{ type: 'function', text: 'developer' }, { type: 'punct', text: '.' }, { type: 'function', text: 'build' }, { type: 'punct', text: '();' }] },
];

const colorMap = {
  keyword: '#ff7b72',
  variable: '#79c0ff',
  property: '#7ee787',
  string: '#a5d6ff',
  operator: '#ff7b72',
  function: '#d2a8ff',
  punct: '#8b949e',
};

const Hero = () => {
  return (
    <section id="home" className="hero section">
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-grid-bg"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot"></span>
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text">Sanitta Johnson</span>
          </motion.h1>

          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I craft scalable, high-performance web applications with clean
            architecture and pixel-perfect user experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline">
              Hire Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="code-window">
            <div className="window-chrome">
              <div className="window-dots">
                <span className="wdot wdot-r"></span>
                <span className="wdot wdot-y"></span>
                <span className="wdot wdot-g"></span>
              </div>
              <span className="window-title">portfolio.js</span>
            </div>
            <div className="window-body">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  className="code-line"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                >
                  <span className="line-number">{i + 1}</span>
                  <span className="line-content" style={{ paddingLeft: `${line.indent * 20}px` }}>
                    {line.parts.map((part, j) => (
                      <span key={j} style={{ color: colorMap[part.type] || '#e6edf3' }}>
                        {part.text}
                      </span>
                    ))}
                  </span>
                </motion.div>
              ))}
              <motion.div
                className="cursor-blink"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 1.8, duration: 1, repeat: Infinity }}
              >
                _
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
