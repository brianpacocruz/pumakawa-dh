import axios from 'axios';

const API_URL = '/api/reportes';

// 1. Create (POST)
export const createReporte = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data.data;
};

// 2. Read All (GET)
export const getReportes = async () => {
    const response = await axios.get(API_URL);
    return response.data.data;
};

// 3. Read One (GET)
export const getReporteById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
};

// 4. Update (PUT)
export const updateReporte = async (id, data) => {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data.data;
};

// 5. Delete (DELETE)
export const deleteReporte = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data.data;
};
