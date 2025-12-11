import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQSection.module.css';

const faqs = [
    {
        id: 1,
        question: 'Why would I use Leantime instead of other systems like Jira, Asana, ClickUp or Monday?',
        answer: 'We have many of the same features and more — but more importantly, we are the only project management system focused on cognitive accessibility and it\'s our mission to create a tool rooted in the science that supports neurodivergent minds, like those with ADHD, Autism and dyslexia.\n\nEven if you aren\'t neurodivergent, Leantime is built for easier work management. The science benefits productivity across all brain types.\n\nThe other thing? We still believe in human touch. When you reach out to Leantime for support, you\'re connecting directly with us, the founders. We exist to see you be successful and to change the meaning of productivity.'
    },
    {
        id: 2,
        question: 'What features are in the Open Source version vs the Cloud Hosted version?',
        answer: 'Our open source version has most of the features that you see in the Think and Make section and includes the My Work Dashboard. Features are clearly marked as premium in the open source version for additional clarity.'
    },
    {
        id: 3,
        question: 'Do you offer discounts?',
        answer: 'We are a small and bootstrapped company. This enables us to keep our costs very low compared to other tools in the market. Because of this, we do not directly offer discounts.\n\nIf, however, you are planning to use Leantime to find a job or are experiencing financial hardship, please send us an email at support@leantime.io. We\'ve been there and if the system can help you get to the next chapter in your life, we want to help where we can.'
    },
    {
        id: 4,
        question: 'What is open source software?',
        answer: 'Open source software is a platform where the core code is accessible for developers or people who want to install the system.\n\nIt allows you to own your own data. In a world where so much has become uncertain, being open source gives you the benefit of self-hosting and keeping your data a different level of privacy.'
    },
    {
        id: 5,
        question: 'Can I self-install the open source project management system without software development experience?',
        answer: 'We recommend having some experience with these types of installations before venturing on this path.\n\nWe do offer hosted plans and on premise installation plans as well.\n\nCheck out our pricing page to learn more.'
    },
    {
        id: 6,
        question: 'If I\'m self-hosting, can I move to hosted?',
        answer: 'Currently, you aren\'t able to do that on your own but we\'re happy to help migrate you to a cloud plan.\n\nIf you want to move from the hosted plan to a self hosting environment, we can help you migrate for a small fee. It\'s a nominal fee to help cover the time spent in transferring the data.\n\nReach out through the contact form or connect with us over Discord and we can help map that out.'
    }
];

const FAQSection = () => {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>

                <div className={styles.faqList}>
                    {faqs.map(faq => (
                        <div key={faq.id} className={styles.faqItem}>
                            <button
                                className={`${styles.question} ${openId === faq.id ? styles.active : ''}`}
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`${styles.icon} ${openId === faq.id ? styles.rotate : ''}`}
                                />
                            </button>

                            <div className={`${styles.answer} ${openId === faq.id ? styles.open : ''}`}>
                                <div className={styles.answerContent}>
                                    {faq.answer.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;