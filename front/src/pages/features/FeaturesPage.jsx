import React from 'react';
import FeaturesHeroSection from './components/FeaturesHeroSection/FeaturesHeroSection';
import HonestSection from './components/HonestSection/HonestSection';
import DifferentlySection from './components/DifferentlySection/DifferentlySection';
import VisionStrategySection from './components/VisionStrategySection/VisionStrategySection';
import WorkDashboardSection2 from './components/WorkDashboardSection/WorkDashboardSection2';
import ProjectsSection2 from './components/ProjectsSection/ProjectsSection2';
import AIFeaturesSection from './components/AIFeaturesSection/AIFeaturesSection';
import OpenSourceFeaturesSection from "./components/OpenSourceFeaturesSection/OpenSourceFeaturesSection.jsx";
import LatestReleaseSection from './components/LatestReleaseSection/LatestReleaseSection';
import FAQSection from "./components/FAQSection/FAQSection.jsx";
import BlogSection from './BlogSection/BlogSection';
const Features = () => {
    return (
        <>
            <FeaturesHeroSection />
            <HonestSection />
            <DifferentlySection />
            <VisionStrategySection />
            <WorkDashboardSection2 />
            <AIFeaturesSection />
            <ProjectsSection2 />
            <OpenSourceFeaturesSection />
            <LatestReleaseSection />
            <FAQSection />
            <BlogSection />
        </>
    );
};

export default Features;