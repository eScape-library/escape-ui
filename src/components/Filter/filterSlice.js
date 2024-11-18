import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: { color: [], size: [], price: '' },
    reducers: {
        addColorFilter: (state, action) => {
            state.color.push(action.payload);
        },
        removeColorFilter: (state, action) => {
            state.color = state.color.filter((item) => item !== action.payload);
        },
        addSizeFilter: (state, action) => {
            state.size.push(action.payload);
        },
        removeSizeFilter: (state, action) => {
            state.size = state.size.filter((item) => item !== action.payload);
        },
        updatePriceFilter: (state, action) => {
            state.price = action.payload;
        },
        resetFilter: (state) => {
            state.color = [];
            state.size = [];
            state.price = '';
        },
    },
});

export default filterSlice;
