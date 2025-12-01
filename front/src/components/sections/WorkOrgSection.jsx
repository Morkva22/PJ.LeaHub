import React from 'react';
import styles from './WorkOrgSection.module.css';

const WorkOrgSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Work meets Personal Organization</h2>
                    <p>Your personal dashboard to manage tasks across projects, plan your day and reduce clutter</p>

                    <nav className={styles.tabs}>
                        <a href="#dashboard" className={styles.tabActive}>My Work Dashboard</a>
                        <a href="#timeblocking">Time Blocking</a>
                        <a href="#notes">Notes</a>
                        <a href="#aiprioritization">AI Prioritization</a>
                        <a href="#whiteboards">Whiteboards</a>
                    </nav>

                    {/* Заглушка для дашборда */}
                    <div className={styles.imageWrapper}>
                        <div className={styles.placeholder}>Фото 1: Дашборд с задачами (скриншот интерфейса)</div>
                    </div>

                    <h3>All Your Work In Your Personal View</h3>
                    <p>See all your work across all your projects.</p>
                    <p>Your Work Dashboard allows you to customize the widgets to your priorities and see your tasks across all the work you do.</p>

                    <h3>Use Time Boxing to Schedule Your Work</h3>
                    <p>Time blocking is a known productivity tip to help you stay on task and even start challenging work. Import your iCal link and schedule tasks in between meetings and other events.</p>
                    <div className={styles.imageWrapper}>
                        <div className={styles.placeholder}>Фото 2: Time Blocking календарь</div>
                    </div>

                    <h3>Personal Note Taking</h3>
                    <p>This Notes view stays on your Work Dashboard. Visible only to you because there are always going to be things that come up but don't belong in the projects docs.</p>

                    <h3>Rate your tasks for better prioritization</h3>
                    <p>Tell us how you really feel. Rate your tasks on an emoji rating scale from red angry swearing face to elated unicorn — those rare tasks you'd like to see more often.</p>
                    <p>We then prioritize your tasks based on your interest and look for pairings that make less interesting tasks easier to tackle.</p>

                    <h3>Create Visuals for Your Thoughts</h3>
                    <p>With built in whiteboards, you can easily create mind maps, wireframes, or other visual representations of your thoughts.</p>
                </div>
            </div>
        </section>
    );
};

export default WorkOrgSection;