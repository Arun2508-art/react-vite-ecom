import { IconGardenCart, IconUser } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import CartModal from './CartModal';
import Sidebar from './Sidebar';

const NavIcons = () => {
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartList } = useAppSelector((state) => state.cart);

  // const handleProfile = () => {
  //   setIsProfileOpen((prev) => !prev);
  // };

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
    <div className='flex gap-2 xl:gap-6 relative py-5'>
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
      <Link to='auth' className='cursor-pointer p-2 hover:text-red-500'>
        <IconUser stroke={1} />
      </Link>
      {/* <div className='relative'>
        <div
          className='cursor-pointer p-2 hover:text-red-500'
          onClick={handleProfile}
        >
          <IconUserCircle stroke={1} />
        </div>
        {isProfileOpen && (
          <div className='absolute p-4 rounded-md top-12 right-0 bg-white z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <Link to='/'>Profile</Link>
            <div className='mt-2 cursor-pointer'>Logout</div>
          </div>
        )}
      </div> */}
      <Sidebar />
      {isCartOpen && <CartModal hide={setIsCartOpen} />}
    </div>
  );
};

export default NavIcons;
