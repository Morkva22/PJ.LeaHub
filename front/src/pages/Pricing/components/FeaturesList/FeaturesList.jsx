import React from 'react';
import { Check } from 'lucide-react';
import styles from './FeaturesList.module.css';

const FeaturesList = () => {
    const features = [
        {
            category: 'AI (L.E.O.)',
            items: [
                { name: 'AI Collected Status Updates from Team', oss: false, pro: true },
                { name: 'AI Compiled Status Report Updates', oss: false, pro: true },
                { name: 'AI Story Time', oss: false, pro: true },
                { name: 'AI Coach', oss: false, pro: true }
            ]
        },
        {
            category: 'Program Management',
            items: [
                { name: 'Program Plan Dashboard', oss: false, pro: true },
                { name: 'Program Plan Kanban Statuses', oss: false, pro: true },
                { name: 'Program Plan Timelines', oss: false, pro: true },
                { name: 'Multiple Programs', oss: false, pro: true },
                { name: 'Documents', oss: false, pro: true },
                { name: 'Automated Goal Management', oss: false, pro: true },
                { name: 'Idea Boards', oss: false, pro: true },
                { name: 'Strategy Boards', oss: false, pro: true },
                { name: 'Retrospectives', oss: false, pro: true },
                { name: 'File Management', oss: false, pro: true }
            ]
        },
        {
            category: 'High Level (Company) Strategy',
            items: [
                { name: 'Strategic Vision & Descriptions', oss: false, pro: true },
                { name: 'Strategic Anchors (Focus Areas)', oss: false, pro: true },
                { name: 'Automated Goal Management', oss: false, pro: true },
                { name: 'Documents', oss: false, pro: true },
                { name: 'Strategy Boards', oss: false, pro: true },
                { name: 'File Management', oss: false, pro: true },
                { name: 'Strategy Items', oss: false, pro: true }
            ]
        },
        {
            category: 'Project Management',
            items: [
                { name: 'User Dashboard with Task Overview', oss: true, pro: true },
                { name: 'Calendar View', oss: true, pro: true },
                { name: 'Project Dashboard', oss: true, pro: true },
                { name: 'Project Progress Chart', oss: true, pro: true },
                { name: 'Basic Project Portfolio View', oss: true, pro: true },
                { name: 'Milestones (Gantt & Timelines)', oss: true, pro: true },
                { name: 'Milestones with Tasks & Subtask view', oss: true, pro: false },
                { name: 'Kanban', oss: true, pro: true },
                { name: 'Multiple Task Views (Table, List)', oss: true, pro: true },
                { name: 'Task Dependencies', oss: true, pro: true },
                { name: 'Custom Task Statuses + Kanban Columns', oss: true, pro: true },
                { name: 'Sprints & Backlog', oss: true, pro: true },
                { name: 'Business Development Boards', oss: true, pro: true },
                { name: 'Basic Status Updates (Project Level)', oss: true, pro: true },
                { name: 'Project Icons', oss: true, pro: true }
            ]
        },
        {
            category: 'Time Tracking',
            items: [
                { name: 'Time Tracking', oss: true, pro: true },
                { name: 'Start Time at Task', oss: true, pro: true },
                { name: 'Timesheet Management', oss: true, pro: true },
                { name: 'Timesheet Export', oss: true, pro: true }
            ]
        },
        {
            category: 'Documentation/Wiki',
            items: [
                { name: 'Docs/Wikis', oss: true, pro: true },
                { name: 'Document Templates', oss: true, pro: true },
                { name: 'Canva Embedded Files', oss: true, pro: true },
                { name: 'Microsoft 365 Embedded Files', oss: true, pro: true }
            ]
        },
        {
            category: 'Reports And Insights',
            items: [
                { name: 'Reports', oss: true, pro: true }
            ]
        },
        {
            category: 'File Management',
            items: [
                { name: 'Screen Capture', oss: true, pro: true },
                { name: 'In App Video Recording', oss: true, pro: true },
                { name: 'Media Viewer', oss: true, pro: true }
            ]
        },
        {
            category: 'Team Engagement',
            items: [
                { name: 'Contacts', oss: true, pro: true },
                { name: 'Comments / Discussion', oss: true, pro: true },
                { name: 'Notifications', oss: true, pro: true },
                { name: 'Profile Images', oss: true, pro: true },
                { name: 'Reactions (Coming Soon)', oss: false, pro: false, comingSoon: true }
            ]
        },
        {
            category: 'Support',
            items: [
                { name: 'Community Help (Discord)', oss: true, pro: true },
                { name: 'Github', oss: true, pro: true },
                { name: 'Custom Enterprise Support', oss: false, pro: 'Contact for pricing' }
            ]
        },
        {
            category: 'Other',
            items: [
                { name: 'White labeling', oss: true, pro: true },
                { name: 'Client Management', oss: true, pro: true },
                { name: 'Two Factor Authentication', oss: true, pro: true },
                { name: 'User Role Management', oss: true, pro: true },
                { name: 'User Job Titles', oss: true, pro: true },
                { name: 'Translations', oss: true, pro: true },
                { name: 'Themes (Inclusive Reading, Dark Mode+)', oss: true, pro: true },
                { name: 'API Access (With Paid Plans)', oss: true, pro: true },
                { name: 'CSV Import (Coming Soon)', oss: false, pro: false, comingSoon: true }
            ]
        },
        {
            category: 'Integrations',
            items: [
                { name: 'Slack', oss: true, pro: true },
                { name: 'Discord', oss: true, pro: true },
                { name: 'Mattermost', oss: true, pro: true },
                { name: 'ICS calendar export', oss: true, pro: true },
                { name: 'Zapier/Make Integrations', oss: true, pro: true }
            ]
        },
        {
            category: 'Other',
            items: [
                { name: 'Whiteboard', oss: false, pro: true },
                { name: 'Custom Fields', oss: false, pro: true },
                { name: 'Recurring Tasks', oss: false, pro: true }
            ]
        }
    ];

    return (
        <section className={styles.featuresSection}>
            <div className={styles.container}>
                <h2 className={styles.title}>Features List</h2>

                <div className={styles.tableWrapper}>
                    <table className={styles.featuresTable}>
                        <thead>
                        <tr>
                            <th className={styles.headerCell}></th>
                            <th className={styles.headerCell}>LeaHub OSS</th>
                            <th className={styles.headerCell}>LeaHub Pro / Plugin Bundle</th>
                        </tr>
                        </thead>
                        <tbody>
                        {features.map((section, sectionIndex) => (
                            <React.Fragment key={sectionIndex}>
                                <tr className={styles.categoryRow}>
                                    <td className={styles.categoryCell} colSpan={3}>
                                        {section.category}
                                    </td>
                                </tr>
                                {section.items.map((item, itemIndex) => (
                                    <tr key={itemIndex} className={styles.featureRow}>
                                        <td className={styles.featureCell}>{item.name}</td>
                                        <td className={styles.checkCell}>
                                            {item.comingSoon ? (
                                                <span className={styles.comingSoon}>(coming soon)</span>
                                            ) : item.oss === true ? (
                                                <Check size={18} color="#50C878" />
                                            ) : item.oss === false ? (
                                                ''
                                            ) : (
                                                <span className={styles.customText}>{item.oss}</span>
                                            )}
                                        </td>
                                        <td className={styles.checkCell}>
                                            {item.comingSoon ? (
                                                <span className={styles.comingSoon}>(coming soon)</span>
                                            ) : item.pro === true ? (
                                                <Check size={18} color="#50C878" />
                                            ) : item.pro === false ? (
                                                ''
                                            ) : (
                                                <span className={styles.customText}>{item.pro}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default FeaturesList;