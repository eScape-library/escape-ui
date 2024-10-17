import Category from '../pages/Category';
import ProductDetails from '../pages/ProductDetails';

// Use without login
export const publicRoutes = [
    { path: '/category', component: Category },
    { path: '/details', component: ProductDetails },
];

// Routes need to login to use
export const privateRoutes = [];
