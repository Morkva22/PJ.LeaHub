import { User, Bot, Paperclip } from 'lucide-react';
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

                    {message.attachments && message.attachments.length > 0 && (
                        <div className={styles.attachments}>
                            {message.attachments.map((attachment, index) => (
                                <div key={index} className={styles.attachment}>
                                    <Paperclip size={14} className={styles.attachmentIcon} />
                                    <span className={styles.attachmentName}>{attachment.name}</span>
                                    {attachment.url && (
                                        <a
                                            href={`https://localhost:44378${attachment.url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.attachmentLink}
                                        >
                                            View
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
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