import React, { useState } from 'react';
import Card from './../Card/Card.jsx';
import Pagination from './../Pagination/Pagination.jsx';
import styles from './ArticlesSection.module.css';


import r5 from '../../../../assets/images/r5.png';
import r16 from '../../../../assets/images/r16.png';
import r17 from '../../../../assets/images/r17.png';
import r18 from '../../../../assets/images/r18.png';
import r19 from '../../../../assets/images/r19.png';
import r20 from '../../../../assets/images/r20.png';


const ArticlesSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const articles = [
        {
            id: 1,
            image: r16,
            title: "Coordinating Human and AI Development Teams with LeaHub MCP: A Developer's Guide to Distributed Task Management",
            author: "Manuel Fobarini",
            badge: "mcp-leahubsync"
        },
        {
            id: 2,
            image: r17,
            title: "Open Source Project Management for ADHD: Why We Built LeaHub to Boost Divergent Productivity",
            author: "Manuel Fobarini",
            badge: "mcp-leahubsync"
        },
        {
            id: 3,
            image: r18,
            title: "Running Windows exe on Linux Brain: The System's Beautiful Incongruence",
            author: "Manuel Fobarini",
            badge: "mcp-leahubsync"
        },
        {
            id: 4,
            image: r19,
            title: "Advanced TypeScript Patterns for React Applications",
            author: "Manuel Fobarini",
            badge: "mcp-leahubsync"
        },
        {
            id: 5,
            image: r20,
            title: "Building Scalable Microservices with Node.js",
            author: "Manuel Fobarini",
            badge: "mcp-leahubsync"
        },
        {
            id: 6,
            image: r5,
            title: "Modern CSS Techniques for Better UX",
            author: "Manuel Fobarini",
            badge: "mcp-leahubsync"
        }
    ];

    const articlesPerPage = 3;
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const getCurrentArticles = () => {
        const start = (currentPage - 1) * articlesPerPage;
        return articles.slice(start, start + articlesPerPage);
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}> Latest Articles</h2>
            <div className={styles.grid}>
                {getCurrentArticles().map((article) => (
                    <Card key={article.id} data={article} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </section>
    );
};

export default ArticlesSection;