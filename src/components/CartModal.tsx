import { IconTrash, IconX } from '@tabler/icons-react';
import { useMemo, type Dispatch, type SetStateAction } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/slice/cart';
import { addToOrder } from '../store/slice/order';
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
    dispatch(addToOrder(cartList));
    navigate('checkout');
    hide(false);
  };

  const handleQuantity = (id: number, type: 'i' | 'd') => {
    const item = cartList.find((i) => i.id === id);
    if (!item) return;

    const currentQty = item.quantity;
    let newQty = currentQty;
    if (type === 'd' && currentQty > 1) {
      newQty = currentQty - 1;
    } else if (type === 'i' && currentQty < item.stock) {
      newQty = currentQty + 1;
    }

    dispatch(updateQuantity({ id, quantity: newQty }));
  };

  const totalSubtotal = useMemo(() => {
    return cartList.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }, [cartList]);

  return (
    <div className='absolute top-12 right-0 p-4 rounded-md shadow-[0_3px_20px_rgb(0,0,0,0.2)] z-20 flex flex-col gap-6 bg-white'>
      <div
        className='fixed top-0 left-0 h-screen bg-black/50 right-[400px]'
        onClick={handleClose}
      ></div>
      <div className='fixed top-0 right-0 w-full sm:w-[400px] h-screen bg-white p-4 flex flex-col overflow-y-auto'>
        <div className='flex items-center justify-between mb-8'>
          <div className='text-xl font-semibold'>Shopping Cart</div>
          <button
            className='rounded-md hover:bg-red-500 p-2 hover:text-white cursor-pointer'
            onClick={handleClose}
          >
            <IconX width={20} height={20} stroke={1.5} />
          </button>
        </div>
        {cartList.length <= 0 ? (
          <div className='h-full flex items-center justify-center font-semibold text-xl'>
            Cart is Empty
          </div>
        ) : (
          cartList.map((item) => (
            <div
              className='flex flex-col gap-8 mb-4 group border-b border-gray-200 pb-4'
              key={item.id}
            >
              <div className='flex gap-8'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  width={72}
                  height={96}
                  className='object-cover rounded-md'
                />
                <div className='flex flex-col justify-between w-full gap-2'>
                  <div className='flex items-center justify-between gap-8'>
                    <Link
                      to={`/product/${item.category}/${item.id}`}
                      className='font-medium leading-5 hover:text-red-500'
                      onClick={handleClose}
                    >
                      {item.title}
                    </Link>
                    <div className='p-1 font-semibold text-lg'>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                  <div className='flex items-center justify-between gap-8'>
                    <div className='bg-gray-100 border border-gray-200 px-2 rounded-md flex items-center justify-between'>
                      <button
                        className='cursor-pointer pr-2 text-xl text-blue-500 disabled:cursor-not-allowed disabled:opacity-20'
                        onClick={() => handleQuantity(item.id, 'd')}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className='px-2 bg-white rounded-md'>
                        {item.quantity}
                      </span>
                      <button
                        className='cursor-pointer pl-2 text-xl text-blue-500 disabled:cursor-not-allowed disabled:opacity-20'
                        onClick={() => handleQuantity(item.id, 'i')}
                        disabled={item.quantity === item.stock}
                      >
                        +
                      </button>
                    </div>

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
          <div className='flex justify-between items-center font-semibold text-xl'>
            <h3 className=''>Subtotal</h3>
            <div className=''>$ {totalSubtotal.toFixed(2)}</div>
          </div>
          <p className='mt-2 mb-4 text-gray-500'>
            Shipping and taxes calculated at checkout.
          </p>
          <div className='flex justify-end gap-8 text-sm'>
            <Button onClick={handleCheckout}>Check out</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
