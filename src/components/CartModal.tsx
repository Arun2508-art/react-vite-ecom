import { IconTrash, IconX } from '@tabler/icons-react';
import type { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeFromCart } from '../store/slice/cart';
import { getTotalPrice } from '../utils/helper';
import Button from './Button';

interface CardModalProps {
  hide: Dispatch<SetStateAction<boolean>>;
}

const CartModal = ({ hide }: CardModalProps) => {
  const dispatch = useAppDispatch();
  const { cartList } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleClose = () => {
    hide(false);
  };

  const handleRemove = (id: number, category: string) => {
    dispatch(removeFromCart({ id, category }));
  };

  const handleCheckout = () => {
    navigate('checkout');
    hide(false);
  };

  const handleCart = () => {
    navigate('cart');
    hide(false);
  };

  const totalPrice = getTotalPrice(cartList);

  return (
    <div className='w-max absolute top-12 right-0 p-4 rounded-md shadow-[0_3px_20px_rgb(0,0,0,0.2)] z-20 flex flex-col gap-6 bg-white'>
      <div
        className='fixed top-0 left-0 h-screen bg-black/50 right-[400px]'
        onClick={handleClose}
      ></div>
      <div className='fixed top-0 right-0 w-[400px] h-screen bg-white p-4 flex flex-col overflow-y-auto'>
        <div className='flex items-center justify-between mb-8'>
          <div className='text-xl font-semibold'>Shopping Cart</div>
          <button
            className='rounded-md hover:bg-red-500 p-2 hover:text-white cursor-pointer'
            onClick={handleClose}
          >
            <IconX width={16} height={16} stroke={1.5} />
          </button>
        </div>
        {cartList.length <= 0 ? (
          <div className='h-full flex items-center justify-center font-semibold text-xl'>
            Cart is Empty
          </div>
        ) : (
          cartList.map((item) => (
            <div className='flex flex-col gap-8 mb-4 group' key={item.id}>
              <div className='flex gap-8'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  width={72}
                  height={96}
                  className='object-cover rounded-md'
                />
                <div className='flex flex-col justify-between w-full'>
                  <div>
                    <div className='flex items-center justify-between gap-8'>
                      <h3 className='font-semibold'>{item.title}</h3>
                      <div className='p-1 font-semibold text-xl'>
                        ${item.price}
                      </div>
                    </div>
                    <div className='text-sm text-gray-500'>available</div>
                  </div>
                  <div className='flex items-center justify-between gap-8'>
                    <div className='text-gray-500'>Qty.2</div>
                    <div
                      className='hover:text-red-500 cursor-pointer hidden group-hover:block'
                      onClick={() => {
                        handleRemove(item.id, item.category);
                      }}
                    >
                      <IconTrash width={20} height={20} stroke={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
        <div
          className={`mt-auto pt-4 ${
            cartList.length <= 0 ? 'hidden' : 'block'
          }`}
        >
          <div className='flex justify-between items-center font-semibold'>
            <h3 className=''>Subtotal</h3>
            <div>$ {totalPrice}</div>
          </div>
          <p className='mt-2 mb-4 text-gray-500'>
            Shipping and taxes calculated at checkout.
          </p>
          <div className='flex justify-end gap-8 text-sm'>
            <Button variant='outline' onClick={handleCart}>
              View Cart
            </Button>
            <Button onClick={handleCheckout}>Check out</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
