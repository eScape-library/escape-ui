import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authService from '../apiServices/authService';
import userSlice, { getUser } from '../pages/Account/Profile/userSlice';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            isFetching: false, //Loading
            error: false,
        },
        register: {
            isFetching: false, //Loading
            error: false,
            success: false,
        },
        logout: {
            isFetching: false, //Loading
            error: false,
        },
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.login.isFetching = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.login.isFetching = false;
            })
            .addCase(login.rejected, (state) => {
                state.login.isFetching = false;
                state.login.error = true;
            })
            .addCase(logout.pending, (state) => {
                state.logout.isFetching = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.logout.isFetching = false;
                state.register.success = false;
            })
            .addCase(logout.rejected, (state) => {
                state.logout.isFetching = false;
                state.logout.error = true;
            })
            .addCase(register.pending, (state) => {
                state.register.isFetching = true;
            })
            .addCase(register.fulfilled, (state) => {
                state.register.isFetching = false;
                state.register.success = true;
            })
            .addCase(register.rejected, (state) => {
                state.register.isFetching = false;
                state.register.error = true;
            });
    },
});

export const login = createAsyncThunk('auth/login', async ({ values, navigate }, { dispatch }) => {
    try {
        await authService.login(values);
        dispatch(getUser(values?.username));
        navigate('/');
    } catch (error) {
        console.log(error);
        throw error;
    }
});

export const logout = createAsyncThunk('auth/logout', async ({ navigate }, { dispatch }) => {
    try {
        await authService.logout();
        dispatch(userSlice.actions.disableUser());
        navigate('/login');
    } catch (error) {
        throw error;
    }
});

export const register = createAsyncThunk('auth/register', async ({ user, navigate }) => {
    try {
        await authService.register(user);
        navigate('/login');
    } catch (error) {
        throw error;
    }
});

export default authSlice;
