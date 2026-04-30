import { motion, useReducedMotion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaLaptopCode } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiMongodb, SiJavascript, SiPostgresql } from 'react-icons/si';
import { useState, useEffect } from 'react';
import './Hero.css';
import { DiNodejsSmall } from 'react-icons/di';

const Hero = ({ displayText, scrollToSection }) => {
    const reducedMotion = useReducedMotion();
    const [displayedText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    const techStack = [
        { icon: SiJavascript, label: 'JavaScript' },
        { icon: SiReact, label: 'React' },
        { icon: SiNextdotjs, label: 'Next.js' }
    ];

    // Typing animation effect
    useEffect(() => {
        if (reducedMotion) {
            setDisplayedText(displayText);
            setIsTypingComplete(true);
            return;
        }

        let i = 0;
        const timer = setInterval(() => {
            if (i < displayText.length) {
                setDisplayedText(displayText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => setIsTypingComplete(true), 500);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [displayText, reducedMotion]);

    // Container variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <section id="home" className="hero-section">
            <div className="hero-bg-pattern"></div>
            <div className="wave-container">
                {[...Array(10)].map((_, i) => (
                    <motion.span
                        key={i}
                        className="wave-dot"
                        style={{ left: `${Math.random() * 90}%`, top: `${Math.random() * 85}%` }}
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ['0%', '-10%', '0%'],
                            opacity: [0, 0.6, 0],
                            scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.3
                        }}
                    />
                ))}
            </div>
            <div className="hero-content-wrapper">
                <div className="hero-left">
                    <motion.div
                        className="hero-content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span
                            className="greeting"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            Welcome to my portfolio
                        </motion.span>

                        <motion.h1
                            className="name-text"
                            variants={itemVariants}
                        >
                            <span>{displayedText}</span>
                            {!isTypingComplete && (
                                <motion.span
                                    className="cursor"
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                />
                            )}
                            {isTypingComplete && (
                                <motion.span
                                    className="cursor"
                                    animate={{
                                        opacity: [0, 1, 0],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            )}
                        </motion.h1>

                        <motion.p
                            className="subtitle"
                            variants={itemVariants}
                        >
                            Full Stack Developer specializing in MERN Stack & Next.js
                        </motion.p>

                        <motion.p
                            className="description"
                            variants={itemVariants}
                        >
                            Building modern, scalable web applications with clean code and great user experiences.
                        </motion.p>

                        <motion.div className="hero-tech-list" variants={itemVariants}>
                            {techStack.map(({ icon: Icon, label }) => (
                                <div key={label} className="tech-pill">
                                    <Icon />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="cta-buttons"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="#projects"
                                className="primary-btn"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                            >
                                View My Work
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="secondary-btn"
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                            >
                                Contact Me
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="social-links"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="mailto:ruhulshanto8082@gmail.com"
                                className="social-icon"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    backgroundColor: "var(--primary)",
                                    color: "#fff"
                                }}
                                whileTap={{ scale: 0.95 }}
                                title="Email"
                            >
                                <FaEnvelope />
                            </motion.a>
                            <motion.a
                                href="https://github.com/ruhulshanto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: -5,
                                    backgroundColor: "var(--primary)",
                                    color: "#fff"
                                }}
                                whileTap={{ scale: 0.95 }}
                                title="GitHub"
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/ruhul-amin-shanto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    backgroundColor: "var(--primary)",
                                    color: "#fff"
                                }}
                                whileTap={{ scale: 0.95 }}
                                title="LinkedIn"
                            >
                                <FaLinkedin />
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="stats"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="stat-item"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.span
                                    className="stat-number"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                                >
                                    9+
                                </motion.span>
                                <span className="stat-label">Projects</span>
                            </motion.div>
                            <motion.div
                                className="stat-item"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.span
                                    className="stat-number"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                                >
                                    1+
                                </motion.span>
                                <span className="stat-label">Years</span>
                            </motion.div>
                            <motion.div
                                className="stat-item"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.span
                                    className="stat-number"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1.9, type: "spring", stiffness: 200 }}
                                >
                                    100%
                                </motion.span>
                                <span className="stat-label">Clients</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="hero-right">
                    <motion.div
                        className="profile-image-wrapper"
                        initial={{ opacity: 0, scale: 0.85, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            type: "spring",
                            stiffness: 90
                        }}
                    >
                        <motion.div
                            className="profile-image"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            whileHover={!reducedMotion ? {
                                scale: 1.06,
                                rotate: 1,
                                transition: { duration: 0.3 }
                            } : {}}
                        >
                            <img
                                src="https://i.ibb.co.com/Sw9Ff6St/shanto-Img.jpg"
                                alt="Shanto"
                            />
                            <motion.div
                                className="image-overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.05, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>

                       

                        <motion.div
                            className="floating-badge badge-2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.8, duration: 0.8 }}
                            whileHover={!reducedMotion ? {
                                scale: 0.65,
                                transition: { type: "spring", stiffness: 260 }
                            } : {}}
                        >
                            <DiNodejsSmall className="badge-icon" />
                            Full Stack Developer
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
