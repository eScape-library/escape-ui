import { createSelector } from '@reduxjs/toolkit';

export const userSelector = (state) => state.user.user;
export const isUpdatedSelector = (state) => state.user.isUpdated;
export const loginStatusSelector = (state) => state.auth.login.error;
export const registerStatusSelector = (state) => state.auth.register.success;
export const pageActiveSelector = (state) => state.pagination;
export const filterSelector = (state) => state.filter;
export const subCategoryIdSelector = (state) => state.category.subCategoryId;
export const collectionNameSelector = (state) => state.category.collectionName;
export const orderBySelector = (state) => state.category.orderBy;
export const collectionSelector = (state) => state.category.collection;
export const cartItemsSelector = (state) => state.cart.cartItems;
export const cartTotalSelector = (state) => state.cart.total;
export const selectedItemSelector = (state) => state.cart.selectedItem.items;
export const totalPriceSelector = (state) => state.cart.selectedItem.totalPrice;
