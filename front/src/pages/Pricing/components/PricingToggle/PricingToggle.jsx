import React from 'react';
import styles from './PricingToggle.module.css';

const PricingToggle = ({ isYearly, onToggle }) => {
    return (
        <div className={styles.container}>
            <button
                onClick={() => onToggle(false)}
                className={`${styles.toggleButton} ${!isYearly ? styles.active : ''}`}
            >
                <div className={styles.label}>Monthly</div>
                <div className={styles.subLabel}>pay per month, cancel any time</div>
            </button>

            <button
                onClick={() => onToggle(true)}
                className={`${styles.toggleButton} ${isYearly ? styles.active : ''}`}
            >
                <div className={styles.label}>Yearly</div>
                <div className={styles.subLabel}>pay per year and get 2 months free</div>
            </button>
        </div>
    );
};

export default PricingToggle;