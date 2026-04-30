import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ formData, setFormData, handleContactSubmit, isSubmitting }) => {
    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="section-title skills-intro">Let's <span>Connect</span></h2>
                    <div className="section-line"></div>
                    <p className="section-desc">I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out!</p>
                </motion.div>
                <div className="contact-grid">
                    <motion.div className="contact-info" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <h3 className="column-title">Talk to me</h3>
                        <div className="contact-info-grid">
                            <div className="contact-glass-card centered-card">
                                <div className="contact-icon icon-email"><FaEnvelope /></div>
                                <p className="contact-label">Email</p>
                                <span className="contact-value">ruhulshanto8082@gmail.com</span>
                                <a href="mailto:ruhulshanto8082@gmail.com" className="contact-action">
                                    Write me <span className="action-arrow">&#8594;</span>
                                </a>
                            </div>

                            <div className="contact-glass-card centered-card">
                                <div className="contact-icon icon-linkedin"><FaLinkedin /></div>
                                <p className="contact-label">LinkedIn</p>
                                <span className="contact-value">ruhul-amin-shanto</span>
                                <a href="https://linkedin.com/in/ruhul-amin-shanto" target="_blank" rel="noopener noreferrer" className="contact-action">
                                    Write me <span className="action-arrow">&#8594;</span>
                                </a>
                            </div>

                            <div className="contact-glass-card centered-card">
                                <div className="contact-icon icon-github"><FaGithub /></div>
                                <p className="contact-label">GitHub</p>
                                <span className="contact-value">ruhulshanto</span>
                                <a href="https://github.com/ruhulshanto" target="_blank" rel="noopener noreferrer" className="contact-action">
                                    Write me <span className="action-arrow">&#8594;</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="contact-form-container" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <h3 className="column-title">Write me your project</h3>
                        <form onSubmit={handleContactSubmit} className="contact-form-minimal">
                            <div className="minimal-input-group">
                                <label>Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Insert your Name" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="minimal-input-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    placeholder="Insert your email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required 
                                />
                            </div>
                            <div className="minimal-input-group">
                                <label>Project</label>
                                <textarea 
                                    rows="6" 
                                    placeholder="Write your project" 
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="minimal-submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className="btn-content"><span className="loader"></span> Sending...</span>
                                ) : (
                                    <span className="btn-content">
                                        Send Message 
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    </span>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
