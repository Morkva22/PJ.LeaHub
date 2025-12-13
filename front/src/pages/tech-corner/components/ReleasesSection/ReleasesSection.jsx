
import React, { useState } from 'react';
import Card from './../Card/Card.jsx';
import Pagination from './../Pagination/Pagination.jsx';
import styles from './ReleasesSection.module.css';


import r7 from '../../../../assets/images/r7.png';
import r8 from '../../../../assets/images/r8.png';
import r9 from '../../../../assets/images/r9.png';
import r10 from '../../../../assets/images/r10.png';
import r11 from '../../../../assets/images/r11.png';
import r12 from '../../../../assets/images/r12.png';
import r13 from '../../../../assets/images/r13.png';
import r14 from '../../../../assets/images/r14.png';
import r15 from '../../../../assets/images/r15.png';


const ReleasesSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const releases = [
        {
            id: 1,
            image: r7,
            title: "Introducing the LeaHub MCP Server: What should I even name it?",
            badge: "mcp-leahubsync",
            author: "Manuel Fobarini"
        },
        {
            id: 2,
            image: r8,
            title: "LeaHub 3.5.6: Faster, Smoother, and More Accessible",
            badge: "mcp-leahubsync",
            author: "Manuel Fobarini"
        },
        {
            id: 3,
            image: r9,
            title: "LeaHub 3.5.5: Cleaner Interface, Better Experience",
            badge: "mcp-leahubsync",
            author: "Manuel Fobarini"
        },
        {
            id: 4,
            image: r10,
            title: "Unveiling LeaHub 3.5: Sleeker, Faster, and More Intuitive Than Ever",
            badge: "mcp-leahubsync",
            author: "Manuel Fobarini"
        },
        {
            id: 5,
            image: r11,
            title: "LeaHub 3.4.8: New task manager for your distributed team",
            badge: "mcp-leahubsync",
            author: "Manuel Fobarini"
        },
        {
            id: 6,
            image: r12,
            title: "LeaHub 3.4 Released: The Features You Asked For",
            badge: "mcp-leahubsync",
            author: "Manuel Fobarini"
        },
        {
            id: 7,
            image: r13,
            title: "Architecture Improvements in Version 3.3",
            badge: "mcp-leahubsync",
            author: "Manuel Fobarini"
        },
        {
            id: 8,
            image: r14,
            title: "Performance Optimization Updates",
            badge: "mcp-leahubsync",
            author: "Manuel Fobarini"
        },
        {
            id: 9,
            image: r15,
            title: "New Plugin System Introduction",
            badge: "mcp-leahubsync",
            author: "Manuel Fobarini"
        }
    ];

    const releasesPerPage = 6;
    const totalPages = Math.ceil(releases.length / releasesPerPage);

    const getCurrentReleases = () => {
        const start = (currentPage - 1) * releasesPerPage;
        return releases.slice(start, start + releasesPerPage);
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Latest Releases</h2>
            <div className={styles.grid}>
                {getCurrentReleases().map((release) => (
                    <Card key={release.id} data={release} />
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

export default ReleasesSection;