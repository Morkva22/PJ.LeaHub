import React from 'react';
import styles from './PricingHeader.module.css';

const PricingHeader = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Simple pricing that makes sense</h1>
            <p className={styles.subtitle}>
                LeaHub combines behavioral science, motivation psychology, and AI
                to help neurodivergent minds thrive.
            </p>
            <p className={styles.description}>
                Go beyond basic task lists with a system designed for how you actually work.
            </p>
            <div className={styles.badge}>
                <span>Monthly Subscription</span>
                <span>LeaHub Inc</span>
            </div>
        </div>
    );
};

export default PricingHeader;