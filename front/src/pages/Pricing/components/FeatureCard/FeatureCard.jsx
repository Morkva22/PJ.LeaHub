import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ icon: Icon, title, description, bgColor }) => {
    return (
        <div className={styles.featureCard} style={{ backgroundColor: bgColor }}>
            <div className={styles.featureIconWrapper}>
                <Icon size={36} color="white" />
            </div>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDescription}>{description}</p>
        </div>
    );
};

export default FeatureCard;