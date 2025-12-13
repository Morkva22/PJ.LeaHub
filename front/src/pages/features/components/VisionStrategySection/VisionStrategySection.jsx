import React, { useState } from 'react';
import { Target, Scale, Link2, Star } from 'lucide-react';
import styles from './VisionStrategySection.module.css';
import a2 from '../../../../assets/images/a2.png';
import a3 from '../../../../assets/images/a3.png';
import a4 from '../../../../assets/images/a4.png';
import a5 from '../../../../assets/images/a5.png';

const tabs = [
    {
        id: 'purpose',
        icon: Target,
        label: 'Give the Work a Purpose',
        title: 'Use Vision & Strategy to See Progress',
        subtitle: 'Create a Long Term Vision & Strategy',
        text: 'Whether it\'s to buy a house, graduate college, or build a billion dollar company, having a vision and strategy helps to keep us focused.\n\nIn Leantime, create a strategic vision and outline to where you want to see things over the next 1 to 5 years.',
        img: a2
    },
    {
        id: 'focus',
        icon: Scale,
        label: 'Set Focus Areas That Stick',
        title: 'Use Vision & Strategy to See Progress',
        subtitle: 'Make The Focus Points Clear',
        text: 'By setting Focus Areas, you can clearly define what you need to focus on in order to reach your goals.',
        img: a3
    },
    {
        id: 'connect',
        icon: Link2,
        label: 'Connect Strategy & Project Goals',
        title: 'Use Vision & Strategy to See Progress',
        subtitle: 'Strategic Goals that connect to the Project Goals',
        text: 'Report goal data back up to the strategy level in real time when you update those goals at the project level.\n\nHere you have the ability to link to projects and report, link only or keep this a high level goal only.',
        img: a4
    },
    {
        id: 'validate',
        icon: Star,
        label: 'Test, Validate & Define',
        title: 'Use Vision & Strategy to See Progress',
        subtitle: 'Make Sure It\'s the Right Strategy',
        text: 'Take a blueprint and test, define and validate your plans and strategies.\n\nBlueprints exist at both the Strategy level and at the Project level.',
        img: a5
    }
];

const VisionStrategySection = () => {
    const [activeTab, setActiveTab] = useState('purpose');
    const current = tabs.find(t => t.id === activeTab);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Making great things requires a direction and a plan</h2>
                <p className={styles.mainSubtitle}>
                    Setting a direction and creating a plan to get there makes the actual work execution go smoother and is more easily communicated. Often times, though, tools rely on us to create and communicate those plans. In Leantime, we incorporate a manageable version of the high level strategy and plans needed to support the path to creating epic things.
                </p>

                <div className={styles.content}>
                    <div className={styles.contentArea}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={current.img}
                                alt={current.subtitle}
                                className={styles.image}
                            />
                        </div>

                        <div className={styles.textContent}>
                            <h4 className={styles.contentSubtitle}>{current.subtitle}</h4>
                            <p className={styles.contentText}>
                                {current.text.split('\n\n').map((paragraph, idx) => (
                                    <span key={idx}>
                                        {paragraph}
                                        {idx < current.text.split('\n\n').length - 1 && <><br/><br/></>}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>

                    <div className={styles.sidebarRight}>
                        <h3 className={styles.sidebarTitle}>{current.title}</h3>
                        <nav className={styles.sidebar}>
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    className={`${styles.sidebarTab} ${activeTab === tab.id ? styles.active : ''}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <span className={styles.tabIcon}>{React.createElement(tab.icon)}</span>
                                    <span className={styles.tabLabel}>{tab.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionStrategySection;