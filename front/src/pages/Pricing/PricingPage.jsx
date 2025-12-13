    import React, { useState } from 'react';
import PricingToggle from './components/PricingToggle/PricingToggle';
import PricingCard from './components/PricingCard/PricingCard';
import CommunityEdition from './components/CommunityEdition/CommunityEdition';
import FeaturesShowcase from './components/FeaturesShowcase/FeaturesShowcase';
import ComparisonTable from './components/ComparisonTable/ComparisonTable';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import TrialCallToAction from './components/TrialCallToAction/TrialCallToAction';
import PricingPhilosophy from './components/PricingPhilosophy/PricingPhilosophy';
import FeaturesList from './components/FeaturesList/FeaturesList';
import EnterpriseOfferings from './components/EnterpriseOfferings/EnterpriseOfferings';
import GetSupport from './components/GetSupport/GetSupport.jsx';
import BlogSection from './components/BlogSection/BlogSection';
import styles from './PricingPage.module.css';

const PricingPage = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = {
        monthly: {
            title: 'Monthly Subscription',
            subtitle: 'LeaHub Pro',
            price: '$10',
            period: 'user / month',
            billing: 'Billed Monthly'
        },
        yearly: {
            title: 'Yearly Subscription',
            subtitle: 'Get 2 Months Free',
            price: '$8',
            period: 'user / month',
            billing: 'Billed Annually'
        }
    };

    const currentPlan = isYearly ? plans.yearly : plans.monthly;

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <PricingToggle
                    isYearly={isYearly}
                    onToggle={setIsYearly}
                />

                <PricingCard plan={currentPlan} />

                <p className={styles.infoText}>
                    Both plans offer the same features and functionality.
                    By signing up for a year you get 2 months free.
                </p>

                <CommunityEdition />

                <FeaturesShowcase />

                <ComparisonTable />

                <ReviewsSection />

                <TrialCallToAction />

                <PricingPhilosophy />

                <FeaturesList />

                <EnterpriseOfferings />

                <GetSupport />

                <BlogSection />
            </div>
        </div>
    );
};

export default PricingPage;