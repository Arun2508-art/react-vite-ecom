import type { CartListProps } from '../store/slice/cart';
import type { ProductListProps } from '../store/slice/product';

export type SortOption = 'ascprice' | 'descprice' | 'normal';

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

export const handleSort = (
  option: SortOption,
  products: ProductListProps[],
  original: ProductListProps[]
): ProductListProps[] => {
  if (option === 'ascprice') {
    return [...products].sort((a, b) => a.price - b.price);
  }

  if (option === 'descprice') {
    return [...products].sort((a, b) => b.price - a.price);
  }

  return [...original];
};
