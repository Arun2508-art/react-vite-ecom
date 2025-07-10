import { configureStore } from '@reduxjs/toolkit';
import cart from './slice/cart';
import productReducer from './slice/product';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
