import Category from '../pages/Category';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Account from '../pages/Account';
import Login from '../pages/Login';
import Register from '../pages/Register';

// Use without login
export const publicRoutes = [
    { path: '/collections/:subCategoryId', component: Category },
    { path: '/details/:productDetailsId', component: ProductDetails },
    { path: '/cart', component: Cart },
    { path: '/account', component: Account },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
];

// Routes need to login to use
export const privateRoutes = [];
