import axios from 'axios';

const token = localStorage.getItem('accessToken');

// Cấu hình Axios để tự động thêm header Authorization cho tất cả request
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const request = axios.create({
    baseURL: 'https://localhost:7287/api/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response;
};

export const post = async (path, data) => {
    const response = await request.post(path, data);
    return response;
};

export default request;
