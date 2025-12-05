import React from 'react';
import { Clock, Code, HelpCircle } from 'lucide-react';
import styles from './GetSupport.module.css';

const GetSupport = () => {
    return (
        <section className={styles.supportSection}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h2 className={styles.title}>Get support when you need it</h2>
                    <button className={styles.supportButton}>
                        Get priority support
                    </button>
                </div>
                <div className={styles.rightContent}>
                    <p className={styles.subtitle}>Priority support that goes beyond just another "ticket"</p>
                    <div className={styles.featuresList}>
                        <div className={styles.featureItem}>
                            <Clock size={20} color="#008B8B" />
                            <span>Quicker response times</span>
                        </div>
                        <div className={styles.featureItem}>
                            <Code size={20} color="#008B8B" />
                            <span>Work directly with an engineer</span>
                        </div>
                        <div className={styles.featureItem}>
                            <HelpCircle size={20} color="#008B8B" />
                            <span>Get help with your process and project management questions</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetSupport;