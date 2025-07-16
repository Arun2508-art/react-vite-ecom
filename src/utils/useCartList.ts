import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, removeFromCart } from '../store/slice/cart';
import type { ProductListProps } from '../store/slice/product';

export const useCartList = () => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cart.cartList);

  const handleCart = (item: ProductListProps, quantity: number) => {
    const exists = cartList.some(
      (val) => val.id === item.id && val.category === item.category
    );

    if (exists) {
      dispatch(removeFromCart({ id: item.id, category: item.category }));
      toast.info('Item removed from cart');
      return;
    }

    dispatch(addToCart({ ...item, quantity }));
    toast.success('Item added successfully');
  };

  return { handleCart };
};
