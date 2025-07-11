import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, removeFromCart } from '../store/slice/cart';
import type { ProductListProps } from '../store/slice/product';

export const useCartList = () => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cart.cartList);

  const handleCart = (item: ProductListProps) => {
    const isInCart = cartList.some(
      (val) => val.id === item.id && val.category === item.category
    );

    if (isInCart) {
      dispatch(removeFromCart({ id: item.id, category: item.category }));
    } else {
      dispatch(addToCart(item));
    }
  };

  return { handleCart };
};
