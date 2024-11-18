import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:8080", // Backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getGrants = async () => {
    const response = await apiClient.get('/grants/');
    return response.data;
};

export const createGrant = async (grant) => {
    const response = await apiClient.post('/grants/', grant);
    return response.data;
};

export const updateGrant = async (id, grant) => {
    const response = await apiClient.put(`/grants/${id}/`, grant);
    return response.data;
};

export const deleteGrant = async (id) => {
    const response = await apiClient.delete(`/grants/${id}/`);
    return response.data;
};
