import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaCreditCard } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa6';
import './Skills.css';

const Skills = ({ skills }) => {
    const getIcon = (category) => {
        const icons = {
            frontend: <FaCode />,
            backend: <FaNodeJs />,
            database: <FaDatabase />,
            tools: <FaTools />,
            payment: <FaCreditCard />
        };
        return icons[category] || <FaCode />;
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="skills" className="skills-section">
            <div className="section-container">
                <motion.div 
                    className="section-header" 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">My <span>Skills</span></h2>
                    <div className="section-line"></div>
                </motion.div>
                <motion.div 
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div 
                            className="skill-card" 
                            key={category} 
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="skill-icon">{getIcon(category)}</div>
                            <h3>{category}</h3>
                            <ul>
                                {items.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
        </section>
    );
};

export default Skills;
