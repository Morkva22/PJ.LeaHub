import React from 'react';
import { useNavigate } from 'react-router-dom';
import PricingCard from '../PricingCard/PricingCard';
import styles from './PricingCards.module.css';

const PricingCards = ({ billingCycle = 'monthly' }) => {
    const navigate = useNavigate();

    const plans = {
        monthly: {
            title: 'Monthly Subscription',
            subtitle: 'LeaHub Pro',
            price: '$10',
            period: 'user/month',
            billing: 'Billed Monthly',
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
            subtitle: 'LeaHub Pro',
            price: '$96',
            period: 'user/year',
            billing: 'Billed Yearly',
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

    const handleCtaClick = () => {
        navigate('/404');
    };

    return (
        <div className={styles.container}>
            <PricingCard
                plan={currentPlan}
                onCtaClick={handleCtaClick}
            />
        </div>
    );
};

export default PricingCards;