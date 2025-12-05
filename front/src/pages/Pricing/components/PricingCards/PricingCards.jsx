import React from 'react';
import PricingCard from '../PricingCard/PricingCard';
import styles from './PricingCards.module.css';

const PricingCards = ({ billingCycle = 'monthly' }) => {
    const plans = {
        monthly: {
            title: 'Monthly Subscription',
            subtitle: 'Leantime Pro',
            price: '$10',
            period: 'user/month',
            billingInfo: 'Billed Monthly',
            features: [
                'All features included',
                'Unlimited to-dos and projects',
                'AI-powered task management',
                '500 AI credits per month',
                '14-day free trial'
            ],
            ctaText: 'Start your free trial'
        },
        yearly: {
            title: 'Yearly Subscription',
            subtitle: 'Leantime Pro',
            price: '$96',
            period: 'user/year',
            billingInfo: 'Billed Yearly',
            features: [
                'All features included',
                'Unlimited to-dos and projects',
                'AI-powered task management',
                '500 AI credits per month',
                '14-day free trial',
                'Save $24 (2 months free)'
            ],
            ctaText: 'Start your free trial'
        }
    };

    const currentPlan = plans[billingCycle];

    return (
        <div className={styles.container}>
            <PricingCard {...currentPlan} />
        </div>
    );
};

export default PricingCards;