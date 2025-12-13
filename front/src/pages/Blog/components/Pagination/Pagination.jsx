import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        onPageChange(currentPage > 1 ? currentPage - 1 : totalPages);
    };

    const handleNext = () => {
        onPageChange(currentPage < totalPages ? currentPage + 1 : 1);
    };

    return (
        <div className={styles.pagination}>
            <button className={styles.arrow} onClick={handlePrevious}>
                ‹
            </button>
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i + 1}
                    className={`${styles.number} ${currentPage === i + 1 ? styles.active : ''}`}
                    onClick={() => onPageChange(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
            <button className={styles.arrow} onClick={handleNext}>
                ›
            </button>
        </div>
    );
};

export default Pagination;