import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArticleCard.module.css';

const ArticleCard = ({ article }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/404');
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <img
                    src={article.image}
                    alt={article.title}
                    className={styles.image}
                />
                <span className={styles.badge}>{article.badge}</span>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <button className={styles.readMore} onClick={handleReadMore}>READ MORE →</button>
                <div className={styles.meta}>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.comments}</span>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;