import React from 'react';
import styles from './BlogSection.module.css';

const posts = [
    { title: "Empowering Neurodivergent Project Managers with AI", date: "6 months ago", tag: "Project Management", img: "AI Brain" },
    { title: "Open Source Project Management for ADHD: Why We Built Leantime", date: "6 months ago", tag: "Tech Corner", img: "ADHD Brain" },
    { title: "Ultimate Guide to Rebuilding Trust in Project Management", date: "2 months ago", tag: "Project Management", img: "Trust" },
];

const BlogSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>The latest from our blog</h2>
                <div className={styles.grid}>
                    {posts.map((post, i) => (
                        <article key={i} className={styles.card}>
                            <div className={styles.img}>{post.img}</div>
                            <div className={styles.content}>
                                <h3>{post.title}</h3>
                                <p className={styles.meta}>{post.date} • {post.tag}</p>
                                <a href="#" className={styles.link}>Continue reading the article →</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;