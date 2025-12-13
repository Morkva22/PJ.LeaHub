import React from 'react';
import styles from './PartnersSection.module.css';
import awsStartups from '../../../../assets/images/aws-startups.png';
import techstars from '../../../../assets/images/Techstars_Logo.png';
import ncIdea from '../../../../assets/images/nc-idea.png';
import riot from '../../../../assets/images/site_logo-riot.png';
import ncTech from '../../../../assets/images/logo-nc-tech.png';

const PartnersSection = () => {
    const logos = [
        { name: 'AWS Startups', img: awsStartups },
        { name: 'Techstars', img: techstars },
        { name: 'NC IDEA', img: ncIdea },
        { name: 'RIOT', img: riot },
        { name: 'NC TECH', img: ncTech }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2>Backed by strong partners and an amazing community</h2>

                <div className={styles.logoGrid}>
                    {logos.map((logo, i) => (
                        <div key={i} className={styles.logoCard}>
                            <img src={logo.img} alt={logo.name} className={styles.logo} />
                        </div>
                    ))}
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}><span>10,000+</span> Users worldwide</div>
                    <div className={styles.stat}><span>2M</span> Docker Pulls</div>
                    <div className={styles.stat}><span>4,000+</span> Stars on Github</div>
                    <div className={styles.stat}><span>500k+</span> Tasks Completed</div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;