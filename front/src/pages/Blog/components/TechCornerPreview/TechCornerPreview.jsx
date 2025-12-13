import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TechCornerPreview.module.css';

import techCornerImage from '../../../../assets/images/z3.png';

const TechCornerPreview = () => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/404');
    };

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>🛠 Tech Corner</h2>
            <div className={styles.card}>
                <img
                    src={techCornerImage}
                    alt="Coordinating Human and AI Teams"
                    className={styles.image}
                />

                <div className={styles.content}>
                    <h3>Coordinating Human and AI Development Teams with LeaHub MCP: A Developer's Guide to Distributed Task Management</h3>
                    <p className={styles.author}>Posted by Manuel Fobarini · July 23, 2025</p>
                    <button className={styles.button} onClick={handleReadMore}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default TechCornerPreview;