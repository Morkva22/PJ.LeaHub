import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../lib/context/AuthContext';
import { useToast } from '../../../lib/context/ToastContext';
import styles from './Register.module.css';

const Register = () => {
    const navigate = useNavigate();
    const { register } = useAuth();
    const { showToast } = useToast();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Please enter a username';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Please enter your email';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Please enter a password';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!agreedToTerms) {
            newErrors.terms = 'You must agree to the terms';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setLoading(true);
            try {
                await register(
                    formData.email,
                    formData.password,
                    formData.username,
                    ''
                );
                showToast('Account created successfully!', 'success');
                setTimeout(() => {
                    navigate('/login', { state: { fromRegister: true } });
                }, 500);
            } catch (err) {
                showToast(err.message || 'Registration failed. Please try again.', 'error');
                setErrors({
                    email: err.message || 'Registration failed. Please try again.'
                });
            } finally {
                setLoading(false);
            }
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
                            <label className={styles.label}>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="johndoe"
                                disabled={loading}
                            />
                            {errors.username && (
                                <p className={styles.errorText}>{errors.username}</p>
                            )}
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="you@example.com"
                                disabled={loading}
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
                                disabled={loading}
                            />
                            {errors.password && (
                                <p className={styles.errorText}>{errors.password}</p>
                            )}
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="••••••••"
                                disabled={loading}
                            />
                            {errors.confirmPassword && (
                                <p className={styles.errorText}>{errors.confirmPassword}</p>
                            )}
                        </div>

                        <div className={styles.checkboxGroup}>
                            <input
                                type="checkbox"
                                id="terms"
                                checked={agreedToTerms}
                                onChange={(e) => {
                                    setAgreedToTerms(e.target.checked);
                                    if (errors.terms) {
                                        setErrors(prev => ({ ...prev, terms: '' }));
                                    }
                                }}
                                className={styles.checkbox}
                                disabled={loading}
                            />
                            <label htmlFor="terms" className={styles.checkboxLabel}>
                                I agree to the{' '}
                                <a href="/legal/terms" className={styles.link}>
                                    Terms and Conditions
                                </a>
                                {' & '}
                                <a href="/legal/privacy" className={styles.link}>
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                        {errors.terms && (
                            <p className={styles.errorText}>{errors.terms}</p>
                        )}

                        <button
                            onClick={handleSubmit}
                            className={styles.submitButton}
                            disabled={loading}
                            style={{ opacity: loading ? 0.6 : 1 }}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </div>

                    <p className={styles.footerText}>
                        Already have an account?{' '}
                        <a href="/login" className={styles.link}>
                            Sign In here
                        </a>
                    </p>
                </div>
            </div>

            <div className={styles.authSidebar}>
                <div className={styles.sidebarContent}>
                    <h2 className={styles.sidebarTitle}>Sign Up</h2>
                    <p className={styles.sidebarText}>
                        No set up required!
                    </p>
                    <p className={styles.sidebarText}>
                        Enjoy the extra time 🎉
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;