import React from 'react';
import styles from './ReviewsSection.module.css';

const ReviewsSection = () => {
    const reviews = [
        {
            text: "LeaHub has been a game changer for our team's productivity.",
            author: "Sarah Johnson",
            role: "Product Manager"
        },
        {
            text: "Finally, a project management tool that understands neurodiversity.",
            author: "Michael Chen",
            role: "Team Lead"
        },
        {
            text: "The AI-powered features save us hours every week.",
            author: "Emma Williams",
            role: "Designer"
        }
    ];

    return (
        <section className={styles.reviewsSection}>
            <div className={styles.container}>
                <div className={styles.reviewsGrid}>
                    {reviews.map((review, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <p className={styles.reviewText}>"{review.text}"</p>
                            <div className={styles.reviewAuthor}>
                                <p className={styles.authorName}>{review.author}</p>
                                <p className={styles.authorRole}>{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;