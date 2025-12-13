import React, { useState } from 'react';
import { authService } from '../../../lib/api/authService';
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setError('Please enter your email');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setError('');
        setLoading(true);

        try {
            await authService.forgotPassword(email);
            setSuccess(true);
        } catch (err) {
            setError(err.message || 'Failed to send reset email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) {
            setError('');
        }
    };

    const handleResend = async () => {
        setSuccess(false);
        setLoading(true);

        try {
            await authService.forgotPassword(email);
            setSuccess(true);
        } catch (err) {
            setError(err.message || 'Failed to resend email. Please try again.');
        } finally {
            setLoading(false);
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

                    {!success ? (
                        <>
                            <div className={styles.headerSection}>
                                <h2 className={styles.title}>Forgot Password?</h2>
                                <p className={styles.subtitle}>
                                    No worries, we'll send you reset instructions.
                                </p>
                            </div>

                            {error && (
                                <div className={styles.errorBanner}>
                                    {error}
                                </div>
                            )}

                            <div className={styles.formContent}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="you@example.com"
                                        disabled={loading}
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className={styles.submitButton}
                                    disabled={loading}
                                    style={{ opacity: loading ? 0.6 : 1 }}
                                >
                                    {loading ? 'Sending...' : 'Reset Password'}
                                </button>
                            </div>

                            <div className={styles.backToLogin}>
                                <a href="/login" className={styles.backLink}>
                                    ← Back to Login
                                </a>
                            </div>
                        </>
                    ) : (
                        <div className={styles.successContainer}>
                            <div className={styles.successIcon}>✓</div>
                            <h2 className={styles.successTitle}>Check your email</h2>
                            <p className={styles.successText}>
                                We sent a password reset link to
                            </p>
                            <p className={styles.emailSent}>{email}</p>
                            <button
                                onClick={handleResend}
                                className={styles.resendButton}
                                disabled={loading}
                                style={{ opacity: loading ? 0.6 : 1 }}
                            >
                                {loading ? 'Sending...' : "Didn't receive the email? Click to resend"}
                            </button>
                            <div className={styles.backToLogin}>
                                <a href="/login" className={styles.backLink}>
                                    ← Back to Login
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.authSidebar}>
                <div className={styles.sidebarContent}>
                    <h2 className={styles.sidebarTitle}>Reset Password</h2>
                    <p className={styles.sidebarText}>
                        Enter your email and we'll send you instructions to reset your password.
                    </p>
                    <p className={styles.sidebarText}>
                        Back to work in no time!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;