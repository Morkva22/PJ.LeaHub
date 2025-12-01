import React from 'react';
import styles from './NewsletterSection.module.css';
import Button from '../Button';

const NewsletterSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>Sign up for the latest and greatest news</h2>
                <form className={styles.form}>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <Button variant="submit" size="md">Submit</Button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSection;