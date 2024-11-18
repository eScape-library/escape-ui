import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import filterSlice from '../components/Filter/filterSlice';
import paginationSlice from '../components/Pagination/paginationSlice';
import categorySlice from '../pages/Category/categorySlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        filter: filterSlice.reducer,
        pagination: paginationSlice.reducer,
        category: categorySlice.reducer,
    },
});

export default store;
