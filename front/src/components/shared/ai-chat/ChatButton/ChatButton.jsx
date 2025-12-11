import { MessageSquare, Sparkles } from 'lucide-react';
import styles from './ChatButton.module.css';

export default function ChatButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className={styles.chatButton}
            aria-label="Open AI Chat"
        >
            <div className={styles.iconWrapper}>
                <MessageSquare className={styles.icon} />
                <Sparkles className={styles.sparkle} />
            </div>

            <div className={styles.tooltip}>
                Ask AI Assistant
                <div className={styles.tooltipArrow}></div>
            </div>
        </button>
    );
}