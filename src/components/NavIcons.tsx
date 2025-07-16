import { IconGardenCart, IconUserCircle } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import CartModal from './CartModal';
import Sidebar from './Sidebar';

const NavIcons = ({ active }: { active: boolean }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartList } = useAppSelector((state) => state.cart);

  const handleProfile = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <div className={`flex gap-2 xl:gap-6 relative ${active ? 'py-1' : 'py-5'}`}>
      <div
        className='relative cursor-pointer p-2 hover:text-red-500'
        onClick={handleCart}
      >
        <span>
          <IconGardenCart stroke={1} />
        </span>
        {cartList.length > 0 && (
          <div className='absolute top-1 right-0 w-4 h-4 bg-yellow-300 rounded-full flex items-center justify-center text-xs font-bold'>
            {cartList.length}
          </div>
        )}
      </div>
      <div className='relative'>
        <div
          className='cursor-pointer p-2 hover:text-red-500'
          onClick={handleProfile}
        >
          <IconUserCircle stroke={1} />
        </div>
        {isLoggedIn && (
          <div className='absolute p-4 border-t border-red-500 rounded-md top-12 right-0 bg-white z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <div className='whitespace-nowrap px-3 pb-2'>Arun Kumar</div>
          </div>
        )}
      </div>
      <Sidebar />
      {isCartOpen && <CartModal hide={setIsCartOpen} />}
    </div>
  );
};

export default NavIcons;
