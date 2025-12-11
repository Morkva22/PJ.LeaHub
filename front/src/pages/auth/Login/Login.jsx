import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [rememberMe, setRememberMe] = useState(false);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Please enter a password';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Login successful', formData, 'Remember me:', rememberMe);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.authForm}>
                <div className={styles.formWrapper}>
                    <div className={styles.logoSection}>
                        <h1 className={styles.logo}>
                            <span className={styles.logoText}>LeaHub</span>
                        </h1>
                    </div>

                    {errors.email && (
                        <div className={styles.errorBanner}>
                            {errors.email}
                        </div>
                    )}

                    <div className={styles.formContent}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="••••••••"
                            />
                            {errors.password && (
                                <p className={styles.errorText}>{errors.password}</p>
                            )}
                        </div>

                        <div className={styles.rememberForgot}>
                            <div className={styles.checkboxGroup}>
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className={styles.checkbox}
                                />
                                <label htmlFor="remember" className={styles.checkboxLabel}>
                                    Remember me
                                </label>
                            </div>
                            <a href="/forgot-password" className={styles.link}>
                                Forgot password?
                            </a>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className={styles.submitButton}
                        >
                            Sign In
                        </button>
                    </div>

                    <p className={styles.footerText}>
                        Don't have an account?{' '}
                        <a href="/register" className={styles.link}>
                            Sign Up here
                        </a>
                    </p>
                </div>
            </div>

            <div className={styles.authSidebar}>
                <div className={styles.sidebarContent}>
                    <h2 className={styles.sidebarTitle}>Welcome Back</h2>
                    <p className={styles.sidebarText}>
                        Sign in to continue managing your projects efficiently.
                    </p>
                    <p className={styles.sidebarText}>
                        Your workspace awaits!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;