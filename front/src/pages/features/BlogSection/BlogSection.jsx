import React from 'react';
import styles from './BlogSection.module.css';

// Импорты: ПУТИ ДОЛЖНЫ БЫТЬ ПРОВЕРЕНЫ НА 404
import r1 from '../../../assets/images/r1.png';
import r2 from '../../../assets/images/r2.png';
import r3 from '../../../assets/images/r3.png';
import r4 from '../../../assets/images/r4.png';
import r5 from '../../../assets/images/r5.png';
import r6 from '../../../assets/images/r6.png';
import r7 from '../../../assets/images/r7.png';
import r8 from '../../../assets/images/r8.png';
import r9 from '../../../assets/images/r9.png';
import r10 from '../../../assets/images/r10.png';

const blogPosts = [

    { img: r1, title: 'Empowering Neurodivergent Project Managers', category: 'Project Management', timeAgo: '6 months ago', link: '#' },

    { img: r2, title: 'Boosting Productivity with AI-Powered Task Management', category: 'AI Integration', timeAgo: '5 months ago', link: '#' },

    { img: r3, title: 'Top 10 Features of LeaHub You Should Know', category: 'Product Features', timeAgo: '4 months ago', link: '#' },

    { img: r4, title: 'How LeaHub Enhances Team Collaboration', category: 'Teamwork', timeAgo: '3 months ago', link: '#' },

    { img: r5, title: 'The Future of Project Management with AI', category: 'Future Trends', timeAgo: '2 months ago', link: '#' },

    { img: r6, title: 'Case Study: Successful Project Delivery with LeaHub', category: 'Case Studies', timeAgo: '1 month ago', link: '#' },

    { img: r7, title: 'Integrating LeaHub with Your Existing Tools', category: 'Integrations', timeAgo: '3 weeks ago', link: '#' },

    { img: r8, title: 'Maximizing ROI with Efficient Project Management', category: 'Business Strategy', timeAgo: '2 weeks ago', link: '#' },

    { img: r9, title: 'User Guide: Getting Started with LeaHub', category: 'User Guides', timeAgo: '1 week ago', link: '#' },

    { img: r10, title: 'LeaHub Updates: What\'s New in Version 3.4.6', category: 'Product Updates', timeAgo: '3 days ago', link: '#' }

];

const BlogSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>From our blog</h2>

                <div className={styles.grid}>
                    {blogPosts.map((post, index) => (
                        <a key={index} href={post.link} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={post.img} // <-- Здесь все корректно!
                                    alt={post.title}
                                    className={styles.image} // <-- Используем класс .image
                                />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.postTitle}>{post.title}</h3>
                                <div className={styles.meta}>
                                    <span className={styles.timeAgo}>{post.timeAgo}</span>
                                    <span className={styles.separator}>•</span>
                                    <span className={styles.category}>{post.category}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;