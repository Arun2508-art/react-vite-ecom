import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartListProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: number;
  stock: number;
  quantity: number;
}
interface CartProps {
  cartList: CartListProps[];
}

const initialState: CartProps = {
  cartList: []
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartListProps>) => {
      state.cartList.push({ ...payload, quantity: payload.quantity });
    },
    removeFromCart: (
      state,
      {
        payload: { id, category }
      }: PayloadAction<{ id: number; category: string }>
    ) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== id || item.category !== category
      );
    },
    updateQuantity: (
      state,
      { payload }: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.cartList.find((i) => i.id === payload.id);
      if (item) {
        item.quantity = payload.quantity;
      }
    },
    clearCart: (state) => {
      state.cartList = [];
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cart.actions;
export default cart.reducer;
