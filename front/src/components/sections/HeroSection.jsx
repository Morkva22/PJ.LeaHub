import React from 'react';
import styles from './HeroSection.module.css';
import Button from '../Button';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>
                        Work Management<br />
                        <span className={styles.highlight}>for Diverse Minds</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Managing work when you have ADHD, Dyslexia, & Autism
                    </p>
                    <div className={styles.badges}>
                        <div className={styles.badge}>
                            <div className={styles.icon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                    <path d="M2 12h20"/>
                                </svg>
                            </div>
                            <div>
                                <strong>Open Source</strong>
                                <span className={styles.small}>Leantime is Open Source</span>
                            </div>
                        </div>

                        <div className={styles.badge}>
                            <div className={styles.icon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                                </svg>
                            </div>
                            <div>
                                <strong>Documentation</strong>
                                <span className={styles.small}>Learn about our open source solutions</span>
                            </div>
                        </div>

                        <div className={styles.badge}>
                            <div className={styles.icon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                </svg>
                            </div>
                            <div>
                                <strong>Blog</strong>
                                <span className={styles.small}>Read more about AI, Strategy, ADHD, and more.</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <Button variant="primary" size="md">Get Started Free</Button>
                        <Button variant="secondary" size="md">Watch Demo</Button>
                    </div>
                </div>
                <div className={styles.images}>
                    <div className={styles.illustration}>
                        <div className={styles.placeholder}>Иллюстрация<br />волны / мозг</div>
                    </div>
                    <div className={styles.photo}>
                        <div className={styles.placeholder}>Фото команды<br />за столом</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;