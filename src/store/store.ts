import { configureStore } from '@reduxjs/toolkit';
import cart from './slice/cart';
import order from './slice/order';
import productReducer from './slice/product';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart,
    order
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
