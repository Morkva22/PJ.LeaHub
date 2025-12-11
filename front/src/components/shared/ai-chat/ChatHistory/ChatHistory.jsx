import { MessageSquare, Trash2, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './ChatHistory.module.css';

export default function ChatHistory({ onSelectChat, onDeleteChat }) {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        loadChats();
    }, []);

    const loadChats = () => {
        const savedChats = JSON.parse(localStorage.getItem('aiChats') || '[]');
        const parsedChats = savedChats.map(chat => {
            const firstUserMsg = chat.messages.find(m => m.type === 'user');
            const firstBotMsg = chat.messages.find(m => m.type === 'bot' && m.id !== 1);

            let preview = '';
            if (firstUserMsg) {
                preview = `You: ${firstUserMsg.text}`;
                if (firstBotMsg) {
                    preview += ` • AI: ${firstBotMsg.text.slice(0, 50)}...`;
                }
            }

            return {
                ...chat,
                preview: preview || chat.preview,
                timestamp: new Date(chat.timestamp),
                messages: chat.messages.map(msg => ({
                    ...msg,
                    timestamp: new Date(msg.timestamp)
                }))
            };
        });
        setChats(parsedChats);
    };

    const handleDelete = (e, chatId) => {
        e.stopPropagation();
        const confirmed = ('Are you sure you want to delete this conversation?');
        if (confirmed) {
            onDeleteChat(chatId);
            loadChats();
        }
    };

    const formatTimestamp = (date) => {
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
                {chats.map((chat) => (
                    <div
                        key={chat.id}
                        className={styles.chatItem}
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

                        <p className={styles.preview}>{chat.preview}</p>

                        <span className={styles.timestamp}>
                            {formatTimestamp(chat.timestamp)}
                        </span>
                    </div>
                ))}
            </div>

            {chats.length === 0 && (
                <div className={styles.empty}>
                    <MessageSquare className={styles.emptyIcon} />
                    <p className={styles.emptyText}>No conversation history</p>
                </div>
            )}
        </div>
    );
}