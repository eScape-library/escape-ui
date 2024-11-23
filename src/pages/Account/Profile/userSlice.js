import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userServices from '../../../apiServices/userService';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isFetching: false,
        error: false,
        user: null,
        isUpdated: false,
    },
    reducers: {
        disableUser: (state) => {
            state.user = null;
        },
        setUpdated: (state, action) => {
            state.isUpdated = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isFetching = false;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state) => {
                state.isFetching = false;
                state.error = true;
            })
            .addCase(updateProfile.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(updateProfile.fulfilled, (state) => {
                state.isFetching = false;
                state.isUpdated = true;
            })
            .addCase(updateProfile.rejected, (state) => {
                state.isFetching = false;
                state.error = true;
                state.isUpdated = false;
            })
            .addCase(changePassword.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.isFetching = false;
                state.isUpdated = true;
            })
            .addCase(changePassword.rejected, (state) => {
                state.isFetching = false;
                state.error = true;
                state.isUpdated = false;
            });
    },
});

export const getUser = createAsyncThunk('account/getUser', async (userName) => {
    try {
        const user = await userServices.getUserByUserName(userName);
        return user;
    } catch (error) {
        throw error;
    }
});

export const updateProfile = createAsyncThunk('account/update', async (data, { dispatch, getState }) => {
    try {
        const oldUser = getState().user.user;
        const updateUser = { ...oldUser, ...data };
        await userServices.updateUser(updateUser);
        dispatch(getUser(updateUser.userName));
    } catch (error) {
        throw error;
    }
});

export const changePassword = createAsyncThunk('account/changePassword', async (data, { dispatch, getState }) => {
    try {
        const oldUser = getState().user.user;
        const updateUser = { ...oldUser, ...data };
        await userServices.changePassword(updateUser);
        dispatch(getUser(updateUser.userName));
    } catch (error) {
        throw error;
    }
});

export default userSlice;
