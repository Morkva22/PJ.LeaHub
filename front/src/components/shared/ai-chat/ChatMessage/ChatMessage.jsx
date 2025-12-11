import { User, Bot } from 'lucide-react';
import styles from './ChatMessage.module.css';

export default function ChatMessage({ message }) {
    const isBot = message.type === 'bot';

    return (
        <div className={`${styles.message} ${isBot ? styles.bot : styles.user}`}>
            <div className={styles.avatar}>
                {isBot ? (
                    <Bot className={styles.icon} />
                ) : (
                    <User className={styles.icon} />
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.bubble}>
                    <p className={styles.text}>{message.text}</p>
                </div>
                <span className={styles.timestamp}>
                    {message.timestamp.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                    })}
                </span>
            </div>
        </div>
    );
}