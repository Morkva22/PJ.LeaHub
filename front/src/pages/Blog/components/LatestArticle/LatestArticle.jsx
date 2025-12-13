import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LatestArticle.module.css';

import latestArticleImage from '../../../../assets/images/z2.png';

const LatestArticle = () => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/404');
    };

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>📰 Latest Article</h2>
            <div className={styles.card}>
                <img
                    src={latestArticleImage}
                    alt="Ultimate Guide to Rebuilding Trust"
                    className={styles.image}
                />

                <div className={styles.content}>
                    <h3>Ultimate Guide to Rebuilding Trust in Project Management</h3>
                    <p className={styles.author}>Posted by Manuel Fobarini · September 23, 2025</p>
                    <p className={styles.excerpt}>
                        When Sandia's "Toxic Scoped Funding Like Algorithm: A Case Study in Rebuilding Trust in
                        Project Management An Unexpected cm Departure
                    </p>
                    <button className={styles.button} onClick={handleReadMore}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default LatestArticle;