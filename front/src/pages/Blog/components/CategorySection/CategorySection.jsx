import React, { useState } from 'react';
import ArticleCard from './../ArticleCard/ArticleCard.jsx';
import Pagination from './../Pagination/Pagination.jsx';
import styles from './CategorySection.module.css';

const CategorySection = ({ title, emoji, articles }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 3;
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const getCurrentArticles = () => {
        const start = (currentPage - 1) * articlesPerPage;
        return articles.slice(start, start + articlesPerPage);
    };

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{emoji} {title}</h2>
            <div className={styles.grid}>
                {getCurrentArticles().map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
};

export default CategorySection;