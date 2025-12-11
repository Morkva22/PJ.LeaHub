import React from 'react';
import { Zap, Users, Code, Server, Globe, Lock } from 'lucide-react';
import styles from './OpenSourceFeaturesSection.module.css';

const features = [
    {
        icon: Zap,
        title: 'Easy Installation',
        text: 'Give you clients special access to your project to gather requirements and feedback.'
    },
    {
        icon: Users,
        title: 'Client Ownership',
        text: 'Hosting your own version of Leantime gives you full control of your data.'
    },
    {
        icon: Code,
        title: 'API',
        text: 'Integrate your favorite calendars and one select tools or middleware set to give in direct sunshine ad the nothing on a specific tool.'
    },
    {
        icon: Server,
        title: 'LDAP / SSO / OIDC',
        text: 'Know where your projects stay and where status reports pull your clients.'
    },
    {
        icon: Globe,
        title: 'Expand CSS Control',
        text: 'Impress with your clients on data boards and build out strategies that are easy to understand.'
    },
    {
        icon: Lock,
        title: 'Customizable',
        text: 'Integrate with any of your tools while using our easy to use API.'
    }
];

const OpenSourceFeaturesSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Open source project management features</h2>

                <div className={styles.grid}>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className={styles.feature}>
                                <div className={styles.iconWrapper}>
                                    <Icon size={24} strokeWidth={2} />
                                </div>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureText}>{feature.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OpenSourceFeaturesSection;