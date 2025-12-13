import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EnterpriseOfferings.module.css';

const EnterpriseOfferings = () => {
    const navigate = useNavigate();

    const handleScheduleClick = () => {
        navigate('/schedule');
    };

    return (
        <section className={styles.enterpriseSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Our Enterprise Offerings</h2>
                <p className={styles.description}>
                    Go on premise and get the most out of LeaHub's features with SSO, Audit logs, data residency, custom billing, custom integrations and more.
                </p>
                <button className={styles.enterpriseButton} onClick={handleScheduleClick}>
                    Schedule a call for more enterprise offerings
                </button>
            </div>
        </section>
    );
};

export default EnterpriseOfferings;