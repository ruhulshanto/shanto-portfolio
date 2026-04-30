import React, { useState } from 'react';
import './Skills.css';
import { motion, AnimatePresence } from 'framer-motion';

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiGit,
    SiTailwindcss,
    SiPostgresql,
} from 'react-icons/si';

const skillsData = [
    { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', Icon: SiCss3, color: '#1572B6', category: 'Frontend' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'React', Icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff', category: 'Frontend' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', category: 'Backend' },
    { name: 'Express', Icon: SiExpress, color: '#ffffff', category: 'Backend' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', category: 'Backend' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791', category: 'Backend' },
    { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28', category: 'Backend' },
    { name: 'Git', Icon: SiGit, color: '#F05032', category: 'Tools' },
];

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredSkills = skillsData.filter(skill => 
        activeCategory === 'All' ? true : skill.category === activeCategory
    );

    return (
        <section id="skills" className="skills-section">
            <div className="skills-container">
                <div className="skills-header">
                    <motion.p 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="skills-intro"
                    >
                        Skill <span>Set</span>
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="skills-title"
                    >
                        Tools and languages I build with
                    </motion.h2>
                </div>

                <div className="skills-filters-container">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="skills-filters"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div layout className="skills-grid">
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={skill.name}
                                className="skill-card-modern"
                            >
                                <div className="skill-glow" style={{ background: skill.color }}></div>
                                <div className="skill-content">
                                    <skill.Icon className="skill-icon" style={{ color: skill.color }} />
                                    <h3 className="skill-name">{skill.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
