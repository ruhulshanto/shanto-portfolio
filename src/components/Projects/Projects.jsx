import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-container">
                <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="section-title">Featured <span>Projects</span></h2>
                    <div className="section-line"></div>
                    <p className="section-desc">Showcasing innovative solutions and real-world applications</p>
                </motion.div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div 
                            className="project-card" 
                            key={project.id} 
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ 
                                scale: 1.02,
                                y: -10,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                        >
                            <div className="project-card-inner">
                                <div className="project-number">0{index + 1}</div>
                                <div className="project-content">
                                    <div className="project-label">Featured Project</div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="project-features-box">
                                        <h4><span className="feature-icon">▸</span> Key Features</h4>
                                        <ul className="project-features">
                                            {project.features.map((f, i) => (<li key={i}>{f}</li>))}
                                        </ul>
                                    </div>
                                    <div className="project-tech-stack">
                                        <h4>Tech Stack</h4>
                                        <div className="tech-tags">
                                            {project.tech.map((t, i) => (<span key={i} className="tech-tag">{t}</span>))}
                                        </div>
                                    </div>
                                </div>
                                <div className="project-actions">
                                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                                        <span>Live Demo</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </a>
                                    <a href={project.clientRepo} target="_blank" rel="noopener noreferrer" className="action-btn">
                                        <FaGithub /> <span>Client</span>
                                    </a>
                                    <a href={project.serverRepo} target="_blank" rel="noopener noreferrer" className="action-btn">
                                        <FaGithub /> <span>Server</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
