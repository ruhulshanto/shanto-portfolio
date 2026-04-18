import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ formData, setFormData, handleContactSubmit, isSubmitting }) => {
    return (
        <section id="contact" className="contact-section">
            <div className="section-container">
                <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="section-title">Let's <span>Connect</span></h2>
                    <div className="section-line"></div>
                    <p className="section-desc">I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out!</p>
                </motion.div>
                <div className="contact-grid">
                    <motion.div className="contact-info" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <div className="availability-badge">
                            <span className="pulse"></span>
                            <span>Available for freelance & full-time roles</span>
                        </div>
                        <div className="contact-card">
                            <h3>Contact Info</h3>
                            <div className="contact-items">
                                <div className="contact-item">
                                    <div className="contact-icon"><FaEnvelope /></div>
                                    <div>
                                        <p className="contact-label">Email</p>
                                        <a href="mailto:ruhulshanto8082@gmail.com">ruhulshanto8082@gmail.com</a>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon"><FaPhone /></div>
                                    <div>
                                        <p className="contact-label">Phone</p>
                                        <a href="tel:01628142448">+880 1628-142448</a>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon"><FaMapMarkerAlt /></div>
                                    <div>
                                        <p className="contact-label">Location</p>
                                        <p>Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="social-section">
                                <p>Find me on</p>
                                <div className="social-buttons">
                                    <a href="https://linkedin.com/in/ruhul-amin-shanto" target="_blank" rel="noopener noreferrer" className="social-btn"><FaLinkedin /> LinkedIn</a>
                                    <a href="https://github.com/ruhulshanto" target="_blank" rel="noopener noreferrer" className="social-btn"><FaGithub /> GitHub</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="contact-form" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                        <h3>Send a Message</h3>
                        <form onSubmit={handleContactSubmit}>
                            <div className="form-row">
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        required 
                                    />
                                    <label>Your Name</label>
                                </div>
                                <div className="input-group">
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required 
                                    />
                                    <label>Your Email</label>
                                </div>
                            </div>
                            <div className="input-group">
                                <textarea 
                                    rows="5" 
                                    placeholder="Your Message" 
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    required
                                ></textarea>
                                <label>Your Message</label>
                            </div>
                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className="btn-content"><span className="loader"></span> Sending...</span>
                                ) : (
                                    <span className="btn-content">Send Message</span>
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
