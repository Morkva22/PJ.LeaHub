import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = "secondary", fullWidth = false, ...props }) => {
    return (
        <button
            className={`${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;