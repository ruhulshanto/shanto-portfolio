import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Home as HomeIcon, 
    User, 
    Code2, 
    Briefcase, 
    Mail, 
    Moon, 
    Sun,
    Menu,
    X
} from 'lucide-react';
import './Navbar.css';
import Logo from '../Logo/Logo';

const Navbar = ({ isDarkMode, setIsDarkMode, activeSection, scrollToSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home', icon: HomeIcon },
        { id: 'about', label: 'About', icon: User },
        { id: 'skills', label: 'Skills', icon: Code2 },
        { id: 'projects', label: 'Work', icon: Briefcase },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];

    return (
        <>
            {/* Top Desktop Navigation (Default, NOT Scrolled) */}
            <AnimatePresence>
                {!isScrolled && (
                    <motion.nav 
                        className={`premium-top-navbar ${isDarkMode ? 'dark' : ''}`}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="navbar-container">
                            <div 
                                className="navbar-brand"
                                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                            >
                                <Logo size={36} />
                            </div>

                            <div className="navbar-links">
                                {navItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = activeSection === item.id;
                                    return (
                                        <div
                                            key={item.id}
                                            className={`nav-item ${isActive ? 'active' : ''}`}
                                            onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                                        >
                                            <span className="nav-item-content">
                                                <Icon size={18} className="nav-icon" />
                                                <span className="nav-label">{item.label}</span>
                                            </span>
                                            {isActive && (
                                                <motion.div 
                                                    className="active-indicator"
                                                    layoutId="topActiveIndicator"
                                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="navbar-actions">
                                <button 
                                    className="theme-toggle-btn"
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    title="Toggle theme"
                                >
                                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                                </button>
                                <button 
                                    className="mobile-menu-btn"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Left Side Navigation (When Scrolled) */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.nav 
                        className={`premium-side-navbar ${isDarkMode ? 'dark' : ''}`}
                        initial={{ x: -100, opacity: 0, scale: 0.8 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: -100, opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <div className="side-navbar-content">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.id;
                                return (
                                    <div
                                        key={item.id}
                                        className={`side-nav-item ${isActive ? 'active' : ''}`}
                                        onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                                        title={item.label}
                                    >
                                        <span className="side-nav-item-content">
                                            <Icon size={20} className="side-icon" />
                                        </span>
                                        {isActive && (
                                            <motion.div 
                                                className="side-active-indicator"
                                                layoutId="sideActiveIndicator"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                            
                            <div className="side-divider" />
                            
                            <button 
                                className="side-theme-toggle"
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                title="Toggle theme"
                            >
                                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && !isScrolled && (
                    <motion.div 
                        className={`mobile-menu ${isDarkMode ? 'dark' : ''}`}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="mobile-menu-content">
                            {navItems.map((item, i) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.id;
                                return (
                                    <motion.div
                                        key={item.id}
                                        className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => {
                                            scrollToSection(item.id);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <Icon size={20} />
                                        <span>{item.label}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Mobile Actions Overlay when Scrolled (so they can toggle theme/menu) */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.div 
                        className={`mobile-scrolled-actions ${isDarkMode ? 'dark' : ''}`}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                    >
                        <button 
                            className="mobile-menu-btn"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Navigation Menu (When Scrolled) */}
            <AnimatePresence>
                {isMobileMenuOpen && isScrolled && (
                    <motion.div 
                        className={`mobile-menu scrolled ${isDarkMode ? 'dark' : ''}`}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="mobile-menu-content">
                            {navItems.map((item, i) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.id;
                                return (
                                    <motion.div
                                        key={item.id}
                                        className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => {
                                            scrollToSection(item.id);
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        <Icon size={20} />
                                        <span>{item.label}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
