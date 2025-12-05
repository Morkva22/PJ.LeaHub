import React from 'react';
import BlogCard from './BlogCard';
import styles from './BlogSection.module.css';

const BlogSection = () => {
    const blogPosts = [
        {
            image: 'https://via.placeholder.com/400x250/4A90E2/ffffff?text=AI+Brain',
            title: 'Empowering Neurodivergent Project Managers with AI',
            timeAgo: '6 months ago',
            category: 'Project Management',
            description: 'Empowering AI in Project Manager: A Neurodivergent-Friendly Guide to Enhanced Productivity AI tools can'
        },
        {
            image: 'https://via.placeholder.com/400x250/7B68EE/ffffff?text=Brain+Gears',
            title: 'Open Source Project Management for ADHD: Why We Built Leantime for Neurodivergent Productivity',
            timeAgo: '7 months ago',
            category: 'Tech Corner',
            description: "If you've ever opened a project management tool and immediately felt overwhelmed by all the"
        },
        {
            image: 'https://via.placeholder.com/400x250/50C878/ffffff?text=Trust+Building',
            title: 'Ultimate Guide to Rebuilding Trust in Project Management',
            timeAgo: '2 months ago',
            category: 'Project Management',
            description: "When Sarah's Team Stopped Trusting the Algorithm: A Case Study in Rebuilding AI Trust in"
        }
    ];

    const smallPosts = [
        {
            image: 'https://via.placeholder.com/100x100/FF69B4/ffffff?text=Focus',
            title: 'Proven Strategies to Reclaim Focus in 2025',
            timeAgo: '3 months ago',
            category: 'Project Management'
        },
        {
            image: 'https://via.placeholder.com/100x100/20B2AA/ffffff?text=Guide',
            title: 'The Ultimate Guide to Neurodivergent Strengths in Work',
            timeAgo: '3 months ago',
            category: 'ADHD'
        },
        {
            image: 'https://via.placeholder.com/100x100/FF6347/ffffff?text=Strategies',
            title: 'Essential Strategies for Neurodivergent Professionals',
            timeAgo: '3 months ago',
            category: 'ADHD'
        },
        {
            image: 'https://via.placeholder.com/100x100/4169E1/ffffff?text=Goals',
            title: 'Understanding Goals and Milestones for Project Success',
            timeAgo: '5 months ago',
            category: 'Goal Development'
        },
        {
            image: 'https://via.placeholder.com/100x100/32CD32/ffffff?text=Change',
            title: 'Treos Theory of Change Projects with Leantime for Impact',
            timeAgo: '4 months ago',
            category: 'Strategy'
        },
        {
            image: 'https://via.placeholder.com/100x100/9370DB/ffffff?text=AI+Team',
            title: "Coordinating Human and AI Development Teams with Leantime MCP: A Developer's Guide to Distributed Task Management",
            timeAgo: '5 months ago',
            category: 'Tech Corner'
        },
        {
            image: 'https://via.placeholder.com/100x100/FFD700/ffffff?text=MCP',
            title: 'Introducing the Leantime MCP Server: What Claude.i Work on Next?',
            timeAgo: '5 months ago',
            category: 'Features & Releases'
        },
        {
            image: 'https://via.placeholder.com/100x100/DC143C/ffffff?text=Nonprofit',
            title: 'How to Break Down a Huge Nonprofit Project into Manageable Pieces',
            timeAgo: '5 months ago',
            category: 'Project Management'
        }
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