import type { CartListProps } from '../store/slice/cart';

export const getOriginalPrice = (
  price?: number,
  discountPercentage?: number
): number => {
  if (price === undefined || discountPercentage === undefined) return 0;
  return price / (1 - discountPercentage / 100);
};

export const getTotalPrice = (cartList: CartListProps[]): string => {
  const totalValue = cartList
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);
  return totalValue;
};
