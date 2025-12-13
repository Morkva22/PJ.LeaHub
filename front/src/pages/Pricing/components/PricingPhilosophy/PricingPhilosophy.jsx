import React, { useState } from 'react';
import AccordionItem from './AccordionItem.jsx';
import styles from './PricingPhilosophy.module.css';

const PricingPhilosophy = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const accordionData = [
        {
            title: "Why We Don't Offer a Free SaaS Version",
            content: (
                <>
                    <p>Unlike most SaaS companies, LeaHub maintains an open source version that anyone can download and self-host for free. This commitment to open-source reflects our core values of accessibility and transparency.</p>
                    <p>We've chosen to eliminate our limited free SaaS tier because:</p>
                    <ul>
                        <li><strong>It creates confusion.</strong> Having both a free SaaS tier and an open-source version created an unnecessary decision point for users.</li>
                        <li><strong>It splits our focus.</strong> Maintaining feature limitations for free users diverted resources from improving the core product experience.</li>
                        <li><strong>It ensures sustainability.</strong> By focusing on paying customers who value our work, we can build a sustainable business that continues to improve the product for everyone.</li>
                    </ul>
                    <p>If you're seeking a free solution, our open-source version offers extensive functionality and is actively supported by our community. For those who want a hassle-free experience with all features included, our SaaS offering provides exceptional value.</p>
                </>
            )
        },
        {
            title: "Why One Plan Is Better Than Many",
            content: (
                <>
                    <p>Most project management tools offer complex pricing tiers that force you to predict your future needs and often withhold key features behind higher tiers. We think this approach is fundamentally broken, especially for neurodivergent users who may already struggle with decision paralysis.</p>
                    <p>Our single-plan approach means:</p>
                    <ul>
                        <li><strong>No cognitive overhead.</strong> You don't need to compare feature tables or worry about outgrowing your plan.</li>
                        <li><strong>No artificial limitations.</strong> We don't restrict essential features or create arbitrary limits on users, projects, or tasks.</li>
                        <li><strong>Equal access to innovation.</strong> Every customer gets access to our latest AI features, neurodivergent-friendly tools, and new capabilities as they're released.</li>
                    </ul>
                </>
            )
        },
        {
            title: "Why We Offer Annual Pricing",
            content: (
                <>
                    <p>We offer a 17% discount for annual billing because:</p>
                    <ul>
                        <li><strong>It helps us plan.</strong> Predictable revenue allows us to invest more confidently in product development more efficiently, and make long-term investments in the platform.</li>
                        <li><strong>It shows commitment.</strong> Users choosing billing means lower transaction for you and lower transaction costs for us.</li>
                        <li><strong>It shares our savings.</strong> Lower transaction billing means lower transaction costs, and we believe it's is at least fair that busy collaborators and supports different ways of thinking.</li>
                    </ul>
                </>
            )
        },
        {
            title: "Why We're Different From Other Project Management Tools",
            content: (
                <>
                    <p>Traditional project management tools were built for a neurotypical world. This leaves everyone processes information the same way and-but options for the working rhythm -like has number of tasks completed rather than meaningful progress goals.</p>
                    <p>LeaHub is built differently. Our philosophy is committed to reading a tool that works with your brain, not against it.</p>
                    <p>By supporting LeaHub with your subscription, you're not just getting a project management tool — you're investing in a more inclusive future of productivity that recognizes and celebrates cognitive diversity.</p>
                </>
            )
        },
        {
            title: "What is open source software?",
            content: (
                <>
                    <p>Open source software gives us the opportunity to share our code made with you and what you to get it up on your own servers.</p>
                    <p>If is a self (you) maintained platform. That gives you ownership of your data and the security of maintaining your own platform.</p>
                    <p>Our open source version operates under AGPLv3 licensing and requires code updates to be submitted back to the core code. We offer Enterprise licenses if you'd like to modify the code for company use.</p>
                </>
            )
        },
        {
            title: "What's included in the open source version of LeaHub?",
            content: (
                <>
                    <p>The open source version of LeaHub includes everything in our free plan.</p>
                    <p>We now also offer our additional features like Retinacy management, Class in Project Management, Whiteboards, Todos, Promotion & Content it goes to our Plugin Marketplace for the open source version available for download on github. Subscriber and more.</p>
                </>
            )
        },
        {
            title: "How long does it take to setup LeaHun?",
            content: (
                <>
                    <p>If you try out our cloud-hosted plans, we're have users get projects up and running in less than 10 minutes.</p>
                    <p>For our open source users, if you're experienced on the technical side, it typically takes than an hour to set up and testing.</p>
                </>
            )
        },
        {
            title: "I'm self hosted. Can I move to cloud-hosted?",
            content: (
                <>
                    <p>Yes! I'm a we email free, we can help you migrate over your data.</p>
                </>
            )
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.philosophySection}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.title}>Pricing Philosophy</h2>
                        <p className={styles.description}>
                            At LeaHub, we believe project management tools should be both powerful and accessible. After careful consideration and valuable feedback from our community, we've made the decision to simplify our pricing structure to a single, all-inclusive plan. Here's why:
                        </p>
                    </div>
                    <div className={styles.rightColumn}>
                        {accordionData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                title={item.title}
                                content={item.content}
                                isOpen={openIndex === index}
                                onClick={() => toggleAccordion(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPhilosophy;