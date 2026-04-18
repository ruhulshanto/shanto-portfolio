import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'sonner';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Component Imports
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

// Data Import
import { projects, skills } from '../../data/portfolioData';

// Style Import
import './Home.css';

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeSection, setActiveSection] = useState("home");
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // TSParticles initialization
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesOptions = {
        fullScreen: { enable: true, zIndex: -1 },
        background: {
            color: isDarkMode ? "#0f172a" : "#f8fafc",
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                resize: true,
            },
            modes: {
                grab: { distance: 140, links: { opacity: 1 } },
            },
        },
        particles: {
            color: { value: isDarkMode ? "#ffffff" : "#2563eb" },
            links: {
                color: isDarkMode ? "#ffffff" : "#2563eb",
                distance: 150,
                enable: true,
                opacity: isDarkMode ? 0.5 : 0.4,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.5,
                straight: false,
            },
            number: {
                density: { enable: true, area: 800 },
                value: isDarkMode ? 80 : 60,
            },
            opacity: { value: isDarkMode ? 0.6 : 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };
    
    const fullText = "Hi, I'm Ruhul Amin Shanto";

    // Typing animation logic
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    // Scroll and Section Active handling
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skills", "projects", "contact"];
            const scrollY = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && scrollY >= element.offsetTop && scrollY < element.offsetTop + element.offsetHeight) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Contact form submission
    const handleContactSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            'service_vddo0ko',      // Service ID
            'template_27t8099',     // Template ID  
            {
                user_name: formData.name,
                user_email: formData.email,
                reply_to: formData.email,
                message: formData.message,
                name: formData.name,
                from_name: formData.name,
                email: formData.email,
                from_email: formData.email,
            },
            'sflGmlqKlAxPVncwD'     // Public Key
        ).then(() => {
            toast.success('Message sent! I will get back to you soon.', {
                description: `Sent from ${formData.email}`,
            });
            setFormData({ name: '', email: '', message: '' });
        }).catch((err) => {
            console.error('Failed to send message:', err);
            toast.error('Failed to send message', {
                description: 'Please try again later or contact me via LinkedIn.',
            });
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`home-container ${isDarkMode ? 'dark' : ''}`}>
            <Toaster position="top-center" richColors closeButton />
            
            <Particles
                id="tsparticles"
                key={isDarkMode ? 'dark' : 'light'}
                init={particlesInit}
                options={particlesOptions}
            />

            <Navbar 
                isDarkMode={isDarkMode} 
                setIsDarkMode={setIsDarkMode} 
                activeSection={activeSection} 
                scrollToSection={scrollToSection} 
            />

            <main>
                <Hero 
                    displayText={displayText} 
                    scrollToSection={scrollToSection} 
                />
                
                <About />
                
                <Skills skills={skills} />
                
                <Projects projects={projects} />
                
                <Contact 
                    formData={formData} 
                    setFormData={setFormData} 
                    handleContactSubmit={handleContactSubmit} 
                    isSubmitting={isSubmitting} 
                />
            </main>

            <Footer />
        </div>
    );
};

export default Home;