import { Zap, FileText, Calendar, Users, CheckCircle, TrendingUp, Target, Lightbulb, BarChart3, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import styles from './QuickPromts.module.css';

export default function QuickPrompts({ onSelect }) {
    const [activeCategory, setActiveCategory] = useState('popular');

    const categories = {
        popular: {
            title: 'Popular',
            icon: Zap,
            prompts: [
                {
                    icon: FileText,
                    text: 'Summarize my recent tasks',
                    prompt: 'Can you summarize my recent tasks and their status?'
                },
                {
                    icon: Calendar,
                    text: 'Show upcoming deadlines',
                    prompt: 'What are my upcoming project deadlines?'
                },
                {
                    icon: TrendingUp,
                    text: 'Project progress report',
                    prompt: 'Give me a detailed report on current project progress'
                }
            ]
        },
        team: {
            title: 'Team',
            icon: Users,
            prompts: [
                {
                    icon: Users,
                    text: 'Team performance overview',
                    prompt: 'Give me an overview of team performance this week'
                },
                {
                    icon: MessageCircle,
                    text: 'Team communication tips',
                    prompt: 'How can I improve team communication and collaboration?'
                },
                {
                    icon: Target,
                    text: 'Task distribution',
                    prompt: 'Help me distribute tasks effectively among team members'
                }
            ]
        },
        planning: {
            title: 'Planning',
            icon: CheckCircle,
            prompts: [
                {
                    icon: CheckCircle,
                    text: 'Create project checklist',
                    prompt: 'Help me create a comprehensive project management checklist'
                },
                {
                    icon: Lightbulb,
                    text: 'Project ideas',
                    prompt: 'Suggest innovative ideas for my current project'
                },
                {
                    icon: BarChart3,
                    text: 'Risk analysis',
                    prompt: 'Analyze potential risks in my project and suggest mitigation strategies'
                }
            ]
        }
    };

    const currentCategory = categories[activeCategory];
    const CategoryIcon = currentCategory.icon;

    return (
        <div className={styles.container}>
            <div className={styles.categoryTabs}>
                {Object.keys(categories).map((key) => {
                    const cat = categories[key];
                    const Icon = cat.icon;
                    return (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`${styles.categoryTab} ${activeCategory === key ? styles.active : ''}`}
                        >
                            <Icon className={styles.categoryIcon} />
                            <span>{cat.title}</span>
                        </button>
                    );
                })}
            </div>

            <div className={styles.header}>
                <CategoryIcon className={styles.headerIcon} />
                <span className={styles.headerText}>{currentCategory.title} Actions</span>
            </div>

            <div className={styles.grid}>
                {currentCategory.prompts.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={index}
                            onClick={() => onSelect(item.prompt)}
                            className={styles.promptButton}
                        >
                            <div className={styles.iconBox}>
                                <Icon className={styles.icon} />
                            </div>
                            <span className={styles.text}>{item.text}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}