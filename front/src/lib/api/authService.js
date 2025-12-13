import { apiClient } from './client';

export const authService = {
    async register(email, password, firstName, lastName) {
        const response = await apiClient.post('/auth/register', {
            email,
            password,
            firstName,
            lastName,
        });

        if (response.success && response.data) {
            this.saveTokens(response.data);
        }

        return response;
    },

    async login(email, password) {
        const response = await apiClient.post('/auth/login', {
            email,
            password,
        });

        if (response.success && response.data) {
            this.saveTokens(response.data);
        }

        return response;
    },

    async forgotPassword(email) {
        return apiClient.post('/auth/forgot-password', { email });
    },

    async resetPassword(token, password) {
        return apiClient.post('/auth/reset-password', {
            token,
            password,
        });
    },

    async refreshToken() {
        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
            throw new Error('No refresh token available');
        }

        const response = await apiClient.post('/auth/refresh', {
            refreshToken,
        });

        if (response.success && response.data) {
            this.saveTokens(response.data);
        }

        return response;
    },

    async getUser() {
        const response = await apiClient.get('/auth/user');

        if (response.success && response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        }

        return null;
    },

    async logout() {
        try {
            await apiClient.post('/auth/logout');
        } finally {
            this.clearAuth();
        }
    },

    saveTokens(data) {
        if (data.access_token) {
            localStorage.setItem('accessToken', data.access_token);
        }
        if (data.refresh_token) {
            localStorage.setItem('refreshToken', data.refresh_token);
        }
        if (data.user) {
            localStorage.setItem('user', JSON.stringify(data.user));
        }
    },

    clearAuth() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
    },

    getStoredUser() {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    isAuthenticated() {
        return !!localStorage.getItem('accessToken');
    },
};