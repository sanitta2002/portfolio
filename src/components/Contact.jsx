import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    // TODO: Replace with your actual Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("Failed to send message: " + data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            06. What's Next
          </motion.div>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get In <span>Touch</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I am currently looking for full-time developer roles. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="contact-content">
          <motion.div 
            className="contact-image-panel glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/contact.png" 
              alt="Contact Workstation" 
              className="contact-bg-img" 
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"; }} 
            />
            <div className="contact-image-overlay">
              <h3>Let's collaborate!</h3>
              <p className="contact-desc">
                Reach out if you want to collaborate on a project or simply have a chat about web development.
              </p>

              <div className="contact-links-photo">
                <a href="mailto:sanittajohnson28@gmail.com" className="contact-link-light">
                  <div className="link-icon-light"><FaEnvelope /></div>
                  <span>sanittajohnson28@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/sanitta-johnson-5b7820325" target="_blank" rel="noreferrer" className="contact-link-light">
                  <div className="link-icon-light"><FaLinkedin /></div>
                  <span>LinkedIn Profile</span>
                </a>
                <a href="https://github.com/sanitta2002" target="_blank" rel="noreferrer" className="contact-link-light">
                  <div className="link-icon-light"><FaGithub /></div>
                  <span>GitHub Portfolio</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Hi Sanitta, I'd like to discuss a project..." required></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              <FaPaperPlane /> Send Message
            </button>
            {result && <span className="form-status">{result}</span>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
