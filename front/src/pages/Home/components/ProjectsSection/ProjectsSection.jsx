import React, { useState } from 'react';
import styles from './ProjectsSection.module.css';
import w6 from '../../../../assets/images/w6.png';
import w7 from '../../../../assets/images/w7.png';
import w8 from '../../../../assets/images/w8.png';
import w9 from '../../../../assets/images/w9.png';
import w10 from '../../../../assets/images/w10.png';
import w11 from '../../../../assets/images/w11.png';
import w12 from '../../../../assets/images/w12.png';
import w13 from '../../../../assets/images/w13.png';

const tabs = [
    {
        id: 'todos',
        label: 'To Dos',
        title: 'Pick Your To Do View',
        text: 'For task management in a project, you get your choice of Kanban, Table or a List view.\n\nOur To Dos also include Subtasks and Dependencies.',
        img: w6
    },
    {
        id: 'milestones',
        label: 'Milestones',
        title: 'Understand the Timeline of Your Projects',
        text: 'Milestones, in LeaHub, are groups of tasks bundled together with a date so you can view them on a timeline (gantt chart).\n\nGet an even higher level view when you view the timeline on our Program Plan overview.',
        img: w7
    },
    {
        id: 'ideas',
        label: 'Ideas',
        title: 'Capture Ideas Before They Are Lost',
        text: 'Ideas come and go. Capture them in LeaHub before they disappear. Turn them into research canvases, mind maps or just simple notes.',
        img: w8
    },
    {
        id: 'docs',
        label: 'Docs',
        title: 'Project Documentation Made Simple',
        text: 'Keep all your project documentation in one place. Write project briefs, specifications or meeting notes.',
        img: w9
    },
    {
        id: 'blueprints',
        label: 'Blueprints',
        title: 'Start Projects With a Plan',
        text: 'Choose from our library of strategy and lean canvases to start your project with a plan and clear direction.',
        img: w10
    },
    {
        id: 'reports',
        label: 'Reports',
        title: 'See Project Progress At a Glance',
        text: 'View burndown charts, task completion rates and time spent to understand how your project is progressing.',
        img: w11
    },
    {
        id: 'timesheets',
        label: 'Timesheets',
        title: 'Track Time Spent on Tasks',
        text: 'Log time against tasks to understand effort and improve future estimates.',
        img: w12
    },
    {
        id: 'retros',
        label: 'Retrospectives',
        title: 'Learn and Improve Continuously',
        text: 'Run retrospective boards to reflect on what went well and what can be improved after each milestone or project.',
        img: w13
    }
];

const ProjectsSection = () => {
    const [activeTab, setActiveTab] = useState('todos');
    const current = tabs.find(t => t.id === activeTab);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Projects are where you "Think" and "Make"</h2>
                <p className={styles.subtitle}>
                    Projects are your team space with a clear structure and a focus on delivering outcomes
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
                        <img
                            src={current.img}
                            alt={current.title}
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.textContent}>
                        <h3>{current.title}</h3>
                        <p style={{ whiteSpace: 'pre-line' }}>{current.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;