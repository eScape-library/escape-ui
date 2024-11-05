import * as request from '../utils/httpRequest';

export const getProductDetailsById = async (id) => {
    try {
        const res = await request.get(`ProductDetails/${id}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
