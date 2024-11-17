import * as request from '../utils/httpRequest';

export const getUserByUserName = async (userName) => {
    try {
        const res = await request.post(`User/${userName}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
