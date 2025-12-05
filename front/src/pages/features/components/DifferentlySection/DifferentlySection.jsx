import React from 'react';
import styles from './DifferentlySection.module.css';

const DifferentlySection = () => {
    return (
        <section className={styles.differentlySection}>
            <div className={styles.differentlyContainer}>
                <h2 className={styles.differentlyTitle}>
                    And that's why we do it differently.
                </h2>
            </div>
        </section>
    );
};

export default DifferentlySection;