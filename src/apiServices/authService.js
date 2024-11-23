import * as request from '../utils/httpRequest';

export const login = async (data) => {
    try {
        const res = await request.post(`auth/login`, data);
        localStorage.setItem('accessToken', res.data?.accessToken);
        localStorage.setItem('refreshToken', res.data?.refreshToken);
    } catch (err) {
        throw err;
    }
};

export const register = async (data) => {
    try {
        const res = await request.post(`auth/register`, data);
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const logout = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        await request.post(`auth/logout`, { token: refreshToken });
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
    } catch (err) {
        throw err;
    }
};
