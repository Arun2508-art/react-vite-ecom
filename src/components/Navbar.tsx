import { IconChevronDown } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from './Container';
import NavIcons from './NavIcons';

const navList = [
  { name: 'Home', href: '/' },
  { name: 'Men', href: '/men' },
  { name: 'Women', href: '/women' },
  { name: 'Electronics', href: '/electronics' },
  {
    name: 'Others',
    option: [
      { name: 'Household', href: 'others/all-household' },
      { name: 'Life Style', href: 'others/all-lifestyle' },
      { name: 'Motor', href: 'others/all-motor' },
      { name: 'Sports', href: 'others/all-sports' }
    ]
  }
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const triggerHeight = 100;
      setIsSticky(offset > triggerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='border-b border-gray-300 bg-white'>
      <Container
        className={`${
          isSticky
            ? 'fixed top-0 left-0 right-0 w-full animate-fadeInDown shadow-xl'
            : ''
        } bg-white z-50 `}
      >
        <div className='flex items-center justify-between gap-8 h-full'>
          <div className='flex items-center gap-12 p-2 focus-visible:outline-none'>
            {!isSticky && (
              <Link
                to='/'
                className='flex items-center gap-3 focus-visible:outline-none'
              >
                <img src='/loder.webp' alt='logo' width={45} height={45} />
                <div className='text-2xl tracking-wide uppercase font-semibold'>
                  Mathi
                </div>
              </Link>
            )}
          </div>

          <ul className='hidden lg:flex items-center gap-4 px-4'>
            {navList.map((item) => {
              if (item.option) {
                const isActiveSubmenu = location.pathname.includes('other');

                return (
                  <li key={item.name} className='relative group'>
                    <div
                      className={`${
                        isSticky ? 'py-3' : 'py-7'
                      } px-3 font-semibold flex items-center gap-1 cursor-pointer hover:text-red-500 ${
                        isActiveSubmenu
                          ? 'text-red-500 border-b-2 border-red-500'
                          : ''
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className='mt-1'>
                        <IconChevronDown
                          width={14}
                          height={14}
                          stroke={3}
                          className='group-hover:rotate-180 transition-all ease-in-out duration-300'
                        />
                      </span>
                    </div>
                    <ul className='shadow-md opacity-0 invisible mt-0.5 group-hover:visible group-hover:opacity-100 group-hover:top-full absolute top-1/2 w-45 bg-white p-4 z-50 rounded-md border-t-2 border-red-500 transition-all ease-out duration-300'>
                      {item.option.map((sublist) => (
                        <li key={sublist.name}>
                          <NavLink
                            to={sublist.href || ''}
                            className={({ isActive }) =>
                              `px-1 py-2 font-semibold hover:text-red-500 hover:tracking-wide block transition-all ease-out duration-300 ${
                                isActive ? 'text-red-500' : ''
                              }`
                            }
                          >
                            {sublist.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <li>
                    <NavLink
                      to={item.href || ''}
                      className={({ isActive }) =>
                        `${
                          isSticky ? 'py-3' : 'py-7'
                        } px-3 font-semibold hover:text-red-500 transition-colors ${
                          isActive
                            ? 'text-red-500 border-b-2 border-red-500'
                            : ''
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>

          <div className='flex items-center justify-between gap-8 text-primary'>
            {/* <SearchBar /> */}
            <NavIcons active={isSticky} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
