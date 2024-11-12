import * as request from '../utils/httpRequest';

export const login = async (data) => {
    try {
        const res = await request.post(`user/login`, data);
        localStorage.setItem('accessToken', res.data?.accessToken);
        localStorage.setItem('refreshToken', res.data?.refreshToken);
    } catch (err) {
        console.log(err);
    }
};

export const register = async (data) => {
    try {
        const res = await request.post(`user/register`, data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const logout = async () => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        await request.post(`user/logout`, { token: refreshToken });
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
    } catch (err) {
        console.log(err);
    }
};
