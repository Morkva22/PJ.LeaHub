import React from 'react';
import styles from './HonestSection.module.css';

const HonestSection = () => {
    return (
        <section className={styles.honestSection}>
            <div className={styles.honestContainer}>
                <h2 className={styles.honestTitle}>
                    Let's be honest... tracking the work is not as satisfying as doing it.
                </h2>

                <div className={styles.honestCards}>
                    <div className={`${styles.honestCard} ${styles.negative}`}>
                        <div className={`${styles.cardIcon} ${styles.negativeIcon}`}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                                <path d="M10 15L8 13L6 15M18 9L16 11L14 9M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
                                      stroke="#FF6B6B"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3 className={`${styles.cardTitle} ${styles.negativeTitle}`}>
                            We don't kid ourselves...
                        </h3>
                        <ul className={styles.cardList}>
                            <li>We realize</li>
                            <li>Project management is a do-or-die and not a want-to-do for most</li>
                            <li>PM tools are overwhelming when you just want to be working</li>
                            <li>Research shows employees aren't engaged with their work</li>
                        </ul>
                    </div>

                    <div className={`${styles.honestCard} ${styles.positive}`}>
                        <div className={`${styles.cardIcon} ${styles.positiveIcon}`}>
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                                <path d="M7 13L10 16L17 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                      stroke="#50C878"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3 className={`${styles.cardTitle} ${styles.positiveTitle}`}>
                            More than tracking...
                        </h3>
                        <ul className={styles.cardList}>
                            <li>It's about</li>
                            <li>Working smarter to find work-life balance</li>
                            <li>Aligning the to-do list to the goals</li>
                            <li>Working on the things that matter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HonestSection;