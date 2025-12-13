import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import LatestArticle from './components/LatestArticle/LatestArticle.jsx';
import TechCornerPreview from './components/TechCornerPreview/TechCornerPreview.jsx';
import CategorySection from './components/CategorySection/CategorySection';
import styles from './Blog.module.css';

import r1 from '../../assets/images/r1.png';
import r2 from '../../assets/images/r2.png';
import r3 from '../../assets/images/r3.png';
import r4 from '../../assets/images/r4.png';
import r5 from '../../assets/images/r5.png';
import r6 from '../../assets/images/r6.png';
import r7 from '../../assets/images/r7.png';
import r8 from '../../assets/images/r8.png';
import r9 from '../../assets/images/r9.png';
import r10 from '../../assets/images/r10.png';
import r11 from '../../assets/images/r11.png';


const Blog = () => {
    const leantimeNewsArticles = [
        {
            id: 1,
            image: r1,
            title: 'Introducing the LeaHub MCP Server: What should I even name it?',
            excerpt: 'You know that feeling when debugging those elusive bugs turns into a complete world-a-whirla, and you cant even...',
            date: 'July 12, 2025',
            comments: 'No Comments',
            badge: 'LEAHUB NEWS'
        },
        {
            id: 2,
            image: r2,
            title: 'LeaHub 3.5.6: Faster, Smoother, and More Accessible',
            excerpt: 'We launched LeaHub 3.5.6 - a release thats all about refinement: faster load times, a smoother...',
            date: 'June 15, 2025',
            comments: 'No Comments',
            badge: 'LEAHUB NEWS'
        },
        {
            id: 3,
            image: r3,
            title: 'LeaHub 3.5.5: Cleaner Interface, Better Experience',
            excerpt: 'Today we launched LeaHub 3.5.5, a release that prioritizes user experience. The update includes important technical...',
            date: 'June 1, 2025',
            comments: 'No Comments',
            badge: 'LEAHUB NEWS'
        }
    ];

    const adhdArticles = [
        {
            id: 1,
            image: r4,
            title: 'The Ultimate Guide to Neurodivergent Strengths at Work',
            excerpt: 'How Neurodivergent Strengths are Powering Inclusive Workplaces Neurodivergent thinkers bring ADHD Neurodivergent...',
            date: 'September 16, 2025',
            comments: 'No Comments',
            badge: 'ADHD'
        },
        {
            id: 2,
            image: r5,
            title: 'Essential Strategies for Neurodivergent Professionals',
            excerpt: 'Overcoming Executive Dysfunction: Bandwidth Solutions for Neurodivergent Professionals Facing High Pressure Work...',
            date: 'August 10, 2025',
            comments: 'No Comments',
            badge: 'ADHD'
        },
        {
            id: 3,
            image: r6,
            title: 'The Future of Productivity for Neurodivergent Workers',
            excerpt: 'The Future of Productivity: How AI Will Transform Work for Neurodivergent Individuals AI has AI? Next its AI...',
            date: 'May 8, 2025',
            comments: 'No Comments',
            badge: 'ADHD'
        }
    ];

    const aiArticles = [
        {
            id: 1,
            image: r7,
            title: 'AI in Project Management: Augmenting the Human Work Experience & Productivity',
            excerpt: 'Discover how AI is revolutionizing project management and enhancing productivity...',
            date: 'April 22, 2025',
            comments: 'No Comments',
            badge: 'AI'
        },
        {
            id: 2,
            image: r8,
            title: 'Top 5 AI-Focused Productivity Tools to Support ADHD',
            excerpt: 'Explore the best AI-powered tools designed specifically for ADHD support...',
            date: 'March 18, 2025',
            comments: 'No Comments',
            badge: 'AI'
        },
        {
            id: 3,
            image: r9,
            title: 'How to Use AI for Business Strategy (A Step-by-Step Guide)',
            excerpt: 'A comprehensive guide to integrating AI into your business strategy...',
            date: 'February 28, 2025',
            comments: 'No Comments',
            badge: 'AI'
        }
    ];

    const openSourceArticles = [
        {
            id: 1,
            image: r10,
            title: 'Why Project Management Needs Open Source for Neurodiversity',
            excerpt: 'Why the Future of Project Management Needs to Be Open Source: A Neurodivergent Perspective How diverse project...',
            date: 'May 20, 2025',
            comments: 'No Comments',
            badge: 'OPEN SOURCE'
        },
        {
            id: 2,
            image: r11,
            title: 'LeaHub vs OpenProject on Tages: FOSS Project Management Compared',
            excerpt: 'Open source project management software is gaining in spark popularity, as companies are looking for cost effective...',
            date: 'December 07, 2025',
            comments: 'No Comments',
            badge: 'OPEN SOURCE'
        }
    ];

    const peopleManagementArticles = [
        {
            id: 1,
            image: r1,
            title: 'Office Politics, and Neurodiversity: Navigating the Team Dynamics of Managing Projects',
            excerpt: 'A comprehensive look at managing diverse teams and navigating workplace dynamics...',
            date: 'November 15, 2025',
            comments: 'No Comments',
            badge: 'PEOPLE MANAGEMENT'
        },
        {
            id: 2,
            image: r2,
            title: 'Creating a Diverse Workforce stands with Inclusive Job Descriptions',
            excerpt: 'Learn how inclusive language and job descriptions create more diverse workplace...',
            date: 'September 12, 2025',
            comments: 'No Comments',
            badge: 'PEOPLE MANAGEMENT'
        },
        {
            id: 3,
            image: r3,
            title: 'Creating a Supportive Work Environment: The Power of Inclusion',
            excerpt: 'How fostering an inclusive and supportive workplace can boost productivity and engagement...',
            date: 'August 25, 2025',
            comments: 'No Comments',
            badge: 'PEOPLE MANAGEMENT'
        }
    ];

    const projectManagementArticles = [
        {
            id: 1,
            image: r4,
            title: 'Ultimate Guide to Rebuilding Trust in Project Management',
            excerpt: 'When Sandi Toxic Scoped Funding Like Algorithm: A Case Study in Rebuilding Trust in Project Management Get Unexpected...',
            date: 'September 23, 2025',
            comments: 'No Comments',
            badge: 'PROJECT MANAGEMENT'
        },
        {
            id: 2,
            image: r5,
            title: 'Proven Strategies to Reclaim Focus in 2025',
            excerpt: 'How to Overcome Reactive Productivity: How to Reclaim Focus in 2025 The way were doing productivity needs to stop...',
            date: 'November 5, 2025',
            comments: 'No Comments',
            badge: 'PROJECT MANAGEMENT'
        },
        {
            id: 3,
            image: r6,
            title: 'Understanding Goals and Milestones in LeaHub: Your Roadmap to Project Success',
            excerpt: 'Goals vs Milestones in LeaHub: Your Roadmap to Project Success Goals and Milestones two LeaHub features that guide...',
            date: 'August 20, 2025',
            comments: 'No Comments',
            badge: 'PROJECT MANAGEMENT'
        }
    ];

    return (
        <div className={styles.blog}>
            <Hero />
            <div className={styles.content}>
                <LatestArticle />
                <TechCornerPreview />
                <CategorySection
                    title="LeaHub News"
                    articles={leantimeNewsArticles}
                />
                <CategorySection
                    title="On ADHD"
                    articles={adhdArticles}
                />
                <CategorySection
                    title="On AI"
                    articles={aiArticles}
                />
                <CategorySection
                    title="On Open Source"
                    articles={openSourceArticles}
                />
                <CategorySection
                    title="On People Management"
                    articles={peopleManagementArticles}
                />
                <CategorySection
                    title="On Project Management"
                    articles={projectManagementArticles}
                />
            </div>
        </div>
    );
};

export default Blog;