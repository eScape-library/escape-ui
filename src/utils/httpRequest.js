import axios from 'axios';

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
