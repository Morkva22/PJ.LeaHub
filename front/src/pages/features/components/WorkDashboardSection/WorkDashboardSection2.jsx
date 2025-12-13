import React, { useState } from 'react';
import styles from './WorkDashboardSection2.module.css';
import w1 from '../../../../assets/images/w1.jpg';
import w2 from '../../../../assets/images/w2.png';
import w3 from '../../../../assets/images/w3.png';
import w4 from '../../../../assets/images/w4.png';
import w5 from '../../../../assets/images/w5.png';

const tabs = [
    {
        id: 'dashboard',
        label: 'My Work Dashboard',
        title: 'All Your Work In Your Personal View',
        text: 'See all your work across all your projects. Your Work Dashboard allows you to customize the widgets to your priorities and see your tasks across all the work you do.',
        img: w1
    },
    {
        id: 'timeblocking',
        label: 'Time Blocking',
        title: 'Use Time Boxing to Schedule Your Work',
        text: 'Time blocking is a known productivity tip to help you stay on task and even start challenging work. Import your iCal link and schedule tasks in between meetings and other events.',
        img: w2
    },
    {
        id: 'notes',
        label: 'Notes',
        title: 'Personal Note Taking',
        text: 'This Notes view stays on your Work Dashboard. Visible only to you because there are always going to be things that come up but don\'t belong in the projects docs.',
        img: w3
    },
    {
        id: 'ai',
        label: 'AI Prioritization',
        title: 'Rate your tasks for better prioritization',
        text: 'Tell us how you really feel. Rate your tasks on an emoji rating scale from red angry swearing face to elated unicorn — those rare tasks you\'d like to see more often. We then prioritize your tasks based on your interest.',
        img: w4
    },
    {
        id: 'whiteboards',
        label: 'Whiteboards',
        title: 'Create Visuals for Your Thoughts',
        text: 'With built in whiteboards, you can easily create mind maps, wireframes, or other visual representations of your thoughts.',
        img: w5
    }
];

const WorkDashboardSection2 = () => {
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
                        <img
                            src={current.img}
                            alt={current.title}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkDashboardSection2;