import React from 'react';
import { Link } from 'react-router-dom';
import styles from './404.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundContent}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.errorTitle}>Page Not Found</h2>
                <p className={styles.errorDescription}>
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className={styles.homeButton}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;