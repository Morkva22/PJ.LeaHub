const API_BASE_URL = 'https://localhost:44378/api';

class ApiService {
    constructor() {
        this.baseUrl = API_BASE_URL;
    }

    async request(endpoint, options = {}) {
        const token = localStorage.getItem('accessToken');

        const config = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
                ...options.headers,
            },
        };

        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, config);

            if (!response.ok) {
                const error = await response.json().catch(() => ({ error: 'Request failed' }));
                throw new Error(error.error || `HTTP error ${response.status}`);
            }



            return await response.json();
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }


    async sendMessage(content, conversationId = null) {
        console.log(' Sending message:', { content, conversationId });

        return this.request('/chat/message', {
            method: 'POST',
            body: JSON.stringify({
                content: content,
                conversationId: conversationId
            })
        });
    }


    async sendMessageWithFiles(content, conversationId = null, files = []) {
        console.log('📎 Sending message with files:', { content, conversationId, filesCount: files.length });

        const formData = new FormData();
        formData.append('content', content || '');

        if (conversationId) {
            formData.append('conversationId', conversationId);
        }

        files.forEach((file) => {
            formData.append('files', file);
        });

        const token = localStorage.getItem('accessToken');

        const response = await fetch(`${this.baseUrl}/chat/message-with-files`, {
            method: 'POST',
            headers: {
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
            body: formData
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ error: 'Request failed' }));
            throw new Error(error.error || `HTTP error ${response.status}`);
        }

        return await response.json();
    }

    async getConversations() {
        console.log('Fetching conversations...');
        return this.request('/chat/conversations', { method: 'GET' });
    }

    async getConversationDetails(conversationId) {
        console.log('Fetching conversation details:', conversationId);
        return this.request(`/chat/conversations/${conversationId}`, { method: 'GET' });
    }

    async deleteConversation(conversationId) {
        console.log('🗑Deleting conversation:', conversationId);
        return this.request(`/chat/conversations/${conversationId}`, { method: 'DELETE' });
    }

    async getPopularActions() {
        console.log('Fetching popular actions...');
        return this.request('/chat/popular-actions', { method: 'GET' });
    }
}

export default new ApiService();