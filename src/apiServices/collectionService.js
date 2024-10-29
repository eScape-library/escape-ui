import * as request from '../utils/httpRequest';

export const getCollection = async (subCategoryId, data) => {
    try {
        const res = await request.post(`collection/${subCategoryId}`, data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
