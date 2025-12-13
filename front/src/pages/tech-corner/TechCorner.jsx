
import React, { useState } from 'react';
import Hero from './components/Hero/Hero.jsx';
import ArticlesSection from './components/ArticlesSection/ArticlesSection.jsx';
import ReleasesSection from './components/ReleasesSection/ReleasesSection.jsx';
import styles from './TechCorner.module.css';

const TechCorner = () => {
    return (
        <div className={styles.techCorner}>
            <Hero />
            <ArticlesSection />
            <ReleasesSection />
        </div>
    );
};

export default TechCorner;