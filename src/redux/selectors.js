import { createSelector } from '@reduxjs/toolkit';

export const loginStatusSelector = (state) => state.auth.login.error;
export const registerStatusSelector = (state) => state.auth.register.success;
export const pageActiveSelector = (state) => state.pagination;
export const filterSelector = (state) => state.filter;
export const subCategoryIdSelector = (state) => state.category.subCategoryId;
export const collectionNameSelector = (state) => state.category.collectionName;
export const orderBySelector = (state) => state.category.orderBy;
export const collectionSelector = (state) => state.category.collection;