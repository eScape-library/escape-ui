import Category from '../pages/Category';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';

// Use without login
export const publicRoutes = [
    { path: '/category', component: Category },
    { path: '/details', component: ProductDetails },
    { path: '/cart', component: Cart },
];

// Routes need to login to use
export const privateRoutes = [];
