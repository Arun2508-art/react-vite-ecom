import { IconHeart } from '@tabler/icons-react';
import Container from './Container';

const Header = () => {
  return (
    <Container className='hidden md:flex justify-between items-center border-b border-gray-200 py-2'>
      <div className='flex items-center gap-8'>
        <div className='font-light'>About Us</div>
        <div className='font-light'>Privacy</div>
        <div className='font-light'>FAQ</div>
        <div className='font-light'>Careers</div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2 pe-4 font-light border-r border-gray-200'>
          Wishlist
          <IconHeart width={16} height={16} stroke={1} />
        </div>
        <div className='pe-4 font-light'>Track Your Order</div>
      </div>
      {/* <div className='flex items-center gap-4'>
          <div className='hover:text-red-800'>
            <IconBrandFacebook
              stroke={1}
              strokeOpacity={0.5}
              width={16}
              height={16}
            />
          </div>
          <div className='hover:text-red-800'>
            <IconBrandInstagram
              stroke={1}
              strokeOpacity={0.5}
              width={16}
              height={16}
            />
          </div>
          <div className='hover:text-red-800'>
            <IconBrandX stroke={1} strokeOpacity={0.5} width={20} height={20} />
          </div>
          <div className='hover:text-red-800'>
            <IconBrandLinkedin
              stroke={1}
              strokeOpacity={0.5}
              width={16}
              height={16}
            />
          </div>
          <div className='hover:text-red-800'>
            <IconBrandYoutube
              stroke={1}
              strokeOpacity={0.5}
              width={16}
              height={16}
            />
          </div>
        </div> */}
    </Container>
  );
};

export default Header;
