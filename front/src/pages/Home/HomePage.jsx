import React from 'react';
import HeroSection from '../Home/components/HeroSection/HeroSection';
import FeaturesSection from '../Home/components/FeaturesSection/FeaturesSection';
import BlogSection from '../Home/components/BlogSection/BlogSection';
import TrustSection from '../Home/components/TrustSection/TrustSection';
import WorkDashboardSection from '../Home/components/WorkDashboardSection/WorkDashboardSection';
import ProjectsSection from '../Home/components/ProjectsSection/ProjectsSection';
import PartnersSection from '../Home/components/PartnersSection/PartnersSection';
import TestimonialsSection from '../Home/components/TestimonialsSection/TestimonialsSection';
import GoalEffectSection from '../Home/components/GoalEffectSection/GoalEffectSection';
import NewsletterSection from '../Home/components/NewsletterSection/NewsletterSection';


const Home = () => {
    return (
        <>
            <HeroSection />
            <TrustSection />
            <WorkDashboardSection />
            <FeaturesSection />
            <ProjectsSection />
            <BlogSection />
            <PartnersSection />
            <TestimonialsSection />
            <GoalEffectSection />
            <NewsletterSection />
        </>
    );
};

export default Home;