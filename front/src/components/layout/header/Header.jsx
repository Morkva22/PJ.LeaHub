import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Brain,
    TrendingUp,
    Users,
    Briefcase,
    Gift,
    Building2,
    Github,
    Code,
    Puzzle,
    BookOpen,
    Wrench,
    LifeBuoy,
    MessageCircle,
    Calendar,
    Mail
} from 'lucide-react';
import styles from './Header.module.css';
import Button from '../../ui/button/Button.jsx';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    LeaHub
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {/* Learn Dropdown */}
                        <li
                            className={styles.dropdown}
                            onMouseEnter={() => setOpenDropdown('learn')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <a href="/learn" className={styles.navLink}>
                                Learn
                                <svg className={styles.caretIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </a>
                            {openDropdown === 'learn' && (
                                <div className={styles.dropdownMenu}>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Work Styles</h4>
                                        <a href="/learn/diverse-minds">
                                            <Brain size={18} />
                                            Work Management for Diverse Minds
                                        </a>
                                        <a href="/learn/strategic">
                                            <TrendingUp size={18} />
                                            Strategic Project Management
                                        </a>
                                        <a href="/learn/cross-functional">
                                            <Users size={18} />
                                            Cross Functional Project Management
                                        </a>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Archetypes</h4>
                                        <a href="/learn/small-business">
                                            <Briefcase size={18} />
                                            Small Business Owners
                                        </a>
                                        <a href="/learn/product-teams">
                                            <Gift size={18} />
                                            Product Teams
                                        </a>
                                        <a href="/learn/agencies">
                                            <Building2 size={18} />
                                            Digital Consulting Agencies
                                        </a>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Integrations</h4>
                                        <a href="/learn/open-source">
                                            <Github size={18} />
                                            LeaHub is Open Source
                                        </a>
                                        <a href="/learn/built-in">
                                            <Puzzle size={18} />
                                            Built and Embedded Into Your Tools
                                        </a>
                                        <a href="/learn/jira-alternative">
                                            <Code size={18} />
                                            Open Source Jira Data Center Alternative
                                        </a>
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* Solutions Dropdown */}
                        <li
                            className={styles.dropdown}
                            onMouseEnter={() => setOpenDropdown('solutions')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <a href="/solutions" className={styles.navLink}>
                                Solutions
                                <svg className={styles.caretIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </a>
                            {openDropdown === 'solutions' && (
                                <div className={styles.dropdownMenu}>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Work Styles</h4>
                                        <a href="/solutions/diverse-minds">
                                            <Brain size={18} />
                                            Work Management for Diverse Minds
                                        </a>
                                        <a href="/solutions/strategic">
                                            <TrendingUp size={18} />
                                            Strategic Project Management
                                        </a>
                                        <a href="/solutions/cross-functional">
                                            <Users size={18} />
                                            Cross Functional Project Management
                                        </a>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Archetypes</h4>
                                        <a href="/solutions/small-business">
                                            <Briefcase size={18} />
                                            Small Business Owners
                                        </a>
                                        <a href="/solutions/product-teams">
                                            <Gift size={18} />
                                            Product Teams
                                        </a>
                                        <a href="/solutions/agencies">
                                            <Building2 size={18} />
                                            Digital Consulting Agencies
                                        </a>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Integrations</h4>
                                        <a href="/solutions/open-source">
                                            <Github size={18} />
                                            LeaHub is Open Source
                                        </a>
                                        <a href="/solutions/built-in">
                                            <Puzzle size={18} />
                                            Built and Embedded Into Your Tools
                                        </a>
                                        <a href="/solutions/jira-alternative">
                                            <Code size={18} />
                                            Open Source Jira Data Center Alternative
                                        </a>
                                    </div>
                                </div>
                            )}
                        </li>

                        {/* Resources Dropdown */}
                        <li
                            className={styles.dropdown}
                            onMouseEnter={() => setOpenDropdown('resources')}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <a href="/resources" className={styles.navLink}>
                                Resources
                                <svg className={styles.caretIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </a>
                            {openDropdown === 'resources' && (
                                <div className={styles.dropdownMenu}>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Help</h4>
                                        <a href="/blog">
                                            <BookOpen size={18} />
                                            Blog
                                        </a>
                                        <a href="/tech-corner">
                                            <Wrench size={18} />
                                            Tech-Corner
                                        </a>
                                        <a href="/help-center">
                                            <LifeBuoy size={18} />
                                            Help Center
                                        </a>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Open Source</h4>
                                        <a href="/404-recources" rel="noopener noreferrer">
                                            <Github size={18} />
                                            Github
                                        </a>
                                        <a href="/developer-docs">
                                            <Code size={18} />
                                            Developer/API Docs
                                        </a>
                                        <a href="/plugin-marketplace">
                                            <Puzzle size={18} />
                                            Plugin Marketplace
                                        </a>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Support</h4>
                                        <a href="/community-chat">
                                            <MessageCircle size={18} />
                                            Community Chat
                                        </a>
                                        <a href="/schedule">
                                            <Calendar size={18} />
                                            Schedule a Call
                                        </a>
                                        <a href="/contact">
                                            <Mail size={18} />
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li><Link to="/features" className={styles.navLink}>Features</Link></li>
                        <li><Link to="/pricing" className={styles.navLink}>Pricing</Link></li>
                    </ul>
                </nav>

                <div className={styles.right}>
                    <Button variant="primary" size="sm" onClick={() => window.location.href = '/register'}>
                        Sign Up
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;