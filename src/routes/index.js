import Category from '../pages/Category';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Account from '../pages/Account';

// Use without login
export const publicRoutes = [
    { path: '/collections/:subCategoryId', component: Category },
    { path: '/details/:productDetailsId', component: ProductDetails },
    { path: '/cart', component: Cart },
    { path: '/account', component: Account },
];

// Routes need to login to use
export const privateRoutes = [];
