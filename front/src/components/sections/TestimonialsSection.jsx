import React from 'react';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>What users have to say</h2>
                <div className={styles.testimonial}>
                    <p>"We use Leantime as an alternative to project management tools like Linear, Asana, or Jira, as well as knowledge base tools such as Notion. We've deployed our own version of it and are really grateful there's an easy deploy solution using Docker."</p>
                    <cite>— Self-Hosting Company</cite>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;