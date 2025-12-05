import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = ({ post, isLarge }) => {
    if (isLarge) {
        return (
            <div className={styles.largeCard}>
                <div className={styles.imageWrapper}>
                    <img src={post.image} alt={post.title} className={styles.image} />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{post.title}</h3>
                    <div className={styles.meta}>
                        <span className={styles.timeAgo}>{post.timeAgo}</span>
                        <span className={styles.category}>{post.category}</span>
                    </div>
                    <p className={styles.description}>{post.description}</p>
                    <button className={styles.readMore}>Continue reading the article →</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.smallCard}>
            <img src={post.image} alt={post.title} className={styles.smallImage} />
            <div className={styles.smallContent}>
                <h4 className={styles.smallTitle}>{post.title}</h4>
                <div className={styles.smallMeta}>
                    <span className={styles.timeAgo}>{post.timeAgo}</span>
                    <span className={styles.category}>{post.category}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;