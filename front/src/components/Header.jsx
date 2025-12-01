import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Button from './Button';

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
                    Leantime
                </Link>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
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
                                        <h4>Getting Started</h4>
                                        <a href="/learn/installation">Installation Guide</a>
                                        <a href="/learn/first-steps">First Steps</a>
                                        <a href="/learn/adhd-friendly">ADHD-Friendly PM</a>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Resources</h4>
                                        <a href="/blog">Blog</a>
                                        <a href="/webinars">Webinars</a>
                                        <a href="/community">Community</a>
                                    </div>
                                </div>
                            )}
                        </li>

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
                                        <h4>For Teams</h4>
                                        <a href="/solutions/teams">Small Teams</a>
                                        <a href="/solutions/agencies">Agencies</a>
                                        <a href="/solutions/startups">Startups</a>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <h4>For Individuals</h4>
                                        <a href="/solutions/freelancers">Freelancers</a>
                                        <a href="/solutions/neurodiverse">Neurodiverse Minds</a>
                                    </div>
                                </div>
                            )}
                        </li>

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
                                        <h4>Learn More</h4>
                                        <a href="/blog">Blog</a>
                                        <a href="/case-studies">Case Studies</a>
                                        <a href="/guides">Guides & Templates</a>
                                    </div>
                                    <div className={styles.dropdownColumn}>
                                        <h4>Community</h4>
                                        <a href="https://community.leantime.io" target="_blank" rel="noopener">Forum</a>
                                        <a href="https://discord.gg/..." target="_blank" rel="noopener">Discord</a>
                                        <a href="/contribute">Contribute</a>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li><Link to="/features" className={styles.navLink}>Features</Link></li>
                        <li><Link to="/pricing" className={styles.navLink}>Pricing</Link></li>
                    </ul>
                </nav>

                <div className={styles.right}>
                    <Button variant="primary" size="sm" arrow>
                        Sign Up
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;