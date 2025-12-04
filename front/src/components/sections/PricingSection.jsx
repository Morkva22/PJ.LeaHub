import React from 'react';
import styles from './PricingSection.module.css';

const PricingSection = ({ title, subtitle }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <div>
                </div>

                <p className={styles.footerText}>
                    All plans include free updates and open-source community support
                </p>
            </div>
        </section>
    );
};


export default PricingSection;