import { useState, useEffect, useRef } from 'react';
import { X, Send, Plus, Clock, Sparkles, Smile, Paperclip, Mic } from 'lucide-react';
import apiService from '../../../../lib/api/apiService';
import ChatMessage from '../ChatMessage/ChatMessage';
import QuickPrompts from '../QuickPromts/QuickPrompts';
import ChatHistory from '../ChatHistory/ChatHistory';
import EmojiPicker from '../EmojiPicker/EmojiPicker';
import styles from './ChatPanel.module.css';

export default function ChatPanel({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
        {
            id: '1',
            type: 'bot',
            text: 'Hello! How can I help you?',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [showHistory, setShowHistory] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [currentConversationId, setCurrentConversationId] = useState(null);
    const [conversations, setConversations] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const messagesEndRef = useRef(null);
    const fileInputRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const loadConversations = async () => {
        try {
            const convos = await apiService.getConversations();
            setConversations(convos);
        } catch (error) {
            console.error('Failed to load conversations:', error);
        }
    };

    const handleSend = async () => {
        if ((!input.trim() && selectedFiles.length === 0) || isLoading) return;

        const userMessage = {
            id: Date.now().toString(),
            type: 'user',
            text: input || '[Files attached]',
            timestamp: new Date(),
            attachments: selectedFiles.map(f => ({ name: f.name, type: 'file' }))
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        const filesToSend = [...selectedFiles];
        setSelectedFiles([]);
        setIsLoading(true);

        try {
            const response = filesToSend.length > 0
                ? await apiService.sendMessageWithFiles(input, currentConversationId, filesToSend)
                : await apiService.sendMessage(input, currentConversationId);

            if (!currentConversationId && response.conversationId) {
                setCurrentConversationId(response.conversationId);
            }

            const botMessage = {
                id: response.messageId,
                type: 'bot',
                text: response.content,
                timestamp: new Date(response.createdAt)
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Failed to send message:', error);

            const errorMessage = {
                id: Date.now().toString(),
                type: 'bot',
                text: 'Sorry, I encountered an error. Please try again.',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleQuickPrompt = (prompt) => {
        setInput(prompt);
    };

    const handleNewChat = () => {
        setMessages([
            {
                id: Date.now().toString(),
                type: 'bot',
                text: 'Hello! How can I help you?',
                timestamp: new Date()
            }
        ]);
        setCurrentConversationId(null);
        setShowHistory(false);
        setSelectedFiles([]);
    };

    const handleSelectChat = async (conversation) => {
        try {
            const details = await apiService.getConversationDetails(conversation.id);

            const formattedMessages = details.messages.map(msg => ({
                id: msg.id,
                type: msg.role === 'user' ? 'user' : 'bot',
                text: msg.content,
                timestamp: new Date(msg.createdAt),
                attachments: msg.attachments
            }));

            setMessages(formattedMessages);
            setCurrentConversationId(conversation.id);
            setShowHistory(false);
        } catch (error) {
            console.error('Failed to load conversation:', error);
        }
    };

    const handleDeleteChat = async (conversationId) => {
        try {
            await apiService.deleteConversation(conversationId);
            await loadConversations();

            if (currentConversationId === conversationId) {
                handleNewChat();
            }
        } catch (error) {
            console.error('Failed to delete conversation:', error);
        }
    };

    const toggleHistory = async () => {
        if (!showHistory) {
            await loadConversations();
        }
        setShowHistory(!showHistory);
    };

    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files || []);
        setSelectedFiles(prev => [...prev, ...files]);
    };

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const removeFile = (index) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleEmojiSelect = (emoji) => {
        setInput(prev => prev + emoji);
    };

    const handleEmojiClick = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const audioFile = new File([audioBlob], `voice-${Date.now()}.webm`, { type: 'audio/webm' });
                setSelectedFiles(prev => [...prev, audioFile]);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error('Failed to start recording:', error);
            alert('Microphone access denied. Please enable it in your browser settings.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const handleVoiceClick = () => {
        if (isRecording) {
            stopRecording();
        } else {
            startRecording();
        }
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
                    onClick={toggleHistory}
                    className={`${styles.historyButton} ${showHistory ? styles.active : ''}`}
                >
                    <Clock className={styles.buttonIcon} />
                    History
                </button>
            </div>

            {showHistory ? (
                <ChatHistory
                    conversations={conversations}
                    onSelectChat={handleSelectChat}
                    onDeleteChat={handleDeleteChat}
                    currentConversationId={currentConversationId}
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
                        {isLoading && (
                            <div className={styles.loadingMessage}>
                                <div className={styles.loadingDots}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.inputContainer}>
                        {selectedFiles.length > 0 && (
                            <div className={styles.filesPreview}>
                                {selectedFiles.map((file, index) => (
                                    <div key={index} className={styles.fileChip}>
                                        <Paperclip className={styles.fileIcon} size={14} />
                                        <span className={styles.fileName}>{file.name}</span>
                                        <button
                                            onClick={() => removeFile(index)}
                                            className={styles.removeFileButton}
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className={styles.inputWrapper}>
                            <div className={styles.inputActions}>
                                <div style={{ position: 'relative' }}>
                                    <button
                                        onClick={handleEmojiClick}
                                        className={styles.actionButton}
                                        title="Add emoji"
                                    >
                                        <Smile className={styles.actionIcon} />
                                    </button>
                                    {showEmojiPicker && (
                                        <EmojiPicker
                                            onSelect={handleEmojiSelect}
                                            onClose={() => setShowEmojiPicker(false)}
                                        />
                                    )}
                                </div>
                                <button
                                    onClick={handleFileClick}
                                    className={styles.actionButton}
                                    title="Attach file"
                                >
                                    <Paperclip className={styles.actionIcon} />
                                </button>
                                <button
                                    onClick={handleVoiceClick}
                                    className={`${styles.actionButton} ${isRecording ? styles.recording : ''}`}
                                    title={isRecording ? "Stop recording" : "Voice message"}
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
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSend}
                                disabled={(!input.trim() && selectedFiles.length === 0) || isLoading}
                                className={styles.sendButton}
                            >
                                <Send className={styles.sendIcon} />
                            </button>
                        </div>
                        <p className={styles.disclaimer}>
                            AI responses are generated and may not be accurate
                        </p>
                    </div>

                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        style={{ display: 'none' }}
                        onChange={handleFileSelect}
                        accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"
                    />
                </>
            )}
        </div>
    );
}