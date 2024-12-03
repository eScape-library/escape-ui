import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as searchProductsService from '../../apiServices/searchProductsService';

const searchSlice = createSlice({
    name: 'search',
    initialState: { status: 'idle', collection: {}, orderBy: '', productName: '', history: [] },
    reducers: {
        setOrderBy: (state, action) => {
            state.orderBy = action.payload;
        },
        setProductName: (state, action) => {
            state.productName = action.payload;
        },
        addToHistory: (state, action) => {
            state.history.push(action.payload);
        },
        removeAllHistory: (state) => {
            state.history = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchProducts.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.status = 'success';
                state.collection = action.payload;
            })
            .addCase(searchProducts.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const searchProducts = createAsyncThunk('searchProducts', async (paging) => {
    const products = await searchProductsService.searchProducts(paging);
    return products;
});

export default searchSlice;
