import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as cartService from '../../apiServices/cartService';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        total: 0,
        status: 'idle',
        error: null,
        selectedItem: {
            items: [],
            totalPrice: 0,
        },
    },
    reducers: {
        setDefaultCart: (state) => {
            state.cartItems = [];
            state.total = 0;
        },
        addToSelectedItem: (state, action) => {
            var payload = JSON.parse(action.payload);
            state.selectedItem.items.push(payload);
            state.selectedItem.totalPrice += calcPrice(payload.price, payload.quantity);
        },
        removeSelectedItem: (state, action) => {
            var payload = JSON.parse(action.payload);
            state.selectedItem.items = state.selectedItem.items.filter((item) => item.cartId !== payload.cartId);
            state.selectedItem.totalPrice -= calcPrice(payload.price, payload.quantity);
        },
        addAllToSelectedItem: (state) => {
            state.selectedItem.items = state.cartItems;
            state.selectedItem.totalPrice = 0;
            state.cartItems.map((item) => (state.selectedItem.totalPrice += calcPrice(item.price, item.quantity)));
        },
        removeAllSelectedItem: (state) => {
            state.selectedItem.items = [];
            state.selectedItem.totalPrice = 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCartItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllCartItems.fulfilled, (state, action) => {
                state.status = 'success';
                state.cartItems = action.payload.items;
                state.total = action.payload.total;
            })
            .addCase(getAllCartItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addToCart.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addToCart.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateCartItem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCartItem.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(updateCartItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(removeCartItem.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeCartItem.fulfilled, (state) => {
                state.status = 'success';
            })
            .addCase(removeCartItem.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const getAllCartItems = createAsyncThunk('cart/getAll', async (_, { getState }) => {
    const userId = getState().user.user.userId;
    var cartItems = await cartService.getCartItems(userId);
    return cartItems;
});

export const addToCart = createAsyncThunk('cart/add', async (cartItem, { dispatch }) => {
    await cartService.addToCart(cartItem);
    dispatch(getAllCartItems());
});

export const updateCartItem = createAsyncThunk('cart/update', async (cartItem, { dispatch }) => {
    await cartService.updateCartItem(cartItem);
    dispatch(getAllCartItems());
});

export const removeCartItem = createAsyncThunk('cart/remove', async (cartItem, { dispatch }) => {
    await cartService.removeCartItem(cartItem);
    dispatch(getAllCartItems());
});

const calcPrice = (price, quantity) => {
    const number = Number(price?.replace(/,/g, ''));
    return number * quantity;
};

export default cartSlice;
