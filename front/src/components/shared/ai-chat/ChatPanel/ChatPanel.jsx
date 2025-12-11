import { useState, useEffect, useRef } from 'react';
import { X, Send, Plus, Clock, Sparkles, Smile, Paperclip, Mic } from 'lucide-react';
import ChatMessage from '../ChatMessage/ChatMessage';
import QuickPrompts from '../QuickPromts/QuickPrompts';
import ChatHistory from '../ChatHistory/ChatHistory';
import styles from './ChatPanel.module.css';

export default function ChatPanel({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: 'Hello! How can I help you?',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [showHistory, setShowHistory] = useState(false);
    const [currentChatId, setCurrentChatId] = useState(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (messages.length > 1 && !currentChatId) {
            saveCurrentChat();
        }
    }, [messages]);

    const saveCurrentChat = () => {
        const chats = JSON.parse(localStorage.getItem('aiChats') || '[]');
        const firstUserMessage = messages.find(m => m.type === 'user');

        if (!firstUserMessage) return;

        const chatTitle = firstUserMessage.text.slice(0, 50);
        const chatId = currentChatId || Date.now();

        const existingChatIndex = chats.findIndex(c => c.id === chatId);

        const chatData = {
            id: chatId,
            title: chatTitle,
            preview: firstUserMessage.text,
            timestamp: new Date().toISOString(),
            messages: messages.map(msg => ({
                ...msg,
                timestamp: msg.timestamp.toISOString()
            }))
        };

        if (existingChatIndex >= 0) {
            chats[existingChatIndex] = chatData;
        } else {
            chats.unshift(chatData);
        }

        localStorage.setItem('aiChats', JSON.stringify(chats.slice(0, 20)));
        setCurrentChatId(chatId);
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage = {
            id: Date.now(),
            type: 'user',
            text: input,
            timestamp: new Date()
        };

        setMessages([...messages, newMessage]);
        setInput('');

        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                type: 'bot',
                text: 'This is a placeholder response. AI integration coming soon!',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    const handleQuickPrompt = (prompt) => {
        setInput(prompt);
    };

    const handleNewChat = () => {
        setMessages([
            {
                id: Date.now(),
                type: 'bot',
                text: 'Hello! How can I help you?',
                timestamp: new Date()
            }
        ]);
        setCurrentChatId(null);
        setShowHistory(false);
    };

    const handleSelectChat = (chat) => {
        setMessages(chat.messages);
        setCurrentChatId(chat.id);
        setShowHistory(false);
    };

    const handleDeleteChat = (chatId) => {
        const chats = JSON.parse(localStorage.getItem('aiChats') || '[]');
        const updatedChats = chats.filter(c => c.id !== chatId);
        localStorage.setItem('aiChats', JSON.stringify(updatedChats));

        if (currentChatId === chatId) {
            handleNewChat();
        }
    };

    const handleEmojiClick = () => {
        console.log('Emoji picker - coming soon');
    };

    const handleFileClick = () => {
        console.log('File upload - coming soon');
    };

    const handleVoiceClick = () => {
        console.log('Voice message - coming soon');
    };

    if (!isOpen) return null;

    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <Sparkles className={styles.headerIcon} />
                    <div>
                        <h2 className={styles.headerTitle}>AI Assistant</h2>
                        <p className={styles.headerSubtitle}>LeaHub Intelligence</p>
                    </div>
                </div>
                <button onClick={onClose} className={styles.closeButton}>
                    <X className={styles.closeIcon} />
                </button>
            </div>

            <div className={styles.toolbar}>
                <button onClick={handleNewChat} className={styles.newChatButton}>
                    <Plus className={styles.buttonIcon} />
                    New Chat
                </button>
                <button
                    onClick={() => setShowHistory(!showHistory)}
                    className={styles.historyButton}
                >
                    <Clock className={styles.buttonIcon} />
                    History
                </button>
            </div>

            {showHistory ? (
                <ChatHistory
                    onSelectChat={handleSelectChat}
                    onDeleteChat={handleDeleteChat}
                />
            ) : (
                <>
                    <div className={styles.messagesContainer}>
                        {messages.length === 1 && (
                            <QuickPrompts onSelect={handleQuickPrompt} />
                        )}
                        {messages.map((msg) => (
                            <ChatMessage key={msg.id} message={msg} />
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.inputContainer}>
                        <div className={styles.inputWrapper}>
                            <div className={styles.inputActions}>
                                <button
                                    onClick={handleEmojiClick}
                                    className={styles.actionButton}
                                    title="Add emoji"
                                >
                                    <Smile className={styles.actionIcon} />
                                </button>
                                <button
                                    onClick={handleFileClick}
                                    className={styles.actionButton}
                                    title="Attach file"
                                >
                                    <Paperclip className={styles.actionIcon} />
                                </button>
                                <button
                                    onClick={handleVoiceClick}
                                    className={styles.actionButton}
                                    title="Voice message"
                                >
                                    <Mic className={styles.actionIcon} />
                                </button>
                            </div>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask me anything..."
                                className={styles.input}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className={styles.sendButton}
                            >
                                <Send className={styles.sendIcon} />
                            </button>
                        </div>
                        <p className={styles.disclaimer}>
                            AI responses are generated and may not be accurate
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}