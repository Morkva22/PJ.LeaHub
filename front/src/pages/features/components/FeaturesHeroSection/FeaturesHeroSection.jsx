import React from 'react';
import styles from './FeaturesHeroSection.module.css';

const FeaturesHeroSection = () => {
    return (
        <section className={styles.featuresHeroSection}>
            <div className={styles.featuresHeroContainer}>
                <div className={styles.featuresHeroGrid}>
                    <div className={styles.featuresVisual}>
                        <div className={styles.imagePlaceholder}>
                            Dashboard Preview
                        </div>
                    </div>
                    <div className={styles.featuresContent}>
                        <h1 className={styles.featuresTitle}>
                            Built to take big ideas and turn them into actionable steps
                        </h1>
                        <p className={styles.featuresDescription}>
                            Leaptime helps you break down projects into achievable goals and milestones.
                            Always know <strong>what</strong> you are trying to accomplish and <strong>why</strong>.
                        </p>
                        <button className={styles.featuresCta}>
                            Start a trial now
                            <span className={styles.ctaArrow}>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesHeroSection;
