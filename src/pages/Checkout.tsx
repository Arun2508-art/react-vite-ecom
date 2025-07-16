import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearCart } from '../store/slice/cart';
import { clearOrder } from '../store/slice/order';

const Checkout = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { orderList } = useAppSelector((state) => state.order);

  const total = useMemo(() => {
    return orderList.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }, [orderList]);

  const shippingCost: number = 5;

  const tax: number = (Number(5) || 0) * 0.02;

  const handleClick = () => {
    setOpen(true);
  };

  const handleDispatchClear = () => {
    dispatch(clearCart());
    dispatch(clearOrder());
  };

  return (
    <Container className='mb-24'>
      {orderList.length <= 0 ? (
        <div className='h-96 flex flex-col gap-10 items-center justify-center font-semibold text-xl'>
          <h3 className='font-semibold text-xl'>No Order</h3>
          <Link
            to='/'
            className='font-semibold text-sm text-blue-500 hover:underline'
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <h3 className='text-2xl font-semibold my-8'>Order Summary</h3>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-3/4 lg:px-10'>
              {orderList.map((item) => (
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
                        <div>
                          <h3 className='font-semibold'>{item.title}</h3>
                          <h6 className='text-sm text-gray-500 capitalize'>
                            {item.category}
                          </h6>
                        </div>
                        <div className='text-gray-500'>
                          Quantity: {item.quantity}
                        </div>
                      </div>
                      <div className='flex flex-col justify-between items-end'>
                        <div className='p-1 font-semibold text-xl'>
                          $ {item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='w-full h-fit lg:w-1/4 px-4 shadow-xl border border-gray-200 rounded-md pb-4'>
              <h3 className='text-xl text-red-500 font-semibold mb-4'>
                Price Summary
              </h3>
              <div className='flex flex-col gap-2 mb-4'>
                <div className='flex gap-2 items-center justify-between border-b border-gray-200 pb-3'>
                  <div className='text-gray-500 font-semibold'>Subtotal</div>
                  <div className='text-lg font-semibold'>
                    ${total.toFixed(2)}
                  </div>
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
                  <div className='font-semibold text-red-500 text-xl'>
                    Total
                  </div>
                  <div className='text-lg font-semibold'>
                    ${(total + shippingCost + tax).toFixed(2)}
                  </div>
                </div>
              </div>
              <Button className='w-full' onClick={handleClick}>
                Proceed to Pay
              </Button>
            </div>
          </div>
          {open && (
            <div
              className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
              role='dialog'
              aria-modal='true'
              aria-labelledby='payment-success-title'
            >
              <div className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center'>
                <h2
                  id='payment-success-title'
                  className='text-xl font-semibold mb-2'
                >
                  Payment Successful
                </h2>
                <p className='text-gray-700 mb-4'>Your item is on the way!</p>
                <Link
                  to='/'
                  className='inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
                  onClick={handleDispatchClear}
                >
                  Go to Home
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Checkout;
