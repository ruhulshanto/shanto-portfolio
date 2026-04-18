import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wave">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <Logo size={36} iconColor="#ffffff" />
                        </div>
                        <p className="footer-desc">Full Stack Developer crafting modern, scalable web applications with clean code and great user experiences.</p>
                        <div className="footer-social">
                            <a href="https://linkedin.com/in/ruhul-amin-shanto" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="https://github.com/ruhulshanto" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><FaGithub /></a>
                            <a href="mailto:ruhulshanto8082@gmail.com" className="social-link" aria-label="Email"><FaEnvelope /></a>
                        </div>
                    </div>
                    <div className="footer-links-group">
                        <motion.div 
                            className="footer-links"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4>Quick Links</h4>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </motion.div>
                        <motion.div 
                            className="footer-contact"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4>Get In Touch</h4>
                            <a href="mailto:ruhulshanto8082@gmail.com" className="contact-link"><FaEnvelope /> ruhulshanto8082@gmail.com</a>
                            <a href="tel:01628142448" className="contact-link"><FaPhone /> +880 1628-142448</a>
                            <p><FaMapMarkerAlt /> Dhaka, Bangladesh</p>
                        </motion.div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Ruhul Amin Shanto. All rights reserved.</p>
                    <p>Built with <span className="highlight">React</span> & <span className="highlight">Framer Motion</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
