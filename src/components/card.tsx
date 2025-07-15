import { IconGardenCart, IconHeart } from '@tabler/icons-react';
import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, removeFromCart } from '../store/slice/cart';
import type { ProductListProps } from '../store/slice/product';
import { getOriginalPrice } from '../utils/helper';
import Button from './Button';
import StarRating from './StarRating';

interface CardProps {
  product: ProductListProps;
  className?: string;
}

const Card = ({ product, className }: CardProps) => {
  const dispatch = useAppDispatch();
  const { cartList } = useAppSelector((state) => state.cart);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCart = (item: ProductListProps) => {
    const exists = cartList.some(
      (val) => val.id === item.id && val.category === item.category
    );

    if (exists) {
      dispatch(removeFromCart({ id: item.id, category: item.category }));
    } else {
      dispatch(addToCart(item));
    }
  };

  const CardContainerClasses = classNames(
    'w-full sm:w-1/2 md:w-1/3 lg:w-1/4',
    className
  );

  return (
    <div className={CardContainerClasses}>
      <div className='bg-white border border-gray-300 m-3 rounded-lg hover:shadow-md'>
        <Link
          to={`/product/${product.category}/${product.id}`}
          className='block overflow-hidden rounded-t-lg relative'
        >
          <img
            src={product.thumbnail}
            className='w-full p-4 h-52 object-contain transition-all ease-out duration-300 hover:scale-110'
          />
          <div className='absolute top-0 right-0 p-1 rounded-bl-sm bg-red-500 text-white font-semibold text-xs'>
            {product.discountPercentage}% Off
          </div>
        </Link>
        <div className='pt-0 p-4 flex flex-col gap-2 border-t border-gray-300 group hover:bg-gray-100'>
          <div className='relative inline-block pt-4 max-w-xs'>
            <h1
              className='max-h-14 line-clamp-1 overflow-hidden cursor-pointer'
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              {product.title}
            </h1>
            {showTooltip && (
              <div className='absolute z-10 bg-gray-800 text-white text-xs rounded px-2 py-1 mt-1 whitespace-normal max-w-xs'>
                {product.title}
              </div>
            )}
          </div>
          <div className='flex justify-between gap-4'>
            <StarRating rating={product.rating} />
            <Button variant='secondary'>
              <IconHeart width={12} height={12} />
            </Button>
          </div>
          <div className='flex justify-between items-end gap-4'>
            <div className='flex items-center gap-1'>
              <h3 className='text-xl font-medium'>${product.price}</h3>
              <h3 className='text-sm line-through text-gray-500 decoration-gray-800'>
                $
                {getOriginalPrice(
                  product.price,
                  product.discountPercentage
                ).toFixed(2)}
              </h3>
            </div>
            <div className='flex items-center gap-2'>
              <Button
                variant='secondary'
                onClick={() => {
                  handleCart(product);
                }}
                active={cartList.some((item) => item.id === product.id)}
              >
                <IconGardenCart width={12} height={12} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
