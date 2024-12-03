import * as request from '../utils/httpRequest';

export const searchProducts = async (data) => {
    try {
        const res = await request.post('search', data);
        return res.data;
    } catch (err) {
        throw err;
    }
};
