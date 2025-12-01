import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'md', arrow = false, ...props }) => {
    return (
        <button className={`${styles.btn} ${styles[variant]} ${styles[size]}`} {...props}>
            <span className={styles.text}>{children}</span>

            {arrow && (
                <svg
                    className={styles.arrowIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            )}
        </button>
    );
};

export default Button;