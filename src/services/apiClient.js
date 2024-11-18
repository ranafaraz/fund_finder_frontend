import axios from 'axios';

// Configure Axios instance
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:8080",
    headers: {
        'Content-Type': 'application/json',
    },
});

// Fetch grants data
export const getGrants = async () => {
    try {
        // First request to `/grants/`
        const response = await apiClient.get('/grants/');
        console.log("Initial API Response:", response.data);

        // Check if `grants` contains a URL
        if (response.data.grants && typeof response.data.grants === "string") {
            // Fetch data from the grants URL
            const secondaryResponse = await axios.get(response.data.grants);
            console.log("Secondary API Response:", secondaryResponse.data);
            return secondaryResponse.data; // Return the actual grants data
        }

        // If no secondary URL, return the response as-is
        return response.data;
    } catch (error) {
        console.error("Error fetching grants:", error);
        throw error;
    }
};

// Create a new grant
export const createGrant = async (grantData) => {
    try {
        const response = await apiClient.post('/grants/grants/', grantData);
        return response.data;
    } catch (error) {
        console.error("Error creating grant:", error);
        throw error;
    }
};

// Update an existing grant
export const updateGrant = async (id, grantData) => {
    try {
        const response = await apiClient.put(`/grants/grants/${id}/`, grantData);
        return response.data;
    } catch (error) {
        console.error("Error updating grant:", error);
        throw error;
    }
};

// Delete a grant
export const deleteGrant = async (id) => {
    try {
        await apiClient.delete(`/grants/grants/${id}/`);
    } catch (error) {
        console.error("Error deleting grant:", error);
        throw error;
    }
};


export default apiClient;
