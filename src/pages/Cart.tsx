import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeFromCart } from '../store/slice/cart';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cartList } = useAppSelector((state) => state.cart);

  const [quantity, setQuantity] = useState<{ [id: number]: number }>({});

  const handleRemove = (id: number, category: string) => {
    dispatch(removeFromCart({ id, category }));
  };

  const handleQuantity = (id: number, type: 'i' | 'd') => {
    setQuantity((prev) => {
      if (type === 'd' && prev[id] > 1) {
        return { ...prev, [id]: prev[id] - 1 };
      } else if (type === 'i') {
        return { ...prev, [id]: prev[id] + 1 };
      }
      return prev;
    });
  };

  const totalSubtotal = useMemo(() => {
    return cartList.reduce((sum, item) => {
      console.log(sum, item);
      const qty = quantity[item.id] ?? 1;
      return sum + item.price * qty;
    }, 0);
  }, [cartList, quantity]);

  const shippingCost: number = 5;

  const tax: number = (Number(totalSubtotal) || 0) * 0.02;

  useEffect(() => {
    const initialQuantities = cartList.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {} as { [id: number]: number });
    setQuantity(initialQuantities);
  }, [cartList]);

  return (
    <Container className='mb-24'>
      <h3 className='text-2xl font-semibold my-8'>Shopping Cart</h3>
      {cartList.length <= 0 ? (
        <>
          <div className='h-96 flex flex-col gap-10 items-center justify-center font-semibold text-xl'>
            <h3 className='font-semibold text-xl'>Cart is Empty</h3>
            <Link
              to='/'
              className='font-semibold text-sm text-blue-500 hover:underline'
            >
              Continue Shopping
            </Link>
          </div>
        </>
      ) : (
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-3/4 lg:px-10'>
            {cartList.map((item) => (
              <div
                className='flex flex-col gap-8 mb-4 pb-4 border-b border-gray-200'
                key={item.id}
              >
                <div className='flex gap-8'>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    width={96}
                    height={96}
                    className='rounded-md'
                  />
                  <div className='flex justify-between w-full'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='font-semibold'>{item.title}</h3>
                      <h6 className='text-sm text-gray-500 capitalize'>
                        {item.category}
                      </h6>
                      <div className='flex items-center justify-between gap-8'>
                        <div className='bg-gray-200 py-1 px-3 rounded-md flex items-center justify-between w-32'>
                          <button
                            className='cursor-pointer text-xl text-blue-500 disabled:cursor-not-allowed disabled:opacity-20'
                            onClick={() => handleQuantity(item.id, 'd')}
                            disabled={quantity[item.id] === 1}
                          >
                            -
                          </button>
                          {quantity[item.id]}
                          <button
                            className='cursor-pointer text-xl text-blue-500 disabled:cursor-not-allowed disabled:opacity-20'
                            onClick={() => handleQuantity(item.id, 'i')}
                            disabled={quantity[item.id] === item.stock}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col justify-between items-end'>
                      <div className='p-1 font-semibold text-xl'>
                        ${(item.price * quantity[item.id]).toFixed(2)}
                      </div>
                      <div
                        className='text-blue-500 hover:text-red-500 cursor-pointer'
                        onClick={() => {
                          handleRemove(item.id, item.category);
                        }}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full h-fit lg:w-1/4 px-4 shadow-2xl pb-4'>
            <h3 className='text-xl text-red-500 font-semibold mb-4'>
              Price Summary
            </h3>
            <div className='flex flex-col gap-2 mb-4'>
              <div className='flex gap-2 items-center justify-between border-b border-gray-200 pb-3'>
                <div className='text-gray-500 font-semibold'>Subtotal</div>
                <div className='text-lg font-semibold'>${totalSubtotal}</div>
              </div>
              <div className='flex gap-2 items-center justify-between border-b border-gray-200 pb-3'>
                <div className='text-gray-500 font-semibold'>Shipping</div>
                <div className='text-lg font-semibold'>${shippingCost}</div>
              </div>
              <div className='flex gap-2 items-center justify-between border-b border-gray-200 pb-3'>
                <div className='text-gray-500 font-semibold'>Tax</div>
                <div className='text-lg font-semibold'>${tax.toFixed(2)}</div>
              </div>
              <div className='flex gap-2 items-center justify-between my-6'>
                <div className='font-semibold text-red-500 text-xl'>Total</div>
                <div className='text-lg font-semibold'>
                  ${(totalSubtotal + shippingCost + tax).toFixed(2)}
                </div>
              </div>
            </div>
            <Button className='w-full'>Checkout</Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
