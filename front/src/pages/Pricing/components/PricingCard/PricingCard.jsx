import React from 'react';
import styles from './PricingCard.module.css';

const PricingCard = ({ plan }) => {
    const features = [
        'All features included',
        'Unlimited to-dos and projects',
        'AI-powered task management',
        '500 AI credits per month',
        '14-day free trial'
    ];

    return (
        <div className={styles.card}>
            <div className={styles.leftSide}>
                <h3 className={styles.title}>{plan.title}</h3>
                <p className={styles.subtitle}>{plan.subtitle}</p>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.features}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.feature}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--primary)"
                                strokeWidth="3"
                                className={styles.checkIcon}
                            >
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.priceSection}>
                    <div className={styles.priceWrapper}>
                        <span className={styles.dollar}>$</span>
                        <span className={styles.price}>{plan.price.replace('$', '')}</span>
                    </div>
                    <div className={styles.period}>{plan.period}</div>
                    <div className={styles.billing}>{plan.billing}</div>

                    <button className={styles.ctaButton}>
                        Start your free trial
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;