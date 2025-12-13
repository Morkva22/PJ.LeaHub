import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TrialCallToAction.module.css';

const TrialCallToAction = () => {
    const navigate = useNavigate();

    const handleTrialClick = () => {
        navigate('/404');
    };

    return (
        <section className={styles.trialSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Ready for Project Management That Works Like Your Brain Does?
                </h2>
                <p className={styles.subtitle}>
                    Start your 14-day free trial today. No credit card required.
                </p>
                <p className={styles.description}>
                    Experience the difference behavioral science makes in managing your work.
                </p>
                <button className={styles.trialButton} onClick={handleTrialClick}>
                    Start your trial
                </button>
            </div>
        </section>
    );
};

export default TrialCallToAction;