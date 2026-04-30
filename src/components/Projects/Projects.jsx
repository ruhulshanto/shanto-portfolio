import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const StickyCard = ({ project, index, total, progress }) => {
    const containerRef = useRef(null);

    // Dynamic range for when this card starts scaling down
    const range = [index / total, 1];
    
    // The number of cards that will stack on top of this one
    const cardsOnTop = total - index - 1;
    
    // Scale down by 0.04 for each card on top
    const targetScale = 1 - (cardsOnTop * 0.04);
    const scale = useTransform(progress, range, [1, targetScale]);
    
    // Opacity drops by 0.2 for each card on top, but never goes below 0.3
    const targetOpacity = Math.max(0.3, 1 - (cardsOnTop * 0.2));
    const opacity = useTransform(progress, range, [1, targetOpacity]);

    return (
        <div ref={containerRef} className="sticky-card-container">
            <motion.div 
                className="sticky-project-card"
                style={{ 
                    scale, 
                    top: `calc(5vh + ${index * 30}px)` 
                }}
            >
                <motion.div className="sticky-project-card-inner" style={{ opacity }}>
                    <div className="project-number">0{index + 1}</div>
                    
                    <div className="sticky-content-grid">
                        <div className="sticky-content-left">
                            <div className="project-label">Featured Project</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            
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

                        <div className="sticky-content-right">
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
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const Projects = ({ projects }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section id="projects" className="featured-sticky-section" ref={containerRef}>
            <div className="section-container">
                <motion.div 
                    className="section-header" 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                >
                    <h2 className="section-title skills-intro">Featured <span>Projects</span></h2>
                    <div className="section-line"></div>
                    <p className="section-desc">Showcasing innovative solutions and real-world applications</p>
                </motion.div>
            </div>

            <div className="sticky-projects-wrapper">
                {projects.map((project, index) => (
                    <StickyCard 
                        key={project.id} 
                        project={project} 
                        index={index} 
                        total={projects.length} 
                        progress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
