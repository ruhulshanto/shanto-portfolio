import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ displayText, scrollToSection }) => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-bg-pattern"></div>
            <div className="hero-content-wrapper">
                <div className="hero-left">
                    <motion.div className="hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.span className="greeting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Welcome to my portfolio</motion.span>
                        <motion.h1 className="name-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
                            <span>{displayText}</span><motion.span className="cursor" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
                        </motion.h1>
                        <motion.p className="subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>Full Stack Developer specializing in MERN Stack & Next.js</motion.p>
                        <motion.p className="description" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>Building modern, scalable web applications with clean code and great user experiences.</motion.p>
                        <motion.div className="cta-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
                            <a href="#projects" className="primary-btn" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>View My Work</a>
                            <a href="#contact" className="secondary-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Me</a>
                        </motion.div>
                        <motion.div className="social-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                            <a href="mailto:ruhulshanto8082@gmail.com" className="social-icon" title="Email"><FaEnvelope /></a>
                            <a href="https://github.com/ruhulshanto" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub"><FaGithub /></a>
                            <a href="https://linkedin.com/in/ruhul-amin-shanto" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn"><FaLinkedin /></a>
                        </motion.div>
                        <motion.div className="stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                            <div className="stat-item"><span className="stat-number">9+</span><span className="stat-label">Projects</span></div>
                            <div className="stat-item"><span className="stat-number">1+</span><span className="stat-label">Years</span></div>
                            <div className="stat-item"><span className="stat-number">100%</span><span className="stat-label">Clients</span></div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="hero-right">
                    <motion.div className="profile-image-wrapper" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
                        <div className="profile-image">
                            <img src="https://i.ibb.co.com/Sw9Ff6St/shanto-Img.jpg" alt="Shanto" />
                        </div>
                    </motion.div>
                    <motion.div className="floating-badge badge-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
                        <div className="status-dot"></div>
                        <span>Available for Hire</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
