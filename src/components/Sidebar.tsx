import { IconMenu2, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='block lg:hidden '>
      <div
        className='cursor-pointer p-2 hover:text-red-500'
        onClick={() => setOpen((prev) => !prev)}
      >
        <IconMenu2 stroke={1} />
      </div>
      {/* Left Sidebar (Slide In/Out) */}
      <div
        className={`fixed top-0 left-0 h-screen w-0 sm:w-[calc(100%-400px)] bg-black/50 z-50 transition-all ease-linear duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      />

      {/* Right Sidebar (Static) */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[400px] z-50 bg-white transition-all ease-linear duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between gap-3 p-4 border-b border-gray-200'>
          <img src='/loder.webp' alt='logo' width={45} height={45} />
          <button
            className='rounded-md hover:bg-red-500 p-2 hover:text-white cursor-pointer'
            onClick={handleClose}
          >
            <IconX width={24} height={24} stroke={1.5} />
          </button>
        </div>
        <div className='flex flex-col gap-4 mt-6 pb-4 font-semibold px-4'>
          <Link onClick={handleClose} to='/men'>
            Men
          </Link>
          <Link onClick={handleClose} to='/women'>
            Women
          </Link>
          <Link onClick={handleClose} to='/electronics'>
            Electronics
          </Link>
          <Link onClick={handleClose} to='/others/all-household'>
            Household
          </Link>
          <Link onClick={handleClose} to='/others/all-lifestyle'>
            Life Style
          </Link>
          <Link onClick={handleClose} to='/others/all-motor'>
            Motor
          </Link>
          <Link onClick={handleClose} to='/others/all-sports'>
            Sport
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
