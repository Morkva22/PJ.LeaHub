import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './404resources.module.css';

const NotFoundResources = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const phrases = [
        { lang: 'English', text: 'Curiosity comes at a price' },
        { lang: 'Українська', text: 'Цікавість дорого коштує' },
        { lang: 'Българска', text: 'любопитството струва скъпо' },
        { lang: 'Latvian', text: 'ziņkāre maksā dārgi' },
        { lang: 'Czech', text: 'zvědavost je drahá' },
        { lang: 'Italian', text: 'la curiosità costa cara'},
        { lang: 'German', text: 'Neugierde ist teuer' },
        { lang: 'France', text: 'la curiosité coûte cher' },
        { lang: 'Luxemborgish', text: 'Neiergier ass deier' },
        { lang: 'Polish', text: 'ciekawość kosztuje drogo' },
        { lang: 'Finnish', text: 'uteliaisuus on kallista' },
        { lang: 'Indonesian', text: 'Keingintahuan itu mahal harganya.' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.resourcesNotFoundContainer}>
            <div className={styles.resourcesNotFoundContent}>
                <div className={styles.lockIcon}>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                </div>

                <div className={styles.phrasesContainer}>
                    {phrases.map((phrase, index) => (
                        <div
                            key={index}
                            className={`${styles.phrase} ${index === currentIndex ? styles.active : ''}`}
                        >
                            <p className={styles.phraseText}>{phrase.text}</p>
                            <p className={styles.phraseLang}>{phrase.lang}</p>
                        </div>
                    ))}
                </div>

                <p className={styles.resourcesDescription}>
                    This resource is currently unavailable
                </p>

                <Link to="/" className={styles.homeButtonResources}>
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundResources;