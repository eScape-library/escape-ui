import * as request from '../utils/httpRequest';

export const getCollection = async (subCategoryId) => {
    try {
        const res = await request.get(`ProductDetails/${subCategoryId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
