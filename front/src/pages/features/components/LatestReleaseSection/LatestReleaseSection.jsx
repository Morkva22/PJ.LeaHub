import React from 'react';
import styles from './LatestReleaseSection.module.css';

// ПУТИ r1, r2, r3 ДОЛЖНЫ БЫТЬ ПРОВЕРЕНЫ (../../../../assets/images/...)
import r1 from '../../../../assets/images/r1.png';
import r2 from '../../../../assets/images/r2.png';
import r3 from '../../../../assets/images/r3.png';

const releases = [
    {
        title: 'Outcome Driven Task Overview',
        text: 'Easily see the outcomes that your work contributes to so that you can work efficiently on projects and reduce noise on your My Work Dashboard.',
        img: r1
    },
    {
        title: 'Start Work from My Work Dashboard',
        text: 'It\'s now easier to start work on a task even if it isn\'t possible to finish. The "Start" button to start the work timer.',
        img: r2
    },
    {
        title: 'Subtask Hierarchy on My Work Dashboard',
        text: 'Get a visual overview of subtasks and create hierarchy of your tasks directly on your work dashboard.',
        img: r3
    }
];

const LatestReleaseSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.subtitle}>See the latest release</p>
                <h2 className={styles.title}>Our Newest Features - Version 3.4.6</h2>

                <div className={styles.grid}>
                    {releases.map((release, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={release.img} // <-- ИСПРАВЛЕНО: используем 'release'
                                    alt={release.title} // <-- ИСПРАВЛЕНО: используем 'release'
                                    className={styles.image}
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{release.title}</h3>
                            <p className={styles.cardText}>{release.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestReleaseSection;