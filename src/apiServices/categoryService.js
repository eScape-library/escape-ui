import * as request from '../utils/httpRequest';

export const getAllCategories = async () => {
    try {
        const res = await request.get(`Category`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
