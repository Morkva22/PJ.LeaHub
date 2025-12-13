import { MessageSquare, Trash2, Clock } from 'lucide-react';
import styles from './ChatHistory.module.css';

export default function ChatHistory({ conversations, onSelectChat, onDeleteChat, currentConversationId }) {
    const handleDelete = (e, conversationId) => {
        e.stopPropagation();
        const confirmed = window.confirm('Are you sure you want to delete this conversation?');
        if (confirmed) {
            onDeleteChat(conversationId);
        }
    };

    const formatTimestamp = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now - date;
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (hours < 1) return 'Just now';
        if (hours < 24) return `${hours}h ago`;
        if (days < 7) return `${days}d ago`;
        return date.toLocaleDateString();
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Clock className={styles.headerIcon} />
                <span className={styles.headerText}>Recent Conversations</span>
            </div>

            <div className={styles.list}>
                {conversations.map((chat) => (
                    <div
                        key={chat.id}
                        className={`${styles.chatItem} ${currentConversationId === chat.id ? styles.active : ''}`}
                        onClick={() => onSelectChat(chat)}
                    >
                        <div className={styles.chatHeader}>
                            <div className={styles.chatTitle}>
                                <MessageSquare className={styles.titleIcon} />
                                <h4 className={styles.title}>{chat.title}</h4>
                            </div>
                            <button
                                onClick={(e) => handleDelete(e, chat.id)}
                                className={styles.deleteButton}
                                title="Delete conversation"
                            >
                                <Trash2 className={styles.deleteIcon} />
                            </button>
                        </div>

                        <p className={styles.preview}>{chat.lastMessage}</p>

                        <span className={styles.timestamp}>
                            {formatTimestamp(chat.updatedAt)}
                        </span>
                    </div>
                ))}
            </div>

            {conversations.length === 0 && (
                <div className={styles.empty}>
                    <MessageSquare className={styles.emptyIcon} />
                    <p className={styles.emptyText}>No conversation history</p>
                </div>
            )}
        </div>
    );
}