import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import BlogSection from '../components/sections/BlogSection';
import TrustSection from '../components/sections/TrustSection';
import WorkDashboardSection from '../components/sections/WorkDashboardSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import PartnersSection from '../components/sections/PartnersSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import GoalEffectSection from '../components/sections/GoalEffectSection';
import NewsletterSection from '../components/sections/NewsletterSection';


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