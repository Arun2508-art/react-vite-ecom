import { IconBell, IconGardenCart, IconUser } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardModal from './CardModal';

const NavIcons = () => {
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // const handleProfile = () => {
  //   setIsProfileOpen((prev) => !prev);
  // };

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className='flex gap-2 xl:gap-6 relative'>
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
      <div className='cursor-pointer p-2 hover:text-red-500'>
        <IconBell stroke={1} />
      </div>
      <div
        className='relative cursor-pointer p-2 hover:text-red-500'
        onClick={handleCart}
      >
        <span>
          <IconGardenCart stroke={1} />
        </span>
        <div className='absolute top-1 right-0 w-4 h-4 bg-yellow-300 rounded-full flex items-center justify-center text-xs font-bold'>
          2
        </div>
      </div>
      {isCartOpen && <CardModal hide={setIsCartOpen} />}
    </div>
  );
};

export default NavIcons;
