import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <h1>Take a brain break with LeaHub blog content</h1>
                <p>
                    Whether you want to enhance your project management skills or embrace
                    neurodiversity in the workforce, our articles provide valuable information and
                    practical tips. Covering topics on AI, Project Management, Business, Strategy,
                    motivation, and ADHD.
                </p>
            </div>
            <div className={styles.illustration}>
                <div className={styles.flower1}></div>
                <div className={styles.flower2}></div>
                <div className={styles.plant}></div>
                <div className={styles.person}>
                    <div className={styles.personHead}></div>
                    <div className={styles.personBody}></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;