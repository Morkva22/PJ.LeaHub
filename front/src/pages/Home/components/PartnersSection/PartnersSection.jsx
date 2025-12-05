import React from 'react';
import styles from './PartnersSection.module.css';

const PartnersSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>Backed by strong partners and an amazing community</h2>

                <div className={styles.logoGrid}>
                    <div className={styles.logoCard}><div className={styles.placeholder}>Логотип 1: AWS Startups</div></div>
                    <div className={styles.logoCard}><div className={styles.placeholder}>Логотип 2: Techstars</div></div>
                    <div className={styles.logoCard}><div className={styles.placeholder}>Логотип 3: Cerebral Palsy Alliance</div></div>
                    <div className={styles.logoCard}><div className={styles.placeholder}>Логотип 4: NC IDEA</div></div>
                    <div className={styles.logoCard}><div className={styles.placeholder}>Логотип 5: RIOT</div></div>
                    <div className={styles.logoCard}><div className={styles.placeholder}>Логотип 6: NC TECH</div></div>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}><span>0+</span> Users worldwide</div>
                    <div className={styles.stat}><span>0M</span> Docker Pulls</div>
                    <div className={styles.stat}><span>0+</span> Stars on Github</div>
                    <div className={styles.stat}><span>0k+</span> Tasks Completed</div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;