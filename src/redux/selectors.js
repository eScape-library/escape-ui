import { createSelector } from '@reduxjs/toolkit';

export const loginStatusSelector = (state) => state.auth.login.error;
export const registerStatusSelector = (state) => state.auth.register.success;
