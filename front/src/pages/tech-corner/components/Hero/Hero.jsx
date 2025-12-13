import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>LeaHub's Tech Corner</h1>
                    <p>Learn more about how we think and what we do on the dev side of things</p>
                </div>
                <div className={styles.illustration}>
                    <div className={styles.desk}>
                        <div className={styles.person}>
                            <div className={styles.personHead}></div>
                            <div className={styles.personBody}></div>
                        </div>
                        <div className={styles.laptop}></div>
                        <div className={`${styles.pixel} ${styles.pixel1}`}></div>
                        <div className={`${styles.pixel} ${styles.pixel2}`}></div>
                        <div className={`${styles.pixel} ${styles.pixel3}`}></div>
                        <div className={`${styles.pixel} ${styles.pixel4}`}></div>
                        <div className={`${styles.pixel} ${styles.pixel5}`}></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;