import React, { useState } from 'react';
import styles from './WorkDashboardSection.module.css';

const tabs = [
    {
        id: 'dashboard',
        label: 'My Work Dashboard',
        title: 'All Your Work In Your Personal View',
        text: 'See all your work across all your projects. Your Work Dashboard allows you to customize the widgets to your priorities and see your tasks across all the work you do.',
        img: 'Фото 1: Дашборд с задачами'
    },
    {
        id: 'timeblocking',
        label: 'Time Blocking',
        title: 'Use Time Boxing to Schedule Your Work',
        text: 'Time blocking is a known productivity tip to help you stay on task and even start challenging work. Import your iCal link and schedule tasks in between meetings and other events.',
        img: 'Фото 2: Календарь Time Blocking'
    },
    {
        id: 'notes',
        label: 'Notes',
        title: 'Personal Note Taking',
        text: 'This Notes view stays on your Work Dashboard. Visible only to you because there are always going to be things that come up but don\'t belong in the projects docs.',
        img: 'Фото 3: Заметки'
    },
    {
        id: 'ai',
        label: 'AI Prioritization',
        title: 'Rate your tasks for better prioritization',
        text: 'Tell us how you really feel. Rate your tasks on an emoji rating scale from red angry swearing face to elated unicorn — those rare tasks you\'d like to see more often. We then prioritize your tasks based on your interest.',
        img: 'Фото 4: AI приоритизация'
    },
    {
        id: 'whiteboards',
        label: 'Whiteboards',
        title: 'Create Visuals for Your Thoughts',
        text: 'With built in whiteboards, you can easily create mind maps, wireframes, or other visual representations of your thoughts.',
        img: 'Фото 5: Whiteboard'
    }
];

const WorkDashboardSection = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const current = tabs.find(t => t.id === activeTab);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Work meets Personal Organization</h2>
                <p className={styles.subtitle}>
                    Your personal dashboard to manage tasks across projects, plan your day and reduce clutter
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
                    <div className={styles.textContent}>
                        <h3>{current.title}</h3>
                        <p>{current.text}</p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <div className={styles.placeholder}>{current.img}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkDashboardSection;