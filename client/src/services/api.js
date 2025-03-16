// client/src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
const API_BASE_PATH = process.env.REACT_APP_API_BASE_PATH || '';

const apiClient = axios.create({
  baseURL: `${API_URL}${API_BASE_PATH}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const analyzeMessage = async (message) => {
  try {
    const response = await apiClient.post('/api/analyze', { message });
    return response.data;
  } catch (error) {
    console.error('Error analyzing message:', error);
    throw error;
  }
};

export const sendChatMessage = async (message, conversation) => {
  try {
    const response = await apiClient.post('/api/chat', { message, conversation });
    return response.data;
  } catch (error) {
    console.error('Error sending chat message:', error);
    throw error;
  }
};

export default apiClient;