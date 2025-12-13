import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard.jsx';
import { Brain, Target, Bot } from 'lucide-react';
import styles from './FeaturesShowcase.module.css';

const FeaturesShowcase = () => {
    const features = [
        {
            icon: Brain,
            title: 'Built for Neurodivergent Minds',
            description: "Unlike generic tools, LeaHub's interface and workflows are specifically designed for ADHD, Dyslexia, and Autism. Reduce overwhelm with contextual reminders, emotion-based prioritization, and distraction management tools.",
            bgColor: '#FFFEF0'
        },
        {
            icon: Target,
            title: 'From Tasks to Purpose',
            description: "Transform scattered to-dos into meaningful work connected to strategic goals. LeaHub's unique motivation framework helps you understand why tasks matter, not just what needs to be done.",
            bgColor: '#F0F8FF'
        },
        {
            icon: Bot,
            title: 'AI-Powered Guidance',
            description: "Our intelligent assistant learns your work patterns and provides personalized recommendations to keep you motivated. Receive just-in-time support when you need it most, without disrupting your flow.",
            bgColor: '#FFF0F5'
        }
    ];

    return (
        <section className={styles.featuresShowcase}>
            <h1 className={styles.showcaseTitle}>
                Why LeaHub Outperforms Traditional Task Managers
            </h1>
            <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default FeaturesShowcase;