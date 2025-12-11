import React from 'react';
import styles from './BlogSection.module.css';

const blogPosts = [
    {
        img: 'Blog Post 1',
        title: 'Empowering Neurodivergent Project Managers',
        category: 'Project Management',
        timeAgo: '6 months ago',
        link: '#'
    },
    {
        img: 'Blog Post 2',
        title: 'Open Source Project Management for ADHD: Why Built with Leantime for Neurodivergent Productivity',
        category: 'Tech Corner',
        timeAgo: '7 months ago',
        link: '#'
    },
    {
        img: 'Blog Post 3',
        title: 'Ultimate Guide to Rebuilding Trust in Project Management',
        category: 'Project Management',
        timeAgo: '8 months ago',
        link: '#'
    },
    {
        img: 'Blog Post 4',
        title: 'Proven Strategies to Reclaim Focus in 2025',
        category: 'Project Management',
        timeAgo: '3 months ago',
        link: '#'
    },
    {
        img: 'Blog Post 5',
        title: 'Understanding Goals and Milestones for Project Success',
        category: 'Goal Development',
        timeAgo: '9 months ago',
        link: '#'
    },
    {
        img: 'Blog Post 6',
        title: 'Trust Theory of Change Projects with Leantime for Impact',
        category: 'Strategy',
        timeAgo: '5 months ago',
        link: '#'
    },
    {
        img: 'Blog Post 7',
        title: 'Introducing the Leantime NCP Server: What would it look like in work?',
        category: 'Features & Releases',
        timeAgo: '2 months ago',
        link: '#'
    },
    {
        img: 'Blog Post 8',
        title: 'Essential Strategies for Neurodivergent Product Management',
        category: 'ADHD',
        timeAgo: '11 months ago',
        link: '#'
    },
    {
        img: 'Blog Post 9',
        title: 'GameHiring Humor and AI Advantages News: Navigating the Shift in Tech-Centric Distributed Team Management',
        category: 'Tech Corner',
        timeAgo: '4 months ago',
        link: '#'
    },
    {
        img: 'Blog Post 10',
        title: 'How to Break Down a Huge Nonprofit Project Into Manageable Phases',
        category: 'Project Management',
        timeAgo: '5 months ago',
        link: '#'
    }
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
                                <div className={styles.placeholder}>{post.img}</div>
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