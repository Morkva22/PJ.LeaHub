const STORAGE_KEY = 'leahub_chat_conversations';

class ChatStorage {
    saveConversation(conversationId, messages, title) {
        const conversations = this.getAllConversations();
        const existingIndex = conversations.findIndex(c => c.id === conversationId);

        const conversationData = {
            id: conversationId,
            title: title || messages.find(m => m.role === 'user')?.content.slice(0, 50) || 'New Chat',
            messages: messages,
            updatedAt: new Date().toISOString(),
            createdAt: existingIndex >= 0 ? conversations[existingIndex].createdAt : new Date().toISOString()
        };

        if (existingIndex >= 0) {
            conversations[existingIndex] = conversationData;
        } else {
            conversations.unshift(conversationData);
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations.slice(0, 50)));
    }

    getConversation(conversationId) {
        const conversations = this.getAllConversations();
        return conversations.find(c => c.id === conversationId);
    }

    getAllConversations() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return [];

        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Failed to parse conversations:', e);
            return [];
        }
    }

    deleteConversation(conversationId) {
        const conversations = this.getAllConversations();
        const filtered = conversations.filter(c => c.id !== conversationId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }

    clearAll() {
        localStorage.removeItem(STORAGE_KEY);
    }
}

export default new ChatStorage();