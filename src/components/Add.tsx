import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import type { ProductListProps } from '../store/slice/product';
import { useCartList } from '../utils/useCartList';

const Add = ({ product }: { product: ProductListProps | null }) => {
  const [quantity, setQuantity] = useState(1);
  const { handleCart } = useCartList();
  const { cartList } = useAppSelector((state) => state.cart);

  const stock = product?.stock ?? 4;

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === 'i' && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!product) return;

    const existingItem = cartList.find((item) => item.id === product.id);

    if (existingItem) {
      setQuantity(existingItem.quantity);
    } else {
      setQuantity(1);
    }
  }, [product, cartList]);

  return (
    <div className='flex flex-col gap-3 mb-3'>
      <h4 className='font-medium text-xl'>Choose a Quantity</h4>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <div className='bg-gray-100 py-1 px-4 rounded-md border border-gray-200 flex items-center justify-between w-32'>
            <button
              className='cursor-pointer text-xl text-blue-500 disabled:cursor-not-allowed disabled:opacity-20'
              onClick={() => handleQuantity('d')}
              disabled={quantity === 1}
            >
              -
            </button>
            <span className='px-3 py-1 bg-white rounded-md'>{quantity}</span>
            <button
              className='cursor-pointer text-xl text-blue-500 disabled:cursor-not-allowed disabled:opacity-20'
              onClick={() => handleQuantity('i')}
              disabled={quantity === stock}
            >
              +
            </button>
          </div>
          {stock < 1 ? (
            <div className='text-xs'>Product is out of stock</div>
          ) : (
            <div className='text-xs'>
              Only{' '}
              <span className='text-blue-500 font-bold'>{stock} items</span>{' '}
              left!
              {stock <= 5 && (
                <>
                  <br /> {"Don't"} miss it
                </>
              )}
            </div>
          )}
        </div>
        <button
          className={`rounded-md px-4 py-2 text-white ${
            cartList.some((item) => item.id === product?.id)
              ? 'bg-red-500 hover:bg-red-700'
              : 'bg-black hover:bg-gray-700 '
          }`}
          onClick={() => product && handleCart(product, quantity)}
        >
          {cartList.find((item) => item.id === product?.id)
            ? 'Remove from Cart'
            : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default Add;
