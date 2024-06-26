import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import authReducer from '../features/Auth/authSlice';
import cartReducer from '../features/Cart/cartSlice';
import orderReducer from '../features/order/orderSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
