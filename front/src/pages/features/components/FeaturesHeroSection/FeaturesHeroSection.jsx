import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FeaturesHeroSection.module.css';

const FeaturesHeroSection = () => {
    const navigate = useNavigate();

    const handleTrialClick = () => {
        navigate('/404');
    };

    return (
        <section className={styles.featuresHeroSection}>
            <div className={styles.featuresHeroContainer}>
                <div className={styles.featuresHeroGrid}>
                    <div className={styles.featuresVisual}>
                        <img
                            src="/images/a1.png"
                            alt="Dashboard Preview"
                            className={styles.dashboardImage}
                        />
                    </div>
                    <div className={styles.featuresContent}>
                        <h1 className={styles.featuresTitle}>
                            Built to take big ideas and turn them into actionable steps
                        </h1>
                        <p className={styles.featuresDescription}>
                            LeaHub helps you break down projects into achievable goals and milestones.
                            Always know <strong>what</strong> you are trying to accomplish and <strong>why</strong>.
                        </p>
                        <button className={styles.featuresCta} onClick={handleTrialClick}>
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