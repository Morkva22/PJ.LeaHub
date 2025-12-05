// src/components/ui/button/Button.jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({
                    children,
                    variant = "secondary",
                    fullWidth = false,
                    arrow = false, // Добавляем поддержку стрелки
                    size = "md",
                    ...props
                }) => {
    return (
        <button
            className={`${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${styles[size]}`}
            {...props}
        >
            {children}
            {arrow && (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={styles.arrowIcon}
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            )}
        </button>
    );
};

export default Button;