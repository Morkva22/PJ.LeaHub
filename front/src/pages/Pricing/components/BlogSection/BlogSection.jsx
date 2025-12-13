import React from 'react';
import BlogCard from './BlogCard';
import styles from './BlogSection.module.css';

import r11 from '../../../../assets/images/r11.png';
import r1 from '../../../../assets/images/r1.png';
import r2 from '../../../../assets/images/r2.png';
import r4 from '../../../../assets/images/r4.png';
import r5 from '../../../../assets/images/r5.png';
import r6 from '../../../../assets/images/r6.png';
import r7 from '../../../../assets/images/r7.png';
import r8 from '../../../../assets/images/r8.png';
import r9 from '../../../../assets/images/r9.png';
import r10 from '../../../../assets/images/r10.png';


const BlogSection = () => {
    const blogPosts = [
        {
            image: r11,
            title: 'Empowering Neurodivergent Project Managers with AI',
            timeAgo: '6 months ago',
            category: 'Project Management',
            description: 'Empowering AI in Project Manager: A Neurodivergent-Friendly Guide to Enhanced Productivity AI tools can'
        },
        {
            image: r2,
            title: 'Open Source Project Management for ADHD: Why We Built LeaHub for Neurodivergent Productivity',
            timeAgo: '7 months ago',
            category: 'Tech Corner',
            description: "If you've ever opened a project management tool and immediately felt overwhelmed by all the"
        },
        {
            image: r1,
            title: 'Ultimate Guide to Rebuilding Trust in Project Management',
            timeAgo: '2 months ago',
            category: 'Project Management',
            description: "When Sarah's Team Stopped Trusting the Algorithm: A Case Study in Rebuilding AI Trust in"
        }
    ];


    const smallPosts = [
        {
            image: r4,
            title: 'Proven Strategies to Reclaim Focus in 2025',
            timeAgo: '3 months ago',
            category: 'Project Management'
        },
        {
            image: r5,
            title: 'The Ultimate Guide to Neurodivergent Strengths in Work',
            timeAgo: '3 months ago',
            category: 'ADHD'
        },
        {
            image: r6,
            title: 'Essential Strategies for Neurodivergent Professionals',
            timeAgo: '3 months ago',
            category: 'ADHD'
        },
        {
            image: r7,
            title: 'Understanding Goals and Milestones for Project Success',
            timeAgo: '5 months ago',
            category: 'Goal Development'
        },
        {
            image: r8,
            title: 'Treos Theory of Change Projects with LeaHub for Impact',
            timeAgo: '4 months ago',
            category: 'Strategy'
        },
        {
            image: r9,
            title: "Coordinating Human and AI Development Teams with LeaHub MCP: A Developer's Guide to Distributed Task Management",
            timeAgo: '5 months ago',
            category: 'Tech Corner'
        },
        {
            image: r10,
            title: 'Introducing the LeanHub MCP Server: What Claude.i Work on Next?',
            timeAgo: '5 months ago',
            category: 'Features & Releases'
        },

    ];

    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>It's a blog!</h2>

                <div className={styles.mainPosts}>
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} post={post} isLarge={true} />
                    ))}
                </div>

                <div className={styles.smallPosts}>
                    {smallPosts.map((post, index) => (
                        <BlogCard key={index} post={post} isLarge={false} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;