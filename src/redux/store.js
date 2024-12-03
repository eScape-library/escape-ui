import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import filterSlice from '../components/Filter/filterSlice';
import paginationSlice from '../components/Pagination/paginationSlice';
import categorySlice from '../pages/Category/categorySlice';
import userSlice from '../pages/Account/Profile/userSlice';
import cartSlice from '../pages/Cart/cartSlice';
import searchSlice from '../pages/Search/searchSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        filter: filterSlice.reducer,
        pagination: paginationSlice.reducer,
        category: categorySlice.reducer,
        user: userSlice.reducer,
        cart: cartSlice.reducer,
        search: searchSlice.reducer,
    },
});

export default store;
