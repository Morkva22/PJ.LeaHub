import React from 'react';
import styles from './Card.module.css';

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <img src={data.image} alt={data.title} className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.title}>{data.title}</h3>
                <div className={styles.badge}>{data.badge}</div>
                <div className={styles.author}>
                    <div className={styles.avatar}></div>
                    <span>{data.author}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;