import * as request from '../utils/httpRequest';

export const getCartItems = async (userId) => {
    try {
        const res = await request.get(`cart/${userId}`);
        return res.data;
    } catch (err) {
        throw err;
    }
};

export const addToCart = async (data) => {
    try {
        const res = await request.post(`cart/addToCart`, data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const updateCartItem = async (data) => {
    try {
        const res = await request.patch('cart', data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const removeCartItem = async (data) => {
    try {
        const res = await request.remove('cart', { data });
        return res.data;
    } catch (error) {
        throw error;
    }
};
