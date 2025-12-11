// ============================================
// AIFeaturesSection.jsx
// Создай в: src/pages/Features/components/AIFeaturesSection/
// ============================================
import React, { useState } from 'react';
import styles from './AIFeaturesSection.module.css';

const tabs = [
    {
        id: 'priority',
        label: 'AI To Do Priority',
        title: 'AI To Do Priority',
        text: 'Recently released, our AI now prioritizes tasks using three science based productivity practices. As you complete more tasks, you can begin to privately rate how you feel about those tasks and the AI will take how you feel into consideration for that priority.',
        note: '*These features are currently unavailable in open source version.',
        img: 'AI Priority Screenshot'
    },
    {
        id: 'breakdown',
        label: 'AI Task Breakdown',
        title: 'AI Task Breakdown',
        text: 'Create a main task and ask L.E.O (our AI) to break down that task into the necessary subtasks needed to get it all done. And then watch him jump on his unicorn and fly away while you wait.',
        note: '*These features are currently unavailable in open source version.',
        img: 'AI Task Breakdown Screenshot'
    },
    {
        id: 'story',
        label: 'AI Story Time',
        title: 'AI Story Time',
        text: 'It\'s hard to feel ownership or involved on a project when the project description can be overwhelming, hard to read, or just not relate to your role.\n\nAI Story time is about bringing you into the project work. Our AI creates individual focused stories in unique voices and presents the project in a new light.',
        note: '*These features are currently unavailable in open source version.',
        img: 'AI Story Time Screenshot'
    },
    {
        id: 'updates',
        label: 'AI Status Updates',
        title: 'AI Status Updates',
        text: 'If you\'re one to compile regular status reports, L.E.O. (our AI) will help you do that. Set the timeframe that you need updates from the team and the AI will collect that information from the teams and pull it all together for you.',
        note: '*These features are currently unavailable in open source version.',
        img: 'AI Status Updates Screenshot'
    },
    {
        id: 'reports',
        label: 'AI Status Reports',
        title: 'AI Status Reports',
        text: 'AI Status reports will take the updates from the team and build a detailed report that can be edited and sent directly to the folks needing an overview of the current progress. Image coming soon.',
        note: '*These features are currently unavailable in open source version.',
        img: 'AI Status Reports Screenshot'
    }
];

const AIFeaturesSection = () => {
    const [activeTab, setActiveTab] = useState('priority');
    const current = tabs.find(t => t.id === activeTab);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Using AI in Project Management to Keep Focus</h2>
                <p className={styles.subtitle}>
                    Artificial Intelligence (AI) has been life changing for the world of generative text creation. We see this as only the beginning of what AI can do to support people in our efforts to be more productive and to accomplish great things. In Leantime, you'll see that we use AI to also make work more engaging, personal, and easier.
                </p>

                <nav className={styles.tabs}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <div className={styles.contentWrapper}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.placeholder}>{current.img}</div>
                    </div>

                    <div className={styles.textContent}>
                        <p className={styles.text}>
                            {current.text.split('\n\n').map((paragraph, idx) => (
                                <span key={idx}>
                                    {paragraph}
                                    {idx < current.text.split('\n\n').length - 1 && <><br/><br/></>}
                                </span>
                            ))}
                        </p>
                        <p className={styles.note}>{current.note}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIFeaturesSection;