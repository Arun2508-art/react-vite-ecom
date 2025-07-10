import { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import type { ProductListProps } from '../store/slice/product';
import { useCartList } from '../utils/useCartList';

const Add = ({ product }: { product: ProductListProps | null }) => {
  const [quantity, setQuantity] = useState(1);
  const { handleCart } = useCartList();
  const { cartList } = useAppSelector((state) => state.cart);

  // TEMPORARY
  const stock = product?.stock || 4;

  const handleQuantity = (type: 'i' | 'd') => {
    if (type === 'd' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === 'i' && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className='flex flex-col gap-3'>
      <h4 className='font-medium text-xl'>Choose a Quantity</h4>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <div className='bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32'>
            <button
              className='cursor-pointer text-xl text-red-500 disabled:cursor-not-allowed disabled:opacity-20'
              onClick={() => handleQuantity('d')}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className='cursor-pointer text-xl text-red-500 disabled:cursor-not-allowed disabled:opacity-20'
              onClick={() => handleQuantity('i')}
              //  disabled={quantity === stockNumber}
            >
              +
            </button>
          </div>
          {stock < 1 ? (
            <div className='text-xs'>Product is out of stock</div>
          ) : (
            <div className='text-xs'>
              Only <span className='text-red-500 font-bold'>{stock} items</span>{' '}
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
          className={`rounded-sm p-3 text-white hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none ${
            cartList.some((item) => item.id === product?.id)
              ? 'bg-red-500'
              : 'bg-black'
          }`}
          onClick={() => product && handleCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
