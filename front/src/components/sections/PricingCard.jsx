import React from 'react';
import styles from './PricingCard.module.css';

const PricingCard = ({ title, price, period = "", features, popular = false, ctaText }) => {
    return (
        <div className={`${styles.card} ${popular ? styles.popular : ''}`}>
            {popular && <div className={styles.badge}>POPULAR</div>}

            <h3 className={styles.title}>{title}</h3>

            <div className={styles.price}>
                <span className={styles.amount}>{price}</span>
                {period && <span className={styles.period}>{period}</span>}
            </div>

            <ul className={styles.features}>
                {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
            </ul>

            <button className={popular ? styles.btnPrimary : styles.btnSecondary}>
                {ctaText}
            </button>
        </div>
    );
};

export default PricingCard;