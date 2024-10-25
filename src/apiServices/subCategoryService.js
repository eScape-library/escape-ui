import * as request from '../utils/httpRequest';

export const getSubCategoryByCategoryID = async () => {
    try {
        const res = await request.get(`SubCategory`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
