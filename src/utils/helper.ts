export const getOriginalPrice = (
  price?: number,
  discountPercentage?: number
): number => {
  if (price === undefined || discountPercentage === undefined) return 0;
  return price / (1 - discountPercentage / 100);
};
