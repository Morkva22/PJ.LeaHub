import React from 'react';
import styles from './ComparisonTable.module.css';

const ComparisonTable = () => {
    const comparisons = [
        ['Lists of disconnected tasks', 'Tasks connected to goals, milestones, and purpose'],
        ['One-size-fits-all interfaces', 'Neurodivergent-friendly design with emotional awareness'],
        ['Manual prioritization', 'AI-assisted prioritization based on your work patterns'],
        ['Generic workflows', 'Personalized workflows that adapt to your thinking style'],
        ['Just tracking work', 'Actually helping you get work done']
    ];

    return (
        <section className={styles.comparisonSection}>
            <div className={styles.comparisonContainer}>
                <h2 className={styles.comparisonTitle}>
                    The Difference is Clear:<br />
                    LeaHub vs. Traditional<br />
                    Tools
                </h2>
                <div className={styles.comparisonTableWrapper}>
                    <div className={styles.comparisonTable}>
                        <div className={styles.tableHeader}>
                            <div className={styles.headerCell}>Basic Task Managers</div>
                            <div className={styles.headerCell}>LeaHub</div>
                        </div>
                        {comparisons.map((row, index) => (
                            <div key={index} className={styles.tableRow}>
                                <div className={styles.tableCell}>{row[0]}</div>
                                <div className={styles.tableCell}>{row[1]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
