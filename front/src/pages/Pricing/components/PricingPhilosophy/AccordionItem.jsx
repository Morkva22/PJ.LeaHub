import React from 'react';
import { Plus } from 'lucide-react';
import styles from './AccordionItem.module.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={styles.accordionItem}>
            <button
                className={`${styles.accordionButton} ${isOpen ? styles.active : ''}`}
                onClick={onClick}
            >
                <span className={styles.accordionTitle}>{title}</span>
                <Plus
                    className={`${styles.accordionIcon} ${isOpen ? styles.rotated : ''}`}
                    size={20}
                />
            </button>
            <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
                <div className={styles.accordionInner}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;