import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartListProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  rating: number;
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
      state.cartList.push(payload);
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
    }
  }
});

export const { addToCart, removeFromCart } = cart.actions;
export default cart.reducer;
