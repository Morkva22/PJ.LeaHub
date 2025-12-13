import React from 'react';
import styles from './GoalEffectSection.module.css';
import r34 from '../../../../assets/images/r34.png';

const GoalEffectSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src={r34} alt="The Goal Effect illustration" className={styles.image} />
                </div>
                <div className={styles.textContent}>
                    <h2>The Goal Effect: Where Motivation Meets To-Do Lists</h2>
                    <p>A never ending list of tasks isn't motivating but paired with purpose and suddenly:</p>
                    <ul>
                        <li>Goals give meaning</li>
                        <li>Goals create impact</li>
                        <li>Goals level you up</li>
                    </ul>
                    <p>That's why we start with goals. When to-dos grow from goals, they become stepping stones to success.</p>
                </div>
            </div>
        </section>
    );
};

export default GoalEffectSection;