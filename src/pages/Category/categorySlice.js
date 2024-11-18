import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as collectionService from '../../apiServices/collectionService';

const categorySlice = createSlice({
    name: 'category',
    initialState: { status: 'idle', collection: {}, subCategoryId: 1, collectionName: '', orderBy: '' },
    reducers: {
        setSubCatId: (state, action) => {
            state.subCategoryId = action.payload;
        },
        setOrderBy: (state, action) => {
            state.orderBy = action.payload;
        },
        setCollectionName: (state, action) => {
            state.collectionName = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCollection.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getCollection.fulfilled, (state, action) => {
                state.status = 'success';
                state.collection = action.payload;
            })
            .addCase(getCollection.rejected, (state, action) => {
                state.status = 'rejected';
            });
    },
});

export const getCollection = createAsyncThunk('collection', async ({ subCategoryId, paging }) => {
    const products = await collectionService.getCollection(subCategoryId, paging);
    return products;
});

export default categorySlice;
