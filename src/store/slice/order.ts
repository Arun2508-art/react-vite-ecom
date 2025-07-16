import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface OrderListProps {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  quantity: number;
}
interface CartProps {
  orderList: OrderListProps[];
}

const initialState: CartProps = {
  orderList: []
};

export const order = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, { payload }: PayloadAction<OrderListProps[]>) => {
      state.orderList = payload;
    },
    clearOrder: (state) => {
      state.orderList = [];
    }
  }
});

export const { addToOrder, clearOrder } = order.actions;
export default order.reducer;
