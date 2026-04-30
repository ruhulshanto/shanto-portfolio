import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaLanguage } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="section-container">
                <motion.div 
                    className="section-header" 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                >
                    <h2 className="section-title skills-intro">About <span>Me</span></h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">Get to know me better</p>
                </motion.div>

                <div className="about-content">
                    <motion.div 
                        className="about-card main-card"
                        initial={{ opacity: 0, x: -30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="card-header">
                            <FaUser className="card-icon" />
                            <h3>Who I Am</h3>
                        </div>
                        <p>I'm a passionate Full Stack Developer specializing in the MERN stack and Next.js. With a strong problem-solving mindset and dedication to writing clean, efficient code, I enjoy building responsive, scalable web applications.</p>
                        <p>Currently pursuing my Bachelor's in Computer Science and Engineering at Southeast University, Dhaka, with an expected graduation in March 2026.</p>
                    </motion.div>

                    <motion.div 
                        className="about-card education-card"
                        initial={{ opacity: 0, x: 30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ delay: 0.3 }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="card-header">
                            <FaGraduationCap className="card-icon" />
                            <h3>Education & Skills</h3>
                        </div>
                        <div className="edu-timeline">
                            <div className="edu-item">
                                <div className="edu-dot"></div>
                                <div className="edu-content">
                                    <h4>Diploma in Data Telecommunication</h4>
                                    <p className="edu-school">Feni Computer Institute</p>
                                    <p className="edu-detail">Completed: July 2021 | CGPA: 3.54/4.00</p>
                                </div>
                            </div>
                            <div className="edu-item">
                                <div className="edu-dot"></div>
                                <div className="edu-content">
                                    <h4>BSc in Computer Science & Engineering</h4>
                                    <p className="edu-school">Southeast University, Dhaka</p>
                                    <p className="edu-detail">Expected: March 2026 | CGPA: 3.42/4.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="languages-section">
                            <div className="lang-header">
                                <FaLanguage className="lang-icon" />
                                <h4>Languages</h4>
                            </div>
                            <div className="lang-tags">
                                <span className="lang-tag">Bengali (Native)</span>
                                <span className="lang-tag">English (Intermediate B2)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
