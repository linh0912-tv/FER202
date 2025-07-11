// API configuration
const API_BASE_URL = "http://localhost:3002";

export const API_ENDPOINTS = {
  POSTS: `${API_BASE_URL}/posts`,
  USERS: `${API_BASE_URL}/users`,
  POST_BY_ID: (id) => `${API_BASE_URL}/posts/${id}`
};

export default API_BASE_URL;
