import * as request from '../utils/httpRequest';

export const getUserByUserName = async (userName) => {
    try {
        const res = await request.get(`user/${userName}`);
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const updateUser = async (data) => {
    try {
        const res = await request.patch(`user/update`, data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const changePassword = async (data) => {
    try {
        const res = await request.patch(`user/change-password`, data);
        return res.data;
    } catch (error) {
        throw error;
    }
};
