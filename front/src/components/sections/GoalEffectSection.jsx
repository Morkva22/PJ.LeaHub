import React from 'react';
import styles from './GoalEffectSection.module.css';

const GoalEffectSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <div className={styles.placeholder}>Фото 6: Иллюстрация "The Goal Effect" (человек пишет цели)</div>
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